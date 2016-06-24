//jshint browser:true, jquery: true

//import persistenceManager from '../persistence/PersistenceManager';
import PEP from './PEP';
import PDP from './PDP';

/**
* The Policy Engine intercepts all the messages sent through the Message Bus and applies the
* policies defined by the service provider and the user.
*/
class PolicyEngine {

  /**
  * This method is invoked by the RuntimeUA and instantiates the Policy Engine. A Policy Decision
  * Point (PDP) and a Policy Enforcement Point (PEP) are initialised for the evaluation of policies
  * and the enforcement of additional actions, respectively.
  * @param  {IdentityModule}    identityModule
  * @param  {Registry}          runtimeRegistry
  */
  constructor(context) {
    let _this = this;
    _this.context = context;
    _this.context.pdp = new PDP(context);
    _this.context.pep = new PEP(context);
    _this.context.addSubscriptionPolicy();
  }

  /**
  * Associates the given policies with a scope. The possible scopes are 'global', 'hyperty' and
  * 'user'.
  * @param  {Policy[]}  policies
  * @param  {String}    scope
  */
  addPolicies(newPolicies) {
    let _this = this;

    let myPolicies = _this.context.policies;
    if (myPolicies === undefined) {
      myPolicies = {};
    }

    for (let i in newPolicies) {
      let newPolicy = newPolicies[i];
      let scope = newPolicy.scope;
      if (myPolicies[scope] === undefined) {
        myPolicies[scope] = [];
      }
      for (let j in myPolicies[scope]) {
        let existingPolicy = myPolicies[scope][j];
        if (existingPolicy.condition === newPolicy.condition) {
          _this.removePolicies(newPolicies[i].condition);
          break;
        }
      }
      myPolicies[scope].push(newPolicies[i]);
    }

    _this.context.policies = myPolicies;
  }

  /**
  * Removes the policy with the given ID from the given scope. If policyID is '*', removes all policies associated with the given scope.
  * @param  {String}  policyID
  * @param  {String}  scope
  */
  removePolicies(scope, condition) {
    let _this = this;

    let myPolicies = _this.context.policies;
    if (scope !== '*') {

      if (scope in myPolicies) {
        if (condition !== '*') {
          let policies = myPolicies[scope];
          let typeOfCondition = typeof condition;
          for (let i in policies) {
            let typeOfPolicyCondition = typeof policies[i].condition;
            if (typeOfCondition === typeOfPolicyCondition) {
              if (typeOfCondition === 'string') {
                if (policies[i].condition === condition) {
                  policies.splice(condition, 1);
                  break;
                }
              } else { //typeof condition = object (advanced policy)
                if (_this.areEqualArrays(policies[i].condition, condition)) {
                  policies.splice(i, 1);
                }
              }
            }
          }
        } else {
          delete myPolicies[scope];
        }

        _this.context.policies = myPolicies;
      }

    } else {
      _this.context.policies = {};
    }
  }

  areEqualArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }

    let numElements = array1.length;
    for (let i = 0; i < numElements; i++) {
      if (array1[i] instanceof Array && array2[i] instanceof Array) {
        if (!array1[i].equals(array2[i])) {
          return false;
        }
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }

  /**
  * This method is executed when a message is intercepted in the Message Bus. The first step is the
  * assignment of the identity associated with the message. The second step is the evaluation of the
  * applicable policies in order to obtain an authorisation decision: if a policy evaluates to
  * false, then the message is unauthorised. The third step is the enforcement of the actions that
  * policies may require. Finally, the message is stamped as authorised or not and is returned to
  * the Message Bus, where it will be forwarded or blocked.
  * @param  {Message}  message
  */
  authorise(message) {
    let _this = this;
    return _this.context.authorise(message);
  }

  getGroupsNames(scope) {
    let _this = this;
    let myGroups = _this.context.groups;
    let groupsNames = [];
    if (myGroups[scope] !== {}) {
      for (let groupName in myGroups[scope]) {
        groupsNames.push(groupName);
      }
    }
    return groupsNames;
  }

  /**
  * Retrieves the group with the given group name from the PDP.
  * @param  {String}  groupName
  * @return {Array}   group
  */
  getList(scope, groupName) {
    let _this = this;
    let myGroups = _this.context.groups;
    let members = [];
    if (myGroups[scope] !== undefined && myGroups[scope][groupName] !== undefined) {
      members = myGroups[scope][groupName];
    }
    return members;
  }

  /**
  * Creates a group with the given name.
  * @param  {String}  groupName
  */
  createList(scope, type, groupName) {
    let _this = this;

    let myGroups = _this.context.groups;
    if (myGroups[scope] === undefined) {
      myGroups[scope] = {};
    }
    myGroups[scope][groupName] = [];

    let policy = {
      authorise: false,
      condition: type + ' in ' + groupName,
      scope: scope,
      actions: []
    };
    _this.addPolicies([policy]);

    return myGroups;
  }

  deleteGroup(scope, groupName) {
    let _this = this;

    let myGroups = _this.context.groups;
    delete myGroups[scope][groupName];

    let myPolicies = _this.context.policies;
    if (myPolicies === undefined) {
      myPolicies = {};
    }

    let policies = myPolicies[scope];
    for (let i in policies) {
      let condition = policies[i].condition.split(' ');
      condition.shift();
      let groupInPolicy = condition.join(' ');
      if (groupInPolicy === groupName) {
        delete policies[i];
        break;
      }
    }
  }

  /**
  * Adds the given user email to the group with the given name.
  * @param  {String}  userEmail
  * @param  {String}  groupName
  */
  addToList(scope, type, groupName, userEmail) {
    let _this = this;

    let myGroups = _this.context.groups;
    if (myGroups[scope] === undefined) {
      myGroups[scope] = {};
    }
    if (myGroups[scope][groupName] === undefined) {
      myGroups = _this.createList(scope, type, groupName);
    }
    if (myGroups[scope][groupName].indexOf(userEmail) === -1) {
      myGroups[scope][groupName].push(userEmail);
    }

  }

  /**
  * Removes the given user email from the group with the given name.
  * @param  {String}  userEmail
  * @param  {String}  groupName
  */
  removeFromGroup(scope, groupName, userEmail) {
    let _this = this;

    let myGroups = _this.context.groups;
    let group = myGroups[scope][groupName];

    for (let i in group) {
      if (group[i] === userEmail) {
        group.splice(i, 1);
        break;
      }
    }
  }

  getTimeslots() {
    let _this = this;
    let policies = _this.context.policies.user;
    let timeRestrictions = [];
    for (let i in policies) {
      if (policies[i].condition.split(' ')[0] === 'time') {
        timeRestrictions.push(policies[i].condition);
      }
    }
    return timeRestrictions;
  }

  getTimeslotById(condition) {
    let _this = this;
    let policies = _this.context.policies.user;
    for (let i in policies) {
      if (policies[i].condition === condition) {
        return policies[i];
      }
    }
  }

}

export default PolicyEngine;
