webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @layout/default */ "./_layout/default.js");
/* harmony import */ var pages_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/styles */ "./pages/styles.js");
var _jsxFileName = "C:\\Users\\DianaIT\\Documents\\nextjs\\blog\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var __N_SSG = true;
function Home(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layout_default__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.title,
    descripction: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-".concat(pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"].__hash),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, props.posts.map(function (post, idx) {
    return __jsx("li", {
      key: idx,
      className: "jsx-".concat(pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"].__hash),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 15
      }
    }, "\uD83D\uDCDD", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "posts/" + post.slug,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "jsx-".concat(pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"].__hash),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 19
      }
    }, post.title)), " ", __jsx("span", {
      className: "jsx-".concat(pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"].__hash),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, " ", post.date, " \uD83D\uDCC5 "));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"].__hash,
    __self: this
  }, pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"])));
}
/*
<Link href="/blog">
              <a className="getStarted">BLOG</a>
            </Link>



              <DefaultLayout className="center">
        <main>
          <section>
            <Social></Social>
            <Avatar></Avatar>
          </section>
          <section>
            <h1>
              <Link href="/">
                <a> Diana Hernández </a>
              </Link>
            </h1>
            <h2>Desarrollo web</h2>
          </section>
        </main>
      </DefaultLayout>
*/

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBvc3RzIiwibWFwIiwicG9zdCIsImlkeCIsInNsdWciLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQyxTQUNFLG1FQUNFLE1BQUMsdURBQUQ7QUFBZSxTQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBbUMsZ0JBQVksRUFBRUQsS0FBSyxDQUFDRSxXQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQVVDLElBQVYsRUFBZ0JDLEdBQWhCLEVBQXFCO0FBQ3BDLFdBQ0U7QUFBSSxTQUFHLEVBQUVBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNLLEdBREwsRUFFRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFLFdBQVdELElBQUksQ0FBQ0UsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRixJQUFJLENBQUNKLEtBQVQsQ0FERixDQUZGLEVBSVUsR0FKVixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFRSSxJQUFJLENBQUNHLElBQWIsbUJBTEYsQ0FERjtBQVNELEdBVkEsQ0FESCxDQURGO0FBQUE7QUFBQTtBQUFBLHdEQURGLENBREY7QUFvQkQ7QUFlRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXBDd0JULEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDE5ZTgxNjU1N2ViOTEyYzlkNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSBcIkBsYXlvdXQvZGVmYXVsdFwiO1xyXG5pbXBvcnQgeyBibG9nIH0gZnJvbSBcInBhZ2VzL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWcsIGdldEFsbFBvc3RzIH0gZnJvbSBcInBhZ2VzL2FwaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGVmYXVsdExheW91dCB0aXRsZT17cHJvcHMudGl0bGV9IGRlc2NyaXBjdGlvbj17cHJvcHMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtwcm9wcy5wb3N0cy5tYXAoZnVuY3Rpb24gKHBvc3QsIGlkeCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICDwn5Ode1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCJwb3N0cy9cIiArIHBvc3Quc2x1Z30+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ge3Bvc3QuZGF0ZX0g8J+ThSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YmxvZ308L3N0eWxlPlxyXG4gICAgICA8L0RlZmF1bHRMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKCk7XHJcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHM6IGFsbFBvc3RzLFxyXG4gICAgICB0aXRsZTogY29uZmlnLnRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogY29uZmlnLmRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vKlxyXG48TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnZXRTdGFydGVkXCI+QkxPRzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgIDxEZWZhdWx0TGF5b3V0IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTb2NpYWw+PC9Tb2NpYWw+XHJcbiAgICAgICAgICAgIDxBdmF0YXI+PC9BdmF0YXI+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT4gRGlhbmEgSGVybsOhbmRleiA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDI+RGVzYXJyb2xsbyB3ZWI8L2gyPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9EZWZhdWx0TGF5b3V0PlxyXG4qL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9