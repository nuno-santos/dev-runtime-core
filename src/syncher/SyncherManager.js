import { divideURL } from '../utils/utils';
import ObjectAllocation from './ObjectAllocation';
import ReporterObject from './ReporterObject';
import ObserverObject from './ObserverObject';

/**
 * @author micaelpedrosa@gmail.com
 * Core Syncronization system.
 */
class SyncherManager {
  /* private
  _url: URL
  _bus: MiniBus
  _registry: Registry
  _allocator: ObjectAllocation

  _reporters: { ObjectURL: ReporterObject }
  _observers: { ObjectURL: ObserverObject }
  */

  constructor(runtimeURL, bus, registry, catalog, allocator) {
    let _this = this;

    _this._bus = bus;
    _this._registry = registry;
    _this._catalog = catalog;

    //TODO: these should be saved in persistence engine?
    _this._url = runtimeURL + '/sm';
    _this._objectURL = runtimeURL + '/object-allocation';

    _this._reporters = {};
    _this._observers = {};

    //TODO: this should not be hardcoded!
    _this._domain = divideURL(runtimeURL).domain;

    if (allocator) {
      _this._allocator = allocator;
    } else {
      _this._allocator = new ObjectAllocation(_this._objectURL, bus);
    }

    bus.addListener(_this._url, (msg) => {
      console.log('SyncherManager-RCV: ', msg);
      switch (msg.type) {
        case 'create': _this._onCreate(msg); break;
        case 'delete': _this._onDelete(msg); break;
        case 'subscribe': _this._onLocalSubscribe(msg); break;
        case 'unsubscribe': _this._onLocalUnSubscribe(msg); break;
      }
    });
  }

  get url() { return this._url; }

  _onCreate(msg) {
    let _this = this;
    let owner = msg.from;
    let domain = divideURL(msg.from).domain;

    //TODO: 5-7 authorizeObjectCreation(owner, obj ???? )
    //TODO: other optional steps

    //get schema from catalogue and parse -> (scheme, children)
    _this._catalog.getDataSchemaDescriptor(msg.body.schema).then((descriptor) => {
      let properties = descriptor.sourcePackage.sourceCode.properties;
      let scheme = properties.scheme ? properties.scheme.constant : 'resource';
      let childrens = properties.children ? properties.children.constant : [];

      _this._allocator.create(domain, scheme, childrens, 1).then((allocated) => {
        //TODO: get address from address allocator ?
        let objURL = allocated[0];
        let objSubscriptorURL = objURL + '/subscription';

        _this._reporters[objURL] = new ReporterObject(_this._bus, owner, objURL, childrens);

        //all ok, send response
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: owner,
          body: { code: 200, resource: objURL, childrenResources: childrens }
        });

        //send create to all observers, responses will be deliver to the Hyperty owner?
        setTimeout(() => {
          //schedule for next cycle needed, because the Reporter should be available.
          msg.body.authorise.forEach((hypertyURL) => {
            _this._bus.postMessage({
              type: 'create', from: objSubscriptorURL, to: hypertyURL,
              body: { source: msg.from, value: msg.body.value, schema: msg.body.schema }
            });
          });
        });

      });
    }).catch((reason) => {
      _this._bus.postMessage({
        id: msg.id, type: 'response', from: msg.to, to: owner,
        body: { code: 500, desc: reason }
      });
    });
  }

  _onDelete() {
    let _this = this;

    //TODO: where to get objectURL ?
    let objURL = '<objURL>';

    let object = _this._reporters[objURL];
    if (object) {
      object.release();

      //TODO: destroy object in the registry?
    }
  }

  _onLocalSubscribe(msg) {
    let _this = this;

    let hypertyURL = msg.from;
    let domain = divideURL(hypertyURL).domain;
    let objURL = msg.body.resource;
    let objURLSubscription = objURL + '/subscription';

    //get schema from catalogue and parse -> (children)
    _this._catalog.getDataSchemaDescriptor(msg.body.schema).then((descriptor) => {
      let properties = descriptor.sourcePackage.sourceCode.properties;
      let childrens = properties.children ? properties.children.constant : [];

      //subscribe msg for the domain node
      let nodeSubscribeMsg = {
        type: 'subscribe', from: _this._url, to: 'domain://msg-node.' + domain + '/sm',
        body: { resource: objURL, childrenResources: childrens, schema: msg.body.schema }
      };

      //subscribe in msg-node
      _this._bus.postMessage(nodeSubscribeMsg, (reply) => {
        console.log('node-subscribe-response: ', reply);
        if (reply.body.code === 200) {

          //send provisional response
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: hypertyURL,
            body: { code: 100, childrenResources: childrens }
          });

          let objSubscribeMsg = {
            type: 'subscribe', from: _this._url, to: objURLSubscription,
            body: { subscriber: hypertyURL }
          };

          //subscribe to reporter SM
          _this._bus.postMessage(objSubscribeMsg, (reply) => {
            console.log('reporter-subscribe-response: ', reply);
            if (reply.body.code === 200) {

              let observer = _this._observers[objURL];
              if (!observer) {
                observer = new ObserverObject(_this._bus, objURL);
                _this._observers[objURL] = observer;
              }

              observer.addSubscription(hypertyURL, childrens);

              //forward to hyperty:
              reply.id = msg.id;
              reply.from = _this._url;
              reply.to = hypertyURL;
              this._bus.postMessage(reply);
            }
          });

        } else {
          //listener rejected
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: hypertyURL,
            body: reply.body
          });
        }
      });
    });
  }

  _onLocalUnSubscribe(msg) {
    let _this = this;

    let hypertyURL = msg.from;
    let domain = divideURL(hypertyURL).domain;
    let objURL = msg.body.resource;
    let objURLSubscription = objURL + '/subscription';

    let observer = _this._observers[objURL];
    if (observer) {
      observer.unsubscribe(hypertyURL);

      //TODO: remove Object if no more subscription ?

      //unsubscribe msg for the domain node
      _this._bus.postMessage({
        type: 'unsubscribe', from: _this._url, to: 'domain://msg-node.' + domain + '/sm',
        body: { resource: objURL }
      });

      //unsubscribe msg for the Reporter SM
      _this._bus.postMessage({
        type: 'unsubscribe', from: _this._url, to: objURLSubscription,
        body: { resource: objURL }
      });
    }
  }

}

export default SyncherManager;
