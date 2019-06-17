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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  SERVICE_NAME: 'menora.services.bam-ui',
  PORT: process.env.PORT || 3000,
  BASE_API_PATH: '/bamui/api/v1',
  ZIPKIN_PATH: 'http://localhost:9411/api/v1/spans',
  MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017',
  MONGODB_NAME: process.env.MONGODB_NAME || 'digital_bam_ui',
  MONGODB_COLLECTION: process.env.MONGODB_COLLECTION || 'testWithType',
  PREFIX_PATH: process.env.PREFIX_PATH || 'http://localhost',
  VALUES_URL: 'http://localhost:3000/bamui/api/v1/values',
  TEST_URL: 'http://localhost:3000/bamui/api/v1/test',
  UPDATE_URL: 'http://localhost:3000/bamui/api/v1/update',
  // Some oauth service
  TOKEN_URL: process.env.TOKEN_URL || 'https://localhost/api/v1/token',
  LOGIN_URL: 'http://bam-ui:3000/bamui/api/v1/loginAuthentication'
};

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(9);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(10);
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./client/clientActions/actions.js




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var conf = __webpack_require__(5);



var updateMongo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(requestBody) {
    var action, addObj, delObj, updateObj, prevObj, url, body, config, response;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(requestBody);
            _context.prev = 1;
            action = requestBody.action, addObj = requestBody.addObj, delObj = requestBody.delObj, updateObj = requestBody.updateObj, prevObj = requestBody.prevObj;
            url = conf.UPDATE_URL;
            body = {
              action: action,
              addObj: addObj,
              delObj: delObj,
              updateObj: updateObj,
              prevObj: prevObj
            };
            config = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                action: action,
                addObj: addObj,
                delObj: delObj,
                updateObj: updateObj,
                prevObj: prevObj
              })
            };
            console.log(config);
            _context.next = 9;
            return external_isomorphic_unfetch_default()(url, config);

          case 9:
            response = _context.sent;
            return _context.abrupt("return", response.ok);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", false);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));

  return function updateMongo(_x) {
    return _ref.apply(this, arguments);
  };
}();


// CONCATENATED MODULE: ./client/components/ProductRow.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ProductRow_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function ProductRow_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ProductRow_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ProductRow_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ProductRow_ProductRow =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductRow, _Component);

  function ProductRow(props) {
    var _this;

    _classCallCheck(this, ProductRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductRow).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "UpdateRecord",
    /*#__PURE__*/
    function () {
      var _ref = ProductRow_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(state) {
        var action, updateObj, prevObj, response;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(state);
                _context.prev = 1;
                action = state.action, updateObj = state.updateObj, prevObj = state.prevObj;
                _context.next = 5;
                return updateMongo({
                  action: action,
                  updateObj: updateObj,
                  prevObj: prevObj
                });

              case 5:
                response = _context.sent;

                if (!response) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", response.ok);

              case 10:
                return _context.abrupt("return", null);

              case 11:
                _context.next = 15;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleEdit",
    /*#__PURE__*/
    function () {
      var _ref2 = ProductRow_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(e) {
        var product, newName, newType;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                product = _this.props.product;
                newName = _this.getName.value;
                newType = _this.getType.value;

                if (newName !== '' & newType !== '') {
                  _this.setState({
                    prevObj: {
                      name: product.name,
                      type: product.type
                    },
                    updateObj: {
                      name: newName,
                      type: newType
                    },
                    action: 'updateMeClick',
                    edit: !_this.state.edit
                  }, function () {
                    console.log(_this.state);

                    _this.UpdateRecord(_this.state);

                    window.location.reload();
                  });
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.state = {
      action: '',
      edit: false
    };
    _this.handleRowClick = _this.handleRowClick.bind(_assertThisInitialized(_this));
    _this.handleFilterTextChange = _this.handleFilterTextChange.bind(_assertThisInitialized(_this));
    _this.handleFilterTypeChange = _this.handleFilterTypeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductRow, [{
    key: "handleRowClick",
    value: function handleRowClick(e) {
      var _this2 = this;

      console.log(this.state);
      this.setState({
        edit: !this.state.edit
      }, function () {
        console.log(_this2.state);
      });
    }
  }, {
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(e) {
      this.setState({
        action: ''
      });
      e.preventDefault(); //this.props.onFilterTextChange(e.target.value);
    }
  }, {
    key: "handleFilterTypeChange",
    value: function handleFilterTypeChange(e) {
      this.setState({
        action: ''
      });
      e.preventDefault(); //this.props.onFilterTypeChange(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var edit = this.state.edit;
      var updateMe;
      var product = this.props.product;
      var name = external_react_default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, product.name);
      var type = external_react_default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, product.type);

      if (!edit) {
        updateMe = external_react_default.a.createElement("div", {
          className: "flex-rows-container"
        }, external_react_default.a.createElement("div", {
          className: "left-wrapper",
          onDoubleClick: this.handleRowClick
        }, name), external_react_default.a.createElement("div", {
          className: "right-wrapper"
        }, type));
      } else {
        updateMe = external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("form", {
          onSubmit: this.handleEdit
        }, external_react_default.a.createElement("div", {
          className: "input-wrappers"
        }, external_react_default.a.createElement("div", {
          className: "left-wrapper",
          onDoubleClick: this.handleRowClick
        }, external_react_default.a.createElement("input", {
          type: "text",
          defaultValue: product.name,
          ref: function ref(input) {
            return _this3.getName = input;
          }
        })), external_react_default.a.createElement("div", {
          className: "right-wrapper"
        }, external_react_default.a.createElement("select", {
          className: "select-type",
          onChange: this.handleFilterTypeChange,
          defaultValue: product.type,
          ref: function ref(input) {
            return _this3.getType = input;
          }
        }, external_react_default.a.createElement("option", {
          value: "select"
        }, "--Select Type--"), external_react_default.a.createElement("option", {
          value: "string"
        }, "string"), external_react_default.a.createElement("option", {
          value: "number"
        }, "number"), external_react_default.a.createElement("option", {
          value: "object"
        }, "object")))), external_react_default.a.createElement("button", null, "update")));
      }

      return external_react_default.a.createElement(external_react_["Fragment"], null, updateMe);
    }
  }]);

  return ProductRow;
}(external_react_["Component"]);

/* harmony default export */ var components_ProductRow = (ProductRow_ProductRow);
// CONCATENATED MODULE: ./client/components/ProductTable.js
function ProductTable_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductTable_typeof = function _typeof(obj) { return typeof obj; }; } else { ProductTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductTable_typeof(obj); }

function ProductTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductTable_defineProperties(Constructor, staticProps); return Constructor; }

function ProductTable_possibleConstructorReturn(self, call) { if (call && (ProductTable_typeof(call) === "object" || typeof call === "function")) { return call; } return ProductTable_assertThisInitialized(self); }

function ProductTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductTable_getPrototypeOf(o) { ProductTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProductTable_getPrototypeOf(o); }

function ProductTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProductTable_setPrototypeOf(subClass, superClass); }

function ProductTable_setPrototypeOf(o, p) { ProductTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProductTable_setPrototypeOf(o, p); }




var ProductTable_ProductTable =
/*#__PURE__*/
function (_Component) {
  ProductTable_inherits(ProductTable, _Component);

  function ProductTable(props) {
    ProductTable_classCallCheck(this, ProductTable);

    return ProductTable_possibleConstructorReturn(this, ProductTable_getPrototypeOf(ProductTable).call(this, props));
  }

  ProductTable_createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          filterText = _this$props.filterText,
          filterType = _this$props.filterType,
          products = _this$props.products;
      var rows = [];
      products.forEach(function (product) {
        if (product.name !== null && product.name.indexOf(filterText) === -1) {
          return;
        }

        if (product.type !== null && filterType !== 'select' && product.type.indexOf(filterType) === -1) {
          return;
        }

        rows.push(external_react_default.a.createElement(components_ProductRow, {
          product: product,
          key: product.name
        }));
      });
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", {
        className: "flex-rows-container"
      }, external_react_default.a.createElement("div", {
        className: "left-wrapper"
      }, external_react_default.a.createElement("b", null, "Name")), external_react_default.a.createElement("div", {
        className: "right-wrapper"
      }, external_react_default.a.createElement("b", null, "Type"))), external_react_default.a.createElement("div", null, rows));
    }
  }]);

  return ProductTable;
}(external_react_["Component"]);

/* harmony default export */ var components_ProductTable = (ProductTable_ProductTable);
// CONCATENATED MODULE: ./client/components/Message.js


function NoSuggestions(props) {
  return external_react_default.a.createElement("em", null, "No suggestions, you're on your own!");
}

function AddMe(props) {
  return external_react_default.a.createElement("em", null, "Add success. See DB values.");
}

function DeleteMe(props) {
  return external_react_default.a.createElement("em", null, "Delete success. See DB values.");
}

function FailToAdd(props) {
  return external_react_default.a.createElement("em", null, "Fail to add new item... Maybe not uniqe (For example: aa->string and aa->number are not allow)");
}

function Message(props) {
  var flag = props.action;

  if (flag === 'addMeClick') {
    return external_react_default.a.createElement(AddMe, null);
  } else if (flag === 'deleteMeClick') {
    return external_react_default.a.createElement(DeleteMe, null);
  } else if (flag === 'failToAdd') {
    return external_react_default.a.createElement(FailToAdd, null);
  }

  return external_react_default.a.createElement(NoSuggestions, null);
}

/* harmony default export */ var components_Message = (Message);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(11);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./client/components/Upload.js


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Upload_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Upload_typeof = function _typeof(obj) { return typeof obj; }; } else { Upload_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Upload_typeof(obj); }

function Upload_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Upload_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Upload_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Upload_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Upload_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Upload_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Upload_createClass(Constructor, protoProps, staticProps) { if (protoProps) Upload_defineProperties(Constructor.prototype, protoProps); if (staticProps) Upload_defineProperties(Constructor, staticProps); return Constructor; }

function Upload_possibleConstructorReturn(self, call) { if (call && (Upload_typeof(call) === "object" || typeof call === "function")) { return call; } return Upload_assertThisInitialized(self); }

function Upload_getPrototypeOf(o) { Upload_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Upload_getPrototypeOf(o); }

function Upload_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Upload_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Upload_setPrototypeOf(subClass, superClass); }

function Upload_setPrototypeOf(o, p) { Upload_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Upload_setPrototypeOf(o, p); }

function Upload_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Upload_ref = {},
    node = Upload_ref.node,
    input = Upload_ref.input,
    preview = Upload_ref.preview,
    Upload_products = Upload_ref.products,
    fileContent = Upload_ref.fileContent;
var fileTypes = ['text/plain'];
var delta = [];

var Upload_Upload =
/*#__PURE__*/
function (_Component) {
  Upload_inherits(Upload, _Component);

  function Upload(props) {
    var _this;

    Upload_classCallCheck(this, Upload);

    _this = Upload_possibleConstructorReturn(this, Upload_getPrototypeOf(Upload).call(this, props));

    Upload_defineProperty(Upload_assertThisInitialized(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref2 = Upload_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(e) {
        var action;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (fileContent !== undefined) {
                  fileContent = JSON.parse(fileContent);
                }

                delta = mixed(Upload_products, fileContent);
                console.log(delta);
                fileContent = [];
                action = 'addMeClick';
                delta.forEach(
                /*#__PURE__*/
                function () {
                  var _ref3 = Upload_asyncToGenerator(
                  /*#__PURE__*/
                  regenerator_default.a.mark(function _callee(addObj) {
                    var response;
                    return regenerator_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return updateMongo({
                              action: action,
                              addObj: addObj
                            });

                          case 2:
                            response = _context.sent;
                            console.log(response);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }());
                window.location.reload();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Upload_createClass(Upload, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      node = external_react_dom_default.a.findDOMNode(this);
      input = node.querySelector('input');
      preview = node.querySelector('.preview');
      Upload_products = this.props.products;
    }
  }, {
    key: "displayFile",
    value: function displayFile() {
      while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
      }

      var curFiles = input.files;

      if (curFiles.length === 0) {
        var para = document.createElement('em');
        para.textContent = 'No files currently selected for upload';
        preview.appendChild(para);
      } else {
        var content = document.createElement('div');
        preview.appendChild(content);
        var item = document.createElement('div');

        var _para = document.createElement('em');

        if (validFileType(curFiles[0])) {
          _para.textContent = 'File name ' + curFiles[0].name + ', file size ' + returnFileSize(curFiles[0].size) + '.';
          var reader = new FileReader();
          var txt = document.createElement('textarea');

          reader.onload = function (e) {
            txt.value = e.target.result;
            txt.className = 'file-content';
            txt.rows = '10';
            txt.cols = '50';

            txt.onselect = function (e) {
              var l = txt.selectionEnd - txt.selectionStart;
              fileContent = txt.value.substr(txt.selectionStart, l).trim();
            };
          };

          reader.readAsText(curFiles[0]);
          item.appendChild(_para);

          _para.appendChild(txt);
        } else {
          _para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
          item.appendChild(_para);
        }

        content.appendChild(item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
        onChange: this.displayFile,
        type: "file",
        accept: ".txt"
      })), external_react_default.a.createElement("div", {
        className: "preview"
      }, external_react_default.a.createElement("em", null, "No file currently selected for upload")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("button", {
        onClick: this.handleSubmit
      }, "Submit"))));
    }
  }]);

  return Upload;
}(external_react_["Component"]);

function validFileType(file) {
  if (file.type === fileTypes[0]) {
    return true;
  }

  return false;
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + 'bytes';
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + 'KB';
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + 'MB';
  }
}

function mixed(arr1, arr2) {
  var arr3 = arr1.concat(arr2);

  var dis1 = _toConsumableArray(new Set(arr1.map(function (item) {
    return item.name;
  })));

  console.log(dis1);

  var dis2 = _toConsumableArray(new Set(arr2.map(function (item) {
    return item.name;
  })));

  console.log(dis2);
  var result = [];
  arr3.map(function (a) {
    if (!dis1.includes(a.name) && dis2.includes(a.name)) {
      result.push(a);
    }
  });
  console.log(result);
  return result;
}

/* harmony default export */ var components_Upload = (Upload_Upload);
// CONCATENATED MODULE: ./client/components/SearchBar.js


function SearchBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchBar_typeof = function _typeof(obj) { return typeof obj; }; } else { SearchBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchBar_typeof(obj); }

function SearchBar_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function SearchBar_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { SearchBar_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { SearchBar_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function SearchBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SearchBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchBar_defineProperties(Constructor, staticProps); return Constructor; }

function SearchBar_possibleConstructorReturn(self, call) { if (call && (SearchBar_typeof(call) === "object" || typeof call === "function")) { return call; } return SearchBar_assertThisInitialized(self); }

function SearchBar_getPrototypeOf(o) { SearchBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchBar_getPrototypeOf(o); }

function SearchBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SearchBar_setPrototypeOf(subClass, superClass); }

function SearchBar_setPrototypeOf(o, p) { SearchBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchBar_setPrototypeOf(o, p); }

function SearchBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var SearchBar_SearchBar =
/*#__PURE__*/
function (_Component) {
  SearchBar_inherits(SearchBar, _Component);

  function SearchBar(props) {
    var _this;

    SearchBar_classCallCheck(this, SearchBar);

    _this = SearchBar_possibleConstructorReturn(this, SearchBar_getPrototypeOf(SearchBar).call(this, props));

    SearchBar_defineProperty(SearchBar_assertThisInitialized(_this), "deleteMeClick", function (e) {
      //console.log(this.state);
      var products = _this.props.products;
      var name = _this.props.filterText;
      var delData = {
        name: name
      };
      var indexType = Object.keys(products).find(function (obj) {
        return products[obj].name === name;
      });

      if (indexType !== -1 && indexType !== undefined) {
        delData = products[indexType];
        products.splice(indexType, 1);
      }

      _this.setState({
        action: 'deleteMeClick',
        delObj: delData
      }, function () {
        _this.UpdateRecord(_this.state);

        window.location.reload();
      });
    });

    SearchBar_defineProperty(SearchBar_assertThisInitialized(_this), "addMeClick", function (e) {
      var _this$props = _this.props,
          products = _this$props.products,
          filterText = _this$props.filterText,
          filterType = _this$props.filterType;
      var addData = {
        name: filterText,
        type: filterType === 'select' ? null : filterType
      };

      if (addData.type !== null) {
        _this.setState({
          action: 'addMeClick',
          addObj: addData
        }, function () {
          var indexType = Object.keys(products).find(function (obj) {
            return products[obj].name === addData.name;
          });

          if (indexType !== -1 && indexType !== undefined) {
            _this.setState({
              action: 'failToAdd'
            }), function () {
              return;
            };
            return;
          }

          products.push(addData);

          _this.UpdateRecord(_this.state);

          window.location.reload();
        });
      }
    });

    SearchBar_defineProperty(SearchBar_assertThisInitialized(_this), "UpdateRecord",
    /*#__PURE__*/
    function () {
      var _ref = SearchBar_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(state) {
        var action, addObj, delObj, response;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(state);
                _context.prev = 1;
                action = state.action, addObj = state.addObj, delObj = state.delObj;

                if (!(action && (addObj || delObj))) {
                  _context.next = 14;
                  break;
                }

                _context.next = 6;
                return updateMongo({
                  action: action,
                  addObj: addObj,
                  delObj: delObj
                });

              case 6:
                response = _context.sent;

                if (!response) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", response.ok);

              case 11:
                return _context.abrupt("return", null);

              case 12:
                _context.next = 15;
                break;

              case 14:
                return _context.abrupt("return", null);

              case 15:
                _context.next = 19;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](1);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 17]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.handleFilterTextChange = _this.handleFilterTextChange.bind(SearchBar_assertThisInitialized(_this));
    _this.handleFilterTypeChange = _this.handleFilterTypeChange.bind(SearchBar_assertThisInitialized(_this));
    _this.state = {
      action: '',
      delObj: {},
      addObj: {}
    };
    return _this;
  }

  SearchBar_createClass(SearchBar, [{
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(e) {
      this.setState({
        action: ''
      });
      e.preventDefault();
      this.props.onFilterTextChange(e.target.value);
    }
  }, {
    key: "handleFilterTypeChange",
    value: function handleFilterTypeChange(e) {
      this.setState({
        action: ''
      });
      e.preventDefault();
      this.props.onFilterTypeChange(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var addMe;

      if (this.props.filterType !== 'select' && this.props.filterText && this.props.products.filter(function (item) {
        return item.name === _this2.props.filterText && item.type === _this2.props.filterType;
      }).length >= 1) {
        addMe = external_react_default.a.createElement("button", {
          onClick: this.deleteMeClick
        }, "delete");
      } else if (this.props.filterType !== 'select' && this.props.filterText && this.props.products.filter(function (item) {
        return item.name === _this2.props.filterText && item.type === _this2.props.filterType;
      }).length !== 1) {
        addMe = external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("button", {
          onClick: this.addMeClick
        }, "add"), external_react_default.a.createElement("div", {
          className: "no-suggestions"
        }, external_react_default.a.createElement(components_Message, {
          action: this.state.action
        })));
      }

      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", {
        className: "input-wrappers"
      }, external_react_default.a.createElement("div", {
        className: "left-wrapper"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Start type name...",
        value: this.props.filterText,
        onChange: this.handleFilterTextChange
      })), external_react_default.a.createElement("div", {
        className: "right-wrapper"
      }, external_react_default.a.createElement("select", {
        className: "select-type",
        onChange: this.handleFilterTypeChange,
        value: this.props.filterType
      }, external_react_default.a.createElement("option", {
        value: "select"
      }, "--Select Type--"), external_react_default.a.createElement("option", {
        value: "string"
      }, "string"), external_react_default.a.createElement("option", {
        value: "number"
      }, "number"), external_react_default.a.createElement("option", {
        value: "object"
      }, "object")))), addMe, external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Upload, {
        products: this.props.products
      })));
    }
  }]);

  return SearchBar;
}(external_react_["Component"]);

/* harmony default export */ var components_SearchBar = (SearchBar_SearchBar);
// CONCATENATED MODULE: ./client/components/FilterableProductTable.js
function FilterableProductTable_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FilterableProductTable_typeof = function _typeof(obj) { return typeof obj; }; } else { FilterableProductTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FilterableProductTable_typeof(obj); }

function FilterableProductTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FilterableProductTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FilterableProductTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) FilterableProductTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) FilterableProductTable_defineProperties(Constructor, staticProps); return Constructor; }

function FilterableProductTable_possibleConstructorReturn(self, call) { if (call && (FilterableProductTable_typeof(call) === "object" || typeof call === "function")) { return call; } return FilterableProductTable_assertThisInitialized(self); }

function FilterableProductTable_getPrototypeOf(o) { FilterableProductTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FilterableProductTable_getPrototypeOf(o); }

function FilterableProductTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FilterableProductTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FilterableProductTable_setPrototypeOf(subClass, superClass); }

function FilterableProductTable_setPrototypeOf(o, p) { FilterableProductTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FilterableProductTable_setPrototypeOf(o, p); }





var FilterableProductTable_conf = __webpack_require__(5);

var FilterableProductTable_FilterableProductTable =
/*#__PURE__*/
function (_Component) {
  FilterableProductTable_inherits(FilterableProductTable, _Component);

  function FilterableProductTable(props) {
    var _this;

    FilterableProductTable_classCallCheck(this, FilterableProductTable);

    _this = FilterableProductTable_possibleConstructorReturn(this, FilterableProductTable_getPrototypeOf(FilterableProductTable).call(this, props));
    _this.state = {
      filterText: '',
      filterType: 'select',
      filterLength: null,
      token: _this.props.token
    };
    _this.handleFilterTextChange = _this.handleFilterTextChange.bind(FilterableProductTable_assertThisInitialized(_this));
    _this.handleFilterTypeChange = _this.handleFilterTypeChange.bind(FilterableProductTable_assertThisInitialized(_this));
    return _this;
  }

  FilterableProductTable_createClass(FilterableProductTable, [{
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText,
        filterLength: document.getElementsByTagName('tr').length - 1
      });
    }
  }, {
    key: "handleFilterTypeChange",
    value: function handleFilterTypeChange(filterType) {
      this.setState({
        filterType: filterType
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "item11"
      }, external_react_default.a.createElement(components_SearchBar, {
        products: this.props.products // products={data}
        ,
        filterText: this.state.filterText,
        filterType: this.state.filterType,
        filterLength: this.state.filterLength,
        onFilterTextChange: this.handleFilterTextChange,
        onFilterTypeChange: this.handleFilterTypeChange
      }), external_react_default.a.createElement("div", {
        className: "table-wrapper"
      }, external_react_default.a.createElement(components_ProductTable, {
        products: this.props.products // products={data}
        ,
        filterText: this.state.filterText,
        filterType: this.state.filterType
      })));
    }
  }]);

  return FilterableProductTable;
}(external_react_["Component"]);

/* harmony default export */ var components_FilterableProductTable = (FilterableProductTable_FilterableProductTable);
// CONCATENATED MODULE: ./pages/index.js


function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function pages_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { pages_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { pages_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }





var pages_conf = __webpack_require__(5);

var pages_Index =
/*#__PURE__*/
function (_Component) {
  pages_inherits(Index, _Component);

  function Index(props) {
    pages_classCallCheck(this, Index);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));
  } // Init props by getting values from DB


  pages_createClass(Index, [{
    key: "render",
    value: function render() {
      var shows = this.props.data;
      return external_react_default.a.createElement("div", {
        className: "grid-container",
        align: "center"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Bam UI"), external_react_default.a.createElement("link", {
        href: "./static/favicon.ico",
        rel: "icon",
        type: "image/x-icon"
      }), external_react_default.a.createElement("link", {
        href: "./static/style.css",
        rel: "stylesheet"
      })), external_react_default.a.createElement("div", {
        className: "item1"
      }, external_react_default.a.createElement("img", {
        src: "./static/Menora_logo.png"
      }), external_react_default.a.createElement("h1", null, "Bam UI")), external_react_default.a.createElement(components_FilterableProductTable, {
        products: shows
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = pages_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(props) {
        var res, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(pages_conf.VALUES_URL);

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;

                if (!(res.status != 200)) {
                  _context.next = 8;
                  break;
                }

                throw Error('Error!!');

              case 8:
                return _context.abrupt("return", data);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);