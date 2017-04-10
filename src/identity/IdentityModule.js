
import {divideURL, getUserURLFromEmail, getUserEmailFromURL, isDataObjectURL, convertToUserURL, getUserIdentityDomain, isLegacy} from '../utils/utils.js';
import Identity from './Identity';
import Crypto from './Crypto';
import GuiFake from './GuiFake';

/**
*
* The Identity Module (Id Module) is the component responsible for handling the
* user identity and the association of this identity with the Hyperty instances,
* in order to make Hyperty instances identifiable. The identity in the reTHINK project
* is not fixed to a unique Identity Service Provider, but obtained through several
* different Identity sources. With this approach, the Id Module provides to the user the
* option to choose the preferred method for authentication.
* This module will thus able to support multiple Identity acquisition methods,
* such as OpenID connect 1.0, Kerberos System, or authentication through smart cards.
* For example, a user with a Google account can use the Google as an Identity Provider to provide Identity Tokens,
*  which can be used by the Identity Module to associate it with a Hyperty instance.
*
* The Identity Module uses a node package, the HelloJS, which is a client-side JavaScript API for authentication
* that facilitates the requests for the OpenID connect protocol. This method allows for some abstraction
* when making requests for different Identity Providers, such as OpenID connect used by Google, Facebook, Microsoft, for example.
*
* When a request for a user identity is made using the method loginWithRP(identifier, scope),
* this method will analyse the Identity Provider chosen to obtain an identity and will use the HelloJS node package
* with the selected Identity Provider and identity scope. After the HelloJS request for an Access Token
* to the Identity Providers, the user will be prompted to authenticate towards the Identity Provider.
* Upon receiving the Access Token, this token is validated with a RESTful web service request to an endpoint
* on the Identity Provider Authorization Server, and after the validation is done,
* an ID token is obtained with the information according to the scope required.
* This ID token is then preserved in this module that can obtained through the getIdentities()
* and is passed as return value of the loginWithRP function. The methods generateAssertion and validateAssertion have not yet been developed.
*
*/
class IdentityModule {

  /**
  * This is the constructor to initialise the Identity Module it does not require any input.
  */
  constructor(runtimeURL, runtimeCapabilities, storageManager, runtimeFactory) {
    let _this = this;

    if (!runtimeURL) throw new Error('runtimeURL is missing.');
    if (!storageManager) throw new Error('storageManager is missing');
    if (!runtimeFactory) throw new Error('runtimeFactory is missing');

    _this._runtimeURL = runtimeURL;
    _this.storageManager = storageManager;
    _this.runtimeFactory = runtimeFactory;
    _this._idmURL = _this._runtimeURL + '/idm';
    _this._guiURL = _this._runtimeURL + '/identity-gui';
    _this.runtimeCapabilities = runtimeCapabilities;

    _this._domain = divideURL(_this._runtimeURL).domain;

    //to store items with this format: {identity: identityURL, token: tokenID}
    _this.identities = [];
    _this.emailsList = [];
    let newIdentity = new Identity('guid', 'HUMAN');
    _this.identity = newIdentity;
    _this.crypto = new Crypto(_this.runtimeFactory);

    //stores the association of the dataObject and the Hyperty registered within
    _this.dataObjectsIdentity = {};

    // hashTable to store all the crypto information between two hyperties
    _this.chatKeys = {};

    // hashTable to store the symmetric keys to be used in the chat group
    _this.dataObjectSessionKeys = {};

    //failsafe to enable/disable all the criptographic functions
    _this.isToUseEncryption = true;

    // variable to know if the GUI is deployed to choose the identity. if the real GUI is not deployed, a fake gui is deployed instead.
    _this.guiDeployed = false;

    // verification of nodeJS, and in case it is nodeJS then disable encryption
    // TODO improve later, this exists because the crypto lib uses browser cryptographic methods
    //_this.isToUseEncryption = (window) ? true : false;

    _this._loadIdentities();

    _this.count = 0;

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

  /**
  * return the registry in this idModule
  * @param {registry}           registry
  */
  get registry() {
    let _this = this;
    return _this._registry;
  }

  /**
  * Set the registry in this idModule
  * @param {registry}     reg
  */
  set registry(registry) {
    let _this = this;
    _this._registry = registry;
  }

  /**
  * Function to return all the identities registered within a session by a user.
  * These identities are returned in an array containing a JSON package for each user identity.
  * @return {Array<Identities>}         Identities
  */
  getIdentities() {
    let _this = this;
    return _this.identities;
  }

  /**
  * gets all the information from a given userURL
  * @param  {String}  userURL     user url
  * @return {JSON}    identity    identity bundle from the userURL
  */
  getIdentity(userURL) {
    let _this = this;

    for (let index in _this.identities) {

      let identity = _this.identities[index];
      if (identity.identity === userURL) {
        return identity;
      }
    }

    throw 'identity not found';
  }


  _loadIdentities() {
    let _this = this;
    return new Promise((resolve) => {

      _this.storageManager.get('idModule:identities').then((identities) => {

        if (identities) {
          _this.identities = identities;
        }
        resolve();
      });
    });
  }

  deployGUI() {
    let _this = this;
    _this.guiDeployed = true;

    console.log('GUI deployed');
  }


  /**
  * get a Token to be added to a message
  * @param  {String}  fromURL     origin of the message
  * @param  {String}  toURL     target of the message
  * @return {JSON}    token    token to be added to the message
  */

  getToken(fromURL, toUrl) {
    let _this = this;
    return new Promise(function(resolve, reject) {
      console.log('[Identity.IdentityModule.getToken] from->', fromURL, '  to->', toUrl);
      if (toUrl) {
//        console.log('toUrl', toUrl);
        _this.registry.isLegacy(toUrl).then(function(result) {
          console.log('[Identity.IdentityModule.getToken] isLEGACY: ', result);
          if (result) {

            let token = _this.getAccessToken(toUrl);
            if (token)              { return resolve(token); }

            console.log('[Identity.IdentityModule.getToken] NO Identity.. Login now');
            let domain = getUserIdentityDomain(toUrl);
            console.log('[Identity.IdentityModule.getToken] domain->', domain);
            _this.callGenerateMethods(domain).then((value) => {
              console.log('[Identity.IdentityModule.getToken] CallGeneratemethods', value);
              let token = _this.getAccessToken(toUrl);
              if (token)                { return resolve(token); }              else {
                return reject('No Access token found');
              }
            }, (err) => {
              console.error('[Identity.IdentityModule.getToken] error CallGeneratemethods');
              return reject(err);
            });
          } else {

            _this.getIdToken(fromURL).then(function(identity) {
              console.log('[Identity.IdentityModule.getToken] getIdToken', identity);
              return resolve(identity);
            }).catch(function(error) {
              //console.error('[Identity.IdentityModule.getToken] error on getToken', error);
              console.log('TIAGO: Invalid id token');
              /*let domain = getUserIdentityDomain(fromURL);
              console.log('[Identity.IdentityModule.getToken] domain->', domain);
              _this.callGenerateMethods(domain).then((value) => {
                _this.getIdToken(fromURL).then(function(identity) {
                  console.log('[Identity.IdentityModule.getToken] from getIdToken', identity);
                  return resolve(identity);
                });
              });*/
              return reject(error);
            });
          }
        });
      } else {
        _this.getIdToken(fromURL).then(function(identity) {
          console.log('[Identity.IdentityModule.getToken] from getIdToken', identity);
          return resolve(identity);
        }).catch(function(error) {
          console.log('TIAGO: Invalid id token');
          /*let domain = getUserIdentityDomain(fromURL);
          console.log('[Identity.IdentityModule.getToken] domain->', domain);
          _this.callGenerateMethods(domain).then((value) => {
            _this.getIdToken(fromURL).then(function(identity) {
              console.log('[Identity.IdentityModule.getToken] from getIdToken', identity);
              return resolve(identity);
            });
          });*/
          return reject(error);
        });
      }
    });
  }

  /**
   * Check to see if an identity did not expire
   * @param  {JSON}     identity
   * @return {Boolean}  true if valid, false otherwise
   */
  isValidIdentity(identity) {
    let _this = this;
    console.log('TIAGO: validate identity');
    /*if (_this.count === 0) {
      _this.count++;
      return false;
    } else {
      return true;
    }*/
    return true;
  }

  /**
  * get an Id Token for a HypertyURL
  * @param  {String}  hypertyURL     the Hyperty address
  * @return {JSON}    token    Id token to be added to the message
  */
  getIdToken(hypertyURL) {
    let _this = this;
    return new Promise(function(resolve, reject) {
      let splitURL = hypertyURL.split('://');
      if (splitURL[0] !== 'hyperty') {

        _this._getHypertyFromDataObject(hypertyURL).then((returnedHypertyURL) => {
          let userURL = _this.registry.getHypertyOwner(returnedHypertyURL);

          if (userURL) {

            for (let index in _this.identities) {
              let identity = _this.identities[index];
              if (identity.identity === userURL) {
                if (_this.isValidIdentity(identity)) {
                  return resolve(identity.messageInfo);
                } else {
                  reject('identity expired!');
                }
              }
            }
          } else {
            return reject('no identity was found ');
          }
        }).catch((reason) => {
          console.error('no identity was found: ', reason);
          reject(reason);
        });
      } else {
        let userURL = _this.registry.getHypertyOwner(hypertyURL);
        if (userURL) {

          for (let index in _this.identities) {
            let identity = _this.identities[index];
            if (identity.identity === userURL) {
              // TODO check this getIdToken when we run on nodejs environment;
              if (_this.isValidIdentity(identity)) {
                if (identity.hasOwnProperty('messageInfo')) {
                  return resolve(identity.messageInfo);
                } else {
                  return resolve(identity);
                }
              } else {
                reject('identity expired!');
              }
            }
          }
        } else {
          return reject('no identity was found.');
        }
      }
    });
  }

  /**
  * get an Access Token for a legacyURL
  * @param  {String}  legacyURL     the legacy address
  * @return {JSON}    token    Access token to be added to the message
  */

  getAccessToken(url) {
    let _this = this;

  /*  let urlSplit = url.split('.');
    let length = urlSplit.length;*/

    let domainToCheck = divideURL(url).domain;

    if (url.includes('protostub')) {
      domainToCheck = domainToCheck.replace(domainToCheck.split('.')[0] + '.', '');
    }

    let identityToReturn;
    for (let index in _this.identities) {
      let identity = _this.identities[index];
      if (identity.hasOwnProperty('interworking') && identity.interworking.domain === domainToCheck) {
        if (identity.hasOwnProperty('messageInfo') && identity.messageInfo.hasOwnProperty('userProfile') && identity.messageInfo.userProfile) {
          identityToReturn = { userProfile: identity.messageInfo.userProfile, access_token: identity.interworking.access_token };
          if (identity.hasOwnProperty('infoToken') && identity.infoToken.hasOwnProperty('id')) {
            identityToReturn.userProfile.id = identity.infoToken.id;
          }
        }
        return identityToReturn;
      }
    }

    return null;
  }

  getIdentitiesToChoose() {
    let _this = this;
    let identities = _this.emailsList;
    let idps = [{domain: 'google.com', type: 'idToken'}, {domain: 'microsoft.com', type: 'idToken'}, {domain: 'orange.fr', type: 'idToken'}, {domain: 'slack.com', type: 'Legacy'}];

    return {identities: identities, idps: idps};
  }

  /**
  * Function to return all the users URLs registered within a session
  * These users URLs are returned in an array of strings.
  * @param  {Boolean}  emailFormat (Optional)   boolean to indicate to return in email format
  * @return {Array<String>}         users
  */
  getUsersIDs(emailFormat) {
    let _this = this;
    let users = [];

    //if request comes with the emailFormat option, then convert url to email format
    let converter = (emailFormat) ? getUserEmailFromURL : (value) => { return value; };

    for (let index in _this.identities) {
      let identity = _this.identities[index];
      users.push(converter(identity.identity));
    }
    return users;
  }

  /**
  * Function to return the selected Identity within a session
  * @return {Identity}        identity         identity
  */
  getCurrentIdentity() {
    let _this = this;
    return _this.currentIdentity;
  }

  /**
  * Function to set the current Identity with a given Identity
  * @param {Identity}        identity         identity
  */
  setCurrentIdentity(identity) {
    let _this = this;
    _this.currentIdentity = identity;
  }

  /**
  * Function to remove an identity from the Identities array
  * @param {String}    userID      userID
  */
  deleteIdentity(userID) {
    let _this = this;

    let userURL = convertToUserURL(userID);

    for (let identity in _this.identities) {
      if (_this.identities[identity].identity === userURL) {
        _this.identities.splice(identity, 1);
      }
    }
  }

  /**
  * Function to unregister an identity from the emailsList array and not show in to the GUI
  * @param {String}    email      email
  */
  unregisterIdentity(email) {
    let _this = this;

    for (let e in _this.emailsList) {
      if (_this.emailsList[e] === email) {
        _this.emailsList.splice(e, 1);
      }
    }
  }

  /**
  * Function that resolve and create the domainURL in case it is provided one. If not, resolve the default domainURL
  * @param {String}     idpDomain     idpDomain (Optional)
  */
  _resolveDomain(idpDomain) {
    if (!idpDomain) {
      return 'domain-idp://google.com';
    } else {
      return 'domain-idp://' + idpDomain;
    }
  }

  /**
  * Function to login a user within the session, it will start the process to obtain an Identity from a user,
  * including the request for an identity Assertion.
  * The function returns a promise with the token received by the idpProxy.
  *
  * @param  {Identifier}      identifier      identifier
  * @param  {Scope}           scope           scope
  * @return {Promise}         Promise         IDToken containing the user information
  */
  loginWithRP(identifier, scope) {
    let _this = this;

    return new Promise(function(resolve, reject) {

      //TODO remove this verification and refactor this part
      _this.currentIdentity = undefined;
      _this.getIdentityAssertion('identifier', 'origin', 'hint', identifier).then(function(value) {
        console.log('loginWithRP');
        resolve(value);
      }, function(err) {
        console.log('loginWithRP err');
        reject(err);
      });
    });
  }

  /**
  * Function that sends a request to the GUI using messages. Sends all identities registered and
  * the Idps supported, and return the identity/idp received by the GUI
  * @param {Array<identity>}  identities      list of identitiies
  * @param {Array<String>}    idps            list of idps to authenticate
  * @return {Promise}         returns a chosen identity or idp
  */
  requestIdentityToGUI(identities, idps) {
    let _this = this;

    return new Promise(function(resolve, reject) {

      //condition to check if the real GUI is deployed. If not, deploys a fake gui
      if (_this.guiDeployed === false) {

        let guiFake = new GuiFake(_this._guiURL, _this._messageBus);
        _this.guiFake = guiFake;
        _this.guiDeployed = true;
      }

      let message = {type: 'create', to: _this._guiURL, from: _this._idmURL,
        body: {value: {identities: identities, idps: idps}}};

      let id = _this._messageBus.postMessage(message);

      //add listener without timout
      _this._messageBus.addResponseListener(_this._idmURL, id, msg => {
        _this._messageBus.removeResponseListener(_this._idmURL, id);

        // todo: to return the user URL and not the email or identifier

        if (msg.body.code === 200) {
          let selectedIdentity = msg.body;

          console.log('selectedIdentity: ', selectedIdentity.value);
          resolve(selectedIdentity);
        } else {
          reject('error on requesting an identity to the GUI');
        }
      });
    });
  }

  openPopup(urlreceived) {

    return new Promise((resolve, reject) => {

      let win = window.open(urlreceived, 'openIDrequest', 'width=800, height=600');
      if (window.cordova) {
        win.addEventListener('loadstart', function(e) {
          let url = e.url;
          let code = /\&code=(.+)$/.exec(url);
          let error = /\&error=(.+)$/.exec(url);

          if (code || error) {
            win.close();
            resolve(url);
          }
        });
      } else {
        let pollTimer = setInterval(function() {
          try {
            if (win.closed) {
              reject('Some error occured when trying to get identity.');
              clearInterval(pollTimer);
            }

            if (win.document.URL.indexOf('id_token') !== -1 || win.document.URL.indexOf(location.origin) !== -1) {
              window.clearInterval(pollTimer);
              let url =   win.document.URL;

              win.close();
              resolve(url);
            }
          } catch (e) {
            //console.log(e);
          }
        }, 500);
      }
    });
  }

  /**
  * Function that fetch an identityAssertion from a user.
  *
  * @return {IdAssertion}              IdAssertion
  */
  getIdentityAssertion(identifier, origin, usernameHint, idpDomain) {
    let _this = this;

    console.log('TIAGO getIdentityAssertion');

    return new Promise(function(resolve, reject) {

      //CHECK whether is browser environment or nodejs
      //if it is browser, then create a fake identity

      _this.runtimeCapabilities.isAvailable('browser').then((result) => {
        console.log('runtime browser identity acquisition ', result);

        if (!result) return;

        let identitiesInfo = _this.getIdentitiesToChoose();

        _this.requestIdentityToGUI(identitiesInfo.identities, identitiesInfo.idps).then(value => {

          if (value.type === 'identity') {

          //  let chosenID = getUserURLFromEmail(value.value);
          // hack while the user url is not returned from requestIdentityToGUI;

            let chosenID = 'user://' + _this.currentIdentity.idp + '/' + value.value;

            // returns the identity info from the chosen id
            for (let i in _this.identities) {
              if (_this.identities[i].identity === chosenID) {
                return resolve(_this.identities[i].messageInfo);
              }
            }
            reject('no identity was found .');
          } else if (value.type === 'idp') {

            _this.callGenerateMethods(value.value, origin).then((value) => {
              resolve(value);
            }, (err) => {
              reject(err);
            });

          } else {
            reject('error on GUI received message.');
          }
        });
      }).catch(error => {
        console.log('Error on identity acquisition ', error);
        reject(error);
      });

      _this.runtimeCapabilities.isAvailable('node').then((result) => {
        console.log('node identity acquisition ', result);

        if (!result) return;

        if (_this.currentIdentity !== undefined) {
          //TODO verify whether the token is still valid or not.
          // should be needed to make further requests, to obtain a valid token
          return resolve(_this.currentIdentity);
        } else {
          console.log('getIdentityAssertion for nodejs');

          let idp = {type: "idp", value: "google.com", code: 200, auth: false};
          _this.callNodeJsGenerateMethods(idp.value, origin).then((value) => {
            resolve(value);
          }, (err) => {
            reject(err);
          });
        }

      }).catch(error => {
        console.log('Error on identity acquisition ', error);
        reject(error);
      });
    });
  }

  callNodeJsGenerateMethods(idp, origin) {
    let _this = this;

    return new Promise((resolve, reject) => {

      let publicKey;
      let userkeyPair;

      //generates the RSA key pair
      _this.crypto.generateRSAKeyPair().then(function(keyPair) {

        publicKey = btoa(keyPair.public);
        userkeyPair = keyPair;

        _this.fakeNodePopUp().then((url) => {
          _this.sendGenerateMessage(publicKey, origin, url, idp).then((result) => {
            console.log('TIAGO after idp proxy:', result);
            /*if (result) {
              _this.storeIdentity(result, keyPair).then((value) => {
                resolve(value);
              }, (err) => {
                reject(err);
              });

            } else {
              reject('error on obtaining identity information');
            }*/
          }).catch(function(err) {
            console.log(err);
            reject(err);
          });

        });
      }).catch(function(err) {
        console.log(err);
        reject(err);
      });
    });
  }

  fakeNodePopUp() {
    return new Promise((resolve, reject) => {

      let url = "https://localhost/#state=state&code=4/xWFnH5iLpxv4W4Bm58oVqDK6vwVessKKMoNs-LsSKNY&access_token=ya29.GlsVBM3VBlBR1YNREuXqOr4G_UzvoL_y64YtOGGKJJ-QlasBW-HrV0b1HsxR4uNB7r-N-pElCleW6kNYW4WIIr6mOSp1euVD09eoDXtVZZFHuU8LEzcGYmVV7QLh&token_type=Bearer&expires_in=3600&id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ5N2Y2MGIxMjRhNjc1NDI2NDhlYjIzYjc0YmY4YTg2MDJkY2I4YTYifQ.eyJhenAiOiI4MDgzMjk1NjYwMTItdHFyOHFvaDExMTk0MmdkMmtnMDA3dDBzOGYyNzdyb2kuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MDgzMjk1NjYwMTItdHFyOHFvaDExMTk0MmdkMmtnMDA3dDBzOGYyNzdyb2kuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTE5MzQyMzM2MzI1MjAwNzc3NDMiLCJlbWFpbCI6Im9wZW5pZHRlc3QxMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Im94X1Vva3FwRDNkMjBpZzRXeEd2WlEiLCJjX2hhc2giOiJFem9RYmNwdGJxQlhoa0NEZGVOUFNRIiwibm9uY2UiOiJORGdzTVRNd0xERXNNelFzTkRnc01UTXNOaXc1TERReUxERXpOQ3czTWl3eE16UXNNalEzTERFekxERXNNU3d4TERVc01Dd3pMREV6TUN3eExERTFMREFzTkRnc01UTXdMREVzTVRBc01pd3hNekFzTVN3eExEQXNNVGd4TERFeU9Dd3hNRGdzTVRnekxESTFNeXd5TlN3eU16WXNPVGdzT0RBc016a3NNakl4TERrekxESXhMRFV4TERFNUxERXlMRFEzTERFd0xESTFOU3d5Tnl3eU1qWXNNVFV4TERFNU55d3hNRGNzTVRRekxERTJOeXd4T1N3eE5EQXNNVGs1TERFNE9Dd3lNelFzTVRNMUxEVTFMREl3TlN3eU1Ua3NNVGdzT0RRc01qSXlMREV4TUN3eU1Ea3NNVFU1TERFNE5Td3lORFFzTWpRM0xERXhPQ3d4T0RBc01qQXhMREV6T1N3eE1pd3lNakFzTVRBNExERTROaXd6T1N3eU1qQXNPRFFzTVRVeExESTFNeXd6TlN3MU1Td3hPVEVzT0RFc01UYzBMREU0T1N3NExEa3dMREkxTWl3eU1EWXNNalFzTVRVekxERTRPQ3d5TlRJc01qUXhMRFV4TERFMU9TdzVMREU0TERFM05Dd3pNaXd4T0RNc01qSXpMREU1Tml3ME1Td3hOeklzTlRNc01qRXNNemNzTWpReUxERTNOeXd4T1Rjc05Dd3lOQ3d4Tnprc01UYzRMREUxTnl3eE1UWXNNakkyTERjd0xERXdPQ3d4TkRFc01UZzVMREU1TWl3eU16Z3NNVEE0TERFeU9Dd3hNelFzTkRBc01pd3hOemtzTmpjc01UQXhMRE01TERjM0xESXhPQ3cwT0N3eU5UQXNNVGsyTERjd0xEZzBMREUyTml3eE55d3hOVFlzTlRZc01UTTFMRFFzTkRNc01UYzRMREkxTkN3ME5Dd3lOeXd4Tnpjc01UYzRMREUwTlN3eE5ESXNNVFF3TERJMUxERTBOU3d4TnpNc05ERXNNVEl4TERJeU9Dd3lORGtzTkRrc01UVTJMREl5TUN3eE1ESXNNVGd4TERFeUxERXdMREl4TkN3eE1Ea3NOVFFzTVRrekxESTBNQ3d5TVRZc01qRTRMRGNzTVRBNUxEa3dMREl4Tnl3ek1Dd3lORGNzTVRReExERTFOeXcxT1N3eU1qWXNORFlzTVRVMUxEUTBMREUxTml3NU55dzBPQ3d4T0Rrc01USXpMREU0TWl3eE5qVXNNalF3TERFd05TdzNPQ3d4T1Rnc05Ua3NNalVzTVRreUxESXhNeXd4TlRVc09EUXNNVGtzT1Rnc09EZ3NPVGNzTVRFNExERTVNU3czT1N3eE1EZ3NNakl4TERFd05Dd3lNVElzTlRBc016QXNNVGt5TERFeE1TdzNNeXd4T0RFc01USTRMRGt5TERFME9Dd3lNVEFzTWpBMExESXlNQ3d5TXpjc01UTTRMREkwTml3eE9Ea3NNVGsyTERFNE55d3pOU3d5TVRnc01qVXpMRFUzTERNd0xEWTFMRFkyTERFd015d3lPQ3d4TlRBc01USXNNakEwTERRd0xEZzBMRFF5TERFd05DdzJOU3d4TmpRc01UUTJMREl5Tnl3NE1pdzJMREUyTERFMk55d3hNak1zTVRrc01qSXhMREV6TVN3eE5UUXNOREVzT1RZc05qZ3NNakVzTVRRd0xESTJMRGc0TERFeU5pdzJOaXczTnl3NE9TdzNNeXd4T1RNc01pd3pMREVzTUN3eCIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJpYXQiOjE0OTAxMjEwNDQsImV4cCI6MTQ5MDEyNDY0NH0.GRnWCUx5r5ll9xkCRlYwUjISxi7nQ0OtlayWeqVcmoSf9W0k9HcBH_9U1CA-LJDkJCntDtkSkQyuRF-Sh53S2QYa396fqRZONp1czj6zCIxjZX30--vOvBCGyAI8sC9vssoKciTHn1aQhzDvY7HD4C7gt0KGI3FbtYRGa_RNm6v2ngqwVq0GyqE0KuosgVw0IjxbjOShrwWSHD1UszkEMhf4dQuekrZlvfkEfZN9aWbhy4qQy0y1Eiz0jTP2b5Yp1F1KyUQcgh8ofU2mE19nWzqxsMw-CEnGOUuwjfEGPqTg6ej0TDOz6rkODMvmQ9q33tL6TMbbJWga7DxAOOXSRQ&authuser=0&session_state=68cc1dc43bf1d78f415cc69354e639bdc52fb45f..2f30&prompt=consent";
      resolve(url);
    });
  }

  callGenerateMethods(idp, origin) {
    let _this = this;

    return new Promise((resolve, reject) => {

      let publicKey;
      let userkeyPair;

      //generates the RSA key pair
      _this.crypto.generateRSAKeyPair().then(function(keyPair) {

        publicKey = btoa(keyPair.public);
        userkeyPair = keyPair;
        return _this.generateAssertion(publicKey, origin, '', userkeyPair, idp);

      }).then(function(url) {
        console.log('TIAGO popup url', url);
        return _this.generateAssertion(publicKey, origin, url, userkeyPair, idp);

      }).then(function(value) {
        if (value) {
          resolve(value);
        } else {
          reject('Error on obtaining Identity');
        }
      }).catch(function(err) {
        console.log(err);
        reject(err);
      });
    });
  }

  sendGenerateMessage(contents, origin, usernameHint, idpDomain) {
    let _this = this;
    let domain = _this._resolveDomain(idpDomain);
    let message;

    return new Promise((resolve, reject) => {
      message = {type: 'execute', to: domain, from: _this._idmURL, body: {resource: 'identity', method: 'generateAssertion', params: {contents: contents, origin: origin, usernameHint: usernameHint}}};
      _this._messageBus.postMessage(message, (res) => {
        let result = res.body.value;

        //console.log('TIAGO assertion: ', JSON.stringify(result.assertion));
        //console.log('TIAGO idp: ', JSON.stringify(result.idp));
        //console.log('TIAGO info: ', JSON.stringify(result.info));
        //console.log('TIAGO infoToken: ', JSON.stringify(result.infoToken));
        resolve(result);

      });
    });
  }

  storeIdentity(result, keyPair) {
    let _this = this;

    return new Promise((resolve, reject) => {

      let splitedAssertion = result.assertion.split('.');
      let assertionParsed;

      //verify if the token contains the 3 components, or just the assertion
      if (splitedAssertion[1]) {
        assertionParsed = JSON.parse(atob(splitedAssertion[1]));
      } else {

        assertionParsed = JSON.parse(atob(result.assertion));
      }
      let idToken;

      //TODO remove the verification and remove the tokenIDJSON from the google idpProxy;
      if (assertionParsed.tokenIDJSON) {
        idToken = assertionParsed.tokenIDJSON;
      } else {
        idToken = assertionParsed;
      }

      idToken.idp = result.idp;

      let email = idToken.email || idToken.sub;

      // let identifier = getUserURLFromEmail(email);

      let identifier = 'user://' + idToken.idp.domain + '/' + email;

      result.identity = identifier;

      _this.identity.addIdentity(result);

      // check if exists any infoToken in the result received
      let infoToken = (result.infoToken) ? result.infoToken : {};

      let commonName = idToken.name || email.substring(0, email.indexOf('@'));
      let userProfileBundle = {username: email, cn: commonName, avatar: infoToken.picture, locale: infoToken.locale, userURL: identifier};

      //creation of a new JSON with the identity to send via messages
      let newIdentity = {userProfile: userProfileBundle, idp: result.idp.domain, assertion: result.assertion};
      result.messageInfo = newIdentity;
      result.keyPair = keyPair;

      _this.currentIdentity = newIdentity;

      //verify if the id already exists. If already exists then do not add to the identities list;
      let idAlreadyExists = false;
      let oldId;
      for (let identity in _this.identities) {
        if (_this.identities[identity].identity === result.identity) {
          idAlreadyExists = true;
          oldId = _this.identities[identity].messageInfo;
        }
      }

      if (idAlreadyExists) {
        resolve(oldId);
        let exists = false;

        //check if the identity exists in emailList, if not add it
        //This is useful if an identity was previously registered but was later unregistered
        for (let i in _this.emailsList) {
          if (_this.emailsList[i] === email) {
            exists = true;
            break;
          }
        }
        if (!exists) {
          _this.emailsList.push(email);
        }

      } else {
        _this.emailsList.push(email);
        _this.identities.push(result);
        _this.storageManager.set('idModule:identities', 0, _this.identities).then(() => {

          resolve(newIdentity);
        });
      }

    });
  }

  /**
  * Requests the IdpProxy from a given Domain for an identityAssertion
  *
  * @param  {DOMString} contents     contents
  * @param  {DOMString} origin       origin
  * @param  {DOMString} usernameHint usernameHint
  * @param  {JSON}      keyPair       user keyPair
  * @return {IdAssertion}              IdAssertion
  */
  generateAssertion(contents, origin, usernameHint, keyPair, idpDomain) {
    let _this = this;

    console.log('generateAssertion');

    return new Promise(function(resolve, reject) {

      _this.sendGenerateMessage(contents, origin, usernameHint, idpDomain).then((result) => {

        if (result.loginUrl) {

          _this.openPopup(result.loginUrl).then((value) => {
            resolve(value);
          }, (err) => {
            reject(err);
          });
        } else if (result) {

          _this.storeIdentity(result, keyPair).then((value) => {
            resolve(value);
          }, (err) => {
            reject(err);
          });

        } else {
          reject('error on obtaining identity information');
        }

      });
    });
  }

  /**
  * OTHER USER'S IDENTITY
  */

  /**
  * Requests the IdpProxy from a given Domain to validate an IdentityAssertion
  * Returns a promise with the result from the validation.
  * @param  {DOMString} assertion
  * @param  {DOMString} origin       origin
  * @return {Promise}         Promise         promise with the result from the validation
  */
  validateAssertion(assertion, origin, idpDomain) {
    let _this = this;

    let domain = _this._resolveDomain(idpDomain);

    let message = {type: 'execute', to: domain, from: _this._idmURL, body: {resource: 'identity', method: 'validateAssertion',
      params: {assertion: assertion, origin: origin}}};

    return new Promise(function(resolve, reject) {
      _this._messageBus.postMessage(message, (result) => {
        if (result.body.code === 200) {
          resolve(result.body.value);
        } else {
          reject('error', result.body.code);
        }
      });
    });
  }

  encryptMessage(message) {
    let _this = this;

    console.log('encrypt message ');

    return new Promise(function(resolve, reject) {
      let isHandShakeType = message.type === 'handshake';

      //if is not to apply encryption, then returns resolve
      if (!_this.isToUseEncryption && !isHandShakeType) {
        console.log('encryption disabled');
        return resolve(message);
      }

      //TODO remove this logic and move it to a util function
      let splitedToURL = message.to.split('/');
      let dataObjectURL = splitedToURL[0] + '//' + splitedToURL[2] + '/' + splitedToURL[3];
      if (splitedToURL.length > 6) {
        dataObjectURL = splitedToURL[0] + '//' + splitedToURL[2] + '/' + splitedToURL[3] + '/' + splitedToURL[4];
      }

      let isToDataObject = isDataObjectURL(dataObjectURL);
      let isToLegacyIdentity = isLegacy(message.to);
      let isFromHyperty = divideURL(message.from).type === 'hyperty';
      let isToHyperty = divideURL(message.to).type === 'hyperty';

      if (message.type === 'update') {
        return resolve(message);
      }

      if (isToLegacyIdentity) {
        resolve(message);
      } else if (isFromHyperty && isToHyperty) {
        let userURL = _this._registry.getHypertyOwner(message.from);
        if (userURL) {

          // check if exists any keys between two users
          let chatKeys = _this.chatKeys[message.from + '<->' + message.to];
          if (!chatKeys) {
            chatKeys = _this._newChatCrypto(message, userURL);
            console.log('createChatKey encrypt', message.from + message.to);
            _this.chatKeys[message.from + '<->' + message.to] = chatKeys;
            message.body.handshakePhase = 'startHandShake';
          }

          if (chatKeys.authenticated && !isHandShakeType) {

            let iv = _this.crypto.generateIV();
            _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, message.body.value, iv).then(encryptedValue => {

              let filteredMessage = _this._filterMessageToHash(message, message.body.value + iv, chatKeys.hypertyFrom.messageInfo);

              _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, JSON.stringify(filteredMessage)).then(hash => {
                //console.log('result of hash ', hash);
                let value = {iv: _this.crypto.encode(iv), value: _this.crypto.encode(encryptedValue), hash: _this.crypto.encode(hash)};
                message.body.value = JSON.stringify(value);

                resolve(message);
              });
            });

            // if is a handshake message, just resolve it
          } else if (isHandShakeType) {
            resolve(message);

            // else, starts a new handshake protocol
          } else {
            _this._doHandShakePhase(message, chatKeys).then(function(value) {
              _this.chatKeys[message.from + '<->' + message.to] = value.chatKeys;

              _this._messageBus.postMessage(value.message);
              reject('encrypt handshake protocol phase ');
            });
          }
        }

      //if from hyperty to a dataObjectURL
      } else if (isFromHyperty && isToDataObject) {

        console.log('dataObject value to encrypt: ', message.body.value);
        console.log('IdentityModule - encrypt from hyperty to dataobject ', message);

        // TIAGO - persistence issue #147
        _this.storageManager.get('dataObjectSessionKeys').then((sessionKeys) => {
          let dataObjectKey = sessionKeys ? sessionKeys[dataObjectURL] : null;

          //if no key exists, create a new one if is the reporter of dataObject
          if (!dataObjectKey) {
            let isHypertyReporter = _this.registry.getReporterURLSynchonous(dataObjectURL);

            // if the hyperty is the reporter of the dataObject then generates a session key
            if (isHypertyReporter && isHypertyReporter === message.from) {

              let sessionKey = _this.crypto.generateRandom();
              _this.dataObjectSessionKeys[dataObjectURL] = {sessionKey: sessionKey, isToEncrypt: true};

              // TIAGO - persistence issue #147
              _this.storageManager.set('dataObjectSessionKeys', 0, _this.dataObjectSessionKeys);

              dataObjectKey = _this.dataObjectSessionKeys[dataObjectURL];
            }
          }

          //check if there is already a session key for the chat room
          if (dataObjectKey) {

            // and if is to apply encryption, encrypt the messages
            if (dataObjectKey.isToEncrypt) {
              let iv = _this.crypto.generateIV();

              _this.crypto.encryptAES(dataObjectKey.sessionKey, _this.crypto.encode(JSON.stringify(message.body.value)), iv).then(encryptedValue => {

                let filteredMessage = _this._filterMessageToHash(message, message.body.value + iv, dataObjectKey.sessionKey);

              _this.crypto.hashHMAC(dataObjectKey.sessionKey, JSON.stringify(filteredMessage)).then(hash => {
                //console.log('hash ', hash);

                  let newValue = {value: _this.crypto.encode(encryptedValue), iv: _this.crypto.encode(iv), hash: _this.crypto.encode(hash)};

                  message.body.value = JSON.stringify(newValue);
                  console.log('TIAGO outgoing:', message);
                  resolve(message);
                });
              });

            // if not, just send the message
            } else {
              resolve(message);
            }

            // start the generation of a new session Key
          } else {
            reject('failed to decrypt message');
          }

        });
      }
    });
  }

  decryptMessage(message) {
    let _this = this;

    console.log('decrypt message ');

    return new Promise(function(resolve, reject) {
      let isHandShakeType = message.type === 'handshake';

      //if is not to apply encryption, then returns resolve
      if (!_this.isToUseEncryption && !isHandShakeType) {
        console.log('decryption disabled');
        return resolve(message);
      }

      //TODO remove this logic and move it to a util function

      let splitedToURL = message.to.split('/');
      let dataObjectURL = splitedToURL[0] + '//' + splitedToURL[2] + '/' + splitedToURL[3];
      if (splitedToURL.length > 6) {
        dataObjectURL = splitedToURL[0] + '//' + splitedToURL[2] + '/' + splitedToURL[3] + '/' + splitedToURL[4];
      }

      let isToDataObject = isDataObjectURL(dataObjectURL);
      let isFromHyperty = divideURL(message.from).type === 'hyperty';
      let isToHyperty = divideURL(message.to).type === 'hyperty';

      if (message.type === 'update') {
        return resolve(message);
      }

      //is is hyperty to hyperty communication
      if (isFromHyperty && isToHyperty) {
        //console.log('decrypt hyperty to hyperty');
        let userURL = _this._registry.getHypertyOwner(message.to);
        if (userURL) {

          let chatKeys = _this.chatKeys[message.to + '<->' + message.from];
          if (!chatKeys) {
            chatKeys = _this._newChatCrypto(message, userURL, 'decrypt');
            _this.chatKeys[message.to + '<->' + message.from] = chatKeys;
          }

          if (chatKeys.authenticated && !isHandShakeType) {
            let value = JSON.parse(message.body.value);
            let iv = _this.crypto.decode(value.iv);
            let data = _this.crypto.decode(value.value);
            let hash = _this.crypto.decode(value.hash);
            _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, data, iv).then(decryptedData => {
              console.log('decrypted value ', decryptedData);
              message.body.value = decryptedData;

              let filteredMessage = _this._filterMessageToHash(message, decryptedData + iv);

              _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, JSON.stringify(filteredMessage), hash).then(result => {
                //console.log('result of hash verification! ', result);
                message.body.assertedIdentity = true;
                resolve(message);
              });
            });

          } else if (isHandShakeType) {
            _this._doHandShakePhase(message, chatKeys).then(function(value) {

              //if it was started by doMutualAuthentication then ends the protocol
              if (value === 'handShakeEnd') {
                reject('decrypt handshake protocol phase ');

              // if was started by a message, then resend that message
              } else {
                _this.chatKeys[message.to + '<->' + message.from] = value.chatKeys;
                _this._messageBus.postMessage(value.message);
                reject('decrypt handshake protocol phase ');
              }
            });
          } else {
            reject('wrong message do decrypt');
          }
        } else {
          reject('error on decrypt message');
        }

        //if from hyperty to a dataObjectURL
      } else if (isFromHyperty && isToDataObject) {
        console.log('dataObject value to decrypt: ', message.body);

        // TIAGO - persistence issue #147
        _this.storageManager.get('dataObjectSessionKeys').then((sessionKeys) => {
          let dataObjectKey = sessionKeys ? sessionKeys[dataObjectURL] : null;

          if (dataObjectKey) {

            //check if is to apply encryption
            if (dataObjectKey.isToEncrypt) {
              let parsedValue = JSON.parse(message.body.value);
              let iv = _this.crypto.decode(parsedValue.iv);
              let encryptedValue = _this.crypto.decode(parsedValue.value);
              let hash = _this.crypto.decode(parsedValue.hash);

              _this.crypto.decryptAES(dataObjectKey.sessionKey, encryptedValue, iv).then(decryptedValue => {
                let parsedValue = JSON.parse(atob(decryptedValue));
                console.log('decrypted Value,', parsedValue);
                message.body.value = parsedValue;

                let filteredMessage = _this._filterMessageToHash(message, parsedValue + iv);

              _this.crypto.verifyHMAC(dataObjectKey.sessionKey, JSON.stringify(filteredMessage), hash).then(result => {
                //console.log('result of hash verification! ', result);

                  message.body.assertedIdentity = true;
                  console.log('TIAGO incoming:', message);
                  resolve(message);
                });
              });

            //if not, just return the message
            } else {
              message.body.assertedIdentity = true;
              resolve(message);
            }

          } else {
            message.body.assertedIdentity = true;
            resolve(message);

            //reject('no sessionKey for chat room found');
          }
        });

      } else {
        reject('wrong message to decrypt');
      }

    });
  }

  doMutualAuthentication(sender, receiver) {
    console.log('doMutualAuthentication: ', sender, receiver);
    let _this = this;

    return new Promise(function(resolve, reject) {

      let dataObjectURL;

      // check if the sender is a dataObject and if so stores that value
      let reporterURL = _this.registry.getReporterURLSynchonous(sender);
      if (reporterURL) {
        dataObjectURL = sender;
        sender = reporterURL;
      }

      let msg = {
        to: receiver,
        from: sender,
        callback: undefined,
        body: {handshakePhase: 'startHandShake', ignore: 'ignoreMessage'}
      };

      if (!sender || !receiver) {
        return reject('sender or receiver missing on doMutualAuthentication');
      }

      let chatKeys = _this.chatKeys[sender + '<->' + receiver];
      let userURL = _this._registry.getHypertyOwner(sender);

      if (userURL) {

        if (!chatKeys) {
          // callback to resolve when finish the mutual authentication
          let resolved = function(value) {
            console.log('callback value:', value);
            resolve(value);
          };
          msg.callback = resolved;
          msg.dataObjectURL = dataObjectURL;

          chatKeys = _this._newChatCrypto(msg, userURL);
          _this.chatKeys[sender + '<->' + receiver] = chatKeys;
        }

        if (chatKeys.authenticated) {

          let startSessionKeyExchange = {
            to: sender,
            from: receiver
          };
          chatKeys.dataObjectURL = dataObjectURL;
          _this._sendReporterSessionKey(startSessionKeyExchange, chatKeys).then(value => {

            _this._messageBus.postMessage(value.message);
            resolve('exchange of chat sessionKey initiated');
          });
        } else {

          _this._doHandShakePhase(msg, chatKeys);
        }
      } else {
        reject('error on doMutualAuthentication');
      }
    });

  }

  _doHandShakePhase(message, chatKeys) {
    let _this = this;

    //console.log('handshakeType');

    return new Promise(function(resolve, reject) {

      let handshakeType = message.body.handshakePhase;
      let iv;
      let hash;
      let value = {};
      let filteredMessage;
      switch (handshakeType) {

        case 'startHandShake':
          chatKeys.keys.fromRandom = _this.crypto.generateRandom();

          let startHandShakeMsg = {
            type: 'handshake',
            to: message.to,
            from: message.from,
            body: {
              handshakePhase: 'senderHello',
              value: _this.crypto.encode(chatKeys.keys.fromRandom)
            }
          };
          chatKeys.handshakeHistory.senderHello = _this._filterMessageToHash(startHandShakeMsg, undefined, chatKeys.hypertyFrom.messageInfo);

          // check if was the encrypt function or the mutual authentication that request the
          // start of the handShakePhase.
          if (chatKeys.initialMessage) {
            resolve({message: startHandShakeMsg, chatKeys: chatKeys});
          } else {
            _this.chatKeys[message.from + '<->' + message.to] = chatKeys;
            _this._messageBus.postMessage(startHandShakeMsg);
          }

          break;
        case 'senderHello':

          console.log('senderHello');
          chatKeys.handshakeHistory.senderHello = _this._filterMessageToHash(message);
          chatKeys.keys.fromRandom = _this.crypto.decode(message.body.value);
          chatKeys.keys.toRandom = _this.crypto.generateRandom();

          let senderHelloMsg = {
            type: 'handshake',
            to: message.from,
            from: message.to,
            body: {
              handshakePhase: 'receiverHello',
              value: _this.crypto.encode(JSON.stringify(chatKeys.keys.toRandom))
            }
          };
          chatKeys.handshakeHistory.receiverHello = _this._filterMessageToHash(senderHelloMsg, undefined, chatKeys.hypertyFrom.messageInfo);
          resolve({message: senderHelloMsg, chatKeys: chatKeys});

          break;
        case 'receiverHello':

          console.log('receiverHello');
          chatKeys.handshakeHistory.receiverHello = _this._filterMessageToHash(message);

          _this.validateAssertion(message.body.identity.assertion, undefined, message.body.identity.idp).then((value) => {

            //TODO remove later this verification as soon as all the IdP proxy are updated in the example
            let encodedpublicKey = (typeof value.contents === 'string') ? value.contents : value.contents.nonce;

            let receiverPublicKey = _this.crypto.decode(encodedpublicKey);
            let premasterSecret = _this.crypto.generatePMS();
            let toRandom = message.body.value;
            chatKeys.hypertyTo.assertion = message.body.identity.assertion;
            chatKeys.hypertyTo.publicKey = receiverPublicKey;
            chatKeys.hypertyTo.userID    = value.contents.email;
            console.log('TIAGO receiver hello before decode', message);
            chatKeys.keys.toRandom  = _this.crypto.decode(toRandom);
            console.log('TIAGO receiver hello after decode');
            chatKeys.keys.premasterKey = premasterSecret;

            let concatKey = _this.crypto.concatPMSwithRandoms(premasterSecret, chatKeys.keys.toRandom, chatKeys.keys.fromRandom);

            return _this.crypto.generateMasterSecret(concatKey, 'messageHistoric' + chatKeys.keys.toRandom + chatKeys.keys.fromRandom);

            //generate the master key
          }).then((masterKey) => {
            chatKeys.keys.masterKey = masterKey;

            return _this.crypto.generateKeys(masterKey, 'key expansion' + chatKeys.keys.toRandom + chatKeys.keys.fromRandom);

            //generate the symmetric and hash keys
          }).then((keys) => {

            chatKeys.keys.hypertyToSessionKey = new Uint8Array(keys[0]);
            chatKeys.keys.hypertyFromSessionKey = new Uint8Array(keys[1]);
            chatKeys.keys.hypertyToHashKey = new Uint8Array(keys[2]);
            chatKeys.keys.hypertyFromHashKey = new Uint8Array(keys[3]);
            iv = _this.crypto.generateIV();
            value.iv = _this.crypto.encode(iv);

            let messageStructure = {
              type: 'handshake',
              to: message.from,
              from: message.to,
              body: {
                handshakePhase: 'senderCertificate'
              }
            };

            // hash the value and the iv
            filteredMessage = _this._filterMessageToHash(messageStructure, 'ok' + iv, chatKeys.hypertyFrom.messageInfo);
            return _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, JSON.stringify(filteredMessage));
          }).then((hash) => {
            value.hash = _this.crypto.encode(hash);

            //encrypt the data
            return _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, 'ok', iv);
          }).then((encryptedData) => {
            value.symetricEncryption = _this.crypto.encode(encryptedData);

            return _this.crypto.encryptRSA(chatKeys.hypertyTo.publicKey, chatKeys.keys.premasterKey);

          }).then((encryptedValue) => {

            value.assymetricEncryption = _this.crypto.encode(encryptedValue);

            let messageStructure = {
              type: 'handshake',
              to: message.from,
              from: message.to,
              body: {
                handshakePhase: 'senderCertificate'
              }
            };

            let messageToHash = _this._filterMessageToHash(messageStructure, chatKeys.keys.premasterKey, chatKeys.hypertyFrom.messageInfo);

            return _this.crypto.signRSA(chatKeys.hypertyFrom.privateKey, JSON.stringify(chatKeys.handshakeHistory) + JSON.stringify(messageToHash));

          }).then(signature => {

            value.signature = _this.crypto.encode(signature);

            let receiverHelloMsg = {
              type: 'handshake',
              to: message.from,
              from: message.to,
              body: {
                handshakePhase: 'senderCertificate',
                value: btoa(JSON.stringify(value))
              }
            };
            chatKeys.handshakeHistory.senderCertificate = _this._filterMessageToHash(receiverHelloMsg, 'ok' + iv, chatKeys.hypertyFrom.messageInfo);

            resolve({message: receiverHelloMsg, chatKeys: chatKeys});

          }, error => reject(error));

          break;
        case 'senderCertificate':

          console.log('senderCertificate');
          let receivedValue = JSON.parse(atob(message.body.value));

          console.log('TIAGO identity', message.body);
          _this.validateAssertion(message.body.identity.assertion, undefined, message.body.identity.idp).then((value) => {
            let encryptedPMS = _this.crypto.decode(receivedValue.assymetricEncryption);

            //TODO remove later this verification as soon as all the IdP proxy are updated in the example
            let encodedpublicKey = (typeof value.contents === 'string') ? value.contents : value.contents.nonce;

            let senderPublicKey = _this.crypto.decode(encodedpublicKey);
            chatKeys.hypertyTo.assertion = message.body.identity.assertion;
            chatKeys.hypertyTo.publicKey = senderPublicKey;
            chatKeys.hypertyTo.userID    = value.contents.email;

            return _this.crypto.decryptRSA(chatKeys.hypertyFrom.privateKey, encryptedPMS);

          }, (error) => {
            console.log(error);
            reject('Error during authentication of identity');

            //obtain the PremasterKey using the private key
          }).then(pms => {

            chatKeys.keys.premasterKey = new Uint8Array(pms);

            let signature = _this.crypto.decode(receivedValue.signature);

            let receivedmsgToHash = _this._filterMessageToHash(message, chatKeys.keys.premasterKey);

            return _this.crypto.verifyRSA(chatKeys.hypertyTo.publicKey, JSON.stringify(chatKeys.handshakeHistory) + JSON.stringify(receivedmsgToHash), signature);

            // validates the signature received
          }).then(signValidationResult => {

            console.log('signature validation result ', signValidationResult);
            let concatKey = _this.crypto.concatPMSwithRandoms(chatKeys.keys.premasterKey, chatKeys.keys.toRandom, chatKeys.keys.fromRandom);

            return _this.crypto.generateMasterSecret(concatKey, 'messageHistoric' + chatKeys.keys.toRandom + chatKeys.keys.fromRandom);

            // generates the master keys from the Premaster key and the randoms
          }).then(masterKey => {
            chatKeys.keys.masterKey = masterKey;

            return _this.crypto.generateKeys(masterKey, 'key expansion' + chatKeys.keys.toRandom + chatKeys.keys.fromRandom);

            // generates the symmetric keys to be used in the symmetric encryption
          }).then(keys => {
            chatKeys.keys.hypertyFromSessionKey = new Uint8Array(keys[0]);
            chatKeys.keys.hypertyToSessionKey = new Uint8Array(keys[1]);
            chatKeys.keys.hypertyFromHashKey = new Uint8Array(keys[2]);
            chatKeys.keys.hypertyToHashKey = new Uint8Array(keys[3]);
            iv = _this.crypto.decode(receivedValue.iv);
            let data = _this.crypto.decode(receivedValue.symetricEncryption);

            return _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, data, iv);

          }).then(decryptedData => {
            //console.log('decryptedData', decryptedData);

            chatKeys.handshakeHistory.senderCertificate = _this._filterMessageToHash(message, decryptedData + iv);

            let hashReceived = _this.crypto.decode(receivedValue.hash);

            filteredMessage = _this._filterMessageToHash(message, decryptedData + iv);

            return _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, JSON.stringify(filteredMessage), hashReceived);

          }).then(verifiedHash  => {

            //console.log('result of hash verification ', verifiedHash);
            let receiverFinishedMessage = {
              type: 'handshake',
              to: message.from,
              from: message.to,
              body: {
                handshakePhase: 'receiverFinishedMessage'
              }
            };
            iv = _this.crypto.generateIV();
            value.iv = _this.crypto.encode(iv);

            filteredMessage = _this._filterMessageToHash(receiverFinishedMessage, 'ok!' + iv, chatKeys.hypertyFrom.messageInfo);

            //console.log('TIAGO: doHandShakePhase verifiedHash');
            return _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, JSON.stringify(receiverFinishedMessage));
          }).then(hash => {

            value.hash = _this.crypto.encode(hash);
            return _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, 'ok!', iv);

          }).then(encryptedValue => {
            value.value = _this.crypto.encode(encryptedValue);
            let receiverFinishedMessage = {
              type: 'handshake',
              to: message.from,
              from: message.to,
              body: {
                handshakePhase: 'receiverFinishedMessage',
                value: btoa(JSON.stringify(value))
              }
            };

            chatKeys.handshakeHistory.receiverFinishedMessage = _this._filterMessageToHash(receiverFinishedMessage, 'ok!' + iv, chatKeys.hypertyFrom.messageInfo);
            chatKeys.authenticated = true;
            resolve({message: receiverFinishedMessage, chatKeys: chatKeys});
          });

          break;
        case 'receiverFinishedMessage':

          console.log('receiverFinishedMessage');
          chatKeys.authenticated = true;

          value = JSON.parse(atob(message.body.value));

          iv = _this.crypto.decode(value.iv);
          let data = _this.crypto.decode(value.value);
          hash = _this.crypto.decode(value.hash);

          _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, data, iv).then(decryptedData => {
            console.log('decryptedData', decryptedData);
            chatKeys.handshakeHistory.receiverFinishedMessage = _this._filterMessageToHash(message, decryptedData + iv);

            let filteredMessage = _this._filterMessageToHash(message, data + iv);
            _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, JSON.stringify(filteredMessage), hash).then(result => {
              console.log('hash result', result);

              // check if there was an initial message that was blocked and send it
              if (chatKeys.initialMessage) {
                let initialMessage = {
                  type: 'create',
                  to: message.from,
                  from: message.to,
                  body: {
                    value: chatKeys.initialMessage.body.value
                  }
                };

                resolve({message: initialMessage, chatKeys: chatKeys});

                //sends the sessionKey to the subscriber hyperty
              } else {
                _this._sendReporterSessionKey(message, chatKeys).then(value => {
                  resolve(value);
                });
              }
            });
          });

          break;
        case 'reporterSessionKey':

          console.log('reporterSessionKey');

          let valueIVandHash = JSON.parse(atob(message.body.value));
          hash = _this.crypto.decode(valueIVandHash.hash);
          iv = _this.crypto.decode(valueIVandHash.iv);
          let encryptedValue = _this.crypto.decode(valueIVandHash.value);
          let parsedValue;
          let sessionKey;
          let dataObjectURL;
          let receiverAcknowledgeMsg;

          console.log('[IdentityModule reporterSessionKey] - decryptAES: ', chatKeys.keys.hypertyToSessionKey, encryptedValue, iv);

          _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, encryptedValue, iv).then(decryptedValue => {

            parsedValue = JSON.parse(decryptedValue);
            sessionKey = _this.crypto.decode(parsedValue.value);
            dataObjectURL = parsedValue.dataObjectURL;

            let messageToHash = _this._filterMessageToHash(message, decryptedValue + iv);

            return _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, JSON.stringify(messageToHash), hash);

          }).then(hashResult => {

            //console.log('hash successfully validated ', hashResult);

            _this.dataObjectSessionKeys[dataObjectURL] =  {sessionKey: sessionKey, isToEncrypt: true};

            // TIAGO - persistence issue #147
            _this.storageManager.set('dataObjectSessionKeys', 0, _this.dataObjectSessionKeys);

            iv = _this.crypto.generateIV();
            value.iv = _this.crypto.encode(iv);

            return _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, 'ok!!', iv);
          }).then(encryptedValue => {

            receiverAcknowledgeMsg = {
              type: 'handshake',
              to: message.from,
              from: message.to,
              body: {
                handshakePhase: 'receiverAcknowledge'
              }
            };

            value.value = _this.crypto.encode(encryptedValue);
            let messageToHash = _this._filterMessageToHash(receiverAcknowledgeMsg, 'ok!!' + iv, chatKeys.hypertyFrom.messageInfo);

            return _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, JSON.stringify(messageToHash));
          }).then(hashedMessage => {
            let finalValue = btoa(JSON.stringify({value: value.value, hash: _this.crypto.encode(hashedMessage), iv: value.iv}));

            receiverAcknowledgeMsg.body.value = finalValue;
            resolve({message: receiverAcknowledgeMsg, chatKeys: chatKeys});
          });

          break;
        case 'receiverAcknowledge':

          console.log('receiverAcknowledge');

          let receivedvalueIVandHash = JSON.parse(atob(message.body.value));
          let receivedHash = _this.crypto.decode(receivedvalueIVandHash.hash);
          iv = _this.crypto.decode(receivedvalueIVandHash.iv);
          let receivedEncryptedValue = _this.crypto.decode(receivedvalueIVandHash.value);

          _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, receivedEncryptedValue, iv).then(decryptedValue => {

            let filteredMessage = _this._filterMessageToHash(message, decryptedValue + iv);
            return _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, JSON.stringify(filteredMessage), receivedHash);
          }).then(hashResult => {
            //console.log('hashResult ', hashResult);

            let callback = chatKeys.callback;

            if (callback) {
              callback('handShakeEnd');
            }
            resolve('handShakeEnd');
          });

          break;
        default:
          reject(message);
      }
    });
  }

  _sendReporterSessionKey(message, chatKeys) {
    let _this = this;
    let sessionKeyBundle = _this.dataObjectSessionKeys[chatKeys.dataObjectURL];
    let reporterSessionKeyMsg;
    let valueToEncrypt;
    let sessionKey;
    let iv;
    let value = {};

    return new Promise(function(resolve, reject) {

      //if there is not yet a session Key, generates a new one
      if (!sessionKeyBundle) {
        sessionKey = _this.crypto.generateRandom();
        _this.dataObjectSessionKeys[chatKeys.dataObjectURL] = {sessionKey: sessionKey, isToEncrypt: true};

        // TIAGO - persistence issue #147
        _this.storageManager.set('dataObjectSessionKeys', 0, _this.dataObjectSessionKeys);
      } else {
        sessionKey = sessionKeyBundle.sessionKey;
      }

      valueToEncrypt = JSON.stringify({value: _this.crypto.encode(sessionKey), dataObjectURL: chatKeys.dataObjectURL});

      iv = _this.crypto.generateIV();
      value.iv = _this.crypto.encode(iv);
      _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, valueToEncrypt, iv).then(encryptedValue => {

        reporterSessionKeyMsg = {
          type: 'handshake',
          to: message.from,
          from: message.to,
          body: {
            handshakePhase: 'reporterSessionKey',
            value: _this.crypto.encode(encryptedValue)
          }
        };

        let filteredMessage = _this._filterMessageToHash(reporterSessionKeyMsg, valueToEncrypt + iv, chatKeys.hypertyFrom.messageInfo);

        return _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, JSON.stringify(filteredMessage));
      }).then(hashedMessage => {

        let valueWithHash = btoa(JSON.stringify({value: reporterSessionKeyMsg.body.value, hash: _this.crypto.encode(hashedMessage), iv: value.iv}));

        reporterSessionKeyMsg.body.value = valueWithHash;
        resolve({message: reporterSessionKeyMsg, chatKeys: chatKeys});
      });
    });
  }

  /**
  * returns the reporter associated to the dataObject URL
  * @param   {String}   dataObjectURL         dataObject url
  * @return   {String}  reporter              dataObject url reporter
  */
  _getHypertyFromDataObject(dataObjectURL) {
    let _this = this;

    return new Promise(function(resolve, reject) {

      //TODO remove this logic and move it to a util function

      let splitedURL = dataObjectURL.split('/');
      let finalURL = splitedURL[0] + '//' + splitedURL[2] + '/' + splitedURL[3];
      if (splitedURL.length > 6) {
        finalURL = splitedURL[0] + '//' + splitedURL[2] + '/' + splitedURL[3] + '/' + splitedURL[4];
      }

      // check if is the creator of the hyperty
      let reporterURL = _this.registry.getReporterURLSynchonous(finalURL);

      if (reporterURL) {
        resolve(reporterURL);
      } else {
        // check if there is already an association from an hypertyURL to the dataObject
        let storedReporterURL = _this.dataObjectsIdentity[finalURL];

        if (storedReporterURL) {
          resolve(storedReporterURL);
        } else {
          // check if there is any hyperty that subscribed the dataObjectURL
          let subscriberHyperty = _this.registry.getDataObjectSubscriberHyperty(dataObjectURL);

          if (subscriberHyperty) {
            resolve(subscriberHyperty);
          } else {

            // search in domain registry for the hyperty associated to the dataObject
            // search in case is a subscriber who wants to know the reporter
            _this.registry.discoverDataObjectPerURL(finalURL, splitedURL[2]).then(dataObject => {
              _this.dataObjectsIdentity[finalURL] = dataObject.reporter;
              resolve(dataObject.reporter);
            }, err => {
              reject(err);
            });
          }
        }
      }
    });
  }

  /**
  * filter the messages to hash, by removing some fields not generated by the runtime core
  * @param {Message}  message                     message
  * @param {String}  decryptedValue (Optional)    value from body.value in case it originally comes encrypted
  * @param {JSON}  identity(Optional)    add the hyperty identity associated in case is not added to the initial message
  * @return {Message}  new message filtered
  */
  _filterMessageToHash(message, decryptedValue, identity) {

    return {
      type: message.type,
      from: message.from,
      to: message.to,
      body: {
        identity: identity || message.body.identity,
        value: decryptedValue || message.body.value,
        handshakePhase: message.body.handshakePhase
      }
    };
  }

  /**
  * generates the initial structure for the keys between two users
  * @param {JSON}    message              initial message that triggers the mutual authentication
  * @param {String}  userURL              userURL
  * @param {boolean} receiver(Optional)  indicates if is the sender or the receiver that creates a new chat crypto
  * @return {JSON} newChatCrypto  new JSON structure for the chat crypto
  */
  _newChatCrypto(message, userURL, receiver) {
    let _this = this;

    //check whether is the sender or the receiver to create a new chatCrypto
    //to mantain consistency on the keys if the receiver create a new chatCrypto,
    //then invert the fields
    let from = (receiver) ? message.to : message.from;
    let to = (receiver) ? message.from : message.to;

    let userInfo = _this.getIdentity(userURL);

    //console.log('TIAGO: UserInfo: ', userInfo);
    //console.log('TIAGO: UserInfo.keyPair: ', userInfo.keyPair);

    let newChatCrypto =
      {
        hypertyFrom:
        {
          hyperty: from,
          userID: userInfo.messageInfo.userProfile.username,
          privateKey: userInfo.keyPair.private,
          publicKey: userInfo.keyPair.public,
          assertion: userInfo.assertion,
          messageInfo: userInfo.messageInfo
        },
        hypertyTo:
        {
          hyperty: to,
          userID: undefined,
          publicKey: undefined,
          assertion: undefined
        },
        keys:
        {
          hypertyToSessionKey: undefined,
          hypertyFromSessionKey: undefined,
          hypertyToHashKey: undefined,
          hypertyFromHashKey: undefined,
          toRandom: undefined,
          fromRandom: undefined,
          premasterKey: undefined,
          masterKey: undefined
        },
        handshakeHistory: {
          senderHello: undefined,
          receiverHello: undefined,
          senderCertificate: undefined,
          receiverFinishedMessage: undefined
        },
        initialMessage: (message.body.ignore) ? undefined : message,
        callback: message.callback,
        authenticated: false,
        dataObjectURL: message.dataObjectURL
      };

    return newChatCrypto;
  }
}

export default IdentityModule;
