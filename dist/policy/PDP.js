"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_Operators=require("./Operators"),_Operators2=_interopRequireDefault(_Operators),_RuntimeCoreCtx=require("./context/RuntimeCoreCtx"),_RuntimeCoreCtx2=_interopRequireDefault(_RuntimeCoreCtx),PDP=function(){function e(t){(0,_classCallCheck3.default)(this,e),this.context=t,this.operators=new _Operators2.default}return(0,_createClass3.default)(e,[{key:"applyPolicies",value:function(e,t){var r=this.evaluateSPPolicy(e,t.serviceProviderPolicy);return this.context instanceof _RuntimeCoreCtx2.default&&(r||"Not Applicable"===r)&&(r=this.evaluateUserPolicy(e,t.userPolicy)),r}},{key:"evaluateSPPolicy",value:function(e,t){var r=void 0;return r=t?t.evaluate(this.context,e):"Not Applicable"}},{key:"evaluateUserPolicy",value:function(e,t){var r=void 0;if(void 0!==t){var a=this.context.userPolicies[t];r=a?a.evaluate(this.context,e):"Not Applicable"}else r="Not Applicable";return r}},{key:"context",get:function(){return this._context},set:function(e){this._context=e}},{key:"operators",get:function(){return this._operators},set:function(e){this._operators=e}}]),e}();exports.default=PDP,module.exports=exports.default;
//# sourceMappingURL=PDP.js.map