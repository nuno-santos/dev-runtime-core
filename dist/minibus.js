// Runtime User Agent 

// version: 0.4.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.MiniBus=e()}}(function(){return function e(t,n,r){function o(s,u){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e);var t=this;t._msgId=0,t._subscriptions={},t._responseTimeOut=5e3,t._responseCallbacks={},t._registerExternalListener()}return o(e,[{key:"addListener",value:function(e,t){var n=this,r=new s(n._subscriptions,e,t),o=n._subscriptions[e];return o||(o=[],n._subscriptions[e]=o),o.push(r),r}},{key:"addResponseListener",value:function(e,t,n){this._responseCallbacks[e+t]=n}},{key:"removeResponseListener",value:function(e,t){delete this._responseCallbacks[e+t]}},{key:"removeAllListenersOf",value:function(e){delete this._subscriptions[e]}},{key:"bind",value:function(e,t,n){var r=this,o=this,i=o.addListener(e,function(e){n.postMessage(e)}),s=n.addListener(t,function(e){o.postMessage(e)});return{thisListener:i,targetListener:s,unbind:function(){r.thisListener.remove(),r.targetListener.remove()}}}},{key:"_publishOnDefault",value:function(e){var t=this._subscriptions["*"];t&&this._publishOn(t,e)}},{key:"_publishOn",value:function(e,t){e.forEach(function(e){e._callback(t)})}},{key:"_responseCallback",value:function(e,t){var n=this;t&&!function(){var r=e.from+e.id;n._responseCallbacks[r]=t,setTimeout(function(){var t=n._responseCallbacks[r];if(delete n._responseCallbacks[r],t){var o={id:e.id,type:"response",body:{code:408,desc:"Response timeout!",value:e}};t(o)}},n._responseTimeOut)}()}},{key:"_onResponse",value:function(e){var t=this;if("response"===e.type){var n=e.to+e.id,r=t._responseCallbacks[n];if(e.body.code>=200&&delete t._responseCallbacks[n],r)return r(e),!0}return!1}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var n=t._subscriptions[e.to];n?t._publishOn(n,e):t._publishOnDefault(e)}}},{key:"_genId",value:function(e){e.id&&0!==e.id||(this._msgId++,e.id=this._msgId)}},{key:"postMessage",value:function(e,t){}},{key:"_onPostMessage",value:function(e){}},{key:"_registerExternalListener",value:function(){}}]),e}(),s=function(){function e(t,n,o){r(this,e);var i=this;i._subscriptions=t,i._url=n,i._callback=o}return o(e,[{key:"remove",value:function(){var e=this,t=e._subscriptions[e._url];if(t){var n=t.indexOf(e);t.splice(n,1),0===t.length&&delete e._subscriptions[e._url]}}},{key:"url",get:function(){return this._url}}]),e}();n["default"]=i,t.exports=n["default"]},{}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,s=n;r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=i,n=s,r=!0,u=l=void 0}},a=e("./Bus"),l=r(a),f=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this)}return i(t,e),s(t,[{key:"postMessage",value:function(e,t){var n=this;return n._genId(e),n._responseCallback(e,t),n._onPostMessage(e),e.id}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var n=t._subscriptions[e.to];n?(t._publishOn(n,e),e.to.startsWith("hyperty")||t._publishOnDefault(e)):t._publishOnDefault(e)}}}]),t}(l["default"]);n["default"]=f,t.exports=n["default"]},{"./Bus":1}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./bus/MiniBus"),i=r(o);n["default"]=i["default"],t.exports=n["default"]},{"./bus/MiniBus":2}]},{},[3])(3)});