"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function activate(e,t,u){return{name:"ProtoStub",instance:new ProtoStub(e,t,u)}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2);exports.default=activate;var ProtoStub=function(){function e(t,u,a){(0,_classCallCheck3.default)(this,e),this._runtimeProtoStubURL=t,this._bus=u,this._config=a}return(0,_createClass3.default)(e,[{key:"connect",value:function(e){}},{key:"disconnect",value:function(){}},{key:"postMessage",value:function(e){}},{key:"_filter",value:function(e){return!e.body||e.body.via!==this._runtimeProtoStubURL}},{key:"_deliver",value:function(e){e.body||(e.body={}),e.body.via=this._runtimeProtoStubURL,this._bus.postMessage(e)}}]),e}();module.exports=exports.default;
//# sourceMappingURL=ProtoStub.js.map
