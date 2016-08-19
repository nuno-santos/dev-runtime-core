"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_utils=require("../utils/utils"),_Operators=require("./Operators"),_Operators2=_interopRequireDefault(_Operators),Rule=function(){function e(t,r,i,s,a){(0,_classCallCheck3.default)(this,e),this.operators=new _Operators2.default,this.authorise=t,this.condition=r,this.priority=i,this.scope=s,this.target=a}return(0,_createClass3.default)(e,[{key:"evaluate",value:function(e,t){var r=void 0;switch(this.scope){case"global":break;case"hyperty":if((0,_utils.isDataObjectURL)(t.from)){var i=e.runtimeRegistry.getReporterURLSynchonous((0,_utils.removePathFromURL)(t.from));void 0!==i&&(r=e.runtimeRegistry.getHypertyName(i))}else"hyperty"===t.from.split("://")[0]&&(r=e.runtimeRegistry.getHypertyName((0,_utils.removePathFromURL)(t.from)));if(r===this.target)break;if((0,_utils.isDataObjectURL)(t.to)){var s=e.runtimeRegistry.getReporterURLSynchonous((0,_utils.removePathFromURL)(t.to));void 0!==s&&(r=e.runtimeRegistry.getHypertyName(s))}else"hyperty"===t.to.split("://")[0]&&(r=e.runtimeRegistry.getHypertyName((0,_utils.removePathFromURL)(t.to)));if(r===this.target)break;return"Not Applicable";case"user":var a=void 0;if((0,_utils.isDataObjectURL)(t.from)){var o=e.runtimeRegistry.getReporterURLSynchonous((0,_utils.removePathFromURL)(t.from));a=e.runtimeRegistry.getHypertyOwner(o)}else"hyperty"===t.from.split("://")[0]&&(a=e.runtimeRegistry.getHypertyOwner((0,_utils.removePathFromURL)(t.from)));if(void 0!==a&&(a=(0,_utils.getUserEmailFromURL)(a)),a===this.target)break;if((0,_utils.isDataObjectURL)(t.to)){var l=e.runtimeRegistry.getReporterURLSynchonous((0,_utils.removePathFromURL)(t.to));a=e.runtimeRegistry.getHypertyOwner(l),void 0!==a&&(a=(0,_utils.getUserEmailFromURL)(a))}else"hyperty"===t.to.split("://")[0]&&(a=e.runtimeRegistry.getHypertyOwner((0,_utils.removePathFromURL)(t.to)),void 0!==a&&(a=(0,_utils.getUserEmailFromURL)(a)));if(a===this.target)break;return"Not Applicable"}return this.condition.isApplicable(e,t,this.scope,this.target)?this.authorise:"Not Applicable"}}]),e}();exports.default=Rule,module.exports=exports.default;
//# sourceMappingURL=Rule.js.map