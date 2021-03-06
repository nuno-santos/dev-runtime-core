import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import MessageBus from '../src/bus/MessageBus';

chai.config.truncateThreshold = 0;

let expect = chai.expect;
chai.use(chaiAsPromised);

import IdentityModule from '../src/identity/IdentityModule';
import { runtimeFactory } from './resources/runtimeFactory';

let storageManager = runtimeFactory.storageManager();
let persistenceManager = runtimeFactory.persistenceManager();
let runtimeURL = 'hyperty-runtime://csp.com/123';

let msgbus = {
  postMessage: (msg, callback) => {
    let createMsg = {
      type: 'create',
      from: 'hyperty-runtime://csp.com/123/idm',
      to: 'hyperty-runtime://csp.com/123/identity-gui',
      body: {value: {identities: [], idps: ['google.com', 'microsoft.com', 'orange.fr']}}
    };

    let responseMsg = {
      type: 'response',
      from: 'hyperty-runtime://csp.com/123/idm',
      to: 'hyperty-runtime://csp.com/123/identity-gui',
      body: {value: {identities: [], idps: ['google.com', 'microsoft.com', 'orange.fr']}}
    };

    let executeMsg = {
      type: 'execute',
      from: 'hyperty-runtime://csp.com/123/idm',
      to: 'hyperty-runtime://csp.com/123/identity-gui',
      body: { resource: 'identity', method: 'openPopup', params: {urlreceived: 'url'}}
    };

    expect(msg.type).to.be.oneOf([createMsg.type, executeMsg.type, responseMsg.type]);

    if (msg.type === createMsg.type) {

      expect(msg).to.eql(createMsg);

      callback({
        id: 1, type: 'response', from: 'hyperty-runtime://csp.com/123/identity-gui', to: 'hyperty-runtime://csp.com/123/idm',
        body: {type: 'idp', value: 'google.com', code: 200}
      });
    }
  },

  addListener: (url, callback) => {
    expect(url).to.eql('hyperty-runtime://csp.com/123/idm');
  }
};

let identityModule = new IdentityModule(runtimeURL, 'runtimeCapabilities', storageManager);

identityModule.messageBus = msgbus;

describe('IdentityModule', function() {

  describe('constructor()', function() {

    it('successfully instantiated', function() {
      expect(identityModule).to.be.instanceof(IdentityModule);
    });
  });

  describe('getIdentitiesToChoose()', function() {

    //not expected to have initially an identity registered
    let expectedInfo = {
      identities: [],
      idps: [{ domain: 'google.com', type: 'idToken' },
            { domain: 'microsoft.com', type: 'idToken' },
            { domain: 'orange.fr', type: 'idToken' },
            { domain: 'slack.com', type: 'Legacy' }]
    };

    it('should return a list of IdPs and a list of identities previously registered', () => {
      expect(identityModule.getIdentitiesToChoose()).to.be.eql(expectedInfo);
    });
  });

  /*describe('requestIdentityToGUI(identities, idps)', () => {

    let idInfo = identityModule.getIdentitiesToChoose();

    // the fake gui, will choose the first idp on the list
    let expectedValue = {type: 'idp', value: 'google.com'};

    it('should return the first idp on the list', (done) => {

      expect(identityModule.requestIdentityToGUI(idInfo.identities, idInfo.idps).then((value) => {
        return value;
      })).to.be.fulfilled.and.eventually.to.be.eql(expectedValue).and.notify(done);
    });

  });*/

  //TODO complete with encryptMessage() and decryptMessage()
  /*describe('encryptMessage()', function() {

    it('successfully instantiated', function() {
      expect(identityModule).to.be.instanceof(IdentityModule);
    });
  });*/
});
