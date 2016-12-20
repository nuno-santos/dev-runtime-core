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
// version: 0.7.1
// Last build: Tue Dec 20 2016 17:26:17 GMT+0100 (W. Europe Standard Time)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.minibus=e()}}(function(){return function e(t,r,o){function n(s,u){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!u&&c)return c(s,!0);if(i)return i(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var a=r[s]={exports:{}};t[s][0].call(a.exports,function(e){var r=t[s][1][e];return n(r?r:e)},a,a.exports,e,t,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":12}],2:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":13}],3:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":14}],4:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":15}],5:[function(e,t,r){t.exports={default:e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":16}],6:[function(e,t,r){t.exports={default:e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":17}],7:[function(e,t,r){"use strict";r.__esModule=!0,r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],8:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var n=e("../core-js/object/define-property"),i=o(n);r.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}()},{"../core-js/object/define-property":2}],9:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var n=e("../core-js/object/set-prototype-of"),i=o(n),s=e("../core-js/object/create"),u=o(s),c=e("../helpers/typeof"),f=o(c);r.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,f.default)(t)));e.prototype=(0,u.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}},{"../core-js/object/create":1,"../core-js/object/set-prototype-of":4,"../helpers/typeof":11}],10:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var n=e("../helpers/typeof"),i=o(n);r.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,i.default)(t))&&"function"!=typeof t?e:t}},{"../helpers/typeof":11}],11:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var n=e("../core-js/symbol/iterator"),i=o(n),s=e("../core-js/symbol"),u=o(s),c="function"==typeof u.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof u.default&&e.constructor===u.default&&e!==u.default.prototype?"symbol":typeof e};r.default="function"==typeof u.default&&"symbol"===c(i.default)?function(e){return"undefined"==typeof e?"undefined":c(e)}:function(e){return e&&"function"==typeof u.default&&e.constructor===u.default&&e!==u.default.prototype?"symbol":"undefined"==typeof e?"undefined":c(e)}},{"../core-js/symbol":5,"../core-js/symbol/iterator":6}],12:[function(e,t,r){e("../../modules/es6.object.create");var o=e("../../modules/_core").Object;t.exports=function(e,t){return o.create(e,t)}},{"../../modules/_core":23,"../../modules/es6.object.create":77}],13:[function(e,t,r){e("../../modules/es6.object.define-property");var o=e("../../modules/_core").Object;t.exports=function(e,t,r){return o.defineProperty(e,t,r)}},{"../../modules/_core":23,"../../modules/es6.object.define-property":78}],14:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/_core").Object.getPrototypeOf},{"../../modules/_core":23,"../../modules/es6.object.get-prototype-of":79}],15:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/_core").Object.setPrototypeOf},{"../../modules/_core":23,"../../modules/es6.object.set-prototype-of":80}],16:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),e("../../modules/es7.symbol.async-iterator"),e("../../modules/es7.symbol.observable"),t.exports=e("../../modules/_core").Symbol},{"../../modules/_core":23,"../../modules/es6.object.to-string":81,"../../modules/es6.symbol":83,"../../modules/es7.symbol.async-iterator":84,"../../modules/es7.symbol.observable":85}],17:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/_wks-ext").f("iterator")},{"../../modules/_wks-ext":74,"../../modules/es6.string.iterator":82,"../../modules/web.dom.iterable":86}],18:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],19:[function(e,t,r){t.exports=function(){}},{}],20:[function(e,t,r){var o=e("./_is-object");t.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":39}],21:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var u,c=o(t),f=n(c.length),a=i(s,f);if(e&&r!=r){for(;f>a;)if(u=c[a++],u!=u)return!0}else for(;f>a;a++)if((e||a in c)&&c[a]===r)return e||a||0;return!e&&-1}}},{"./_to-index":66,"./_to-iobject":68,"./_to-length":69}],22:[function(e,t,r){var o={}.toString;t.exports=function(e){return o.call(e).slice(8,-1)}},{}],23:[function(e,t,r){var o=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},{}],24:[function(e,t,r){var o=e("./_a-function");t.exports=function(e,t,r){if(o(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,n){return e.call(t,r,o,n)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":18}],25:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],26:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":31}],27:[function(e,t,r){var o=e("./_is-object"),n=e("./_global").document,i=o(n)&&o(n.createElement);t.exports=function(e){return i?n.createElement(e):{}}},{"./_global":32,"./_is-object":39}],28:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],29:[function(e,t,r){var o=e("./_object-keys"),n=e("./_object-gops"),i=e("./_object-pie");t.exports=function(e){var t=o(e),r=n.f;if(r)for(var s,u=r(e),c=i.f,f=0;u.length>f;)c.call(e,s=u[f++])&&t.push(s);return t}},{"./_object-gops":53,"./_object-keys":56,"./_object-pie":57}],30:[function(e,t,r){var o=e("./_global"),n=e("./_core"),i=e("./_ctx"),s=e("./_hide"),u="prototype",c=function(e,t,r){var f,a,l,_=e&c.F,p=e&c.G,d=e&c.S,b=e&c.P,y=e&c.B,h=e&c.W,j=p?n:n[t]||(n[t]={}),v=j[u],m=p?o:d?o[t]:(o[t]||{})[u];p&&(r=t);for(f in r)a=!_&&m&&void 0!==m[f],a&&f in j||(l=a?m[f]:r[f],j[f]=p&&"function"!=typeof m[f]?r[f]:y&&a?i(l,o):h&&m[f]==l?function(e){var t=function(t,r,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,o)}return e.apply(this,arguments)};return t[u]=e[u],t}(l):b&&"function"==typeof l?i(Function.call,l):l,b&&((j.virtual||(j.virtual={}))[f]=l,e&c.R&&v&&!v[f]&&s(v,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},{"./_core":23,"./_ctx":24,"./_global":32,"./_hide":34}],31:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(e){return!0}}},{}],32:[function(e,t,r){var o=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},{}],33:[function(e,t,r){var o={}.hasOwnProperty;t.exports=function(e,t){return o.call(e,t)}},{}],34:[function(e,t,r){var o=e("./_object-dp"),n=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return o.f(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":26,"./_object-dp":48,"./_property-desc":59}],35:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":32}],36:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":26,"./_dom-create":27,"./_fails":31}],37:[function(e,t,r){var o=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},{"./_cof":22}],38:[function(e,t,r){var o=e("./_cof");t.exports=Array.isArray||function(e){return"Array"==o(e)}},{"./_cof":22}],39:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],40:[function(e,t,r){"use strict";var o=e("./_object-create"),n=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=o(s,{next:n(1,r)}),i(e,t+" Iterator")}},{"./_hide":34,"./_object-create":47,"./_property-desc":59,"./_set-to-string-tag":62,"./_wks":75}],41:[function(e,t,r){"use strict";var o=e("./_library"),n=e("./_export"),i=e("./_redefine"),s=e("./_hide"),u=e("./_has"),c=e("./_iterators"),f=e("./_iter-create"),a=e("./_set-to-string-tag"),l=e("./_object-gpo"),_=e("./_wks")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",b="keys",y="values",h=function(){return this};t.exports=function(e,t,r,j,v,m,g){f(r,t,j);var x,k,w,O=function(e){if(!p&&e in E)return E[e];switch(e){case b:return function(){return new r(this,e)};case y:return function(){return new r(this,e)}}return function(){return new r(this,e)}},S=t+" Iterator",M=v==y,P=!1,E=e.prototype,C=E[_]||E[d]||v&&E[v],T=C||O(v),L=v?M?O("entries"):T:void 0,F="Array"==t?E.entries||C:C;if(F&&(w=l(F.call(new e)),w!==Object.prototype&&(a(w,S,!0),o||u(w,_)||s(w,_,h))),M&&C&&C.name!==y&&(P=!0,T=function(){return C.call(this)}),o&&!g||!p&&!P&&E[_]||s(E,_,T),c[t]=T,c[S]=h,v)if(x={values:M?T:O(y),keys:m?T:O(b),entries:L},g)for(k in x)k in E||i(E,k,x[k]);else n(n.P+n.F*(p||P),t,x);return x}},{"./_export":30,"./_has":33,"./_hide":34,"./_iter-create":40,"./_iterators":43,"./_library":45,"./_object-gpo":54,"./_redefine":60,"./_set-to-string-tag":62,"./_wks":75}],42:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],43:[function(e,t,r){t.exports={}},{}],44:[function(e,t,r){var o=e("./_object-keys"),n=e("./_to-iobject");t.exports=function(e,t){for(var r,i=n(e),s=o(i),u=s.length,c=0;u>c;)if(i[r=s[c++]]===t)return r}},{"./_object-keys":56,"./_to-iobject":68}],45:[function(e,t,r){t.exports=!0},{}],46:[function(e,t,r){var o=e("./_uid")("meta"),n=e("./_is-object"),i=e("./_has"),s=e("./_object-dp").f,u=0,c=Object.isExtensible||function(){return!0},f=!e("./_fails")(function(){return c(Object.preventExtensions({}))}),a=function(e){s(e,o,{value:{i:"O"+ ++u,w:{}}})},l=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,o)){if(!c(e))return"F";if(!t)return"E";a(e)}return e[o].i},_=function(e,t){if(!i(e,o)){if(!c(e))return!0;if(!t)return!1;a(e)}return e[o].w},p=function(e){return f&&d.NEED&&c(e)&&!i(e,o)&&a(e),e},d=t.exports={KEY:o,NEED:!1,fastKey:l,getWeak:_,onFreeze:p}},{"./_fails":31,"./_has":33,"./_is-object":39,"./_object-dp":48,"./_uid":72}],47:[function(e,t,r){var o=e("./_an-object"),n=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),u=function(){},c="prototype",f=function(){var t,r=e("./_dom-create")("iframe"),o=i.length,n="<",s=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write(n+"script"+s+"document.F=Object"+n+"/script"+s),t.close(),f=t.F;o--;)delete f[c][i[o]];return f()};t.exports=Object.create||function(e,t){var r;return null!==e?(u[c]=o(e),r=new u,u[c]=null,r[s]=e):r=f(),void 0===t?r:n(r,t)}},{"./_an-object":20,"./_dom-create":27,"./_enum-bug-keys":28,"./_html":35,"./_object-dps":49,"./_shared-key":63}],48:[function(e,t,r){var o=e("./_an-object"),n=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(o(e),t=i(t,!0),o(r),n)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":20,"./_descriptors":26,"./_ie8-dom-define":36,"./_to-primitive":71}],49:[function(e,t,r){var o=e("./_object-dp"),n=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){n(e);for(var r,s=i(t),u=s.length,c=0;u>c;)o.f(e,r=s[c++],t[r]);return e}},{"./_an-object":20,"./_descriptors":26,"./_object-dp":48,"./_object-keys":56}],50:[function(e,t,r){var o=e("./_object-pie"),n=e("./_property-desc"),i=e("./_to-iobject"),s=e("./_to-primitive"),u=e("./_has"),c=e("./_ie8-dom-define"),f=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?f:function(e,t){if(e=i(e),t=s(t,!0),c)try{return f(e,t)}catch(e){}if(u(e,t))return n(!o.f.call(e,t),e[t])}},{"./_descriptors":26,"./_has":33,"./_ie8-dom-define":36,"./_object-pie":57,"./_property-desc":59,"./_to-iobject":68,"./_to-primitive":71}],51:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_object-gopn").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(e){try{return n(e)}catch(e){return s.slice()}};t.exports.f=function(e){return s&&"[object Window]"==i.call(e)?u(e):n(o(e))}},{"./_object-gopn":52,"./_to-iobject":68}],52:[function(e,t,r){var o=e("./_object-keys-internal"),n=e("./_enum-bug-keys").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return o(e,n)}},{"./_enum-bug-keys":28,"./_object-keys-internal":55}],53:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],54:[function(e,t,r){var o=e("./_has"),n=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=n(e),o(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":33,"./_shared-key":63,"./_to-object":70}],55:[function(e,t,r){var o=e("./_has"),n=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,u=n(e),c=0,f=[];for(r in u)r!=s&&o(u,r)&&f.push(r);for(;t.length>c;)o(u,r=t[c++])&&(~i(f,r)||f.push(r));return f}},{"./_array-includes":21,"./_has":33,"./_shared-key":63,"./_to-iobject":68}],56:[function(e,t,r){var o=e("./_object-keys-internal"),n=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return o(e,n)}},{"./_enum-bug-keys":28,"./_object-keys-internal":55}],57:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],58:[function(e,t,r){var o=e("./_export"),n=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],s={};s[e]=t(r),o(o.S+o.F*i(function(){r(1)}),"Object",s)}},{"./_core":23,"./_export":30,"./_fails":31}],59:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],60:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":34}],61:[function(e,t,r){var o=e("./_is-object"),n=e("./_an-object"),i=function(e,t){if(n(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(e){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":20,"./_ctx":24,"./_is-object":39,"./_object-gopd":50}],62:[function(e,t,r){var o=e("./_object-dp").f,n=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!n(e=r?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},{"./_has":33,"./_object-dp":48,"./_wks":75}],63:[function(e,t,r){var o=e("./_shared")("keys"),n=e("./_uid");t.exports=function(e){return o[e]||(o[e]=n(e))}},{"./_shared":64,"./_uid":72}],64:[function(e,t,r){var o=e("./_global"),n="__core-js_shared__",i=o[n]||(o[n]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":32}],65:[function(e,t,r){var o=e("./_to-integer"),n=e("./_defined");t.exports=function(e){return function(t,r){var i,s,u=String(n(t)),c=o(r),f=u.length;return c<0||c>=f?e?"":void 0:(i=u.charCodeAt(c),i<55296||i>56319||c+1===f||(s=u.charCodeAt(c+1))<56320||s>57343?e?u.charAt(c):i:e?u.slice(c,c+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":25,"./_to-integer":67}],66:[function(e,t,r){var o=e("./_to-integer"),n=Math.max,i=Math.min;t.exports=function(e,t){return e=o(e),e<0?n(e+t,0):i(e,t)}},{"./_to-integer":67}],67:[function(e,t,r){var o=Math.ceil,n=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?n:o)(e)}},{}],68:[function(e,t,r){var o=e("./_iobject"),n=e("./_defined");t.exports=function(e){return o(n(e))}},{"./_defined":25,"./_iobject":37}],69:[function(e,t,r){var o=e("./_to-integer"),n=Math.min;t.exports=function(e){return e>0?n(o(e),9007199254740991):0}},{"./_to-integer":67}],70:[function(e,t,r){var o=e("./_defined");t.exports=function(e){return Object(o(e))}},{"./_defined":25}],71:[function(e,t,r){var o=e("./_is-object");t.exports=function(e,t){if(!o(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!o(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":39}],72:[function(e,t,r){var o=0,n=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++o+n).toString(36))}},{}],73:[function(e,t,r){var o=e("./_global"),n=e("./_core"),i=e("./_library"),s=e("./_wks-ext"),u=e("./_object-dp").f;t.exports=function(e){var t=n.Symbol||(n.Symbol=i?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||u(t,e,{value:s.f(e)})}},{"./_core":23,"./_global":32,"./_library":45,"./_object-dp":48,"./_wks-ext":74}],74:[function(e,t,r){r.f=e("./_wks")},{"./_wks":75}],75:[function(e,t,r){var o=e("./_shared")("wks"),n=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i,u=t.exports=function(e){return o[e]||(o[e]=s&&i[e]||(s?i:n)("Symbol."+e))};u.store=o},{"./_global":32,"./_shared":64,"./_uid":72}],76:[function(e,t,r){"use strict";var o=e("./_add-to-unscopables"),n=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,n(1)):"keys"==t?n(0,r):"values"==t?n(0,e[r]):n(0,[r,e[r]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},{"./_add-to-unscopables":19,"./_iter-define":41,"./_iter-step":42,"./_iterators":43,"./_to-iobject":68}],77:[function(e,t,r){var o=e("./_export");o(o.S,"Object",{create:e("./_object-create")})},{"./_export":30,"./_object-create":47}],78:[function(e,t,r){var o=e("./_export");o(o.S+o.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":26,"./_export":30,"./_object-dp":48}],79:[function(e,t,r){var o=e("./_to-object"),n=e("./_object-gpo");e("./_object-sap")("getPrototypeOf",function(){return function(e){return n(o(e))}})},{"./_object-gpo":54,"./_object-sap":58,"./_to-object":70}],80:[function(e,t,r){var o=e("./_export");o(o.S,"Object",{setPrototypeOf:e("./_set-proto").set})},{"./_export":30,"./_set-proto":61}],81:[function(e,t,r){},{}],82:[function(e,t,r){"use strict";var o=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=o(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":41,"./_string-at":65}],83:[function(e,t,r){"use strict";var o=e("./_global"),n=e("./_has"),i=e("./_descriptors"),s=e("./_export"),u=e("./_redefine"),c=e("./_meta").KEY,f=e("./_fails"),a=e("./_shared"),l=e("./_set-to-string-tag"),_=e("./_uid"),p=e("./_wks"),d=e("./_wks-ext"),b=e("./_wks-define"),y=e("./_keyof"),h=e("./_enum-keys"),j=e("./_is-array"),v=e("./_an-object"),m=e("./_to-iobject"),g=e("./_to-primitive"),x=e("./_property-desc"),k=e("./_object-create"),w=e("./_object-gopn-ext"),O=e("./_object-gopd"),S=e("./_object-dp"),M=e("./_object-keys"),P=O.f,E=S.f,C=w.f,T=o.Symbol,L=o.JSON,F=L&&L.stringify,I="prototype",A=p("_hidden"),N=p("toPrimitive"),R={}.propertyIsEnumerable,D=a("symbol-registry"),W=a("symbols"),B=a("op-symbols"),q=Object[I],J="function"==typeof T,G=o.QObject,K=!G||!G[I]||!G[I].findChild,U=i&&f(function(){return 7!=k(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(e,t,r){var o=P(q,t);o&&delete q[t],E(e,t,r),o&&e!==q&&E(q,t,o)}:E,z=function(e){var t=W[e]=k(T[I]);return t._k=e,t},Y=J&&"symbol"==typeof T.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof T},Q=function(e,t,r){return e===q&&Q(B,t,r),v(e),t=g(t,!0),v(r),n(W,t)?(r.enumerable?(n(e,A)&&e[A][t]&&(e[A][t]=!1),r=k(r,{enumerable:x(0,!1)})):(n(e,A)||E(e,A,x(1,{})),e[A][t]=!0),U(e,t,r)):E(e,t,r)},H=function(e,t){v(e);for(var r,o=h(t=m(t)),n=0,i=o.length;i>n;)Q(e,r=o[n++],t[r]);return e},V=function(e,t){return void 0===t?k(e):H(k(e),t)},X=function(e){var t=R.call(this,e=g(e,!0));return!(this===q&&n(W,e)&&!n(B,e))&&(!(t||!n(this,e)||!n(W,e)||n(this,A)&&this[A][e])||t)},Z=function(e,t){if(e=m(e),t=g(t,!0),e!==q||!n(W,t)||n(B,t)){var r=P(e,t);return!r||!n(W,t)||n(e,A)&&e[A][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=C(m(e)),o=[],i=0;r.length>i;)n(W,t=r[i++])||t==A||t==c||o.push(t);return o},ee=function(e){for(var t,r=e===q,o=C(r?B:m(e)),i=[],s=0;o.length>s;)!n(W,t=o[s++])||r&&!n(q,t)||i.push(W[t]);return i};J||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var e=_(arguments.length>0?arguments[0]:void 0),t=function(r){this===q&&t.call(B,r),n(this,A)&&n(this[A],e)&&(this[A][e]=!1),U(this,e,x(1,r))};return i&&K&&U(q,e,{configurable:!0,set:t}),z(e)},u(T[I],"toString",function(){return this._k}),O.f=Z,S.f=Q,e("./_object-gopn").f=w.f=$,e("./_object-pie").f=X,e("./_object-gops").f=ee,i&&!e("./_library")&&u(q,"propertyIsEnumerable",X,!0),d.f=function(e){return z(p(e))}),s(s.G+s.W+s.F*!J,{Symbol:T});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)p(te[re++]);for(var te=M(p.store),re=0;te.length>re;)b(te[re++]);s(s.S+s.F*!J,"Symbol",{for:function(e){return n(D,e+="")?D[e]:D[e]=T(e)},keyFor:function(e){if(Y(e))return y(D,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),s(s.S+s.F*!J,"Object",{create:V,defineProperty:Q,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee}),L&&s(s.S+s.F*(!J||f(function(){var e=T();return"[null]"!=F([e])||"{}"!=F({a:e})||"{}"!=F(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!Y(e)){for(var t,r,o=[e],n=1;arguments.length>n;)o.push(arguments[n++]);return t=o[1],"function"==typeof t&&(r=t),!r&&j(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!Y(t))return t}),o[1]=t,F.apply(L,o)}}}),T[I][N]||e("./_hide")(T[I],N,T[I].valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(o.JSON,"JSON",!0)},{"./_an-object":20,"./_descriptors":26,"./_enum-keys":29,"./_export":30,"./_fails":31,"./_global":32,"./_has":33,"./_hide":34,"./_is-array":38,"./_keyof":44,"./_library":45,"./_meta":46,"./_object-create":47,"./_object-dp":48,"./_object-gopd":50,"./_object-gopn":52,"./_object-gopn-ext":51,"./_object-gops":53,"./_object-keys":56,"./_object-pie":57,"./_property-desc":59,"./_redefine":60,"./_set-to-string-tag":62,"./_shared":64,"./_to-iobject":68,"./_to-primitive":71,"./_uid":72,"./_wks":75,"./_wks-define":73,"./_wks-ext":74}],84:[function(e,t,r){e("./_wks-define")("asyncIterator")},{"./_wks-define":73}],85:[function(e,t,r){e("./_wks-define")("observable")},{"./_wks-define":73}],86:[function(e,t,r){e("./es6.array.iterator");for(var o=e("./_global"),n=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var f=u[c],a=o[f],l=a&&a.prototype;l&&!l[s]&&n(l,s,f),i[f]=i.Array}},{"./_global":32,"./_hide":34,"./_iterators":43,"./_wks":75,"./es6.array.iterator":76}],87:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/helpers/classCallCheck"),i=o(n),s=e("babel-runtime/helpers/createClass"),u=o(s),c=function(){function e(){(0,i.default)(this,e);var t=this;t._msgId=0,t._subscriptions={},t._responseTimeOut=5e3,t._responseCallbacks={},t._registerExternalListener()}return(0,u.default)(e,[{key:"addListener",value:function(e,t){var r=this,o=new f(r._subscriptions,e,t),n=r._subscriptions[e];return n||(n=[],r._subscriptions[e]=n),n.push(o),o}},{key:"addResponseListener",value:function(e,t,r){this._responseCallbacks[e+t]=r}},{key:"removeResponseListener",value:function(e,t){delete this._responseCallbacks[e+t]}},{key:"removeAllListenersOf",value:function(e){delete this._subscriptions[e]}},{key:"bind",value:function(e,t,r){var o=this,n=this,i=n.addListener(e,function(e){r.postMessage(e)}),s=r.addListener(t,function(e){n.postMessage(e)});return{thisListener:i,targetListener:s,unbind:function(){o.thisListener.remove(),o.targetListener.remove()}}}},{key:"_publishOnDefault",value:function(e){var t=this._subscriptions["*"];t&&this._publishOn(t,e)}},{key:"_publishOn",value:function(e,t){e.forEach(function(e){e._callback(t)})}},{key:"_responseCallback",value:function(e,t){var r=this;t&&!function(){var o=e.from+e.id;r._responseCallbacks[o]=t,setTimeout(function(){var t=r._responseCallbacks[o];if(delete r._responseCallbacks[o],t){var n={id:e.id,type:"response",body:{code:408,desc:"Response timeout!",value:e}};t(n)}},r._responseTimeOut)}()}},{key:"_onResponse",value:function(e){var t=this;if("response"===e.type){var r=e.to+e.id,o=t._responseCallbacks[r];if(e.body.code>=200&&delete t._responseCallbacks[r],o)return o(e),!0}return!1}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?t._publishOn(r,e):t._publishOnDefault(e)}}},{key:"_genId",value:function(e){e.id&&0!==e.id||(this._msgId++,e.id=this._msgId)}},{key:"postMessage",value:function(e,t){}},{key:"_onPostMessage",value:function(e){}},{key:"_registerExternalListener",value:function(){}}]),e}(),f=function(){function e(t,r,o){(0,i.default)(this,e);var n=this;n._subscriptions=t,n._url=r,n._callback=o}return(0,u.default)(e,[{key:"remove",value:function(){var e=this,t=e._subscriptions[e._url];if(t){var r=t.indexOf(e);t.splice(r,1),0===t.length&&delete e._subscriptions[e._url]}}},{key:"url",get:function(){return this._url}}]),e}();r.default=c,t.exports=r.default},{"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8}],88:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/core-js/object/get-prototype-of"),i=o(n),s=e("babel-runtime/helpers/classCallCheck"),u=o(s),c=e("babel-runtime/helpers/createClass"),f=o(c),a=e("babel-runtime/helpers/possibleConstructorReturn"),l=o(a),_=e("babel-runtime/helpers/inherits"),p=o(_),d=e("./Bus"),b=o(d),y=function(e){function t(){return(0,u.default)(this,t),(0,l.default)(this,(t.__proto__||(0,i.default)(t)).call(this))}return(0,p.default)(t,e),(0,f.default)(t,[{key:"postMessage",value:function(e,t){var r=this;return r._genId(e),r._responseCallback(e,t),r._onPostMessage(e),e.id}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?(t._publishOn(r,e),e.to.startsWith("hyperty")||t._publishOnDefault(e)):t._publishOnDefault(e)}}}]),t}(b.default);r.default=y,t.exports=r.default},{"./Bus":87,"babel-runtime/core-js/object/get-prototype-of":3,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/possibleConstructorReturn":10}],89:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("./bus/MiniBus"),i=o(n);r.default=i.default,t.exports=r.default},{"./bus/MiniBus":88}]},{},[89])(89)});
//# sourceMappingURL=minibus.js.map
