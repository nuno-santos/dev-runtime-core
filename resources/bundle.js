(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var n;n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.activate = e();
  }
})(function () {
  return (function e(n, t, o) {
    function i(r, a) {
      if (!t[r]) {
        if (!n[r]) {
          var c = "function" == typeof require && require;if (!a && c) return c(r, !0);if (s) return s(r, !0);var u = new Error("Cannot find module '" + r + "'");throw (u.code = "MODULE_NOT_FOUND", u);
        }var d = t[r] = { exports: {} };n[r][0].call(d.exports, function (e) {
          var t = n[r][1][e];return i(t ? t : e);
        }, d, d.exports, e, n, t, o);
      }return t[r].exports;
    }for (var s = "function" == typeof require && require, r = 0; r < o.length; r++) i(o[r]);return i;
  })({ 1: [function (e, n, t) {
      "use strict";function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
      }function i(e, n, t) {
        return { name: "VertxProtoStub", instance: new r(e, n, t) };
      }Object.defineProperty(t, "__esModule", { value: !0 });var s = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var o = n[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }return function (n, t, o) {
          return t && e(n.prototype, t), o && e(n, o), n;
        };
      })();t["default"] = i;var r = (function () {
        function e(n, t, i) {
          o(this, e);var s = this;this._id = 0, this._continuousOpen = !0, this._runtimeProtoStubURL = n, this._bus = t, this._config = i, this._runtimeSessionURL = i.runtimeURL, this._reOpen = !1, t.addListener("*", function (e) {
            s._open(function () {
              s._sock.send(JSON.stringify(e));
            });
          });
        }return s(e, [{ key: "connect", value: function value() {
            var e = this;e._continuousOpen = !0, e._open(function () {});
          } }, { key: "disconnect", value: function value() {
            var e = this;e._continuousOpen = !1, e._sock && e._sendClose();
          } }, { key: "_sendOpen", value: function value(e) {
            var n = this;n._id++;var t = { id: n._id, type: "open", from: n._runtimeSessionURL, to: "mn:/session" };n._reOpen && (t.type = "re-open");var o = !1;n._sessionCallback = function (i) {
              "response" === i.type & i.id === t.id && (o = !0, 200 === i.body.code ? (i.body.runtimeToken && (n._reOpen = !0, n._runtimeSessionURL = n._config.runtimeURL + "/" + i.body.runtimeToken), n._sendStatus("connected"), e()) : n._sendStatus("disconnected", i.body.desc));
            }, n._sock.send(JSON.stringify(t)), setTimeout(function () {
              o || n._sendStatus("disconnected", "Timeout from mn:/session");
            }, 3e3);
          } }, { key: "_sendClose", value: function value() {
            var e = this;e._id++;var n = { id: e._id, type: "close", from: e._runtimeSessionURL, to: "mn:/session" };e._reOpen = !1, e._runtimeSessionURL = e._config._runtimeURL, e._sock.send(JSON.stringify(n));
          } }, { key: "_sendStatus", value: function value(e, n) {
            var t = this,
                o = { type: "update", from: t._runtimeProtoStubURL, to: t._runtimeProtoStubURL + "/status", body: { value: e } };n && (o.body.desc = n), t._bus.postMessage(o);
          } }, { key: "_waitReady", value: function value(e) {
            var n = this;1 === n._sock.readyState ? e() : setTimeout(function () {
              n._waitReady(e);
            });
          } }, { key: "_open", value: function value(e) {
            var n = this;this._continuousOpen && (n._sock ? n._waitReady(e) : ("ws" === n._config.url.substring(0, 2) ? n._sock = new WebSocket(n._config.url) : n._sock = new SockJS(n._config.url), n._sock.onopen = function () {
              n._sendOpen(function () {
                e();
              });
            }, n._sock.onmessage = function (e) {
              var t = JSON.parse(e.data);"mn:/session" === t.from ? n._sessionCallback && n._sessionCallback(t) : n._bus.postMessage(t);
            }, n._sock.onclose = function (e) {
              var t = void 0;t = 1e3 === e.code ? "Normal closure, meaning that the purpose for which the connection was established has been fulfilled." : 1001 === e.code ? "An endpoint is 'going away', such as a server going down or a browser having navigated away from a page." : 1002 === e.code ? "An endpoint is terminating the connection due to a protocol error" : 1003 === e.code ? "An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message)." : 1004 === e.code ? "Reserved. The specific meaning might be defined in the future." : 1005 === e.code ? "No status code was actually present." : 1006 === e.code ? "The connection was closed abnormally, e.g., without sending or receiving a Close control frame" : 1007 === e.code ? "An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message)." : 1008 === e.code ? 'An endpoint is terminating the connection because it has received a message that "violates its policy". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.' : 1009 === e.code ? "An endpoint is terminating the connection because it has received a message that is too big for it to process." : 1010 === e.code ? "An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: " + e.reason : 1011 === e.code ? "A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request." : 1015 === e.code ? "The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)." : "Unknown reason", delete n._sock, n._sendStatus("disconnected", t);
            }));
          } }, { key: "config", get: function get() {
            return this._config;
          } }, { key: "runtimeSession", get: function get() {
            return this._runtimeSessionURL;
          } }]), e;
      })();n.exports = t["default"];
    }, {}] }, {}, [1])(1);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});