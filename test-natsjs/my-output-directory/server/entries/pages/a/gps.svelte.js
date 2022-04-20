import { c as create_ssr_component, s as setContext, a as createEventDispatcher, g as getContext, o as onDestroy, v as validate_component } from "../../../chunks/index-f61de1dc.js";
import L from "leaflet";
import require$$1 from "http";
import require$$2 from "https";
import require$$0 from "url";
import require$$3 from "stream";
import require$$4 from "assert";
import require$$8 from "zlib";
import { connect, JSONCodec } from "nats.ws";
import { S as SimpleAutocomplete } from "../../../chunks/SimpleAutocomplete-26851c59.js";
class EventBridge {
  constructor(entity, dispatch, events2 = []) {
    this.entity = entity;
    this.eventHandlers = [];
    if (events2) {
      const eventMap = {};
      events2.forEach((event) => {
        if (!(event in eventMap)) {
          const handler = function(e) {
            dispatch(event, e);
          };
          this.eventHandlers.push({
            event,
            handler
          });
          entity.on(event, handler);
          eventMap[event] = handler;
        }
      });
    }
  }
  unregister() {
    this.eventHandlers.forEach((entry) => {
      this.entity.off(entry.event, entry.handler);
    });
  }
}
const LeafletMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = {} } = $$props;
  let { events: events2 = [] } = $$props;
  let map = null;
  setContext(L, { getMap: () => map });
  createEventDispatcher();
  function getMap() {
    return map;
  }
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.events === void 0 && $$bindings.events && events2 !== void 0)
    $$bindings.events(events2);
  if ($$props.getMap === void 0 && $$bindings.getMap && getMap !== void 0)
    $$bindings.getMap(getMap);
  return `<div style="${"height:100%; width:100%;"}">${``}</div>`;
});
var axios$1 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap2() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return toString.call(val) === "[object FormData]";
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return toString.call(val) === "[object URLSearchParams]";
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$f = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$e = utils$f;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$3 = function buildURL(url2, params, paramsSerializer) {
  if (!params) {
    return url2;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$e.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$e.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$e.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$e.forEach(val, function parseValue(v) {
        if (utils$e.isDate(v)) {
          v = v.toISOString();
        } else if (utils$e.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url2.indexOf("#");
    if (hashmarkIndex !== -1) {
      url2 = url2.slice(0, hashmarkIndex);
    }
    url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
};
var utils$d = utils$f;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$d.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$c = utils$f;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$c.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var enhanceError$3 = function enhanceError(error, config, code, request2, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var enhanceError$2 = enhanceError$3;
var createError$3 = function createError(message, config, code, request2, response) {
  var error = new Error(message);
  return enhanceError$2(error, config, code, request2, response);
};
var createError$2 = createError$3;
var settle$2 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$2("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$b = utils$f;
var cookies$1 = utils$b.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$b.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$b.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$b.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$2 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$a = utils$f;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils$a.forEach(headers.split("\n"), function parser(line) {
    i = line.indexOf(":");
    key = utils$a.trim(line.substr(0, i)).toLowerCase();
    val = utils$a.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$9 = utils$f;
var isURLSameOrigin$1 = utils$9.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url2) {
    var href = url2;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$9.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$4(message) {
  this.message = message;
}
Cancel$4.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$4.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$4;
var utils$8 = utils$f;
var settle$1 = settle$2;
var cookies = cookies$1;
var buildURL$2 = buildURL$3;
var buildFullPath$1 = buildFullPath$2;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError$1 = createError$3;
var defaults$5 = defaults_1;
var Cancel$3 = Cancel_1;
var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$8.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath$1(config.baseURL, config.url);
    request2.open(config.method.toUpperCase(), buildURL$2(fullPath, config.params, config.paramsSerializer), true);
    request2.timeout = config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config,
        request: request2
      };
      settle$1(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError$1("Request aborted", config, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(createError$1("Network Error", config, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      var transitional2 = config.transitional || defaults$5.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError$1(timeoutErrorMessage, config, transitional2.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$8.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$8.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$8.isUndefined(config.withCredentials)) {
      request2.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request2.addEventListener("progress", config.onDownloadProgress);
    }
    if (typeof config.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$3("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var followRedirects = { exports: {} };
var debug$1;
var debug_1 = function() {
  if (!debug$1) {
    try {
      debug$1 = require("debug")("follow-redirects");
    } catch (error) {
    }
    if (typeof debug$1 !== "function") {
      debug$1 = function() {
      };
    }
  }
  debug$1.apply(null, arguments);
};
var url$1 = require$$0;
var URL = url$1.URL;
var http$1 = require$$1;
var https$1 = require$$2;
var Writable = require$$3.Writable;
var assert = require$$4;
var debug = debug_1;
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = /* @__PURE__ */ Object.create(null);
events.forEach(function(event) {
  eventHandlers[event] = function(arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
function RedirectableRequest(options, responseCallback) {
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];
  if (responseCallback) {
    this.on("response", responseCallback);
  }
  var self = this;
  this._onNativeResponse = function(response) {
    self._processResponse(response);
  };
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
  abortRequest(this._currentRequest);
  this.emit("abort");
};
RedirectableRequest.prototype.write = function(data2, encoding, callback) {
  if (this._ending) {
    throw new WriteAfterEndError();
  }
  if (!(typeof data2 === "string" || typeof data2 === "object" && "length" in data2)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }
  if (data2.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  if (this._requestBodyLength + data2.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data2.length;
    this._requestBodyBuffers.push({ data: data2, encoding });
    this._currentRequest.write(data2, encoding, callback);
  } else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};
RedirectableRequest.prototype.end = function(data2, encoding, callback) {
  if (typeof data2 === "function") {
    callback = data2;
    data2 = encoding = null;
  } else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }
  if (!data2) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  } else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data2, encoding, function() {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};
RedirectableRequest.prototype.setHeader = function(name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};
RedirectableRequest.prototype.removeHeader = function(name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
  var self = this;
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function() {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }
  function clearTimer() {
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }
  if (callback) {
    this.on("timeout", callback);
  }
  if (this.socket) {
    startTimer(this.socket);
  } else {
    this._currentRequest.once("socket", startTimer);
  }
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);
  return this;
};
[
  "flushHeaders",
  "getHeader",
  "setNoDelay",
  "setSocketKeepAlive"
].forEach(function(method) {
  RedirectableRequest.prototype[method] = function(a, b) {
    return this._currentRequest[method](a, b);
  };
});
["aborted", "connection", "socket"].forEach(function(property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function() {
      return this._currentRequest[property];
    }
  });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
  if (!options.headers) {
    options.headers = {};
  }
  if (options.host) {
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    } else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};
RedirectableRequest.prototype._performRequest = function() {
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }
  var request2 = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url$1.format(this._options);
  request2._redirectable = this;
  for (var e = 0; e < events.length; e++) {
    request2.on(events[e], eventHandlers[events[e]]);
  }
  if (this._isRedirect) {
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      if (request2 === self._currentRequest) {
        if (error) {
          self.emit("error", error);
        } else if (i < buffers.length) {
          var buffer = buffers[i++];
          if (!request2.finished) {
            request2.write(buffer.data, buffer.encoding, writeNext);
          }
        } else if (self._ended) {
          request2.end();
        }
      }
    })();
  }
};
RedirectableRequest.prototype._processResponse = function(response) {
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode
    });
  }
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);
    this._requestBodyBuffers = [];
    return;
  }
  abortRequest(this._currentRequest);
  response.destroy();
  if (++this._redirectCount > this._options.maxRedirects) {
    this.emit("error", new TooManyRedirectsError());
    return;
  }
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
  var currentUrlParts = url$1.parse(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url$1.format(Object.assign(currentUrlParts, { host: currentHost }));
  var redirectUrl;
  try {
    redirectUrl = url$1.resolve(currentUrl, location);
  } catch (cause) {
    this.emit("error", new RedirectionError(cause));
    return;
  }
  debug("redirecting to", redirectUrl);
  this._isRedirect = true;
  var redirectUrlParts = url$1.parse(redirectUrl);
  Object.assign(this._options, redirectUrlParts);
  if (redirectUrlParts.protocol !== currentUrlParts.protocol && redirectUrlParts.protocol !== "https:" || redirectUrlParts.host !== currentHost && !isSubdomain(redirectUrlParts.host, currentHost)) {
    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
  }
  if (typeof this._options.beforeRedirect === "function") {
    var responseDetails = { headers: response.headers };
    try {
      this._options.beforeRedirect.call(null, this._options, responseDetails);
    } catch (err) {
      this.emit("error", err);
      return;
    }
    this._sanitizeOptions(this._options);
  }
  try {
    this._performRequest();
  } catch (cause) {
    this.emit("error", new RedirectionError(cause));
  }
};
function wrap(protocols) {
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024
  };
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function(scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
    function request2(input, options, callback) {
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        } catch (err) {
          input = url$1.parse(urlStr);
        }
      } else if (URL && input instanceof URL) {
        input = urlToOptions(input);
      } else {
        callback = options;
        options = input;
        input = { protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }
    Object.defineProperties(wrappedProtocol, {
      request: { value: request2, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true }
    });
  });
  return exports;
}
function noop() {
}
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}
function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
}
function createErrorType(code, defaultMessage) {
  function CustomError(cause) {
    Error.captureStackTrace(this, this.constructor);
    if (!cause) {
      this.message = defaultMessage;
    } else {
      this.message = defaultMessage + ": " + cause.message;
      this.cause = cause;
    }
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  CustomError.prototype.code = code;
  return CustomError;
}
function abortRequest(request2) {
  for (var e = 0; e < events.length; e++) {
    request2.removeListener(events[e], eventHandlers[events[e]]);
  }
  request2.on("error", noop);
  request2.abort();
}
function isSubdomain(subdomain, domain) {
  const dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
followRedirects.exports = wrap({ http: http$1, https: https$1 });
followRedirects.exports.wrap = wrap;
var data = {
  "version": "0.25.0"
};
var utils$7 = utils$f;
var settle2 = settle$2;
var buildFullPath2 = buildFullPath$2;
var buildURL$1 = buildURL$3;
var http = require$$1;
var https = require$$2;
var httpFollow = followRedirects.exports.http;
var httpsFollow = followRedirects.exports.https;
var url = require$$0;
var zlib = require$$8;
var VERSION$1 = data.version;
var createError2 = createError$3;
var enhanceError$1 = enhanceError$3;
var defaults$4 = defaults_1;
var Cancel$2 = Cancel_1;
var isHttps = /https:?/;
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ":" + proxy.auth.password, "utf8").toString("base64");
    options.headers["Proxy-Authorization"] = "Basic " + base64;
  }
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    var resolve = function resolve2(value) {
      done();
      resolvePromise(value);
    };
    var rejected = false;
    var reject = function reject2(value) {
      done();
      rejected = true;
      rejectPromise(value);
    };
    var data2 = config.data;
    var headers = config.headers;
    var headerNames = {};
    Object.keys(headers).forEach(function storeLowerName(name) {
      headerNames[name.toLowerCase()] = name;
    });
    if ("user-agent" in headerNames) {
      if (!headers[headerNames["user-agent"]]) {
        delete headers[headerNames["user-agent"]];
      }
    } else {
      headers["User-Agent"] = "axios/" + VERSION$1;
    }
    if (data2 && !utils$7.isStream(data2)) {
      if (Buffer.isBuffer(data2))
        ;
      else if (utils$7.isArrayBuffer(data2)) {
        data2 = Buffer.from(new Uint8Array(data2));
      } else if (utils$7.isString(data2)) {
        data2 = Buffer.from(data2, "utf-8");
      } else {
        return reject(createError2("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", config));
      }
      if (config.maxBodyLength > -1 && data2.length > config.maxBodyLength) {
        return reject(createError2("Request body larger than maxBodyLength limit", config));
      }
      if (!headerNames["content-length"]) {
        headers["Content-Length"] = data2.length;
      }
    }
    var auth = void 0;
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password || "";
      auth = username + ":" + password;
    }
    var fullPath = buildFullPath2(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || "http:";
    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(":");
      var urlUsername = urlAuth[0] || "";
      var urlPassword = urlAuth[1] || "";
      auth = urlUsername + ":" + urlPassword;
    }
    if (auth && headerNames.authorization) {
      delete headers[headerNames.authorization];
    }
    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
    var options = {
      path: buildURL$1(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ""),
      method: config.method.toUpperCase(),
      headers,
      agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth
    };
    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }
    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + "_proxy";
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;
        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(",").map(function trim2(s) {
            return s.trim();
          });
          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === "*") {
              return true;
            }
            if (proxyElement[0] === "." && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }
            return parsed.hostname === proxyElement;
          });
        }
        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };
          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(":");
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }
    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.port : "");
      setProxy(options, proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
    }
    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }
    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }
    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted)
        return;
      var stream = res;
      var lastRequest = res.req || req;
      if (res.statusCode !== 204 && lastRequest.method !== "HEAD" && config.decompress !== false) {
        switch (res.headers["content-encoding"]) {
          case "gzip":
          case "compress":
          case "deflate":
            stream = stream.pipe(zlib.createUnzip());
            delete res.headers["content-encoding"];
            break;
        }
      }
      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config,
        request: lastRequest
      };
      if (config.responseType === "stream") {
        response.data = stream;
        settle2(resolve, reject, response);
      } else {
        var responseBuffer = [];
        var totalResponseBytes = 0;
        stream.on("data", function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            rejected = true;
            stream.destroy();
            reject(createError2("maxContentLength size of " + config.maxContentLength + " exceeded", config, null, lastRequest));
          }
        });
        stream.on("aborted", function handlerStreamAborted() {
          if (rejected) {
            return;
          }
          stream.destroy();
          reject(createError2("error request aborted", config, "ERR_REQUEST_ABORTED", lastRequest));
        });
        stream.on("error", function handleStreamError(err) {
          if (req.aborted)
            return;
          reject(enhanceError$1(err, config, null, lastRequest));
        });
        stream.on("end", function handleStreamEnd() {
          try {
            var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (config.responseType !== "arraybuffer") {
              responseData = responseData.toString(config.responseEncoding);
              if (!config.responseEncoding || config.responseEncoding === "utf8") {
                responseData = utils$7.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            reject(enhanceError$1(err, config, err.code, response.request, response));
          }
          settle2(resolve, reject, response);
        });
      }
    });
    req.on("error", function handleRequestError(err) {
      if (req.aborted && err.code !== "ERR_FR_TOO_MANY_REDIRECTS")
        return;
      reject(enhanceError$1(err, config, null, req));
    });
    req.on("socket", function handleRequestSocket(socket) {
      socket.setKeepAlive(true, 1e3 * 60);
    });
    if (config.timeout) {
      var timeout = parseInt(config.timeout, 10);
      if (isNaN(timeout)) {
        reject(createError2("error trying to parse `config.timeout` to int", config, "ERR_PARSE_TIMEOUT", req));
        return;
      }
      req.setTimeout(timeout, function handleRequestTimeout() {
        req.abort();
        var transitional2 = config.transitional || defaults$4.transitional;
        reject(createError2("timeout of " + timeout + "ms exceeded", config, transitional2.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", req));
      });
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (req.aborted)
          return;
        req.abort();
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isStream(data2)) {
      data2.on("error", function handleStreamError(err) {
        reject(enhanceError$1(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data2);
    }
  });
};
var utils$6 = utils$f;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$3;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = http_1;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$6.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional2 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError2(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$5 = utils$f;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$5.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$f;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData2.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$4.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$4.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData2.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$f;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};
var VERSION = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$f;
var buildURL2 = buildURL$3;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(configOrUrl, config) {
  if (typeof configOrUrl === "string") {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  if (!config.url) {
    throw new Error("Provided config url is not valid");
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional2 = config.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  if (!config.url) {
    throw new Error("Provided config url is not valid");
  }
  config = mergeConfig$1(this.defaults, config);
  return buildURL2(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url2, data2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url: url2,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i;
    var l = token._listeners.length;
    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap2(arr) {
    return callback.apply(null, arr);
  };
};
var utils$1 = utils$f;
var isAxiosError = function isAxiosError2(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
};
var utils = utils$f;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults);
axios.Axios = Axios;
axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel$1;
axios.VERSION = data.version;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios$1.exports = axios;
axios$1.exports.default = axios;
const Marker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { getMap } = getContext(L);
  const defaultIcon = L.icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
  let { latLng } = $$props;
  let { zIndexOffset = 0 } = $$props;
  let { icon = defaultIcon } = $$props;
  let { opacity = 1 } = $$props;
  let { options = {} } = $$props;
  let { events: events2 = [] } = $$props;
  let { rotationAngle = 0 } = $$props;
  let { rotationOrigin = "center bottom" } = $$props;
  let marker;
  setContext(L.Layer, { getLayer: () => marker });
  setContext(L.Marker, { getMarker: () => marker });
  const dispatch = createEventDispatcher();
  let eventBridge;
  onDestroy(() => {
    eventBridge.unregister();
    marker.removeFrom(getMap());
  });
  function getMarker() {
    return marker;
  }
  if ($$props.latLng === void 0 && $$bindings.latLng && latLng !== void 0)
    $$bindings.latLng(latLng);
  if ($$props.zIndexOffset === void 0 && $$bindings.zIndexOffset && zIndexOffset !== void 0)
    $$bindings.zIndexOffset(zIndexOffset);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.events === void 0 && $$bindings.events && events2 !== void 0)
    $$bindings.events(events2);
  if ($$props.rotationAngle === void 0 && $$bindings.rotationAngle && rotationAngle !== void 0)
    $$bindings.rotationAngle(rotationAngle);
  if ($$props.rotationOrigin === void 0 && $$bindings.rotationOrigin && rotationOrigin !== void 0)
    $$bindings.rotationOrigin(rotationOrigin);
  if ($$props.getMarker === void 0 && $$bindings.getMarker && getMarker !== void 0)
    $$bindings.getMarker(getMarker);
  {
    {
      if (!marker) {
        marker = L.marker(latLng, options).addTo(getMap());
        eventBridge = new EventBridge(marker, dispatch, events2);
      }
      marker.setLatLng(latLng);
      marker.setZIndexOffset(zIndexOffset);
      marker.setIcon(icon);
      marker.setOpacity(opacity);
      marker.setRotationAngle(rotationAngle);
      marker.setRotationOrigin(rotationOrigin);
    }
  }
  return `<div>${marker ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
const TileLayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { getMap } = getContext(L);
  let { url: url2 } = $$props;
  let { wms = false } = $$props;
  let { opacity = 1 } = $$props;
  let { zIndex = 1 } = $$props;
  let { options = {} } = $$props;
  let { events: events2 = [] } = $$props;
  let tileLayer;
  const dispatch = createEventDispatcher();
  let eventBridge;
  onDestroy(() => {
    eventBridge.unregister();
    tileLayer.removeFrom(getMap());
  });
  function getTileLayer() {
    return tileLayer;
  }
  if ($$props.url === void 0 && $$bindings.url && url2 !== void 0)
    $$bindings.url(url2);
  if ($$props.wms === void 0 && $$bindings.wms && wms !== void 0)
    $$bindings.wms(wms);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.events === void 0 && $$bindings.events && events2 !== void 0)
    $$bindings.events(events2);
  if ($$props.getTileLayer === void 0 && $$bindings.getTileLayer && getTileLayer !== void 0)
    $$bindings.getTileLayer(getTileLayer);
  {
    {
      if (!tileLayer) {
        tileLayer = (!wms ? L.tileLayer(url2, options) : L.tileLayer.wms(url2, options)).addTo(getMap());
        eventBridge = new EventBridge(tileLayer, dispatch, events2);
      }
      tileLayer.setUrl(url2);
      tileLayer.setOpacity(opacity);
      tileLayer.setZIndex(zIndex);
    }
  }
  return ``;
});
const LeafletRotatedMarkersExtension = {
  install: () => {
    const proto_initIcon = L.Marker.prototype._initIcon;
    const proto_setPos = L.Marker.prototype._setPos;
    const oldIE = L.DomUtil.TRANSFORM === "msTransform";
    L.Marker.addInitHook(function() {
      const iconOptions = this.options.icon && this.options.icon.options;
      let iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
      if (iconAnchor) {
        iconAnchor = iconAnchor[0] + "px " + iconAnchor[1] + "px";
      }
      this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || "center bottom";
      this.options.rotationAngle = this.options.rotationAngle || 0;
      this.on("drag", function(e) {
        e.target._applyRotation();
      });
    });
    L.Marker.include({
      _initIcon: function() {
        proto_initIcon.call(this);
      },
      _setPos: function(pos) {
        proto_setPos.call(this, pos);
        this._applyRotation();
      },
      _applyRotation: function() {
        if (this.options.rotationAngle) {
          this._icon.style[L.DomUtil.TRANSFORM + "Origin"] = this.options.rotationOrigin;
          if (oldIE) {
            this._icon.style[L.DomUtil.TRANSFORM] = "rotate(" + this.options.rotationAngle + "deg)";
          } else {
            this._icon.style[L.DomUtil.TRANSFORM] += " rotateZ(" + this.options.rotationAngle + "deg)";
          }
        }
      },
      setRotationAngle: function(angle) {
        this.options.rotationAngle = angle;
        this.update();
        return this;
      },
      setRotationOrigin: function(origin) {
        this.options.rotationOrigin = origin;
        this.update();
        return this;
      }
    });
  }
};
LeafletRotatedMarkersExtension.install();
var leaflet = "";
var gps_svelte_svelte_type_style_lang = "";
const css = {
  code: "h4.svelte-3ucu33{font-size:400%;text-align:center}body.svelte-3ucu33{border-style:solid;border-width:1%;background-color:aqua}a.svelte-3ucu33{font-family:'Times New Roman', Times, serif;background-color:black;color:white;border-color:black;border-style:solid;border-width:.005%;font-size:150%}.map.svelte-3ucu33{height:600px;width:auto}.cbo2.svelte-3ucu33{width:20%;font-size:150%;padding-left:2%;padding-top:2%;padding-bottom:0%}",
  map: null
};
const tileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const Gps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { address = "ws://172.16.254.5:443" } = $$props;
  let { subject = "gps.TPV" } = $$props;
  let { paused = false } = $$props;
  let msg = {};
  let nc;
  const IPList = [
    {
      id: 1,
      name: "Skid Steer Local",
      ip: "ws://192.168.10.1:443"
    },
    {
      id: 2,
      name: "Skid Steer Remote",
      ip: "ws://172.16.1.12:443"
    },
    {
      id: 3,
      name: "Tractor one",
      ip: "ws://172.16.254.5:443"
    }
  ];
  let selectedIP = IPList[1];
  async function connect2(address2) {
    if (nc) {
      nc.close();
    }
    nc = await connect({ servers: address2 });
    return nc;
  }
  async function subscribe2(nc2, subject2) {
    const jc = JSONCodec();
    const s = nc2.subscribe(subject2);
    for await (const m of s) {
      if (!paused) {
        msg = jc.decode(m.data);
      }
    }
  }
  const mapOptions = {
    center: [40.42166999136725, -86.91662405049766],
    zoom: 14
  };
  const tileLayerOptions = {
    minZoom: 0,
    maxZoom: 20,
    maxNativeZoom: 19,
    attribution: "\xA9 OpenStreetMap contributors"
  };
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  if ($$props.subject === void 0 && $$bindings.subject && subject !== void 0)
    $$bindings.subject(subject);
  if ($$props.paused === void 0 && $$bindings.paused && paused !== void 0)
    $$bindings.paused(paused);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      connect2(address).then((nc2) => subscribe2(nc2, subject));
    }
    $$rendered = `<title>GPS Page</title>
<body class="${"svelte-3ucu33"}"><a href="${"/a/test"}" class="${"svelte-3ucu33"}">Go to debugger page</a>
	<div class="${"cbo2 svelte-3ucu33"}">Select Machine:
		${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: IPList,
      labelFieldName: "name",
      selectedItem: selectedIP
    }, {
      selectedItem: ($$value) => {
        selectedIP = $$value;
        $$settled = false;
      }
    }, {})}</div>

    <h4 class="${"svelte-3ucu33"}">GPS Tracking</h4>
	<div class="${"map svelte-3ucu33"}">${validate_component(LeafletMap, "LeafletMap").$$render($$result, { options: mapOptions }, {}, {
      default: () => {
        return `${validate_component(TileLayer, "TileLayer").$$render($$result, { url: tileUrl, options: tileLayerOptions }, {}, {})}
			${msg.lat == 0 && msg.lon == 0 ? `return null;` : `${validate_component(Marker, "Marker").$$render($$result, { latLng: [msg.lat, msg.lon] }, {}, {})}`}

			`;
      }
    })}</div>
	<a href="${"/"}" class="${"svelte-3ucu33"}">Go to Main Page</a></body>`;
  } while (!$$settled);
  return $$rendered;
});
export { Gps as default };
