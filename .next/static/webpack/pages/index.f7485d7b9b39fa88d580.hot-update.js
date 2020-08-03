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
  console.log(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layout_default__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.title,
    descripction: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-".concat(pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"].__hash),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, props.posts.map(function (post, idx) {
    return __jsx("li", {
      key: idx,
      className: "jsx-".concat(pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"].__hash),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }
    }, "\uD83D\uDCDD", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "posts/" + post.slug,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "jsx-".concat(pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"].__hash),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 19
      }
    }, post.title)), " ", __jsx("span", {
      className: "jsx-".concat(pages_styles__WEBPACK_IMPORTED_MODULE_4__["blog"].__hash),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJpZHgiLCJzbHVnIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLHVEQUFEO0FBQWUsU0FBSyxFQUFFQSxLQUFLLENBQUNHLEtBQTVCO0FBQW1DLGdCQUFZLEVBQUVILEtBQUssQ0FBQ0ksV0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixLQUFLLENBQUNLLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFVQyxJQUFWLEVBQWdCQyxHQUFoQixFQUFxQjtBQUNwQyxXQUNFO0FBQUksU0FBRyxFQUFFQSxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDSyxHQURMLEVBRUUsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxXQUFXRCxJQUFJLENBQUNFLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUYsSUFBSSxDQUFDSixLQUFULENBREYsQ0FGRixFQUlVLEdBSlYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUUksSUFBSSxDQUFDRyxJQUFiLG1CQUxGLENBREY7QUFTRCxHQVZBLENBREgsQ0FERjtBQUFBO0FBQUE7QUFBQSx3REFERixDQURGO0FBb0JEO0FBZUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FyQ3dCWCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY3NDg1ZDdiOWIzOWZhODhkNTgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gXCJAbGF5b3V0L2RlZmF1bHRcIjtcclxuaW1wb3J0IHsgYmxvZyB9IGZyb20gXCJwYWdlcy9zdHlsZXNcIjtcclxuaW1wb3J0IHsgZ2V0Q29uZmlnLCBnZXRBbGxQb3N0cyB9IGZyb20gXCJwYWdlcy9hcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxEZWZhdWx0TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcGN0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge3Byb3BzLnBvc3RzLm1hcChmdW5jdGlvbiAocG9zdCwgaWR4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgIPCfk517XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcInBvc3RzL1wiICsgcG9zdC5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxzcGFuPiB7cG9zdC5kYXRlfSDwn5OFIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8c3R5bGUganN4PntibG9nfTwvc3R5bGU+XHJcbiAgICAgIDwvRGVmYXVsdExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKTtcclxuICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0czogYWxsUG9zdHMsXHJcbiAgICAgIHRpdGxlOiBjb25maWcudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjb25maWcuZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbi8qXHJcbjxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdldFN0YXJ0ZWRcIj5CTE9HPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgPERlZmF1bHRMYXlvdXQgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPFNvY2lhbD48L1NvY2lhbD5cclxuICAgICAgICAgICAgPEF2YXRhcj48L0F2YXRhcj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPiBEaWFuYSBIZXJuw6FuZGV6IDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5EZXNhcnJvbGxvIHdlYjwvaDI+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L0RlZmF1bHRMYXlvdXQ+XHJcbiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=