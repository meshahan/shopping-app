"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ProductCard.js":
/*!***************************************!*\
  !*** ./src/components/ProductCard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillStar,AiOutlineStar!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProductCard = (param)=>{\n    let { img, title, desc, rating, price, index } = param;\n    _s();\n    const [animate, setAnimate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Start animation after a slight delay when the page loads\n        const timer = setTimeout(()=>{\n            setAnimate(true);\n        }, 200); // Adjust delay if necessary\n        return ()=>clearTimeout(timer);\n    }, []);\n    const generateRating = (rating)=>{\n        switch(rating){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#FF9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#FF9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#FF9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#FF9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined);\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#FF9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStar_AiOutlineStar_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {}, void 0, false, {\n                            fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined);\n        }\n    };\n    // Determine if the card should animate from the left or right\n    const animationClass = animate ? index % 2 === 0 ? \"translate-x-0 opacity-100\" : \"translate-x-0 opacity-100\" : index % 2 === 0 ? \"-translate-x-full opacity-0\" : \"translate-x-full opacity-0\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative px-4 border bg-cyan-900 border-gray-200 rounded-xl w-[250px] group transition-transform duration-700 \".concat(animationClass, \" h-[500px]\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"w-full max-h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-110 py-2\",\n                    src: img,\n                    width: 500,\n                    height: 300,\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-2 py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-border-teal-700 font-medium uppercase\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white max-w-[200px] truncate\",\n                        children: desc\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: generateRating(rating)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold flex gap-4\",\n                        children: [\n                            \"$\",\n                            price,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"del\", {\n                                className: \"text-emerald-300 font-normal\",\n                                children: [\n                                    \"$\",\n                                    parseInt(price) + 50,\n                                    \".00\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\My Web Designing\\\\Next Js\\\\E-Commerce Website\\\\shop\\\\src\\\\components\\\\ProductCard.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"z07FJ1oDfa7+qdGd0fWFFN4Jr94=\");\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRStCO0FBQ29CO0FBQ1E7QUFFM0QsTUFBTU0sY0FBYztRQUFDLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUU7O0lBQzdELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUiwyREFBMkQ7UUFDM0QsTUFBTWEsUUFBUUMsV0FBVztZQUN2QkYsV0FBVztRQUNiLEdBQUcsTUFBTSw0QkFBNEI7UUFDckMsT0FBTyxJQUFNRyxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFFTCxNQUFNRyxpQkFBaUIsQ0FBQ1I7UUFDdEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILHFCQUNFLDhEQUFDUztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNoQixzR0FBVUE7Ozs7O3NDQUNYLDhEQUFDQyx5R0FBYUE7Ozs7O3NDQUNkLDhEQUFDQSx5R0FBYUE7Ozs7O3NDQUNkLDhEQUFDQSx5R0FBYUE7Ozs7O3NDQUNkLDhEQUFDQSx5R0FBYUE7Ozs7Ozs7Ozs7O1lBR3BCLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNjO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2hCLHNHQUFVQTs7Ozs7c0NBQ1gsOERBQUNBLHNHQUFVQTs7Ozs7c0NBQ1gsOERBQUNDLHlHQUFhQTs7Ozs7c0NBQ2QsOERBQUNBLHlHQUFhQTs7Ozs7c0NBQ2QsOERBQUNBLHlHQUFhQTs7Ozs7Ozs7Ozs7WUFHcEIsS0FBSztnQkFDSCxxQkFDRSw4REFBQ2M7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDaEIsc0dBQVVBOzs7OztzQ0FDWCw4REFBQ0Esc0dBQVVBOzs7OztzQ0FDWCw4REFBQ0Esc0dBQVVBOzs7OztzQ0FDWCw4REFBQ0MseUdBQWFBOzs7OztzQ0FDZCw4REFBQ0EseUdBQWFBOzs7Ozs7Ozs7OztZQUdwQixLQUFLO2dCQUNILHFCQUNFLDhEQUFDYztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNoQixzR0FBVUE7Ozs7O3NDQUNYLDhEQUFDQSxzR0FBVUE7Ozs7O3NDQUNYLDhEQUFDQSxzR0FBVUE7Ozs7O3NDQUNYLDhEQUFDQSxzR0FBVUE7Ozs7O3NDQUNYLDhEQUFDQyx5R0FBYUE7Ozs7Ozs7Ozs7O1lBR3BCLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNjO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2hCLHNHQUFVQTs7Ozs7c0NBQ1gsOERBQUNBLHNHQUFVQTs7Ozs7c0NBQ1gsOERBQUNBLHNHQUFVQTs7Ozs7c0NBQ1gsOERBQUNBLHNHQUFVQTs7Ozs7c0NBQ1gsOERBQUNBLHNHQUFVQTs7Ozs7Ozs7Ozs7UUFHbkI7SUFDRjtJQUVBLDhEQUE4RDtJQUM5RCxNQUFNaUIsaUJBQWlCUixVQUNuQkQsUUFBUSxNQUFNLElBQ1osOEJBQ0EsOEJBQ0ZBLFFBQVEsTUFBTSxJQUNkLGdDQUNBO0lBRUoscUJBQ0UsOERBQUNPO1FBQ0NDLFdBQVcsaUhBQWdJLE9BQWZDLGdCQUFlOzswQkFHM0ksOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDcEIsa0RBQUtBO29CQUNKb0IsV0FBVTtvQkFDVkUsS0FBS2Y7b0JBQ0xnQixPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFLakI7Ozs7Ozs7Ozs7OzBCQUtULDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFHTixXQUFVO2tDQUE4Q1o7Ozs7OztrQ0FDNUQsOERBQUNtQjt3QkFBRVAsV0FBVTtrQ0FBcUNYOzs7Ozs7a0NBQ2xELDhEQUFDVTtrQ0FBS0QsZUFBZVI7Ozs7OztrQ0FHckIsOERBQUNTO3dCQUFJQyxXQUFVOzs0QkFBdUI7NEJBQ2xDVDswQ0FDRiw4REFBQ2lCO2dDQUFJUixXQUFVOztvQ0FBK0I7b0NBQzFDUyxTQUFTbEIsU0FBUztvQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQztHQTFHTUw7S0FBQUE7QUE0R04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanM/OWVjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBaUZpbGxTdGFyLCBBaU91dGxpbmVTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5cbmNvbnN0IFByb2R1Y3RDYXJkID0gKHsgaW1nLCB0aXRsZSwgZGVzYywgcmF0aW5nLCBwcmljZSwgaW5kZXggfSkgPT4ge1xuICBjb25zdCBbYW5pbWF0ZSwgc2V0QW5pbWF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTdGFydCBhbmltYXRpb24gYWZ0ZXIgYSBzbGlnaHQgZGVsYXkgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRBbmltYXRlKHRydWUpO1xuICAgIH0sIDIwMCk7IC8vIEFkanVzdCBkZWxheSBpZiBuZWNlc3NhcnlcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdlbmVyYXRlUmF0aW5nID0gKHJhdGluZykgPT4ge1xuICAgIHN3aXRjaCAocmF0aW5nKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIHRleHQtWzIwcHhdIHRleHQtWyNGRjk1MjldXCI+XG4gICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cbiAgICAgICAgICAgIDxBaU91dGxpbmVTdGFyIC8+XG4gICAgICAgICAgICA8QWlPdXRsaW5lU3RhciAvPlxuICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgdGV4dC1bMjBweF0gdGV4dC1bI0ZGOTUyOV1cIj5cbiAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cbiAgICAgICAgICAgIDxBaU91dGxpbmVTdGFyIC8+XG4gICAgICAgICAgICA8QWlPdXRsaW5lU3RhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSB0ZXh0LVsyMHB4XSB0ZXh0LVsjRkY5NTI5XVwiPlxuICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cbiAgICAgICAgICAgIDxBaU91dGxpbmVTdGFyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIHRleHQtWzIwcHhdIHRleHQtWyNGRjk1MjldXCI+XG4gICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgdGV4dC1bMjBweF0gdGV4dC1bI0ZGOTUyOV1cIj5cbiAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGNhcmQgc2hvdWxkIGFuaW1hdGUgZnJvbSB0aGUgbGVmdCBvciByaWdodFxuICBjb25zdCBhbmltYXRpb25DbGFzcyA9IGFuaW1hdGVcbiAgICA/IGluZGV4ICUgMiA9PT0gMFxuICAgICAgPyBcInRyYW5zbGF0ZS14LTAgb3BhY2l0eS0xMDBcIlxuICAgICAgOiBcInRyYW5zbGF0ZS14LTAgb3BhY2l0eS0xMDBcIlxuICAgIDogaW5kZXggJSAyID09PSAwXG4gICAgPyBcIi10cmFuc2xhdGUteC1mdWxsIG9wYWNpdHktMFwiXG4gICAgOiBcInRyYW5zbGF0ZS14LWZ1bGwgb3BhY2l0eS0wXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBweC00IGJvcmRlciBiZy1jeWFuLTkwMCBib3JkZXItZ3JheS0yMDAgcm91bmRlZC14bCB3LVsyNTBweF0gZ3JvdXAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwICR7YW5pbWF0aW9uQ2xhc3N9IGgtWzUwMHB4XWB9XG4gICAgPlxuICAgICAgey8qIFByb2R1Y3QgSW1hZ2UgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LWgtWzMwMHB4XSBvYmplY3QtY292ZXIgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgcHktMlwiXG4gICAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgICAgd2lkdGg9ezUwMH0gLy8gRW5zdXJlIGltYWdlIHdpZHRoIGlzIGNvbnNpc3RlbnRcbiAgICAgICAgICBoZWlnaHQ9ezMwMH0gLy8gRW5zdXJlIGltYWdlIGhlaWdodCBpcyBwcm9wb3J0aW9uYWxcbiAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBQcm9kdWN0IEluZm9ybWF0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgcHktMlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ib3JkZXItdGVhbC03MDAgZm9udC1tZWRpdW0gdXBwZXJjYXNlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWF4LXctWzIwMHB4XSB0cnVuY2F0ZVwiPntkZXNjfTwvcD5cbiAgICAgICAgPGRpdj57Z2VuZXJhdGVSYXRpbmcocmF0aW5nKX08L2Rpdj5cblxuICAgICAgICB7LyogUHJpY2UgYW5kIERpc2NvdW50ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmbGV4IGdhcC00XCI+XG4gICAgICAgICAgJHtwcmljZX1cbiAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC0zMDAgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICR7cGFyc2VJbnQocHJpY2UpICsgNTB9LjAwXG4gICAgICAgICAgPC9kZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBaUZpbGxTdGFyIiwiQWlPdXRsaW5lU3RhciIsIlByb2R1Y3RDYXJkIiwiaW1nIiwidGl0bGUiLCJkZXNjIiwicmF0aW5nIiwicHJpY2UiLCJpbmRleCIsImFuaW1hdGUiLCJzZXRBbmltYXRlIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZ2VuZXJhdGVSYXRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJhbmltYXRpb25DbGFzcyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDIiLCJwIiwiZGVsIiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductCard.js\n"));

/***/ })

});