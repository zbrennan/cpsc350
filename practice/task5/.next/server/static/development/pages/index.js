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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

function getParkInfo(name) {
  console.log("Fetching");
  return fetch(`http://35.190.190.219/api/park?name=${name}`).then(function (resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getInfo: function (park) {
    return getParkInfo(park).catch(handleError);
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_utils_js__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/zach/cpsc350/cpsc350/practice/task5/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



class Home extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  async handleUpdate(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  async handleSearch(evt) {
    const parkInfo = await Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_3__["getInfo"])(this.state.search);
    console.log(parkInfo); // add the information to the state

    this.setState({
      parkInfo
    });
  }

  render() {
    return __jsx("div", {
      style: {
        margin: "auto auto",
        width: "800px",
        textAlign: "center",
        background: "#daf6db",
        borderStyle: "groove"
      },
      className: "jsx-3970593640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-3970593640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "National Park Search"), __jsx("img", {
      src: "/static/nationalPark1.jpg",
      className: "jsx-3970593640" + " " + "App-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3970593640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      value: this.state.search,
      onChange: this.handleUpdate.bind(this),
      className: "jsx-3970593640" + " " + "input-style",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), __jsx("div", {
      onClick: this.handleSearch.bind(this),
      className: "jsx-3970593640" + " " + "button-style",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Submit"), this.state.parkInfo ? __jsx("div", {
      className: "jsx-3970593640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-3970593640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, this.state.parkInfo.name), __jsx("h3", {
      className: "jsx-3970593640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, this.state.parkInfo.state), __jsx("h3", {
      className: "jsx-3970593640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.parkInfo.acres).toLocaleString(), " acres")) : null, __jsx("br", {
      className: "jsx-3970593640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3970593640",
      __self: this
    }, ".button-style.jsx-3970593640{margin:auto auto;margin-top:35px;cursor:pointer;background-color:#166d17;color:#ffffff;width:150px;height:45px;font-family:\"Arial\";line-height:1.9;font-size:1.4rem;}.input-style.jsx-3970593640{font-size:1.4rem;line-height:1.6;}h1.jsx-3970593640{font-size:2.1rem;font-family:\"Arial\";color:#125213;}h2.jsx-3970593640{font-family:\"Arial\";font-size:1.6rem;}h3.jsx-3970593640{font-family:\"Arial\";font-size:1.4rem;}.App-logo.jsx-3970593640{height:500px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96YWNoL2Nwc2MzNTAvY3BzYzM1MC9wcmFjdGljZS90YXNrNS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RG9CLEFBRzhCLEFBYUEsQUFLQSxBQUtHLEFBS0EsQUFLUCxhQUNmLElBakNrQixBQWFBLEFBS0ksR0FLSCxBQUtBLGFBM0JGLEFBYWpCLElBS2dCLEFBS2hCLEFBS0EsV0EzQjJCLEdBa0IzQixzQkFqQmdCLGNBQ0YsWUFDQSxZQUNRLG9CQUNKLGdCQUNDLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvemFjaC9jcHNjMzUwL2Nwc2MzNTAvcHJhY3RpY2UvdGFzazUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7Z2V0SW5mb30gZnJvbSAnLi4vbGliL3V0aWxzLmpzJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7c2VhcmNoOiBcIlwifTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVVwZGF0ZShldnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2g6IGV2dC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVNlYXJjaChldnQpIHtcbiAgICBjb25zdCBwYXJrSW5mbyA9IGF3YWl0IGdldEluZm8odGhpcy5zdGF0ZS5zZWFyY2gpO1xuICAgIGNvbnNvbGUubG9nKHBhcmtJbmZvKTtcbiAgICAvLyBhZGQgdGhlIGluZm9ybWF0aW9uIHRvIHRoZSBzdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoe3BhcmtJbmZvfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW46IFwiYXV0byBhdXRvXCIsXG4gICAgICAgICAgd2lkdGg6IFwiODAwcHhcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjZGFmNmRiXCIsXG4gICAgICAgICAgYm9yZGVyU3R5bGU6IFwiZ3Jvb3ZlXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMT5OYXRpb25hbCBQYXJrIFNlYXJjaDwvaDE+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9uYXRpb25hbFBhcmsxLmpwZ1wiIGNsYXNzTmFtZT1cIkFwcC1sb2dvXCIgLz5cblxuICAgICAgICA8cD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXN0eWxlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVwZGF0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1zdHlsZVwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX1cbiAgICAgICAgPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5wYXJrSW5mbyA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLnBhcmtJbmZvLm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5wYXJrSW5mby5zdGF0ZX08L2gzPlxuICAgICAgICAgICAgPGgzPntwYXJzZUludCh0aGlzLnN0YXRlLnBhcmtJbmZvLmFjcmVzKS50b0xvY2FsZVN0cmluZygpfSBhY3JlczwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJ1dHRvbi1zdHlsZSB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2ZDE3O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbnB1dC1zdHlsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgY29sb3I6ICMxMjUyMTM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkFwcC1sb2dvIHtcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/zach/cpsc350/cpsc350/practice/task5/pages/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zach/cpsc350/cpsc350/practice/task5/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map