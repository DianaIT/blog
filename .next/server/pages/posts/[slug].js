module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/posts/[slug]": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_includes/header.js":
/*!*****************************!*\
  !*** ./_includes/header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./_includes/styles.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_avatar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/avatar/index */ "./components/avatar/index.js");
var _jsxFileName = "C:\\Users\\DianaIT\\Documents\\nextjs\\blog\\_includes\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "DianaIT's blog"), __jsx("meta", {
    name: "description",
    content: "Diario de una developer en apurOS",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "icon",
    href: "./img/favicon.ico",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_components_avatar_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("section", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, " Diana Hern\xE1ndez "))), __jsx("h2", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Desarrollo web")), __jsx("nav", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://twitter.com/dianait_",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./icons/003-gorjeo.svg",
    alt: "icono twitter",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://github.com/dianait",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./icons/001-github.svg",
    alt: "icono github",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://codepen.io/dashboard",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./icons/002-codepen.svg",
    alt: "icono codepen",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/dianahernandezsoler",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./icons/004-linkedin.svg",
    alt: "icono linkedin",
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_3__["default"]));
}

/***/ }),

/***/ "./_includes/styles.js":
/*!*****************************!*\
  !*** ./_includes/styles.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("p.jsx-3420642460{margin-top:-12px;}header.jsx-3420642460{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:1rem;}ul.jsx-3420642460{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vh;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;list-style:none;font-family:Verdana;border-bottom:1px solid lightgrey;}nav.jsx-3420642460{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto auto;padding-left:0.8rem;border-left:2px solid lightgrey;}img.jsx-3420642460{width:30px;height:30px;}h1.jsx-3420642460{font-family:\"Amatic SC\",cursive;font-size:4rem;margin:0;margin-left:-30px;margin-right:1.4rem;}h2.jsx-3420642460{font-family:\"Poiret One\",cursive;-webkit-letter-spacing:12px;-moz-letter-spacing:12px;-ms-letter-spacing:12px;letter-spacing:12px;margin-top:-0.8rem;margin-left:-26px;}a.jsx-3420642460{-webkit-text-decoration:none;text-decoration:none;text-align:center;color:black;}a.jsx-3420642460:visited{color:grey;}li.jsx-3420642460{padding-top:2px;padding-bottom:2px;width:8rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-3420642460:hover{padding-top:0;border-top:2px solid grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGlhbmFJVFxcRG9jdW1lbnRzXFxuZXh0anNcXGJsb2dcXF9pbmNsdWRlc1xcc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdzQixBQUdKLEFBTUEsQUFTQSxBQU9GLEFBS3NCLEFBUUMsQUFPYixBQU1WLEFBSUssQUFPRixXQXBDRixBQTBCZCxHQVc0QixFQVBQLENBdkRyQixNQTBCQSxTQUlpQixDQVFLLEVBa0JULEtBT2IsTUFOcUIsQ0ExQlYsR0FjUyxNQWJBLFlBY04sTUEzQ2lCLEFBTWpCLEFBU1UsQUFlRixNQWN0QixNQXJDK0IsUUF3Qi9CLG9DQUtxQixTQW1CckIsVUFsQm9CLEdBckJELGVBc0JuQixFQXJCc0Isb0JBQ1ksUUFqQmIsWUFPSCxZQVdsQixJQVZzQixvQkFDYyxrQ0FDcEMsV0FUYyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGlhbmFJVFxcRG9jdW1lbnRzXFxuZXh0anNcXGJsb2dcXF9pbmNsdWRlc1xcc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIH1cclxuICBoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICB9XHJcbiAgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDB2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNHJlbTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTAuOHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjZweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBsaTpob3ZlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xyXG4gIH1cclxuYDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DianaIT\\\\Documents\\\\nextjs\\\\blog\\\\_includes\\\\styles.js */");

_defaultExport.__hash = "3420642460";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./_layout/default.js":
/*!****************************!*\
  !*** ./_layout/default.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultLayout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _includes_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @includes/header */ "./_includes/header.js");
/* harmony import */ var pages_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/styles */ "./pages/styles.js");
var _jsxFileName = "C:\\Users\\DianaIT\\Documents\\nextjs\\blog\\_layout\\default.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function DefaultLayout(props) {
  return __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_includes_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: pages_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, pages_styles__WEBPACK_IMPORTED_MODULE_3__["default"]));
}

/***/ }),

/***/ "./_layout/post.js":
/*!*************************!*\
  !*** ./_layout/post.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostLayout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layout/default */ "./_layout/default.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/styles */ "./pages/styles.js");
var _jsxFileName = "C:\\Users\\DianaIT\\Documents\\nextjs\\blog\\_layout\\post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PostLayout(props) {
  return __jsx(_layout_default__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: `jsx-${_pages_styles__WEBPACK_IMPORTED_MODULE_4__["post"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: `jsx-${_pages_styles__WEBPACK_IMPORTED_MODULE_4__["post"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, props.title), __jsx("section", {
    className: `jsx-${_pages_styles__WEBPACK_IMPORTED_MODULE_4__["post"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `jsx-${_pages_styles__WEBPACK_IMPORTED_MODULE_4__["post"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, props.date)), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: props.content
    },
    className: `jsx-${_pages_styles__WEBPACK_IMPORTED_MODULE_4__["post"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: `jsx-${_pages_styles__WEBPACK_IMPORTED_MODULE_4__["post"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: `jsx-${_pages_styles__WEBPACK_IMPORTED_MODULE_4__["post"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "VOLVER")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _pages_styles__WEBPACK_IMPORTED_MODULE_4__["post"].__hash,
    __self: this
  }, _pages_styles__WEBPACK_IMPORTED_MODULE_4__["post"]));
}

/***/ }),

/***/ "./_posts lazy recursive ^\\.\\/.*$":
/*!***********************************************!*\
  !*** ./_posts lazy ^\.\/.*$ namespace object ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Blog-con-Nextjs-guia-para-tontos.md": "./_posts/Blog-con-Nextjs-guia-para-tontos.md",
	"./ElmentaryOS-como-MacOS.md": "./_posts/ElmentaryOS-como-MacOS.md",
	"./css-modules.md": "./_posts/css-modules.md"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./_posts lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./_posts lazy recursive ^\\.\\/.*\\.md$":
/*!***************************************************!*\
  !*** ./_posts lazy ^\.\/.*\.md$ namespace object ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Blog-con-Nextjs-guia-para-tontos.md": "./_posts/Blog-con-Nextjs-guia-para-tontos.md",
	"./ElmentaryOS-como-MacOS.md": "./_posts/ElmentaryOS-como-MacOS.md",
	"./css-modules.md": "./_posts/css-modules.md"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./_posts lazy recursive ^\\.\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./_posts sync \\.md$":
/*!****************************************!*\
  !*** ./_posts sync nonrecursive \.md$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Blog-con-Nextjs-guia-para-tontos.md": "./_posts/Blog-con-Nextjs-guia-para-tontos.md",
	"./ElmentaryOS-como-MacOS.md": "./_posts/ElmentaryOS-como-MacOS.md",
	"./css-modules.md": "./_posts/css-modules.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./_posts sync \\.md$";

/***/ }),

/***/ "./_posts/Blog-con-Nextjs-guia-para-tontos.md":
/*!****************************************************!*\
  !*** ./_posts/Blog-con-Nextjs-guia-para-tontos.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\nid: 2\r\ntitle: \"Blog con NextJS, guía para tontos\"\r\nauthor: \"DianaIT\"\r\ndate: \"julio '20\"\r\n---\r\n\r\n### ¿Qué es Next.js?\r\n\r\nFramework de React que proporciona mucdades para desarrrollar apps con renderizado en el servidor, pero sin perder todas las bondades de la single Page Aplication.\r\n\r\n### ¿Qué tiene de bueno?\r\n\r\nFacilidad para el prerendering de la aplicación.\r\n\r\nAntes de que se carge el javascript por completo el usuario puede ver la página, y los links funcionan.\r\n\r\nEn el servidor se está renderizando nuestra app previamente, antes de llevar al cliente, esto tiene beneficios en temas de perfomance,\r\n\r\nLa página no funcionará pero si que se verá en el cliente porque todos los elementos ya han sido renderizados previamente en el servidor.\r\n\r\nNo necesitá configuración.\r\n\r\nExport de estáticos.\r\n\r\nstyle jsx.\r\n\r\nLa API y las rutas de la api se pueden crear Next.js.\r\n\r\nSEO\r\n\r\nAMP\r\n\r\nSoporte TypeScript\r\n\r\nVariables de entorno que sirven tambien en el navegador\r\n\r\n![Diana avatar](../../img/Untitled.png)\r\n\r\n### Comandos\r\n\r\nREQUISITOS\r\n\r\n- node\r\n- git\r\n- npm\r\n- yarn ( npm de facebook )\r\n\r\n```bash\r\nnpx create-next-app NOMBRE_PROYECTO\r\nnpm run dev\r\n```\r\n\r\n### Conceptos\r\n\r\n- SPA\r\n- JAMStack\r\n\r\n## Bibliografía\r\n\r\n[Building a Blog with Next.js | CSS-Tricks](https://css-tricks.com/building-a-blog-with-next-js/)\r\n\r\n[Build your own octocat](https://myoctocat.com/)\r\n\r\n[gaearon - Overview](https://github.com/gaearon)\r\n");

/***/ }),

/***/ "./_posts/ElmentaryOS-como-MacOS.md":
/*!******************************************!*\
  !*** ./_posts/ElmentaryOS-como-MacOS.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\nid: 1\r\ntitle: \"ElementaryOS como MacOS\"\r\nauthor: \"DianaIT\"\r\ndate: \"julio  '19\"\r\n---\r\n\r\n**Hello World**, this is my first Next.js blog post and it is written in markdown\r\n");

/***/ }),

/***/ "./_posts/css-modules.md":
/*!*******************************!*\
  !*** ./_posts/css-modules.md ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\nid: 3\r\ntitle: \"CSS Modules\"\r\nauthor: \"DianaIT\"\r\ndate: \"julio '20\"\r\n---\r\n\r\n## ¿Qué es?\r\n\r\n> _\"A CSS Module is a CSS file in which all class names and animation names are scoped locally by default\"_\r\n\r\nFicheros CSS donde sus clases son de ámbito local por defecto.\r\n\r\n## ¿Qué significa esto?\r\n\r\nNo se trata de una especeficacion oficial, es más bien un proceso que se realiza en el paso de build. Css modules cambia el nombre de las clases, añandiendole numéritos y demás para hacerlas únicas únicas. Y así evitar cualquier conflicto que pudiera surgir entre clases con el mismo nombre o selectores similares.\r\n\r\n## ¿Para que sirve?\r\n\r\nPara evitar sobrescritura de clases y conflictos de estilos.\r\n\r\nSin CSS Modules cada documento .css tiene un ámbito global, si repetimos una clase en 2 archivos diferentes, 2 clases o 2 elementos html, y tenemos importados los dos archivos no tenemos ningún control sobre los estilos que estamos aplicando a nuestra aplicación.\r\n\r\nBueno, para ser exactos, reamente si lo tenemos, ya que por algo esta lo de **\\*Cascading** style sheets.\\*\r\n\r\nEl último archivo importando será el ganador, siempre y cuando el selector sea más especifico, pero seamos honestos, hacer esto está regular\\*.\r\n\r\n\\*MAL\r\n\r\n## ¿Qué necesito?\r\n\r\n[Webpack](https://www.notion.so/Webpack-83a1006211c34612bbedddbf5cbfbaa0) Próximamente\r\n\r\n## ¿Cómo funciona?\r\n\r\nCrea una clase globalmente única compuesta por el nombre del archivo css, el nombre de la clase y un identificador único. Sería algo así.\r\n\r\n**When importing the CSS Module from a JS Module, it exports an object with all mappings from local names to global names.**\r\n\r\n```css\r\n/* styles.css */\r\n\r\n.foo {\r\n  color: red;\r\n}\r\n```\r\n\r\n```jsx\r\nimport styles from \"./styles.css\"; // CSS MODULES\r\nimport \"./main.css\"; // IMPORTACIÓN NORMAL DE CSS\r\n<h1 class={sytles.foo}> CSS </h1>;\r\n```\r\n\r\n```html\r\n<!-- EL NAVEGADOR VERÍA ALGO ASÍ\r\nclass = \"ARCHIVO_CLASE_ID_UNICO\" -->\r\n<h1 class=\"styles_foo_4xfe1\">CSS</h1>\r\n```\r\n\r\n**This is recommended because the common alternative, kebab-casing may cause unexpected behavior when trying to access style.class-name as a dot notation. You can still work around kebab-case with bracket notation (eg. style['class-name']) but style.className is cleaner.**\r\n\r\n## A tener en cuanta\r\n\r\nCSS Modules are turned on for files ending with the .module.css extension.\r\n\r\nIt's possible to compose selectors.\r\n\r\nComposing from other files\r\n\r\nComposing from global class names\r\n\r\n## Resumiendo...\r\n\r\n> Whenever I start a new component, I know that there are no global styles that will interfere with my work.\r\n\r\n[**@ahfarmer**](https://twitter.com/ahfarmer)\r\n\r\nCSS Modules coge nuestras clases y las hace únicas. Esto nos permite repetir nombres de clases sin miedo a que se produzcan resultados no deseados en el layout de nuestra aplicación. Cada componente tiene su propio CSS, local para ese componente, a pesar de estar escrito en un archivo separado.\r\n\r\n## Bibliografía\r\n\r\n- [css-modules/css-modules](https://github.com/css-modules/css-modules)\r\n\r\n- [What are CSS Modules? A visual introduction](http://javascriptstuff.com/what-are-css-modules/)\r\n\r\n- [Create React App · Set up a modern web app by running one command.](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)\r\n\r\n- [What are CSS Modules and why do we need them? | CSS-Tricks](https://css-tricks.com/css-modules-part-1-need/)\r\n\r\nNota a señoros:\r\n\r\nTú que vas a ver que hay alguna cosa que no está bien explicada, muy probablemente, y quieres hacermelo saber de manera educada, este no es tu disclaimer.\r\n\r\nNo soy ninguna experta en este tema. He escrito esto para aprender CSS Modules, no deja de ser una introducción, puede que esté equivocada en cosas, en algunas o en ninguna, fíjate. Sólo he intentado explicarlo a mi manera, y si le ayuda a alguién por el camino mejor que mejor.\r\n\r\n                                                    ⌨ con ❤ por Diana\r\n");

/***/ }),

/***/ "./components/avatar/index.js":
/*!************************************!*\
  !*** ./components/avatar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Avatar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleAvatar */ "./components/avatar/styleAvatar.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\DianaIT\\Documents\\nextjs\\blog\\components\\avatar\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Avatar() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "../img/octocat.png",
    className: `jsx-${_styleAvatar__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styleAvatar__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: this
  }, _styleAvatar__WEBPACK_IMPORTED_MODULE_2__["default"]));
}

/***/ }),

/***/ "./components/avatar/styleAvatar.js":
/*!******************************************!*\
  !*** ./components/avatar/styleAvatar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("img.jsx-1161079816{width:120px;height:120px;border-radius:100px;margin-right:2.5rem;margin-bottom:1rem;margin-left:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGlhbmFJVFxcRG9jdW1lbnRzXFxuZXh0anNcXGJsb2dcXGNvbXBvbmVudHNcXGF2YXRhclxcc3R5bGVBdmF0YXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBR2lCLFlBQ0MsYUFDTyxvQkFDQSxvQkFDRCxtQkFDRixpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEaWFuYUlUXFxEb2N1bWVudHNcXG5leHRqc1xcYmxvZ1xcY29tcG9uZW50c1xcYXZhdGFyXFxzdHlsZUF2YXRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuYDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DianaIT\\\\Documents\\\\nextjs\\\\blog\\\\components\\\\avatar\\\\styleAvatar.js */");

_defaultExport.__hash = "1161079816";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/*! exports provided: getAllPosts, getPostBySlug, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostBySlug", function() { return getPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "js-yaml");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);



async function getAllPosts() {
  const context = __webpack_require__("./_posts sync \\.md$");

  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await __webpack_require__("./_posts lazy recursive ^\\.\\/.*$")(`./${post}`);
    const meta = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(content.default);
    posts.push({
      id: meta.data.id,
      slug: post.replace(".md", ""),
      title: meta.data.title,
      date: meta.data.date
    });
  }
  /* Ordenar por id de mayor a menor
  https://es.stackoverflow.com/questions/61119/c%C3%B3mo-ordenar-arreglos-gui%C3%A1ndose-por-su-id-en-javascript
  */


  const array = posts.sort(function (a, b) {
    return b.id - a.id;
  });
  return array;
}
async function getPostBySlug(slug) {
  const fileContent = await __webpack_require__("./_posts lazy recursive ^\\.\\/.*\\.md$")(`./${slug}.md`);
  const meta = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(fileContent.default);
  const content = marked__WEBPACK_IMPORTED_MODULE_1___default()(meta.content);
  return {
    title: meta.data.title,
    content: content
  };
}
async function getConfig() {
  const config = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../config.yml */ "./config.yml"));
  return js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(config.default);
}

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layout/post */ "./_layout/post.js");
/* harmony import */ var pages_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/api */ "./pages/api/index.js");
var _jsxFileName = "C:\\Users\\DianaIT\\Documents\\nextjs\\blog\\pages\\posts\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Post(props) {
  return __jsx(_layout_post__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    content: props.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
}
async function getStaticProps(context) {
  return {
    props: await Object(pages_api__WEBPACK_IMPORTED_MODULE_2__["getPostBySlug"])(context.params.slug)
  };
}
async function getStaticPaths() {
  let paths = await Object(pages_api__WEBPACK_IMPORTED_MODULE_2__["getAllPosts"])();
  paths = paths.map(post => ({
    params: {
      slug: post.slug
    }
  }));
  return {
    paths: paths,
    fallback: false
  };
}

/***/ }),

/***/ "./pages/styles.js":
/*!*************************!*\
  !*** ./pages/styles.js ***!
  \*************************/
/*! exports provided: default, blog, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blog", function() { return blog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
const _defaultExport = new String("@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Dancing+Script&family=Poiret+One&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Tajawal&display=swap\");main{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}*{box-sizing:border-box;margin:0.2;padding:0.2;}h1{font-size:2.5rem;font-family:\"Poiret One\",cursive;}img{width:60%;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGlhbmFJVFxcRG9jdW1lbnRzXFxuZXh0anNcXGJsb2dcXHBhZ2VzXFxzdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXlCLEFBRXNJLEFBQ3ZELEFBR3pELEFBUUssQUFNTCxBQUlQLFVBQ0ksT0FsQkcsQUFjaUIsS0FOdkIsRUFXYixTQVZjLENBUkMsV0FTZixLQUtBLDBEQWJ3Qiw4RUFDSCw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEaWFuYUlUXFxEb2N1bWVudHNcXG5leHRqc1xcYmxvZ1xccGFnZXNcXHN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3MuZ2xvYmFsYFxyXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA0MDA7NzAwJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZmYW1pbHk9UG9pcmV0K09uZSZkaXNwbGF5PXN3YXBcIik7XHJcbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRhamF3YWwmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuICBtYWluIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDAuMjtcclxuICAgIHBhZGRpbmc6IDAuMjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBibG9nID0gY3NzYFxyXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWxpc2g6d2dodEAyMDAmZGlzcGxheT1zd2FwXCIpO1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI4cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpc2hcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3QgPSBjc3NgXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgYXJ0aWNsZSB7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICBhIGltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIGFydGljbGUge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DianaIT\\\\Documents\\\\nextjs\\\\blog\\\\pages\\\\styles.js */");

_defaultExport.__hash = "440275358";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);
const blog = new String("@import url(\"https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap\");ul.jsx-607102612{list-style:none;margin:1rem 0;padding:0;margin-left:-28px;}a.jsx-607102612{-webkit-text-decoration:none;text-decoration:none;font-size:1.6rem;font-weight:bold;font-family:\"Mulish\",sans-serif;}li.jsx-607102612{margin:2rem;padding-bottom:0.5rem;border-bottom:1px solid lightgrey;width:100%;}span.jsx-607102612{font-family:\"Poiret One\";font-weight:bold;float:right;padding-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGlhbmFJVFxcRG9jdW1lbnRzXFxuZXh0anNcXGJsb2dcXHBhZ2VzXFxzdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJ1QixBQUV1RixBQUVsRSxBQU9LLEFBT1QsQUFPYSxZQU5ILElBZFIsU0FxQkcsS0FwQlAsSUFjd0IsTUFiaEIsRUFvQk4sUUFmSyxJQWdCQSxJQXBCbkIsU0FLbUIsQ0FRTixHQVFiLFFBUEEsS0FSbUMsZ0NBQ25DIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGlhbmFJVFxcRG9jdW1lbnRzXFxuZXh0anNcXGJsb2dcXHBhZ2VzXFxzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzLmdsb2JhbGBcclxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANDAwOzcwMCZmYW1pbHk9RGFuY2luZytTY3JpcHQmZmFtaWx5PVBvaXJldCtPbmUmZGlzcGxheT1zd2FwXCIpO1xyXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UYWphd2FsJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiAgbWFpbiB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwLjI7XHJcbiAgICBwYWRkaW5nOiAwLjI7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgYmxvZyA9IGNzc2BcclxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVsaXNoOndnaHRAMjAwJmRpc3BsYXk9c3dhcFwiKTtcclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yOHB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0ID0gY3NzYFxyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgfVxyXG4gIGFydGljbGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgYSBpbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DianaIT\\\\Documents\\\\nextjs\\\\blog\\\\pages\\\\styles.js */");
blog.__hash = "607102612";
const post = new String("h1.jsx-1371473922{text-align:center;border-bottom:1px solid lightgrey;}article.jsx-1371473922{font-family:Verdana;width:80%;margin:0 auto;text-align:justify;}a.jsx-1371473922{-webkit-text-decoration:none;text-decoration:none;font-family:Verdana;font-size:1.2rem;}a.jsx-1371473922 img.jsx-1371473922{width:30px;}@media (min-width:1000px){article.jsx-1371473922{width:60%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGlhbmFJVFxcRG9jdW1lbnRzXFxuZXh0anNcXGJsb2dcXHBhZ2VzXFxzdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkR1QixBQUd1QixBQUlFLEFBT0MsQUFNVixBQUtDLFVBQ1osQ0FMRixPQWpCb0MsRUFJeEIsVUFDSSxjQUNLLE1BS0MsRUFWdEIsV0FNQSxPQUttQixpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEaWFuYUlUXFxEb2N1bWVudHNcXG5leHRqc1xcYmxvZ1xccGFnZXNcXHN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3MuZ2xvYmFsYFxyXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA0MDA7NzAwJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZmYW1pbHk9UG9pcmV0K09uZSZkaXNwbGF5PXN3YXBcIik7XHJcbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRhamF3YWwmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuICBtYWluIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDAuMjtcclxuICAgIHBhZGRpbmc6IDAuMjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBibG9nID0gY3NzYFxyXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWxpc2g6d2dodEAyMDAmZGlzcGxheT1zd2FwXCIpO1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI4cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpc2hcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3QgPSBjc3NgXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgYXJ0aWNsZSB7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICBhIGltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIGFydGljbGUge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DianaIT\\\\Documents\\\\nextjs\\\\blog\\\\pages\\\\styles.js */");
post.__hash = "1371473922";

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "js-yaml":
/*!**************************!*\
  !*** external "js-yaml" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-yaml");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX2luY2x1ZGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9faW5jbHVkZXMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL19sYXlvdXQvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9fbGF5b3V0L3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vX3Bvc3RzIGxhenkgXlxcLlxcLy4qJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL19wb3N0cyBsYXp5IF5cXC5cXC8uKlxcLm1kJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL19wb3N0cyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5tZCQiLCJ3ZWJwYWNrOi8vLy4vX3Bvc3RzL0Jsb2ctY29uLU5leHRqcy1ndWlhLXBhcmEtdG9udG9zLm1kIiwid2VicGFjazovLy8uL19wb3N0cy9FbG1lbnRhcnlPUy1jb21vLU1hY09TLm1kIiwid2VicGFjazovLy8uL19wb3N0cy9jc3MtbW9kdWxlcy5tZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F2YXRhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F2YXRhci9zdHlsZUF2YXRhci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLXlhbWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJEZWZhdWx0TGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIlBvc3RMYXlvdXQiLCJ0aXRsZSIsImRhdGUiLCJfX2h0bWwiLCJjb250ZW50IiwiQXZhdGFyIiwiZ2V0QWxsUG9zdHMiLCJjb250ZXh0IiwicmVxdWlyZSIsInBvc3RzIiwia2V5Iiwia2V5cyIsInBvc3QiLCJzbGljZSIsIm1ldGEiLCJtYXR0ZXIiLCJkZWZhdWx0IiwicHVzaCIsImlkIiwiZGF0YSIsInNsdWciLCJyZXBsYWNlIiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJnZXRQb3N0QnlTbHVnIiwiZmlsZUNvbnRlbnQiLCJtYXJrZWQiLCJnZXRDb25maWciLCJjb25maWciLCJ5YW1sIiwic2FmZUxvYWQiLCJQb3N0IiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwibWFwIiwiZmFsbGJhY2siLCJibG9nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLHNDQUFzQztRQUN0QztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7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b0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvcG9zdHMvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvcG9zdHMvW3NsdWddXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi8uLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qc1wiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21wb25lbnRzL2F2YXRhci9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RGlhbmFJVCdzIGJsb2c8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEaWFyaW8gZGUgdW5hIGRldmVsb3BlciBlbiBhcHVyT1NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaWNvblwiIGhyZWY9XCIuL2ltZy9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8QXZhdGFyIC8+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+IERpYW5hIEhlcm7DoW5kZXogPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGgyPkRlc2Fycm9sbG8gd2ViPC9oMj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2RpYW5haXRfXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pY29ucy8wMDMtZ29yamVvLnN2Z1wiIGFsdD1cImljb25vIHR3aXR0ZXJcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGlhbmFpdFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vaWNvbnMvMDAxLWdpdGh1Yi5zdmdcIiBhbHQ9XCJpY29ubyBnaXRodWJcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ljb25zLzAwMi1jb2RlcGVuLnN2Z1wiIGFsdD1cImljb25vIGNvZGVwZW5cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kaWFuYWhlcm5hbmRlenNvbGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pY29ucy8wMDQtbGlua2VkaW4uc3ZnXCIgYWx0PVwiaWNvbm8gbGlua2VkaW5cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICB9XHJcbiAgaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwdmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCIsIGN1cnNpdmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTI2cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgbGk6aG92ZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBIZWFkZXIgZnJvbSBcIkBpbmNsdWRlcy9oZWFkZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwicGFnZXMvc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZhdWx0TGF5b3V0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtzdHlsZXN9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgRGVmYXVsdExheW91dCBmcm9tIFwiQGxheW91dC9kZWZhdWx0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuaW1wb3J0IHsgcG9zdCB9IGZyb20gXCIuLi9wYWdlcy9zdHlsZXNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdExheW91dChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGVmYXVsdExheW91dD5cclxuICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGF0ZX08L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLmNvbnRlbnQgfX0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+Vk9MVkVSPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+e3Bvc3R9PC9zdHlsZT5cclxuICAgIDwvRGVmYXVsdExheW91dD5cclxuICApO1xyXG59XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9CbG9nLWNvbi1OZXh0anMtZ3VpYS1wYXJhLXRvbnRvcy5tZFwiOiBcIi4vX3Bvc3RzL0Jsb2ctY29uLU5leHRqcy1ndWlhLXBhcmEtdG9udG9zLm1kXCIsXG5cdFwiLi9FbG1lbnRhcnlPUy1jb21vLU1hY09TLm1kXCI6IFwiLi9fcG9zdHMvRWxtZW50YXJ5T1MtY29tby1NYWNPUy5tZFwiLFxuXHRcIi4vY3NzLW1vZHVsZXMubWRcIjogXCIuL19wb3N0cy9jc3MtbW9kdWxlcy5tZFwiXG59O1xuXG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cblx0XHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vX3Bvc3RzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwidmFyIG1hcCA9IHtcblx0XCIuL0Jsb2ctY29uLU5leHRqcy1ndWlhLXBhcmEtdG9udG9zLm1kXCI6IFwiLi9fcG9zdHMvQmxvZy1jb24tTmV4dGpzLWd1aWEtcGFyYS10b250b3MubWRcIixcblx0XCIuL0VsbWVudGFyeU9TLWNvbW8tTWFjT1MubWRcIjogXCIuL19wb3N0cy9FbG1lbnRhcnlPUy1jb21vLU1hY09TLm1kXCIsXG5cdFwiLi9jc3MtbW9kdWxlcy5tZFwiOiBcIi4vX3Bvc3RzL2Nzcy1tb2R1bGVzLm1kXCJcbn07XG5cbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblxuXHRcdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9fcG9zdHMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwubWQkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwidmFyIG1hcCA9IHtcblx0XCIuL0Jsb2ctY29uLU5leHRqcy1ndWlhLXBhcmEtdG9udG9zLm1kXCI6IFwiLi9fcG9zdHMvQmxvZy1jb24tTmV4dGpzLWd1aWEtcGFyYS10b250b3MubWRcIixcblx0XCIuL0VsbWVudGFyeU9TLWNvbW8tTWFjT1MubWRcIjogXCIuL19wb3N0cy9FbG1lbnRhcnlPUy1jb21vLU1hY09TLm1kXCIsXG5cdFwiLi9jc3MtbW9kdWxlcy5tZFwiOiBcIi4vX3Bvc3RzL2Nzcy1tb2R1bGVzLm1kXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vX3Bvc3RzIHN5bmMgXFxcXC5tZCRcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi0tLVxcclxcbmlkOiAyXFxyXFxudGl0bGU6IFxcXCJCbG9nIGNvbiBOZXh0SlMsIGd1w61hIHBhcmEgdG9udG9zXFxcIlxcclxcbmF1dGhvcjogXFxcIkRpYW5hSVRcXFwiXFxyXFxuZGF0ZTogXFxcImp1bGlvICcyMFxcXCJcXHJcXG4tLS1cXHJcXG5cXHJcXG4jIyMgwr9RdcOpIGVzIE5leHQuanM/XFxyXFxuXFxyXFxuRnJhbWV3b3JrIGRlIFJlYWN0IHF1ZSBwcm9wb3JjaW9uYSBtdWNkYWRlcyBwYXJhIGRlc2FycnJvbGxhciBhcHBzIGNvbiByZW5kZXJpemFkbyBlbiBlbCBzZXJ2aWRvciwgcGVybyBzaW4gcGVyZGVyIHRvZGFzIGxhcyBib25kYWRlcyBkZSBsYSBzaW5nbGUgUGFnZSBBcGxpY2F0aW9uLlxcclxcblxcclxcbiMjIyDCv1F1w6kgdGllbmUgZGUgYnVlbm8/XFxyXFxuXFxyXFxuRmFjaWxpZGFkIHBhcmEgZWwgcHJlcmVuZGVyaW5nIGRlIGxhIGFwbGljYWNpw7NuLlxcclxcblxcclxcbkFudGVzIGRlIHF1ZSBzZSBjYXJnZSBlbCBqYXZhc2NyaXB0IHBvciBjb21wbGV0byBlbCB1c3VhcmlvIHB1ZWRlIHZlciBsYSBww6FnaW5hLCB5IGxvcyBsaW5rcyBmdW5jaW9uYW4uXFxyXFxuXFxyXFxuRW4gZWwgc2Vydmlkb3Igc2UgZXN0w6EgcmVuZGVyaXphbmRvIG51ZXN0cmEgYXBwIHByZXZpYW1lbnRlLCBhbnRlcyBkZSBsbGV2YXIgYWwgY2xpZW50ZSwgZXN0byB0aWVuZSBiZW5lZmljaW9zIGVuIHRlbWFzIGRlIHBlcmZvbWFuY2UsXFxyXFxuXFxyXFxuTGEgcMOhZ2luYSBubyBmdW5jaW9uYXLDoSBwZXJvIHNpIHF1ZSBzZSB2ZXLDoSBlbiBlbCBjbGllbnRlIHBvcnF1ZSB0b2RvcyBsb3MgZWxlbWVudG9zIHlhIGhhbiBzaWRvIHJlbmRlcml6YWRvcyBwcmV2aWFtZW50ZSBlbiBlbCBzZXJ2aWRvci5cXHJcXG5cXHJcXG5ObyBuZWNlc2l0w6EgY29uZmlndXJhY2nDs24uXFxyXFxuXFxyXFxuRXhwb3J0IGRlIGVzdMOhdGljb3MuXFxyXFxuXFxyXFxuc3R5bGUganN4LlxcclxcblxcclxcbkxhIEFQSSB5IGxhcyBydXRhcyBkZSBsYSBhcGkgc2UgcHVlZGVuIGNyZWFyIE5leHQuanMuXFxyXFxuXFxyXFxuU0VPXFxyXFxuXFxyXFxuQU1QXFxyXFxuXFxyXFxuU29wb3J0ZSBUeXBlU2NyaXB0XFxyXFxuXFxyXFxuVmFyaWFibGVzIGRlIGVudG9ybm8gcXVlIHNpcnZlbiB0YW1iaWVuIGVuIGVsIG5hdmVnYWRvclxcclxcblxcclxcbiFbRGlhbmEgYXZhdGFyXSguLi8uLi9pbWcvVW50aXRsZWQucG5nKVxcclxcblxcclxcbiMjIyBDb21hbmRvc1xcclxcblxcclxcblJFUVVJU0lUT1NcXHJcXG5cXHJcXG4tIG5vZGVcXHJcXG4tIGdpdFxcclxcbi0gbnBtXFxyXFxuLSB5YXJuICggbnBtIGRlIGZhY2Vib29rIClcXHJcXG5cXHJcXG5gYGBiYXNoXFxyXFxubnB4IGNyZWF0ZS1uZXh0LWFwcCBOT01CUkVfUFJPWUVDVE9cXHJcXG5ucG0gcnVuIGRldlxcclxcbmBgYFxcclxcblxcclxcbiMjIyBDb25jZXB0b3NcXHJcXG5cXHJcXG4tIFNQQVxcclxcbi0gSkFNU3RhY2tcXHJcXG5cXHJcXG4jIyBCaWJsaW9ncmFmw61hXFxyXFxuXFxyXFxuW0J1aWxkaW5nIGEgQmxvZyB3aXRoIE5leHQuanMgfCBDU1MtVHJpY2tzXShodHRwczovL2Nzcy10cmlja3MuY29tL2J1aWxkaW5nLWEtYmxvZy13aXRoLW5leHQtanMvKVxcclxcblxcclxcbltCdWlsZCB5b3VyIG93biBvY3RvY2F0XShodHRwczovL215b2N0b2NhdC5jb20vKVxcclxcblxcclxcbltnYWVhcm9uIC0gT3ZlcnZpZXddKGh0dHBzOi8vZ2l0aHViLmNvbS9nYWVhcm9uKVxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiLS0tXFxyXFxuaWQ6IDFcXHJcXG50aXRsZTogXFxcIkVsZW1lbnRhcnlPUyBjb21vIE1hY09TXFxcIlxcclxcbmF1dGhvcjogXFxcIkRpYW5hSVRcXFwiXFxyXFxuZGF0ZTogXFxcImp1bGlvICAnMTlcXFwiXFxyXFxuLS0tXFxyXFxuXFxyXFxuKipIZWxsbyBXb3JsZCoqLCB0aGlzIGlzIG15IGZpcnN0IE5leHQuanMgYmxvZyBwb3N0IGFuZCBpdCBpcyB3cml0dGVuIGluIG1hcmtkb3duXFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCItLS1cXHJcXG5pZDogM1xcclxcbnRpdGxlOiBcXFwiQ1NTIE1vZHVsZXNcXFwiXFxyXFxuYXV0aG9yOiBcXFwiRGlhbmFJVFxcXCJcXHJcXG5kYXRlOiBcXFwianVsaW8gJzIwXFxcIlxcclxcbi0tLVxcclxcblxcclxcbiMjIMK/UXXDqSBlcz9cXHJcXG5cXHJcXG4+IF9cXFwiQSBDU1MgTW9kdWxlIGlzIGEgQ1NTIGZpbGUgaW4gd2hpY2ggYWxsIGNsYXNzIG5hbWVzIGFuZCBhbmltYXRpb24gbmFtZXMgYXJlIHNjb3BlZCBsb2NhbGx5IGJ5IGRlZmF1bHRcXFwiX1xcclxcblxcclxcbkZpY2hlcm9zIENTUyBkb25kZSBzdXMgY2xhc2VzIHNvbiBkZSDDoW1iaXRvIGxvY2FsIHBvciBkZWZlY3RvLlxcclxcblxcclxcbiMjIMK/UXXDqSBzaWduaWZpY2EgZXN0bz9cXHJcXG5cXHJcXG5ObyBzZSB0cmF0YSBkZSB1bmEgZXNwZWNlZmljYWNpb24gb2ZpY2lhbCwgZXMgbcOhcyBiaWVuIHVuIHByb2Nlc28gcXVlIHNlIHJlYWxpemEgZW4gZWwgcGFzbyBkZSBidWlsZC4gQ3NzIG1vZHVsZXMgY2FtYmlhIGVsIG5vbWJyZSBkZSBsYXMgY2xhc2VzLCBhw7FhbmRpZW5kb2xlIG51bcOpcml0b3MgeSBkZW3DoXMgcGFyYSBoYWNlcmxhcyDDum5pY2FzIMO6bmljYXMuIFkgYXPDrSBldml0YXIgY3VhbHF1aWVyIGNvbmZsaWN0byBxdWUgcHVkaWVyYSBzdXJnaXIgZW50cmUgY2xhc2VzIGNvbiBlbCBtaXNtbyBub21icmUgbyBzZWxlY3RvcmVzIHNpbWlsYXJlcy5cXHJcXG5cXHJcXG4jIyDCv1BhcmEgcXVlIHNpcnZlP1xcclxcblxcclxcblBhcmEgZXZpdGFyIHNvYnJlc2NyaXR1cmEgZGUgY2xhc2VzIHkgY29uZmxpY3RvcyBkZSBlc3RpbG9zLlxcclxcblxcclxcblNpbiBDU1MgTW9kdWxlcyBjYWRhIGRvY3VtZW50byAuY3NzIHRpZW5lIHVuIMOhbWJpdG8gZ2xvYmFsLCBzaSByZXBldGltb3MgdW5hIGNsYXNlIGVuIDIgYXJjaGl2b3MgZGlmZXJlbnRlcywgMiBjbGFzZXMgbyAyIGVsZW1lbnRvcyBodG1sLCB5IHRlbmVtb3MgaW1wb3J0YWRvcyBsb3MgZG9zIGFyY2hpdm9zIG5vIHRlbmVtb3MgbmluZ8O6biBjb250cm9sIHNvYnJlIGxvcyBlc3RpbG9zIHF1ZSBlc3RhbW9zIGFwbGljYW5kbyBhIG51ZXN0cmEgYXBsaWNhY2nDs24uXFxyXFxuXFxyXFxuQnVlbm8sIHBhcmEgc2VyIGV4YWN0b3MsIHJlYW1lbnRlIHNpIGxvIHRlbmVtb3MsIHlhIHF1ZSBwb3IgYWxnbyBlc3RhIGxvIGRlICoqXFxcXCpDYXNjYWRpbmcqKiBzdHlsZSBzaGVldHMuXFxcXCpcXHJcXG5cXHJcXG5FbCDDumx0aW1vIGFyY2hpdm8gaW1wb3J0YW5kbyBzZXLDoSBlbCBnYW5hZG9yLCBzaWVtcHJlIHkgY3VhbmRvIGVsIHNlbGVjdG9yIHNlYSBtw6FzIGVzcGVjaWZpY28sIHBlcm8gc2VhbW9zIGhvbmVzdG9zLCBoYWNlciBlc3RvIGVzdMOhIHJlZ3VsYXJcXFxcKi5cXHJcXG5cXHJcXG5cXFxcKk1BTFxcclxcblxcclxcbiMjIMK/UXXDqSBuZWNlc2l0bz9cXHJcXG5cXHJcXG5bV2VicGFja10oaHR0cHM6Ly93d3cubm90aW9uLnNvL1dlYnBhY2stODNhMTAwNjIxMWMzNDYxMmJiZWRkZGJmNWNiZmJhYTApIFByw7N4aW1hbWVudGVcXHJcXG5cXHJcXG4jIyDCv0PDs21vIGZ1bmNpb25hP1xcclxcblxcclxcbkNyZWEgdW5hIGNsYXNlIGdsb2JhbG1lbnRlIMO6bmljYSBjb21wdWVzdGEgcG9yIGVsIG5vbWJyZSBkZWwgYXJjaGl2byBjc3MsIGVsIG5vbWJyZSBkZSBsYSBjbGFzZSB5IHVuIGlkZW50aWZpY2Fkb3Igw7puaWNvLiBTZXLDrWEgYWxnbyBhc8OtLlxcclxcblxcclxcbioqV2hlbiBpbXBvcnRpbmcgdGhlIENTUyBNb2R1bGUgZnJvbSBhIEpTIE1vZHVsZSwgaXQgZXhwb3J0cyBhbiBvYmplY3Qgd2l0aCBhbGwgbWFwcGluZ3MgZnJvbSBsb2NhbCBuYW1lcyB0byBnbG9iYWwgbmFtZXMuKipcXHJcXG5cXHJcXG5gYGBjc3NcXHJcXG4vKiBzdHlsZXMuY3NzICovXFxyXFxuXFxyXFxuLmZvbyB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5gYGBcXHJcXG5cXHJcXG5gYGBqc3hcXHJcXG5pbXBvcnQgc3R5bGVzIGZyb20gXFxcIi4vc3R5bGVzLmNzc1xcXCI7IC8vIENTUyBNT0RVTEVTXFxyXFxuaW1wb3J0IFxcXCIuL21haW4uY3NzXFxcIjsgLy8gSU1QT1JUQUNJw5NOIE5PUk1BTCBERSBDU1NcXHJcXG48aDEgY2xhc3M9e3N5dGxlcy5mb299PiBDU1MgPC9oMT47XFxyXFxuYGBgXFxyXFxuXFxyXFxuYGBgaHRtbFxcclxcbjwhLS0gRUwgTkFWRUdBRE9SIFZFUsONQSBBTEdPIEFTw41cXHJcXG5jbGFzcyA9IFxcXCJBUkNISVZPX0NMQVNFX0lEX1VOSUNPXFxcIiAtLT5cXHJcXG48aDEgY2xhc3M9XFxcInN0eWxlc19mb29fNHhmZTFcXFwiPkNTUzwvaDE+XFxyXFxuYGBgXFxyXFxuXFxyXFxuKipUaGlzIGlzIHJlY29tbWVuZGVkIGJlY2F1c2UgdGhlIGNvbW1vbiBhbHRlcm5hdGl2ZSwga2ViYWItY2FzaW5nIG1heSBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yIHdoZW4gdHJ5aW5nIHRvIGFjY2VzcyBzdHlsZS5jbGFzcy1uYW1lIGFzIGEgZG90IG5vdGF0aW9uLiBZb3UgY2FuIHN0aWxsIHdvcmsgYXJvdW5kIGtlYmFiLWNhc2Ugd2l0aCBicmFja2V0IG5vdGF0aW9uIChlZy4gc3R5bGVbJ2NsYXNzLW5hbWUnXSkgYnV0IHN0eWxlLmNsYXNzTmFtZSBpcyBjbGVhbmVyLioqXFxyXFxuXFxyXFxuIyMgQSB0ZW5lciBlbiBjdWFudGFcXHJcXG5cXHJcXG5DU1MgTW9kdWxlcyBhcmUgdHVybmVkIG9uIGZvciBmaWxlcyBlbmRpbmcgd2l0aCB0aGUgLm1vZHVsZS5jc3MgZXh0ZW5zaW9uLlxcclxcblxcclxcbkl0J3MgcG9zc2libGUgdG8gY29tcG9zZSBzZWxlY3RvcnMuXFxyXFxuXFxyXFxuQ29tcG9zaW5nIGZyb20gb3RoZXIgZmlsZXNcXHJcXG5cXHJcXG5Db21wb3NpbmcgZnJvbSBnbG9iYWwgY2xhc3MgbmFtZXNcXHJcXG5cXHJcXG4jIyBSZXN1bWllbmRvLi4uXFxyXFxuXFxyXFxuPiBXaGVuZXZlciBJIHN0YXJ0IGEgbmV3IGNvbXBvbmVudCwgSSBrbm93IHRoYXQgdGhlcmUgYXJlIG5vIGdsb2JhbCBzdHlsZXMgdGhhdCB3aWxsIGludGVyZmVyZSB3aXRoIG15IHdvcmsuXFxyXFxuXFxyXFxuWyoqQGFoZmFybWVyKipdKGh0dHBzOi8vdHdpdHRlci5jb20vYWhmYXJtZXIpXFxyXFxuXFxyXFxuQ1NTIE1vZHVsZXMgY29nZSBudWVzdHJhcyBjbGFzZXMgeSBsYXMgaGFjZSDDum5pY2FzLiBFc3RvIG5vcyBwZXJtaXRlIHJlcGV0aXIgbm9tYnJlcyBkZSBjbGFzZXMgc2luIG1pZWRvIGEgcXVlIHNlIHByb2R1emNhbiByZXN1bHRhZG9zIG5vIGRlc2VhZG9zIGVuIGVsIGxheW91dCBkZSBudWVzdHJhIGFwbGljYWNpw7NuLiBDYWRhIGNvbXBvbmVudGUgdGllbmUgc3UgcHJvcGlvIENTUywgbG9jYWwgcGFyYSBlc2UgY29tcG9uZW50ZSwgYSBwZXNhciBkZSBlc3RhciBlc2NyaXRvIGVuIHVuIGFyY2hpdm8gc2VwYXJhZG8uXFxyXFxuXFxyXFxuIyMgQmlibGlvZ3JhZsOtYVxcclxcblxcclxcbi0gW2Nzcy1tb2R1bGVzL2Nzcy1tb2R1bGVzXShodHRwczovL2dpdGh1Yi5jb20vY3NzLW1vZHVsZXMvY3NzLW1vZHVsZXMpXFxyXFxuXFxyXFxuLSBbV2hhdCBhcmUgQ1NTIE1vZHVsZXM/IEEgdmlzdWFsIGludHJvZHVjdGlvbl0oaHR0cDovL2phdmFzY3JpcHRzdHVmZi5jb20vd2hhdC1hcmUtY3NzLW1vZHVsZXMvKVxcclxcblxcclxcbi0gW0NyZWF0ZSBSZWFjdCBBcHAgwrcgU2V0IHVwIGEgbW9kZXJuIHdlYiBhcHAgYnkgcnVubmluZyBvbmUgY29tbWFuZC5dKGh0dHBzOi8vY3JlYXRlLXJlYWN0LWFwcC5kZXYvZG9jcy9hZGRpbmctYS1jc3MtbW9kdWxlcy1zdHlsZXNoZWV0LylcXHJcXG5cXHJcXG4tIFtXaGF0IGFyZSBDU1MgTW9kdWxlcyBhbmQgd2h5IGRvIHdlIG5lZWQgdGhlbT8gfCBDU1MtVHJpY2tzXShodHRwczovL2Nzcy10cmlja3MuY29tL2Nzcy1tb2R1bGVzLXBhcnQtMS1uZWVkLylcXHJcXG5cXHJcXG5Ob3RhIGEgc2XDsW9yb3M6XFxyXFxuXFxyXFxuVMO6IHF1ZSB2YXMgYSB2ZXIgcXVlIGhheSBhbGd1bmEgY29zYSBxdWUgbm8gZXN0w6EgYmllbiBleHBsaWNhZGEsIG11eSBwcm9iYWJsZW1lbnRlLCB5IHF1aWVyZXMgaGFjZXJtZWxvIHNhYmVyIGRlIG1hbmVyYSBlZHVjYWRhLCBlc3RlIG5vIGVzIHR1IGRpc2NsYWltZXIuXFxyXFxuXFxyXFxuTm8gc295IG5pbmd1bmEgZXhwZXJ0YSBlbiBlc3RlIHRlbWEuIEhlIGVzY3JpdG8gZXN0byBwYXJhIGFwcmVuZGVyIENTUyBNb2R1bGVzLCBubyBkZWphIGRlIHNlciB1bmEgaW50cm9kdWNjacOzbiwgcHVlZGUgcXVlIGVzdMOpIGVxdWl2b2NhZGEgZW4gY29zYXMsIGVuIGFsZ3VuYXMgbyBlbiBuaW5ndW5hLCBmw61qYXRlLiBTw7NsbyBoZSBpbnRlbnRhZG8gZXhwbGljYXJsbyBhIG1pIG1hbmVyYSwgeSBzaSBsZSBheXVkYSBhIGFsZ3Vpw6luIHBvciBlbCBjYW1pbm8gbWVqb3IgcXVlIG1lam9yLlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDijKggY29uIOKdpCBwb3IgRGlhbmFcXHJcXG5cIjsiLCJpbXBvcnQgc3R5bGVBdmF0YXIgZnJvbSBcIi4vc3R5bGVBdmF0YXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhdGFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvb2N0b2NhdC5wbmdcIiAvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxzdHlsZSBqc3g+e3N0eWxlQXZhdGFyfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IG1hcmtlZCBmcm9tIFwibWFya2VkXCI7XHJcbmltcG9ydCB5YW1sIGZyb20gXCJqcy15YW1sXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi4uLy4uL19wb3N0c1wiLCBmYWxzZSwgL1xcLm1kJC8pO1xyXG4gIGNvbnN0IHBvc3RzID0gW107XHJcbiAgZm9yIChjb25zdCBrZXkgb2YgY29udGV4dC5rZXlzKCkpIHtcclxuICAgIGNvbnN0IHBvc3QgPSBrZXkuc2xpY2UoMik7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9fcG9zdHMvJHtwb3N0fWApO1xyXG4gICAgY29uc3QgbWV0YSA9IG1hdHRlcihjb250ZW50LmRlZmF1bHQpO1xyXG4gICAgcG9zdHMucHVzaCh7XHJcbiAgICAgIGlkOiBtZXRhLmRhdGEuaWQsXHJcbiAgICAgIHNsdWc6IHBvc3QucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcclxuICAgICAgdGl0bGU6IG1ldGEuZGF0YS50aXRsZSxcclxuICAgICAgZGF0ZTogbWV0YS5kYXRhLmRhdGUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qIE9yZGVuYXIgcG9yIGlkIGRlIG1heW9yIGEgbWVub3JcclxuICBodHRwczovL2VzLnN0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MTExOS9jJUMzJUIzbW8tb3JkZW5hci1hcnJlZ2xvcy1ndWklQzMlQTFuZG9zZS1wb3Itc3UtaWQtZW4tamF2YXNjcmlwdFxyXG4gICovXHJcbiAgY29uc3QgYXJyYXkgPSBwb3N0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICByZXR1cm4gYi5pZCAtIGEuaWQ7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1Zykge1xyXG4gIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9fcG9zdHMvJHtzbHVnfS5tZGApO1xyXG4gIGNvbnN0IG1ldGEgPSBtYXR0ZXIoZmlsZUNvbnRlbnQuZGVmYXVsdCk7XHJcbiAgY29uc3QgY29udGVudCA9IG1hcmtlZChtZXRhLmNvbnRlbnQpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogbWV0YS5kYXRhLnRpdGxlLFxyXG4gICAgY29udGVudDogY29udGVudCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29uZmlnKCkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGltcG9ydChgLi4vLi4vY29uZmlnLnltbGApO1xyXG4gIHJldHVybiB5YW1sLnNhZmVMb2FkKGNvbmZpZy5kZWZhdWx0KTtcclxufVxyXG4iLCJpbXBvcnQgUG9zdExheW91dCBmcm9tIFwiQGxheW91dC9wb3N0XCI7XHJcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldEFsbFBvc3RzIH0gZnJvbSBcInBhZ2VzL2FwaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdChwcm9wcykge1xyXG4gIHJldHVybiA8UG9zdExheW91dCB0aXRsZT17cHJvcHMudGl0bGV9IGNvbnRlbnQ9e3Byb3BzLmNvbnRlbnR9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogYXdhaXQgZ2V0UG9zdEJ5U2x1Zyhjb250ZXh0LnBhcmFtcy5zbHVnKSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgbGV0IHBhdGhzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcclxuICBwYXRocyA9IHBhdGhzLm1hcCgocG9zdCkgPT4gKHtcclxuICAgIHBhcmFtczogeyBzbHVnOiBwb3N0LnNsdWcgfSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3MuZ2xvYmFsYFxyXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA0MDA7NzAwJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZmYW1pbHk9UG9pcmV0K09uZSZkaXNwbGF5PXN3YXBcIik7XHJcbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRhamF3YWwmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuICBtYWluIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDAuMjtcclxuICAgIHBhZGRpbmc6IDAuMjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBibG9nID0gY3NzYFxyXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWxpc2g6d2dodEAyMDAmZGlzcGxheT1zd2FwXCIpO1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI4cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpc2hcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3QgPSBjc3NgXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgYXJ0aWNsZSB7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICBhIGltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIGFydGljbGUge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMteWFtbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=