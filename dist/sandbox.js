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

// Distribution file for sandbox.js 
// version: 0.5.0
// Last build: Fri Jul 08 2016 15:27:50 GMT+0100 (WEST)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.sandbox=e()}}(function(){return function e(t,r,n){function o(i,c){if(!r[i]){if(!t[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(s)return s(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){var r=t[i][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":12}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":13}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":14}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":15}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":16}],6:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":17}],7:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],8:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),s=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":2}],9:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/object/create")["default"],o=e("babel-runtime/core-js/object/set-prototype-of")["default"];r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=n(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o?o(e,t):e.__proto__=t)},r.__esModule=!0},{"babel-runtime/core-js/object/create":1,"babel-runtime/core-js/object/set-prototype-of":4}],10:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../helpers/typeof"),s=n(o);r["default"]=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,s["default"])(t))&&"function"!=typeof t?e:t}},{"../helpers/typeof":11}],11:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/symbol")["default"];r["default"]=function(e){return e&&e.constructor===n?"symbol":typeof e},r.__esModule=!0},{"babel-runtime/core-js/symbol":6}],12:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t){return n.create(e,t)}},{"../../modules/$":48}],13:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t,r){return n.setDesc(e,t,r)}},{"../../modules/$":48}],14:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/$.core").Object.getPrototypeOf},{"../../modules/$.core":23,"../../modules/es6.object.get-prototype-of":73}],15:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/$.core").Object.setPrototypeOf},{"../../modules/$.core":23,"../../modules/es6.object.set-prototype-of":74}],16:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/$.core").Promise},{"../modules/$.core":23,"../modules/es6.object.to-string":75,"../modules/es6.promise":76,"../modules/es6.string.iterator":77,"../modules/web.dom.iterable":79}],17:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),t.exports=e("../../modules/$.core").Symbol},{"../../modules/$.core":23,"../../modules/es6.object.to-string":75,"../../modules/es6.symbol":78}],18:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],19:[function(e,t,r){t.exports=function(){}},{}],20:[function(e,t,r){var n=e("./$.is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./$.is-object":41}],21:[function(e,t,r){var n=e("./$.cof"),o=e("./$.wks")("toStringTag"),s="Arguments"==n(function(){return arguments}());t.exports=function(e){var t,r,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=(t=Object(e))[o])?r:s?n(t):"Object"==(i=n(t))&&"function"==typeof t.callee?"Arguments":i}},{"./$.cof":22,"./$.wks":70}],22:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],23:[function(e,t,r){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},{}],24:[function(e,t,r){var n=e("./$.a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./$.a-function":18}],25:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],26:[function(e,t,r){t.exports=!e("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./$.fails":30}],27:[function(e,t,r){var n=e("./$.is-object"),o=e("./$.global").document,s=n(o)&&n(o.createElement);t.exports=function(e){return s?o.createElement(e):{}}},{"./$.global":33,"./$.is-object":41}],28:[function(e,t,r){var n=e("./$");t.exports=function(e){var t=n.getKeys(e),r=n.getSymbols;if(r)for(var o,s=r(e),i=n.isEnum,c=0;s.length>c;)i.call(e,o=s[c++])&&t.push(o);return t}},{"./$":48}],29:[function(e,t,r){var n=e("./$.global"),o=e("./$.core"),s=e("./$.ctx"),i="prototype",c=function(e,t,r){var u,a,l,f=e&c.F,p=e&c.G,d=e&c.S,b=e&c.P,$=e&c.B,y=e&c.W,h=p?o:o[t]||(o[t]={}),v=p?n:d?n[t]:(n[t]||{})[i];p&&(r=t);for(u in r)a=!f&&v&&u in v,a&&u in h||(l=a?v[u]:r[u],h[u]=p&&"function"!=typeof v[u]?r[u]:$&&a?s(l,n):y&&v[u]==l?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[i]=e[i],t}(l):b&&"function"==typeof l?s(Function.call,l):l,b&&((h[i]||(h[i]={}))[u]=l))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,t.exports=c},{"./$.core":23,"./$.ctx":24,"./$.global":33}],30:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],31:[function(e,t,r){var n=e("./$.ctx"),o=e("./$.iter-call"),s=e("./$.is-array-iter"),i=e("./$.an-object"),c=e("./$.to-length"),u=e("./core.get-iterator-method");t.exports=function(e,t,r,a){var l,f,p,d=u(e),b=n(r,a,t?2:1),$=0;if("function"!=typeof d)throw TypeError(e+" is not iterable!");if(s(d))for(l=c(e.length);l>$;$++)t?b(i(f=e[$])[0],f[1]):b(e[$]);else for(p=d.call(e);!(f=p.next()).done;)o(p,b,f.value,t)}},{"./$.an-object":20,"./$.ctx":24,"./$.is-array-iter":39,"./$.iter-call":42,"./$.to-length":67,"./core.get-iterator-method":71}],32:[function(e,t,r){var n=e("./$.to-iobject"),o=e("./$").getNames,s={}.toString,i="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return i.slice()}};t.exports.get=function(e){return i&&"[object Window]"==s.call(e)?c(e):o(n(e))}},{"./$":48,"./$.to-iobject":66}],33:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],34:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],35:[function(e,t,r){var n=e("./$"),o=e("./$.property-desc");t.exports=e("./$.descriptors")?function(e,t,r){return n.setDesc(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./$":48,"./$.descriptors":26,"./$.property-desc":53}],36:[function(e,t,r){t.exports=e("./$.global").document&&document.documentElement},{"./$.global":33}],37:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],38:[function(e,t,r){var n=e("./$.cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./$.cof":22}],39:[function(e,t,r){var n=e("./$.iterators"),o=e("./$.wks")("iterator"),s=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||s[o]===e)}},{"./$.iterators":47,"./$.wks":70}],40:[function(e,t,r){var n=e("./$.cof");t.exports=Array.isArray||function(e){return"Array"==n(e)}},{"./$.cof":22}],41:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],42:[function(e,t,r){var n=e("./$.an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(s){var i=e["return"];throw void 0!==i&&n(i.call(e)),s}}},{"./$.an-object":20}],43:[function(e,t,r){"use strict";var n=e("./$"),o=e("./$.property-desc"),s=e("./$.set-to-string-tag"),i={};e("./$.hide")(i,e("./$.wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n.create(i,{next:o(1,r)}),s(e,t+" Iterator")}},{"./$":48,"./$.hide":35,"./$.property-desc":53,"./$.set-to-string-tag":59,"./$.wks":70}],44:[function(e,t,r){"use strict";var n=e("./$.library"),o=e("./$.export"),s=e("./$.redefine"),i=e("./$.hide"),c=e("./$.has"),u=e("./$.iterators"),a=e("./$.iter-create"),l=e("./$.set-to-string-tag"),f=e("./$").getProto,p=e("./$.wks")("iterator"),d=!([].keys&&"next"in[].keys()),b="@@iterator",$="keys",y="values",h=function(){return this};t.exports=function(e,t,r,v,m,g,_){a(r,t,v);var x,j,w=function(e){if(!d&&e in S)return S[e];switch(e){case $:return function(){return new r(this,e)};case y:return function(){return new r(this,e)}}return function(){return new r(this,e)}},k=t+" Iterator",O=m==y,M=!1,S=e.prototype,C=S[p]||S[b]||m&&S[m],P=C||w(m);if(C){var E=f(P.call(new e));l(E,k,!0),!n&&c(S,b)&&i(E,p,h),O&&C.name!==y&&(M=!0,P=function(){return C.call(this)})}if(n&&!_||!d&&!M&&S[p]||i(S,p,P),u[t]=P,u[k]=h,m)if(x={values:O?P:w(y),keys:g?P:w($),entries:O?w("entries"):P},_)for(j in x)j in S||s(S,j,x[j]);else o(o.P+o.F*(d||M),t,x);return x}},{"./$":48,"./$.export":29,"./$.has":34,"./$.hide":35,"./$.iter-create":43,"./$.iterators":47,"./$.library":50,"./$.redefine":55,"./$.set-to-string-tag":59,"./$.wks":70}],45:[function(e,t,r){var n=e("./$.wks")("iterator"),o=!1;try{var s=[7][n]();s["return"]=function(){o=!0},Array.from(s,function(){throw 2})}catch(i){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var s=[7],i=s[n]();i.next=function(){r=!0},s[n]=function(){return i},e(s)}catch(c){}return r}},{"./$.wks":70}],46:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],47:[function(e,t,r){t.exports={}},{}],48:[function(e,t,r){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},{}],49:[function(e,t,r){var n=e("./$"),o=e("./$.to-iobject");t.exports=function(e,t){for(var r,s=o(e),i=n.getKeys(s),c=i.length,u=0;c>u;)if(s[r=i[u++]]===t)return r}},{"./$":48,"./$.to-iobject":66}],50:[function(e,t,r){t.exports=!0},{}],51:[function(e,t,r){var n,o,s,i=e("./$.global"),c=e("./$.task").set,u=i.MutationObserver||i.WebKitMutationObserver,a=i.process,l=i.Promise,f="process"==e("./$.cof")(a),p=function(){var e,t,r;for(f&&(e=a.domain)&&(a.domain=null,e.exit());n;)t=n.domain,r=n.fn,t&&t.enter(),r(),t&&t.exit(),n=n.next;o=void 0,e&&e.enter()};if(f)s=function(){a.nextTick(p)};else if(u){var d=1,b=document.createTextNode("");new u(p).observe(b,{characterData:!0}),s=function(){b.data=d=-d}}else s=l&&l.resolve?function(){l.resolve().then(p)}:function(){c.call(i,p)};t.exports=function(e){var t={fn:e,next:void 0,domain:f&&a.domain};o&&(o.next=t),n||(n=t,s()),o=t}},{"./$.cof":22,"./$.global":33,"./$.task":64}],52:[function(e,t,r){var n=e("./$.export"),o=e("./$.core"),s=e("./$.fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*s(function(){r(1)}),"Object",i)}},{"./$.core":23,"./$.export":29,"./$.fails":30}],53:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],54:[function(e,t,r){var n=e("./$.redefine");t.exports=function(e,t){for(var r in t)n(e,r,t[r]);return e}},{"./$.redefine":55}],55:[function(e,t,r){t.exports=e("./$.hide")},{"./$.hide":35}],56:[function(e,t,r){t.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},{}],57:[function(e,t,r){var n=e("./$").getDesc,o=e("./$.is-object"),s=e("./$.an-object"),i=function(e,t){if(s(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./$.ctx")(Function.call,n(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(s){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:i}},{"./$":48,"./$.an-object":20,"./$.ctx":24,"./$.is-object":41}],58:[function(e,t,r){"use strict";var n=e("./$.core"),o=e("./$"),s=e("./$.descriptors"),i=e("./$.wks")("species");t.exports=function(e){var t=n[e];s&&t&&!t[i]&&o.setDesc(t,i,{configurable:!0,get:function(){return this}})}},{"./$":48,"./$.core":23,"./$.descriptors":26,"./$.wks":70}],59:[function(e,t,r){var n=e("./$").setDesc,o=e("./$.has"),s=e("./$.wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,s)&&n(e,s,{configurable:!0,value:t})}},{"./$":48,"./$.has":34,"./$.wks":70}],60:[function(e,t,r){var n=e("./$.global"),o="__core-js_shared__",s=n[o]||(n[o]={});t.exports=function(e){return s[e]||(s[e]={})}},{"./$.global":33}],61:[function(e,t,r){var n=e("./$.an-object"),o=e("./$.a-function"),s=e("./$.wks")("species");t.exports=function(e,t){var r,i=n(e).constructor;return void 0===i||void 0==(r=n(i)[s])?t:o(r)}},{"./$.a-function":18,"./$.an-object":20,"./$.wks":70}],62:[function(e,t,r){t.exports=function(e,t,r){if(!(e instanceof t))throw TypeError(r+": use the 'new' operator!");return e}},{}],63:[function(e,t,r){var n=e("./$.to-integer"),o=e("./$.defined");t.exports=function(e){return function(t,r){var s,i,c=String(o(t)),u=n(r),a=c.length;return u<0||u>=a?e?"":void 0:(s=c.charCodeAt(u),s<55296||s>56319||u+1===a||(i=c.charCodeAt(u+1))<56320||i>57343?e?c.charAt(u):s:e?c.slice(u,u+2):(s-55296<<10)+(i-56320)+65536)}}},{"./$.defined":25,"./$.to-integer":65}],64:[function(e,t,r){var n,o,s,i=e("./$.ctx"),c=e("./$.invoke"),u=e("./$.html"),a=e("./$.dom-create"),l=e("./$.global"),f=l.process,p=l.setImmediate,d=l.clearImmediate,b=l.MessageChannel,$=0,y={},h="onreadystatechange",v=function(){var e=+this;if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},m=function(e){v.call(e.data)};p&&d||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return y[++$]=function(){c("function"==typeof e?e:Function(e),t)},n($),$},d=function(e){delete y[e]},"process"==e("./$.cof")(f)?n=function(e){f.nextTick(i(v,e,1))}:b?(o=new b,s=o.port2,o.port1.onmessage=m,n=i(s.postMessage,s,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(n=function(e){l.postMessage(e+"","*")},l.addEventListener("message",m,!1)):n=h in a("script")?function(e){u.appendChild(a("script"))[h]=function(){u.removeChild(this),v.call(e)}}:function(e){setTimeout(i(v,e,1),0)}),t.exports={set:p,clear:d}},{"./$.cof":22,"./$.ctx":24,"./$.dom-create":27,"./$.global":33,"./$.html":36,"./$.invoke":37}],65:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],66:[function(e,t,r){var n=e("./$.iobject"),o=e("./$.defined");t.exports=function(e){return n(o(e))}},{"./$.defined":25,"./$.iobject":38}],67:[function(e,t,r){var n=e("./$.to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./$.to-integer":65}],68:[function(e,t,r){var n=e("./$.defined");t.exports=function(e){return Object(n(e))}},{"./$.defined":25}],69:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],70:[function(e,t,r){var n=e("./$.shared")("wks"),o=e("./$.uid"),s=e("./$.global").Symbol;t.exports=function(e){return n[e]||(n[e]=s&&s[e]||(s||o)("Symbol."+e))}},{"./$.global":33,"./$.shared":60,"./$.uid":69}],71:[function(e,t,r){var n=e("./$.classof"),o=e("./$.wks")("iterator"),s=e("./$.iterators");t.exports=e("./$.core").getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||s[n(e)]}},{"./$.classof":21,"./$.core":23,"./$.iterators":47,"./$.wks":70}],72:[function(e,t,r){"use strict";var n=e("./$.add-to-unscopables"),o=e("./$.iter-step"),s=e("./$.iterators"),i=e("./$.to-iobject");t.exports=e("./$.iter-define")(Array,"Array",function(e,t){this._t=i(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),s.Arguments=s.Array,n("keys"),n("values"),n("entries")},{"./$.add-to-unscopables":19,"./$.iter-define":44,"./$.iter-step":46,"./$.iterators":47,"./$.to-iobject":66}],73:[function(e,t,r){var n=e("./$.to-object");e("./$.object-sap")("getPrototypeOf",function(e){return function(t){return e(n(t))}})},{"./$.object-sap":52,"./$.to-object":68}],74:[function(e,t,r){var n=e("./$.export");n(n.S,"Object",{setPrototypeOf:e("./$.set-proto").set})},{"./$.export":29,"./$.set-proto":57}],75:[function(e,t,r){},{}],76:[function(e,t,r){"use strict";var n,o=e("./$"),s=e("./$.library"),i=e("./$.global"),c=e("./$.ctx"),u=e("./$.classof"),a=e("./$.export"),l=e("./$.is-object"),f=e("./$.an-object"),p=e("./$.a-function"),d=e("./$.strict-new"),b=e("./$.for-of"),$=e("./$.set-proto").set,y=e("./$.same-value"),h=e("./$.wks")("species"),v=e("./$.species-constructor"),m=e("./$.microtask"),g="Promise",_=i.process,x="process"==u(_),j=i[g],w=function(e){var t=new j(function(){});return e&&(t.constructor=Object),j.resolve(t)===t},k=function(){function t(e){var r=new j(e);return $(r,t.prototype),r}var r=!1;try{if(r=j&&j.resolve&&w(),$(t,j),t.prototype=o.create(j.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(r=!1),r&&e("./$.descriptors")){var n=!1;j.resolve(o.setDesc({},"then",{get:function(){n=!0}})),r=n}}catch(s){r=!1}return r}(),O=function(e,t){return!(!s||e!==j||t!==n)||y(e,t)},M=function(e){var t=f(e)[h];return void 0!=t?t:e},S=function(e){var t;return!(!l(e)||"function"!=typeof(t=e.then))&&t},C=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=p(t),this.reject=p(r)},P=function(e){try{e()}catch(t){return{error:t}}},E=function(e,t){if(!e.n){e.n=!0;var r=e.c;m(function(){for(var n=e.v,o=1==e.s,s=0,c=function(t){var r,s,i=o?t.ok:t.fail,c=t.resolve,u=t.reject;try{i?(o||(e.h=!0),r=i===!0?n:i(n),r===t.promise?u(TypeError("Promise-chain cycle")):(s=S(r))?s.call(r,c,u):c(r)):u(n)}catch(a){u(a)}};r.length>s;)c(r[s++]);r.length=0,e.n=!1,t&&setTimeout(function(){var t,r,o=e.p;D(o)&&(x?_.emit("unhandledRejection",n,o):(t=i.onunhandledrejection)?t({promise:o,reason:n}):(r=i.console)&&r.error&&r.error("Unhandled promise rejection",n)),e.a=void 0},1)})}},D=function(e){var t,r=e._d,n=r.a||r.c,o=0;if(r.h)return!1;for(;n.length>o;)if(t=n[o++],t.fail||!D(t.promise))return!1;return!0},A=function(e){var t=this;t.d||(t.d=!0,t=t.r||t,t.v=e,t.s=2,t.a=t.c.slice(),E(t,!0))},T=function(e){var t,r=this;if(!r.d){r.d=!0,r=r.r||r;try{if(r.p===e)throw TypeError("Promise can't be resolved itself");(t=S(e))?m(function(){var n={r:r,d:!1};try{t.call(e,c(T,n,1),c(A,n,1))}catch(o){A.call(n,o)}}):(r.v=e,r.s=1,E(r,!1))}catch(n){A.call({r:r,d:!1},n)}}};k||(j=function(e){p(e);var t=this._d={p:d(this,j,g),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{e(c(T,t,1),c(A,t,1))}catch(r){A.call(t,r)}},e("./$.redefine-all")(j.prototype,{then:function(e,t){var r=new C(v(this,j)),n=r.promise,o=this._d;return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,o.c.push(r),o.a&&o.a.push(r),o.s&&E(o,!1),n},"catch":function(e){return this.then(void 0,e)}})),a(a.G+a.W+a.F*!k,{Promise:j}),e("./$.set-to-string-tag")(j,g),e("./$.set-species")(g),n=e("./$.core")[g],a(a.S+a.F*!k,g,{reject:function(e){var t=new C(this),r=t.reject;return r(e),t.promise}}),a(a.S+a.F*(!k||w(!0)),g,{resolve:function(e){if(e instanceof j&&O(e.constructor,this))return e;var t=new C(this),r=t.resolve;return r(e),t.promise}}),a(a.S+a.F*!(k&&e("./$.iter-detect")(function(e){j.all(e)["catch"](function(){})})),g,{all:function(e){var t=M(this),r=new C(t),n=r.resolve,s=r.reject,i=[],c=P(function(){b(e,!1,i.push,i);var r=i.length,c=Array(r);r?o.each.call(i,function(e,o){var i=!1;t.resolve(e).then(function(e){i||(i=!0,c[o]=e,--r||n(c))},s)}):n(c)});return c&&s(c.error),r.promise},race:function(e){var t=M(this),r=new C(t),n=r.reject,o=P(function(){b(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./$":48,"./$.a-function":18,"./$.an-object":20,"./$.classof":21,"./$.core":23,"./$.ctx":24,"./$.descriptors":26,"./$.export":29,"./$.for-of":31,"./$.global":33,"./$.is-object":41,"./$.iter-detect":45,"./$.library":50,"./$.microtask":51,"./$.redefine-all":54,"./$.same-value":56,"./$.set-proto":57,"./$.set-species":58,"./$.set-to-string-tag":59,"./$.species-constructor":61,"./$.strict-new":62,"./$.wks":70}],77:[function(e,t,r){"use strict";var n=e("./$.string-at")(!0);e("./$.iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./$.iter-define":44,"./$.string-at":63}],78:[function(e,t,r){"use strict";var n=e("./$"),o=e("./$.global"),s=e("./$.has"),i=e("./$.descriptors"),c=e("./$.export"),u=e("./$.redefine"),a=e("./$.fails"),l=e("./$.shared"),f=e("./$.set-to-string-tag"),p=e("./$.uid"),d=e("./$.wks"),b=e("./$.keyof"),$=e("./$.get-names"),y=e("./$.enum-keys"),h=e("./$.is-array"),v=e("./$.an-object"),m=e("./$.to-iobject"),g=e("./$.property-desc"),_=n.getDesc,x=n.setDesc,j=n.create,w=$.get,k=o.Symbol,O=o.JSON,M=O&&O.stringify,S=!1,C=d("_hidden"),P=n.isEnum,E=l("symbol-registry"),D=l("symbols"),A="function"==typeof k,T=Object.prototype,I=i&&a(function(){return 7!=j(x({},"a",{get:function(){return x(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=_(T,t);n&&delete T[t],x(e,t,r),n&&e!==T&&x(T,t,n)}:x,R=function(e){var t=D[e]=j(k.prototype);return t._k=e,i&&S&&I(T,e,{configurable:!0,set:function(t){s(this,C)&&s(this[C],e)&&(this[C][e]=!1),I(this,e,g(1,t))}}),t},L=function(e){return"symbol"==typeof e},N=function(e,t,r){return r&&s(D,t)?(r.enumerable?(s(e,C)&&e[C][t]&&(e[C][t]=!1),r=j(r,{enumerable:g(0,!1)})):(s(e,C)||x(e,C,g(1,{})),e[C][t]=!0),I(e,t,r)):x(e,t,r)},F=function(e,t){v(e);for(var r,n=y(t=m(t)),o=0,s=n.length;s>o;)N(e,r=n[o++],t[r]);return e},B=function(e,t){return void 0===t?j(e):F(j(e),t)},W=function(e){var t=P.call(this,e);return!(t||!s(this,e)||!s(D,e)||s(this,C)&&this[C][e])||t},q=function(e,t){var r=_(e=m(e),t);return!r||!s(D,t)||s(e,C)&&e[C][t]||(r.enumerable=!0),r},G=function(e){for(var t,r=w(m(e)),n=[],o=0;r.length>o;)s(D,t=r[o++])||t==C||n.push(t);return n},J=function(e){for(var t,r=w(m(e)),n=[],o=0;r.length>o;)s(D,t=r[o++])&&n.push(D[t]);return n},K=function(e){if(void 0!==e&&!L(e)){for(var t,r,n=[e],o=1,s=arguments;s.length>o;)n.push(s[o++]);return t=n[1],"function"==typeof t&&(r=t),!r&&h(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!L(t))return t}),n[1]=t,M.apply(O,n)}},U=a(function(){var e=k();return"[null]"!=M([e])||"{}"!=M({a:e})||"{}"!=M(Object(e))});A||(k=function(){if(L(this))throw TypeError("Symbol is not a constructor");return R(p(arguments.length>0?arguments[0]:void 0))},u(k.prototype,"toString",function(){return this._k}),L=function(e){return e instanceof k},n.create=B,n.isEnum=W,n.getDesc=q,n.setDesc=N,n.setDescs=F,n.getNames=$.get=G,n.getSymbols=J,i&&!e("./$.library")&&u(T,"propertyIsEnumerable",W,!0));var z={"for":function(e){return s(E,e+="")?E[e]:E[e]=k(e)},keyFor:function(e){return b(E,e)},useSetter:function(){S=!0},useSimple:function(){S=!1}};n.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=d(e);z[e]=A?t:R(t)}),S=!0,c(c.G+c.W,{Symbol:k}),c(c.S,"Symbol",z),c(c.S+c.F*!A,"Object",{create:B,defineProperty:N,defineProperties:F,getOwnPropertyDescriptor:q,getOwnPropertyNames:G,getOwnPropertySymbols:J}),O&&c(c.S+c.F*(!A||U),"JSON",{stringify:K}),f(k,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},{"./$":48,"./$.an-object":20,"./$.descriptors":26,"./$.enum-keys":28,"./$.export":29,"./$.fails":30,"./$.get-names":32,"./$.global":33,"./$.has":34,"./$.is-array":40,"./$.keyof":49,"./$.library":50,"./$.property-desc":53,"./$.redefine":55,"./$.set-to-string-tag":59,"./$.shared":60,"./$.to-iobject":66,"./$.uid":69,"./$.wks":70}],79:[function(e,t,r){e("./es6.array.iterator");var n=e("./$.iterators");n.NodeList=n.HTMLCollection=n.Array},{"./$.iterators":47,"./es6.array.iterator":72}],80:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),s=n(o),i=e("babel-runtime/helpers/createClass"),c=n(i),u=function(){function e(){(0,s["default"])(this,e);var t=this;t._msgId=0,t._subscriptions={},t._responseTimeOut=5e3,t._responseCallbacks={},t._registerExternalListener()}return(0,c["default"])(e,[{key:"addListener",value:function(e,t){var r=this,n=new a(r._subscriptions,e,t),o=r._subscriptions[e];return o||(o=[],r._subscriptions[e]=o),o.push(n),n}},{key:"addResponseListener",value:function(e,t,r){this._responseCallbacks[e+t]=r}},{key:"removeResponseListener",value:function(e,t){delete this._responseCallbacks[e+t]}},{key:"removeAllListenersOf",value:function(e){delete this._subscriptions[e]}},{key:"bind",value:function(e,t,r){var n=this,o=this,s=o.addListener(e,function(e){r.postMessage(e)}),i=r.addListener(t,function(e){o.postMessage(e)});return{thisListener:s,targetListener:i,unbind:function(){n.thisListener.remove(),n.targetListener.remove()}}}},{key:"_publishOnDefault",value:function(e){var t=this._subscriptions["*"];t&&this._publishOn(t,e)}},{key:"_publishOn",value:function(e,t){e.forEach(function(e){e._callback(t)})}},{key:"_responseCallback",value:function(e,t){var r=this;t&&!function(){var n=e.from+e.id;r._responseCallbacks[n]=t,setTimeout(function(){var t=r._responseCallbacks[n];if(delete r._responseCallbacks[n],t){var o={id:e.id,type:"response",body:{code:408,desc:"Response timeout!",value:e}};t(o)}},r._responseTimeOut)}()}},{key:"_onResponse",value:function(e){var t=this;if("response"===e.type){var r=e.to+e.id,n=t._responseCallbacks[r];if(e.body.code>=200&&delete t._responseCallbacks[r],n)return n(e),!0}return!1}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?t._publishOn(r,e):t._publishOnDefault(e)}}},{key:"_genId",value:function(e){e.id&&0!==e.id||(this._msgId++,e.id=this._msgId)}},{key:"postMessage",value:function(e,t){}},{key:"_onPostMessage",value:function(e){}},{key:"_registerExternalListener",value:function(){}}]),e}(),a=function(){function e(t,r,n){(0,s["default"])(this,e);var o=this;o._subscriptions=t,o._url=r,o._callback=n}return(0,c["default"])(e,[{key:"remove",value:function(){var e=this,t=e._subscriptions[e._url];if(t){var r=t.indexOf(e);t.splice(r,1),0===t.length&&delete e._subscriptions[e._url]}}},{key:"url",get:function(){return this._url}}]),e}();r["default"]=u,t.exports=r["default"]},{"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8}],81:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/object/get-prototype-of"),s=n(o),i=e("babel-runtime/helpers/classCallCheck"),c=n(i),u=e("babel-runtime/helpers/createClass"),a=n(u),l=e("babel-runtime/helpers/possibleConstructorReturn"),f=n(l),p=e("babel-runtime/helpers/inherits"),d=n(p),b=e("./Bus"),$=n(b),y=function(e){function t(){return(0,c["default"])(this,t),(0,f["default"])(this,(0,s["default"])(t).call(this))}return(0,d["default"])(t,e),(0,a["default"])(t,[{key:"postMessage",value:function(e,t){var r=this;return r._genId(e),r._responseCallback(e,t),r._onPostMessage(e),e.id}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?(t._publishOn(r,e),e.to.startsWith("hyperty")||t._publishOnDefault(e)):t._publishOnDefault(e)}}}]),t}($["default"]);r["default"]=y,t.exports=r["default"]},{"./Bus":80,"babel-runtime/core-js/object/get-prototype-of":3,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/possibleConstructorReturn":10}],82:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.SandboxRegistry=r.SandboxType=r.Sandbox=void 0;var o=e("./sandbox/Sandbox"),s=n(o),i=e("./sandbox/SandboxRegistry"),c=n(i);r.Sandbox=s["default"],r.SandboxType=o.SandboxType,r.SandboxRegistry=c["default"]},{"./sandbox/Sandbox":83,"./sandbox/SandboxRegistry":84}],83:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.SandboxType=void 0;var o=e("babel-runtime/core-js/promise"),s=n(o),i=e("babel-runtime/core-js/object/get-prototype-of"),c=n(i),u=e("babel-runtime/helpers/classCallCheck"),a=n(u),l=e("babel-runtime/helpers/createClass"),f=n(l),p=e("babel-runtime/helpers/possibleConstructorReturn"),d=n(p),b=e("babel-runtime/helpers/inherits"),$=n(b),y=e("../sandbox/SandboxRegistry"),h=n(y),v=e("../bus/MiniBus"),m=n(v),g=(r.SandboxType={APP:"app",NORMAL:"normal"},function(e){function t(){(0,a["default"])(this,t);var e=(0,d["default"])(this,(0,c["default"])(t).call(this));return e}return(0,$["default"])(t,e),(0,f["default"])(t,[{key:"deployComponent",value:function(e,t,r){var n=this;return new s["default"](function(o,s){var i={type:"create",from:h["default"].ExternalDeployAddress,to:h["default"].InternalDeployAddress,body:{url:t,sourceCode:e,config:r}};n.postMessage(i,function(e){200===e.body.code?o("deployed"):s(e.body.desc)})})}},{key:"removeComponent",value:function(e){var t=this;return new s["default"](function(r,n){var o={type:"delete",from:h["default"].ExternalDeployAddress,to:h["default"].InternalDeployAddress,body:{url:e}};t.postMessage(o,function(e){200===e.body.code?r("undeployed"):n(e.body.desc)})})}}]),t}(m["default"]));r["default"]=g},{"../bus/MiniBus":81,"../sandbox/SandboxRegistry":84,"babel-runtime/core-js/object/get-prototype-of":3,"babel-runtime/core-js/promise":5,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/possibleConstructorReturn":10}],84:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e
}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),s=n(o),i=e("babel-runtime/helpers/createClass"),c=n(i),u=function(){function e(t){(0,s["default"])(this,e);var r=this;r._bus=t,r._components={},t.addListener(e.InternalDeployAddress,function(e){switch(e.type){case"create":r._onDeploy(e);break;case"delete":r._onRemove(e)}})}return(0,c["default"])(e,[{key:"_responseMsg",value:function(t,r,n){var o={id:t.id,type:"response",from:e.InternalDeployAddress,to:e.ExternalDeployAddress},s={};return r&&(s.code=r),n&&(s.desc=n),o.body=s,o}},{key:"_onDeploy",value:function(e){var t=this,r=e.body.config,n=e.body.url,o=e.body.sourceCode,s=void 0,i=void 0;if(t._components.hasOwnProperty(n))s=500,i="Instance "+n+" already exist!";else try{t._components[n]=t._create(n,o,r),s=200}catch(c){s=500,i=c}var u=t._responseMsg(e,s,i);t._bus.postMessage(u)}},{key:"_onRemove",value:function(e){var t=this,r=e.body.url,n=void 0,o=void 0;t._components.hasOwnProperty(r)?(delete t._components[r],t._bus.removeAllListenersOf(r),n=200):(n=500,o="Instance "+r+" doesn't exist!");var s=t._responseMsg(e,n,o);t._bus.postMessage(s)}},{key:"_create",value:function(e,t,r){}},{key:"components",get:function(){return this._components}}]),e}();u.ExternalDeployAddress="hyperty-runtime://sandbox/external",u.InternalDeployAddress="hyperty-runtime://sandbox/internal",r["default"]=u,t.exports=r["default"]},{"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8}]},{},[82])(82)});
//# sourceMappingURL=sandbox.js.map
