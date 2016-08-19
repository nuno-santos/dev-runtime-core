"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),Pipeline=function(){function e(t){(0,_classCallCheck3.default)(this,e);var i=this;i.handlers=[],i.onFail=t}return(0,_createClass3.default)(e,[{key:"process",value:function(e,t){var i=this;if(i.handlers.length>0){var n=new Iterator(i.handlers);n.next(new PipeContext(i,n,e,t))}else t(e)}}]),e}(),PipeContext=function(){function e(t,i,n,l){(0,_classCallCheck3.default)(this,e);var r=this;r._inStop=!1,r._pipeline=t,r._iter=i,r._msg=n,r._onDeliver=l}return(0,_createClass3.default)(e,[{key:"next",value:function(){var e=this;e._inStop||(e._iter.hasNext?e._iter.next(e):e._onDeliver(e._msg))}},{key:"deliver",value:function(){var e=this;e._inStop||(e._inStop=!0,e._onDeliver(e._msg))}},{key:"fail",value:function(e){var t=this;t._inStop||(t._inStop=!0,t._pipeline.onFail&&t._pipeline.onFail(e))}},{key:"pipeline",get:function(){return this._pipeline}},{key:"msg",get:function(){return this._msg},set:function(e){this._msg=e}}]),e}(),Iterator=function(){function e(t){(0,_classCallCheck3.default)(this,e),this._index=-1,this._array=t}return(0,_createClass3.default)(e,[{key:"hasNext",get:function(){return this._index<this._array.length-1}},{key:"next",get:function(){return this._index++,this._array[this._index]}}]),e}();exports.default=Pipeline,module.exports=exports.default;
//# sourceMappingURL=Pipeline.js.map
