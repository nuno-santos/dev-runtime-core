"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_utils=require("../../utils/utils"),CommonCtx=function(){function e(){(0,_classCallCheck3.default)(this,e),this.defaultBehavior=!0,this.groups={}}return(0,_createClass3.default)(e,[{key:"defaultBehavior",get:function(){return this._defaultBehavior},set:function(e){this._defaultBehavior=e}},{key:"date",set:function(e){var t=new Date,i=String(t.getDate());1===i.length&&(i="0"+i);var s=String(t.getMonth()+1);1===s.length&&(s="0"+s),this._date=i+"/"+s+"/"+t.getFullYear()},get:function(){return this._date}},{key:"domain",set:function(e){void 0!==e.message.body.identity&&(this._domain=(0,_utils.divideEmail)(e.message.body.identity.userProfile.username).domain)},get:function(){return this._domain}},{key:"source",set:function(e){void 0!==e.message.body.identity&&(this._source=e.message.body.identity.userProfile.username)},get:function(){var e=this;return e._source}},{key:"time",set:function(e){e=new Date;var t=String(e.getMinutes());1===t.length&&(t="0"+t),this._time=parseInt(String(e.getHours())+t)},get:function(){var e=this;return e._time}},{key:"weekday",set:function(e){this._weekday=String((new Date).getDay())},get:function(){return this._weekday}}]),e}();exports.default=CommonCtx,module.exports=exports.default;
//# sourceMappingURL=CommonCtx.js.map
