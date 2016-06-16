import Context from '../Context';
import {divideURL} from '../../utils/utils';
import persistenceManager from '../../persistence/PersistenceManager';

class RuntimeCoreCtx extends Context {

  constructor(idModule, runtimeRegistry) {
    super();
    let _this = this;
    _this.idModule = idModule;
    _this.runtimeRegistry = runtimeRegistry;
    _this.policies = _this.loadPolicies();
  }

  loadPolicies() {
    //persistenceManager.delete('policies');
    let myPolicies = persistenceManager.get('policies');

    return myPolicies;
  }

  set group(params) {
    let _this = this;
    _this.groupAttribute = _this._getList(params.scope, params.group);
  }

  get group() {
    let _this = this;
    return _this.groupAttribute;
  }

  _getList(scope, groupName) {
    let myGroups = persistenceManager.get('groups') || {};
    let members = [];
    if (myGroups[scope] !== undefined && myGroups[scope][groupName] !== undefined) {
      members = myGroups[scope][groupName];
    }
    return members;
  }

  getIdentity(from) {
    let _this = this;
    return _this.idModule.getIdentityAssertion(from);
  }

  isToSetID(from, to) {
    let _this = this;

    let idpScheme = 'domain-idp';
    let idmURL = _this.runtimeRegistry.runtimeURL + '/idm';

    if (divideURL(from).type === idpScheme) {
      return to === idmURL;
    }
    if (divideURL(to).type === idpScheme) {
      return from === idmURL;
    }

    return false;
  }

  /*isToVerify(message) {
    return _this.runtimeRegistry.isDataObjectURL(to);
  }*/

  encryptMessage(message) {
    let _this = this;
    //return _this.idModule.encryptMessage(message);
    return message;
  }
}

export default RuntimeCoreCtx;