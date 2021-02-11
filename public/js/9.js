(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/Assets/sign-up-background.png":
/*!****************************************************!*\
  !*** ./resources/js/Assets/sign-up-background.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sign-up-background.png?c4d8f988b9c6499d56702a398b2f3d8b";

/***/ }),

/***/ "./resources/js/Pages/SignUp/index.js":
/*!********************************************!*\
  !*** ./resources/js/Pages/SignUp/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _Assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Assets/logo.svg */ "./resources/js/Assets/logo.svg");
/* harmony import */ var _Assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Input */ "./resources/js/Components/Input/index.js");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/Button */ "./resources/js/Components/Button/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./resources/js/Pages/SignUp/styles.js");









var SignUp = function SignUp() {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Background"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Content"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    title: "GoBarber"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Fa\xE7a seu cadastro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "name",
    icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiUser"],
    register: register,
    type: "text",
    placeholder: "Nome"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "email",
    icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiMail"],
    register: register,
    type: "text",
    placeholder: "E-mail"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "password",
    icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiLock"],
    register: register,
    type: "password",
    placeholder: "Senha"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit"
  }, "Cadastrar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiArrowLeft"], null), "Voltar para logon"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./resources/js/Pages/SignUp/styles.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/SignUp/styles.js ***!
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
/* harmony import */ var _Assets_sign_up_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Assets/sign-up-background.png */ "./resources/js/Assets/sign-up-background.png");
/* harmony import */ var _Assets_sign_up_background_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Assets_sign_up_background_png__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n    background: url(", ") no-repeat center;\n    background-size: cover;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    place-content: center;\n\n    width: 100%;\n    max-width: 700px;\n\n    form {\n        margin: 80px 0;\n        width: 340px;\n        text-align: center;\n\n        h1 {\n            margin-bottom: 24px;\n        }\n\n        a {\n            color: #f4ede8;\n            display: block;\n            margin-top: 24px;\n            text-decoration: none;\n            transition: color 0.2s;\n\n            &:hover {\n                color: ", ";\n            }\n        }\n    }\n\n    > a{\n        color: #f4ede8;\n        display: block;\n        margin-top: 24px;\n        text-decoration: none;\n        transition: color 0.2s;\n\n        display: flex;\n        align-items: center;\n\n        svg{\n            margin-right: 16px;\n        }\n\n        &:hover {\n            color: ", ";\n        }\n    }\n"]);

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
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), Object(polished__WEBPACK_IMPORTED_MODULE_2__["shade"])(0.2, '#f4ede8'), Object(polished__WEBPACK_IMPORTED_MODULE_2__["shade"])(0.2, '#f4ede8'));
var Background = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), _Assets_sign_up_background_png__WEBPACK_IMPORTED_MODULE_3___default.a);

/***/ })

}]);