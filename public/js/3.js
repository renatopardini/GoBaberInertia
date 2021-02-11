(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/Assets/logo.svg":
/*!**************************************!*\
  !*** ./resources/js/Assets/logo.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.svg?a49b07ec538713cf0e3910693544c7be";

/***/ }),

/***/ "./resources/js/Assets/sign-in-background.png":
/*!****************************************************!*\
  !*** ./resources/js/Assets/sign-in-background.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sign-in-background.png?6eac314f78fe224c4d769fb646523773";

/***/ }),

/***/ "./resources/js/Components/Button/index.js":
/*!*************************************************!*\
  !*** ./resources/js/Components/Button/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./resources/js/Components/Button/styled.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Container"], _extends({
    type: "button"
  }, props), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./resources/js/Components/Button/styled.js":
/*!**************************************************!*\
  !*** ./resources/js/Components/Button/styled.js ***!
  \**************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    \n    background: #ff9000;\n    height: 56px;\n    border-radius: 10px;\n    border: 0;\n    padding: 0 16px;\n    width:100%;\n    font-weight: 500;\n    margin-top: 16px;\n    transition: background-color 0.2s;\n\n    &:hover{\n        background: ", ";\n    }\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject(), Object(polished__WEBPACK_IMPORTED_MODULE_1__["shade"])(0.2, '#ff9000'));

/***/ }),

/***/ "./resources/js/Components/Input/index.js":
/*!************************************************!*\
  !*** ./resources/js/Components/Input/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./resources/js/Components/Input/styled.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Input = function Input(_ref) {
  var register = _ref.register,
      Icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["register", "icon"]);

  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var teste = function teste() {
    return inputRef;
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFilled = _useState4[0],
      setIsFilled = _useState4[1];

  var handleInputBlur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var _inputRef$current;

    setIsFocused(false);
    setIsFilled((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.value);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    isFilled: isFilled,
    isFocused: isFocused
  }, Icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 20
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    onBlur: handleInputBlur,
    ref: teste()
  }, props)));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./resources/js/Components/Input/styled.js":
/*!*************************************************!*\
  !*** ./resources/js/Components/Input/styled.js ***!
  \*************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        color: #ff9000;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        color: #ff9000;\n        border-color: #ff9000;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: #232129;\n    border-radius: 10px;\n    padding: 10px;\n    width:100%;\n\n    border: 2px solid #232129;\n    color: #666360;\n\n    display: flex;\n    align-items: center;\n\n    & + div {\n        margin-top: 8px;\n    }\n\n    ", "\n\n    ", "\n\n    input {\n        flex:1;\n        background: transparent;\n        border: 0;\n        color: #f4ede8;\n\n        &::placeholder{\n            color: #666360;\n        }\n    }\n\n    svg{\n        margin-right: 16px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.isFocused && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
}, function (props) {
  return props.isFilled && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
});

/***/ }),

/***/ "./resources/js/Pages/SignIn/index.js":
/*!********************************************!*\
  !*** ./resources/js/Pages/SignIn/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _Assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Assets/logo.svg */ "./resources/js/Assets/logo.svg");
/* harmony import */ var _Assets_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Input */ "./resources/js/Components/Input/index.js");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Button */ "./resources/js/Components/Button/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./resources/js/Pages/SignIn/styles.js");








var SignIn = function SignIn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Content"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Assets_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    title: "GoBarber"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Fa\xE7a seu logon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "email",
    icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiMail"],
    type: "text",
    placeholder: "E-mail"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "password",
    icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiLock"],
    type: "password",
    placeholder: "Senha"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit"
  }, "Entrar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "forgot"
  }, "Esqueci minha senha")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiLogIn"], null), "Criar conta")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Background"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./resources/js/Pages/SignIn/styles.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/SignIn/styles.js ***!
  \*********************************************/
/*! exports provided: Container, Content, Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _Assets_sign_in_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Assets/sign-in-background.png */ "./resources/js/Assets/sign-in-background.png");
/* harmony import */ var _Assets_sign_in_background_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Assets_sign_in_background_png__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n    background: url(", ") no-repeat center;\n    background-size: cover;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    place-content: center;\n\n    width: 100%;\n    max-width: 700px;\n\n    form {\n        margin: 80px 0;\n        width: 340px;\n        text-align: center;\n\n        h1 {\n            margin-bottom: 24px;\n        }\n\n        a {\n            color: #f4ede8;\n            display: block;\n            margin-top: 24px;\n            text-decoration: none;\n            transition: color 0.2s;\n\n            &:hover {\n                color: ", ";\n            }\n        }\n    }\n\n    > a{\n        color: #ff9000;\n        display: block;\n        margin-top: 24px;\n        text-decoration: none;\n        transition: color 0.2s;\n\n        display: flex;\n        align-items: center;\n\n        svg{\n            margin-right: 16px;\n        }\n\n        &:hover {\n            color: ", ";\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 100vh;\n    display: flex;\n    align-items: stretch;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), Object(polished__WEBPACK_IMPORTED_MODULE_2__["shade"])(0.2, '#f4ede8'), Object(polished__WEBPACK_IMPORTED_MODULE_2__["shade"])(0.2, '#ff9000'));
var Background = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), _Assets_sign_in_background_png__WEBPACK_IMPORTED_MODULE_3___default.a);

/***/ }),

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

/***/ })

}]);