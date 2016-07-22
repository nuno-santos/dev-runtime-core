import {divideURL, emptyObject} from '../utils/utils';

class Loader {

  /**
   * Set runtime url
   * @param  {string} value runtimeURL
   */
  set runtimeURL(value) {
    this._runtimeURL = value;
  }

  /**
   * Get runtime url
   * @return {string} value runtimeURL
   */
  get runtimeURL() {
    return this._runtimeURL;
  }

  /**
   * Set Registry component
   * @param  {Registry} value Registry Component
   */
  set registry(value) {
    this._registry = value;
  }

  /**
   * Get Registry component
   * @return {Registry} Registry component
   */
  get registry() {
    return this._registry;
  }

  /**
   * Set Runtime Catalogue Component
   * @param  {RuntimeCatalogue} value runtime catalogue component
   */
  set runtimeCatalogue(value) {
    this._runtimeCatalogue = value;
  }

  /**
   * Get Runtime Catalogue component
   * @return {RuntimeCatalogue} Runtime Catalogue component
   */
  get runtimeCatalogue() {
    return this._runtimeCatalogue;
  }

  /**
   * Set Message Bus component
   * @param  {MessageBus} value Message bus component
   */
  set messageBus(value) {
    this._messagesBus = value;
  }

  /**
   * Get Message Bus component
   * @return {MessageBus} Message Bus component
   */
  get messageBus() {
    return this._messagesBus;
  }

  /**
   * Set Runtime Factory component
   * @param  {runtimeFactory} value Factory includes the specific implementations for each environment
   */
  set runtimeFactory(value) {
    this._runtimeFactory = value;
  }

  /**
   * Get Runtime Factory component
   * @return {runtimeFactory} Runtime Factory component
   */
  get runtimeFactory() {
    return this._runtimeFactory;
  }

  /**
  * Deploy Hyperty from Catalogue URL
  * @param  {URL.HypertyCatalogueURL}    hyperty hypertyDescriptor url;
  */
  loadHyperty(hypertyDescriptorURL) {

    if (!this._readyToUse()) return false;
    if (!hypertyDescriptorURL) throw new Error('Hyperty descriptor url parameter is needed');

    return new Promise((resolve, reject) => {

      let _hypertyURL;
      let _hypertySandbox;
      let _hypertyDescriptor;
      let _hypertySourcePackage;
      let haveError = false;

      let errorReason = (reason) => {
        console.error('Something failed on the deploy hyperty: ', reason);
        reject(reason);
      };

      let handleError = (reason) => {
        haveError = true;
        reject(reason);
      };

      // Get Hyperty descriptor
      // TODO: the request Module should be changed,
      // because at this moment it is incompatible with nodejs;
      // Probably we need to pass a factory like we do for sandboxes;
      console.info('------------------ Hyperty ------------------------');
      console.info('Get hyperty descriptor for :', hypertyDescriptorURL);
      return this.runtimeCatalogue.getHypertyDescriptor(hypertyDescriptorURL)
      .then((hypertyDescriptor) => {
        // at this point, we have completed "step 2 and 3" as shown in https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md
        console.info('1: return hyperty descriptor');

        // hyperty contains the full path of the catalogue URL, e.g.
        // catalogue.rethink.eu/.well-known/..........
        _hypertyDescriptor = hypertyDescriptor;

        let sourcePackageURL = hypertyDescriptor.sourcePackageURL;

        if (sourcePackageURL === '/sourcePackage') {
          return hypertyDescriptor.sourcePackage;
        }

        // Get the hyperty source code
        return this.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
      }, handleError)
      .then((sourcePackage) => {
        if (haveError) return false;

        console.info('2: return hyperty source code');

        // at this point, we have completed "step 4 and 5" as shown in https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md

        _hypertySourcePackage = sourcePackage;

        //
        // steps 6 -- 9 are skipped.
        // TODO: on release of core 0.2;
        // TODO: Promise to check the policy engine

        // mock-up code;
        // temporary code, only
        let policy = true;

        return policy;
      }, handleError)
      .then((policyResult) => {
        if (haveError) return false;
        console.info('3: return policy engine result' + policyResult);

        // we have completed step 6 to 9 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
        //
        // Steps 6 -- 9
        // As a result of the sipped steps, we know at this point if we execute
        // inSameSandbox or not.
        //

        // For testing, just assume we execute in same Sandbox.
        let inSameSandbox = true;
        let sandbox;

        if (inSameSandbox) {

          // this don't need be a Promise;
          sandbox = this.registry.getAppSandbox();

          // we have completed step 11 here.
        } else {

          let domain = divideURL(hypertyDescriptorURL).domain;

          // getSandbox, this will return a promise;
          sandbox = this.registry.getSandbox(domain);
        }

        // this will return the sandbox or one promise to getSandbox;
        return sandbox;
      }, handleError)
      .then((sandbox) => {
        if (haveError) return false;
        console.info('4: return the sandbox', sandbox);

        // Return the sandbox indepentely if it running in the same sandbox or not
        // we have completed step 14 here.
        return sandbox;
      }, (reason) => {
        if (haveError) return false;
        console.error('4.1: Try to register a new sandbox');

        // check if the sandbox is registed for this hyperty descriptor url;
        // Make Steps xxx --- xxx
        // Instantiate the Sandbox
        let sandbox = this._runtimeFactory.createSandbox();

        sandbox.addListener('*', (msg) => {
          this.messageBus.postMessage(msg);
        });

        return sandbox;
      }, handleError)
      .then((sandbox) => {
        if (haveError) return false;
        console.info('5: return sandbox and register');

        _hypertySandbox = sandbox;

        // Register hyperty
        return this.registry.registerHyperty(sandbox, hypertyDescriptorURL, _hypertyDescriptor);
      }, handleError)
      .then((hypertyURL) => {
        if (haveError) return false;
        console.info('6: Hyperty url, after register hyperty', hypertyURL);

        // we have completed step 16 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
        _hypertyURL = hypertyURL;

        // Extend original hyperty configuration;
        let configuration = {};
        if (!emptyObject(_hypertyDescriptor.configuration)) {
          try {
            configuration = Object.assign({}, JSON.parse(_hypertyDescriptor.configuration));
          } catch (e) {
            configuration = _hypertyDescriptor.configuration;
          }
        }
        configuration.runtimeURL = this._runtimeURL;

        // We will deploy the component - step 17 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
        return _hypertySandbox.deployComponent(_hypertySourcePackage.sourceCode, _hypertyURL, configuration);
      }, handleError)
      .then((deployComponentStatus) => {
        if (haveError) return false;
        console.info('7: Deploy component status for hyperty: ', deployComponentStatus);

        // we have completed step 19 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.

        // Add the message bus listener to the appSandbox or hypertSandbox;
        this.messageBus.addListener(_hypertyURL, (msg) => {
          _hypertySandbox.postMessage(msg);
        });

        // we have completed step 20 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
        let hyperty = {
          runtimeHypertyURL: _hypertyURL,
          status: deployComponentStatus
        };

        resolve(hyperty);

        // we have completed step 21 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
        console.info('------------------ END ------------------------');
      }, handleError)
      .catch(errorReason);
    });
  }

  /**
  * Deploy Stub from Catalogue URL or domain url
  * @param  {URL.URL}     domain          domain
  */
  loadStub(protostubURL) {

    if (!this._readyToUse()) return false;
    if (!protostubURL) throw new Error('ProtoStub descriptor url parameter is needed');

    return new Promise((resolve, reject) => {

      let domain = divideURL(protostubURL).domain;

      if (!domain) {
        domain = protostubURL;
      }

      let _stubSandbox;
      let _stubDescriptor;
      let _runtimeProtoStubURL;
      let _stubSourcePackage;
      let haveError = false;

      let errorReason = (reason) => {
        console.error('Something failed on the deploy of protocolstub: ', reason);
        reject(reason);
      };

      let handleError = (reason) => {
        haveError = true;
        reject(reason);
      };

      // Discover Protocol Stub
      console.info('------------------- ProtoStub ---------------------------\n');
      console.info('Discover or Create a new ProtoStub for domain: ', domain);
      this.registry.discoverProtostub(domain).then((runtimeProtoStubURL) => {
        // Is registed?
        console.info('1. Proto Stub Discovered: ', runtimeProtoStubURL);

        // we have completed step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

        // TODO: Check if the status is saved in the status of sandbox;
        let stub = {
          runtimeProtoStubURL: runtimeProtoStubURL,
          status: 'deployed'
        };

        resolve(stub);
        console.info('------------------- END ---------------------------\n');
      })
      .catch((reason) => {

        // is not registed?
        console.info('1. Proto Stub not found ' + reason);

        // we have completed step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

        // we need to get ProtoStub descriptor step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
        this.runtimeCatalogue.getStubDescriptor(protostubURL)
        .then((stubDescriptor) => {
          if (haveError) return false;
          console.info('2. return the ProtoStub descriptor');

          // we have completed step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          _stubDescriptor = stubDescriptor;

          let sourcePackageURL = stubDescriptor.sourcePackageURL;

          if (sourcePackageURL === '/sourcePackage') {
            return stubDescriptor.sourcePackage;
          }

          // we need to get ProtoStub Source code from descriptor - step 6 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          return this.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
        }, handleError)
        .catch(errorReason)
        .then((stubSourcePackage) => {
          if (haveError) return false;
          console.info('3. return the ProtoStub Source Code');

          // we have completed step 7 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          _stubSourcePackage = stubSourcePackage;

          // TODO: Check on PEP (policy Engine) if we need the sandbox and check if the Sandbox Factory have the context sandbox;
          let policy = true;
          return policy;
        }, handleError)
        .then((policy) => {
          if (haveError) return false;

          // this will return the sandbox or one promise to getSandbox;
          return this.registry.getSandbox(domain);
        })
        .then((stubSandbox) => {
          if (haveError) return false;
          console.info('4. if the sandbox is registered then return the sandbox ', stubSandbox);

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          _stubSandbox = stubSandbox;
          return stubSandbox;
        })
        .catch((reason) => {
          if (haveError) return false;
          console.info('5. Sandbox was not found, creating a new one ', reason);

          // check if the sandbox is registed for this stub descriptor url;
          // Make Steps xxx --- xxx
          // Instantiate the Sandbox
          let sandbox = this._runtimeFactory.createSandbox();
          sandbox.addListener('*', (msg) => {
            this.messageBus.postMessage(msg);
          });

          return sandbox;
        })
        .then((sandbox) => {
          if (haveError) return false;
          console.info('6. return the sandbox instance and register', sandbox, 'to domain ', domain);

          _stubSandbox = sandbox;

          // we need register stub on registry - step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          return this.registry.registerStub(_stubSandbox, domain);
        }, handleError)
        .then((runtimeProtoStubURL) => {
          if (haveError) return false;
          console.info('7. return the runtime protostub url: ', runtimeProtoStubURL);

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          _runtimeProtoStubURL = runtimeProtoStubURL;

          // Extend original hyperty configuration;
          let configuration = {};
          if (!emptyObject(_stubDescriptor.configuration)) {
            try {
              configuration = Object.assign({}, JSON.parse(_stubDescriptor.configuration));
            } catch (e) {
              configuration = _stubDescriptor.configuration;
            }
          }

          configuration.runtimeURL = this._runtimeURL;

          // Deploy Component step xxx
          return _stubSandbox.deployComponent(_stubSourcePackage.sourceCode, runtimeProtoStubURL, configuration);
        }, handleError)
        .then((deployComponentStatus) => {
          if (haveError) return false;
          console.info('8: return deploy component for sandbox status: ', deployComponentStatus);

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // Add the message bus listener
          this.messageBus.addListener(_runtimeProtoStubURL, (msg) => {
            _stubSandbox.postMessage(msg);
          });

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // Load Stub function resolved with success;
          let stub = {
            runtimeProtoStubURL: _runtimeProtoStubURL,
            status: deployComponentStatus
          };

          resolve(stub);
          console.info('------------------- END ---------------------------\n');

        }, handleError)
        .catch(errorReason);

      });

    });

  }

  /**
  * Deploy idpProxy from Catalogue URL or domain url
  * @param  {URL.URL}     domain          domain
  */
  loadIdpProxy(idpProxyURL) {

    if (!this._readyToUse()) return false;
    if (!idpProxyURL) throw new Error('IdpProxy descriptor url parameter is needed');

    return new Promise((resolve, reject) => {

      let domain = divideURL(idpProxyURL).domain;

      if (!domain) {
        domain = idpProxyURL;
      }

      let _proxySandbox;
      let _proxyDescriptor;
      let _runtimeIdpProxyURL;
      let _proxySourcePackage;
      let haveError = false;

      let errorReason = (reason) => {
        console.error('Something failed on the deploy of IdpProxy: ', reason);
        reject(reason);
      };

      let handleError = (reason) => {
        haveError = true;
        reject(reason);
      };

      // Discover IDPProxy
      console.info('------------------- IDP Proxy Deploy ---------------------------\n');
      console.info('Discover or Create a new IdpProxy for domain/URL: ', domain);
      return this.registry.discoverIdpProxy(domain)
      .then((runtimeIdpProxyURL) => {
        // Is registed?
        console.info('1. IDPProxy Discovered: ', runtimeIdpProxyURL);

        // we have completed step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

        // TODO: Check if the status is saved in the status of sandbox;
        let idpProxy = {
          runtimeIdpProxyURL: runtimeIdpProxyURL,
          status: 'deployed'
        };

        resolve(idpProxy);
        console.info('------------------- END ---------------------------\n');
      })
      .catch((reason) => {

        // is not registed?
        console.info('1. IdpProxy not found:', reason);

        // we have completed step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

        // we need to get ProtoStub descriptor step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
        this.runtimeCatalogue.getIdpProxyDescriptor(idpProxyURL)
        .then((proxyDescriptor) => {

          console.info('2. Return the IDPProxy descriptor');

          // we have completed step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          _proxyDescriptor = proxyDescriptor;

          let sourcePackageURL = proxyDescriptor.sourcePackageURL;

          if (sourcePackageURL === '/sourcePackage') {
            return proxyDescriptor.sourcePackage;
          }

          // we need to get ProtoStub Source code from descriptor - step 6 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          return this.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
        }, handleError)
        .then((sourcePackage) => {
          if (haveError) return false;
          console.info('3. return the IDPProxy source package');

          // we have completed step 7 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          _proxySourcePackage = sourcePackage;

          // TODO: Check on PEP (policy Engine) if we need the sandbox and check if the Sandbox Factory have the context sandbox;
          let policy = true;
          return policy;
        }, handleError)
        .then((policy) => {
          if (haveError) return false;

          // this will return the sandbox or one promise to getSandbox;
          return this.registry.getSandbox(domain);
        })
        .then((proxySandbox) => {
          if (haveError) return false;
          console.info('4. if the sandbox is registered then return the sandbox', proxySandbox);

          _proxySandbox = proxySandbox;
          return proxySandbox;
        })
        .catch((reason) => {
          if (haveError) return false;
          console.info('5. Sandbox was not found, creating a new one', reason);

          // check if the sandbox is registed for this proxy descriptor url;
          // Make Steps xxx --- xxx
          // Instantiate the Sandbox
          let sandbox = this._runtimeFactory.createSandbox();
          sandbox.addListener('*', (msg) => {
            this.messageBus.postMessage(msg);
          });

          return sandbox;
        })
        .then((sandbox) => {
          if (haveError) return false;
          console.info('6. return the sandbox instance and register', sandbox, 'to domain ', domain);

          _proxySandbox = sandbox;

          // we need register stub on registry - step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          return this.registry.registerIdpProxy(sandbox, domain);
        }, handleError)
        .then((runtimeIdpProxyURL) => {
          if (haveError) return false;
          console.info('7. Return the runtime Idp Proxy URL: ', runtimeIdpProxyURL);

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          _runtimeIdpProxyURL = runtimeIdpProxyURL;

          // Extend original hyperty configuration;
          let configuration = {};
          if (!emptyObject(_proxyDescriptor.configuration)) {
            try {
              configuration = Object.assign({}, JSON.parse(_proxyDescriptor.configuration));
            } catch (e) {
              configuration = _proxyDescriptor.configuration;
            }
          }
          configuration.runtimeURL = this._runtimeURL;

          // Deploy Component step xxx
          return _proxySandbox.deployComponent(_proxySourcePackage.sourceCode, runtimeIdpProxyURL, configuration);
        }, handleError)
        .then((deployComponentStatus) => {
          if (haveError) return false;
          console.info('8: return deploy component for sandbox status: ', deployComponentStatus);

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // Add the message bus listener
          this.messageBus.addListener(_runtimeIdpProxyURL, (msg) => {
            _proxySandbox.postMessage(msg);
          });

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // Load Stub function resolved with success;
          let idpProxy = {
            runtimeIdpProxyURL: _runtimeIdpProxyURL,
            status: deployComponentStatus
          };

          resolve(idpProxy);
          console.info('------------------- END ---------------------------\n');

        }, handleError)
        .catch(errorReason);
      });

    });
  }

  // Check if the loader is ready to load all components
  _readyToUse() {

    let status = false;

    if (!this._runtimeURL) throw new Error('The loader need the runtime url address');
    if (!this._messagesBus) throw new Error('The loader need the messageBus component');
    if (!this._runtimeCatalogue) throw new Error('The loader need the runtimeCatalogue component');
    if (!this._registry) throw new Error('The loader need the registry component');
    if (!this._runtimeFactory) throw new Error('The loader need the runtime factory component');

    status = true;
    return status;
  }

}

export default Loader;