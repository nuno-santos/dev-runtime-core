"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),BloomFilter=function(){function e(t,r){(0,_classCallCheck3.default)(this,e);var a,i="undefined"!=typeof ArrayBuffer;"number"!=typeof t&&(a=t,t=32*a.length);var l=Math.ceil(t/32),s=-1;if(this.m=t=32*l,this.k=r,i){var n=1<<Math.ceil(Math.log(Math.ceil(Math.log(t)/Math.LN2/8))/Math.LN2),u=(1===n?Uint8Array:2===n?Uint16Array:Uint32Array,new ArrayBuffer(n*r));if(this.buckets=new Int32Array(l),a)for(;++s<l;)buckets[s]=a[s];this._locations=new Array(u)}else{if(this.buckets=[],a)for(;++s<l;)buckets[s]=a[s];else for(;++s<l;)buckets[s]=0;this._locations=[]}}return(0,_createClass3.default)(e,[{key:"locations",value:function(e){for(var t=this.k,r=this.m,a=this._locations,i=this.fnv1a(e),l=this.fnv1ab(i),s=i%r,n=0;n<t;++n)a[n]=s<0?s+r:s,s=(s+l)%r;return a}},{key:"add",value:function(e){for(var t=this.locations(e+""),r=this.k,a=this.buckets,i=0;i<r;++i)a[Math.floor(t[i]/32)]|=1<<t[i]%32}},{key:"test",value:function(e){for(var t=this.locations(e+""),r=this.k,a=this.buckets,i=0;i<r;++i){var l=t[i];if(0===(a[Math.floor(l/32)]&1<<l%32))return!1}return!0}},{key:"addBloomFilter",value:function(e){for(var t=this.buckets,r=e.buckets,a=0,i=t.length;a<i;++a)t[a]=t[a]|r[a]}},{key:"size",value:function(){for(var e=this.buckets,t=0,r=0,a=e.length;r<a;++r)t+=this.popcnt(e[r]);return-this.m*Math.log(1-t/this.m)/this.k}},{key:"popcnt",value:function(e){return e-=e>>1&1431655765,e=(858993459&e)+(e>>2&858993459),16843009*(e+(e>>4)&252645135)>>24}},{key:"fnv1a",value:function(e){for(var t=2166136261,r=0,a=e.length;r<a;++r){var i=e.charCodeAt(r),l=65280&i;l&&(t=this.fnvmultiply(t^l>>8)),t=this.fnvmultiply(t^255&i)}return this.fnvmix(t)}},{key:"fnvmultiply",value:function(e){return e+(e<<1)+(e<<4)+(e<<7)+(e<<8)+(e<<24)}},{key:"fnv1ab",value:function(e){return this.fnvmix(this.fnvmultiply(e))}},{key:"fnvmix",value:function(e){return e+=e<<13,e^=e>>>7,e+=e<<3,e^=e>>>17,e+=e<<5,4294967295&e}}]),e}();exports.default=BloomFilter,module.exports=exports.default;
//# sourceMappingURL=BloomFilter.js.map
