/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

// Distribution file for minibus.js 
// version: 0.5.0
// Last build: Sat Jul 02 2016 00:21:19 GMT+0100 (WEST)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.minibus=e()}}(function(){return function e(t,r,n){function o(i,u){if(!r[i]){if(!t[i]){var c="function"==typeof require&&require;if(!u&&c)return c(i,!0);if(s)return s(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[i]={exports:{}};t[i][0].call(f.exports,function(e){var r=t[i][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":11}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":12}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":13}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":14}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":15}],6:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],7:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),s=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":2}],8:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/object/create")["default"],o=e("babel-runtime/core-js/object/set-prototype-of")["default"];r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=n(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o?o(e,t):e.__proto__=t)},r.__esModule=!0},{"babel-runtime/core-js/object/create":1,"babel-runtime/core-js/object/set-prototype-of":4}],9:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../helpers/typeof"),s=n(o);r["default"]=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,s["default"])(t))&&"function"!=typeof t?e:t}},{"../helpers/typeof":10}],10:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/symbol")["default"];r["default"]=function(e){return e&&e.constructor===n?"symbol":typeof e},r.__esModule=!0},{"babel-runtime/core-js/symbol":5}],11:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t){return n.create(e,t)}},{"../../modules/$":33}],12:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t,r){return n.setDesc(e,t,r)}},{"../../modules/$":33}],13:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/$.core").Object.getPrototypeOf},{"../../modules/$.core":19,"../../modules/es6.object.get-prototype-of":46}],14:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/$.core").Object.setPrototypeOf},{"../../modules/$.core":19,"../../modules/es6.object.set-prototype-of":47}],15:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),t.exports=e("../../modules/$.core").Symbol},{"../../modules/$.core":19,"../../modules/es6.object.to-string":48,"../../modules/es6.symbol":49}],16:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],17:[function(e,t,r){var n=e("./$.is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./$.is-object":32}],18:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],19:[function(e,t,r){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},{}],20:[function(e,t,r){var n=e("./$.a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./$.a-function":16}],21:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],22:[function(e,t,r){t.exports=!e("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./$.fails":25}],23:[function(e,t,r){var n=e("./$");t.exports=function(e){var t=n.getKeys(e),r=n.getSymbols;if(r)for(var o,s=r(e),i=n.isEnum,u=0;s.length>u;)i.call(e,o=s[u++])&&t.push(o);return t}},{"./$":33}],24:[function(e,t,r){var n=e("./$.global"),o=e("./$.core"),s=e("./$.ctx"),i="prototype",u=function(e,t,r){var c,a,f,l=e&u.F,p=e&u.G,b=e&u.S,d=e&u.P,y=e&u.B,h=e&u.W,$=p?o:o[t]||(o[t]={}),_=p?n:b?n[t]:(n[t]||{})[i];p&&(r=t);for(c in r)a=!l&&_&&c in _,a&&c in $||(f=a?_[c]:r[c],$[c]=p&&"function"!=typeof _[c]?r[c]:y&&a?s(f,n):h&&_[c]==f?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[i]=e[i],t}(f):d&&"function"==typeof f?s(Function.call,f):f,d&&(($[i]||($[i]={}))[c]=f))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},{"./$.core":19,"./$.ctx":20,"./$.global":27}],25:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],26:[function(e,t,r){var n=e("./$.to-iobject"),o=e("./$").getNames,s={}.toString,i="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(e){try{return o(e)}catch(t){return i.slice()}};t.exports.get=function(e){return i&&"[object Window]"==s.call(e)?u(e):o(n(e))}},{"./$":33,"./$.to-iobject":42}],27:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],28:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],29:[function(e,t,r){var n=e("./$"),o=e("./$.property-desc");t.exports=e("./$.descriptors")?function(e,t,r){return n.setDesc(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./$":33,"./$.descriptors":22,"./$.property-desc":37}],30:[function(e,t,r){var n=e("./$.cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./$.cof":18}],31:[function(e,t,r){var n=e("./$.cof");t.exports=Array.isArray||function(e){return"Array"==n(e)}},{"./$.cof":18}],32:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],33:[function(e,t,r){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},{}],34:[function(e,t,r){var n=e("./$"),o=e("./$.to-iobject");t.exports=function(e,t){for(var r,s=o(e),i=n.getKeys(s),u=i.length,c=0;u>c;)if(s[r=i[c++]]===t)return r}},{"./$":33,"./$.to-iobject":42}],35:[function(e,t,r){t.exports=!0},{}],36:[function(e,t,r){var n=e("./$.export"),o=e("./$.core"),s=e("./$.fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*s(function(){r(1)}),"Object",i)}},{"./$.core":19,"./$.export":24,"./$.fails":25}],37:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],38:[function(e,t,r){t.exports=e("./$.hide")},{"./$.hide":29}],39:[function(e,t,r){var n=e("./$").getDesc,o=e("./$.is-object"),s=e("./$.an-object"),i=function(e,t){if(s(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./$.ctx")(Function.call,n(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(s){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:i}},{"./$":33,"./$.an-object":17,"./$.ctx":20,"./$.is-object":32}],40:[function(e,t,r){var n=e("./$").setDesc,o=e("./$.has"),s=e("./$.wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,s)&&n(e,s,{configurable:!0,value:t})}},{"./$":33,"./$.has":28,"./$.wks":45}],41:[function(e,t,r){var n=e("./$.global"),o="__core-js_shared__",s=n[o]||(n[o]={});t.exports=function(e){return s[e]||(s[e]={})}},{"./$.global":27}],42:[function(e,t,r){var n=e("./$.iobject"),o=e("./$.defined");t.exports=function(e){return n(o(e))}},{"./$.defined":21,"./$.iobject":30}],43:[function(e,t,r){var n=e("./$.defined");t.exports=function(e){return Object(n(e))}},{"./$.defined":21}],44:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],45:[function(e,t,r){var n=e("./$.shared")("wks"),o=e("./$.uid"),s=e("./$.global").Symbol;t.exports=function(e){return n[e]||(n[e]=s&&s[e]||(s||o)("Symbol."+e))}},{"./$.global":27,"./$.shared":41,"./$.uid":44}],46:[function(e,t,r){var n=e("./$.to-object");e("./$.object-sap")("getPrototypeOf",function(e){return function(t){return e(n(t))}})},{"./$.object-sap":36,"./$.to-object":43}],47:[function(e,t,r){var n=e("./$.export");n(n.S,"Object",{setPrototypeOf:e("./$.set-proto").set})},{"./$.export":24,"./$.set-proto":39}],48:[function(e,t,r){},{}],49:[function(e,t,r){"use strict";var n=e("./$"),o=e("./$.global"),s=e("./$.has"),i=e("./$.descriptors"),u=e("./$.export"),c=e("./$.redefine"),a=e("./$.fails"),f=e("./$.shared"),l=e("./$.set-to-string-tag"),p=e("./$.uid"),b=e("./$.wks"),d=e("./$.keyof"),y=e("./$.get-names"),h=e("./$.enum-keys"),$=e("./$.is-array"),_=e("./$.an-object"),v=e("./$.to-iobject"),m=e("./$.property-desc"),g=n.getDesc,j=n.setDesc,x=n.create,O=y.get,k=o.Symbol,w=o.JSON,M=w&&w.stringify,S=!1,P=b("_hidden"),C=n.isEnum,E=f("symbol-registry"),D=f("symbols"),L="function"==typeof k,N=Object.prototype,T=i&&a(function(){return 7!=x(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=g(N,t);n&&delete N[t],j(e,t,r),n&&e!==N&&j(N,t,n)}:j,F=function(e){var t=D[e]=x(k.prototype);return t._k=e,i&&S&&T(N,e,{configurable:!0,set:function(t){s(this,P)&&s(this[P],e)&&(this[P][e]=!1),T(this,e,m(1,t))}}),t},I=function(e){return"symbol"==typeof e},R=function(e,t,r){return r&&s(D,t)?(r.enumerable?(s(e,P)&&e[P][t]&&(e[P][t]=!1),r=x(r,{enumerable:m(0,!1)})):(s(e,P)||j(e,P,m(1,{})),e[P][t]=!0),T(e,t,r)):j(e,t,r)},B=function(e,t){_(e);for(var r,n=h(t=v(t)),o=0,s=n.length;s>o;)R(e,r=n[o++],t[r]);return e},A=function(e,t){return void 0===t?x(e):B(x(e),t)},W=function(e){var t=C.call(this,e);return!(t||!s(this,e)||!s(D,e)||s(this,P)&&this[P][e])||t},q=function(e,t){var r=g(e=v(e),t);return!r||!s(D,t)||s(e,P)&&e[P][t]||(r.enumerable=!0),r},J=function(e){for(var t,r=O(v(e)),n=[],o=0;r.length>o;)s(D,t=r[o++])||t==P||n.push(t);return n},G=function(e){for(var t,r=O(v(e)),n=[],o=0;r.length>o;)s(D,t=r[o++])&&n.push(D[t]);return n},K=function(e){if(void 0!==e&&!I(e)){for(var t,r,n=[e],o=1,s=arguments;s.length>o;)n.push(s[o++]);return t=n[1],"function"==typeof t&&(r=t),!r&&$(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!I(t))return t}),n[1]=t,M.apply(w,n)}},U=a(function(){var e=k();return"[null]"!=M([e])||"{}"!=M({a:e})||"{}"!=M(Object(e))});L||(k=function(){if(I(this))throw TypeError("Symbol is not a constructor");return F(p(arguments.length>0?arguments[0]:void 0))},c(k.prototype,"toString",function(){return this._k}),I=function(e){return e instanceof k},n.create=A,n.isEnum=W,n.getDesc=q,n.setDesc=R,n.setDescs=B,n.getNames=y.get=J,n.getSymbols=G,i&&!e("./$.library")&&c(N,"propertyIsEnumerable",W,!0));var z={"for":function(e){return s(E,e+="")?E[e]:E[e]=k(e)},keyFor:function(e){return d(E,e)},useSetter:function(){S=!0},useSimple:function(){S=!1}};n.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=b(e);z[e]=L?t:F(t)}),S=!0,u(u.G+u.W,{Symbol:k}),u(u.S,"Symbol",z),u(u.S+u.F*!L,"Object",{create:A,defineProperty:R,defineProperties:B,getOwnPropertyDescriptor:q,getOwnPropertyNames:J,getOwnPropertySymbols:G}),w&&u(u.S+u.F*(!L||U),"JSON",{stringify:K}),l(k,"Symbol"),l(Math,"Math",!0),l(o.JSON,"JSON",!0)},{"./$":33,"./$.an-object":17,"./$.descriptors":22,"./$.enum-keys":23,"./$.export":24,"./$.fails":25,"./$.get-names":26,"./$.global":27,"./$.has":28,"./$.is-array":31,"./$.keyof":34,"./$.library":35,"./$.property-desc":37,"./$.redefine":38,"./$.set-to-string-tag":40,"./$.shared":41,"./$.to-iobject":42,"./$.uid":44,"./$.wks":45}],50:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),s=n(o),i=e("babel-runtime/helpers/createClass"),u=n(i),c=function(){function e(){(0,s["default"])(this,e);var t=this;t._msgId=0,t._subscriptions={},t._responseTimeOut=5e3,t._responseCallbacks={},t._registerExternalListener()}return(0,u["default"])(e,[{key:"addListener",value:function(e,t){var r=this,n=new a(r._subscriptions,e,t),o=r._subscriptions[e];return o||(o=[],r._subscriptions[e]=o),o.push(n),n}},{key:"addResponseListener",value:function(e,t,r){this._responseCallbacks[e+t]=r}},{key:"removeResponseListener",value:function(e,t){delete this._responseCallbacks[e+t]}},{key:"removeAllListenersOf",value:function(e){delete this._subscriptions[e]}},{key:"bind",value:function(e,t,r){var n=this,o=this,s=o.addListener(e,function(e){r.postMessage(e)}),i=r.addListener(t,function(e){o.postMessage(e)});return{thisListener:s,targetListener:i,unbind:function(){n.thisListener.remove(),n.targetListener.remove()}}}},{key:"_publishOnDefault",value:function(e){var t=this._subscriptions["*"];t&&this._publishOn(t,e)}},{key:"_publishOn",value:function(e,t){e.forEach(function(e){e._callback(t)})}},{key:"_responseCallback",value:function(e,t){var r=this;t&&!function(){var n=e.from+e.id;r._responseCallbacks[n]=t,setTimeout(function(){var t=r._responseCallbacks[n];if(delete r._responseCallbacks[n],t){var o={id:e.id,type:"response",body:{code:408,desc:"Response timeout!",value:e}};t(o)}},r._responseTimeOut)}()}},{key:"_onResponse",value:function(e){var t=this;if("response"===e.type){var r=e.to+e.id,n=t._responseCallbacks[r];if(e.body.code>=200&&delete t._responseCallbacks[r],n)return n(e),!0}return!1}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?t._publishOn(r,e):t._publishOnDefault(e)}}},{key:"_genId",value:function(e){e.id&&0!==e.id||(this._msgId++,e.id=this._msgId)}},{key:"postMessage",value:function(e,t){}},{key:"_onPostMessage",value:function(e){}},{key:"_registerExternalListener",value:function(){}}]),e}(),a=function(){function e(t,r,n){(0,s["default"])(this,e);var o=this;o._subscriptions=t,o._url=r,o._callback=n}return(0,u["default"])(e,[{key:"remove",value:function(){var e=this,t=e._subscriptions[e._url];if(t){var r=t.indexOf(e);t.splice(r,1),0===t.length&&delete e._subscriptions[e._url]}}},{key:"url",get:function(){return this._url}}]),e}();r["default"]=c,t.exports=r["default"]},{"babel-runtime/helpers/classCallCheck":6,"babel-runtime/helpers/createClass":7}],51:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/object/get-prototype-of"),s=n(o),i=e("babel-runtime/helpers/classCallCheck"),u=n(i),c=e("babel-runtime/helpers/createClass"),a=n(c),f=e("babel-runtime/helpers/possibleConstructorReturn"),l=n(f),p=e("babel-runtime/helpers/inherits"),b=n(p),d=e("./Bus"),y=n(d),h=function(e){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,(0,s["default"])(t).call(this))}return(0,b["default"])(t,e),(0,a["default"])(t,[{key:"postMessage",value:function(e,t){var r=this;return r._genId(e),r._responseCallback(e,t),r._onPostMessage(e),e.id}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?(t._publishOn(r,e),e.to.startsWith("hyperty")||t._publishOnDefault(e)):t._publishOnDefault(e)}}}]),t}(y["default"]);r["default"]=h,t.exports=r["default"]},{"./Bus":50,"babel-runtime/core-js/object/get-prototype-of":3,"babel-runtime/helpers/classCallCheck":6,"babel-runtime/helpers/createClass":7,"babel-runtime/helpers/inherits":8,"babel-runtime/helpers/possibleConstructorReturn":9}],52:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("./bus/MiniBus"),s=n(o);r["default"]=s["default"],t.exports=r["default"]},{"./bus/MiniBus":51}]},{},[52])(52)});
//# sourceMappingURL=minibus.js.map
