/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const isAdminPage = router.pathname.includes(\"/admin\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Preload fonts (opsional, jika ada error, akan dilewati)\n        if (typeof document !== \"undefined\" && \"fonts\" in document) {\n            try {\n                const poppins = new FontFace(\"Poppins\", \"url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2)\", {\n                    weight: \"400\"\n                });\n                const poppinsBold = new FontFace(\"Poppins\", \"url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2)\", {\n                    weight: \"700\"\n                });\n                Promise.all([\n                    poppins.load(),\n                    poppinsBold.load()\n                ]).then((fonts)=>{\n                    fonts.forEach((font)=>document.fonts.add(font));\n                }).catch((err)=>console.error(\"Font loading failed:\", err));\n            } catch (error) {\n                console.warn(\"Font API not supported:\", error);\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\DwnlData\\\\Event\\\\pages\\\\_app.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"Content-Security-Policy\",\n                        content: \"default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data:\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\DwnlData\\\\Event\\\\pages\\\\_app.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\DwnlData\\\\Event\\\\pages\\\\_app.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\DwnlData\\\\Event\\\\pages\\\\_app.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            !isAdminPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"/js/security.js\",\n                strategy: \"afterInteractive\"\n            }, void 0, false, {\n                fileName: \"E:\\\\DwnlData\\\\Event\\\\pages\\\\_app.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0Y7QUFDSTtBQUNPO0FBQ047QUFFakMsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTU0sY0FBY0QsT0FBT0UsUUFBUSxDQUFDQyxRQUFRLENBQUM7SUFFN0NQLGdEQUFTQSxDQUFDO1FBQ1IsMERBQTBEO1FBQzFELElBQUksT0FBT1EsYUFBYSxlQUFlLFdBQVdBLFVBQVU7WUFDMUQsSUFBSTtnQkFDRixNQUFNQyxVQUFVLElBQUlDLFNBQ2xCLFdBQ0Esa0ZBQ0E7b0JBQUVDLFFBQVE7Z0JBQU07Z0JBRWxCLE1BQU1DLGNBQWMsSUFBSUYsU0FDdEIsV0FDQSxpRkFDQTtvQkFBRUMsUUFBUTtnQkFBTTtnQkFHbEJFLFFBQVFDLEdBQUcsQ0FBQztvQkFBQ0wsUUFBUU0sSUFBSTtvQkFBSUgsWUFBWUcsSUFBSTtpQkFBRyxFQUM3Q0MsSUFBSSxDQUFDQyxDQUFBQTtvQkFDSkEsTUFBTUMsT0FBTyxDQUFDQyxDQUFBQSxPQUFRWCxTQUFTUyxLQUFLLENBQUNHLEdBQUcsQ0FBQ0Q7Z0JBQzNDLEdBQ0NFLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBT0MsUUFBUUMsS0FBSyxDQUFDLHdCQUF3QkY7WUFDeEQsRUFBRSxPQUFPRSxPQUFPO2dCQUNkRCxRQUFRRSxJQUFJLENBQUMsMkJBQTJCRDtZQUMxQztRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDM0Isa0RBQUlBOztrQ0FDSCw4REFBQzZCO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDRjt3QkFBS0csV0FBVTt3QkFBMEJELFNBQVE7Ozs7Ozs7Ozs7OzswQkFFcEQsOERBQUMxQjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7WUFDdkIsQ0FBQ0UsNkJBQ0EsOERBQUNQLG9EQUFNQTtnQkFBQ2dDLEtBQUk7Z0JBQWtCQyxVQUFTOzs7Ozs7OztBQUkvQztBQUVBLGlFQUFlOUIsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaXNBZG1pblBhZ2UgPSByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy9hZG1pbicpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBQcmVsb2FkIGZvbnRzIChvcHNpb25hbCwgamlrYSBhZGEgZXJyb3IsIGFrYW4gZGlsZXdhdGkpXHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAnZm9udHMnIGluIGRvY3VtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcG9wcGlucyA9IG5ldyBGb250RmFjZShcclxuICAgICAgICAgICdQb3BwaW5zJyxcclxuICAgICAgICAgICd1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3BvcHBpbnMvdjIwL3B4aUV5cDhrdjhKSGdGVnJKSmZlY25GSEdQYy53b2ZmMiknLFxyXG4gICAgICAgICAgeyB3ZWlnaHQ6ICc0MDAnIH1cclxuICAgICAgICApXHJcbiAgICAgICAgY29uc3QgcG9wcGluc0JvbGQgPSBuZXcgRm9udEZhY2UoXHJcbiAgICAgICAgICAnUG9wcGlucycsXHJcbiAgICAgICAgICAndXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9wb3BwaW5zL3YyMC9weGlCeXA4a3Y4SkhnRlZyTEN6N1oxeGxGUS53b2ZmMiknLFxyXG4gICAgICAgICAgeyB3ZWlnaHQ6ICc3MDAnIH1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKFtwb3BwaW5zLmxvYWQoKSwgcG9wcGluc0JvbGQubG9hZCgpXSlcclxuICAgICAgICAgIC50aGVuKGZvbnRzID0+IHtcclxuICAgICAgICAgICAgZm9udHMuZm9yRWFjaChmb250ID0+IGRvY3VtZW50LmZvbnRzLmFkZChmb250KSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0ZvbnQgbG9hZGluZyBmYWlsZWQ6JywgZXJyKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0ZvbnQgQVBJIG5vdCBzdXBwb3J0ZWQ6JywgZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVNlY3VyaXR5LVBvbGljeVwiIGNvbnRlbnQ9XCJkZWZhdWx0LXNyYyAnc2VsZicgJ3Vuc2FmZS1pbmxpbmUnICd1bnNhZmUtZXZhbCcgaHR0cHM6IGRhdGE6XCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIHshaXNBZG1pblBhZ2UgJiYgKFxyXG4gICAgICAgIDxTY3JpcHQgc3JjPVwiL2pzL3NlY3VyaXR5LmpzXCIgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCIgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHAgIl0sIm5hbWVzIjpbIkhlYWQiLCJTY3JpcHQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImlzQWRtaW5QYWdlIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImRvY3VtZW50IiwicG9wcGlucyIsIkZvbnRGYWNlIiwid2VpZ2h0IiwicG9wcGluc0JvbGQiLCJQcm9taXNlIiwiYWxsIiwibG9hZCIsInRoZW4iLCJmb250cyIsImZvckVhY2giLCJmb250IiwiYWRkIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ3YXJuIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaHR0cEVxdWl2Iiwic3JjIiwic3RyYXRlZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();