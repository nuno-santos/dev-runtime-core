/**
* Minimal interface and implementation to send and receive messages. It can be reused in many type of components.
* Components that need a message system should receive this class as a dependency or extend it.
* Extensions should implement the following private methods: _onPostMessage and _registerExternalListener.
*/
// version: 0.4.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.MiniBus=e()}}(function(){return function e(n,t,r){function s(o,u){if(!t[o]){if(!n[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var f=t[o]={exports:{}};n[o][0].call(f.exports,function(e){var t=n[o][1][e];return s(t?t:e)},f,f.exports,e,n,t,r)}return t[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=function(){function e(){r(this,e);var n=this;n._msgId=0,n._subscriptions={},n._responseTimeOut=5e3,n._responseCallbacks={},n._registerExternalListener()}return s(e,[{key:"addListener",value:function(e,n){var t=this,r=new o(t._subscriptions,e,n),s=t._subscriptions[e];return s||(s=[],t._subscriptions[e]=s),s.push(r),r}},{key:"addResponseListener",value:function(e,n,t){this._responseCallbacks[e+n]=t}},{key:"removeResponseListener",value:function(e,n){delete this._responseCallbacks[e+n]}},{key:"removeAllListenersOf",value:function(e){delete this._subscriptions[e]}},{key:"bind",value:function(e,n,t){var r=this,s=this,i=s.addListener(e,function(e){t.postMessage(e)}),o=t.addListener(n,function(e){s.postMessage(e)});return{thisListener:i,targetListener:o,unbind:function(){r.thisListener.remove(),r.targetListener.remove()}}}},{key:"_publishOnDefault",value:function(e){var n=this._subscriptions["*"];n&&this._publishOn(n,e)}},{key:"_publishOn",value:function(e,n){e.forEach(function(e){e._callback(n)})}},{key:"_responseCallback",value:function(e,n){var t=this;n&&!function(){var r=e.from+e.id;t._responseCallbacks[r]=n,setTimeout(function(){var n=t._responseCallbacks[r];if(delete t._responseCallbacks[r],n){var s={id:e.id,type:"response",body:{code:408,desc:"Response timeout!",value:e}};n(s)}},t._responseTimeOut)}()}},{key:"_onResponse",value:function(e){var n=this;if("response"===e.type){var t=e.to+e.id,r=n._responseCallbacks[t];if(e.body.code>=200&&delete n._responseCallbacks[t],r)return r(e),!0}return!1}},{key:"_onMessage",value:function(e){var n=this;if(!n._onResponse(e)){var t=n._subscriptions[e.to];t?n._publishOn(t,e):n._publishOnDefault(e)}}},{key:"_genId",value:function(e){e.id&&0!==e.id||(this._msgId++,e.id=this._msgId)}},{key:"postMessage",value:function(e,n){}},{key:"_onPostMessage",value:function(e){}},{key:"_registerExternalListener",value:function(){}}]),e}(),o=function(){function e(n,t,s){r(this,e);var i=this;i._subscriptions=n,i._url=t,i._callback=s}return s(e,[{key:"remove",value:function(){var e=this,n=e._subscriptions[e._url];if(n){var t=n.indexOf(e);n.splice(t,1),0===n.length&&delete e._subscriptions[e._url]}}},{key:"url",get:function(){return this._url}}]),e}();t["default"]=i},{}],2:[function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=e("./Bus"),l=r(a),f=function(e){function n(){return s(this,n),i(this,Object.getPrototypeOf(n).call(this))}return o(n,e),u(n,[{key:"postMessage",value:function(e,n){var t=this;return t._genId(e),t._responseCallback(e,n),t._onPostMessage(e),e.id}},{key:"_onMessage",value:function(e){var n=this;if(!n._onResponse(e)){var t=n._subscriptions[e.to];t?(n._publishOn(t,e),e.to.startsWith("hyperty")||n._publishOnDefault(e)):n._publishOnDefault(e)}}}]),n}(l["default"]);t["default"]=f},{"./Bus":1}],3:[function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=e("./bus/MiniBus"),i=r(s);t["default"]=i["default"]},{"./bus/MiniBus":2}]},{},[3])(3)});