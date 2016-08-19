"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_DenyOverrides=require("./combiningAlgorithms/DenyOverrides"),_DenyOverrides2=_interopRequireDefault(_DenyOverrides),_FirstApplicable=require("./combiningAlgorithms/FirstApplicable"),_FirstApplicable2=_interopRequireDefault(_FirstApplicable),Policy=function(){function e(i,r,t,l){(0,_classCallCheck3.default)(this,e),this.actions=t,this.key=i,this.rules=r,this.combiningAlgorithm=l}return(0,_createClass3.default)(e,[{key:"enforceActions",value:function(e,i,r){for(var t in this.actions)e[this.actions[t]](i,r)}},{key:"evaluate",value:function(e,i){var r=[];for(var t in this.rules)r.push(this.rules[t].evaluate(e,i));return this.combiningAlgorithm.evaluate(r)}},{key:"combiningAlgorithm",get:function(){return this._combiningAlgorithm},set:function(e){if("denyOverrides"===e)this._combiningAlgorithm=new _DenyOverrides2.default;else{if("firstApplicable"!==e)throw Error("Unknown algorithm: "+e);this._combiningAlgorithm=new _FirstApplicable2.default}}}]),e}();exports.default=Policy,module.exports=exports.default;
//# sourceMappingURL=Policy.js.map
