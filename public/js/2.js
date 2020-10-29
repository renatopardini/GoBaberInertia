(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/Shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styled_Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Styled/Global */ "./resources/js/Styled/Global.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled_Global__WEBPACK_IMPORTED_MODULE_1__["default"], null), children);
});

/***/ }),

/***/ "./resources/js/Styled/Global.js":
/*!***************************************!*\
  !*** ./resources/js/Styled/Global.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    *{\n        margin: 0;\n        padding:0;\n        box-sizing: border-box;\n        outline: 0;\n    }\n\n    body{\n        background: #312E38;\n        color: #fff;\n        -webkin-font-smoothing: antialiased;\n    }\n\n    body, input, button {\n        font-family: 'Roboto Slab', serif;\n        font-size: 16px;\n    }\n\n    h1,h2,h3,h4,h5,h6, strong {\n        font-weight: 500;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject()));

/***/ }),

/***/ "./vendor/tightenco/ziggy/src/js/UrlBuilder.js":
/*!*****************************************************!*\
  !*** ./vendor/tightenco/ziggy/src/js/UrlBuilder.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UrlBuilder = /*#__PURE__*/function () {
  function UrlBuilder(name, absolute, ziggyObject) {
    _classCallCheck(this, UrlBuilder);

    this.name = name;
    this.ziggy = ziggyObject;
    this.route = this.ziggy.namedRoutes[this.name];

    if (typeof this.name === 'undefined') {
      throw new Error('Ziggy Error: You must provide a route name');
    } else if (typeof this.route === 'undefined') {
      throw new Error("Ziggy Error: route '".concat(this.name, "' is not found in the route list"));
    }

    this.absolute = typeof absolute === 'undefined' ? true : absolute;
    this.domain = this.setDomain();
    this.path = this.route.uri.replace(/^\//, '');
  }

  _createClass(UrlBuilder, [{
    key: "setDomain",
    value: function setDomain() {
      if (!this.absolute) return '/';
      if (!this.route.domain) return this.ziggy.baseUrl.replace(/\/?$/, '/');
      var host = (this.route.domain || this.ziggy.baseDomain).replace(/\/+$/, '');
      if (this.ziggy.basePort && host.replace(/\/+$/, '') === this.ziggy.baseDomain.replace(/\/+$/, '')) host = this.ziggy.baseDomain + ':' + this.ziggy.basePort;
      return this.ziggy.baseProtocol + '://' + host + '/';
    }
  }, {
    key: "construct",
    value: function construct() {
      return this.domain + this.path;
    }
  }]);

  return UrlBuilder;
}();

/* harmony default export */ __webpack_exports__["default"] = (UrlBuilder);

/***/ }),

/***/ "./vendor/tightenco/ziggy/src/js/route.js":
/*!************************************************!*\
  !*** ./vendor/tightenco/ziggy/src/js/route.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return route; });
/* harmony import */ var _UrlBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UrlBuilder */ "./vendor/tightenco/ziggy/src/js/UrlBuilder.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Router = /*#__PURE__*/function (_String) {
  _inherits(Router, _String);

  var _super = _createSuper(Router);

  function Router(name, params, absolute) {
    var _this;

    var customZiggy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Router);

    _this = _super.call(this);
    _this.name = name;
    _this.absolute = absolute;
    _this.ziggy = customZiggy ? customZiggy : Ziggy;
    _this.urlBuilder = _this.name ? new _UrlBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](name, absolute, _this.ziggy) : null;
    _this.template = _this.urlBuilder ? _this.urlBuilder.construct() : '';
    _this.urlParams = _this.normalizeParams(params);
    _this.queryParams = {};
    _this.hydrated = '';
    return _this;
  }

  _createClass(Router, [{
    key: "normalizeParams",
    value: function normalizeParams(params) {
      if (typeof params === 'undefined') return {}; // If you passed in a string or integer, wrap it in an array

      params = _typeof(params) !== 'object' ? [params] : params; // If the tags object contains an ID and there isn't an ID param in the
      // url template, they probably passed in a single model object and we should
      // wrap this in an array. This could be slightly dangerous and I want to find
      // a better solution for this rare case.

      if (params.hasOwnProperty('id') && this.template.indexOf('{id}') == -1) {
        params = [params.id];
      }

      this.numericParamIndices = Array.isArray(params);
      return Object.assign({}, params);
    }
  }, {
    key: "with",
    value: function _with(params) {
      this.urlParams = this.normalizeParams(params);
      return this;
    }
  }, {
    key: "withQuery",
    value: function withQuery(params) {
      Object.assign(this.queryParams, params);
      return this;
    }
  }, {
    key: "hydrateUrl",
    value: function hydrateUrl() {
      var _this2 = this;

      if (this.hydrated) return this.hydrated;
      var hydrated = this.template.replace(/{([^}]+)}/gi, function (tag, i) {
        var keyName = _this2.trimParam(tag),
            defaultParameter,
            tagValue;

        if (_this2.ziggy.defaultParameters.hasOwnProperty(keyName)) {
          defaultParameter = _this2.ziggy.defaultParameters[keyName];
        } // If a default parameter exists, and a value wasn't
        // provided for it manually, use the default value


        if (defaultParameter && !_this2.urlParams[keyName]) {
          delete _this2.urlParams[keyName];
          return defaultParameter;
        } // We were passed an array, shift the value off the
        // object and return that value to the route


        if (_this2.numericParamIndices) {
          _this2.urlParams = Object.values(_this2.urlParams);
          tagValue = _this2.urlParams.shift();
        } else {
          tagValue = _this2.urlParams[keyName];
          delete _this2.urlParams[keyName];
        } // The value is null or defined; is this param
        // optional or not


        if (tagValue == null) {
          if (tag.indexOf('?') === -1) {
            throw new Error("Ziggy Error: '" + keyName + "' key is required for route '" + _this2.name + "'");
          } else {
            return '';
          }
        } // If an object was passed and has an id, return it


        if (tagValue.id) {
          return encodeURIComponent(tagValue.id);
        }

        return encodeURIComponent(tagValue);
      });

      if (this.urlBuilder != null && this.urlBuilder.path !== '') {
        hydrated = hydrated.replace(/\/+$/, '');
      }

      this.hydrated = hydrated;
      return this.hydrated;
    }
  }, {
    key: "matchUrl",
    value: function matchUrl() {
      var windowUrl = window.location.hostname + (window.location.port ? ':' + window.location.port : '') + window.location.pathname; // Strip out optional parameters

      var optionalTemplate = this.template.replace(/(\/\{[^\}]*\?\})/g, '/').replace(/(\{[^\}]*\})/gi, '[^/?]+').replace(/\/?$/, '').split('://')[1];
      var searchTemplate = this.template.replace(/(\{[^\}]*\})/gi, '[^/?]+').split('://')[1];
      var urlWithTrailingSlash = windowUrl.replace(/\/?$/, '/');
      var regularSearch = new RegExp('^' + searchTemplate + '/$').test(urlWithTrailingSlash);
      var optionalSearch = new RegExp('^' + optionalTemplate + '/$').test(urlWithTrailingSlash);
      return regularSearch || optionalSearch;
    }
  }, {
    key: "constructQuery",
    value: function constructQuery() {
      if (Object.keys(this.queryParams).length === 0 && Object.keys(this.urlParams).length === 0) {
        return '';
      }

      var remainingParams = Object.assign(this.urlParams, this.queryParams);
      return Object(qs__WEBPACK_IMPORTED_MODULE_1__["stringify"])(remainingParams, {
        encodeValuesOnly: true,
        skipNulls: true,
        addQueryPrefix: true,
        arrayFormat: 'indices'
      });
    }
  }, {
    key: "current",
    value: function current() {
      var _this3 = this;

      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var routeNames = Object.keys(this.ziggy.namedRoutes);
      var currentRoute = routeNames.filter(function (name) {
        if (_this3.ziggy.namedRoutes[name].methods.indexOf('GET') === -1) {
          return false;
        }

        return new Router(name, undefined, undefined, _this3.ziggy).matchUrl();
      })[0];

      if (name) {
        var pattern = new RegExp('^' + name.replace('.', '\\.').replace('*', '.*') + '$', 'i');
        return pattern.test(currentRoute);
      }

      return currentRoute;
    }
  }, {
    key: "check",
    value: function check(name) {
      var routeNames = Object.keys(this.ziggy.namedRoutes);
      return routeNames.includes(name);
    }
  }, {
    key: "extractParams",
    value: function extractParams(uri, template, delimiter) {
      var _this4 = this;

      var uriParts = uri.split(delimiter);
      var templateParts = template.split(delimiter);
      return templateParts.reduce(function (params, param, i) {
        return param.indexOf('{') === 0 && param.indexOf('}') !== -1 && uriParts[i] ? Object.assign(params, _defineProperty({}, _this4.trimParam(param), uriParts[i])) : params;
      }, {});
    }
  }, {
    key: "parse",
    value: function parse() {
      this["return"] = this.hydrateUrl() + this.constructQuery();
    }
  }, {
    key: "url",
    value: function url() {
      this.parse();
      return this["return"];
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.url();
    }
  }, {
    key: "trimParam",
    value: function trimParam(param) {
      return param.replace(/{|}|\?/g, '');
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.url();
    }
  }, {
    key: "params",
    get: function get() {
      var namedRoute = this.ziggy.namedRoutes[this.current()];
      return Object.assign(this.extractParams(window.location.hostname, namedRoute.domain || '', '.'), this.extractParams(window.location.pathname.slice(1), namedRoute.uri, '/'));
    }
  }]);

  return Router;
}( /*#__PURE__*/_wrapNativeSuper(String));

function route(name, params, absolute, customZiggy) {
  return new Router(name, params, absolute, customZiggy);
}

/***/ })

}]);