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

// Distribution file for PolicyEngine.js 
// version: 0.6.0
// Last build: Fri Oct 07 2016 16:21:29 GMT+0200 (Mitteleuropäische Sommerzeit)

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PolicyEngine = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":17}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":18}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":19}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":20}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":21}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":22}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":23}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":24}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":25}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":26}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":3}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require("../core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
},{"../core-js/object/get-own-property-descriptor":4,"../core-js/object/get-prototype-of":5}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":2,"../core-js/object/set-prototype-of":7,"../helpers/typeof":16}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":16}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":9,"../core-js/symbol/iterator":10}],17:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":34}],18:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":34,"../../modules/es6.object.create":99}],19:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":34,"../../modules/es6.object.define-property":100}],20:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
},{"../../modules/_core":34,"../../modules/es6.object.get-own-property-descriptor":101}],21:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":34,"../../modules/es6.object.get-prototype-of":102}],22:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":34,"../../modules/es6.object.keys":103}],23:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":34,"../../modules/es6.object.set-prototype-of":104}],24:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":34,"../modules/es6.object.to-string":105,"../modules/es6.promise":106,"../modules/es6.string.iterator":107,"../modules/web.dom.iterable":111}],25:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":34,"../../modules/es6.object.to-string":105,"../../modules/es6.symbol":108,"../../modules/es7.symbol.async-iterator":109,"../../modules/es7.symbol.observable":110}],26:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":95,"../../modules/es6.string.iterator":107,"../../modules/web.dom.iterable":111}],27:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],28:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],29:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],30:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":53}],31:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":87,"./_to-iobject":89,"./_to-length":90}],32:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":33,"./_wks":96}],33:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],34:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],35:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":27}],36:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],37:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":42}],38:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":44,"./_is-object":53}],39:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],40:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":70,"./_object-keys":73,"./_object-pie":74}],41:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":34,"./_ctx":35,"./_global":44,"./_hide":46}],42:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],43:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":30,"./_ctx":35,"./_is-array-iter":51,"./_iter-call":54,"./_to-length":90,"./core.get-iterator-method":97}],44:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],45:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],46:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":37,"./_object-dp":65,"./_property-desc":76}],47:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":44}],48:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":37,"./_dom-create":38,"./_fails":42}],49:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],50:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":33}],51:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":59,"./_wks":96}],52:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":33}],53:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],54:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":30}],55:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":46,"./_object-create":64,"./_property-desc":76,"./_set-to-string-tag":81,"./_wks":96}],56:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":41,"./_has":45,"./_hide":46,"./_iter-create":55,"./_iterators":59,"./_library":61,"./_object-gpo":71,"./_redefine":78,"./_set-to-string-tag":81,"./_wks":96}],57:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":96}],58:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],59:[function(require,module,exports){
module.exports = {};
},{}],60:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":73,"./_to-iobject":89}],61:[function(require,module,exports){
module.exports = true;
},{}],62:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":42,"./_has":45,"./_is-object":53,"./_object-dp":65,"./_uid":93}],63:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":33,"./_global":44,"./_task":86}],64:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
},{"./_an-object":30,"./_dom-create":38,"./_enum-bug-keys":39,"./_html":47,"./_object-dps":66,"./_shared-key":82}],65:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":30,"./_descriptors":37,"./_ie8-dom-define":48,"./_to-primitive":92}],66:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":30,"./_descriptors":37,"./_object-dp":65,"./_object-keys":73}],67:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":37,"./_has":45,"./_ie8-dom-define":48,"./_object-pie":74,"./_property-desc":76,"./_to-iobject":89,"./_to-primitive":92}],68:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":69,"./_to-iobject":89}],69:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":39,"./_object-keys-internal":72}],70:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],71:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":45,"./_shared-key":82,"./_to-object":91}],72:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":31,"./_has":45,"./_shared-key":82,"./_to-iobject":89}],73:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":39,"./_object-keys-internal":72}],74:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],75:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":34,"./_export":41,"./_fails":42}],76:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],77:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":46}],78:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":46}],79:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":30,"./_ctx":35,"./_is-object":53,"./_object-gopd":67}],80:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":34,"./_descriptors":37,"./_global":44,"./_object-dp":65,"./_wks":96}],81:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":45,"./_object-dp":65,"./_wks":96}],82:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":83,"./_uid":93}],83:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":44}],84:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":27,"./_an-object":30,"./_wks":96}],85:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":36,"./_to-integer":88}],86:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":33,"./_ctx":35,"./_dom-create":38,"./_global":44,"./_html":47,"./_invoke":49}],87:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":88}],88:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],89:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":36,"./_iobject":50}],90:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":88}],91:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":36}],92:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":53}],93:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],94:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":34,"./_global":44,"./_library":61,"./_object-dp":65,"./_wks-ext":95}],95:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":96}],96:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":44,"./_shared":83,"./_uid":93}],97:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":32,"./_core":34,"./_iterators":59,"./_wks":96}],98:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":28,"./_iter-define":56,"./_iter-step":58,"./_iterators":59,"./_to-iobject":89}],99:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":41,"./_object-create":64}],100:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":37,"./_export":41,"./_object-dp":65}],101:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require('./_to-iobject')
  , $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":67,"./_object-sap":75,"./_to-iobject":89}],102:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":71,"./_object-sap":75,"./_to-object":91}],103:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":73,"./_object-sap":75,"./_to-object":91}],104:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":41,"./_set-proto":79}],105:[function(require,module,exports){

},{}],106:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , anObject           = require('./_an-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , setProto           = require('./_set-proto').set
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":27,"./_an-instance":29,"./_an-object":30,"./_classof":32,"./_core":34,"./_ctx":35,"./_export":41,"./_for-of":43,"./_global":44,"./_is-object":53,"./_iter-detect":57,"./_library":61,"./_microtask":63,"./_redefine-all":77,"./_set-proto":79,"./_set-species":80,"./_set-to-string-tag":81,"./_species-constructor":84,"./_task":86,"./_wks":96}],107:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":56,"./_string-at":85}],108:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":30,"./_descriptors":37,"./_enum-keys":40,"./_export":41,"./_fails":42,"./_global":44,"./_has":45,"./_hide":46,"./_is-array":52,"./_keyof":60,"./_library":61,"./_meta":62,"./_object-create":64,"./_object-dp":65,"./_object-gopd":67,"./_object-gopn":69,"./_object-gopn-ext":68,"./_object-gops":70,"./_object-keys":73,"./_object-pie":74,"./_property-desc":76,"./_redefine":78,"./_set-to-string-tag":81,"./_shared":83,"./_to-iobject":89,"./_to-primitive":92,"./_uid":93,"./_wks":96,"./_wks-define":94,"./_wks-ext":95}],109:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":94}],110:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":94}],111:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":44,"./_hide":46,"./_iterators":59,"./_wks":96,"./es6.array.iterator":98}],112:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],113:[function(require,module,exports){
(function (process,global){
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

// Distribution file for PersistenceManager.js 
// version: 0.3.0
// Last build: Wed Jun 29 2016 18:18:30 GMT+0100 (WEST)

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.PersistenceManager=t()}}(function(){return function t(e,n,o){function r(s,c){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[s]={exports:{}};e[s][0].call(f.exports,function(t){var n=e[s][1][t];return r(n?n:t)},f,f.exports,t,e,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(t,e,n){e.exports={"default":t("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":2}],2:[function(t,e,n){var o=t("../../modules/_core"),r=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(t){return r.stringify.apply(r,arguments)}},{"../../modules/_core":3}],3:[function(t,e,n){var o=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},{}],4:[function(t,e,n){"use strict";function o(t){if(null===t||"object"!=typeof t)return t;if(t instanceof Object)var e={__proto__:t.__proto__};else var e=Object.create(null);return Object.getOwnPropertyNames(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var r=t("fs");e.exports=o(r)},{fs:void 0}],5:[function(t,e,n){function o(){}function r(t){function e(t,e,n){function o(t,e,n){return v(t,e,function(r){!r||"EMFILE"!==r.code&&"ENFILE"!==r.code?("function"==typeof n&&n.apply(this,arguments),s()):i([o,[t,e,n]])})}return"function"==typeof e&&(n=e,e=null),o(t,e,n)}function n(t,e,n,o){function r(t,e,n,o){return g(t,e,n,function(c){!c||"EMFILE"!==c.code&&"ENFILE"!==c.code?("function"==typeof o&&o.apply(this,arguments),s()):i([r,[t,e,n,o]])})}return"function"==typeof n&&(o=n,n=null),r(t,e,n,o)}function o(t,e,n,o){function r(t,e,n,o){return _(t,e,n,function(c){!c||"EMFILE"!==c.code&&"ENFILE"!==c.code?("function"==typeof o&&o.apply(this,arguments),s()):i([r,[t,e,n,o]])})}return"function"==typeof n&&(o=n,n=null),r(t,e,n,o)}function c(t,e){function n(){return w(t,function(o,r){r&&r.sort&&r.sort(),!o||"EMFILE"!==o.code&&"ENFILE"!==o.code?("function"==typeof e&&e.apply(this,arguments),s()):i([n,[t,e]])})}return n(t,e)}function f(t,e){return this instanceof f?(E.apply(this,arguments),this):f.apply(Object.create(f.prototype),arguments)}function l(){var t=this;m(t.path,t.flags,t.mode,function(e,n){e?(t.autoClose&&t.destroy(),t.emit("error",e)):(t.fd=n,t.emit("open",n),t.read())})}function h(t,e){return this instanceof h?(b.apply(this,arguments),this):h.apply(Object.create(h.prototype),arguments)}function p(){var t=this;m(t.path,t.flags,t.mode,function(e,n){e?(t.destroy(),t.emit("error",e)):(t.fd=n,t.emit("open",n))})}function d(t,e){return new f(t,e)}function y(t,e){return new h(t,e)}function m(t,e,n,o){function r(t,e,n,o){return I(t,e,n,function(c,a){!c||"EMFILE"!==c.code&&"ENFILE"!==c.code?("function"==typeof o&&o.apply(this,arguments),s()):i([r,[t,e,n,o]])})}return"function"==typeof n&&(o=n,n=null),r(t,e,n,o)}a(t),t.gracefulify=r,t.FileReadStream=f,t.FileWriteStream=h,t.createReadStream=d,t.createWriteStream=y;var v=t.readFile;t.readFile=e;var g=t.writeFile;t.writeFile=n;var _=t.appendFile;_&&(t.appendFile=o);var w=t.readdir;if(t.readdir=c,"v0.8"===process.version.substr(0,4)){var S=u(t);f=S.ReadStream,h=S.WriteStream}var E=t.ReadStream;f.prototype=Object.create(E.prototype),f.prototype.open=l;var b=t.WriteStream;h.prototype=Object.create(b.prototype),h.prototype.open=p,t.ReadStream=f,t.WriteStream=h;var I=t.open;return t.open=m,t}function i(t){h("ENQUEUE",t[0].name,t[1]),f.push(t)}function s(){var t=f.shift();t&&(h("RETRY",t[0].name,t[1]),t[0].apply(null,t[1]))}var c=t("fs"),a=t("./polyfills.js"),u=t("./legacy-streams.js"),f=[],l=t("util"),h=o;l.debuglog?h=l.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(h=function(){var t=l.format.apply(l,arguments);t="GFS4: "+t.split(/\n/).join("\nGFS4: "),console.error(t)}),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",function(){h(f),t("assert").equal(f.length,0)}),e.exports=r(t("./fs.js")),process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&(e.exports=r(c)),e.exports.close=c.close=function(t){return function(e,n){return t.call(c,e,function(t){t||s(),"function"==typeof n&&n.apply(this,arguments)})}}(c.close),e.exports.closeSync=c.closeSync=function(t){return function(e){var n=t.apply(c,arguments);return s(),n}}(c.closeSync)},{"./fs.js":4,"./legacy-streams.js":6,"./polyfills.js":7,assert:void 0,fs:void 0,util:void 0}],6:[function(t,e,n){function o(t){function e(n,o){if(!(this instanceof e))return new e(n,o);r.call(this);var i=this;this.path=n,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=65536,o=o||{};for(var s=Object.keys(o),c=0,a=s.length;c<a;c++){var u=s[c];this[u]=o[u]}if(this.encoding&&this.setEncoding(this.encoding),void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}return null!==this.fd?void process.nextTick(function(){i._read()}):void t.open(this.path,this.flags,this.mode,function(t,e){return t?(i.emit("error",t),void(i.readable=!1)):(i.fd=e,i.emit("open",e),void i._read())})}function n(e,o){if(!(this instanceof n))return new n(e,o);r.call(this),this.path=e,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,o=o||{};for(var i=Object.keys(o),s=0,c=i.length;s<c;s++){var a=i[s];this[a]=o[a]}if(void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1,this._queue=[],null===this.fd&&(this._open=t.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}return{ReadStream:e,WriteStream:n}}var r=t("stream").Stream;e.exports=o},{stream:void 0}],7:[function(t,e,n){function o(t){f.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&r(t),t.lutimes||i(t),t.chown=s(t.chown),t.fchown=s(t.fchown),t.lchown=s(t.lchown),t.chmod=s(t.chmod),t.fchmod=s(t.fchmod),t.lchmod=s(t.lchmod),t.chownSync=c(t.chownSync),t.fchownSync=c(t.fchownSync),t.lchownSync=c(t.lchownSync),t.chmodSync=s(t.chmodSync),t.fchmodSync=s(t.fchmodSync),t.lchmodSync=s(t.lchmodSync),t.lchmod||(t.lchmod=function(t,e,n){process.nextTick(n)},t.lchmodSync=function(){}),t.lchown||(t.lchown=function(t,e,n,o){process.nextTick(o)},t.lchownSync=function(){}),"win32"===process.platform&&(t.rename=function(t){return function(e,n,o){var r=Date.now();t(e,n,function i(s){return s&&("EACCES"===s.code||"EPERM"===s.code)&&Date.now()-r<1e3?t(e,n,i):void(o&&o(s))})}}(t.rename)),t.read=function(e){return function(n,o,r,i,s,c){var a;if(c&&"function"==typeof c){var u=0;a=function(f,l,h){return f&&"EAGAIN"===f.code&&u<10?(u++,e.call(t,n,o,r,i,s,a)):void c.apply(this,arguments)}}return e.call(t,n,o,r,i,s,a)}}(t.read),t.readSync=function(e){return function(n,o,r,i,s){for(var c=0;;)try{return e.call(t,n,o,r,i,s)}catch(a){if("EAGAIN"===a.code&&c<10){c++;continue}throw a}}}(t.readSync)}function r(t){t.lchmod=function(e,n,o){o=o||noop,t.open(e,f.O_WRONLY|f.O_SYMLINK,n,function(e,r){return e?void o(e):void t.fchmod(r,n,function(e){t.close(r,function(t){o(e||t)})})})},t.lchmodSync=function(e,n){var o,r=t.openSync(e,f.O_WRONLY|f.O_SYMLINK,n),i=!0;try{o=t.fchmodSync(r,n),i=!1}finally{if(i)try{t.closeSync(r)}catch(s){}else t.closeSync(r)}return o}}function i(t){f.hasOwnProperty("O_SYMLINK")?(t.lutimes=function(e,n,o,r){t.open(e,f.O_SYMLINK,function(e,i){return r=r||noop,e?r(e):void t.futimes(i,n,o,function(e){t.close(i,function(t){return r(e||t)})})})},t.lutimesSync=function(e,n,o){var r,i=t.openSync(e,f.O_SYMLINK),s=!0;try{r=t.futimesSync(i,n,o),s=!1}finally{if(s)try{t.closeSync(i)}catch(c){}else t.closeSync(i)}return r}):(t.lutimes=function(t,e,n,o){process.nextTick(o)},t.lutimesSync=function(){})}function s(t){return t?function(e,n,o,r){return t.call(u,e,n,o,function(t,e){a(t)&&(t=null),r(t,e)})}:t}function c(t){return t?function(e,n,o){try{return t.call(u,e,n,o)}catch(r){if(!a(r))throw r}}:t}function a(t){if(!t)return!0;if("ENOSYS"===t.code)return!0;var e=!process.getuid||0!==process.getuid();return!(!e||"EINVAL"!==t.code&&"EPERM"!==t.code)}var u=t("./fs.js"),f=t("constants"),l=process.cwd,h=null;process.cwd=function(){return h||(h=l.call(process)),h};try{process.cwd()}catch(p){}var d=process.chdir;process.chdir=function(t){h=null,d.call(process,t)},e.exports=o},{"./fs.js":4,constants:void 0}],8:[function(t,e,n){!function(){function t(e,o){var r=this instanceof t?this:n;if(r.reset(o),"string"==typeof e&&e.length>0&&r.hash(e),r!==this)return r}var n;t.prototype.hash=function(t){var e,n,o,r,i;switch(i=t.length,this.len+=i,n=this.k1,o=0,this.rem){case 0:n^=i>o?65535&t.charCodeAt(o++):0;case 1:n^=i>o?(65535&t.charCodeAt(o++))<<8:0;case 2:n^=i>o?(65535&t.charCodeAt(o++))<<16:0;case 3:n^=i>o?(255&t.charCodeAt(o))<<24:0,n^=i>o?(65280&t.charCodeAt(o++))>>8:0}if(this.rem=i+this.rem&3,i-=this.rem,i>0){for(e=this.h1;;){if(n=11601*n+3432906752*(65535&n)&4294967295,n=n<<15|n>>>17,n=13715*n+461832192*(65535&n)&4294967295,e^=n,e=e<<13|e>>>19,e=5*e+3864292196&4294967295,o>=i)break;n=65535&t.charCodeAt(o++)^(65535&t.charCodeAt(o++))<<8^(65535&t.charCodeAt(o++))<<16,r=t.charCodeAt(o++),n^=(255&r)<<24^(65280&r)>>8}switch(n=0,this.rem){case 3:n^=(65535&t.charCodeAt(o+2))<<16;case 2:n^=(65535&t.charCodeAt(o+1))<<8;case 1:n^=65535&t.charCodeAt(o)}this.h1=e}return this.k1=n,this},t.prototype.result=function(){var t,e;return t=this.k1,e=this.h1,t>0&&(t=11601*t+3432906752*(65535&t)&4294967295,t=t<<15|t>>>17,t=13715*t+461832192*(65535&t)&4294967295,e^=t),e^=this.len,e^=e>>>16,e=51819*e+2246770688*(65535&e)&4294967295,e^=e>>>13,e=44597*e+3266445312*(65535&e)&4294967295,e^=e>>>16,e>>>0},t.prototype.reset=function(t){return this.h1="number"==typeof t?t:0,this.rem=this.k1=this.len=0,this},n=new t,"undefined"!=typeof e?e.exports=t:this.MurmurHash3=t}()},{}],9:[function(t,e,n){(function(){var e,o,r,i,s,c,a,u,f,l,h,p,d,y,m=function(t,e){function n(){this.constructor=t}for(var o in e)v.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},v={}.hasOwnProperty;d=t("path"),p=t("fs"),h=t("events"),y=t("write-file-atomic").sync,o="---.EMPTY_STRING.---",a=function(t){var e,n,o,r,i;for(r=p.readdirSync(t),i=[],e=0,n=r.length;e<n;e++)o=r[e],i.push(f(d.join(t,o)));return i},f=function(t){return p.statSync(t).isDirectory()?(a(t),p.rmdirSync(t)):p.unlinkSync(t)},u=function(t){var e;return e=""===t?o:t.toString()},s=function(t){function e(t){this.message=null!=t?t:"Unknown error.",null!=Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name=this.constructor.name}return m(e,t),e.prototype.toString=function(){return this.name+": "+this.message},e}(Error),c=function(){function t(t,e,n,o,r){this.key=t,this.oldValue=e,this.newValue=n,this.url=o,this.storageArea=null!=r?r:"localStorage"}return t}(),i=function(){function t(e,n){if(this.key=e,this.index=n,!(this instanceof t))return new t(this.key,this.index)}return t}(),l=function(){var t;return t=function(){},t.prototype=Object.create(null),new t},r=function(t){function e(t,o){return this._location=t,this.quota=null!=o?o:5242880,this instanceof e?(this._location=d.resolve(this._location),null!=n[this._location]?n[this._location]:(this.length=0,this._bytesInUse=0,this._keys=[],this._metaKeyMap=l(),this._eventUrl="pid:"+process.pid,this._init(),this._QUOTA_EXCEEDED_ERR=s,n[this._location]=this,n[this._location])):new e(this._location,this.quota)}var n;return m(e,t),n={},e.prototype._init=function(){var t,e,n,o,r,s,c,a;try{if(a=p.statSync(this._location),null!=a&&!a.isDirectory())throw new Error("A file exists at the location '"+this._location+"' when trying to create/open localStorage");for(this._bytesInUse=0,this.length=0,n=p.readdirSync(this._location),r=o=0,c=n.length;o<c;r=++o)s=n[r],e=decodeURIComponent(s),this._keys.push(e),t=new i(s,r),this._metaKeyMap[e]=t,a=this._getStat(s),null!=(null!=a?a.size:void 0)&&(t.size=a.size,this._bytesInUse+=a.size);this.length=n.length}catch(u){p.mkdirSync(this._location)}},e.prototype.setItem=function(t,e){var n,o,r,a,f,l,p,m,v,g;if(f=h.EventEmitter.listenerCount(this,"storage"),m=null,f&&(m=this.getItem(t)),t=u(t),n=encodeURIComponent(t),a=d.join(this._location,n),v=e.toString(),g=v.length,l=this._metaKeyMap[t],r=!!l,p=r?l.size:0,this._bytesInUse-p+g>this.quota)throw new s;if(y(a,v,"utf8"),r||(l=new i(n,this._keys.push(t)-1),l.size=g,this._metaKeyMap[t]=l,this.length+=1,this._bytesInUse+=g),f)return o=new c(t,m,e,this._eventUrl),this.emit("storage",o)},e.prototype.getItem=function(t){var e,n;return t=u(t),n=this._metaKeyMap[t],n?(e=d.join(this._location,n.key),p.readFileSync(e,"utf8")):null},e.prototype._getStat=function(t){var e;t=u(t),e=d.join(this._location,encodeURIComponent(t));try{return p.statSync(e)}catch(n){return null}},e.prototype.removeItem=function(t){var e,n,o,r,i,s,a,l,p;if(t=u(t),s=this._metaKeyMap[t]){o=h.EventEmitter.listenerCount(this,"storage"),a=null,o&&(a=this.getItem(t)),delete this._metaKeyMap[t],this.length-=1,this._bytesInUse-=s.size,n=d.join(this._location,s.key),this._keys.splice(s.index,1),l=this._metaKeyMap;for(r in l)p=l[r],i=this._metaKeyMap[r],i.index>s.index&&(i.index-=1);if(f(n),o)return e=new c(t,a,null,this._eventUrl),this.emit("storage",e)}},e.prototype.key=function(t){return this._keys[t]},e.prototype.clear=function(){var t;if(a(this._location),this._metaKeyMap=l(),this._keys=[],this.length=0,this._bytesInUse=0,h.EventEmitter.listenerCount(this,"storage"))return t=new c(null,null,null,this._eventUrl),this.emit("storage",t)},e.prototype._getBytesInUse=function(){return this._bytesInUse},e.prototype._deleteLocation=function(){return delete n[this._location],f(this._location),this._metaKeyMap={},this._keys=[],this.length=0,this._bytesInUse=0},e}(h.EventEmitter),e=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return m(e,t),e.prototype.setItem=function(t,n){var o;return o=JSON.stringify(n),e.__super__.setItem.call(this,t,o)},e.prototype.getItem=function(t){return JSON.parse(e.__super__.getItem.call(this,t))},e}(r),n.LocalStorage=r,n.JSONStorage=e,n.QUOTA_EXCEEDED_ERR=s}).call(this)},{events:void 0,fs:void 0,path:void 0,"write-file-atomic":14}],10:[function(t,e,n){function o(){function t(u){u&&!s&&(s=u);for(var f=arguments.length,l=1;l<f;l++)void 0!==arguments[l]&&(i[l-1]=(i[l-1]||[]).concat(arguments[l]));if(n.length>c){var h=n.slice(c);a+=(n.length-c)*r,c=n.length,process.nextTick(function(){h.forEach(function(n){e.forEach(function(e){e(n,t)})})})}0===--a&&o.apply(null,[s].concat(i))}var e=Array.prototype.slice.call(arguments),n=e.shift()||[],o=e.pop();if("function"!=typeof o)throw new Error("No callback provided to asyncMap");if(!n)return o(null,[]);Array.isArray(n)||(n=[n]);var r=e.length,i=[],s=null,c=n.length,a=c*r;return a?void n.forEach(function(n){e.forEach(function(e){e(n,t)})}):o(null,[])}e.exports=o},{}],11:[function(t,e,n){function o(){var t,e=Array.prototype.slice.call(arguments),n=null;return"object"==typeof e[0]?(n=e.shift(),t=e.shift(),"string"==typeof t&&(t=n[t])):t=e.shift(),function(o){t.apply(n,e.concat(o))}}e.exports=o},{}],12:[function(t,e,n){function o(t,e){var n=[];!function i(s,c){return s>=c?e(null,n):(Array.isArray(t[s])&&(t[s]=r.apply(null,t[s].map(function(t){return t===o.first?n[0]:t===o.last?n[n.length-1]:t}))),t[s]?void t[s](function(t,o){return t?e(t,n):(void 0!==o&&(n=n.concat(o)),void i(s+1,c))}):i(s+1,c))}(0,t.length)}e.exports=o;var r=t("./bind-actor.js");o.first={},o.last={}},{"./bind-actor.js":11}],13:[function(t,e,n){n.asyncMap=t("./async-map"),n.bindActor=t("./bind-actor"),n.chain=t("./chain")},{"./async-map":10,"./bind-actor":11,"./chain":12}],14:[function(t,e,n){(function(n){"use strict";function o(){for(var t=new s,e=0;e<arguments.length;++e)t.hash(""+arguments[e]);return t.result()}var r=t("graceful-fs"),i=t("slide").chain,s=t("imurmurhash"),c=0,a=function(t){return t+"."+o(n,process.pid,++c)};e.exports=function(t,e,n,o){n instanceof Function&&(o=n,n=null),n||(n={});var s=a(t);i([[r,r.writeFile,s,e,n],n.chown&&[r,r.chown,s,n.chown.uid,n.chown.gid],[r,r.rename,s,t]],function(t){t?r.unlink(s,function(){o(t)}):o()})},e.exports.sync=function(t,e,n){n||(n={});var o=a(t);try{r.writeFileSync(o,e,n),n.chown&&r.chownSync(o,n.chown.uid,n.chown.gid),r.renameSync(o,t)}catch(i){try{r.unlinkSync(o)}catch(s){}throw i}}}).call(this,"/home/vsilva/pt-inovacao/rethink-project/dev-service-framework/node_modules/write-file-atomic/index.js")},{"graceful-fs":5,imurmurhash:8,slide:13}],15:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var r=t("babel-runtime/core-js/json/stringify"),i=o(r),s=t("./universal-localstorage"),c=o(s),a={set:function(t,e,n){c["default"].setItem(t,(0,i["default"])({version:e,value:n}))},get:function(t){try{return JSON.parse(c["default"].getItem(t)).value}catch(e){}},getVersion:function(t){try{return JSON.parse(c["default"].getItem(t)).version}catch(e){}},"delete":function(t){c["default"].removeItem(t)}};n["default"]=a,e.exports=n["default"]},{"./universal-localstorage":17,"babel-runtime/core-js/json/stringify":1}],16:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var r=t("babel-runtime/core-js/json/stringify"),i=o(r);"undefined"!=typeof window.localStorage&&"undefined"!=typeof window.sessionStorage||function(){var t=function(t){function e(t,e,n){var o,r;n?(o=new Date,o.setTime(o.getTime()+24*n*60*60*1e3),r="; expires="+o.toGMTString()):r="",document.cookie=t+"="+e+r+"; path=/"}function n(t){var e,n,o=t+"=",r=document.cookie.split(";");for(e=0;e<r.length;e++){for(n=r[e];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null}function o(n){n=(0,i["default"])(n),"session"==t?window.name=n:e("localStorage",n,365)}function r(){"session"==t?window.name="":e("localStorage","",365)}function s(){var e="session"==t?window.name:n("localStorage");return e?JSON.parse(e):{}}var c=s();return{length:0,clear:function(){c={},this.length=0,r()},getItem:function(t){return void 0===c[t]?null:c[t]},key:function(t){var e=0;for(var n in c){if(e==t)return n;e++}return null},removeItem:function(t){delete c[t],this.length--,o(c)},setItem:function(t,e){c[t]=e+"",this.length++,o(c)}}};"undefined"==typeof window.localStorage&&(window.localStorage=new t("local")),"undefined"==typeof window.sessionStorage&&(window.sessionStorage=new t("session"))}()},{"babel-runtime/core-js/json/stringify":1}],17:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=void 0;if("undefined"==typeof window){var r=t("node-localstorage").LocalStorage;o=new r("./uls-scratch")}else o="undefined"==typeof window.localStorage||"undefined"==typeof window.sessionStorage?t("./rem-localstorage"):window.localStorage;n["default"]=o,e.exports=n["default"]},{"./rem-localstorage":16,"node-localstorage":9}]},{},[15])(15)});


}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":112}],114:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CombiningAlgorithm = function CombiningAlgorithm() {
  (0, _classCallCheck3.default)(this, CombiningAlgorithm);
};

exports.default = CombiningAlgorithm;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":11}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Operators = function () {
  function Operators() {
    (0, _classCallCheck3.default)(this, Operators);
  }

  (0, _createClass3.default)(Operators, [{
    key: 'and',
    value: function and(params) {
      return params[0] && params[1];
    }
  }, {
    key: 'between',
    value: function between(params) {
      var start = parseInt(params[0][0]);
      var end = parseInt(params[0][1]);
      var now = params[1];

      if (end < start) {
        now = now < start ? now += 2400 : now;
        end += 2400;
      }

      return now > start && now < end;
    }
  }, {
    key: 'equals',
    value: function equals(params) {
      return params[0] == '*' || params[0] == params[1];
    }
  }, {
    key: 'in',
    value: function _in(params) {
      return params[0].indexOf(params[1]) > -1;
    }
  }, {
    key: 'not',
    value: function not(params) {
      return !params[0];
    }
  }, {
    key: 'or',
    value: function or(params) {
      return params[0] || params[1];
    }
  }]);
  return Operators;
}();

exports.default = Operators;
module.exports = exports['default'];

},{"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],116:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Operators = require('./Operators');

var _Operators2 = _interopRequireDefault(_Operators);

var _RuntimeCoreCtx = require('./context/RuntimeCoreCtx');

var _RuntimeCoreCtx2 = _interopRequireDefault(_RuntimeCoreCtx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The Policy Decision Point (PDP) decides if a message is to be authorised by checking a set of
* policies. The resource to be verified is specified in the first word of the 'condition' field of
* a Policy object. The implementation that verifies if the message is compliant with a policy is
* specified in a hashtable to allow dynamic definition of the implementation, providing
* extensibility to the Policy Engine functionalities.
*/

var PDP = function () {
  function PDP(context) {
    (0, _classCallCheck3.default)(this, PDP);

    this.context = context;
    this.operators = new _Operators2.default();
  }

  (0, _createClass3.default)(PDP, [{
    key: 'applyPolicies',
    value: function applyPolicies(message, policies) {
      var result = this.evaluateSPPolicy(message, policies.serviceProviderPolicy);

      if (this.context instanceof _RuntimeCoreCtx2.default && (result || result === 'Not Applicable')) {
        result = this.evaluateUserPolicy(message, policies.userPolicy);
      }

      return result;
    }
  }, {
    key: 'evaluateSPPolicy',
    value: function evaluateSPPolicy(message, policy) {
      var result = void 0;

      if (policy) {
        result = policy.evaluate(this.context, message);
      } else {
        result = 'Not Applicable';
      }

      return result;
    }
  }, {
    key: 'evaluateUserPolicy',
    value: function evaluateUserPolicy(message, title) {
      var result = void 0;

      if (title !== undefined) {
        var policy = this.context.userPolicies[title];

        if (policy) {
          result = policy.evaluate(this.context, message);
        } else {
          result = 'Not Applicable';
        }
      } else {
        result = 'Not Applicable';
      }

      return result;
    }
  }, {
    key: 'context',
    get: function get() {
      return this._context;
    },
    set: function set(context) {
      this._context = context;
    }
  }, {
    key: 'operators',
    get: function get() {
      return this._operators;
    },
    set: function set(operators) {
      this._operators = operators;
    }
  }]);
  return PDP;
}();

exports.default = PDP;
module.exports = exports['default'];

},{"./Operators":115,"./context/RuntimeCoreCtx":127,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],117:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PEP = function () {
  function PEP(context) {
    (0, _classCallCheck3.default)(this, PEP);

    this.context = context;
  }

  (0, _createClass3.default)(PEP, [{
    key: "enforcePolicies",
    value: function enforcePolicies(message, policies, authDecision) {
      var policy = void 0;

      if (policies.userPolicy) {
        policy = this.context.userPolicies[policies.userPolicy];
        if (policy) {
          policy.enforceActions(this.context, message, authDecision);
        }
      }
      policy = this.context.serviceProviderPolicy;
      if (policy) {
        policy.enforceActions(this.context, message, authDecision);
      }
    }

    /*sendAutomaticMessage() {}
      forwardToID() {}
      forwardToHyperty() {}*/

  }]);
  return PEP;
}();

exports.default = PEP;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _DenyOverrides = require('./combiningAlgorithms/DenyOverrides');

var _DenyOverrides2 = _interopRequireDefault(_DenyOverrides);

var _FirstApplicable = require('./combiningAlgorithms/FirstApplicable');

var _FirstApplicable2 = _interopRequireDefault(_FirstApplicable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Policy = function () {
  function Policy(key, rules, actions, combiningAlgorithm) {
    (0, _classCallCheck3.default)(this, Policy);

    this.actions = actions;
    this.key = key;
    this.rules = rules;
    this.combiningAlgorithm = combiningAlgorithm;
  }

  (0, _createClass3.default)(Policy, [{
    key: 'enforceActions',
    value: function enforceActions(context, message, authDecision) {
      for (var i in this.actions) {
        context[this.actions[i]](message, authDecision);
      }
    }
  }, {
    key: 'evaluate',
    value: function evaluate(context, message) {
      var results = [];

      for (var i in this.rules) {
        results.push(this.rules[i].evaluate(context, message));
      }

      return this.combiningAlgorithm.evaluate(results);
    }
  }, {
    key: 'combiningAlgorithm',
    get: function get() {
      return this._combiningAlgorithm;
    },
    set: function set(combiningAlgorithm) {
      if (combiningAlgorithm === 'denyOverrides') {
        this._combiningAlgorithm = new _DenyOverrides2.default();
      } else {
        if (combiningAlgorithm === 'firstApplicable') {
          this._combiningAlgorithm = new _FirstApplicable2.default();
        } else {
          throw Error('Unknown algorithm: ' + combiningAlgorithm);
        }
      }
    }
  }]);
  return Policy;
}();

exports.default = Policy;
module.exports = exports['default'];

},{"./combiningAlgorithms/DenyOverrides":121,"./combiningAlgorithms/FirstApplicable":122,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],119:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _PEP = require('./PEP');

var _PEP2 = _interopRequireDefault(_PEP);

var _PDP = require('./PDP');

var _PDP2 = _interopRequireDefault(_PDP);

var _UserPolicy = require('./policies/UserPolicy');

var _UserPolicy2 = _interopRequireDefault(_UserPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PolicyEngine = function () {
  function PolicyEngine(context) {
    (0, _classCallCheck3.default)(this, PolicyEngine);

    this.context = context;
    context.policyEngine = this;
    context.loadActivePolicy();
    context.loadGroups();
    context.loadSPPolicies();
    context.loadUserPolicies();
    this.pdp = new _PDP2.default(context);
    this.pep = new _PEP2.default(context);
  }

  (0, _createClass3.default)(PolicyEngine, [{
    key: 'addPolicy',
    value: function addPolicy(source, key, policy) {
      if (source === 'SERVICE_PROVIDER') {
        this.context.serviceProviderPolicies[key] = policy;
        this.context.savePolicies(source);
      } else {
        if (source === 'USER') {
          if (!policy) {
            policy = new _UserPolicy2.default(key, [], []);
          }
          this.context.userPolicies[key] = policy;
          this.context.savePolicies(source);
        } else {
          throw Error('Unknown policy source: ' + source);
        }
      }
    }
  }, {
    key: 'removePolicy',
    value: function removePolicy(source, key) {
      if (source === '*') {
        this.context.serviceProviderPolicies = {};
        this.context.userPolicies = {};
        this.context.activeUserPolicy = undefined;
      } else {
        if (source === 'SERVICE_PROVIDER') {
          delete this.context.serviceProviderPolicies[key];
        } else {
          if (source === 'USER') {
            delete this.context.userPolicies[key];
            if (key === this.context.activeUserPolicy) {
              this.context.activeUserPolicy = undefined;
            }
          } else {
            throw Error('Unknown policy source: ' + source);
          }
        }
      }

      this.context.savePolicies('USER');
      this.context.savePolicies('SERVICE_PROVIDER');
      this.context.saveActivePolicy();
    }
  }, {
    key: 'removeRule',
    value: function removeRule(key, rule) {
      delete this.context.userPolicies[key][rule.scope][rule.target][rule.condition];
    }
  }, {
    key: 'authorise',
    value: function authorise(message) {
      var _this = this;
      return _this.context.authorise(message);
    }
  }, {
    key: 'getGroupsNames',
    value: function getGroupsNames() {
      var myGroups = this.context.groups;
      var groupsNames = [];
      if (myGroups !== undefined) {
        for (var groupName in myGroups) {
          groupsNames.push(groupName);
        }
      }
      return groupsNames;
    }
  }, {
    key: 'getGroup',
    value: function getGroup(groupName) {
      var myGroups = this.context.groups;
      var members = [];

      if (myGroups[groupName] !== undefined) {
        members = myGroups[groupName];
      }

      return members;
    }

    /**
    * Creates a group with the given name.
    * @param  {String}  groupName
    */

  }, {
    key: 'createGroup',
    value: function createGroup(groupName) {
      this.context.groups[groupName] = [];
      this.context.saveGroups();
    }
  }, {
    key: 'deleteGroup',
    value: function deleteGroup(groupName) {
      delete this.context.groups[groupName];
      this.context.saveGroups();
    }

    /**
    * Adds the given user email to the group with the given name.
    * @param  {String}  userEmail
    * @param  {String}  groupName
    */

  }, {
    key: 'addToGroup',
    value: function addToGroup(groupName, userEmail) {
      var myGroups = this.context.groups;
      if (myGroups[groupName] !== undefined) {
        if (myGroups[groupName].indexOf(userEmail) === -1) {
          myGroups[groupName].push(userEmail);
          this.context.saveGroups();
        }
      } else {
        throw Error('Group "' + groupName + '" does not exist!');
      }
    }
  }, {
    key: 'removeFromGroup',
    value: function removeFromGroup(groupName, userEmail) {
      var group = this.context.groups[groupName];

      group.splice(group.indexOf(userEmail), 1);
      this.context.saveGroups();
    }
  }]);
  return PolicyEngine;
}();

exports.default = PolicyEngine;
module.exports = exports['default'];

},{"./PDP":116,"./PEP":117,"./policies/UserPolicy":128,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],120:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils/utils');

var _Operators = require('./Operators');

var _Operators2 = _interopRequireDefault(_Operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rule = function () {
  function Rule(authorise, condition, priority, scope, target) {
    (0, _classCallCheck3.default)(this, Rule);

    this.operators = new _Operators2.default();
    this.authorise = authorise;
    this.condition = condition;
    this.priority = priority;
    this.scope = scope;
    this.target = target;
  }

  (0, _createClass3.default)(Rule, [{
    key: 'evaluate',
    value: function evaluate(context, message) {
      var hypertyName = void 0;
      switch (this.scope) {
        case 'global':
          break;

        case 'hyperty':
          if ((0, _utils.isDataObjectURL)(message.from)) {
            var reporter = context.runtimeRegistry.getReporterURLSynchonous((0, _utils.removePathFromURL)(message.from));
            if (reporter !== undefined) {
              hypertyName = context.runtimeRegistry.getHypertyName(reporter);
            }
          } else {
            if (message.from.split('://')[0] === 'hyperty') {
              hypertyName = context.runtimeRegistry.getHypertyName((0, _utils.removePathFromURL)(message.from));
            }
          }
          if (hypertyName === this.target) {
            break;
          }

          if ((0, _utils.isDataObjectURL)(message.to)) {
            var _reporter = context.runtimeRegistry.getReporterURLSynchonous((0, _utils.removePathFromURL)(message.to));
            if (_reporter !== undefined) {
              hypertyName = context.runtimeRegistry.getHypertyName(_reporter);
            }
          } else {
            if (message.to.split('://')[0] === 'hyperty') {
              hypertyName = context.runtimeRegistry.getHypertyName((0, _utils.removePathFromURL)(message.to));
            }
          }
          if (hypertyName === this.target) {
            break;
          }

          return 'Not Applicable';

        case 'user':
          var owner = void 0;

          if ((0, _utils.isDataObjectURL)(message.from)) {
            var _reporter2 = context.runtimeRegistry.getReporterURLSynchonous((0, _utils.removePathFromURL)(message.from));
            owner = context.runtimeRegistry.getHypertyOwner(_reporter2);
          } else {
            if (message.from.split('://')[0] === 'hyperty') {
              owner = context.runtimeRegistry.getHypertyOwner((0, _utils.removePathFromURL)(message.from));
            }
          }
          if (owner !== undefined) {
            owner = (0, _utils.getUserEmailFromURL)(owner);
          }
          if (owner === this.target) {
            break;
          }

          if ((0, _utils.isDataObjectURL)(message.to)) {
            var _reporter3 = context.runtimeRegistry.getReporterURLSynchonous((0, _utils.removePathFromURL)(message.to));
            owner = context.runtimeRegistry.getHypertyOwner(_reporter3);
            if (owner !== undefined) {
              owner = (0, _utils.getUserEmailFromURL)(owner);
            }
          } else {
            if (message.to.split('://')[0] === 'hyperty') {
              owner = context.runtimeRegistry.getHypertyOwner((0, _utils.removePathFromURL)(message.to));
              if (owner !== undefined) {
                owner = (0, _utils.getUserEmailFromURL)(owner);
              }
            }
          }
          if (owner === this.target) {
            break;
          }

          return 'Not Applicable';
      }
      if (this.condition.isApplicable(context, message, this.scope, this.target)) {
        return this.authorise;
      } else {
        return 'Not Applicable';
      }
    }
  }]);
  return Rule;
}();

exports.default = Rule;
module.exports = exports['default'];

},{"../utils/utils":129,"./Operators":115,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],121:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _CombiningAlgorithm2 = require('../CombiningAlgorithm');

var _CombiningAlgorithm3 = _interopRequireDefault(_CombiningAlgorithm2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DenyOverrides = function (_CombiningAlgorithm) {
  (0, _inherits3.default)(DenyOverrides, _CombiningAlgorithm);

  function DenyOverrides() {
    (0, _classCallCheck3.default)(this, DenyOverrides);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DenyOverrides).apply(this, arguments));
  }

  (0, _createClass3.default)(DenyOverrides, [{
    key: 'evaluate',
    value: function evaluate(individualResults) {
      if (individualResults.indexOf(false) !== -1) {
        return false;
      } else {
        if (individualResults.indexOf(true) !== -1) {
          return true;
        } else {
          return 'Not Applicable';
        }
      }
    }
  }]);
  return DenyOverrides;
}(_CombiningAlgorithm3.default);

exports.default = DenyOverrides;
module.exports = exports['default'];

},{"../CombiningAlgorithm":114,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],122:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _CombiningAlgorithm2 = require('../CombiningAlgorithm');

var _CombiningAlgorithm3 = _interopRequireDefault(_CombiningAlgorithm2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FirstApplicable = function (_CombiningAlgorithm) {
  (0, _inherits3.default)(FirstApplicable, _CombiningAlgorithm);

  function FirstApplicable() {
    (0, _classCallCheck3.default)(this, FirstApplicable);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FirstApplicable).apply(this, arguments));
  }

  (0, _createClass3.default)(FirstApplicable, [{
    key: 'evaluate',
    value: function evaluate(individualResults) {
      for (var i in individualResults) {
        if (individualResults[i] !== 'Not Applicable') {
          return individualResults[i];
        }
      }

      return 'Not Applicable';
    }
  }]);
  return FirstApplicable;
}(_CombiningAlgorithm3.default);

exports.default = FirstApplicable;
module.exports = exports['default'];

},{"../CombiningAlgorithm":114,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Condition = require('./Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _Operators = require('../Operators');

var _Operators2 = _interopRequireDefault(_Operators);

var _SubscriptionCondition = require('./SubscriptionCondition');

var _SubscriptionCondition2 = _interopRequireDefault(_SubscriptionCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdvancedCondition = function () {
  function AdvancedCondition(condition) {
    (0, _classCallCheck3.default)(this, AdvancedCondition);

    this.operators = new _Operators2.default();
    this.condition = condition;
  }

  (0, _createClass3.default)(AdvancedCondition, [{
    key: 'isApplicable',
    value: function isApplicable(context, message, scope, target, operator, left, right) {
      if (!operator) {
        operator = this.condition[0];
        left = this.condition[1];
        right = this.condition[2];
      }

      while (!(left instanceof _Condition2.default) & !(left instanceof _SubscriptionCondition2.default) & typeof left !== 'boolean') {
        left = this.isApplicable(context, message, scope, target, left[0], left[1], left[2]);
      }
      if (right !== undefined) {
        while (!(right instanceof _Condition2.default) & !(right instanceof _SubscriptionCondition2.default) & typeof right !== 'boolean') {
          right = this.isApplicable(context, message, scope, target, right[0], right[1], right[2]);
        }
      }

      var resultLeft = typeof left === 'boolean' ? left : left.isApplicable(context, message, scope, target);
      var resultRight = void 0;
      if (right !== undefined) {
        resultRight = typeof right === 'boolean' ? right : right.isApplicable(context, message, scope, target);
      }
      return this.operators[operator]([resultLeft, resultRight]);
    }
  }]);
  return AdvancedCondition;
}();

exports.default = AdvancedCondition;
module.exports = exports['default'];

},{"../Operators":115,"./Condition":124,"./SubscriptionCondition":125,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],124:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Operators = require('../Operators');

var _Operators2 = _interopRequireDefault(_Operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Condition = function () {
  function Condition(attribute, operator, params) {
    (0, _classCallCheck3.default)(this, Condition);

    this.attribute = attribute;
    this.operator = operator;
    this.params = params;
    this.operators = new _Operators2.default();
  }

  (0, _createClass3.default)(Condition, [{
    key: 'isApplicable',
    value: function isApplicable(context, message) {
      context[this.attribute] = { message: message };
      var value = context[this.attribute];
      var tempParam = void 0;
      if (this.operator === 'in') {
        if (this.params === 'preauthorised') {
          var dataObjectURL = message.to.split('/');
          dataObjectURL.pop();
          dataObjectURL = dataObjectURL[0] + '//' + dataObjectURL[2];
          tempParam = context.runtimeRegistry.getPreAuthSubscribers(dataObjectURL);
        } else {
          tempParam = context.policyEngine.getGroup(this.params);
        }
      }
      if (!tempParam) {
        return this.operators[this.operator]([this.params, value]);
      } else {
        return this.operators[this.operator]([tempParam, value]);
      }
    }
  }]);
  return Condition;
}();

exports.default = Condition;
module.exports = exports['default'];

},{"../Operators":115,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Condition2 = require('./Condition');

var _Condition3 = _interopRequireDefault(_Condition2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubscriptionCondition = function (_Condition) {
  (0, _inherits3.default)(SubscriptionCondition, _Condition);

  function SubscriptionCondition(attribute, operator, params) {
    (0, _classCallCheck3.default)(this, SubscriptionCondition);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SubscriptionCondition).call(this, attribute, operator, params));
  }

  (0, _createClass3.default)(SubscriptionCondition, [{
    key: 'isApplicable',
    value: function isApplicable(context, message, scope, target) {
      var isSubscription = message.type === 'subscribe';
      var isFromRemoteSM = context.isFromRemoteSM(message.from);
      if (isSubscription & isFromRemoteSM) {
        return (0, _get3.default)((0, _getPrototypeOf2.default)(SubscriptionCondition.prototype), 'isApplicable', this).call(this, context, message);
      } else {
        return false;
      }
    }
  }]);
  return SubscriptionCondition;
}(_Condition3.default);

exports.default = SubscriptionCondition;
module.exports = exports['default'];

},{"./Condition":124,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/get":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonCtx = function () {
  function CommonCtx() {
    (0, _classCallCheck3.default)(this, CommonCtx);

    this.defaultBehavior = true;
    this.groups = {};
  }

  (0, _createClass3.default)(CommonCtx, [{
    key: 'defaultBehavior',
    get: function get() {
      return this._defaultBehavior;
    },
    set: function set(behavior) {
      this._defaultBehavior = behavior;
    }
  }, {
    key: 'date',
    set: function set(now) {
      var date = new Date();
      var day = String(date.getDate());
      if (day.length === 1) {
        day = '0' + day;
      }
      var month = String(date.getMonth() + 1);
      if (month.length === 1) {
        month = '0' + month;
      }

      this._date = day + '/' + month + '/' + date.getFullYear();
    },
    get: function get() {
      return this._date;
    }
  }, {
    key: 'domain',
    set: function set(params) {
      if (params.message.body.identity !== undefined) {
        this._domain = (0, _utils.divideEmail)(params.message.body.identity.userProfile.username).domain;
      }
    },
    get: function get() {
      return this._domain;
    }
  }, {
    key: 'source',
    set: function set(params) {
      if (params.message.body.identity !== undefined) {
        this._source = params.message.body.identity.userProfile.username;
      }
    },
    get: function get() {
      var _this = this;
      return _this._source;
    }
  }, {
    key: 'time',
    set: function set(now) {
      now = new Date();
      var minutes = String(now.getMinutes());
      if (minutes.length === 1) {
        minutes = '0' + minutes;
      }
      this._time = parseInt(String(now.getHours()) + minutes);
    },
    get: function get() {
      var _this = this;
      return _this._time;
    }
  }, {
    key: 'weekday',
    set: function set(now) {
      this._weekday = String(new Date().getDay());
    },
    get: function get() {
      return this._weekday;
    }
  }]);
  return CommonCtx;
}();

exports.default = CommonCtx;
module.exports = exports['default'];

},{"../../utils/utils":129,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _CommonCtx2 = require('./CommonCtx');

var _CommonCtx3 = _interopRequireDefault(_CommonCtx2);

var _Condition = require('../conditions/Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _utils = require('../../utils/utils');

var _PersistenceManager = require('service-framework/dist/PersistenceManager');

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

var _Rule = require('../Rule');

var _Rule2 = _interopRequireDefault(_Rule);

var _UserPolicy = require('../policies/UserPolicy');

var _UserPolicy2 = _interopRequireDefault(_UserPolicy);

var _SubscriptionCondition = require('../conditions/SubscriptionCondition');

var _SubscriptionCondition2 = _interopRequireDefault(_SubscriptionCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RuntimeCoreCtx = function (_CommonCtx) {
  (0, _inherits3.default)(RuntimeCoreCtx, _CommonCtx);

  function RuntimeCoreCtx(idModule, runtimeRegistry) {
    (0, _classCallCheck3.default)(this, RuntimeCoreCtx);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RuntimeCoreCtx).call(this));

    _this2.idModule = idModule;
    _this2.runtimeRegistry = runtimeRegistry;
    _this2.activeUserPolicy = undefined;
    _this2.serviceProviderPolicies = {};
    _this2.userPolicies = {};
    return _this2;
  }

  (0, _createClass3.default)(RuntimeCoreCtx, [{
    key: 'authorise',
    value: function authorise(message) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        console.log('--- Policy Engine ---');
        console.log(message);
        message.body = message.body || {};
        var result = void 0;
        var isToVerify = _this._isToVerify(message);
        var isIncomingMessage = _this._isIncomingMessage(message);
        var isToCypher = _this._isToCypherModule(message);
        if (isToVerify) {
          if (isIncomingMessage) {
            if (isToCypher) {
              _this.decrypt(message).then(function (message) {
                var policies = {
                  serviceProviderPolicy: _this.getServiceProviderPolicy(message, isIncomingMessage),
                  userPolicy: _this.activeUserPolicy
                };
                result = _this.policyEngine.pdp.applyPolicies(message, policies);
                _this.policyEngine.pep.enforcePolicies(message, policies, result);
                if (result === 'Not Applicable') {
                  result = _this.defaultBehavior;
                  message.body.auth = false;
                }
                if (result) {
                  var isSubscription = message.type === 'subscribe';
                  var isFromRemoteSM = _this.isFromRemoteSM(message.from);
                  if (isSubscription & isFromRemoteSM) {
                    _this.registerSubscriber(message);
                    _this.doMutualAuthentication(message);
                  }
                  message.body.auth = message.body.auth === undefined ? true : message.body.auth;
                  resolve(message);
                } else {
                  reject('Message blocked');
                }
              }, function (error) {
                reject(error);
              });
            } else {
              var policies = {
                serviceProviderPolicy: _this.getServiceProviderPolicy(message, isIncomingMessage),
                userPolicy: _this.activeUserPolicy
              };
              result = _this.policyEngine.pdp.applyPolicies(message, policies);
              _this.policyEngine.pep.enforcePolicies(message, policies, result);
              if (result === 'Not Applicable') {
                result = _this.defaultBehavior;
                message.body.auth = false;
              }
              if (result) {
                var isSubscription = message.type === 'subscribe';
                var isFromRemoteSM = _this.isFromRemoteSM(message.from);
                if (isSubscription & isFromRemoteSM) {
                  _this.registerSubscriber(message);
                  _this.doMutualAuthentication(message);
                }
                message.body.auth = message.body.auth === undefined ? true : message.body.auth;
                resolve(message);
              } else {
                reject('Message blocked');
              }
            }
          } else {
            var isToSetID = _this._isToSetID(message);
            if (isToSetID) {
              _this._getIdentity(message).then(function (identity) {
                message.body.identity = identity;
                var policies = {
                  serviceProviderPolicy: _this.getServiceProviderPolicy(message, isIncomingMessage),
                  userPolicy: _this.activeUserPolicy
                };
                result = _this.policyEngine.pdp.applyPolicies(message, policies);
                _this.policyEngine.pep.enforcePolicies(message, policies, result);
                if (result === 'Not Applicable') {
                  result = _this.defaultBehavior;
                  message.body.auth = false;
                }
                if (result) {
                  message.body.auth = message.body.auth === undefined ? true : message.body.auth;
                  if (isToCypher) {
                    _this.encrypt(message).then(function (message) {
                      resolve(message);
                    }, function (error) {
                      reject(error);
                    });
                  } else {
                    resolve(message);
                  }
                } else {
                  reject('Message blocked');
                }
              }, function (error) {
                reject(error);
              });
            } else {
              var _policies = {
                serviceProviderPolicy: _this.getServiceProviderPolicy(message, isIncomingMessage),
                userPolicy: _this.activeUserPolicy
              };
              result = _this.policyEngine.pdp.applyPolicies(message, _policies);
              _this.policyEngine.pep.enforcePolicies(message, _policies, result);
              if (result === 'Not Applicable') {
                result = _this.defaultBehavior;
                message.body.auth = false;
              }
              if (result) {
                message.body.auth = message.body.auth === undefined ? true : message.body.auth;
                resolve(message);
              } else {
                reject('Message blocked');
              }
            }
          }
        } else {
          result = _this.defaultBehavior;
          message.body.auth = false;
          if (result) {
            resolve(message);
          } else {
            reject('Message blocked');
          }
        }
      });
    }
  }, {
    key: 'decrypt',
    value: function decrypt(message) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this.idModule.decryptMessage(message).then(function (msg) {
          resolve(msg);
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'doMutualAuthentication',
    value: function doMutualAuthentication(message) {
      var to = message.to.split('/');
      var subsIndex = to.indexOf('subscription');
      var isDataObjectSubscription = subsIndex !== -1;
      var isFromRemoteSM = this.isFromRemoteSM(message.from);
      if (isDataObjectSubscription & isFromRemoteSM) {
        to.pop();
        var dataObjectURL = to[0] + '//' + to[2] + '/' + to[3];
        if (to.length > 4) {
          dataObjectURL = to[0] + '//' + to[2] + '/' + to[3] + '/' + to[4];
        }
        this.idModule.doMutualAuthentication(dataObjectURL, message.body.subscriber);
      }
    }
  }, {
    key: 'encrypt',
    value: function encrypt(message) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this.idModule.encryptMessage(message).then(function (msg) {
          resolve(msg);
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'getMyEmails',
    value: function getMyEmails() {
      var identities = this.idModule.getIdentities();
      var emails = [];

      for (var i in identities) {
        emails.push((0, _utils.getUserEmailFromURL)(identities[i].identity));
      }

      return emails;
    }
  }, {
    key: 'getMyHyperties',
    value: function getMyHyperties() {
      var hyperties = this.runtimeRegistry.hypertiesList;
      var hypertiesNames = [];

      for (var i in hyperties) {
        var hypertyName = hyperties[i].objectName;
        if (hypertiesNames.indexOf(hypertyName) === -1) {
          hypertiesNames.push(hypertyName);
        }
      }

      return hypertiesNames;
    }
  }, {
    key: 'getServiceProviderPolicy',
    value: function getServiceProviderPolicy(message, isIncoming) {
      var policy = void 0;

      if (isIncoming) {
        var toHyperty = this.runtimeRegistry.getHypertyName(message.to);
        policy = this.serviceProviderPolicies[toHyperty];
      } else {
        var fromHyperty = this.runtimeRegistry.getHypertyName(message.from);
        policy = this.serviceProviderPolicies[fromHyperty];
      }
      return policy;
    }
  }, {
    key: 'isFromRemoteSM',
    value: function isFromRemoteSM(from) {
      var splitFrom = from.split('://');
      return splitFrom[0] === 'runtime' && from !== this.runtimeRegistry.runtimeURL + '/sm';
    }
  }, {
    key: '_isToSetID',
    value: function _isToSetID(message) {
      var schemasToIgnore = ['domain-idp', 'runtime', 'domain'];
      var splitFrom = message.from.split('://');
      var fromSchema = splitFrom[0];

      return schemasToIgnore.indexOf(fromSchema) === -1;
    }
  }, {
    key: '_isIncomingMessage',
    value: function _isIncomingMessage(message) {
      return message.body.identity ? true : false;
    }
  }, {
    key: 'getURL',
    value: function getURL(url) {
      var splitURL = url.split('/');
      return splitURL[0] + '//' + splitURL[2] + '/' + splitURL[3];
    }
  }, {
    key: '_getIdentity',
    value: function _getIdentity(message) {
      if (message.type === 'update') {
        return this.idModule.getIdentityOfHyperty(message.body.source);
      }

      if (message.type === 'response' && message.body.source !== undefined) {
        return this.idModule.getIdentityOfHyperty(message.body.source);
      }

      if ((0, _utils.divideURL)(message.from).type === 'hyperty') {
        return this.idModule.getIdentityOfHyperty(message.from);
      } else {
        return this.idModule.getIdentityOfHyperty(this.getURL(message.from));
      }
    }
  }, {
    key: '_isToVerify',
    value: function _isToVerify(message) {
      var schemasToIgnore = ['domain-idp', 'hyperty-runtime', 'runtime', 'domain'];
      var splitFrom = message.from.split('://');
      var fromSchema = splitFrom[0];
      var splitTo = message.to.split('://');
      var toSchema = splitTo[0];
      if (fromSchema === message.from || toSchema === message.to) {
        return false;
      }
      return schemasToIgnore.indexOf(fromSchema) === -1 || schemasToIgnore.indexOf(toSchema) === -1;
    }

    //TODO use schemasToIgnore instead

  }, {
    key: '_isToCypherModule',
    value: function _isToCypherModule(message) {
      var isCreate = message.type === 'create';
      var isFromHyperty = (0, _utils.divideURL)(message.from).type === 'hyperty';
      var isToHyperty = (0, _utils.divideURL)(message.to).type === 'hyperty';
      var isToDataObject = (0, _utils.isDataObjectURL)(message.to);
      var isHandshake = message.type === 'handshake';

      return isCreate && isFromHyperty && isToHyperty || isCreate && isFromHyperty && isToDataObject || isHandshake;
    }
  }, {
    key: 'loadActivePolicy',
    value: function loadActivePolicy() {
      this.activeUserPolicy = _PersistenceManager2.default.get('rethink:activePolicy');
    }
  }, {
    key: 'loadGroups',
    value: function loadGroups() {
      var groups = _PersistenceManager2.default.get('rethink:groups');
      if (groups != undefined) {
        this.groups = groups;
      }
    }
  }, {
    key: 'loadSPPolicies',
    value: function loadSPPolicies() {
      var policies = _PersistenceManager2.default.get('rethink:spPolicies');
      if (policies !== undefined) {
        this.serviceProviderPolicies = policies;
      }
    }
  }, {
    key: 'loadUserPolicies',
    value: function loadUserPolicies() {
      var policies = _PersistenceManager2.default.get('rethink:userPolicies');

      if (policies !== undefined) {
        for (var i in policies) {
          var rulesPE = [];
          var rules = policies[i].rules;
          for (var j in rules) {
            var condition = void 0;
            if (rules[j].condition.attribute === 'subscription') {
              condition = new _SubscriptionCondition2.default(rules[j].condition.attribute, rules[j].condition.operator, rules[j].condition.params);
            } else {
              condition = new _Condition2.default(rules[j].condition.attribute, rules[j].condition.operator, rules[j].condition.params);
            }
            rulesPE.push(new _Rule2.default(rules[j].authorise, condition, rules[j].priority, rules[j].scope, rules[j].target));
          }
          this.userPolicies[i] = new _UserPolicy2.default(policies[i].key, rulesPE, policies[i].actions, policies[i].combiningAlgorithm);
        }
      }
    }
  }, {
    key: 'registerSubscriber',
    value: function registerSubscriber(message) {
      var to = message.to.split('/');
      var subsIndex = to.indexOf('subscription');
      var isDataObjectSubscription = subsIndex !== -1;
      var isFromRemoteSM = this.isFromRemoteSM(message.from);

      if (isDataObjectSubscription & isFromRemoteSM) {
        to.pop();
        var dataObjectURL = to[0] + '//' + to[2] + '/' + to[3];
        if (to.length > 4) {
          dataObjectURL = to[0] + '//' + to[2] + '/' + to[3] + '/' + to[4];
        }
        this.runtimeRegistry.registerSubscriber(dataObjectURL, message.body.subscriber);
      }
    }
  }, {
    key: '_getLastComponentOfURL',
    value: function _getLastComponentOfURL(url) {
      var split = url.split('/');
      return split[split.length - 1];
    }
  }, {
    key: 'saveActivePolicy',
    value: function saveActivePolicy() {
      _PersistenceManager2.default.set('rethink:activePolicy', 0, this.activeUserPolicy);
    }
  }, {
    key: 'saveGroups',
    value: function saveGroups() {
      _PersistenceManager2.default.set('rethink:groups', 0, this.groups);
    }
  }, {
    key: 'savePolicies',
    value: function savePolicies(source) {
      switch (source) {
        case 'USER':
          _PersistenceManager2.default.set('rethink:userPolicies', 0, this.userPolicies);
          break;
        case 'SERVICE_PROVIDER':
          _PersistenceManager2.default.set('rethink:spPolicies', 0, this.serviceProviderPolicies);
          break;
      }
    }
  }, {
    key: 'dataObjectScheme',
    get: function get() {
      return this._dataObjectScheme;
    },
    set: function set(params) {
      var from = params.message.from;
      if ((0, _utils.isDataObjectURL)(from)) {
        this._dataObjectScheme = (0, _utils.divideURL)(from).type;
      } else {
        this._dataObjectScheme = undefined;
      }
    }
  }, {
    key: 'subscription',
    get: function get() {
      return this._subscription;
    },
    set: function set(params) {
      this._subscription = params.message.body.subscriber;
    }
  }]);
  return RuntimeCoreCtx;
}(_CommonCtx3.default);

exports.default = RuntimeCoreCtx;
module.exports = exports['default'];

},{"../../utils/utils":129,"../Rule":120,"../conditions/Condition":124,"../conditions/SubscriptionCondition":125,"../policies/UserPolicy":128,"./CommonCtx":126,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/core-js/promise":8,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15,"service-framework/dist/PersistenceManager":113}],128:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _AdvancedCondition = require('../conditions/AdvancedCondition');

var _AdvancedCondition2 = _interopRequireDefault(_AdvancedCondition);

var _Condition = require('../conditions/Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _Policy2 = require('../Policy');

var _Policy3 = _interopRequireDefault(_Policy2);

var _Rule = require('../Rule');

var _Rule2 = _interopRequireDefault(_Rule);

var _SubscriptionCondition = require('../conditions/SubscriptionCondition');

var _SubscriptionCondition2 = _interopRequireDefault(_SubscriptionCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserPolicy = function (_Policy) {
  (0, _inherits3.default)(UserPolicy, _Policy);

  function UserPolicy(key, rules, actions, combiningAlgorithm) {
    (0, _classCallCheck3.default)(this, UserPolicy);

    if (!combiningAlgorithm) {
      combiningAlgorithm = 'denyOverrides';
    }
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UserPolicy).call(this, key, rules, actions, combiningAlgorithm));
  }

  (0, _createClass3.default)(UserPolicy, [{
    key: 'createRule',
    value: function createRule(type, authorise, condition, scope, target, priority) {
      if (!(condition instanceof _Condition2.default)) {
        switch (type) {
          case 'advanced':
            condition = new _AdvancedCondition2.default(condition);
          case 'simple':
            condition = new _Condition2.default(condition[0], condition[1], condition[2]);
            break;
          case 'subscription':
            condition = new _SubscriptionCondition2.default(condition[0], condition[1], condition[2]);
            break;
        }
      }
      if (priority === undefined) {
        priority = this.getLastPriority() + 1;
      }
      var rule = new _Rule2.default(authorise, condition, priority, scope, target);
      this.rules.push(rule);
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(rule) {
      var indexToRemove = this.rules.indexOf(rule);
      this.rules.splice(indexToRemove, 1);
    }
  }, {
    key: 'getLastPriority',
    value: function getLastPriority() {
      var priorities = [];

      if (this.rules.length !== 0) {
        for (var i in this.rules) {
          priorities.push(this.rules[i].priority);
        }
        return Math.max.apply(Math, priorities);
      } else {
        return -1;
      }
    }
  }, {
    key: 'getRuleByPriority',
    value: function getRuleByPriority(priority) {
      for (var i in this.rules) {
        if (this.rules[i].priority == priority) {
          return this.rules[i];
        }
      }
      throw Error('Rule with priority ' + priority + ' does not exist!');
    }
  }, {
    key: 'hasSubscriptionRule',
    value: function hasSubscriptionRule() {
      for (var i in this.rules) {
        if (this.rules[i].scope !== 'global') {
          continue;
        }
        if (this.rules[i].condition instanceof _SubscriptionCondition2.default) {
          return true;
        } else {
          if (this.rules[i].condition instanceof _AdvancedCondition2.default) {
            for (var j in this.rules[i].condition.condition) {
              if (this.rules[i].condition.condition[j] instanceof _SubscriptionCondition2.default) {
                return true;
              }
            }
          }
        }
      }
      return false;
    }
  }, {
    key: 'sortRules',
    value: function sortRules() {
      return this.rules.sort(function (a, b) {
        var x = a['priority'];var y = b['priority'];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
  }]);
  return UserPolicy;
}(_Policy3.default);

exports.default = UserPolicy;
module.exports = exports['default'];

},{"../Policy":118,"../Rule":120,"../conditions/AdvancedCondition":123,"../conditions/Condition":124,"../conditions/SubscriptionCondition":125,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],129:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.divideURL = divideURL;
exports.divideEmail = divideEmail;
exports.emptyObject = emptyObject;
exports.deepClone = deepClone;
exports.removePathFromURL = removePathFromURL;
exports.getUserURLFromEmail = getUserURLFromEmail;
exports.getUserEmailFromURL = getUserEmailFromURL;
exports.convertToUserURL = convertToUserURL;
exports.isDataObjectURL = isDataObjectURL;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
 * Support module with some functions will be useful
 * @module utils
 */

/**
 * @typedef divideURL
 * @type Object
 * @property {string} type The type of URL
 * @property {string} domain The domain of URL
 * @property {string} identity The identity of URL
 */

/**
 * Divide an url in type, domain and identity
 * @param  {URL.URL} url - url address
 * @return {divideURL} the result of divideURL
 */
function divideURL(url) {

  if (!url) throw Error('URL is needed to split');

  // let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
  var re = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
  var subst = '$1,$2,$3';
  var parts = url.replace(re, subst).split(',');

  // If the url has no protocol, the default protocol set is https
  if (parts[0] === url) {
    parts[0] = 'https';
    parts[1] = url;
  }

  var result = {
    type: parts[0],
    domain: parts[1],
    identity: parts[2]
  };

  return result;
}

function divideEmail(email) {
  var indexOfAt = email.indexOf('@');

  var result = {
    username: email.substring(0, indexOfAt),
    domain: email.substring(indexOfAt + 1, email.length)
  };

  return result;
}

/**
 * Check if an Object is empty
 * @param  {Object} object Object to be checked
 * @return {Boolean}       status of Object, empty or not (true|false);
 */
function emptyObject(object) {
  return (0, _keys2.default)(object).length > 0 ? false : true;
}

/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */
function deepClone(obj) {
  //TODO: simple but inefficient JSON deep clone...
  if (obj) return JSON.parse((0, _stringify2.default)(obj));
}

function removePathFromURL(url) {
  var splitURL = url.split('/');
  return splitURL[0] + '//' + splitURL[2] + '/' + splitURL[3];
}

/**
 * Obtains the user URL that corresponds to a given email
 * @param  {string} userEmail The user email
 * @return {URL.URL} userURL The user URL
 */
function getUserURLFromEmail(userEmail) {
  var indexOfAt = userEmail.indexOf('@');
  return 'user://' + userEmail.substring(indexOfAt + 1, userEmail.length) + '/' + userEmail.substring(0, indexOfAt);
}

/**
 * Obtains the user email that corresponds to a given URL
 * @param  {URL.URL} userURL The user URL
 * @return {string} userEmail The user email
 */
function getUserEmailFromURL(userURL) {
  var url = divideURL(userURL);
  return url.identity.replace('/', '') + '@' + url.domain; // identity field has '/exampleID' instead of 'exampleID'
}

/**
 * Check if the user identifier is already in the URL format, if not, convert to URL format
 * @param  {string}   identifier  user identifier
 * @return {string}   userURL    the user URL
 */
function convertToUserURL(identifier) {

  // check if the identifier is already in the url format
  if (identifier.substring(0, 7) === 'user://') {
    var dividedURL = divideURL(identifier);

    //check if the url is well formated
    if (dividedURL.domain && dividedURL.identity) {
      return identifier;
    } else {
      throw 'userURL with wrong format';
    }

    //if not, convert the user email to URL format
  } else {
      return getUserURLFromEmail(identifier);
    }
}

function isDataObjectURL(url) {
  var schemasToIgnore = ['domain-idp', 'runtime', 'domain', 'hyperty'];
  var splitURL = url.split('://');
  var urlSchema = splitURL[0];

  return schemasToIgnore.indexOf(urlSchema) === -1;
}

},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":6}]},{},[119])(119)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyLmpzIiwic3JjXFxwb2xpY3lcXENvbWJpbmluZ0FsZ29yaXRobS5qcyIsInNyY1xccG9saWN5XFxPcGVyYXRvcnMuanMiLCJzcmNcXHBvbGljeVxcUERQLmpzIiwic3JjXFxwb2xpY3lcXFBFUC5qcyIsInNyY1xccG9saWN5XFxQb2xpY3kuanMiLCJzcmNcXHBvbGljeVxcUG9saWN5RW5naW5lLmpzIiwic3JjXFxwb2xpY3lcXFJ1bGUuanMiLCJzcmNcXHBvbGljeVxcY29tYmluaW5nQWxnb3JpdGhtc1xcRGVueU92ZXJyaWRlcy5qcyIsInNyY1xccG9saWN5XFxjb21iaW5pbmdBbGdvcml0aG1zXFxGaXJzdEFwcGxpY2FibGUuanMiLCJzcmNcXHBvbGljeVxcY29uZGl0aW9uc1xcQWR2YW5jZWRDb25kaXRpb24uanMiLCJzcmNcXHBvbGljeVxcY29uZGl0aW9uc1xcQ29uZGl0aW9uLmpzIiwic3JjXFxwb2xpY3lcXGNvbmRpdGlvbnNcXFN1YnNjcmlwdGlvbkNvbmRpdGlvbi5qcyIsInNyY1xccG9saWN5XFxjb250ZXh0XFxDb21tb25DdHguanMiLCJzcmNcXHBvbGljeVxcY29udGV4dFxcUnVudGltZUNvcmVDdHguanMiLCJzcmNcXHBvbGljeVxccG9saWNpZXNcXFVzZXJQb2xpY3kuanMiLCJzcmNcXHV0aWxzXFx1dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3Qk0sa0I7Ozs7a0JBSVMsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSlQsUzs7Ozs7Ozt3QkFFQSxNLEVBQVE7QUFDVixhQUFPLE9BQU8sQ0FBUCxLQUFhLE9BQU8sQ0FBUCxDQUFwQjtBQUNEOzs7NEJBRU8sTSxFQUFRO0FBQ2QsVUFBSSxRQUFRLFNBQVMsT0FBTyxDQUFQLEVBQVUsQ0FBVixDQUFULENBQVo7QUFDQSxVQUFJLE1BQU0sU0FBUyxPQUFPLENBQVAsRUFBVSxDQUFWLENBQVQsQ0FBVjtBQUNBLFVBQUksTUFBTSxPQUFPLENBQVAsQ0FBVjs7QUFFQSxVQUFJLE1BQU0sS0FBVixFQUFpQjtBQUNmLGNBQU8sTUFBTSxLQUFQLEdBQWdCLE9BQU8sSUFBdkIsR0FBOEIsR0FBcEM7QUFDQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFRLE1BQU0sS0FBTixJQUFlLE1BQU0sR0FBN0I7QUFDRDs7OzJCQUVNLE0sRUFBUTtBQUNiLGFBQU8sT0FBTyxDQUFQLEtBQWEsR0FBYixJQUFvQixPQUFPLENBQVAsS0FBYSxPQUFPLENBQVAsQ0FBeEM7QUFDRDs7O3dCQUVFLE0sRUFBUTtBQUNULGFBQU8sT0FBTyxDQUFQLEVBQVUsT0FBVixDQUFrQixPQUFPLENBQVAsQ0FBbEIsSUFBK0IsQ0FBQyxDQUF2QztBQUNEOzs7d0JBRUcsTSxFQUFRO0FBQ1YsYUFBTyxDQUFDLE9BQU8sQ0FBUCxDQUFSO0FBQ0Q7Ozt1QkFFRSxNLEVBQVE7QUFDVCxhQUFPLE9BQU8sQ0FBUCxLQUFhLE9BQU8sQ0FBUCxDQUFwQjtBQUNEOzs7OztrQkFJWSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2Y7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFRTSxHO0FBRUosZUFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFNBQUwsR0FBaUIseUJBQWpCO0FBQ0Q7Ozs7a0NBa0JhLE8sRUFBUyxRLEVBQVU7QUFDL0IsVUFBSSxTQUFTLEtBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsU0FBUyxxQkFBeEMsQ0FBYjs7QUFFQSxVQUFJLEtBQUssT0FBTCx5Q0FBMkMsVUFBVSxXQUFXLGdCQUFoRSxDQUFKLEVBQXVGO0FBQ3JGLGlCQUFTLEtBQUssa0JBQUwsQ0FBd0IsT0FBeEIsRUFBaUMsU0FBUyxVQUExQyxDQUFUO0FBQ0Q7O0FBRUQsYUFBTyxNQUFQO0FBQ0Q7OztxQ0FFZ0IsTyxFQUFTLE0sRUFBUTtBQUNoQyxVQUFJLGVBQUo7O0FBRUEsVUFBSSxNQUFKLEVBQVk7QUFDVixpQkFBUyxPQUFPLFFBQVAsQ0FBZ0IsS0FBSyxPQUFyQixFQUE4QixPQUE5QixDQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsaUJBQVMsZ0JBQVQ7QUFDRDs7QUFFRCxhQUFPLE1BQVA7QUFDRDs7O3VDQUVrQixPLEVBQVMsSyxFQUFPO0FBQ2pDLFVBQUksZUFBSjs7QUFFQSxVQUFJLFVBQVUsU0FBZCxFQUF5QjtBQUN2QixZQUFJLFNBQVMsS0FBSyxPQUFMLENBQWEsWUFBYixDQUEwQixLQUExQixDQUFiOztBQUVBLFlBQUksTUFBSixFQUFZO0FBQ1YsbUJBQVMsT0FBTyxRQUFQLENBQWdCLEtBQUssT0FBckIsRUFBOEIsT0FBOUIsQ0FBVDtBQUNELFNBRkQsTUFFTztBQUNMLG1CQUFTLGdCQUFUO0FBQ0Q7QUFDRixPQVJELE1BUU87QUFDTCxpQkFBUyxnQkFBVDtBQUNEOztBQUVELGFBQU8sTUFBUDtBQUNEOzs7d0JBdERhO0FBQ1osYUFBTyxLQUFLLFFBQVo7QUFDRCxLO3NCQU1XLE8sRUFBUztBQUNuQixXQUFLLFFBQUwsR0FBZ0IsT0FBaEI7QUFDRDs7O3dCQU5lO0FBQ2QsYUFBTyxLQUFLLFVBQVo7QUFDRCxLO3NCQU1hLFMsRUFBVztBQUN2QixXQUFLLFVBQUwsR0FBa0IsU0FBbEI7QUFDRDs7Ozs7a0JBNENZLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMUVULEc7QUFFSixlQUFZLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNEOzs7O29DQUVlLE8sRUFBUyxRLEVBQVUsWSxFQUFjO0FBQy9DLFVBQUksZUFBSjs7QUFFQSxVQUFJLFNBQVMsVUFBYixFQUF5QjtBQUN2QixpQkFBUyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLFNBQVMsVUFBbkMsQ0FBVDtBQUNBLFlBQUksTUFBSixFQUFZO0FBQ1YsaUJBQU8sY0FBUCxDQUFzQixLQUFLLE9BQTNCLEVBQW9DLE9BQXBDLEVBQTZDLFlBQTdDO0FBQ0Q7QUFDRjtBQUNELGVBQVMsS0FBSyxPQUFMLENBQWEscUJBQXRCO0FBQ0EsVUFBSSxNQUFKLEVBQVk7QUFDVixlQUFPLGNBQVAsQ0FBc0IsS0FBSyxPQUEzQixFQUFvQyxPQUFwQyxFQUE2QyxZQUE3QztBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7a0JBVVksRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JmOzs7O0FBQ0E7Ozs7OztJQUVNLE07QUFFSixrQkFBWSxHQUFaLEVBQWlCLEtBQWpCLEVBQXdCLE9BQXhCLEVBQWlDLGtCQUFqQyxFQUFxRDtBQUFBOztBQUNuRCxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsU0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLLGtCQUFMLEdBQTBCLGtCQUExQjtBQUNEOzs7O21DQWtCYyxPLEVBQVMsTyxFQUFTLFksRUFBYztBQUM3QyxXQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssT0FBbkIsRUFBNEI7QUFDMUIsZ0JBQVEsS0FBSyxPQUFMLENBQWEsQ0FBYixDQUFSLEVBQXlCLE9BQXpCLEVBQWtDLFlBQWxDO0FBQ0Q7QUFDRjs7OzZCQUVRLE8sRUFBUyxPLEVBQVM7QUFDekIsVUFBSSxVQUFVLEVBQWQ7O0FBRUEsV0FBSyxJQUFJLENBQVQsSUFBYyxLQUFLLEtBQW5CLEVBQTBCO0FBQ3hCLGdCQUFRLElBQVIsQ0FBYSxLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsUUFBZCxDQUF1QixPQUF2QixFQUFnQyxPQUFoQyxDQUFiO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLLGtCQUFMLENBQXdCLFFBQXhCLENBQWlDLE9BQWpDLENBQVA7QUFDRDs7O3dCQTlCd0I7QUFDdkIsYUFBTyxLQUFLLG1CQUFaO0FBQ0QsSztzQkFFc0Isa0IsRUFBb0I7QUFDekMsVUFBSSx1QkFBdUIsZUFBM0IsRUFBNEM7QUFDMUMsYUFBSyxtQkFBTCxHQUEyQiw2QkFBM0I7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJLHVCQUF1QixpQkFBM0IsRUFBOEM7QUFDNUMsZUFBSyxtQkFBTCxHQUEyQiwrQkFBM0I7QUFDRCxTQUZELE1BRU87QUFDTCxnQkFBTSxNQUFNLHdCQUF3QixrQkFBOUIsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjs7Ozs7a0JBb0JZLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNLFk7QUFFSix3QkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxZQUFRLFlBQVIsR0FBdUIsSUFBdkI7QUFDQSxZQUFRLGdCQUFSO0FBQ0EsWUFBUSxVQUFSO0FBQ0EsWUFBUSxjQUFSO0FBQ0EsWUFBUSxnQkFBUjtBQUNBLFNBQUssR0FBTCxHQUFXLGtCQUFRLE9BQVIsQ0FBWDtBQUNBLFNBQUssR0FBTCxHQUFXLGtCQUFRLE9BQVIsQ0FBWDtBQUNEOzs7OzhCQUVTLE0sRUFBUSxHLEVBQUssTSxFQUFRO0FBQzdCLFVBQUksV0FBVyxrQkFBZixFQUFtQztBQUNqQyxhQUFLLE9BQUwsQ0FBYSx1QkFBYixDQUFxQyxHQUFyQyxJQUE0QyxNQUE1QztBQUNBLGFBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsTUFBMUI7QUFDRCxPQUhELE1BR087QUFDTCxZQUFJLFdBQVcsTUFBZixFQUF1QjtBQUNyQixjQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gscUJBQVMseUJBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixDQUFUO0FBQ0Q7QUFDRCxlQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEdBQTFCLElBQWlDLE1BQWpDO0FBQ0EsZUFBSyxPQUFMLENBQWEsWUFBYixDQUEwQixNQUExQjtBQUNELFNBTkQsTUFNTztBQUNMLGdCQUFNLE1BQU0sNEJBQTRCLE1BQWxDLENBQU47QUFDRDtBQUNGO0FBQ0Y7OztpQ0FFWSxNLEVBQVEsRyxFQUFLO0FBQ3hCLFVBQUksV0FBVyxHQUFmLEVBQW9CO0FBQ2xCLGFBQUssT0FBTCxDQUFhLHVCQUFiLEdBQXVDLEVBQXZDO0FBQ0EsYUFBSyxPQUFMLENBQWEsWUFBYixHQUE0QixFQUE1QjtBQUNBLGFBQUssT0FBTCxDQUFhLGdCQUFiLEdBQWdDLFNBQWhDO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsWUFBSSxXQUFXLGtCQUFmLEVBQW1DO0FBQ2pDLGlCQUFPLEtBQUssT0FBTCxDQUFhLHVCQUFiLENBQXFDLEdBQXJDLENBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJLFdBQVcsTUFBZixFQUF1QjtBQUNyQixtQkFBTyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEdBQTFCLENBQVA7QUFDQSxnQkFBSSxRQUFRLEtBQUssT0FBTCxDQUFhLGdCQUF6QixFQUEyQztBQUN6QyxtQkFBSyxPQUFMLENBQWEsZ0JBQWIsR0FBZ0MsU0FBaEM7QUFDRDtBQUNGLFdBTEQsTUFLTztBQUNMLGtCQUFNLE1BQU0sNEJBQTRCLE1BQWxDLENBQU47QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsV0FBSyxPQUFMLENBQWEsWUFBYixDQUEwQixNQUExQjtBQUNBLFdBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsa0JBQTFCO0FBQ0EsV0FBSyxPQUFMLENBQWEsZ0JBQWI7QUFDRDs7OytCQUVVLEcsRUFBSyxJLEVBQU07QUFDcEIsYUFBTyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEdBQTFCLEVBQStCLEtBQUssS0FBcEMsRUFBMkMsS0FBSyxNQUFoRCxFQUF3RCxLQUFLLFNBQTdELENBQVA7QUFDRDs7OzhCQUVTLE8sRUFBUztBQUNqQixVQUFJLFFBQVEsSUFBWjtBQUNBLGFBQU8sTUFBTSxPQUFOLENBQWMsU0FBZCxDQUF3QixPQUF4QixDQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFJLFdBQVcsS0FBSyxPQUFMLENBQWEsTUFBNUI7QUFDQSxVQUFJLGNBQWMsRUFBbEI7QUFDQSxVQUFJLGFBQWEsU0FBakIsRUFBNEI7QUFDMUIsYUFBSyxJQUFJLFNBQVQsSUFBc0IsUUFBdEIsRUFBZ0M7QUFDOUIsc0JBQVksSUFBWixDQUFpQixTQUFqQjtBQUNEO0FBQ0Y7QUFDRCxhQUFPLFdBQVA7QUFDRDs7OzZCQUVRLFMsRUFBVztBQUNsQixVQUFJLFdBQVcsS0FBSyxPQUFMLENBQWEsTUFBNUI7QUFDQSxVQUFJLFVBQVUsRUFBZDs7QUFFQSxVQUFJLFNBQVMsU0FBVCxNQUF3QixTQUE1QixFQUF1QztBQUNyQyxrQkFBVSxTQUFTLFNBQVQsQ0FBVjtBQUNEOztBQUVELGFBQU8sT0FBUDtBQUNEOzs7Ozs7Ozs7Z0NBTVcsUyxFQUFXO0FBQ3JCLFdBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsU0FBcEIsSUFBaUMsRUFBakM7QUFDQSxXQUFLLE9BQUwsQ0FBYSxVQUFiO0FBQ0Q7OztnQ0FFVyxTLEVBQVc7QUFDckIsYUFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFNBQXBCLENBQVA7QUFDQSxXQUFLLE9BQUwsQ0FBYSxVQUFiO0FBQ0Q7Ozs7Ozs7Ozs7K0JBT1UsUyxFQUFXLFMsRUFBVztBQUMvQixVQUFJLFdBQVcsS0FBSyxPQUFMLENBQWEsTUFBNUI7QUFDQSxVQUFJLFNBQVMsU0FBVCxNQUF3QixTQUE1QixFQUF1QztBQUNyQyxZQUFJLFNBQVMsU0FBVCxFQUFvQixPQUFwQixDQUE0QixTQUE1QixNQUEyQyxDQUFDLENBQWhELEVBQW1EO0FBQ2pELG1CQUFTLFNBQVQsRUFBb0IsSUFBcEIsQ0FBeUIsU0FBekI7QUFDQSxlQUFLLE9BQUwsQ0FBYSxVQUFiO0FBQ0Q7QUFDRixPQUxELE1BS087QUFDTCxjQUFNLE1BQU0sWUFBWSxTQUFaLEdBQXdCLG1CQUE5QixDQUFOO0FBQ0Q7QUFDRjs7O29DQUVlLFMsRUFBVyxTLEVBQVc7QUFDcEMsVUFBSSxRQUFRLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsU0FBcEIsQ0FBWjs7QUFFQSxZQUFNLE1BQU4sQ0FBYSxNQUFNLE9BQU4sQ0FBYyxTQUFkLENBQWIsRUFBdUMsQ0FBdkM7QUFDQSxXQUFLLE9BQUwsQ0FBYSxVQUFiO0FBQ0Q7Ozs7O2tCQUlZLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJZjs7QUFDQTs7Ozs7O0lBRU0sSTtBQUVKLGdCQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsUUFBbEMsRUFBNEMsS0FBNUMsRUFBbUQsTUFBbkQsRUFBMkQ7QUFBQTs7QUFDekQsU0FBSyxTQUFMLEdBQWlCLHlCQUFqQjtBQUNBLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0Q7Ozs7NkJBRVEsTyxFQUFTLE8sRUFBUztBQUN6QixVQUFJLG9CQUFKO0FBQ0EsY0FBUSxLQUFLLEtBQWI7QUFDRSxhQUFLLFFBQUw7QUFDRTs7QUFFRixhQUFLLFNBQUw7QUFDRSxjQUFJLDRCQUFnQixRQUFRLElBQXhCLENBQUosRUFBbUM7QUFDakMsZ0JBQUksV0FBVyxRQUFRLGVBQVIsQ0FBd0Isd0JBQXhCLENBQWlELDhCQUFrQixRQUFRLElBQTFCLENBQWpELENBQWY7QUFDQSxnQkFBSSxhQUFhLFNBQWpCLEVBQTRCO0FBQzFCLDRCQUFjLFFBQVEsZUFBUixDQUF3QixjQUF4QixDQUF1QyxRQUF2QyxDQUFkO0FBQ0Q7QUFDRixXQUxELE1BS087QUFDTCxnQkFBSSxRQUFRLElBQVIsQ0FBYSxLQUFiLENBQW1CLEtBQW5CLEVBQTBCLENBQTFCLE1BQWlDLFNBQXJDLEVBQWdEO0FBQzlDLDRCQUFjLFFBQVEsZUFBUixDQUF3QixjQUF4QixDQUF1Qyw4QkFBa0IsUUFBUSxJQUExQixDQUF2QyxDQUFkO0FBQ0Q7QUFDRjtBQUNELGNBQUksZ0JBQWdCLEtBQUssTUFBekIsRUFBaUM7QUFDL0I7QUFDRDs7QUFFRCxjQUFJLDRCQUFnQixRQUFRLEVBQXhCLENBQUosRUFBaUM7QUFDL0IsZ0JBQUksWUFBVyxRQUFRLGVBQVIsQ0FBd0Isd0JBQXhCLENBQWlELDhCQUFrQixRQUFRLEVBQTFCLENBQWpELENBQWY7QUFDQSxnQkFBSSxjQUFhLFNBQWpCLEVBQTRCO0FBQzFCLDRCQUFjLFFBQVEsZUFBUixDQUF3QixjQUF4QixDQUF1QyxTQUF2QyxDQUFkO0FBQ0Q7QUFDRixXQUxELE1BS087QUFDTCxnQkFBSSxRQUFRLEVBQVIsQ0FBVyxLQUFYLENBQWlCLEtBQWpCLEVBQXdCLENBQXhCLE1BQStCLFNBQW5DLEVBQThDO0FBQzVDLDRCQUFjLFFBQVEsZUFBUixDQUF3QixjQUF4QixDQUF1Qyw4QkFBa0IsUUFBUSxFQUExQixDQUF2QyxDQUFkO0FBQ0Q7QUFDRjtBQUNELGNBQUksZ0JBQWdCLEtBQUssTUFBekIsRUFBaUM7QUFDL0I7QUFDRDs7QUFFRCxpQkFBTyxnQkFBUDs7QUFFRixhQUFLLE1BQUw7QUFDRSxjQUFJLGNBQUo7O0FBRUEsY0FBSSw0QkFBZ0IsUUFBUSxJQUF4QixDQUFKLEVBQW1DO0FBQ2pDLGdCQUFJLGFBQVcsUUFBUSxlQUFSLENBQXdCLHdCQUF4QixDQUFpRCw4QkFBa0IsUUFBUSxJQUExQixDQUFqRCxDQUFmO0FBQ0Esb0JBQVEsUUFBUSxlQUFSLENBQXdCLGVBQXhCLENBQXdDLFVBQXhDLENBQVI7QUFDRCxXQUhELE1BR087QUFDTCxnQkFBSSxRQUFRLElBQVIsQ0FBYSxLQUFiLENBQW1CLEtBQW5CLEVBQTBCLENBQTFCLE1BQWlDLFNBQXJDLEVBQWdEO0FBQzlDLHNCQUFRLFFBQVEsZUFBUixDQUF3QixlQUF4QixDQUF3Qyw4QkFBa0IsUUFBUSxJQUExQixDQUF4QyxDQUFSO0FBQ0Q7QUFDRjtBQUNELGNBQUksVUFBVSxTQUFkLEVBQXlCO0FBQ3ZCLG9CQUFRLGdDQUFvQixLQUFwQixDQUFSO0FBQ0Q7QUFDRCxjQUFJLFVBQVUsS0FBSyxNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELGNBQUksNEJBQWdCLFFBQVEsRUFBeEIsQ0FBSixFQUFpQztBQUMvQixnQkFBSSxhQUFXLFFBQVEsZUFBUixDQUF3Qix3QkFBeEIsQ0FBaUQsOEJBQWtCLFFBQVEsRUFBMUIsQ0FBakQsQ0FBZjtBQUNBLG9CQUFRLFFBQVEsZUFBUixDQUF3QixlQUF4QixDQUF3QyxVQUF4QyxDQUFSO0FBQ0EsZ0JBQUksVUFBVSxTQUFkLEVBQXlCO0FBQ3ZCLHNCQUFRLGdDQUFvQixLQUFwQixDQUFSO0FBQ0Q7QUFDRixXQU5ELE1BTU87QUFDTCxnQkFBSSxRQUFRLEVBQVIsQ0FBVyxLQUFYLENBQWlCLEtBQWpCLEVBQXdCLENBQXhCLE1BQStCLFNBQW5DLEVBQThDO0FBQzVDLHNCQUFRLFFBQVEsZUFBUixDQUF3QixlQUF4QixDQUF3Qyw4QkFBa0IsUUFBUSxFQUExQixDQUF4QyxDQUFSO0FBQ0Esa0JBQUksVUFBVSxTQUFkLEVBQXlCO0FBQ3ZCLHdCQUFRLGdDQUFvQixLQUFwQixDQUFSO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsY0FBSSxVQUFVLEtBQUssTUFBbkIsRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxpQkFBTyxnQkFBUDtBQXZFSjtBQXlFQSxVQUFJLEtBQUssU0FBTCxDQUFlLFlBQWYsQ0FBNEIsT0FBNUIsRUFBcUMsT0FBckMsRUFBOEMsS0FBSyxLQUFuRCxFQUEwRCxLQUFLLE1BQS9ELENBQUosRUFBNEU7QUFDMUUsZUFBTyxLQUFLLFNBQVo7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLGdCQUFQO0FBQ0Q7QUFDRjs7Ozs7a0JBR1ksSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdmOzs7Ozs7SUFFTSxhOzs7Ozs7Ozs7OzZCQUVLLGlCLEVBQW1CO0FBQzFCLFVBQUksa0JBQWtCLE9BQWxCLENBQTBCLEtBQTFCLE1BQXFDLENBQUMsQ0FBMUMsRUFBNkM7QUFDM0MsZUFBTyxLQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSSxrQkFBa0IsT0FBbEIsQ0FBMEIsSUFBMUIsTUFBb0MsQ0FBQyxDQUF6QyxFQUE0QztBQUMxQyxpQkFBTyxJQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sZ0JBQVA7QUFDRDtBQUNGO0FBQ0Y7Ozs7O2tCQUlZLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZjs7Ozs7O0lBRU0sZTs7Ozs7Ozs7Ozs2QkFFSyxpQixFQUFtQjtBQUMxQixXQUFLLElBQUksQ0FBVCxJQUFjLGlCQUFkLEVBQWlDO0FBQy9CLFlBQUksa0JBQWtCLENBQWxCLE1BQXlCLGdCQUE3QixFQUErQztBQUM3QyxpQkFBTyxrQkFBa0IsQ0FBbEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxnQkFBUDtBQUNEOzs7OztrQkFHWSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNLGlCO0FBRUosNkJBQVksU0FBWixFQUF1QjtBQUFBOztBQUNyQixTQUFLLFNBQUwsR0FBaUIseUJBQWpCO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0Q7Ozs7aUNBRVksTyxFQUFTLE8sRUFBUyxLLEVBQU8sTSxFQUFRLFEsRUFBVSxJLEVBQU0sSyxFQUFPO0FBQ25FLFVBQUksQ0FBQyxRQUFMLEVBQWU7QUFDYixtQkFBVyxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQVg7QUFDQSxlQUFPLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBUDtBQUNBLGdCQUFRLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBUjtBQUNEOztBQUVELGFBQU8sRUFBRSxtQ0FBRixJQUErQixFQUFFLCtDQUFGLENBQS9CLEdBQTJFLE9BQU8sSUFBUCxLQUFnQixTQUFsRyxFQUE4RztBQUM1RyxlQUFPLEtBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixPQUEzQixFQUFvQyxLQUFwQyxFQUEyQyxNQUEzQyxFQUFtRCxLQUFLLENBQUwsQ0FBbkQsRUFBNEQsS0FBSyxDQUFMLENBQTVELEVBQXFFLEtBQUssQ0FBTCxDQUFyRSxDQUFQO0FBQ0Q7QUFDRCxVQUFJLFVBQVUsU0FBZCxFQUF5QjtBQUN2QixlQUFPLEVBQUUsb0NBQUYsSUFBZ0MsRUFBRSxnREFBRixDQUFoQyxHQUE2RSxPQUFPLEtBQVAsS0FBaUIsU0FBckcsRUFBaUg7QUFDL0csa0JBQVEsS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE9BQTNCLEVBQW9DLEtBQXBDLEVBQTJDLE1BQTNDLEVBQW1ELE1BQU0sQ0FBTixDQUFuRCxFQUE2RCxNQUFNLENBQU4sQ0FBN0QsRUFBdUUsTUFBTSxDQUFOLENBQXZFLENBQVI7QUFDRDtBQUNGOztBQUVELFVBQUksYUFBYyxPQUFPLElBQVAsS0FBZ0IsU0FBakIsR0FBOEIsSUFBOUIsR0FBcUMsS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE9BQTNCLEVBQW9DLEtBQXBDLEVBQTJDLE1BQTNDLENBQXREO0FBQ0EsVUFBSSxvQkFBSjtBQUNBLFVBQUksVUFBVSxTQUFkLEVBQXlCO0FBQ3ZCLHNCQUFlLE9BQU8sS0FBUCxLQUFpQixTQUFsQixHQUErQixLQUEvQixHQUF1QyxNQUFNLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBckMsRUFBNEMsTUFBNUMsQ0FBckQ7QUFDRDtBQUNELGFBQU8sS0FBSyxTQUFMLENBQWUsUUFBZixFQUF5QixDQUFDLFVBQUQsRUFBYSxXQUFiLENBQXpCLENBQVA7QUFDRDs7Ozs7a0JBSVksaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZjs7Ozs7O0lBRU0sUztBQUVKLHFCQUFZLFNBQVosRUFBdUIsUUFBdkIsRUFBaUMsTUFBakMsRUFBeUM7QUFBQTs7QUFDdkMsU0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFNBQUssU0FBTCxHQUFpQix5QkFBakI7QUFDRDs7OztpQ0FFWSxPLEVBQVMsTyxFQUFTO0FBQzdCLGNBQVEsS0FBSyxTQUFiLElBQTBCLEVBQUUsU0FBUyxPQUFYLEVBQTFCO0FBQ0EsVUFBSSxRQUFRLFFBQVEsS0FBSyxTQUFiLENBQVo7QUFDQSxVQUFJLGtCQUFKO0FBQ0EsVUFBSSxLQUFLLFFBQUwsS0FBa0IsSUFBdEIsRUFBNEI7QUFDMUIsWUFBSSxLQUFLLE1BQUwsS0FBZ0IsZUFBcEIsRUFBcUM7QUFDbkMsY0FBSSxnQkFBZ0IsUUFBUSxFQUFSLENBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFwQjtBQUNBLHdCQUFjLEdBQWQ7QUFDQSwwQkFBZ0IsY0FBYyxDQUFkLElBQW1CLElBQW5CLEdBQTBCLGNBQWMsQ0FBZCxDQUExQztBQUNBLHNCQUFZLFFBQVEsZUFBUixDQUF3QixxQkFBeEIsQ0FBOEMsYUFBOUMsQ0FBWjtBQUNELFNBTEQsTUFLTztBQUNMLHNCQUFZLFFBQVEsWUFBUixDQUFxQixRQUFyQixDQUE4QixLQUFLLE1BQW5DLENBQVo7QUFDRDtBQUNGO0FBQ0QsVUFBSSxDQUFDLFNBQUwsRUFBZ0I7QUFDZCxlQUFPLEtBQUssU0FBTCxDQUFlLEtBQUssUUFBcEIsRUFBOEIsQ0FBQyxLQUFLLE1BQU4sRUFBYyxLQUFkLENBQTlCLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLEtBQUssU0FBTCxDQUFlLEtBQUssUUFBcEIsRUFBOEIsQ0FBQyxTQUFELEVBQVksS0FBWixDQUE5QixDQUFQO0FBQ0Q7QUFDRjs7Ozs7a0JBSVksUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZjs7Ozs7O0lBRU0scUI7OztBQUVKLGlDQUFZLFNBQVosRUFBdUIsUUFBdkIsRUFBaUMsTUFBakMsRUFBeUM7QUFBQTtBQUFBLDBIQUNqQyxTQURpQyxFQUN0QixRQURzQixFQUNaLE1BRFk7QUFFeEM7Ozs7aUNBRVksTyxFQUFTLE8sRUFBUyxLLEVBQU8sTSxFQUFRO0FBQzVDLFVBQUksaUJBQWlCLFFBQVEsSUFBUixLQUFpQixXQUF0QztBQUNBLFVBQUksaUJBQWlCLFFBQVEsY0FBUixDQUF1QixRQUFRLElBQS9CLENBQXJCO0FBQ0EsVUFBSSxpQkFBaUIsY0FBckIsRUFBcUM7QUFDbkMsbUlBQTBCLE9BQTFCLEVBQW1DLE9BQW5DO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFQO0FBQ0Q7QUFDRjs7Ozs7a0JBR1kscUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CZjs7OztJQUVNLFM7QUFFSix1QkFBYztBQUFBOztBQUNaLFNBQUssZUFBTCxHQUF1QixJQUF2QjtBQUNBLFNBQUssTUFBTCxHQUFjLEVBQWQ7QUFDRDs7Ozt3QkFFcUI7QUFDcEIsYUFBTyxLQUFLLGdCQUFaO0FBQ0QsSztzQkFFbUIsUSxFQUFVO0FBQzVCLFdBQUssZ0JBQUwsR0FBd0IsUUFBeEI7QUFDRDs7O3NCQUVRLEcsRUFBSztBQUNaLFVBQUksT0FBTyxJQUFJLElBQUosRUFBWDtBQUNBLFVBQUksTUFBTSxPQUFPLEtBQUssT0FBTCxFQUFQLENBQVY7QUFDQSxVQUFJLElBQUksTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLGNBQU0sTUFBTSxHQUFaO0FBQ0Q7QUFDRCxVQUFJLFFBQVEsT0FBTyxLQUFLLFFBQUwsS0FBa0IsQ0FBekIsQ0FBWjtBQUNBLFVBQUksTUFBTSxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGdCQUFRLE1BQU0sS0FBZDtBQUNEOztBQUVELFdBQUssS0FBTCxHQUFhLE1BQU0sR0FBTixHQUFZLEtBQVosR0FBb0IsR0FBcEIsR0FBMEIsS0FBSyxXQUFMLEVBQXZDO0FBQ0QsSzt3QkEyQlU7QUFDVCxhQUFPLEtBQUssS0FBWjtBQUNEOzs7c0JBM0JVLE0sRUFBUTtBQUNqQixVQUFJLE9BQU8sT0FBUCxDQUFlLElBQWYsQ0FBb0IsUUFBcEIsS0FBaUMsU0FBckMsRUFBZ0Q7QUFDOUMsYUFBSyxPQUFMLEdBQWUsd0JBQVksT0FBTyxPQUFQLENBQWUsSUFBZixDQUFvQixRQUFwQixDQUE2QixXQUE3QixDQUF5QyxRQUFyRCxFQUErRCxNQUE5RTtBQUNEO0FBQ0YsSzt3QkF5Qlk7QUFDWCxhQUFPLEtBQUssT0FBWjtBQUNEOzs7c0JBekJVLE0sRUFBUTtBQUNqQixVQUFJLE9BQU8sT0FBUCxDQUFlLElBQWYsQ0FBb0IsUUFBcEIsS0FBaUMsU0FBckMsRUFBZ0Q7QUFDOUMsYUFBSyxPQUFMLEdBQWUsT0FBTyxPQUFQLENBQWUsSUFBZixDQUFvQixRQUFwQixDQUE2QixXQUE3QixDQUF5QyxRQUF4RDtBQUNEO0FBQ0YsSzt3QkF1Qlk7QUFDWCxVQUFJLFFBQVEsSUFBWjtBQUNBLGFBQU8sTUFBTSxPQUFiO0FBQ0Q7OztzQkF4QlEsRyxFQUFLO0FBQ1osWUFBTSxJQUFJLElBQUosRUFBTjtBQUNBLFVBQUksVUFBVSxPQUFPLElBQUksVUFBSixFQUFQLENBQWQ7QUFDQSxVQUFJLFFBQVEsTUFBUixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixrQkFBVSxNQUFNLE9BQWhCO0FBQ0Q7QUFDRCxXQUFLLEtBQUwsR0FBYSxTQUFTLE9BQU8sSUFBSSxRQUFKLEVBQVAsSUFBeUIsT0FBbEMsQ0FBYjtBQUNELEs7d0JBbUJVO0FBQ1QsVUFBSSxRQUFRLElBQVo7QUFDQSxhQUFPLE1BQU0sS0FBYjtBQUNEOzs7c0JBcEJXLEcsRUFBSztBQUNmLFdBQUssUUFBTCxHQUFnQixPQUFPLElBQUksSUFBSixHQUFXLE1BQVgsRUFBUCxDQUFoQjtBQUNELEs7d0JBb0JhO0FBQ1osYUFBTyxLQUFLLFFBQVo7QUFDRDs7Ozs7a0JBSVksUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGZjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNLGM7OztBQUVKLDBCQUFZLFFBQVosRUFBc0IsZUFBdEIsRUFBdUM7QUFBQTs7QUFBQTs7QUFFckMsV0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsV0FBSyxlQUFMLEdBQXVCLGVBQXZCO0FBQ0EsV0FBSyxnQkFBTCxHQUF3QixTQUF4QjtBQUNBLFdBQUssdUJBQUwsR0FBK0IsRUFBL0I7QUFDQSxXQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFOcUM7QUFPdEM7Ozs7OEJBdUJTLE8sRUFBUztBQUNqQixVQUFJLFFBQVEsSUFBWjs7QUFFQSxhQUFPLHNCQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsZ0JBQVEsR0FBUixDQUFZLHVCQUFaO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxnQkFBUSxJQUFSLEdBQWUsUUFBUSxJQUFSLElBQWdCLEVBQS9CO0FBQ0EsWUFBSSxlQUFKO0FBQ0EsWUFBSSxhQUFhLE1BQU0sV0FBTixDQUFrQixPQUFsQixDQUFqQjtBQUNBLFlBQUksb0JBQW9CLE1BQU0sa0JBQU4sQ0FBeUIsT0FBekIsQ0FBeEI7QUFDQSxZQUFJLGFBQWEsTUFBTSxpQkFBTixDQUF3QixPQUF4QixDQUFqQjtBQUNBLFlBQUksVUFBSixFQUFnQjtBQUNkLGNBQUksaUJBQUosRUFBdUI7QUFDckIsZ0JBQUksVUFBSixFQUFnQjtBQUNkLG9CQUFNLE9BQU4sQ0FBYyxPQUFkLEVBQXVCLElBQXZCLENBQTRCLG1CQUFXO0FBQ3JDLG9CQUFJLFdBQVc7QUFDYix5Q0FBdUIsTUFBTSx3QkFBTixDQUErQixPQUEvQixFQUF3QyxpQkFBeEMsQ0FEVjtBQUViLDhCQUFZLE1BQU07QUFGTCxpQkFBZjtBQUlBLHlCQUFTLE1BQU0sWUFBTixDQUFtQixHQUFuQixDQUF1QixhQUF2QixDQUFxQyxPQUFyQyxFQUE4QyxRQUE5QyxDQUFUO0FBQ0Esc0JBQU0sWUFBTixDQUFtQixHQUFuQixDQUF1QixlQUF2QixDQUF1QyxPQUF2QyxFQUFnRCxRQUFoRCxFQUEwRCxNQUExRDtBQUNBLG9CQUFJLFdBQVcsZ0JBQWYsRUFBaUM7QUFDL0IsMkJBQVMsTUFBTSxlQUFmO0FBQ0EsMEJBQVEsSUFBUixDQUFhLElBQWIsR0FBb0IsS0FBcEI7QUFDRDtBQUNELG9CQUFJLE1BQUosRUFBWTtBQUNWLHNCQUFJLGlCQUFpQixRQUFRLElBQVIsS0FBaUIsV0FBdEM7QUFDQSxzQkFBSSxpQkFBaUIsTUFBTSxjQUFOLENBQXFCLFFBQVEsSUFBN0IsQ0FBckI7QUFDQSxzQkFBSSxpQkFBaUIsY0FBckIsRUFBcUM7QUFDbkMsMEJBQU0sa0JBQU4sQ0FBeUIsT0FBekI7QUFDQSwwQkFBTSxzQkFBTixDQUE2QixPQUE3QjtBQUNEO0FBQ0QsMEJBQVEsSUFBUixDQUFhLElBQWIsR0FBcUIsUUFBUSxJQUFSLENBQWEsSUFBYixLQUFzQixTQUF2QixHQUFvQyxJQUFwQyxHQUEyQyxRQUFRLElBQVIsQ0FBYSxJQUE1RTtBQUNBLDBCQUFRLE9BQVI7QUFDRCxpQkFURCxNQVNPO0FBQ0wseUJBQU8saUJBQVA7QUFDRDtBQUNGLGVBdkJELEVBdUJHLFVBQUMsS0FBRCxFQUFXO0FBQUUsdUJBQU8sS0FBUDtBQUFnQixlQXZCaEM7QUF5QkQsYUExQkQsTUEwQk87QUFDTCxrQkFBSSxXQUFXO0FBQ2IsdUNBQXVCLE1BQU0sd0JBQU4sQ0FBK0IsT0FBL0IsRUFBd0MsaUJBQXhDLENBRFY7QUFFYiw0QkFBWSxNQUFNO0FBRkwsZUFBZjtBQUlBLHVCQUFTLE1BQU0sWUFBTixDQUFtQixHQUFuQixDQUF1QixhQUF2QixDQUFxQyxPQUFyQyxFQUE4QyxRQUE5QyxDQUFUO0FBQ0Esb0JBQU0sWUFBTixDQUFtQixHQUFuQixDQUF1QixlQUF2QixDQUF1QyxPQUF2QyxFQUFnRCxRQUFoRCxFQUEwRCxNQUExRDtBQUNBLGtCQUFJLFdBQVcsZ0JBQWYsRUFBaUM7QUFDL0IseUJBQVMsTUFBTSxlQUFmO0FBQ0Esd0JBQVEsSUFBUixDQUFhLElBQWIsR0FBb0IsS0FBcEI7QUFDRDtBQUNELGtCQUFJLE1BQUosRUFBWTtBQUNWLG9CQUFJLGlCQUFpQixRQUFRLElBQVIsS0FBaUIsV0FBdEM7QUFDQSxvQkFBSSxpQkFBaUIsTUFBTSxjQUFOLENBQXFCLFFBQVEsSUFBN0IsQ0FBckI7QUFDQSxvQkFBSSxpQkFBaUIsY0FBckIsRUFBcUM7QUFDbkMsd0JBQU0sa0JBQU4sQ0FBeUIsT0FBekI7QUFDQSx3QkFBTSxzQkFBTixDQUE2QixPQUE3QjtBQUNEO0FBQ0Qsd0JBQVEsSUFBUixDQUFhLElBQWIsR0FBcUIsUUFBUSxJQUFSLENBQWEsSUFBYixLQUFzQixTQUF2QixHQUFvQyxJQUFwQyxHQUEyQyxRQUFRLElBQVIsQ0FBYSxJQUE1RTtBQUNBLHdCQUFRLE9BQVI7QUFDRCxlQVRELE1BU087QUFDTCx1QkFBTyxpQkFBUDtBQUNEO0FBQ0Y7QUFDRixXQW5ERCxNQW1ETztBQUNMLGdCQUFJLFlBQVksTUFBTSxVQUFOLENBQWlCLE9BQWpCLENBQWhCO0FBQ0EsZ0JBQUksU0FBSixFQUFlO0FBQ2Isb0JBQU0sWUFBTixDQUFtQixPQUFuQixFQUE0QixJQUE1QixDQUFpQyxvQkFBWTtBQUMzQyx3QkFBUSxJQUFSLENBQWEsUUFBYixHQUF3QixRQUF4QjtBQUNBLG9CQUFJLFdBQVc7QUFDYix5Q0FBdUIsTUFBTSx3QkFBTixDQUErQixPQUEvQixFQUF3QyxpQkFBeEMsQ0FEVjtBQUViLDhCQUFZLE1BQU07QUFGTCxpQkFBZjtBQUlBLHlCQUFTLE1BQU0sWUFBTixDQUFtQixHQUFuQixDQUF1QixhQUF2QixDQUFxQyxPQUFyQyxFQUE4QyxRQUE5QyxDQUFUO0FBQ0Esc0JBQU0sWUFBTixDQUFtQixHQUFuQixDQUF1QixlQUF2QixDQUF1QyxPQUF2QyxFQUFnRCxRQUFoRCxFQUEwRCxNQUExRDtBQUNBLG9CQUFJLFdBQVcsZ0JBQWYsRUFBaUM7QUFDL0IsMkJBQVMsTUFBTSxlQUFmO0FBQ0EsMEJBQVEsSUFBUixDQUFhLElBQWIsR0FBb0IsS0FBcEI7QUFDRDtBQUNELG9CQUFJLE1BQUosRUFBWTtBQUNWLDBCQUFRLElBQVIsQ0FBYSxJQUFiLEdBQXFCLFFBQVEsSUFBUixDQUFhLElBQWIsS0FBc0IsU0FBdkIsR0FBb0MsSUFBcEMsR0FBMkMsUUFBUSxJQUFSLENBQWEsSUFBNUU7QUFDQSxzQkFBSSxVQUFKLEVBQWdCO0FBQ2QsMEJBQU0sT0FBTixDQUFjLE9BQWQsRUFBdUIsSUFBdkIsQ0FBNEIsbUJBQVc7QUFDckMsOEJBQVEsT0FBUjtBQUNELHFCQUZELEVBRUcsVUFBQyxLQUFELEVBQVc7QUFBRSw2QkFBTyxLQUFQO0FBQWdCLHFCQUZoQztBQUdELG1CQUpELE1BSU87QUFDTCw0QkFBUSxPQUFSO0FBQ0Q7QUFDRixpQkFURCxNQVNPO0FBQ0wseUJBQU8saUJBQVA7QUFDRDtBQUNGLGVBeEJELEVBd0JHLFVBQUMsS0FBRCxFQUFXO0FBQUUsdUJBQU8sS0FBUDtBQUFnQixlQXhCaEM7QUF5QkQsYUExQkQsTUEwQk87QUFDTCxrQkFBSSxZQUFXO0FBQ2IsdUNBQXVCLE1BQU0sd0JBQU4sQ0FBK0IsT0FBL0IsRUFBd0MsaUJBQXhDLENBRFY7QUFFYiw0QkFBWSxNQUFNO0FBRkwsZUFBZjtBQUlBLHVCQUFTLE1BQU0sWUFBTixDQUFtQixHQUFuQixDQUF1QixhQUF2QixDQUFxQyxPQUFyQyxFQUE4QyxTQUE5QyxDQUFUO0FBQ0Esb0JBQU0sWUFBTixDQUFtQixHQUFuQixDQUF1QixlQUF2QixDQUF1QyxPQUF2QyxFQUFnRCxTQUFoRCxFQUEwRCxNQUExRDtBQUNBLGtCQUFJLFdBQVcsZ0JBQWYsRUFBaUM7QUFDL0IseUJBQVMsTUFBTSxlQUFmO0FBQ0Esd0JBQVEsSUFBUixDQUFhLElBQWIsR0FBb0IsS0FBcEI7QUFDRDtBQUNELGtCQUFJLE1BQUosRUFBWTtBQUNWLHdCQUFRLElBQVIsQ0FBYSxJQUFiLEdBQXFCLFFBQVEsSUFBUixDQUFhLElBQWIsS0FBc0IsU0FBdkIsR0FBb0MsSUFBcEMsR0FBMkMsUUFBUSxJQUFSLENBQWEsSUFBNUU7QUFDQSx3QkFBUSxPQUFSO0FBQ0QsZUFIRCxNQUdPO0FBQ0wsdUJBQU8saUJBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRixTQW5HRCxNQW1HTztBQUNMLG1CQUFTLE1BQU0sZUFBZjtBQUNBLGtCQUFRLElBQVIsQ0FBYSxJQUFiLEdBQW9CLEtBQXBCO0FBQ0EsY0FBSSxNQUFKLEVBQVk7QUFDVixvQkFBUSxPQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU8saUJBQVA7QUFDRDtBQUNGO0FBQ0YsT0FwSE0sQ0FBUDtBQXFIRDs7OzRCQUVPLE8sRUFBUztBQUNmLFVBQUksUUFBUSxJQUFaOztBQUVBLGFBQU8sc0JBQVksVUFBUyxPQUFULEVBQWlCLE1BQWpCLEVBQXlCO0FBQzFDLGNBQU0sUUFBTixDQUFlLGNBQWYsQ0FBOEIsT0FBOUIsRUFBdUMsSUFBdkMsQ0FBNEMsVUFBUyxHQUFULEVBQWM7QUFDeEQsa0JBQVEsR0FBUjtBQUNELFNBRkQsRUFFRyxVQUFDLEtBQUQsRUFBVztBQUNaLGlCQUFPLEtBQVA7QUFDRCxTQUpEO0FBS0QsT0FOTSxDQUFQO0FBT0Q7OzsyQ0FFc0IsTyxFQUFTO0FBQzlCLFVBQUksS0FBSyxRQUFRLEVBQVIsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQVQ7QUFDQSxVQUFJLFlBQVksR0FBRyxPQUFILENBQVcsY0FBWCxDQUFoQjtBQUNBLFVBQUksMkJBQTJCLGNBQWMsQ0FBQyxDQUE5QztBQUNBLFVBQUksaUJBQWlCLEtBQUssY0FBTCxDQUFvQixRQUFRLElBQTVCLENBQXJCO0FBQ0EsVUFBSSwyQkFBMkIsY0FBL0IsRUFBK0M7QUFDN0MsV0FBRyxHQUFIO0FBQ0EsWUFBSSxnQkFBZ0IsR0FBRyxDQUFILElBQVEsSUFBUixHQUFlLEdBQUcsQ0FBSCxDQUFmLEdBQXVCLEdBQXZCLEdBQTZCLEdBQUcsQ0FBSCxDQUFqRDtBQUNBLFlBQUksR0FBRyxNQUFILEdBQVksQ0FBaEIsRUFBbUI7QUFDakIsMEJBQWdCLEdBQUcsQ0FBSCxJQUFRLElBQVIsR0FBZSxHQUFHLENBQUgsQ0FBZixHQUF1QixHQUF2QixHQUE2QixHQUFHLENBQUgsQ0FBN0IsR0FBcUMsR0FBckMsR0FBMkMsR0FBRyxDQUFILENBQTNEO0FBQ0Q7QUFDRCxhQUFLLFFBQUwsQ0FBYyxzQkFBZCxDQUFxQyxhQUFyQyxFQUFvRCxRQUFRLElBQVIsQ0FBYSxVQUFqRTtBQUNEO0FBQ0Y7Ozs0QkFFTyxPLEVBQVM7QUFDZixVQUFJLFFBQVEsSUFBWjs7QUFFQSxhQUFPLHNCQUFZLFVBQVMsT0FBVCxFQUFpQixNQUFqQixFQUF5QjtBQUMxQyxjQUFNLFFBQU4sQ0FBZSxjQUFmLENBQThCLE9BQTlCLEVBQXVDLElBQXZDLENBQTRDLFVBQUMsR0FBRCxFQUFTO0FBQ25ELGtCQUFRLEdBQVI7QUFDRCxTQUZELEVBRUcsVUFBQyxLQUFELEVBQVc7QUFDWixpQkFBTyxLQUFQO0FBQ0QsU0FKRDtBQUtELE9BTk0sQ0FBUDtBQU9EOzs7a0NBRWE7QUFDWixVQUFJLGFBQWEsS0FBSyxRQUFMLENBQWMsYUFBZCxFQUFqQjtBQUNBLFVBQUksU0FBUyxFQUFiOztBQUVBLFdBQUssSUFBSSxDQUFULElBQWMsVUFBZCxFQUEwQjtBQUN4QixlQUFPLElBQVAsQ0FBWSxnQ0FBb0IsV0FBVyxDQUFYLEVBQWMsUUFBbEMsQ0FBWjtBQUNEOztBQUVELGFBQU8sTUFBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBSSxZQUFZLEtBQUssZUFBTCxDQUFxQixhQUFyQztBQUNBLFVBQUksaUJBQWlCLEVBQXJCOztBQUVBLFdBQUssSUFBSSxDQUFULElBQWMsU0FBZCxFQUF5QjtBQUN2QixZQUFJLGNBQWMsVUFBVSxDQUFWLEVBQWEsVUFBL0I7QUFDQSxZQUFJLGVBQWUsT0FBZixDQUF1QixXQUF2QixNQUF3QyxDQUFDLENBQTdDLEVBQWdEO0FBQzlDLHlCQUFlLElBQWYsQ0FBb0IsV0FBcEI7QUFDRDtBQUNGOztBQUVELGFBQU8sY0FBUDtBQUNEOzs7NkNBRXdCLE8sRUFBUyxVLEVBQVk7QUFDNUMsVUFBSSxlQUFKOztBQUVBLFVBQUksVUFBSixFQUFnQjtBQUNkLFlBQUksWUFBWSxLQUFLLGVBQUwsQ0FBcUIsY0FBckIsQ0FBb0MsUUFBUSxFQUE1QyxDQUFoQjtBQUNBLGlCQUFTLEtBQUssdUJBQUwsQ0FBNkIsU0FBN0IsQ0FBVDtBQUNELE9BSEQsTUFHTztBQUNMLFlBQUksY0FBYyxLQUFLLGVBQUwsQ0FBcUIsY0FBckIsQ0FBb0MsUUFBUSxJQUE1QyxDQUFsQjtBQUNBLGlCQUFTLEtBQUssdUJBQUwsQ0FBNkIsV0FBN0IsQ0FBVDtBQUNEO0FBQ0QsYUFBTyxNQUFQO0FBQ0Q7OzttQ0FFYyxJLEVBQU07QUFDbkIsVUFBSSxZQUFZLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaEI7QUFDQSxhQUFPLFVBQVUsQ0FBVixNQUFpQixTQUFqQixJQUE4QixTQUFTLEtBQUssZUFBTCxDQUFxQixVQUFyQixHQUFrQyxLQUFoRjtBQUNEOzs7K0JBRVUsTyxFQUFTO0FBQ2xCLFVBQUksa0JBQWtCLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEIsUUFBMUIsQ0FBdEI7QUFDQSxVQUFJLFlBQWEsUUFBUSxJQUFULENBQWUsS0FBZixDQUFxQixLQUFyQixDQUFoQjtBQUNBLFVBQUksYUFBYSxVQUFVLENBQVYsQ0FBakI7O0FBRUEsYUFBTyxnQkFBZ0IsT0FBaEIsQ0FBd0IsVUFBeEIsTUFBd0MsQ0FBQyxDQUFoRDtBQUNEOzs7dUNBRWtCLE8sRUFBUztBQUMxQixhQUFRLFFBQVEsSUFBUixDQUFhLFFBQWQsR0FBMEIsSUFBMUIsR0FBaUMsS0FBeEM7QUFDRDs7OzJCQUVNLEcsRUFBSztBQUNWLFVBQUksV0FBVyxJQUFJLEtBQUosQ0FBVSxHQUFWLENBQWY7QUFDQSxhQUFPLFNBQVMsQ0FBVCxJQUFjLElBQWQsR0FBcUIsU0FBUyxDQUFULENBQXJCLEdBQW1DLEdBQW5DLEdBQXlDLFNBQVMsQ0FBVCxDQUFoRDtBQUNEOzs7aUNBRVksTyxFQUFTO0FBQ3BCLFVBQUksUUFBUSxJQUFSLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLGVBQU8sS0FBSyxRQUFMLENBQWMsb0JBQWQsQ0FBbUMsUUFBUSxJQUFSLENBQWEsTUFBaEQsQ0FBUDtBQUNEOztBQUVELFVBQUksUUFBUSxJQUFSLEtBQWlCLFVBQWpCLElBQStCLFFBQVEsSUFBUixDQUFhLE1BQWIsS0FBd0IsU0FBM0QsRUFBc0U7QUFDcEUsZUFBTyxLQUFLLFFBQUwsQ0FBYyxvQkFBZCxDQUFtQyxRQUFRLElBQVIsQ0FBYSxNQUFoRCxDQUFQO0FBQ0Q7O0FBRUQsVUFBSSxzQkFBVSxRQUFRLElBQWxCLEVBQXdCLElBQXhCLEtBQWlDLFNBQXJDLEVBQWdEO0FBQzlDLGVBQU8sS0FBSyxRQUFMLENBQWMsb0JBQWQsQ0FBbUMsUUFBUSxJQUEzQyxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFLLFFBQUwsQ0FBYyxvQkFBZCxDQUFtQyxLQUFLLE1BQUwsQ0FBWSxRQUFRLElBQXBCLENBQW5DLENBQVA7QUFDRDtBQUNGOzs7Z0NBRVcsTyxFQUFTO0FBQ25CLFVBQUksa0JBQWtCLENBQUMsWUFBRCxFQUFlLGlCQUFmLEVBQWtDLFNBQWxDLEVBQTZDLFFBQTdDLENBQXRCO0FBQ0EsVUFBSSxZQUFhLFFBQVEsSUFBVCxDQUFlLEtBQWYsQ0FBcUIsS0FBckIsQ0FBaEI7QUFDQSxVQUFJLGFBQWEsVUFBVSxDQUFWLENBQWpCO0FBQ0EsVUFBSSxVQUFXLFFBQVEsRUFBVCxDQUFhLEtBQWIsQ0FBbUIsS0FBbkIsQ0FBZDtBQUNBLFVBQUksV0FBWSxRQUFRLENBQVIsQ0FBaEI7QUFDQSxVQUFJLGVBQWUsUUFBUSxJQUF2QixJQUErQixhQUFhLFFBQVEsRUFBeEQsRUFBNEQ7QUFDMUQsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPLGdCQUFnQixPQUFoQixDQUF3QixVQUF4QixNQUF3QyxDQUFDLENBQXpDLElBQThDLGdCQUFnQixPQUFoQixDQUF3QixRQUF4QixNQUFzQyxDQUFDLENBQTVGO0FBQ0Q7Ozs7OztzQ0FHaUIsTyxFQUFTO0FBQ3pCLFVBQUksV0FBVyxRQUFRLElBQVIsS0FBaUIsUUFBaEM7QUFDQSxVQUFJLGdCQUFnQixzQkFBVSxRQUFRLElBQWxCLEVBQXdCLElBQXhCLEtBQWlDLFNBQXJEO0FBQ0EsVUFBSSxjQUFjLHNCQUFVLFFBQVEsRUFBbEIsRUFBc0IsSUFBdEIsS0FBK0IsU0FBakQ7QUFDQSxVQUFJLGlCQUFpQiw0QkFBZ0IsUUFBUSxFQUF4QixDQUFyQjtBQUNBLFVBQUksY0FBYyxRQUFRLElBQVIsS0FBaUIsV0FBbkM7O0FBRUEsYUFBUSxZQUFZLGFBQVosSUFBNkIsV0FBOUIsSUFBK0MsWUFBWSxhQUFaLElBQTZCLGNBQTVFLElBQStGLFdBQXRHO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBSyxnQkFBTCxHQUF3Qiw2QkFBbUIsR0FBbkIsQ0FBdUIsc0JBQXZCLENBQXhCO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUksU0FBUyw2QkFBbUIsR0FBbkIsQ0FBdUIsZ0JBQXZCLENBQWI7QUFDQSxVQUFJLFVBQVUsU0FBZCxFQUF5QjtBQUN2QixhQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0Q7QUFDRjs7O3FDQUVnQjtBQUNmLFVBQUksV0FBVyw2QkFBbUIsR0FBbkIsQ0FBdUIsb0JBQXZCLENBQWY7QUFDQSxVQUFJLGFBQWEsU0FBakIsRUFBNEI7QUFDMUIsYUFBSyx1QkFBTCxHQUErQixRQUEvQjtBQUNEO0FBQ0Y7Ozt1Q0FFa0I7QUFDakIsVUFBSSxXQUFXLDZCQUFtQixHQUFuQixDQUF1QixzQkFBdkIsQ0FBZjs7QUFFQSxVQUFJLGFBQWEsU0FBakIsRUFBNEI7QUFDMUIsYUFBSyxJQUFJLENBQVQsSUFBYyxRQUFkLEVBQXdCO0FBQ3RCLGNBQUksVUFBVSxFQUFkO0FBQ0EsY0FBSSxRQUFRLFNBQVMsQ0FBVCxFQUFZLEtBQXhCO0FBQ0EsZUFBSyxJQUFJLENBQVQsSUFBYyxLQUFkLEVBQXFCO0FBQ25CLGdCQUFJLGtCQUFKO0FBQ0EsZ0JBQUksTUFBTSxDQUFOLEVBQVMsU0FBVCxDQUFtQixTQUFuQixLQUFpQyxjQUFyQyxFQUFxRDtBQUNuRCwwQkFBWSxvQ0FBMEIsTUFBTSxDQUFOLEVBQVMsU0FBVCxDQUFtQixTQUE3QyxFQUF3RCxNQUFNLENBQU4sRUFBUyxTQUFULENBQW1CLFFBQTNFLEVBQXFGLE1BQU0sQ0FBTixFQUFTLFNBQVQsQ0FBbUIsTUFBeEcsQ0FBWjtBQUNELGFBRkQsTUFFTztBQUNMLDBCQUFZLHdCQUFjLE1BQU0sQ0FBTixFQUFTLFNBQVQsQ0FBbUIsU0FBakMsRUFBNEMsTUFBTSxDQUFOLEVBQVMsU0FBVCxDQUFtQixRQUEvRCxFQUF5RSxNQUFNLENBQU4sRUFBUyxTQUFULENBQW1CLE1BQTVGLENBQVo7QUFDRDtBQUNELG9CQUFRLElBQVIsQ0FBYSxtQkFBUyxNQUFNLENBQU4sRUFBUyxTQUFsQixFQUE2QixTQUE3QixFQUF3QyxNQUFNLENBQU4sRUFBUyxRQUFqRCxFQUEyRCxNQUFNLENBQU4sRUFBUyxLQUFwRSxFQUEyRSxNQUFNLENBQU4sRUFBUyxNQUFwRixDQUFiO0FBQ0Q7QUFDRCxlQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsSUFBdUIseUJBQWUsU0FBUyxDQUFULEVBQVksR0FBM0IsRUFBZ0MsT0FBaEMsRUFBeUMsU0FBUyxDQUFULEVBQVksT0FBckQsRUFBOEQsU0FBUyxDQUFULEVBQVksa0JBQTFFLENBQXZCO0FBQ0Q7QUFDRjtBQUNGOzs7dUNBRWtCLE8sRUFBUztBQUMxQixVQUFJLEtBQUssUUFBUSxFQUFSLENBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFUO0FBQ0EsVUFBSSxZQUFZLEdBQUcsT0FBSCxDQUFXLGNBQVgsQ0FBaEI7QUFDQSxVQUFJLDJCQUEyQixjQUFjLENBQUMsQ0FBOUM7QUFDQSxVQUFJLGlCQUFpQixLQUFLLGNBQUwsQ0FBb0IsUUFBUSxJQUE1QixDQUFyQjs7QUFFQSxVQUFJLDJCQUEyQixjQUEvQixFQUErQztBQUM3QyxXQUFHLEdBQUg7QUFDQSxZQUFJLGdCQUFnQixHQUFHLENBQUgsSUFBUSxJQUFSLEdBQWUsR0FBRyxDQUFILENBQWYsR0FBdUIsR0FBdkIsR0FBNkIsR0FBRyxDQUFILENBQWpEO0FBQ0EsWUFBSSxHQUFHLE1BQUgsR0FBWSxDQUFoQixFQUFtQjtBQUNqQiwwQkFBZ0IsR0FBRyxDQUFILElBQVEsSUFBUixHQUFlLEdBQUcsQ0FBSCxDQUFmLEdBQXVCLEdBQXZCLEdBQTZCLEdBQUcsQ0FBSCxDQUE3QixHQUFxQyxHQUFyQyxHQUEyQyxHQUFHLENBQUgsQ0FBM0Q7QUFDRDtBQUNELGFBQUssZUFBTCxDQUFxQixrQkFBckIsQ0FBd0MsYUFBeEMsRUFBdUQsUUFBUSxJQUFSLENBQWEsVUFBcEU7QUFDRDtBQUNGOzs7MkNBRXNCLEcsRUFBSztBQUMxQixVQUFJLFFBQVEsSUFBSSxLQUFKLENBQVUsR0FBVixDQUFaO0FBQ0EsYUFBTyxNQUFNLE1BQU0sTUFBTixHQUFlLENBQXJCLENBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixtQ0FBbUIsR0FBbkIsQ0FBdUIsc0JBQXZCLEVBQStDLENBQS9DLEVBQWtELEtBQUssZ0JBQXZEO0FBQ0Q7OztpQ0FFWTtBQUNYLG1DQUFtQixHQUFuQixDQUF1QixnQkFBdkIsRUFBeUMsQ0FBekMsRUFBNEMsS0FBSyxNQUFqRDtBQUNEOzs7aUNBRVksTSxFQUFRO0FBQ25CLGNBQU8sTUFBUDtBQUNFLGFBQUssTUFBTDtBQUNFLHVDQUFtQixHQUFuQixDQUF1QixzQkFBdkIsRUFBK0MsQ0FBL0MsRUFBa0QsS0FBSyxZQUF2RDtBQUNBO0FBQ0YsYUFBSyxrQkFBTDtBQUNFLHVDQUFtQixHQUFuQixDQUF1QixvQkFBdkIsRUFBNkMsQ0FBN0MsRUFBZ0QsS0FBSyx1QkFBckQ7QUFDQTtBQU5KO0FBUUQ7Ozt3QkF0V3NCO0FBQ3JCLGFBQU8sS0FBSyxpQkFBWjtBQUNELEs7c0JBTW9CLE0sRUFBUTtBQUMzQixVQUFJLE9BQU8sT0FBTyxPQUFQLENBQWUsSUFBMUI7QUFDQSxVQUFJLDRCQUFnQixJQUFoQixDQUFKLEVBQTJCO0FBQ3pCLGFBQUssaUJBQUwsR0FBeUIsc0JBQVUsSUFBVixFQUFnQixJQUF6QztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUssaUJBQUwsR0FBeUIsU0FBekI7QUFDRDtBQUNGOzs7d0JBWGtCO0FBQ2pCLGFBQU8sS0FBSyxhQUFaO0FBQ0QsSztzQkFXZ0IsTSxFQUFRO0FBQ3ZCLFdBQUssYUFBTCxHQUFxQixPQUFPLE9BQVAsQ0FBZSxJQUFmLENBQW9CLFVBQXpDO0FBQ0Q7Ozs7O2tCQXVWWSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3WGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU0sVTs7O0FBQ0osc0JBQVksR0FBWixFQUFpQixLQUFqQixFQUF3QixPQUF4QixFQUFpQyxrQkFBakMsRUFBcUQ7QUFBQTs7QUFDbkQsUUFBSSxDQUFDLGtCQUFMLEVBQXlCO0FBQ3ZCLDJCQUFxQixlQUFyQjtBQUNEO0FBSGtELCtHQUk3QyxHQUo2QyxFQUl4QyxLQUp3QyxFQUlqQyxPQUppQyxFQUl4QixrQkFKd0I7QUFLcEQ7Ozs7K0JBRVUsSSxFQUFNLFMsRUFBVyxTLEVBQVcsSyxFQUFPLE0sRUFBUSxRLEVBQVU7QUFDOUQsVUFBSSxFQUFFLHdDQUFGLENBQUosRUFBdUM7QUFDckMsZ0JBQVEsSUFBUjtBQUNFLGVBQUssVUFBTDtBQUNFLHdCQUFZLGdDQUFzQixTQUF0QixDQUFaO0FBQ0YsZUFBSyxRQUFMO0FBQ0Usd0JBQVksd0JBQWMsVUFBVSxDQUFWLENBQWQsRUFBNEIsVUFBVSxDQUFWLENBQTVCLEVBQTBDLFVBQVUsQ0FBVixDQUExQyxDQUFaO0FBQ0E7QUFDRixlQUFLLGNBQUw7QUFDRSx3QkFBWSxvQ0FBMEIsVUFBVSxDQUFWLENBQTFCLEVBQXdDLFVBQVUsQ0FBVixDQUF4QyxFQUFzRCxVQUFVLENBQVYsQ0FBdEQsQ0FBWjtBQUNBO0FBUko7QUFVRDtBQUNELFVBQUksYUFBYSxTQUFqQixFQUE0QjtBQUMxQixtQkFBVyxLQUFLLGVBQUwsS0FBeUIsQ0FBcEM7QUFDRDtBQUNELFVBQUksT0FBTyxtQkFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLEVBQXlDLEtBQXpDLEVBQWdELE1BQWhELENBQVg7QUFDQSxXQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCO0FBQ0Q7OzsrQkFFVSxJLEVBQU07QUFDZixVQUFJLGdCQUFnQixLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLElBQW5CLENBQXBCO0FBQ0EsV0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixhQUFsQixFQUFpQyxDQUFqQztBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQUksYUFBYSxFQUFqQjs7QUFFQSxVQUFJLEtBQUssS0FBTCxDQUFXLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsYUFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLEtBQW5CLEVBQTBCO0FBQ3hCLHFCQUFXLElBQVgsQ0FBZ0IsS0FBSyxLQUFMLENBQVcsQ0FBWCxFQUFjLFFBQTlCO0FBQ0Q7QUFDRCxlQUFPLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLFVBQXJCLENBQVA7QUFDRCxPQUxELE1BS087QUFDTCxlQUFPLENBQUMsQ0FBUjtBQUNEO0FBQ0Y7OztzQ0FFaUIsUSxFQUFVO0FBQzFCLFdBQUssSUFBSSxDQUFULElBQWMsS0FBSyxLQUFuQixFQUEwQjtBQUN4QixZQUFJLEtBQUssS0FBTCxDQUFXLENBQVgsRUFBYyxRQUFkLElBQTBCLFFBQTlCLEVBQXdDO0FBQ3RDLGlCQUFPLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBUDtBQUNEO0FBQ0Y7QUFDRCxZQUFNLE1BQU0sd0JBQXdCLFFBQXhCLEdBQW1DLGtCQUF6QyxDQUFOO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsV0FBSyxJQUFJLENBQVQsSUFBYyxLQUFLLEtBQW5CLEVBQTBCO0FBQ3hCLFlBQUksS0FBSyxLQUFMLENBQVcsQ0FBWCxFQUFjLEtBQWQsS0FBd0IsUUFBNUIsRUFBc0M7QUFDcEM7QUFDRDtBQUNELFlBQUksS0FBSyxLQUFMLENBQVcsQ0FBWCxFQUFjLFNBQWQsMkNBQUosRUFBOEQ7QUFDNUQsaUJBQU8sSUFBUDtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUksS0FBSyxLQUFMLENBQVcsQ0FBWCxFQUFjLFNBQWQsdUNBQUosRUFBMEQ7QUFDeEQsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxLQUFMLENBQVcsQ0FBWCxFQUFjLFNBQWQsQ0FBd0IsU0FBdEMsRUFBaUQ7QUFDL0Msa0JBQUksS0FBSyxLQUFMLENBQVcsQ0FBWCxFQUFjLFNBQWQsQ0FBd0IsU0FBeEIsQ0FBa0MsQ0FBbEMsNENBQUosRUFBMkU7QUFDekUsdUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFDRCxhQUFPLEtBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZTtBQUNsQyxZQUFJLElBQUksRUFBRSxVQUFGLENBQVIsQ0FBdUIsSUFBSSxJQUFJLEVBQUUsVUFBRixDQUFSO0FBQ3ZCLGVBQVMsSUFBSSxDQUFMLEdBQVUsQ0FBQyxDQUFYLEdBQWlCLElBQUksQ0FBTCxHQUFVLENBQVYsR0FBYyxDQUF0QztBQUNILE9BSE0sQ0FBUDtBQUlEOzs7OztrQkFHWSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNqREMsUyxHQUFBLFM7UUF3QkEsVyxHQUFBLFc7UUFnQkEsVyxHQUFBLFc7UUFTQSxTLEdBQUEsUztRQUtBLGlCLEdBQUEsaUI7UUFVQSxtQixHQUFBLG1CO1FBVUEsbUIsR0FBQSxtQjtRQVdBLGdCLEdBQUEsZ0I7UUFtQkEsZSxHQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeEdULFNBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF3Qjs7QUFFN0IsTUFBSSxDQUFDLEdBQUwsRUFBVSxNQUFNLE1BQU0sd0JBQU4sQ0FBTjs7O0FBR1YsTUFBSSxLQUFLLHNGQUFUO0FBQ0EsTUFBSSxRQUFRLFVBQVo7QUFDQSxNQUFJLFFBQVEsSUFBSSxPQUFKLENBQVksRUFBWixFQUFnQixLQUFoQixFQUF1QixLQUF2QixDQUE2QixHQUE3QixDQUFaOzs7QUFHQSxNQUFJLE1BQU0sQ0FBTixNQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLFVBQU0sQ0FBTixJQUFXLE9BQVg7QUFDQSxVQUFNLENBQU4sSUFBVyxHQUFYO0FBQ0Q7O0FBRUQsTUFBSSxTQUFTO0FBQ1gsVUFBTSxNQUFNLENBQU4sQ0FESztBQUVYLFlBQVEsTUFBTSxDQUFOLENBRkc7QUFHWCxjQUFVLE1BQU0sQ0FBTjtBQUhDLEdBQWI7O0FBTUEsU0FBTyxNQUFQO0FBQ0Q7O0FBRU0sU0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQ2pDLE1BQUksWUFBWSxNQUFNLE9BQU4sQ0FBYyxHQUFkLENBQWhCOztBQUVBLE1BQUksU0FBUztBQUNYLGNBQVUsTUFBTSxTQUFOLENBQWdCLENBQWhCLEVBQW1CLFNBQW5CLENBREM7QUFFWCxZQUFRLE1BQU0sU0FBTixDQUFnQixZQUFZLENBQTVCLEVBQStCLE1BQU0sTUFBckM7QUFGRyxHQUFiOztBQUtBLFNBQU8sTUFBUDtBQUNEOzs7Ozs7O0FBT00sU0FBUyxXQUFULENBQXFCLE1BQXJCLEVBQTZCO0FBQ2xDLFNBQU8sb0JBQVksTUFBWixFQUFvQixNQUFwQixHQUE2QixDQUE3QixHQUFpQyxLQUFqQyxHQUF5QyxJQUFoRDtBQUNEOzs7Ozs7O0FBT00sU0FBUyxTQUFULENBQW1CLEdBQW5CLEVBQXdCOztBQUU3QixNQUFJLEdBQUosRUFBUyxPQUFPLEtBQUssS0FBTCxDQUFXLHlCQUFlLEdBQWYsQ0FBWCxDQUFQO0FBQ1Y7O0FBRU0sU0FBUyxpQkFBVCxDQUEyQixHQUEzQixFQUFnQztBQUNyQyxNQUFJLFdBQVcsSUFBSSxLQUFKLENBQVUsR0FBVixDQUFmO0FBQ0EsU0FBTyxTQUFTLENBQVQsSUFBYyxJQUFkLEdBQXFCLFNBQVMsQ0FBVCxDQUFyQixHQUFtQyxHQUFuQyxHQUF5QyxTQUFTLENBQVQsQ0FBaEQ7QUFDRDs7Ozs7OztBQU9NLFNBQVMsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0M7QUFDN0MsTUFBSSxZQUFZLFVBQVUsT0FBVixDQUFrQixHQUFsQixDQUFoQjtBQUNBLFNBQU8sWUFBWSxVQUFVLFNBQVYsQ0FBb0IsWUFBWSxDQUFoQyxFQUFtQyxVQUFVLE1BQTdDLENBQVosR0FBbUUsR0FBbkUsR0FBeUUsVUFBVSxTQUFWLENBQW9CLENBQXBCLEVBQXVCLFNBQXZCLENBQWhGO0FBQ0Q7Ozs7Ozs7QUFPTSxTQUFTLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDO0FBQzNDLE1BQUksTUFBTSxVQUFVLE9BQVYsQ0FBVjtBQUNBLFNBQU8sSUFBSSxRQUFKLENBQWEsT0FBYixDQUFxQixHQUFyQixFQUEwQixFQUExQixJQUFnQyxHQUFoQyxHQUFzQyxJQUFJLE1BQWpELEM7QUFDRDs7Ozs7OztBQVFNLFNBQVMsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0M7OztBQUczQyxNQUFJLFdBQVcsU0FBWCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixNQUErQixTQUFuQyxFQUE4QztBQUM1QyxRQUFJLGFBQWEsVUFBVSxVQUFWLENBQWpCOzs7QUFHQSxRQUFJLFdBQVcsTUFBWCxJQUFxQixXQUFXLFFBQXBDLEVBQThDO0FBQzVDLGFBQU8sVUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0sMkJBQU47QUFDRDs7O0FBR0YsR0FYRCxNQVdPO0FBQ0wsYUFBTyxvQkFBb0IsVUFBcEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRU0sU0FBUyxlQUFULENBQXlCLEdBQXpCLEVBQThCO0FBQ25DLE1BQUksa0JBQWtCLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEIsUUFBMUIsRUFBb0MsU0FBcEMsQ0FBdEI7QUFDQSxNQUFJLFdBQVksR0FBRCxDQUFNLEtBQU4sQ0FBWSxLQUFaLENBQWY7QUFDQSxNQUFJLFlBQVksU0FBUyxDQUFULENBQWhCOztBQUVBLFNBQU8sZ0JBQWdCLE9BQWhCLENBQXdCLFNBQXhCLE1BQXVDLENBQUMsQ0FBL0M7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xyXG5tb2R1bGUuZXhwb3J0cyA9IChcclxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xyXG4pLnNwbGl0KCcsJyk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcclxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XHJcbn0pOyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxyXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcclxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXHJcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxyXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XHJcbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xyXG5cclxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxyXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XHJcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcclxuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxyXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcclxuICAgICwgZ3QgICAgID0gJz4nXHJcbiAgICAsIGlmcmFtZURvY3VtZW50O1xyXG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcclxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xyXG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcclxuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcclxuICBpZnJhbWVEb2N1bWVudC53cml0ZSgnPHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDwvc2NyaXB0JyArIGd0KTtcclxuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xyXG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xyXG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcclxuICByZXR1cm4gY3JlYXRlRGljdCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcclxuICB2YXIgcmVzdWx0O1xyXG4gIGlmKE8gIT09IG51bGwpe1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xyXG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XHJcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXHJcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcclxuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xyXG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcclxufTsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXHJcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXHJcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XHJcbiAgYW5PYmplY3QoTyk7XHJcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaSA9IDBcclxuICAgICwgUDtcclxuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XHJcbiAgcmV0dXJuIE87XHJcbn07IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXHJcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxyXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcclxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcclxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxyXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xyXG5cclxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XHJcbiAgTyA9IHRvSU9iamVjdChPKTtcclxuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XHJcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcclxuICAgIHJldHVybiBnT1BEKE8sIFApO1xyXG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xyXG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXHJcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxyXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcclxuXHJcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XHJcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xyXG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcclxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcclxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXHJcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcclxuICBPID0gdG9PYmplY3QoTyk7XHJcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XHJcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XHJcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcclxufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcclxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XHJcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgcmVzdWx0ID0gW11cclxuICAgICwga2V5O1xyXG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcclxuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXHJcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xyXG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcclxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XHJcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcclxufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXHJcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xyXG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XHJcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxyXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcclxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXHJcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxyXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xyXG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XHJcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XHJcbn07IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXHJcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XHJcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXHJcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7IiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pOyIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc2V0UHJvdG8gICAgICAgICAgID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0XG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbiAgdHJ5IHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxufSAoKSlcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IGNhY2hlZFNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNhY2hlZENsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG4vLyBEaXN0cmlidXRpb24gZmlsZSBmb3IgUGVyc2lzdGVuY2VNYW5hZ2VyLmpzIFxyXG4vLyB2ZXJzaW9uOiAwLjMuMFxyXG4vLyBMYXN0IGJ1aWxkOiBXZWQgSnVuIDI5IDIwMTYgMTg6MTg6MzAgR01UKzAxMDAgKFdFU1QpXHJcblxyXG4hZnVuY3Rpb24odCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNle3ZhciBlO2U9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGUuUGVyc2lzdGVuY2VNYW5hZ2VyPXQoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIHQoZSxuLG8pe2Z1bmN0aW9uIHIocyxjKXtpZighbltzXSl7aWYoIWVbc10pe3ZhciBhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWMmJmEpcmV0dXJuIGEocywhMCk7aWYoaSlyZXR1cm4gaShzLCEwKTt2YXIgdT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK3MrXCInXCIpO3Rocm93IHUuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIix1fXZhciBmPW5bc109e2V4cG9ydHM6e319O2Vbc11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24odCl7dmFyIG49ZVtzXVsxXVt0XTtyZXR1cm4gcihuP246dCl9LGYsZi5leHBvcnRzLHQsZSxuLG8pfXJldHVybiBuW3NdLmV4cG9ydHN9Zm9yKHZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUscz0wO3M8by5sZW5ndGg7cysrKXIob1tzXSk7cmV0dXJuIHJ9KHsxOltmdW5jdGlvbih0LGUsbil7ZS5leHBvcnRzPXtcImRlZmF1bHRcIjp0KFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIjoyfV0sMjpbZnVuY3Rpb24odCxlLG4pe3ZhciBvPXQoXCIuLi8uLi9tb2R1bGVzL19jb3JlXCIpLHI9by5KU09OfHwoby5KU09OPXtzdHJpbmdpZnk6SlNPTi5zdHJpbmdpZnl9KTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIuc3RyaW5naWZ5LmFwcGx5KHIsYXJndW1lbnRzKX19LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjozfV0sMzpbZnVuY3Rpb24odCxlLG4pe3ZhciBvPWUuZXhwb3J0cz17dmVyc2lvbjpcIjIuNC4wXCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9byl9LHt9XSw0OltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyh0KXtpZihudWxsPT09dHx8XCJvYmplY3RcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7aWYodCBpbnN0YW5jZW9mIE9iamVjdCl2YXIgZT17X19wcm90b19fOnQuX19wcm90b19ffTtlbHNlIHZhciBlPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbikpfSksZX12YXIgcj10KFwiZnNcIik7ZS5leHBvcnRzPW8ocil9LHtmczp2b2lkIDB9XSw1OltmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gbygpe31mdW5jdGlvbiByKHQpe2Z1bmN0aW9uIGUodCxlLG4pe2Z1bmN0aW9uIG8odCxlLG4pe3JldHVybiB2KHQsZSxmdW5jdGlvbihyKXshcnx8XCJFTUZJTEVcIiE9PXIuY29kZSYmXCJFTkZJTEVcIiE9PXIuY29kZT8oXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbi5hcHBseSh0aGlzLGFyZ3VtZW50cykscygpKTppKFtvLFt0LGUsbl1dKX0pfXJldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJihuPWUsZT1udWxsKSxvKHQsZSxuKX1mdW5jdGlvbiBuKHQsZSxuLG8pe2Z1bmN0aW9uIHIodCxlLG4sbyl7cmV0dXJuIGcodCxlLG4sZnVuY3Rpb24oYyl7IWN8fFwiRU1GSUxFXCIhPT1jLmNvZGUmJlwiRU5GSUxFXCIhPT1jLmNvZGU/KFwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJm8uYXBwbHkodGhpcyxhcmd1bWVudHMpLHMoKSk6aShbcixbdCxlLG4sb11dKX0pfXJldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihvPW4sbj1udWxsKSxyKHQsZSxuLG8pfWZ1bmN0aW9uIG8odCxlLG4sbyl7ZnVuY3Rpb24gcih0LGUsbixvKXtyZXR1cm4gXyh0LGUsbixmdW5jdGlvbihjKXshY3x8XCJFTUZJTEVcIiE9PWMuY29kZSYmXCJFTkZJTEVcIiE9PWMuY29kZT8oXCJmdW5jdGlvblwiPT10eXBlb2YgbyYmby5hcHBseSh0aGlzLGFyZ3VtZW50cykscygpKTppKFtyLFt0LGUsbixvXV0pfSl9cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG89bixuPW51bGwpLHIodCxlLG4sbyl9ZnVuY3Rpb24gYyh0LGUpe2Z1bmN0aW9uIG4oKXtyZXR1cm4gdyh0LGZ1bmN0aW9uKG8scil7ciYmci5zb3J0JiZyLnNvcnQoKSwhb3x8XCJFTUZJTEVcIiE9PW8uY29kZSYmXCJFTkZJTEVcIiE9PW8uY29kZT8oXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5hcHBseSh0aGlzLGFyZ3VtZW50cykscygpKTppKFtuLFt0LGVdXSl9KX1yZXR1cm4gbih0LGUpfWZ1bmN0aW9uIGYodCxlKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGY/KEUuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMpOmYuYXBwbHkoT2JqZWN0LmNyZWF0ZShmLnByb3RvdHlwZSksYXJndW1lbnRzKX1mdW5jdGlvbiBsKCl7dmFyIHQ9dGhpczttKHQucGF0aCx0LmZsYWdzLHQubW9kZSxmdW5jdGlvbihlLG4pe2U/KHQuYXV0b0Nsb3NlJiZ0LmRlc3Ryb3koKSx0LmVtaXQoXCJlcnJvclwiLGUpKToodC5mZD1uLHQuZW1pdChcIm9wZW5cIixuKSx0LnJlYWQoKSl9KX1mdW5jdGlvbiBoKHQsZSl7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBoPyhiLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzKTpoLmFwcGx5KE9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpLGFyZ3VtZW50cyl9ZnVuY3Rpb24gcCgpe3ZhciB0PXRoaXM7bSh0LnBhdGgsdC5mbGFncyx0Lm1vZGUsZnVuY3Rpb24oZSxuKXtlPyh0LmRlc3Ryb3koKSx0LmVtaXQoXCJlcnJvclwiLGUpKToodC5mZD1uLHQuZW1pdChcIm9wZW5cIixuKSl9KX1mdW5jdGlvbiBkKHQsZSl7cmV0dXJuIG5ldyBmKHQsZSl9ZnVuY3Rpb24geSh0LGUpe3JldHVybiBuZXcgaCh0LGUpfWZ1bmN0aW9uIG0odCxlLG4sbyl7ZnVuY3Rpb24gcih0LGUsbixvKXtyZXR1cm4gSSh0LGUsbixmdW5jdGlvbihjLGEpeyFjfHxcIkVNRklMRVwiIT09Yy5jb2RlJiZcIkVORklMRVwiIT09Yy5jb2RlPyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBvJiZvLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxzKCkpOmkoW3IsW3QsZSxuLG9dXSl9KX1yZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobz1uLG49bnVsbCkscih0LGUsbixvKX1hKHQpLHQuZ3JhY2VmdWxpZnk9cix0LkZpbGVSZWFkU3RyZWFtPWYsdC5GaWxlV3JpdGVTdHJlYW09aCx0LmNyZWF0ZVJlYWRTdHJlYW09ZCx0LmNyZWF0ZVdyaXRlU3RyZWFtPXk7dmFyIHY9dC5yZWFkRmlsZTt0LnJlYWRGaWxlPWU7dmFyIGc9dC53cml0ZUZpbGU7dC53cml0ZUZpbGU9bjt2YXIgXz10LmFwcGVuZEZpbGU7XyYmKHQuYXBwZW5kRmlsZT1vKTt2YXIgdz10LnJlYWRkaXI7aWYodC5yZWFkZGlyPWMsXCJ2MC44XCI9PT1wcm9jZXNzLnZlcnNpb24uc3Vic3RyKDAsNCkpe3ZhciBTPXUodCk7Zj1TLlJlYWRTdHJlYW0saD1TLldyaXRlU3RyZWFtfXZhciBFPXQuUmVhZFN0cmVhbTtmLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEUucHJvdG90eXBlKSxmLnByb3RvdHlwZS5vcGVuPWw7dmFyIGI9dC5Xcml0ZVN0cmVhbTtoLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGIucHJvdG90eXBlKSxoLnByb3RvdHlwZS5vcGVuPXAsdC5SZWFkU3RyZWFtPWYsdC5Xcml0ZVN0cmVhbT1oO3ZhciBJPXQub3BlbjtyZXR1cm4gdC5vcGVuPW0sdH1mdW5jdGlvbiBpKHQpe2goXCJFTlFVRVVFXCIsdFswXS5uYW1lLHRbMV0pLGYucHVzaCh0KX1mdW5jdGlvbiBzKCl7dmFyIHQ9Zi5zaGlmdCgpO3QmJihoKFwiUkVUUllcIix0WzBdLm5hbWUsdFsxXSksdFswXS5hcHBseShudWxsLHRbMV0pKX12YXIgYz10KFwiZnNcIiksYT10KFwiLi9wb2x5ZmlsbHMuanNcIiksdT10KFwiLi9sZWdhY3ktc3RyZWFtcy5qc1wiKSxmPVtdLGw9dChcInV0aWxcIiksaD1vO2wuZGVidWdsb2c/aD1sLmRlYnVnbG9nKFwiZ2ZzNFwiKTovXFxiZ2ZzNFxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVR3x8XCJcIikmJihoPWZ1bmN0aW9uKCl7dmFyIHQ9bC5mb3JtYXQuYXBwbHkobCxhcmd1bWVudHMpO3Q9XCJHRlM0OiBcIit0LnNwbGl0KC9cXG4vKS5qb2luKFwiXFxuR0ZTNDogXCIpLGNvbnNvbGUuZXJyb3IodCl9KSwvXFxiZ2ZzNFxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVR3x8XCJcIikmJnByb2Nlc3Mub24oXCJleGl0XCIsZnVuY3Rpb24oKXtoKGYpLHQoXCJhc3NlcnRcIikuZXF1YWwoZi5sZW5ndGgsMCl9KSxlLmV4cG9ydHM9cih0KFwiLi9mcy5qc1wiKSkscHJvY2Vzcy5lbnYuVEVTVF9HUkFDRUZVTF9GU19HTE9CQUxfUEFUQ0gmJihlLmV4cG9ydHM9cihjKSksZS5leHBvcnRzLmNsb3NlPWMuY2xvc2U9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsbil7cmV0dXJuIHQuY2FsbChjLGUsZnVuY3Rpb24odCl7dHx8cygpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpfSl9fShjLmNsb3NlKSxlLmV4cG9ydHMuY2xvc2VTeW5jPWMuY2xvc2VTeW5jPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj10LmFwcGx5KGMsYXJndW1lbnRzKTtyZXR1cm4gcygpLG59fShjLmNsb3NlU3luYyl9LHtcIi4vZnMuanNcIjo0LFwiLi9sZWdhY3ktc3RyZWFtcy5qc1wiOjYsXCIuL3BvbHlmaWxscy5qc1wiOjcsYXNzZXJ0OnZvaWQgMCxmczp2b2lkIDAsdXRpbDp2b2lkIDB9XSw2OltmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gbyh0KXtmdW5jdGlvbiBlKG4sbyl7aWYoISh0aGlzIGluc3RhbmNlb2YgZSkpcmV0dXJuIG5ldyBlKG4sbyk7ci5jYWxsKHRoaXMpO3ZhciBpPXRoaXM7dGhpcy5wYXRoPW4sdGhpcy5mZD1udWxsLHRoaXMucmVhZGFibGU9ITAsdGhpcy5wYXVzZWQ9ITEsdGhpcy5mbGFncz1cInJcIix0aGlzLm1vZGU9NDM4LHRoaXMuYnVmZmVyU2l6ZT02NTUzNixvPW98fHt9O2Zvcih2YXIgcz1PYmplY3Qua2V5cyhvKSxjPTAsYT1zLmxlbmd0aDtjPGE7YysrKXt2YXIgdT1zW2NdO3RoaXNbdV09b1t1XX1pZih0aGlzLmVuY29kaW5nJiZ0aGlzLnNldEVuY29kaW5nKHRoaXMuZW5jb2RpbmcpLHZvaWQgMCE9PXRoaXMuc3RhcnQpe2lmKFwibnVtYmVyXCIhPXR5cGVvZiB0aGlzLnN0YXJ0KXRocm93IFR5cGVFcnJvcihcInN0YXJ0IG11c3QgYmUgYSBOdW1iZXJcIik7aWYodm9pZCAwPT09dGhpcy5lbmQpdGhpcy5lbmQ9MS8wO2Vsc2UgaWYoXCJudW1iZXJcIiE9dHlwZW9mIHRoaXMuZW5kKXRocm93IFR5cGVFcnJvcihcImVuZCBtdXN0IGJlIGEgTnVtYmVyXCIpO2lmKHRoaXMuc3RhcnQ+dGhpcy5lbmQpdGhyb3cgbmV3IEVycm9yKFwic3RhcnQgbXVzdCBiZSA8PSBlbmRcIik7dGhpcy5wb3M9dGhpcy5zdGFydH1yZXR1cm4gbnVsbCE9PXRoaXMuZmQ/dm9pZCBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCl7aS5fcmVhZCgpfSk6dm9pZCB0Lm9wZW4odGhpcy5wYXRoLHRoaXMuZmxhZ3MsdGhpcy5tb2RlLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ/KGkuZW1pdChcImVycm9yXCIsdCksdm9pZChpLnJlYWRhYmxlPSExKSk6KGkuZmQ9ZSxpLmVtaXQoXCJvcGVuXCIsZSksdm9pZCBpLl9yZWFkKCkpfSl9ZnVuY3Rpb24gbihlLG8pe2lmKCEodGhpcyBpbnN0YW5jZW9mIG4pKXJldHVybiBuZXcgbihlLG8pO3IuY2FsbCh0aGlzKSx0aGlzLnBhdGg9ZSx0aGlzLmZkPW51bGwsdGhpcy53cml0YWJsZT0hMCx0aGlzLmZsYWdzPVwid1wiLHRoaXMuZW5jb2Rpbmc9XCJiaW5hcnlcIix0aGlzLm1vZGU9NDM4LHRoaXMuYnl0ZXNXcml0dGVuPTAsbz1vfHx7fTtmb3IodmFyIGk9T2JqZWN0LmtleXMobykscz0wLGM9aS5sZW5ndGg7czxjO3MrKyl7dmFyIGE9aVtzXTt0aGlzW2FdPW9bYV19aWYodm9pZCAwIT09dGhpcy5zdGFydCl7aWYoXCJudW1iZXJcIiE9dHlwZW9mIHRoaXMuc3RhcnQpdGhyb3cgVHlwZUVycm9yKFwic3RhcnQgbXVzdCBiZSBhIE51bWJlclwiKTtpZih0aGlzLnN0YXJ0PDApdGhyb3cgbmV3IEVycm9yKFwic3RhcnQgbXVzdCBiZSA+PSB6ZXJvXCIpO3RoaXMucG9zPXRoaXMuc3RhcnR9dGhpcy5idXN5PSExLHRoaXMuX3F1ZXVlPVtdLG51bGw9PT10aGlzLmZkJiYodGhpcy5fb3Blbj10Lm9wZW4sdGhpcy5fcXVldWUucHVzaChbdGhpcy5fb3Blbix0aGlzLnBhdGgsdGhpcy5mbGFncyx0aGlzLm1vZGUsdm9pZCAwXSksdGhpcy5mbHVzaCgpKX1yZXR1cm57UmVhZFN0cmVhbTplLFdyaXRlU3RyZWFtOm59fXZhciByPXQoXCJzdHJlYW1cIikuU3RyZWFtO2UuZXhwb3J0cz1vfSx7c3RyZWFtOnZvaWQgMH1dLDc6W2Z1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKHQpe2YuaGFzT3duUHJvcGVydHkoXCJPX1NZTUxJTktcIikmJnByb2Nlc3MudmVyc2lvbi5tYXRjaCgvXnYwXFwuNlxcLlswLTJdfF52MFxcLjVcXC4vKSYmcih0KSx0Lmx1dGltZXN8fGkodCksdC5jaG93bj1zKHQuY2hvd24pLHQuZmNob3duPXModC5mY2hvd24pLHQubGNob3duPXModC5sY2hvd24pLHQuY2htb2Q9cyh0LmNobW9kKSx0LmZjaG1vZD1zKHQuZmNobW9kKSx0LmxjaG1vZD1zKHQubGNobW9kKSx0LmNob3duU3luYz1jKHQuY2hvd25TeW5jKSx0LmZjaG93blN5bmM9Yyh0LmZjaG93blN5bmMpLHQubGNob3duU3luYz1jKHQubGNob3duU3luYyksdC5jaG1vZFN5bmM9cyh0LmNobW9kU3luYyksdC5mY2htb2RTeW5jPXModC5mY2htb2RTeW5jKSx0LmxjaG1vZFN5bmM9cyh0LmxjaG1vZFN5bmMpLHQubGNobW9kfHwodC5sY2htb2Q9ZnVuY3Rpb24odCxlLG4pe3Byb2Nlc3MubmV4dFRpY2sobil9LHQubGNobW9kU3luYz1mdW5jdGlvbigpe30pLHQubGNob3dufHwodC5sY2hvd249ZnVuY3Rpb24odCxlLG4sbyl7cHJvY2Vzcy5uZXh0VGljayhvKX0sdC5sY2hvd25TeW5jPWZ1bmN0aW9uKCl7fSksXCJ3aW4zMlwiPT09cHJvY2Vzcy5wbGF0Zm9ybSYmKHQucmVuYW1lPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4sbyl7dmFyIHI9RGF0ZS5ub3coKTt0KGUsbixmdW5jdGlvbiBpKHMpe3JldHVybiBzJiYoXCJFQUNDRVNcIj09PXMuY29kZXx8XCJFUEVSTVwiPT09cy5jb2RlKSYmRGF0ZS5ub3coKS1yPDFlMz90KGUsbixpKTp2b2lkKG8mJm8ocykpfSl9fSh0LnJlbmFtZSkpLHQucmVhZD1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24obixvLHIsaSxzLGMpe3ZhciBhO2lmKGMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGMpe3ZhciB1PTA7YT1mdW5jdGlvbihmLGwsaCl7cmV0dXJuIGYmJlwiRUFHQUlOXCI9PT1mLmNvZGUmJnU8MTA/KHUrKyxlLmNhbGwodCxuLG8scixpLHMsYSkpOnZvaWQgYy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fXJldHVybiBlLmNhbGwodCxuLG8scixpLHMsYSl9fSh0LnJlYWQpLHQucmVhZFN5bmM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKG4sbyxyLGkscyl7Zm9yKHZhciBjPTA7Oyl0cnl7cmV0dXJuIGUuY2FsbCh0LG4sbyxyLGkscyl9Y2F0Y2goYSl7aWYoXCJFQUdBSU5cIj09PWEuY29kZSYmYzwxMCl7YysrO2NvbnRpbnVlfXRocm93IGF9fX0odC5yZWFkU3luYyl9ZnVuY3Rpb24gcih0KXt0LmxjaG1vZD1mdW5jdGlvbihlLG4sbyl7bz1vfHxub29wLHQub3BlbihlLGYuT19XUk9OTFl8Zi5PX1NZTUxJTkssbixmdW5jdGlvbihlLHIpe3JldHVybiBlP3ZvaWQgbyhlKTp2b2lkIHQuZmNobW9kKHIsbixmdW5jdGlvbihlKXt0LmNsb3NlKHIsZnVuY3Rpb24odCl7byhlfHx0KX0pfSl9KX0sdC5sY2htb2RTeW5jPWZ1bmN0aW9uKGUsbil7dmFyIG8scj10Lm9wZW5TeW5jKGUsZi5PX1dST05MWXxmLk9fU1lNTElOSyxuKSxpPSEwO3RyeXtvPXQuZmNobW9kU3luYyhyLG4pLGk9ITF9ZmluYWxseXtpZihpKXRyeXt0LmNsb3NlU3luYyhyKX1jYXRjaChzKXt9ZWxzZSB0LmNsb3NlU3luYyhyKX1yZXR1cm4gb319ZnVuY3Rpb24gaSh0KXtmLmhhc093blByb3BlcnR5KFwiT19TWU1MSU5LXCIpPyh0Lmx1dGltZXM9ZnVuY3Rpb24oZSxuLG8scil7dC5vcGVuKGUsZi5PX1NZTUxJTkssZnVuY3Rpb24oZSxpKXtyZXR1cm4gcj1yfHxub29wLGU/cihlKTp2b2lkIHQuZnV0aW1lcyhpLG4sbyxmdW5jdGlvbihlKXt0LmNsb3NlKGksZnVuY3Rpb24odCl7cmV0dXJuIHIoZXx8dCl9KX0pfSl9LHQubHV0aW1lc1N5bmM9ZnVuY3Rpb24oZSxuLG8pe3ZhciByLGk9dC5vcGVuU3luYyhlLGYuT19TWU1MSU5LKSxzPSEwO3RyeXtyPXQuZnV0aW1lc1N5bmMoaSxuLG8pLHM9ITF9ZmluYWxseXtpZihzKXRyeXt0LmNsb3NlU3luYyhpKX1jYXRjaChjKXt9ZWxzZSB0LmNsb3NlU3luYyhpKX1yZXR1cm4gcn0pOih0Lmx1dGltZXM9ZnVuY3Rpb24odCxlLG4sbyl7cHJvY2Vzcy5uZXh0VGljayhvKX0sdC5sdXRpbWVzU3luYz1mdW5jdGlvbigpe30pfWZ1bmN0aW9uIHModCl7cmV0dXJuIHQ/ZnVuY3Rpb24oZSxuLG8scil7cmV0dXJuIHQuY2FsbCh1LGUsbixvLGZ1bmN0aW9uKHQsZSl7YSh0KSYmKHQ9bnVsbCkscih0LGUpfSl9OnR9ZnVuY3Rpb24gYyh0KXtyZXR1cm4gdD9mdW5jdGlvbihlLG4sbyl7dHJ5e3JldHVybiB0LmNhbGwodSxlLG4sbyl9Y2F0Y2gocil7aWYoIWEocikpdGhyb3cgcn19OnR9ZnVuY3Rpb24gYSh0KXtpZighdClyZXR1cm4hMDtpZihcIkVOT1NZU1wiPT09dC5jb2RlKXJldHVybiEwO3ZhciBlPSFwcm9jZXNzLmdldHVpZHx8MCE9PXByb2Nlc3MuZ2V0dWlkKCk7cmV0dXJuISghZXx8XCJFSU5WQUxcIiE9PXQuY29kZSYmXCJFUEVSTVwiIT09dC5jb2RlKX12YXIgdT10KFwiLi9mcy5qc1wiKSxmPXQoXCJjb25zdGFudHNcIiksbD1wcm9jZXNzLmN3ZCxoPW51bGw7cHJvY2Vzcy5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm4gaHx8KGg9bC5jYWxsKHByb2Nlc3MpKSxofTt0cnl7cHJvY2Vzcy5jd2QoKX1jYXRjaChwKXt9dmFyIGQ9cHJvY2Vzcy5jaGRpcjtwcm9jZXNzLmNoZGlyPWZ1bmN0aW9uKHQpe2g9bnVsbCxkLmNhbGwocHJvY2Vzcyx0KX0sZS5leHBvcnRzPW99LHtcIi4vZnMuanNcIjo0LGNvbnN0YW50czp2b2lkIDB9XSw4OltmdW5jdGlvbih0LGUsbil7IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLG8pe3ZhciByPXRoaXMgaW5zdGFuY2VvZiB0P3RoaXM6bjtpZihyLnJlc2V0KG8pLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLmxlbmd0aD4wJiZyLmhhc2goZSksciE9PXRoaXMpcmV0dXJuIHJ9dmFyIG47dC5wcm90b3R5cGUuaGFzaD1mdW5jdGlvbih0KXt2YXIgZSxuLG8scixpO3N3aXRjaChpPXQubGVuZ3RoLHRoaXMubGVuKz1pLG49dGhpcy5rMSxvPTAsdGhpcy5yZW0pe2Nhc2UgMDpuXj1pPm8/NjU1MzUmdC5jaGFyQ29kZUF0KG8rKyk6MDtjYXNlIDE6bl49aT5vPyg2NTUzNSZ0LmNoYXJDb2RlQXQobysrKSk8PDg6MDtjYXNlIDI6bl49aT5vPyg2NTUzNSZ0LmNoYXJDb2RlQXQobysrKSk8PDE2OjA7Y2FzZSAzOm5ePWk+bz8oMjU1JnQuY2hhckNvZGVBdChvKSk8PDI0OjAsbl49aT5vPyg2NTI4MCZ0LmNoYXJDb2RlQXQobysrKSk+Pjg6MH1pZih0aGlzLnJlbT1pK3RoaXMucmVtJjMsaS09dGhpcy5yZW0saT4wKXtmb3IoZT10aGlzLmgxOzspe2lmKG49MTE2MDEqbiszNDMyOTA2NzUyKig2NTUzNSZuKSY0Mjk0OTY3Mjk1LG49bjw8MTV8bj4+PjE3LG49MTM3MTUqbis0NjE4MzIxOTIqKDY1NTM1Jm4pJjQyOTQ5NjcyOTUsZV49bixlPWU8PDEzfGU+Pj4xOSxlPTUqZSszODY0MjkyMTk2JjQyOTQ5NjcyOTUsbz49aSlicmVhaztuPTY1NTM1JnQuY2hhckNvZGVBdChvKyspXig2NTUzNSZ0LmNoYXJDb2RlQXQobysrKSk8PDheKDY1NTM1JnQuY2hhckNvZGVBdChvKyspKTw8MTYscj10LmNoYXJDb2RlQXQobysrKSxuXj0oMjU1JnIpPDwyNF4oNjUyODAmcik+Pjh9c3dpdGNoKG49MCx0aGlzLnJlbSl7Y2FzZSAzOm5ePSg2NTUzNSZ0LmNoYXJDb2RlQXQobysyKSk8PDE2O2Nhc2UgMjpuXj0oNjU1MzUmdC5jaGFyQ29kZUF0KG8rMSkpPDw4O2Nhc2UgMTpuXj02NTUzNSZ0LmNoYXJDb2RlQXQobyl9dGhpcy5oMT1lfXJldHVybiB0aGlzLmsxPW4sdGhpc30sdC5wcm90b3R5cGUucmVzdWx0PWZ1bmN0aW9uKCl7dmFyIHQsZTtyZXR1cm4gdD10aGlzLmsxLGU9dGhpcy5oMSx0PjAmJih0PTExNjAxKnQrMzQzMjkwNjc1MiooNjU1MzUmdCkmNDI5NDk2NzI5NSx0PXQ8PDE1fHQ+Pj4xNyx0PTEzNzE1KnQrNDYxODMyMTkyKig2NTUzNSZ0KSY0Mjk0OTY3Mjk1LGVePXQpLGVePXRoaXMubGVuLGVePWU+Pj4xNixlPTUxODE5KmUrMjI0Njc3MDY4OCooNjU1MzUmZSkmNDI5NDk2NzI5NSxlXj1lPj4+MTMsZT00NDU5NyplKzMyNjY0NDUzMTIqKDY1NTM1JmUpJjQyOTQ5NjcyOTUsZV49ZT4+PjE2LGU+Pj4wfSx0LnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5oMT1cIm51bWJlclwiPT10eXBlb2YgdD90OjAsdGhpcy5yZW09dGhpcy5rMT10aGlzLmxlbj0wLHRoaXN9LG49bmV3IHQsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGU/ZS5leHBvcnRzPXQ6dGhpcy5NdXJtdXJIYXNoMz10fSgpfSx7fV0sOTpbZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbigpe3ZhciBlLG8scixpLHMsYyxhLHUsZixsLGgscCxkLHksbT1mdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPXR9Zm9yKHZhciBvIGluIGUpdi5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiBuLnByb3RvdHlwZT1lLnByb3RvdHlwZSx0LnByb3RvdHlwZT1uZXcgbix0Ll9fc3VwZXJfXz1lLnByb3RvdHlwZSx0fSx2PXt9Lmhhc093blByb3BlcnR5O2Q9dChcInBhdGhcIikscD10KFwiZnNcIiksaD10KFwiZXZlbnRzXCIpLHk9dChcIndyaXRlLWZpbGUtYXRvbWljXCIpLnN5bmMsbz1cIi0tLS5FTVBUWV9TVFJJTkcuLS0tXCIsYT1mdW5jdGlvbih0KXt2YXIgZSxuLG8scixpO2ZvcihyPXAucmVhZGRpclN5bmModCksaT1bXSxlPTAsbj1yLmxlbmd0aDtlPG47ZSsrKW89cltlXSxpLnB1c2goZihkLmpvaW4odCxvKSkpO3JldHVybiBpfSxmPWZ1bmN0aW9uKHQpe3JldHVybiBwLnN0YXRTeW5jKHQpLmlzRGlyZWN0b3J5KCk/KGEodCkscC5ybWRpclN5bmModCkpOnAudW5saW5rU3luYyh0KX0sdT1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4gZT1cIlwiPT09dD9vOnQudG9TdHJpbmcoKX0scz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQpe3RoaXMubWVzc2FnZT1udWxsIT10P3Q6XCJVbmtub3duIGVycm9yLlwiLG51bGwhPUVycm9yLmNhcHR1cmVTdGFja1RyYWNlJiZFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLHRoaXMuY29uc3RydWN0b3IpLHRoaXMubmFtZT10aGlzLmNvbnN0cnVjdG9yLm5hbWV9cmV0dXJuIG0oZSx0KSxlLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm5hbWUrXCI6IFwiK3RoaXMubWVzc2FnZX0sZX0oRXJyb3IpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxuLG8scil7dGhpcy5rZXk9dCx0aGlzLm9sZFZhbHVlPWUsdGhpcy5uZXdWYWx1ZT1uLHRoaXMudXJsPW8sdGhpcy5zdG9yYWdlQXJlYT1udWxsIT1yP3I6XCJsb2NhbFN0b3JhZ2VcIn1yZXR1cm4gdH0oKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLG4pe2lmKHRoaXMua2V5PWUsdGhpcy5pbmRleD1uLCEodGhpcyBpbnN0YW5jZW9mIHQpKXJldHVybiBuZXcgdCh0aGlzLmtleSx0aGlzLmluZGV4KX1yZXR1cm4gdH0oKSxsPWZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIHQ9ZnVuY3Rpb24oKXt9LHQucHJvdG90eXBlPU9iamVjdC5jcmVhdGUobnVsbCksbmV3IHR9LHI9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LG8pe3JldHVybiB0aGlzLl9sb2NhdGlvbj10LHRoaXMucXVvdGE9bnVsbCE9bz9vOjUyNDI4ODAsdGhpcyBpbnN0YW5jZW9mIGU/KHRoaXMuX2xvY2F0aW9uPWQucmVzb2x2ZSh0aGlzLl9sb2NhdGlvbiksbnVsbCE9blt0aGlzLl9sb2NhdGlvbl0/blt0aGlzLl9sb2NhdGlvbl06KHRoaXMubGVuZ3RoPTAsdGhpcy5fYnl0ZXNJblVzZT0wLHRoaXMuX2tleXM9W10sdGhpcy5fbWV0YUtleU1hcD1sKCksdGhpcy5fZXZlbnRVcmw9XCJwaWQ6XCIrcHJvY2Vzcy5waWQsdGhpcy5faW5pdCgpLHRoaXMuX1FVT1RBX0VYQ0VFREVEX0VSUj1zLG5bdGhpcy5fbG9jYXRpb25dPXRoaXMsblt0aGlzLl9sb2NhdGlvbl0pKTpuZXcgZSh0aGlzLl9sb2NhdGlvbix0aGlzLnF1b3RhKX12YXIgbjtyZXR1cm4gbShlLHQpLG49e30sZS5wcm90b3R5cGUuX2luaXQ9ZnVuY3Rpb24oKXt2YXIgdCxlLG4sbyxyLHMsYyxhO3RyeXtpZihhPXAuc3RhdFN5bmModGhpcy5fbG9jYXRpb24pLG51bGwhPWEmJiFhLmlzRGlyZWN0b3J5KCkpdGhyb3cgbmV3IEVycm9yKFwiQSBmaWxlIGV4aXN0cyBhdCB0aGUgbG9jYXRpb24gJ1wiK3RoaXMuX2xvY2F0aW9uK1wiJyB3aGVuIHRyeWluZyB0byBjcmVhdGUvb3BlbiBsb2NhbFN0b3JhZ2VcIik7Zm9yKHRoaXMuX2J5dGVzSW5Vc2U9MCx0aGlzLmxlbmd0aD0wLG49cC5yZWFkZGlyU3luYyh0aGlzLl9sb2NhdGlvbikscj1vPTAsYz1uLmxlbmd0aDtvPGM7cj0rK28pcz1uW3JdLGU9ZGVjb2RlVVJJQ29tcG9uZW50KHMpLHRoaXMuX2tleXMucHVzaChlKSx0PW5ldyBpKHMsciksdGhpcy5fbWV0YUtleU1hcFtlXT10LGE9dGhpcy5fZ2V0U3RhdChzKSxudWxsIT0obnVsbCE9YT9hLnNpemU6dm9pZCAwKSYmKHQuc2l6ZT1hLnNpemUsdGhpcy5fYnl0ZXNJblVzZSs9YS5zaXplKTt0aGlzLmxlbmd0aD1uLmxlbmd0aH1jYXRjaCh1KXtwLm1rZGlyU3luYyh0aGlzLl9sb2NhdGlvbil9fSxlLnByb3RvdHlwZS5zZXRJdGVtPWZ1bmN0aW9uKHQsZSl7dmFyIG4sbyxyLGEsZixsLHAsbSx2LGc7aWYoZj1oLkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KHRoaXMsXCJzdG9yYWdlXCIpLG09bnVsbCxmJiYobT10aGlzLmdldEl0ZW0odCkpLHQ9dSh0KSxuPWVuY29kZVVSSUNvbXBvbmVudCh0KSxhPWQuam9pbih0aGlzLl9sb2NhdGlvbixuKSx2PWUudG9TdHJpbmcoKSxnPXYubGVuZ3RoLGw9dGhpcy5fbWV0YUtleU1hcFt0XSxyPSEhbCxwPXI/bC5zaXplOjAsdGhpcy5fYnl0ZXNJblVzZS1wK2c+dGhpcy5xdW90YSl0aHJvdyBuZXcgcztpZih5KGEsdixcInV0ZjhcIikscnx8KGw9bmV3IGkobix0aGlzLl9rZXlzLnB1c2godCktMSksbC5zaXplPWcsdGhpcy5fbWV0YUtleU1hcFt0XT1sLHRoaXMubGVuZ3RoKz0xLHRoaXMuX2J5dGVzSW5Vc2UrPWcpLGYpcmV0dXJuIG89bmV3IGModCxtLGUsdGhpcy5fZXZlbnRVcmwpLHRoaXMuZW1pdChcInN0b3JhZ2VcIixvKX0sZS5wcm90b3R5cGUuZ2V0SXRlbT1mdW5jdGlvbih0KXt2YXIgZSxuO3JldHVybiB0PXUodCksbj10aGlzLl9tZXRhS2V5TWFwW3RdLG4/KGU9ZC5qb2luKHRoaXMuX2xvY2F0aW9uLG4ua2V5KSxwLnJlYWRGaWxlU3luYyhlLFwidXRmOFwiKSk6bnVsbH0sZS5wcm90b3R5cGUuX2dldFN0YXQ9ZnVuY3Rpb24odCl7dmFyIGU7dD11KHQpLGU9ZC5qb2luKHRoaXMuX2xvY2F0aW9uLGVuY29kZVVSSUNvbXBvbmVudCh0KSk7dHJ5e3JldHVybiBwLnN0YXRTeW5jKGUpfWNhdGNoKG4pe3JldHVybiBudWxsfX0sZS5wcm90b3R5cGUucmVtb3ZlSXRlbT1mdW5jdGlvbih0KXt2YXIgZSxuLG8scixpLHMsYSxsLHA7aWYodD11KHQpLHM9dGhpcy5fbWV0YUtleU1hcFt0XSl7bz1oLkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KHRoaXMsXCJzdG9yYWdlXCIpLGE9bnVsbCxvJiYoYT10aGlzLmdldEl0ZW0odCkpLGRlbGV0ZSB0aGlzLl9tZXRhS2V5TWFwW3RdLHRoaXMubGVuZ3RoLT0xLHRoaXMuX2J5dGVzSW5Vc2UtPXMuc2l6ZSxuPWQuam9pbih0aGlzLl9sb2NhdGlvbixzLmtleSksdGhpcy5fa2V5cy5zcGxpY2Uocy5pbmRleCwxKSxsPXRoaXMuX21ldGFLZXlNYXA7Zm9yKHIgaW4gbClwPWxbcl0saT10aGlzLl9tZXRhS2V5TWFwW3JdLGkuaW5kZXg+cy5pbmRleCYmKGkuaW5kZXgtPTEpO2lmKGYobiksbylyZXR1cm4gZT1uZXcgYyh0LGEsbnVsbCx0aGlzLl9ldmVudFVybCksdGhpcy5lbWl0KFwic3RvcmFnZVwiLGUpfX0sZS5wcm90b3R5cGUua2V5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9rZXlzW3RdfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3ZhciB0O2lmKGEodGhpcy5fbG9jYXRpb24pLHRoaXMuX21ldGFLZXlNYXA9bCgpLHRoaXMuX2tleXM9W10sdGhpcy5sZW5ndGg9MCx0aGlzLl9ieXRlc0luVXNlPTAsaC5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCh0aGlzLFwic3RvcmFnZVwiKSlyZXR1cm4gdD1uZXcgYyhudWxsLG51bGwsbnVsbCx0aGlzLl9ldmVudFVybCksdGhpcy5lbWl0KFwic3RvcmFnZVwiLHQpfSxlLnByb3RvdHlwZS5fZ2V0Qnl0ZXNJblVzZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9ieXRlc0luVXNlfSxlLnByb3RvdHlwZS5fZGVsZXRlTG9jYXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gZGVsZXRlIG5bdGhpcy5fbG9jYXRpb25dLGYodGhpcy5fbG9jYXRpb24pLHRoaXMuX21ldGFLZXlNYXA9e30sdGhpcy5fa2V5cz1bXSx0aGlzLmxlbmd0aD0wLHRoaXMuX2J5dGVzSW5Vc2U9MH0sZX0oaC5FdmVudEVtaXR0ZXIpLGU9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe3JldHVybiBlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIG0oZSx0KSxlLnByb3RvdHlwZS5zZXRJdGVtPWZ1bmN0aW9uKHQsbil7dmFyIG87cmV0dXJuIG89SlNPTi5zdHJpbmdpZnkobiksZS5fX3N1cGVyX18uc2V0SXRlbS5jYWxsKHRoaXMsdCxvKX0sZS5wcm90b3R5cGUuZ2V0SXRlbT1mdW5jdGlvbih0KXtyZXR1cm4gSlNPTi5wYXJzZShlLl9fc3VwZXJfXy5nZXRJdGVtLmNhbGwodGhpcyx0KSl9LGV9KHIpLG4uTG9jYWxTdG9yYWdlPXIsbi5KU09OU3RvcmFnZT1lLG4uUVVPVEFfRVhDRUVERURfRVJSPXN9KS5jYWxsKHRoaXMpfSx7ZXZlbnRzOnZvaWQgMCxmczp2b2lkIDAscGF0aDp2b2lkIDAsXCJ3cml0ZS1maWxlLWF0b21pY1wiOjE0fV0sMTA6W2Z1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKCl7ZnVuY3Rpb24gdCh1KXt1JiYhcyYmKHM9dSk7Zm9yKHZhciBmPWFyZ3VtZW50cy5sZW5ndGgsbD0xO2w8ZjtsKyspdm9pZCAwIT09YXJndW1lbnRzW2xdJiYoaVtsLTFdPShpW2wtMV18fFtdKS5jb25jYXQoYXJndW1lbnRzW2xdKSk7aWYobi5sZW5ndGg+Yyl7dmFyIGg9bi5zbGljZShjKTthKz0obi5sZW5ndGgtYykqcixjPW4ubGVuZ3RoLHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKXtoLmZvckVhY2goZnVuY3Rpb24obil7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2Uobix0KX0pfSl9KX0wPT09LS1hJiZvLmFwcGx5KG51bGwsW3NdLmNvbmNhdChpKSl9dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxuPWUuc2hpZnQoKXx8W10sbz1lLnBvcCgpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG8pdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FsbGJhY2sgcHJvdmlkZWQgdG8gYXN5bmNNYXBcIik7aWYoIW4pcmV0dXJuIG8obnVsbCxbXSk7QXJyYXkuaXNBcnJheShuKXx8KG49W25dKTt2YXIgcj1lLmxlbmd0aCxpPVtdLHM9bnVsbCxjPW4ubGVuZ3RoLGE9YypyO3JldHVybiBhP3ZvaWQgbi5mb3JFYWNoKGZ1bmN0aW9uKG4pe2UuZm9yRWFjaChmdW5jdGlvbihlKXtlKG4sdCl9KX0pOm8obnVsbCxbXSl9ZS5leHBvcnRzPW99LHt9XSwxMTpbZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIG8oKXt2YXIgdCxlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksbj1udWxsO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlWzBdPyhuPWUuc2hpZnQoKSx0PWUuc2hpZnQoKSxcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9blt0XSkpOnQ9ZS5zaGlmdCgpLGZ1bmN0aW9uKG8pe3QuYXBwbHkobixlLmNvbmNhdChvKSl9fWUuZXhwb3J0cz1vfSx7fV0sMTI6W2Z1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKHQsZSl7dmFyIG49W107IWZ1bmN0aW9uIGkocyxjKXtyZXR1cm4gcz49Yz9lKG51bGwsbik6KEFycmF5LmlzQXJyYXkodFtzXSkmJih0W3NdPXIuYXBwbHkobnVsbCx0W3NdLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdD09PW8uZmlyc3Q/blswXTp0PT09by5sYXN0P25bbi5sZW5ndGgtMV06dH0pKSksdFtzXT92b2lkIHRbc10oZnVuY3Rpb24odCxvKXtyZXR1cm4gdD9lKHQsbik6KHZvaWQgMCE9PW8mJihuPW4uY29uY2F0KG8pKSx2b2lkIGkocysxLGMpKX0pOmkocysxLGMpKX0oMCx0Lmxlbmd0aCl9ZS5leHBvcnRzPW87dmFyIHI9dChcIi4vYmluZC1hY3Rvci5qc1wiKTtvLmZpcnN0PXt9LG8ubGFzdD17fX0se1wiLi9iaW5kLWFjdG9yLmpzXCI6MTF9XSwxMzpbZnVuY3Rpb24odCxlLG4pe24uYXN5bmNNYXA9dChcIi4vYXN5bmMtbWFwXCIpLG4uYmluZEFjdG9yPXQoXCIuL2JpbmQtYWN0b3JcIiksbi5jaGFpbj10KFwiLi9jaGFpblwiKX0se1wiLi9hc3luYy1tYXBcIjoxMCxcIi4vYmluZC1hY3RvclwiOjExLFwiLi9jaGFpblwiOjEyfV0sMTQ6W2Z1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24obil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbygpe2Zvcih2YXIgdD1uZXcgcyxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoOysrZSl0Lmhhc2goXCJcIithcmd1bWVudHNbZV0pO3JldHVybiB0LnJlc3VsdCgpfXZhciByPXQoXCJncmFjZWZ1bC1mc1wiKSxpPXQoXCJzbGlkZVwiKS5jaGFpbixzPXQoXCJpbXVybXVyaGFzaFwiKSxjPTAsYT1mdW5jdGlvbih0KXtyZXR1cm4gdCtcIi5cIitvKG4scHJvY2Vzcy5waWQsKytjKX07ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuLG8pe24gaW5zdGFuY2VvZiBGdW5jdGlvbiYmKG89bixuPW51bGwpLG58fChuPXt9KTt2YXIgcz1hKHQpO2koW1tyLHIud3JpdGVGaWxlLHMsZSxuXSxuLmNob3duJiZbcixyLmNob3duLHMsbi5jaG93bi51aWQsbi5jaG93bi5naWRdLFtyLHIucmVuYW1lLHMsdF1dLGZ1bmN0aW9uKHQpe3Q/ci51bmxpbmsocyxmdW5jdGlvbigpe28odCl9KTpvKCl9KX0sZS5leHBvcnRzLnN5bmM9ZnVuY3Rpb24odCxlLG4pe258fChuPXt9KTt2YXIgbz1hKHQpO3RyeXtyLndyaXRlRmlsZVN5bmMobyxlLG4pLG4uY2hvd24mJnIuY2hvd25TeW5jKG8sbi5jaG93bi51aWQsbi5jaG93bi5naWQpLHIucmVuYW1lU3luYyhvLHQpfWNhdGNoKGkpe3RyeXtyLnVubGlua1N5bmMobyl9Y2F0Y2gocyl7fXRocm93IGl9fX0pLmNhbGwodGhpcyxcIi9ob21lL3ZzaWx2YS9wdC1pbm92YWNhby9yZXRoaW5rLXByb2plY3QvZGV2LXNlcnZpY2UtZnJhbWV3b3JrL25vZGVfbW9kdWxlcy93cml0ZS1maWxlLWF0b21pYy9pbmRleC5qc1wiKX0se1wiZ3JhY2VmdWwtZnNcIjo1LGltdXJtdXJoYXNoOjgsc2xpZGU6MTN9XSwxNTpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj10KFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCIpLGk9byhyKSxzPXQoXCIuL3VuaXZlcnNhbC1sb2NhbHN0b3JhZ2VcIiksYz1vKHMpLGE9e3NldDpmdW5jdGlvbih0LGUsbil7Y1tcImRlZmF1bHRcIl0uc2V0SXRlbSh0LCgwLGlbXCJkZWZhdWx0XCJdKSh7dmVyc2lvbjplLHZhbHVlOm59KSl9LGdldDpmdW5jdGlvbih0KXt0cnl7cmV0dXJuIEpTT04ucGFyc2UoY1tcImRlZmF1bHRcIl0uZ2V0SXRlbSh0KSkudmFsdWV9Y2F0Y2goZSl7fX0sZ2V0VmVyc2lvbjpmdW5jdGlvbih0KXt0cnl7cmV0dXJuIEpTT04ucGFyc2UoY1tcImRlZmF1bHRcIl0uZ2V0SXRlbSh0KSkudmVyc2lvbn1jYXRjaChlKXt9fSxcImRlbGV0ZVwiOmZ1bmN0aW9uKHQpe2NbXCJkZWZhdWx0XCJdLnJlbW92ZUl0ZW0odCl9fTtuW1wiZGVmYXVsdFwiXT1hLGUuZXhwb3J0cz1uW1wiZGVmYXVsdFwiXX0se1wiLi91bml2ZXJzYWwtbG9jYWxzdG9yYWdlXCI6MTcsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIjoxfV0sMTY6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19dmFyIHI9dChcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiKSxpPW8ocik7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdy5sb2NhbFN0b3JhZ2UmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2V8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUsbil7dmFyIG8scjtuPyhvPW5ldyBEYXRlLG8uc2V0VGltZShvLmdldFRpbWUoKSsyNCpuKjYwKjYwKjFlMykscj1cIjsgZXhwaXJlcz1cIitvLnRvR01UU3RyaW5nKCkpOnI9XCJcIixkb2N1bWVudC5jb29raWU9dCtcIj1cIitlK3IrXCI7IHBhdGg9L1wifWZ1bmN0aW9uIG4odCl7dmFyIGUsbixvPXQrXCI9XCIscj1kb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO2ZvcihlPTA7ZTxyLmxlbmd0aDtlKyspe2ZvcihuPXJbZV07XCIgXCI9PW4uY2hhckF0KDApOyluPW4uc3Vic3RyaW5nKDEsbi5sZW5ndGgpO2lmKDA9PW4uaW5kZXhPZihvKSlyZXR1cm4gbi5zdWJzdHJpbmcoby5sZW5ndGgsbi5sZW5ndGgpfXJldHVybiBudWxsfWZ1bmN0aW9uIG8obil7bj0oMCxpW1wiZGVmYXVsdFwiXSkobiksXCJzZXNzaW9uXCI9PXQ/d2luZG93Lm5hbWU9bjplKFwibG9jYWxTdG9yYWdlXCIsbiwzNjUpfWZ1bmN0aW9uIHIoKXtcInNlc3Npb25cIj09dD93aW5kb3cubmFtZT1cIlwiOmUoXCJsb2NhbFN0b3JhZ2VcIixcIlwiLDM2NSl9ZnVuY3Rpb24gcygpe3ZhciBlPVwic2Vzc2lvblwiPT10P3dpbmRvdy5uYW1lOm4oXCJsb2NhbFN0b3JhZ2VcIik7cmV0dXJuIGU/SlNPTi5wYXJzZShlKTp7fX12YXIgYz1zKCk7cmV0dXJue2xlbmd0aDowLGNsZWFyOmZ1bmN0aW9uKCl7Yz17fSx0aGlzLmxlbmd0aD0wLHIoKX0sZ2V0SXRlbTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09Y1t0XT9udWxsOmNbdF19LGtleTpmdW5jdGlvbih0KXt2YXIgZT0wO2Zvcih2YXIgbiBpbiBjKXtpZihlPT10KXJldHVybiBuO2UrK31yZXR1cm4gbnVsbH0scmVtb3ZlSXRlbTpmdW5jdGlvbih0KXtkZWxldGUgY1t0XSx0aGlzLmxlbmd0aC0tLG8oYyl9LHNldEl0ZW06ZnVuY3Rpb24odCxlKXtjW3RdPWUrXCJcIix0aGlzLmxlbmd0aCsrLG8oYyl9fX07XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdy5sb2NhbFN0b3JhZ2UmJih3aW5kb3cubG9jYWxTdG9yYWdlPW5ldyB0KFwibG9jYWxcIikpLFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UmJih3aW5kb3cuc2Vzc2lvblN0b3JhZ2U9bmV3IHQoXCJzZXNzaW9uXCIpKX0oKX0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCI6MX1dLDE3OltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89dm9pZCAwO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3cpe3ZhciByPXQoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKS5Mb2NhbFN0b3JhZ2U7bz1uZXcgcihcIi4vdWxzLXNjcmF0Y2hcIil9ZWxzZSBvPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3cubG9jYWxTdG9yYWdlfHxcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93LnNlc3Npb25TdG9yYWdlP3QoXCIuL3JlbS1sb2NhbHN0b3JhZ2VcIik6d2luZG93LmxvY2FsU3RvcmFnZTtuW1wiZGVmYXVsdFwiXT1vLGUuZXhwb3J0cz1uW1wiZGVmYXVsdFwiXX0se1wiLi9yZW0tbG9jYWxzdG9yYWdlXCI6MTYsXCJub2RlLWxvY2Fsc3RvcmFnZVwiOjl9XX0se30sWzE1XSkoMTUpfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBlcnNpc3RlbmNlTWFuYWdlci5qcy5tYXBcclxuIiwiY2xhc3MgQ29tYmluaW5nQWxnb3JpdGhtIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbWJpbmluZ0FsZ29yaXRobTtcclxuIiwiY2xhc3MgT3BlcmF0b3JzIHtcclxuXHJcbiAgYW5kKHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHBhcmFtc1swXSAmJiBwYXJhbXNbMV07XHJcbiAgfVxyXG5cclxuICBiZXR3ZWVuKHBhcmFtcykge1xyXG4gICAgbGV0IHN0YXJ0ID0gcGFyc2VJbnQocGFyYW1zWzBdWzBdKTtcclxuICAgIGxldCBlbmQgPSBwYXJzZUludChwYXJhbXNbMF1bMV0pO1xyXG4gICAgbGV0IG5vdyA9IHBhcmFtc1sxXTtcclxuXHJcbiAgICBpZiAoZW5kIDwgc3RhcnQpIHtcclxuICAgICAgbm93ID0gKG5vdyA8IHN0YXJ0KSA/IG5vdyArPSAyNDAwIDogbm93O1xyXG4gICAgICBlbmQgKz0gMjQwMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKG5vdyA+IHN0YXJ0ICYmIG5vdyA8IGVuZCk7XHJcbiAgfVxyXG5cclxuICBlcXVhbHMocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gcGFyYW1zWzBdID09ICcqJyB8fCBwYXJhbXNbMF0gPT0gcGFyYW1zWzFdO1xyXG4gIH1cclxuXHJcbiAgaW4ocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gcGFyYW1zWzBdLmluZGV4T2YocGFyYW1zWzFdKSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgbm90KHBhcmFtcykge1xyXG4gICAgcmV0dXJuICFwYXJhbXNbMF07XHJcbiAgfVxyXG5cclxuICBvcihwYXJhbXMpIHtcclxuICAgIHJldHVybiBwYXJhbXNbMF0gfHwgcGFyYW1zWzFdO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdG9ycztcclxuIiwiaW1wb3J0IE9wZXJhdG9ycyBmcm9tICcuL09wZXJhdG9ycyc7XHJcbmltcG9ydCBSdW50aW1lQ29yZUN0eCBmcm9tICcuL2NvbnRleHQvUnVudGltZUNvcmVDdHgnO1xyXG4vKipcclxuKiBUaGUgUG9saWN5IERlY2lzaW9uIFBvaW50IChQRFApIGRlY2lkZXMgaWYgYSBtZXNzYWdlIGlzIHRvIGJlIGF1dGhvcmlzZWQgYnkgY2hlY2tpbmcgYSBzZXQgb2ZcclxuKiBwb2xpY2llcy4gVGhlIHJlc291cmNlIHRvIGJlIHZlcmlmaWVkIGlzIHNwZWNpZmllZCBpbiB0aGUgZmlyc3Qgd29yZCBvZiB0aGUgJ2NvbmRpdGlvbicgZmllbGQgb2ZcclxuKiBhIFBvbGljeSBvYmplY3QuIFRoZSBpbXBsZW1lbnRhdGlvbiB0aGF0IHZlcmlmaWVzIGlmIHRoZSBtZXNzYWdlIGlzIGNvbXBsaWFudCB3aXRoIGEgcG9saWN5IGlzXHJcbiogc3BlY2lmaWVkIGluIGEgaGFzaHRhYmxlIHRvIGFsbG93IGR5bmFtaWMgZGVmaW5pdGlvbiBvZiB0aGUgaW1wbGVtZW50YXRpb24sIHByb3ZpZGluZ1xyXG4qIGV4dGVuc2liaWxpdHkgdG8gdGhlIFBvbGljeSBFbmdpbmUgZnVuY3Rpb25hbGl0aWVzLlxyXG4qL1xyXG5jbGFzcyBQRFAge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5vcGVyYXRvcnMgPSBuZXcgT3BlcmF0b3JzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9wZXJhdG9ycygpIHtcclxuICAgIHJldHVybiB0aGlzLl9vcGVyYXRvcnM7XHJcbiAgfVxyXG5cclxuICBzZXQgY29udGV4dChjb250ZXh0KSB7XHJcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcclxuICB9XHJcblxyXG4gIHNldCBvcGVyYXRvcnMob3BlcmF0b3JzKSB7XHJcbiAgICB0aGlzLl9vcGVyYXRvcnMgPSBvcGVyYXRvcnM7XHJcbiAgfVxyXG5cclxuICBhcHBseVBvbGljaWVzKG1lc3NhZ2UsIHBvbGljaWVzKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZVNQUG9saWN5KG1lc3NhZ2UsIHBvbGljaWVzLnNlcnZpY2VQcm92aWRlclBvbGljeSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGV4dCBpbnN0YW5jZW9mIFJ1bnRpbWVDb3JlQ3R4ICYmIChyZXN1bHQgfHwgcmVzdWx0ID09PSAnTm90IEFwcGxpY2FibGUnKSkge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVXNlclBvbGljeShtZXNzYWdlLCBwb2xpY2llcy51c2VyUG9saWN5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZXZhbHVhdGVTUFBvbGljeShtZXNzYWdlLCBwb2xpY3kpIHtcclxuICAgIGxldCByZXN1bHQ7XHJcblxyXG4gICAgaWYgKHBvbGljeSkge1xyXG4gICAgICByZXN1bHQgPSBwb2xpY3kuZXZhbHVhdGUodGhpcy5jb250ZXh0LCBtZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9ICdOb3QgQXBwbGljYWJsZSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGV2YWx1YXRlVXNlclBvbGljeShtZXNzYWdlLCB0aXRsZSkge1xyXG4gICAgbGV0IHJlc3VsdDtcclxuXHJcbiAgICBpZiAodGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgcG9saWN5ID0gdGhpcy5jb250ZXh0LnVzZXJQb2xpY2llc1t0aXRsZV07XHJcbiAgICAgIFxyXG4gICAgICBpZiAocG9saWN5KSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcG9saWN5LmV2YWx1YXRlKHRoaXMuY29udGV4dCwgbWVzc2FnZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gJ05vdCBBcHBsaWNhYmxlJztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gJ05vdCBBcHBsaWNhYmxlJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBEUDtcclxuIiwiY2xhc3MgUEVQIHtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICB9XHJcblxyXG4gIGVuZm9yY2VQb2xpY2llcyhtZXNzYWdlLCBwb2xpY2llcywgYXV0aERlY2lzaW9uKSB7XHJcbiAgICBsZXQgcG9saWN5O1xyXG5cclxuICAgIGlmIChwb2xpY2llcy51c2VyUG9saWN5KSB7XHJcbiAgICAgIHBvbGljeSA9IHRoaXMuY29udGV4dC51c2VyUG9saWNpZXNbcG9saWNpZXMudXNlclBvbGljeV07XHJcbiAgICAgIGlmIChwb2xpY3kpIHtcclxuICAgICAgICBwb2xpY3kuZW5mb3JjZUFjdGlvbnModGhpcy5jb250ZXh0LCBtZXNzYWdlLCBhdXRoRGVjaXNpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwb2xpY3kgPSB0aGlzLmNvbnRleHQuc2VydmljZVByb3ZpZGVyUG9saWN5O1xyXG4gICAgaWYgKHBvbGljeSkge1xyXG4gICAgICBwb2xpY3kuZW5mb3JjZUFjdGlvbnModGhpcy5jb250ZXh0LCBtZXNzYWdlLCBhdXRoRGVjaXNpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypzZW5kQXV0b21hdGljTWVzc2FnZSgpIHt9XHJcblxyXG4gIGZvcndhcmRUb0lEKCkge31cclxuXHJcbiAgZm9yd2FyZFRvSHlwZXJ0eSgpIHt9Ki9cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBFUDtcclxuIiwiaW1wb3J0IERlbnlPdmVycmlkZXMgZnJvbSAnLi9jb21iaW5pbmdBbGdvcml0aG1zL0RlbnlPdmVycmlkZXMnO1xyXG5pbXBvcnQgRmlyc3RBcHBsaWNhYmxlIGZyb20gJy4vY29tYmluaW5nQWxnb3JpdGhtcy9GaXJzdEFwcGxpY2FibGUnO1xyXG5cclxuY2xhc3MgUG9saWN5IHtcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5LCBydWxlcywgYWN0aW9ucywgY29tYmluaW5nQWxnb3JpdGhtKSB7XHJcbiAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLmNvbWJpbmluZ0FsZ29yaXRobSA9IGNvbWJpbmluZ0FsZ29yaXRobTtcclxuICB9XHJcblxyXG4gIGdldCBjb21iaW5pbmdBbGdvcml0aG0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29tYmluaW5nQWxnb3JpdGhtO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbWJpbmluZ0FsZ29yaXRobShjb21iaW5pbmdBbGdvcml0aG0pIHtcclxuICAgIGlmIChjb21iaW5pbmdBbGdvcml0aG0gPT09ICdkZW55T3ZlcnJpZGVzJykge1xyXG4gICAgICB0aGlzLl9jb21iaW5pbmdBbGdvcml0aG0gPSBuZXcgRGVueU92ZXJyaWRlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGNvbWJpbmluZ0FsZ29yaXRobSA9PT0gJ2ZpcnN0QXBwbGljYWJsZScpIHtcclxuICAgICAgICB0aGlzLl9jb21iaW5pbmdBbGdvcml0aG0gPSBuZXcgRmlyc3RBcHBsaWNhYmxlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1Vua25vd24gYWxnb3JpdGhtOiAnICsgY29tYmluaW5nQWxnb3JpdGhtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5mb3JjZUFjdGlvbnMoY29udGV4dCwgbWVzc2FnZSwgYXV0aERlY2lzaW9uKSB7XHJcbiAgICBmb3IgKGxldCBpIGluIHRoaXMuYWN0aW9ucykge1xyXG4gICAgICBjb250ZXh0W3RoaXMuYWN0aW9uc1tpXV0obWVzc2FnZSwgYXV0aERlY2lzaW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2YWx1YXRlKGNvbnRleHQsIG1lc3NhZ2UpIHtcclxuICAgIGxldCByZXN1bHRzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnJ1bGVzKSB7XHJcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnJ1bGVzW2ldLmV2YWx1YXRlKGNvbnRleHQsIG1lc3NhZ2UpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXMuY29tYmluaW5nQWxnb3JpdGhtLmV2YWx1YXRlKHJlc3VsdHMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvbGljeTtcclxuIiwiaW1wb3J0IFBFUCBmcm9tICcuL1BFUCc7XHJcbmltcG9ydCBQRFAgZnJvbSAnLi9QRFAnO1xyXG5pbXBvcnQgVXNlclBvbGljeSBmcm9tICcuL3BvbGljaWVzL1VzZXJQb2xpY3knO1xyXG5cclxuY2xhc3MgUG9saWN5RW5naW5lIHtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIGNvbnRleHQucG9saWN5RW5naW5lID0gdGhpcztcclxuICAgIGNvbnRleHQubG9hZEFjdGl2ZVBvbGljeSgpO1xyXG4gICAgY29udGV4dC5sb2FkR3JvdXBzKCk7XHJcbiAgICBjb250ZXh0LmxvYWRTUFBvbGljaWVzKCk7XHJcbiAgICBjb250ZXh0LmxvYWRVc2VyUG9saWNpZXMoKTtcclxuICAgIHRoaXMucGRwID0gbmV3IFBEUChjb250ZXh0KTtcclxuICAgIHRoaXMucGVwID0gbmV3IFBFUChjb250ZXh0KTtcclxuICB9XHJcblxyXG4gIGFkZFBvbGljeShzb3VyY2UsIGtleSwgcG9saWN5KSB7XHJcbiAgICBpZiAoc291cmNlID09PSAnU0VSVklDRV9QUk9WSURFUicpIHtcclxuICAgICAgdGhpcy5jb250ZXh0LnNlcnZpY2VQcm92aWRlclBvbGljaWVzW2tleV0gPSBwb2xpY3k7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zYXZlUG9saWNpZXMoc291cmNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChzb3VyY2UgPT09ICdVU0VSJykge1xyXG4gICAgICAgIGlmICghcG9saWN5KSB7XHJcbiAgICAgICAgICBwb2xpY3kgPSBuZXcgVXNlclBvbGljeShrZXksIFtdLCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dC51c2VyUG9saWNpZXNba2V5XSA9IHBvbGljeTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZVBvbGljaWVzKHNvdXJjZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1Vua25vd24gcG9saWN5IHNvdXJjZTogJyArIHNvdXJjZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVBvbGljeShzb3VyY2UsIGtleSkge1xyXG4gICAgaWYgKHNvdXJjZSA9PT0gJyonKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zZXJ2aWNlUHJvdmlkZXJQb2xpY2llcyA9IHt9O1xyXG4gICAgICB0aGlzLmNvbnRleHQudXNlclBvbGljaWVzID0ge307XHJcbiAgICAgIHRoaXMuY29udGV4dC5hY3RpdmVVc2VyUG9saWN5ID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHNvdXJjZSA9PT0gJ1NFUlZJQ0VfUFJPVklERVInKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dC5zZXJ2aWNlUHJvdmlkZXJQb2xpY2llc1trZXldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzb3VyY2UgPT09ICdVU0VSJykge1xyXG4gICAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dC51c2VyUG9saWNpZXNba2V5XTtcclxuICAgICAgICAgIGlmIChrZXkgPT09IHRoaXMuY29udGV4dC5hY3RpdmVVc2VyUG9saWN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5hY3RpdmVVc2VyUG9saWN5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcignVW5rbm93biBwb2xpY3kgc291cmNlOiAnICsgc291cmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbnRleHQuc2F2ZVBvbGljaWVzKCdVU0VSJyk7XHJcbiAgICB0aGlzLmNvbnRleHQuc2F2ZVBvbGljaWVzKCdTRVJWSUNFX1BST1ZJREVSJyk7XHJcbiAgICB0aGlzLmNvbnRleHQuc2F2ZUFjdGl2ZVBvbGljeSgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUnVsZShrZXksIHJ1bGUpIHtcclxuICAgIGRlbGV0ZSB0aGlzLmNvbnRleHQudXNlclBvbGljaWVzW2tleV1bcnVsZS5zY29wZV1bcnVsZS50YXJnZXRdW3J1bGUuY29uZGl0aW9uXTtcclxuICB9XHJcblxyXG4gIGF1dGhvcmlzZShtZXNzYWdlKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIF90aGlzLmNvbnRleHQuYXV0aG9yaXNlKG1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0R3JvdXBzTmFtZXMoKSB7XHJcbiAgICBsZXQgbXlHcm91cHMgPSB0aGlzLmNvbnRleHQuZ3JvdXBzO1xyXG4gICAgbGV0IGdyb3Vwc05hbWVzID0gW107XHJcbiAgICBpZiAobXlHcm91cHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBmb3IgKGxldCBncm91cE5hbWUgaW4gbXlHcm91cHMpIHtcclxuICAgICAgICBncm91cHNOYW1lcy5wdXNoKGdyb3VwTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBncm91cHNOYW1lcztcclxuICB9XHJcblxyXG4gIGdldEdyb3VwKGdyb3VwTmFtZSkge1xyXG4gICAgbGV0IG15R3JvdXBzID0gdGhpcy5jb250ZXh0Lmdyb3VwcztcclxuICAgIGxldCBtZW1iZXJzID0gW107XHJcblxyXG4gICAgaWYgKG15R3JvdXBzW2dyb3VwTmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBtZW1iZXJzID0gbXlHcm91cHNbZ3JvdXBOYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWVtYmVycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ3JlYXRlcyBhIGdyb3VwIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICBncm91cE5hbWVcclxuICAqL1xyXG4gIGNyZWF0ZUdyb3VwKGdyb3VwTmFtZSkge1xyXG4gICAgdGhpcy5jb250ZXh0Lmdyb3Vwc1tncm91cE5hbWVdID0gW107XHJcbiAgICB0aGlzLmNvbnRleHQuc2F2ZUdyb3VwcygpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlR3JvdXAoZ3JvdXBOYW1lKSB7XHJcbiAgICBkZWxldGUgdGhpcy5jb250ZXh0Lmdyb3Vwc1tncm91cE5hbWVdO1xyXG4gICAgdGhpcy5jb250ZXh0LnNhdmVHcm91cHMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWRkcyB0aGUgZ2l2ZW4gdXNlciBlbWFpbCB0byB0aGUgZ3JvdXAgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gIHVzZXJFbWFpbFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgZ3JvdXBOYW1lXHJcbiAgKi9cclxuICBhZGRUb0dyb3VwKGdyb3VwTmFtZSwgdXNlckVtYWlsKSB7XHJcbiAgICBsZXQgbXlHcm91cHMgPSB0aGlzLmNvbnRleHQuZ3JvdXBzO1xyXG4gICAgaWYgKG15R3JvdXBzW2dyb3VwTmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAobXlHcm91cHNbZ3JvdXBOYW1lXS5pbmRleE9mKHVzZXJFbWFpbCkgPT09IC0xKSB7XHJcbiAgICAgICAgbXlHcm91cHNbZ3JvdXBOYW1lXS5wdXNoKHVzZXJFbWFpbCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmVHcm91cHMoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0dyb3VwIFwiJyArIGdyb3VwTmFtZSArICdcIiBkb2VzIG5vdCBleGlzdCEnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUZyb21Hcm91cChncm91cE5hbWUsIHVzZXJFbWFpbCkge1xyXG4gICAgbGV0IGdyb3VwID0gdGhpcy5jb250ZXh0Lmdyb3Vwc1tncm91cE5hbWVdO1xyXG5cclxuICAgIGdyb3VwLnNwbGljZShncm91cC5pbmRleE9mKHVzZXJFbWFpbCksIDEpO1xyXG4gICAgdGhpcy5jb250ZXh0LnNhdmVHcm91cHMoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2xpY3lFbmdpbmU7XHJcbiIsImltcG9ydCB7Z2V0VXNlckVtYWlsRnJvbVVSTCwgaXNEYXRhT2JqZWN0VVJMLCByZW1vdmVQYXRoRnJvbVVSTH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgT3BlcmF0b3JzIGZyb20gJy4vT3BlcmF0b3JzJztcclxuXHJcbmNsYXNzIFJ1bGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihhdXRob3Jpc2UsIGNvbmRpdGlvbiwgcHJpb3JpdHksIHNjb3BlLCB0YXJnZXQpIHtcclxuICAgIHRoaXMub3BlcmF0b3JzID0gbmV3IE9wZXJhdG9ycygpO1xyXG4gICAgdGhpcy5hdXRob3Jpc2UgPSBhdXRob3Jpc2U7XHJcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgZXZhbHVhdGUoY29udGV4dCwgbWVzc2FnZSkge1xyXG4gICAgbGV0IGh5cGVydHlOYW1lO1xyXG4gICAgc3dpdGNoICh0aGlzLnNjb3BlKSB7XHJcbiAgICAgIGNhc2UgJ2dsb2JhbCc6XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdoeXBlcnR5JzpcclxuICAgICAgICBpZiAoaXNEYXRhT2JqZWN0VVJMKG1lc3NhZ2UuZnJvbSkpIHtcclxuICAgICAgICAgIGxldCByZXBvcnRlciA9IGNvbnRleHQucnVudGltZVJlZ2lzdHJ5LmdldFJlcG9ydGVyVVJMU3luY2hvbm91cyhyZW1vdmVQYXRoRnJvbVVSTChtZXNzYWdlLmZyb20pKTtcclxuICAgICAgICAgIGlmIChyZXBvcnRlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGh5cGVydHlOYW1lID0gY29udGV4dC5ydW50aW1lUmVnaXN0cnkuZ2V0SHlwZXJ0eU5hbWUocmVwb3J0ZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZS5mcm9tLnNwbGl0KCc6Ly8nKVswXSA9PT0gJ2h5cGVydHknKSB7XHJcbiAgICAgICAgICAgIGh5cGVydHlOYW1lID0gY29udGV4dC5ydW50aW1lUmVnaXN0cnkuZ2V0SHlwZXJ0eU5hbWUocmVtb3ZlUGF0aEZyb21VUkwobWVzc2FnZS5mcm9tKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoeXBlcnR5TmFtZSA9PT0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRGF0YU9iamVjdFVSTChtZXNzYWdlLnRvKSkge1xyXG4gICAgICAgICAgbGV0IHJlcG9ydGVyID0gY29udGV4dC5ydW50aW1lUmVnaXN0cnkuZ2V0UmVwb3J0ZXJVUkxTeW5jaG9ub3VzKHJlbW92ZVBhdGhGcm9tVVJMKG1lc3NhZ2UudG8pKTtcclxuICAgICAgICAgIGlmIChyZXBvcnRlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGh5cGVydHlOYW1lID0gY29udGV4dC5ydW50aW1lUmVnaXN0cnkuZ2V0SHlwZXJ0eU5hbWUocmVwb3J0ZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZS50by5zcGxpdCgnOi8vJylbMF0gPT09ICdoeXBlcnR5Jykge1xyXG4gICAgICAgICAgICBoeXBlcnR5TmFtZSA9IGNvbnRleHQucnVudGltZVJlZ2lzdHJ5LmdldEh5cGVydHlOYW1lKHJlbW92ZVBhdGhGcm9tVVJMKG1lc3NhZ2UudG8pKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGh5cGVydHlOYW1lID09PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJ05vdCBBcHBsaWNhYmxlJztcclxuXHJcbiAgICAgIGNhc2UgJ3VzZXInOlxyXG4gICAgICAgIGxldCBvd25lcjtcclxuXHJcbiAgICAgICAgaWYgKGlzRGF0YU9iamVjdFVSTChtZXNzYWdlLmZyb20pKSB7XHJcbiAgICAgICAgICBsZXQgcmVwb3J0ZXIgPSBjb250ZXh0LnJ1bnRpbWVSZWdpc3RyeS5nZXRSZXBvcnRlclVSTFN5bmNob25vdXMocmVtb3ZlUGF0aEZyb21VUkwobWVzc2FnZS5mcm9tKSk7XHJcbiAgICAgICAgICBvd25lciA9IGNvbnRleHQucnVudGltZVJlZ2lzdHJ5LmdldEh5cGVydHlPd25lcihyZXBvcnRlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChtZXNzYWdlLmZyb20uc3BsaXQoJzovLycpWzBdID09PSAnaHlwZXJ0eScpIHtcclxuICAgICAgICAgICAgb3duZXIgPSBjb250ZXh0LnJ1bnRpbWVSZWdpc3RyeS5nZXRIeXBlcnR5T3duZXIocmVtb3ZlUGF0aEZyb21VUkwobWVzc2FnZS5mcm9tKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvd25lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBvd25lciA9IGdldFVzZXJFbWFpbEZyb21VUkwob3duZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3duZXIgPT09IHRoaXMudGFyZ2V0KSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0RhdGFPYmplY3RVUkwobWVzc2FnZS50bykpIHtcclxuICAgICAgICAgIGxldCByZXBvcnRlciA9IGNvbnRleHQucnVudGltZVJlZ2lzdHJ5LmdldFJlcG9ydGVyVVJMU3luY2hvbm91cyhyZW1vdmVQYXRoRnJvbVVSTChtZXNzYWdlLnRvKSk7XHJcbiAgICAgICAgICBvd25lciA9IGNvbnRleHQucnVudGltZVJlZ2lzdHJ5LmdldEh5cGVydHlPd25lcihyZXBvcnRlcik7XHJcbiAgICAgICAgICBpZiAob3duZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvd25lciA9IGdldFVzZXJFbWFpbEZyb21VUkwob3duZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZS50by5zcGxpdCgnOi8vJylbMF0gPT09ICdoeXBlcnR5Jykge1xyXG4gICAgICAgICAgICBvd25lciA9IGNvbnRleHQucnVudGltZVJlZ2lzdHJ5LmdldEh5cGVydHlPd25lcihyZW1vdmVQYXRoRnJvbVVSTChtZXNzYWdlLnRvKSk7XHJcbiAgICAgICAgICAgIGlmIChvd25lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgb3duZXIgPSBnZXRVc2VyRW1haWxGcm9tVVJMKG93bmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3duZXIgPT09IHRoaXMudGFyZ2V0KSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnTm90IEFwcGxpY2FibGUnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY29uZGl0aW9uLmlzQXBwbGljYWJsZShjb250ZXh0LCBtZXNzYWdlLCB0aGlzLnNjb3BlLCB0aGlzLnRhcmdldCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yaXNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdOb3QgQXBwbGljYWJsZSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSdWxlO1xyXG4iLCJpbXBvcnQgQ29tYmluaW5nQWxnb3JpdGhtIGZyb20gJy4uL0NvbWJpbmluZ0FsZ29yaXRobSc7XHJcblxyXG5jbGFzcyBEZW55T3ZlcnJpZGVzIGV4dGVuZHMgQ29tYmluaW5nQWxnb3JpdGhtIHtcclxuXHJcbiAgZXZhbHVhdGUoaW5kaXZpZHVhbFJlc3VsdHMpIHtcclxuICAgIGlmIChpbmRpdmlkdWFsUmVzdWx0cy5pbmRleE9mKGZhbHNlKSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGluZGl2aWR1YWxSZXN1bHRzLmluZGV4T2YodHJ1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdOb3QgQXBwbGljYWJsZSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZW55T3ZlcnJpZGVzO1xyXG4iLCJpbXBvcnQgQ29tYmluaW5nQWxnb3JpdGhtIGZyb20gJy4uL0NvbWJpbmluZ0FsZ29yaXRobSc7XHJcblxyXG5jbGFzcyBGaXJzdEFwcGxpY2FibGUgZXh0ZW5kcyBDb21iaW5pbmdBbGdvcml0aG0ge1xyXG5cclxuICBldmFsdWF0ZShpbmRpdmlkdWFsUmVzdWx0cykge1xyXG4gICAgZm9yIChsZXQgaSBpbiBpbmRpdmlkdWFsUmVzdWx0cykge1xyXG4gICAgICBpZiAoaW5kaXZpZHVhbFJlc3VsdHNbaV0gIT09ICdOb3QgQXBwbGljYWJsZScpIHtcclxuICAgICAgICByZXR1cm4gaW5kaXZpZHVhbFJlc3VsdHNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ05vdCBBcHBsaWNhYmxlJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0QXBwbGljYWJsZTtcclxuIiwiaW1wb3J0IENvbmRpdGlvbiBmcm9tICcuL0NvbmRpdGlvbic7XHJcbmltcG9ydCBPcGVyYXRvcnMgZnJvbSAnLi4vT3BlcmF0b3JzJztcclxuaW1wb3J0IFN1YnNjcmlwdGlvbkNvbmRpdGlvbiBmcm9tICcuL1N1YnNjcmlwdGlvbkNvbmRpdGlvbic7XHJcblxyXG5jbGFzcyBBZHZhbmNlZENvbmRpdGlvbiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbikge1xyXG4gICAgdGhpcy5vcGVyYXRvcnMgPSBuZXcgT3BlcmF0b3JzKCk7XHJcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcclxuICB9XHJcblxyXG4gIGlzQXBwbGljYWJsZShjb250ZXh0LCBtZXNzYWdlLCBzY29wZSwgdGFyZ2V0LCBvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgIGlmICghb3BlcmF0b3IpIHtcclxuICAgICAgb3BlcmF0b3IgPSB0aGlzLmNvbmRpdGlvblswXTtcclxuICAgICAgbGVmdCA9IHRoaXMuY29uZGl0aW9uWzFdO1xyXG4gICAgICByaWdodCA9IHRoaXMuY29uZGl0aW9uWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlICghKGxlZnQgaW5zdGFuY2VvZiBDb25kaXRpb24pICYgIShsZWZ0IGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uQ29uZGl0aW9uKSAmICh0eXBlb2YgbGVmdCAhPT0gJ2Jvb2xlYW4nKSkge1xyXG4gICAgICBsZWZ0ID0gdGhpcy5pc0FwcGxpY2FibGUoY29udGV4dCwgbWVzc2FnZSwgc2NvcGUsIHRhcmdldCwgbGVmdFswXSwgbGVmdFsxXSwgbGVmdFsyXSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmlnaHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB3aGlsZSAoIShyaWdodCBpbnN0YW5jZW9mIENvbmRpdGlvbikgJiAhKHJpZ2h0IGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uQ29uZGl0aW9uKSAmICh0eXBlb2YgcmlnaHQgIT09ICdib29sZWFuJykpIHtcclxuICAgICAgICByaWdodCA9IHRoaXMuaXNBcHBsaWNhYmxlKGNvbnRleHQsIG1lc3NhZ2UsIHNjb3BlLCB0YXJnZXQsIHJpZ2h0WzBdLCByaWdodFsxXSwgcmlnaHRbMl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlc3VsdExlZnQgPSAodHlwZW9mIGxlZnQgPT09ICdib29sZWFuJykgPyBsZWZ0IDogbGVmdC5pc0FwcGxpY2FibGUoY29udGV4dCwgbWVzc2FnZSwgc2NvcGUsIHRhcmdldCk7XHJcbiAgICBsZXQgcmVzdWx0UmlnaHQ7XHJcbiAgICBpZiAocmlnaHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXN1bHRSaWdodCA9ICh0eXBlb2YgcmlnaHQgPT09ICdib29sZWFuJykgPyByaWdodCA6IHJpZ2h0LmlzQXBwbGljYWJsZShjb250ZXh0LCBtZXNzYWdlLCBzY29wZSwgdGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm9wZXJhdG9yc1tvcGVyYXRvcl0oW3Jlc3VsdExlZnQsIHJlc3VsdFJpZ2h0XSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRDb25kaXRpb247XHJcbiIsImltcG9ydCBPcGVyYXRvcnMgZnJvbSAnLi4vT3BlcmF0b3JzJztcclxuXHJcbmNsYXNzIENvbmRpdGlvbiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZSwgb3BlcmF0b3IsIHBhcmFtcykge1xyXG4gICAgdGhpcy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICAgIHRoaXMub3BlcmF0b3JzID0gbmV3IE9wZXJhdG9ycygpO1xyXG4gIH1cclxuXHJcbiAgaXNBcHBsaWNhYmxlKGNvbnRleHQsIG1lc3NhZ2UpIHtcclxuICAgIGNvbnRleHRbdGhpcy5hdHRyaWJ1dGVdID0geyBtZXNzYWdlOiBtZXNzYWdlIH07XHJcbiAgICBsZXQgdmFsdWUgPSBjb250ZXh0W3RoaXMuYXR0cmlidXRlXTtcclxuICAgIGxldCB0ZW1wUGFyYW07XHJcbiAgICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJ2luJykge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbXMgPT09ICdwcmVhdXRob3Jpc2VkJykge1xyXG4gICAgICAgIGxldCBkYXRhT2JqZWN0VVJMID0gbWVzc2FnZS50by5zcGxpdCgnLycpO1xyXG4gICAgICAgIGRhdGFPYmplY3RVUkwucG9wKCk7XHJcbiAgICAgICAgZGF0YU9iamVjdFVSTCA9IGRhdGFPYmplY3RVUkxbMF0gKyAnLy8nICsgZGF0YU9iamVjdFVSTFsyXTtcclxuICAgICAgICB0ZW1wUGFyYW0gPSBjb250ZXh0LnJ1bnRpbWVSZWdpc3RyeS5nZXRQcmVBdXRoU3Vic2NyaWJlcnMoZGF0YU9iamVjdFVSTCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGVtcFBhcmFtID0gY29udGV4dC5wb2xpY3lFbmdpbmUuZ2V0R3JvdXAodGhpcy5wYXJhbXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIXRlbXBQYXJhbSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcGVyYXRvcnNbdGhpcy5vcGVyYXRvcl0oW3RoaXMucGFyYW1zLCB2YWx1ZV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3BlcmF0b3JzW3RoaXMub3BlcmF0b3JdKFt0ZW1wUGFyYW0sIHZhbHVlXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uO1xyXG4iLCJpbXBvcnQgQ29uZGl0aW9uIGZyb20gJy4vQ29uZGl0aW9uJztcclxuXHJcbmNsYXNzIFN1YnNjcmlwdGlvbkNvbmRpdGlvbiBleHRlbmRzIENvbmRpdGlvbiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZSwgb3BlcmF0b3IsIHBhcmFtcykge1xyXG4gICAgc3VwZXIoYXR0cmlidXRlLCBvcGVyYXRvciwgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIGlzQXBwbGljYWJsZShjb250ZXh0LCBtZXNzYWdlLCBzY29wZSwgdGFyZ2V0KSB7XHJcbiAgICBsZXQgaXNTdWJzY3JpcHRpb24gPSBtZXNzYWdlLnR5cGUgPT09ICdzdWJzY3JpYmUnO1xyXG4gICAgbGV0IGlzRnJvbVJlbW90ZVNNID0gY29udGV4dC5pc0Zyb21SZW1vdGVTTShtZXNzYWdlLmZyb20pO1xyXG4gICAgaWYgKGlzU3Vic2NyaXB0aW9uICYgaXNGcm9tUmVtb3RlU00pIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmlzQXBwbGljYWJsZShjb250ZXh0LCBtZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmlwdGlvbkNvbmRpdGlvbjtcclxuIiwiaW1wb3J0IHtkaXZpZGVFbWFpbH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuY2xhc3MgQ29tbW9uQ3R4IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRCZWhhdmlvciA9IHRydWU7XHJcbiAgICB0aGlzLmdyb3VwcyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRCZWhhdmlvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0QmVoYXZpb3I7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVmYXVsdEJlaGF2aW9yKGJlaGF2aW9yKSB7XHJcbiAgICB0aGlzLl9kZWZhdWx0QmVoYXZpb3IgPSBiZWhhdmlvcjtcclxuICB9XHJcblxyXG4gIHNldCBkYXRlKG5vdykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSk7XHJcbiAgICBpZiAoZGF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBkYXkgPSAnMCcgKyBkYXk7XHJcbiAgICB9XHJcbiAgICBsZXQgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSk7XHJcbiAgICBpZiAobW9udGgubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIG1vbnRoID0gJzAnICsgbW9udGg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IGRheSArICcvJyArIG1vbnRoICsgJy8nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRvbWFpbihwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMubWVzc2FnZS5ib2R5LmlkZW50aXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZG9tYWluID0gZGl2aWRlRW1haWwocGFyYW1zLm1lc3NhZ2UuYm9keS5pZGVudGl0eS51c2VyUHJvZmlsZS51c2VybmFtZSkuZG9tYWluO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IHNvdXJjZShwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMubWVzc2FnZS5ib2R5LmlkZW50aXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fc291cmNlID0gcGFyYW1zLm1lc3NhZ2UuYm9keS5pZGVudGl0eS51c2VyUHJvZmlsZS51c2VybmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCB0aW1lKG5vdykge1xyXG4gICAgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBtaW51dGVzID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpO1xyXG4gICAgaWYgKG1pbnV0ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIG1pbnV0ZXMgPSAnMCcgKyBtaW51dGVzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdGltZSA9IHBhcnNlSW50KFN0cmluZyhub3cuZ2V0SG91cnMoKSkgKyBtaW51dGVzKTtcclxuICB9XHJcblxyXG4gIHNldCB3ZWVrZGF5KG5vdykge1xyXG4gICAgdGhpcy5fd2Vla2RheSA9IFN0cmluZyhuZXcgRGF0ZSgpLmdldERheSgpKTtcclxuICB9XHJcblxyXG4gIGdldCBkYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgZG9tYWluKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbjtcclxuICB9XHJcblxyXG4gIGdldCBzb3VyY2UoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIF90aGlzLl9zb3VyY2U7XHJcbiAgfVxyXG5cclxuICBnZXQgdGltZSgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gX3RoaXMuX3RpbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgd2Vla2RheSgpIHtcclxuICAgIHJldHVybiB0aGlzLl93ZWVrZGF5O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbkN0eDtcclxuIiwiaW1wb3J0IENvbW1vbkN0eCBmcm9tICcuL0NvbW1vbkN0eCc7XHJcbmltcG9ydCBDb25kaXRpb24gZnJvbSAnLi4vY29uZGl0aW9ucy9Db25kaXRpb24nO1xyXG5pbXBvcnQge2RpdmlkZVVSTCwgZ2V0VXNlckVtYWlsRnJvbVVSTCwgaXNEYXRhT2JqZWN0VVJMfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBwZXJzaXN0ZW5jZU1hbmFnZXIgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXInO1xyXG5pbXBvcnQgUnVsZSBmcm9tICcuLi9SdWxlJztcclxuaW1wb3J0IFVzZXJQb2xpY3kgZnJvbSAnLi4vcG9saWNpZXMvVXNlclBvbGljeSc7XHJcbmltcG9ydCBTdWJzY3JpcHRpb25Db25kaXRpb24gZnJvbSAnLi4vY29uZGl0aW9ucy9TdWJzY3JpcHRpb25Db25kaXRpb24nO1xyXG5cclxuY2xhc3MgUnVudGltZUNvcmVDdHggZXh0ZW5kcyBDb21tb25DdHgge1xyXG5cclxuICBjb25zdHJ1Y3RvcihpZE1vZHVsZSwgcnVudGltZVJlZ2lzdHJ5KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pZE1vZHVsZSA9IGlkTW9kdWxlO1xyXG4gICAgdGhpcy5ydW50aW1lUmVnaXN0cnkgPSBydW50aW1lUmVnaXN0cnk7XHJcbiAgICB0aGlzLmFjdGl2ZVVzZXJQb2xpY3kgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnNlcnZpY2VQcm92aWRlclBvbGljaWVzID0ge307XHJcbiAgICB0aGlzLnVzZXJQb2xpY2llcyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGFPYmplY3RTY2hlbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YU9iamVjdFNjaGVtZTtcclxuICB9XHJcblxyXG4gIGdldCBzdWJzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRhdGFPYmplY3RTY2hlbWUocGFyYW1zKSB7XHJcbiAgICBsZXQgZnJvbSA9IHBhcmFtcy5tZXNzYWdlLmZyb207XHJcbiAgICBpZiAoaXNEYXRhT2JqZWN0VVJMKGZyb20pKSB7XHJcbiAgICAgIHRoaXMuX2RhdGFPYmplY3RTY2hlbWUgPSBkaXZpZGVVUkwoZnJvbSkudHlwZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2RhdGFPYmplY3RTY2hlbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgc3Vic2NyaXB0aW9uKHBhcmFtcykge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gcGFyYW1zLm1lc3NhZ2UuYm9keS5zdWJzY3JpYmVyO1xyXG4gIH1cclxuXHJcbiAgYXV0aG9yaXNlKG1lc3NhZ2UpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJy0tLSBQb2xpY3kgRW5naW5lIC0tLScpO1xyXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgbWVzc2FnZS5ib2R5ID0gbWVzc2FnZS5ib2R5IHx8IHt9O1xyXG4gICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICBsZXQgaXNUb1ZlcmlmeSA9IF90aGlzLl9pc1RvVmVyaWZ5KG1lc3NhZ2UpO1xyXG4gICAgICBsZXQgaXNJbmNvbWluZ01lc3NhZ2UgPSBfdGhpcy5faXNJbmNvbWluZ01lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgIGxldCBpc1RvQ3lwaGVyID0gX3RoaXMuX2lzVG9DeXBoZXJNb2R1bGUobWVzc2FnZSk7XHJcbiAgICAgIGlmIChpc1RvVmVyaWZ5KSB7XHJcbiAgICAgICAgaWYgKGlzSW5jb21pbmdNZXNzYWdlKSB7XHJcbiAgICAgICAgICBpZiAoaXNUb0N5cGhlcikge1xyXG4gICAgICAgICAgICBfdGhpcy5kZWNyeXB0KG1lc3NhZ2UpLnRoZW4obWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHBvbGljaWVzID0ge1xyXG4gICAgICAgICAgICAgICAgc2VydmljZVByb3ZpZGVyUG9saWN5OiBfdGhpcy5nZXRTZXJ2aWNlUHJvdmlkZXJQb2xpY3kobWVzc2FnZSwgaXNJbmNvbWluZ01lc3NhZ2UpLFxyXG4gICAgICAgICAgICAgICAgdXNlclBvbGljeTogX3RoaXMuYWN0aXZlVXNlclBvbGljeVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gX3RoaXMucG9saWN5RW5naW5lLnBkcC5hcHBseVBvbGljaWVzKG1lc3NhZ2UsIHBvbGljaWVzKTtcclxuICAgICAgICAgICAgICBfdGhpcy5wb2xpY3lFbmdpbmUucGVwLmVuZm9yY2VQb2xpY2llcyhtZXNzYWdlLCBwb2xpY2llcywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnTm90IEFwcGxpY2FibGUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfdGhpcy5kZWZhdWx0QmVoYXZpb3I7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmJvZHkuYXV0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNTdWJzY3JpcHRpb24gPSBtZXNzYWdlLnR5cGUgPT09ICdzdWJzY3JpYmUnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzRnJvbVJlbW90ZVNNID0gX3RoaXMuaXNGcm9tUmVtb3RlU00obWVzc2FnZS5mcm9tKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1N1YnNjcmlwdGlvbiAmIGlzRnJvbVJlbW90ZVNNKSB7XHJcbiAgICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyU3Vic2NyaWJlcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgX3RoaXMuZG9NdXR1YWxBdXRoZW50aWNhdGlvbihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuYm9keS5hdXRoID0gKG1lc3NhZ2UuYm9keS5hdXRoID09PSB1bmRlZmluZWQpID8gdHJ1ZSA6IG1lc3NhZ2UuYm9keS5hdXRoO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCdNZXNzYWdlIGJsb2NrZWQnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4geyByZWplY3QoZXJyb3IpOyB9KTtcclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcG9saWNpZXMgPSB7XHJcbiAgICAgICAgICAgICAgc2VydmljZVByb3ZpZGVyUG9saWN5OiBfdGhpcy5nZXRTZXJ2aWNlUHJvdmlkZXJQb2xpY3kobWVzc2FnZSwgaXNJbmNvbWluZ01lc3NhZ2UpLFxyXG4gICAgICAgICAgICAgIHVzZXJQb2xpY3k6IF90aGlzLmFjdGl2ZVVzZXJQb2xpY3lcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gX3RoaXMucG9saWN5RW5naW5lLnBkcC5hcHBseVBvbGljaWVzKG1lc3NhZ2UsIHBvbGljaWVzKTtcclxuICAgICAgICAgICAgX3RoaXMucG9saWN5RW5naW5lLnBlcC5lbmZvcmNlUG9saWNpZXMobWVzc2FnZSwgcG9saWNpZXMsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdOb3QgQXBwbGljYWJsZScpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSBfdGhpcy5kZWZhdWx0QmVoYXZpb3I7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5ib2R5LmF1dGggPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgbGV0IGlzU3Vic2NyaXB0aW9uID0gbWVzc2FnZS50eXBlID09PSAnc3Vic2NyaWJlJztcclxuICAgICAgICAgICAgICBsZXQgaXNGcm9tUmVtb3RlU00gPSBfdGhpcy5pc0Zyb21SZW1vdGVTTShtZXNzYWdlLmZyb20pO1xyXG4gICAgICAgICAgICAgIGlmIChpc1N1YnNjcmlwdGlvbiAmIGlzRnJvbVJlbW90ZVNNKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3RlclN1YnNjcmliZXIobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kb011dHVhbEF1dGhlbnRpY2F0aW9uKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBtZXNzYWdlLmJvZHkuYXV0aCA9IChtZXNzYWdlLmJvZHkuYXV0aCA9PT0gdW5kZWZpbmVkKSA/IHRydWUgOiBtZXNzYWdlLmJvZHkuYXV0aDtcclxuICAgICAgICAgICAgICByZXNvbHZlKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlamVjdCgnTWVzc2FnZSBibG9ja2VkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IGlzVG9TZXRJRCA9IF90aGlzLl9pc1RvU2V0SUQobWVzc2FnZSk7XHJcbiAgICAgICAgICBpZiAoaXNUb1NldElEKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nZXRJZGVudGl0eShtZXNzYWdlKS50aGVuKGlkZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlLmJvZHkuaWRlbnRpdHkgPSBpZGVudGl0eTtcclxuICAgICAgICAgICAgICBsZXQgcG9saWNpZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlUHJvdmlkZXJQb2xpY3k6IF90aGlzLmdldFNlcnZpY2VQcm92aWRlclBvbGljeShtZXNzYWdlLCBpc0luY29taW5nTWVzc2FnZSksXHJcbiAgICAgICAgICAgICAgICB1c2VyUG9saWN5OiBfdGhpcy5hY3RpdmVVc2VyUG9saWN5XHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICByZXN1bHQgPSBfdGhpcy5wb2xpY3lFbmdpbmUucGRwLmFwcGx5UG9saWNpZXMobWVzc2FnZSwgcG9saWNpZXMpO1xyXG4gICAgICAgICAgICAgIF90aGlzLnBvbGljeUVuZ2luZS5wZXAuZW5mb3JjZVBvbGljaWVzKG1lc3NhZ2UsIHBvbGljaWVzLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdOb3QgQXBwbGljYWJsZScpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF90aGlzLmRlZmF1bHRCZWhhdmlvcjtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuYm9keS5hdXRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuYm9keS5hdXRoID0gKG1lc3NhZ2UuYm9keS5hdXRoID09PSB1bmRlZmluZWQpID8gdHJ1ZSA6IG1lc3NhZ2UuYm9keS5hdXRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVG9DeXBoZXIpIHtcclxuICAgICAgICAgICAgICAgICAgX3RoaXMuZW5jcnlwdChtZXNzYWdlKS50aGVuKG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4geyByZWplY3QoZXJyb3IpOyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgnTWVzc2FnZSBibG9ja2VkJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHsgcmVqZWN0KGVycm9yKTsgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcG9saWNpZXMgPSB7XHJcbiAgICAgICAgICAgICAgc2VydmljZVByb3ZpZGVyUG9saWN5OiBfdGhpcy5nZXRTZXJ2aWNlUHJvdmlkZXJQb2xpY3kobWVzc2FnZSwgaXNJbmNvbWluZ01lc3NhZ2UpLFxyXG4gICAgICAgICAgICAgIHVzZXJQb2xpY3k6IF90aGlzLmFjdGl2ZVVzZXJQb2xpY3lcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gX3RoaXMucG9saWN5RW5naW5lLnBkcC5hcHBseVBvbGljaWVzKG1lc3NhZ2UsIHBvbGljaWVzKTtcclxuICAgICAgICAgICAgX3RoaXMucG9saWN5RW5naW5lLnBlcC5lbmZvcmNlUG9saWNpZXMobWVzc2FnZSwgcG9saWNpZXMsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdOb3QgQXBwbGljYWJsZScpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSBfdGhpcy5kZWZhdWx0QmVoYXZpb3I7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5ib2R5LmF1dGggPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5ib2R5LmF1dGggPSAobWVzc2FnZS5ib2R5LmF1dGggPT09IHVuZGVmaW5lZCkgPyB0cnVlIDogbWVzc2FnZS5ib2R5LmF1dGg7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZWplY3QoJ01lc3NhZ2UgYmxvY2tlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IF90aGlzLmRlZmF1bHRCZWhhdmlvcjtcclxuICAgICAgICBtZXNzYWdlLmJvZHkuYXV0aCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHJlc29sdmUobWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdCgnTWVzc2FnZSBibG9ja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlY3J5cHQobWVzc2FnZSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3QpIHtcclxuICAgICAgX3RoaXMuaWRNb2R1bGUuZGVjcnlwdE1lc3NhZ2UobWVzc2FnZSkudGhlbihmdW5jdGlvbihtc2cpIHtcclxuICAgICAgICByZXNvbHZlKG1zZyk7XHJcbiAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkb011dHVhbEF1dGhlbnRpY2F0aW9uKG1lc3NhZ2UpIHtcclxuICAgIGxldCB0byA9IG1lc3NhZ2UudG8uc3BsaXQoJy8nKTtcclxuICAgIGxldCBzdWJzSW5kZXggPSB0by5pbmRleE9mKCdzdWJzY3JpcHRpb24nKTtcclxuICAgIGxldCBpc0RhdGFPYmplY3RTdWJzY3JpcHRpb24gPSBzdWJzSW5kZXggIT09IC0xO1xyXG4gICAgbGV0IGlzRnJvbVJlbW90ZVNNID0gdGhpcy5pc0Zyb21SZW1vdGVTTShtZXNzYWdlLmZyb20pO1xyXG4gICAgaWYgKGlzRGF0YU9iamVjdFN1YnNjcmlwdGlvbiAmIGlzRnJvbVJlbW90ZVNNKSB7XHJcbiAgICAgIHRvLnBvcCgpO1xyXG4gICAgICBsZXQgZGF0YU9iamVjdFVSTCA9IHRvWzBdICsgJy8vJyArIHRvWzJdICsgJy8nICsgdG9bM107XHJcbiAgICAgIGlmICh0by5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgZGF0YU9iamVjdFVSTCA9IHRvWzBdICsgJy8vJyArIHRvWzJdICsgJy8nICsgdG9bM10gKyAnLycgKyB0b1s0XTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlkTW9kdWxlLmRvTXV0dWFsQXV0aGVudGljYXRpb24oZGF0YU9iamVjdFVSTCwgbWVzc2FnZS5ib2R5LnN1YnNjcmliZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5jcnlwdChtZXNzYWdlKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCkge1xyXG4gICAgICBfdGhpcy5pZE1vZHVsZS5lbmNyeXB0TWVzc2FnZShtZXNzYWdlKS50aGVuKChtc2cpID0+IHtcclxuICAgICAgICByZXNvbHZlKG1zZyk7XHJcbiAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRNeUVtYWlscygpIHtcclxuICAgIGxldCBpZGVudGl0aWVzID0gdGhpcy5pZE1vZHVsZS5nZXRJZGVudGl0aWVzKCk7XHJcbiAgICBsZXQgZW1haWxzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiBpZGVudGl0aWVzKSB7XHJcbiAgICAgIGVtYWlscy5wdXNoKGdldFVzZXJFbWFpbEZyb21VUkwoaWRlbnRpdGllc1tpXS5pZGVudGl0eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbWFpbHM7XHJcbiAgfVxyXG5cclxuICBnZXRNeUh5cGVydGllcygpIHtcclxuICAgIGxldCBoeXBlcnRpZXMgPSB0aGlzLnJ1bnRpbWVSZWdpc3RyeS5oeXBlcnRpZXNMaXN0O1xyXG4gICAgbGV0IGh5cGVydGllc05hbWVzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiBoeXBlcnRpZXMpIHtcclxuICAgICAgbGV0IGh5cGVydHlOYW1lID0gaHlwZXJ0aWVzW2ldLm9iamVjdE5hbWU7XHJcbiAgICAgIGlmIChoeXBlcnRpZXNOYW1lcy5pbmRleE9mKGh5cGVydHlOYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICBoeXBlcnRpZXNOYW1lcy5wdXNoKGh5cGVydHlOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoeXBlcnRpZXNOYW1lcztcclxuICB9XHJcblxyXG4gIGdldFNlcnZpY2VQcm92aWRlclBvbGljeShtZXNzYWdlLCBpc0luY29taW5nKSB7XHJcbiAgICBsZXQgcG9saWN5O1xyXG5cclxuICAgIGlmIChpc0luY29taW5nKSB7XHJcbiAgICAgIGxldCB0b0h5cGVydHkgPSB0aGlzLnJ1bnRpbWVSZWdpc3RyeS5nZXRIeXBlcnR5TmFtZShtZXNzYWdlLnRvKTtcclxuICAgICAgcG9saWN5ID0gdGhpcy5zZXJ2aWNlUHJvdmlkZXJQb2xpY2llc1t0b0h5cGVydHldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGZyb21IeXBlcnR5ID0gdGhpcy5ydW50aW1lUmVnaXN0cnkuZ2V0SHlwZXJ0eU5hbWUobWVzc2FnZS5mcm9tKTtcclxuICAgICAgcG9saWN5ID0gdGhpcy5zZXJ2aWNlUHJvdmlkZXJQb2xpY2llc1tmcm9tSHlwZXJ0eV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9saWN5O1xyXG4gIH1cclxuXHJcbiAgaXNGcm9tUmVtb3RlU00oZnJvbSkge1xyXG4gICAgbGV0IHNwbGl0RnJvbSA9IGZyb20uc3BsaXQoJzovLycpO1xyXG4gICAgcmV0dXJuIHNwbGl0RnJvbVswXSA9PT0gJ3J1bnRpbWUnICYmIGZyb20gIT09IHRoaXMucnVudGltZVJlZ2lzdHJ5LnJ1bnRpbWVVUkwgKyAnL3NtJztcclxuICB9XHJcblxyXG4gIF9pc1RvU2V0SUQobWVzc2FnZSkge1xyXG4gICAgbGV0IHNjaGVtYXNUb0lnbm9yZSA9IFsnZG9tYWluLWlkcCcsICdydW50aW1lJywgJ2RvbWFpbiddO1xyXG4gICAgbGV0IHNwbGl0RnJvbSA9IChtZXNzYWdlLmZyb20pLnNwbGl0KCc6Ly8nKTtcclxuICAgIGxldCBmcm9tU2NoZW1hID0gc3BsaXRGcm9tWzBdO1xyXG5cclxuICAgIHJldHVybiBzY2hlbWFzVG9JZ25vcmUuaW5kZXhPZihmcm9tU2NoZW1hKSA9PT0gLTE7XHJcbiAgfVxyXG5cclxuICBfaXNJbmNvbWluZ01lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIChtZXNzYWdlLmJvZHkuaWRlbnRpdHkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VVJMKHVybCkge1xyXG4gICAgbGV0IHNwbGl0VVJMID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICByZXR1cm4gc3BsaXRVUkxbMF0gKyAnLy8nICsgc3BsaXRVUkxbMl0gKyAnLycgKyBzcGxpdFVSTFszXTtcclxuICB9XHJcblxyXG4gIF9nZXRJZGVudGl0eShtZXNzYWdlKSB7XHJcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAndXBkYXRlJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5pZE1vZHVsZS5nZXRJZGVudGl0eU9mSHlwZXJ0eShtZXNzYWdlLmJvZHkuc291cmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAncmVzcG9uc2UnICYmIG1lc3NhZ2UuYm9keS5zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pZE1vZHVsZS5nZXRJZGVudGl0eU9mSHlwZXJ0eShtZXNzYWdlLmJvZHkuc291cmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGl2aWRlVVJMKG1lc3NhZ2UuZnJvbSkudHlwZSA9PT0gJ2h5cGVydHknKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlkTW9kdWxlLmdldElkZW50aXR5T2ZIeXBlcnR5KG1lc3NhZ2UuZnJvbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5pZE1vZHVsZS5nZXRJZGVudGl0eU9mSHlwZXJ0eSh0aGlzLmdldFVSTChtZXNzYWdlLmZyb20pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9pc1RvVmVyaWZ5KG1lc3NhZ2UpIHtcclxuICAgIGxldCBzY2hlbWFzVG9JZ25vcmUgPSBbJ2RvbWFpbi1pZHAnLCAnaHlwZXJ0eS1ydW50aW1lJywgJ3J1bnRpbWUnLCAnZG9tYWluJ107XHJcbiAgICBsZXQgc3BsaXRGcm9tID0gKG1lc3NhZ2UuZnJvbSkuc3BsaXQoJzovLycpO1xyXG4gICAgbGV0IGZyb21TY2hlbWEgPSBzcGxpdEZyb21bMF07XHJcbiAgICBsZXQgc3BsaXRUbyA9IChtZXNzYWdlLnRvKS5zcGxpdCgnOi8vJyk7XHJcbiAgICBsZXQgdG9TY2hlbWEgPSAgc3BsaXRUb1swXTtcclxuICAgIGlmIChmcm9tU2NoZW1hID09PSBtZXNzYWdlLmZyb20gfHwgdG9TY2hlbWEgPT09IG1lc3NhZ2UudG8pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNjaGVtYXNUb0lnbm9yZS5pbmRleE9mKGZyb21TY2hlbWEpID09PSAtMSB8fCBzY2hlbWFzVG9JZ25vcmUuaW5kZXhPZih0b1NjaGVtYSkgPT09IC0xO1xyXG4gIH1cclxuXHJcbiAgLy9UT0RPIHVzZSBzY2hlbWFzVG9JZ25vcmUgaW5zdGVhZFxyXG4gIF9pc1RvQ3lwaGVyTW9kdWxlKG1lc3NhZ2UpIHtcclxuICAgIGxldCBpc0NyZWF0ZSA9IG1lc3NhZ2UudHlwZSA9PT0gJ2NyZWF0ZSc7XHJcbiAgICBsZXQgaXNGcm9tSHlwZXJ0eSA9IGRpdmlkZVVSTChtZXNzYWdlLmZyb20pLnR5cGUgPT09ICdoeXBlcnR5JztcclxuICAgIGxldCBpc1RvSHlwZXJ0eSA9IGRpdmlkZVVSTChtZXNzYWdlLnRvKS50eXBlID09PSAnaHlwZXJ0eSc7XHJcbiAgICBsZXQgaXNUb0RhdGFPYmplY3QgPSBpc0RhdGFPYmplY3RVUkwobWVzc2FnZS50byk7XHJcbiAgICBsZXQgaXNIYW5kc2hha2UgPSBtZXNzYWdlLnR5cGUgPT09ICdoYW5kc2hha2UnO1xyXG5cclxuICAgIHJldHVybiAoaXNDcmVhdGUgJiYgaXNGcm9tSHlwZXJ0eSAmJiBpc1RvSHlwZXJ0eSkgfHwgKGlzQ3JlYXRlICYmIGlzRnJvbUh5cGVydHkgJiYgaXNUb0RhdGFPYmplY3QpIHx8IGlzSGFuZHNoYWtlO1xyXG4gIH1cclxuXHJcbiAgbG9hZEFjdGl2ZVBvbGljeSgpIHtcclxuICAgIHRoaXMuYWN0aXZlVXNlclBvbGljeSA9IHBlcnNpc3RlbmNlTWFuYWdlci5nZXQoJ3JldGhpbms6YWN0aXZlUG9saWN5Jyk7XHJcbiAgfVxyXG5cclxuICBsb2FkR3JvdXBzKCkge1xyXG4gICAgbGV0IGdyb3VwcyA9IHBlcnNpc3RlbmNlTWFuYWdlci5nZXQoJ3JldGhpbms6Z3JvdXBzJyk7XHJcbiAgICBpZiAoZ3JvdXBzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRTUFBvbGljaWVzKCkge1xyXG4gICAgbGV0IHBvbGljaWVzID0gcGVyc2lzdGVuY2VNYW5hZ2VyLmdldCgncmV0aGluazpzcFBvbGljaWVzJyk7XHJcbiAgICBpZiAocG9saWNpZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnNlcnZpY2VQcm92aWRlclBvbGljaWVzID0gcG9saWNpZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkVXNlclBvbGljaWVzKCkge1xyXG4gICAgbGV0IHBvbGljaWVzID0gcGVyc2lzdGVuY2VNYW5hZ2VyLmdldCgncmV0aGluazp1c2VyUG9saWNpZXMnKTtcclxuXHJcbiAgICBpZiAocG9saWNpZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBmb3IgKGxldCBpIGluIHBvbGljaWVzKSB7XHJcbiAgICAgICAgbGV0IHJ1bGVzUEUgPSBbXTtcclxuICAgICAgICBsZXQgcnVsZXMgPSBwb2xpY2llc1tpXS5ydWxlcztcclxuICAgICAgICBmb3IgKGxldCBqIGluIHJ1bGVzKSB7XHJcbiAgICAgICAgICBsZXQgY29uZGl0aW9uO1xyXG4gICAgICAgICAgaWYgKHJ1bGVzW2pdLmNvbmRpdGlvbi5hdHRyaWJ1dGUgPT09ICdzdWJzY3JpcHRpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBTdWJzY3JpcHRpb25Db25kaXRpb24ocnVsZXNbal0uY29uZGl0aW9uLmF0dHJpYnV0ZSwgcnVsZXNbal0uY29uZGl0aW9uLm9wZXJhdG9yLCBydWxlc1tqXS5jb25kaXRpb24ucGFyYW1zKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBDb25kaXRpb24ocnVsZXNbal0uY29uZGl0aW9uLmF0dHJpYnV0ZSwgcnVsZXNbal0uY29uZGl0aW9uLm9wZXJhdG9yLCBydWxlc1tqXS5jb25kaXRpb24ucGFyYW1zKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJ1bGVzUEUucHVzaChuZXcgUnVsZShydWxlc1tqXS5hdXRob3Jpc2UsIGNvbmRpdGlvbiwgcnVsZXNbal0ucHJpb3JpdHksIHJ1bGVzW2pdLnNjb3BlLCBydWxlc1tqXS50YXJnZXQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51c2VyUG9saWNpZXNbaV0gPSBuZXcgVXNlclBvbGljeShwb2xpY2llc1tpXS5rZXksIHJ1bGVzUEUsIHBvbGljaWVzW2ldLmFjdGlvbnMsIHBvbGljaWVzW2ldLmNvbWJpbmluZ0FsZ29yaXRobSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyU3Vic2NyaWJlcihtZXNzYWdlKSB7XHJcbiAgICBsZXQgdG8gPSBtZXNzYWdlLnRvLnNwbGl0KCcvJyk7XHJcbiAgICBsZXQgc3Vic0luZGV4ID0gdG8uaW5kZXhPZignc3Vic2NyaXB0aW9uJyk7XHJcbiAgICBsZXQgaXNEYXRhT2JqZWN0U3Vic2NyaXB0aW9uID0gc3Vic0luZGV4ICE9PSAtMTtcclxuICAgIGxldCBpc0Zyb21SZW1vdGVTTSA9IHRoaXMuaXNGcm9tUmVtb3RlU00obWVzc2FnZS5mcm9tKTtcclxuXHJcbiAgICBpZiAoaXNEYXRhT2JqZWN0U3Vic2NyaXB0aW9uICYgaXNGcm9tUmVtb3RlU00pIHtcclxuICAgICAgdG8ucG9wKCk7XHJcbiAgICAgIGxldCBkYXRhT2JqZWN0VVJMID0gdG9bMF0gKyAnLy8nICsgdG9bMl0gKyAnLycgKyB0b1szXTtcclxuICAgICAgaWYgKHRvLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICBkYXRhT2JqZWN0VVJMID0gdG9bMF0gKyAnLy8nICsgdG9bMl0gKyAnLycgKyB0b1szXSArICcvJyArIHRvWzRdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucnVudGltZVJlZ2lzdHJ5LnJlZ2lzdGVyU3Vic2NyaWJlcihkYXRhT2JqZWN0VVJMLCBtZXNzYWdlLmJvZHkuc3Vic2NyaWJlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0TGFzdENvbXBvbmVudE9mVVJMKHVybCkge1xyXG4gICAgbGV0IHNwbGl0ID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICByZXR1cm4gc3BsaXRbc3BsaXQubGVuZ3RoIC0gMV07XHJcbiAgfVxyXG5cclxuICBzYXZlQWN0aXZlUG9saWN5KCkge1xyXG4gICAgcGVyc2lzdGVuY2VNYW5hZ2VyLnNldCgncmV0aGluazphY3RpdmVQb2xpY3knLCAwLCB0aGlzLmFjdGl2ZVVzZXJQb2xpY3kpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUdyb3VwcygpIHtcclxuICAgIHBlcnNpc3RlbmNlTWFuYWdlci5zZXQoJ3JldGhpbms6Z3JvdXBzJywgMCwgdGhpcy5ncm91cHMpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVBvbGljaWVzKHNvdXJjZSkge1xyXG4gICAgc3dpdGNoKHNvdXJjZSkge1xyXG4gICAgICBjYXNlICdVU0VSJzpcclxuICAgICAgICBwZXJzaXN0ZW5jZU1hbmFnZXIuc2V0KCdyZXRoaW5rOnVzZXJQb2xpY2llcycsIDAsIHRoaXMudXNlclBvbGljaWVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnU0VSVklDRV9QUk9WSURFUic6XHJcbiAgICAgICAgcGVyc2lzdGVuY2VNYW5hZ2VyLnNldCgncmV0aGluazpzcFBvbGljaWVzJywgMCwgdGhpcy5zZXJ2aWNlUHJvdmlkZXJQb2xpY2llcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUnVudGltZUNvcmVDdHg7XHJcbiIsImltcG9ydCBBZHZhbmNlZENvbmRpdGlvbiBmcm9tICcuLi9jb25kaXRpb25zL0FkdmFuY2VkQ29uZGl0aW9uJztcclxuaW1wb3J0IENvbmRpdGlvbiBmcm9tICcuLi9jb25kaXRpb25zL0NvbmRpdGlvbidcclxuaW1wb3J0IFBvbGljeSBmcm9tICcuLi9Qb2xpY3knO1xyXG5pbXBvcnQgUnVsZSBmcm9tICcuLi9SdWxlJztcclxuaW1wb3J0IFN1YnNjcmlwdGlvbkNvbmRpdGlvbiBmcm9tICcuLi9jb25kaXRpb25zL1N1YnNjcmlwdGlvbkNvbmRpdGlvbic7XHJcblxyXG5jbGFzcyBVc2VyUG9saWN5IGV4dGVuZHMgUG9saWN5IHtcclxuICBjb25zdHJ1Y3RvcihrZXksIHJ1bGVzLCBhY3Rpb25zLCBjb21iaW5pbmdBbGdvcml0aG0pIHtcclxuICAgIGlmICghY29tYmluaW5nQWxnb3JpdGhtKSB7XHJcbiAgICAgIGNvbWJpbmluZ0FsZ29yaXRobSA9ICdkZW55T3ZlcnJpZGVzJztcclxuICAgIH1cclxuICAgIHN1cGVyKGtleSwgcnVsZXMsIGFjdGlvbnMsIGNvbWJpbmluZ0FsZ29yaXRobSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSdWxlKHR5cGUsIGF1dGhvcmlzZSwgY29uZGl0aW9uLCBzY29wZSwgdGFyZ2V0LCBwcmlvcml0eSkge1xyXG4gICAgaWYgKCEoY29uZGl0aW9uIGluc3RhbmNlb2YgQ29uZGl0aW9uKSkge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhZHZhbmNlZCc6XHJcbiAgICAgICAgICBjb25kaXRpb24gPSBuZXcgQWR2YW5jZWRDb25kaXRpb24oY29uZGl0aW9uKTtcclxuICAgICAgICBjYXNlICdzaW1wbGUnOlxyXG4gICAgICAgICAgY29uZGl0aW9uID0gbmV3IENvbmRpdGlvbihjb25kaXRpb25bMF0sIGNvbmRpdGlvblsxXSwgY29uZGl0aW9uWzJdKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N1YnNjcmlwdGlvbic6XHJcbiAgICAgICAgICBjb25kaXRpb24gPSBuZXcgU3Vic2NyaXB0aW9uQ29uZGl0aW9uKGNvbmRpdGlvblswXSwgY29uZGl0aW9uWzFdLCBjb25kaXRpb25bMl0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcmlvcml0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHByaW9yaXR5ID0gdGhpcy5nZXRMYXN0UHJpb3JpdHkoKSArIDE7XHJcbiAgICB9XHJcbiAgICBsZXQgcnVsZSA9IG5ldyBSdWxlKGF1dGhvcmlzZSwgY29uZGl0aW9uLCBwcmlvcml0eSwgc2NvcGUsIHRhcmdldCk7XHJcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVSdWxlKHJ1bGUpIHtcclxuICAgIGxldCBpbmRleFRvUmVtb3ZlID0gdGhpcy5ydWxlcy5pbmRleE9mKHJ1bGUpO1xyXG4gICAgdGhpcy5ydWxlcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0UHJpb3JpdHkoKSB7XHJcbiAgICBsZXQgcHJpb3JpdGllcyA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnJ1bGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMucnVsZXMpIHtcclxuICAgICAgICBwcmlvcml0aWVzLnB1c2godGhpcy5ydWxlc1tpXS5wcmlvcml0eSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIHByaW9yaXRpZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UnVsZUJ5UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5ydWxlcykge1xyXG4gICAgICBpZiAodGhpcy5ydWxlc1tpXS5wcmlvcml0eSA9PSBwcmlvcml0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJ1bGVzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aHJvdyBFcnJvcignUnVsZSB3aXRoIHByaW9yaXR5ICcgKyBwcmlvcml0eSArICcgZG9lcyBub3QgZXhpc3QhJylcclxuICB9XHJcblxyXG4gIGhhc1N1YnNjcmlwdGlvblJ1bGUoKSB7XHJcbiAgICBmb3IgKGxldCBpIGluIHRoaXMucnVsZXMpIHtcclxuICAgICAgaWYgKHRoaXMucnVsZXNbaV0uc2NvcGUgIT09ICdnbG9iYWwnKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucnVsZXNbaV0uY29uZGl0aW9uIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMucnVsZXNbaV0uY29uZGl0aW9uIGluc3RhbmNlb2YgQWR2YW5jZWRDb25kaXRpb24pIHtcclxuICAgICAgICAgIGZvciAobGV0IGogaW4gdGhpcy5ydWxlc1tpXS5jb25kaXRpb24uY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bGVzW2ldLmNvbmRpdGlvbi5jb25kaXRpb25bal0gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb25Db25kaXRpb24pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc29ydFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgbGV0IHggPSBhWydwcmlvcml0eSddOyBsZXQgeSA9IGJbJ3ByaW9yaXR5J107XHJcbiAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQb2xpY3k7XHJcbiIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuLyoqXHJcbiAqIFN1cHBvcnQgbW9kdWxlIHdpdGggc29tZSBmdW5jdGlvbnMgd2lsbCBiZSB1c2VmdWxcclxuICogQG1vZHVsZSB1dGlsc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBkaXZpZGVVUkxcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIFVSTFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gb2YgVVJMXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZGVudGl0eSBUaGUgaWRlbnRpdHkgb2YgVVJMXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIERpdmlkZSBhbiB1cmwgaW4gdHlwZSwgZG9tYWluIGFuZCBpZGVudGl0eVxyXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1cmwgLSB1cmwgYWRkcmVzc1xyXG4gKiBAcmV0dXJuIHtkaXZpZGVVUkx9IHRoZSByZXN1bHQgb2YgZGl2aWRlVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlVVJMKHVybCkge1xyXG5cclxuICBpZiAoIXVybCkgdGhyb3cgRXJyb3IoJ1VSTCBpcyBuZWVkZWQgdG8gc3BsaXQnKTtcclxuXHJcbiAgLy8gbGV0IHJlID0gLyhbYS16QS1aLV0qKT86XFwvXFwvKD86XFwuKT8oWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9XFwuW2Etel17Miw2fVxcYikqKFxcL1tcXC9cXGRcXHdcXC4tXSopKig/OltcXD9dKSooLispKi9naTtcclxuICBsZXQgcmUgPSAvKFthLXpBLVotXSopOlxcL1xcLyg/OlxcLik/KFstYS16QS1aMC05QDolLl9cXCt+Iz1dezIsMjU2fSkoWy1hLXpBLVowLTlAOiUuX1xcK34jPVxcL10qKS9naTtcclxuICBsZXQgc3Vic3QgPSAnJDEsJDIsJDMnO1xyXG4gIGxldCBwYXJ0cyA9IHVybC5yZXBsYWNlKHJlLCBzdWJzdCkuc3BsaXQoJywnKTtcclxuXHJcbiAgLy8gSWYgdGhlIHVybCBoYXMgbm8gcHJvdG9jb2wsIHRoZSBkZWZhdWx0IHByb3RvY29sIHNldCBpcyBodHRwc1xyXG4gIGlmIChwYXJ0c1swXSA9PT0gdXJsKSB7XHJcbiAgICBwYXJ0c1swXSA9ICdodHRwcyc7XHJcbiAgICBwYXJ0c1sxXSA9IHVybDtcclxuICB9XHJcblxyXG4gIGxldCByZXN1bHQgPSB7XHJcbiAgICB0eXBlOiBwYXJ0c1swXSxcclxuICAgIGRvbWFpbjogcGFydHNbMV0sXHJcbiAgICBpZGVudGl0eTogcGFydHNbMl1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlRW1haWwoZW1haWwpIHtcclxuICBsZXQgaW5kZXhPZkF0ID0gZW1haWwuaW5kZXhPZignQCcpO1xyXG5cclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgdXNlcm5hbWU6IGVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpLFxyXG4gICAgZG9tYWluOiBlbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgZW1haWwubGVuZ3RoKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhbiBPYmplY3QgaXMgZW1wdHlcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IHRvIGJlIGNoZWNrZWRcclxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgc3RhdHVzIG9mIE9iamVjdCwgZW1wdHkgb3Igbm90ICh0cnVlfGZhbHNlKTtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9iamVjdChvYmplY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBhIENPUFkgb2YgdGhlIG9yaWdpbmFsIGRhdGFcclxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xyXG4gIC8vVE9ETzogc2ltcGxlIGJ1dCBpbmVmZmljaWVudCBKU09OIGRlZXAgY2xvbmUuLi5cclxuICBpZiAob2JqKSByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhGcm9tVVJMKHVybCkge1xyXG4gIGxldCBzcGxpdFVSTCA9IHVybC5zcGxpdCgnLycpO1xyXG4gIHJldHVybiBzcGxpdFVSTFswXSArICcvLycgKyBzcGxpdFVSTFsyXSArICcvJyArIHNwbGl0VVJMWzNdO1xyXG59XHJcblxyXG4vKipcclxuICogT2J0YWlucyB0aGUgdXNlciBVUkwgdGhhdCBjb3JyZXNwb25kcyB0byBhIGdpdmVuIGVtYWlsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdXNlckVtYWlsIFRoZSB1c2VyIGVtYWlsXHJcbiAqIEByZXR1cm4ge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclVSTEZyb21FbWFpbCh1c2VyRW1haWwpIHtcclxuICBsZXQgaW5kZXhPZkF0ID0gdXNlckVtYWlsLmluZGV4T2YoJ0AnKTtcclxuICByZXR1cm4gJ3VzZXI6Ly8nICsgdXNlckVtYWlsLnN1YnN0cmluZyhpbmRleE9mQXQgKyAxLCB1c2VyRW1haWwubGVuZ3RoKSArICcvJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoMCwgaW5kZXhPZkF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9idGFpbnMgdGhlIHVzZXIgZW1haWwgdGhhdCBjb3JyZXNwb25kcyB0byBhIGdpdmVuIFVSTFxyXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHVzZXJFbWFpbCBUaGUgdXNlciBlbWFpbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJFbWFpbEZyb21VUkwodXNlclVSTCkge1xyXG4gIGxldCB1cmwgPSBkaXZpZGVVUkwodXNlclVSTCk7XHJcbiAgcmV0dXJuIHVybC5pZGVudGl0eS5yZXBsYWNlKCcvJywgJycpICsgJ0AnICsgdXJsLmRvbWFpbjsgLy8gaWRlbnRpdHkgZmllbGQgaGFzICcvZXhhbXBsZUlEJyBpbnN0ZWFkIG9mICdleGFtcGxlSUQnXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIHVzZXIgaWRlbnRpZmllciBpcyBhbHJlYWR5IGluIHRoZSBVUkwgZm9ybWF0LCBpZiBub3QsIGNvbnZlcnQgdG8gVVJMIGZvcm1hdFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaWRlbnRpZmllciAgdXNlciBpZGVudGlmaWVyXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gICB1c2VyVVJMICAgIHRoZSB1c2VyIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1VzZXJVUkwoaWRlbnRpZmllcikge1xyXG5cclxuICAvLyBjaGVjayBpZiB0aGUgaWRlbnRpZmllciBpcyBhbHJlYWR5IGluIHRoZSB1cmwgZm9ybWF0XHJcbiAgaWYgKGlkZW50aWZpZXIuc3Vic3RyaW5nKDAsIDcpID09PSAndXNlcjovLycpIHtcclxuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGlkZW50aWZpZXIpO1xyXG5cclxuICAgIC8vY2hlY2sgaWYgdGhlIHVybCBpcyB3ZWxsIGZvcm1hdGVkXHJcbiAgICBpZiAoZGl2aWRlZFVSTC5kb21haW4gJiYgZGl2aWRlZFVSTC5pZGVudGl0eSkge1xyXG4gICAgICByZXR1cm4gaWRlbnRpZmllcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93ICd1c2VyVVJMIHdpdGggd3JvbmcgZm9ybWF0JztcclxuICAgIH1cclxuXHJcbiAgLy9pZiBub3QsIGNvbnZlcnQgdGhlIHVzZXIgZW1haWwgdG8gVVJMIGZvcm1hdFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZ2V0VXNlclVSTEZyb21FbWFpbChpZGVudGlmaWVyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGFPYmplY3RVUkwodXJsKSB7XHJcbiAgbGV0IHNjaGVtYXNUb0lnbm9yZSA9IFsnZG9tYWluLWlkcCcsICdydW50aW1lJywgJ2RvbWFpbicsICdoeXBlcnR5J107XHJcbiAgbGV0IHNwbGl0VVJMID0gKHVybCkuc3BsaXQoJzovLycpO1xyXG4gIGxldCB1cmxTY2hlbWEgPSBzcGxpdFVSTFswXTtcclxuXHJcbiAgcmV0dXJuIHNjaGVtYXNUb0lnbm9yZS5pbmRleE9mKHVybFNjaGVtYSkgPT09IC0xO1xyXG59XHJcbiJdfQ==

//# sourceMappingURL=PolicyEngine.js.map
