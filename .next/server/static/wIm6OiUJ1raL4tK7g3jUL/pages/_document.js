module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/document"
var document_ = __webpack_require__(3);
var document_default = /*#__PURE__*/__webpack_require__.n(document_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(6);

// EXTERNAL MODULE: external "react-jss/lib/JssProvider"
var JssProvider_ = __webpack_require__(7);
var JssProvider_default = /*#__PURE__*/__webpack_require__.n(JssProvider_);

// EXTERNAL MODULE: external "jss"
var external_jss_ = __webpack_require__(4);

// EXTERNAL MODULE: external "jss-rtl"
var external_jss_rtl_ = __webpack_require__(8);
var external_jss_rtl_default = /*#__PURE__*/__webpack_require__.n(external_jss_rtl_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(2);

// CONCATENATED MODULE: ./styleguide/styleguide.js
var _this = undefined;

 // style component theme
//theme

var theme = Object(styles_["createMuiTheme"])({
  direction: 'rtl',
  typography: {
    fontFamily: 'Almoni',
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#684eed'
    },
    secondary: {
      main: '#684eed'
    }
  },
  useAccessability: true,
  toggleAccessability: function toggleAccessability() {
    _this.useAccessability = !_this.useAccessability;
  }
});
// CONCATENATED MODULE: ./styleguide/getPageContext.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var jss = Object(external_jss_["create"])({
  plugins: [].concat(_toConsumableArray(Object(styles_["jssPreset"])().plugins), [external_jss_rtl_default()()])
});

var getPageContext_createPageContext = function createPageContext() {
  return {
    theme: theme,
    //RTL jss preset ... please work
    jss: jss,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new external_jss_["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(styles_["createGenerateClassName"])()
  };
};

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (true) {
    return getPageContext_createPageContext();
  } // Reuse context on the client-side.

  /* eslint-disable no-underscore-dangle */


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = getPageContext_createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
// CONCATENATED MODULE: ./pages/_document.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _document_MyDocument; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var _document_withJssProvider = function withJssProvider(App, pageContext, props) {
  return external_react_default.a.createElement(JssProvider_default.a, {
    registry: pageContext.sheetsRegistry,
    generateClassName: pageContext.generateClassName,
    jss: pageContext.jss
  }, external_react_default.a.createElement(App, _extends({
    pageContext: pageContext
  }, props)));
};

var _document_MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyDocument).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("html", {
        style: {
          height: '100%'
        }
      }, external_react_default.a.createElement(document_["Head"], null, external_react_default.a.createElement("meta", {
        charSet: "utf-8",
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), external_react_default.a.createElement("meta", {
        charSet: "utf-8",
        httpEquiv: "X-UA-Compatible",
        content: "IE=11"
      }), external_react_default.a.createElement("meta", {
        httpEquiv: "Pragma",
        content: "no-cache"
      }), external_react_default.a.createElement("meta", {
        httpEquiv: "Expires",
        content: "-1"
      }), external_react_default.a.createElement("meta", {
        name: "robots",
        content: "noindex"
      }), external_react_default.a.createElement("meta", {
        name: "googlebot",
        content: "noindex"
      }), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1,  minimum-scale=1,user-scalable=yes"
      }), external_react_default.a.createElement("style", null, "\n              #__next{\n                height: 100%;\n                width: 100%;\n                \n            "), this.props.styleTags), external_react_default.a.createElement("body", {
        dir: "rtl",
        style: {
          height: '100%',
          margin: 0
        }
      }, external_react_default.a.createElement(document_["Main"], null), external_react_default.a.createElement(document_["NextScript"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;
      var sheet = new external_styled_components_["ServerStyleSheet"](); // for styled-components

      var pageContext = getPageContext();
      var page = renderPage(function (App) {
        return function (props) {
          var WrappedApp = _document_withJssProvider(App, pageContext, props); // for material-ui

          sheet.collectStyles(WrappedApp); // for styled-components

          return WrappedApp;
        };
      });
      return _objectSpread({}, page, {
        styleTags: sheet.getStyleElement(),
        pageContext: pageContext,
        styles: external_react_default.a.createElement("style", {
          id: "jss-server-side",
          dangerouslySetInnerHTML: {
            __html: pageContext.sheetsRegistry.toString()
          }
        })
      });
    }
  }]);

  return MyDocument;
}(document_default.a);



/***/ })
/******/ ]);