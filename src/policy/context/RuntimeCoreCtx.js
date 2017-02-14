import AllowOverrides from '../combiningAlgorithms/AllowOverrides';
import BlockOverrides from '../combiningAlgorithms/BlockOverrides';
import {divideURL, getUserEmailFromURL, isDataObjectURL} from '../../utils/utils';
import FirstApplicable from '../combiningAlgorithms/FirstApplicable';
import ReThinkCtx from '../ReThinkCtx';

class RuntimeCoreCtx extends ReThinkCtx {

  constructor(runtimeURL, idModule, runtimeRegistry, persistenceManager, runtimeCapabilities) {
    super();
    this._runtimeURL = runtimeURL;
    this._pepURL = this._runtimeURL + '/pep';
    this._guiURL = this._runtimeURL + '/policy-gui';
    this.idModule = idModule;
    this.runtimeRegistry = runtimeRegistry;
    this.activeUserPolicy = undefined;
    this.serviceProviderPolicy = {};
    this.userPolicies = {};
    this.persistenceManager = persistenceManager;
    this.runtimeCapabilities = runtimeCapabilities;
  }

  get pepURL() {
    let _this = this;
    return _this._pepURL;
  }

  get guiURL() {
    let _this = this;
    return _this._guiURL;
  }

  get runtimeURL() {
    let _this = this;
    return _this._runtimeURL;
  }

  /**
  * return the messageBus in this Registry
  * @param {MessageBus}           messageBus
  */
  get messageBus() {
    let _this = this;
    return _this._messageBus;
  }

  /**
  * Set the messageBus in this Registry
  * @param {MessageBus}           messageBus
  */
  set messageBus(messageBus) {
    let _this = this;
    _this._messageBus = messageBus;
  }

  get subscription() {
    return this._subscription;
  }

  set subscription(params) {
    this._subscription = params.message.body.subscriber;
  }

  loadConfigurations() {
    this.activeUserPolicy = this.persistenceManager.get('rethink:activePolicy');

    let groups = this.persistenceManager.get('rethink:groups');
    this.groups = (groups === undefined) ? {} : groups;

    let spPolicies = this.persistenceManager.get('rethink:spPolicies');
    this.serviceProviderPolicy = (spPolicies === undefined) ? {} : spPolicies;

    this._loadUserPolicies();
  }

  prepareForEvaluation(message, isIncoming) {
    return new Promise((resolve, reject) => {

      let _this = this;
      if (isIncoming) {
        if (_this._isToCypherModule(message)) {
          _this.idModule.decryptMessage(message).then(function(message) {
            /*if (message.type === 'update') {
              _this._isValidUpdate(message).then(message => {*/
                resolve(message);
              }, (error) => {
                reject(error);
              /*});
            } else {
              resolve(message);
            }*/
          });
        } else {
          resolve(message);
        }
      } else {
        if (_this._isToSetID(message)) {
          _this._getIdentity(message).then(identity => {
            message.body.identity = identity;
            resolve(message);
          }, (error) => {
            reject(error);
          });
        } else {
          resolve(message);
        }
      }

    });
  }

  getPolicies(message, isIncomingMessage) {
    let policies = {};

    if (this.activeUserPolicy !== undefined) {
      policies.userPolicy = this.userPolicies[this.activeUserPolicy];
    }

    policies.serviceProviderPolicy = this.getServiceProviderPolicy(message, isIncomingMessage);

    return policies;
  }

  _isValidUpdate(message) {
    let _this = this;
    return new Promise((resolve, reject) => {
      if (message.from.split('://').length > 1) {
        _this.idModule._getHypertyFromDataObject(message.from).then(hypertyURL => {
          if (hypertyURL === message.body.source) {
            resolve(message);
          } else {
            reject('The source of the message is not valid.');
          }
        }, (error) => {
          reject(error);
        });
      } else {
        resolve(message);
      }
    });
  }

  prepareToForward(message, isIncoming, result) {
    let _this = this;
    return new Promise((resolve, reject) => {

      // TODO remove this validation. When the Nodejs auth was completed this should work like browser;
      this.runtimeCapabilities.isAvailable('node').then(isNode => {

        if (isNode) {
          resolve(message);
        } else {

          if (isIncoming & result) {
            let isSubscription = message.type === 'subscribe';
            let isFromRemoteSM = _this.isFromRemoteSM(message.from);
            if (isSubscription & isFromRemoteSM) {
              _this.doMutualAuthentication(message).then(() => {
                resolve(message);
              }, (error) => {
                reject(error);
              });
            } else {
              resolve(message);
            }
          } else {
            if (_this._isToCypherModule(message)) {
              _this.idModule.encryptMessage(message).then((message) => {
                resolve(message);
              }, (error) => {
                reject(error);
              });
            } else {
              resolve(message);
            }
          }

        }
      });

    });
  }

  doMutualAuthentication(message) {
    let _this = this;
    return new Promise(function(resolve, reject) {
      let to = message.to.split('/');
      let subsIndex = to.indexOf('subscription');
      let isDataObjectSubscription = subsIndex !== -1;
      let isFromRemoteSM = _this.isFromRemoteSM(message.from);
      if (isDataObjectSubscription & isFromRemoteSM) {
        to.pop();
        let dataObjectURL = to[0] + '//' + to[2] + '/' + to[3];
        console.log('TIAGO: message ', message);
        _this.idModule.doMutualAuthentication(dataObjectURL, message.body.subscriber).then(() => {
          _this.runtimeRegistry.registerSubscriber(dataObjectURL, message.body.subscriber);
          resolve();
        }, (error) => {
          reject(error);
        });
      }
    });
  }

  getMyEmails() {
    let identities = this.idModule.getIdentities();
    let emails = [];

    for (let i in identities) {
      emails.push(getUserEmailFromURL(identities[i].identity));
    }

    return emails;
  }

  getMyHyperties() {
    let hyperties = this.runtimeRegistry.hypertiesList;
    let hypertiesNames = [];

    for (let i in hyperties) {
      let hypertyName = hyperties[i].objectName;
      if (hypertiesNames.indexOf(hypertyName) === -1) {
        hypertiesNames.push(hypertyName);
      }
    }

    return hypertiesNames;
  }

  getServiceProviderPolicy(message, isIncoming) {
    let policy;

    if (isIncoming) {
      let toHyperty = this.runtimeRegistry.getHypertyName(message.to);
      policy = this.serviceProviderPolicy[toHyperty];
    } else {
      let fromHyperty = this.runtimeRegistry.getHypertyName(message.from);
      policy = this.serviceProviderPolicy[fromHyperty];
    }
    return policy;
  }

  isFromRemoteSM(from) {
    let splitFrom = from.split('://');
    return splitFrom[0] === 'runtime' && from !== this.runtimeRegistry.runtimeURL + '/sm';
  }

  _isToSetID(message) {
    let schemasToIgnore = ['domain-idp', 'runtime', 'domain'];
    let splitFrom = (message.from).split('://');
    let fromSchema = splitFrom[0];

    return schemasToIgnore.indexOf(fromSchema) === -1;
  }

  getURL(url) {
    let splitURL = url.split('/');
    return splitURL[0] + '//' + splitURL[2] + '/' + splitURL[3];
  }

  _getIdentity(message) {
    if (message.type === 'update') {
      return this.idModule.getIdentityOfHyperty(message.body.source);
    }

    if (message.type === 'response' && message.body.source !== undefined) {
      return this.idModule.getIdentityOfHyperty(message.body.source);
    }

    if (divideURL(message.from).type === 'hyperty') {
      return this.idModule.getIdentityOfHyperty(message.from);
    } else {
      return this.idModule.getIdentityOfHyperty(this.getURL(message.from));
    }
  }

  /**
  * Identifies the messages to be forwarded to the Identity Module for
  * encryption/decryption and integrity validation.
  * @param {Message}    message
  * @returns {boolean}  returns true if the message requires encryption/decryption
  *                     or if its type equals 'handshake'; false otherwise
  */
  _isToCypherModule(message) {
    let isCreate = message.type === 'create';
    let isFromHyperty = divideURL(message.from).type === 'hyperty';
    let isToHyperty = divideURL(message.to).type === 'hyperty';
    let isToDataObject = isDataObjectURL(message.to);

    return (isCreate && isFromHyperty && isToHyperty) || (isCreate && isFromHyperty && isToDataObject) || message.type === 'handshake' || message.type === 'update';
  }

  /**
  * Creates a group with the given name.
  * @param  {String}  groupName
  */
  _loadUserPolicies() {
    let policies = this.persistenceManager.get('rethink:userPolicies');
    if (policies !== undefined) {
      for (let i in policies) {
        this.pep.addPolicy('USER', i, policies[i]);
      }
    }
  }

  _getLastComponentOfURL(url) {
    let split = url.split('/');
    return split[split.length - 1];
  }

  _getPoliciesJSON(policies) {
    for (let i in policies) {
      let combiningAlgorithm = policies[i].combiningAlgorithm;
      if (combiningAlgorithm instanceof BlockOverrides) {
        policies[i].combiningAlgorithm = 'blockOverrides';
      } else {
        if (combiningAlgorithm instanceof AllowOverrides) {
          policies[i].combiningAlgorithm = 'allowOverrides';
        } else {
          if (combiningAlgorithm instanceof FirstApplicable) {
            policies[i].combiningAlgorithm = 'firstApplicable';
          } else {
            policies[i].combiningAlgorithm = undefined;
          }
        }
      }
    }

    return policies;
  }

  saveActivePolicy() {
    this.persistenceManager.set('rethink:activePolicy', 0, this.activeUserPolicy);
  }

  saveGroups() {
    this.persistenceManager.set('rethink:groups', 0, this.groups);
  }

  savePolicies(source, policy, key) {
    let policiesJson;

    switch (source) {
      case 'USER':
        policiesJson = JSON.stringify(this.userPolicies);
        policiesJson = this._getPoliciesJSON(JSON.parse(policiesJson));
        this.persistenceManager.set('rethink:userPolicies', 0, policiesJson);
        break;
      case 'SERVICE_PROVIDER':
        if (policy !== undefined & key !== undefined) {
          this.serviceProviderPolicy[key] = policy;
        }
        policiesJson = JSON.stringify(this.serviceProviderPolicy);
        policiesJson = this._getPoliciesJSON(JSON.parse(policiesJson));
        this.persistenceManager.set('rethink:spPolicies', 0, policiesJson);
        break;
      default:
        throw Error('Unknown policy source: ' + source);
    }
  }

  getGroupsNames() {
    let myGroups = this.groups;
    let groupsNames = [];
    if (myGroups !== undefined) {
      for (let groupName in myGroups) {
        groupsNames.push(groupName);
      }
    }
    return groupsNames;
  }

  getGroup(groupName, destination) {
    let members = [];

    if (groupName === 'preauthorised') {
      let dataObjectURL = destination.split('/');
      dataObjectURL.pop();
      dataObjectURL = dataObjectURL[0] + '//' + dataObjectURL[2];
      members = this.runtimeRegistry.getPreAuthSubscribers(dataObjectURL);
    } else {
      if (this.groups[groupName] !== undefined) {
        members = this.groups[groupName];
      }
    }

    return members;
  }

  /**
  * Creates a group with the given name.
  * @param  {String}  groupName
  */
  createGroup(groupName) {
    this.groups[groupName] = [];
    this.saveGroups();
  }

  deleteGroup(groupName) {
    delete this.groups[groupName];
    this.saveGroups();
  }

  /**
  * Adds the given user email to the group with the given name.
  * @param  {String}  userEmail
  * @param  {String}  groupName
  */
  addToGroup(groupName, userEmail) {
    let myGroups = this.groups;
    if (myGroups[groupName] !== undefined) {
      if (myGroups[groupName].indexOf(userEmail) === -1) {
        myGroups[groupName].push(userEmail);
        this.saveGroups();
      }
    } else {
      throw Error('Group "' + groupName + '" does not exist!');
    }
  }

  removeFromGroup(groupName, userEmail) {
    let group = this.groups[groupName];

    group.splice(group.indexOf(userEmail), 1);
    this.saveGroups();
  }

}

export default RuntimeCoreCtx;
