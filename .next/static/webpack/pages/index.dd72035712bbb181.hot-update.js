"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const [player1, setPlayer1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [player2, setPlayer2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [score1, setScore1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score2, setScore2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [matchId, setMatchId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [matchUrl, setMatchUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Track match URL\n    const startMatch = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/start_match\", {\n                player1,\n                player2\n            });\n            console.log(\"Response from start_match:\", response.data); // Add this line\n            setMatchId(response.data.matchId); // Ensure this is correctly mapped\n            setScore1(0);\n            setScore2(0);\n            console.log(response.data.matchId); // Add this line\n            setMatchUrl(\"\".concat(window.location.origin, \"/match/\").concat(response.data.matchId)); // Construct match URL\n            console.log(\"Match started:\", response.data);\n        } catch (error) {\n            console.error(\"Failed to start match:\", error);\n        }\n    };\n    const updateScore = async (player, newScore)=>{\n        console.log(\"Current matchId:\", matchId); // Add this line\n        if (!matchId) {\n            console.error(\"No matchId available\");\n            return;\n        }\n        console.log(\"Updating score:\", {\n            player,\n            newScore,\n            matchId\n        });\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/update_score\", {\n                player,\n                newScore,\n                matchId\n            }); // Ensure matchId is passed\n            if (player === \"player1\") {\n                setScore1(newScore);\n            } else {\n                setScore2(newScore);\n            }\n        } catch (error) {\n            console.error(\"Failed to update score:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-white p-6 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-6 bg-white text-gray-800 shadow-lg rounded-lg max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold mb-6 text-center text-blue-600\",\n                    children: \"Live Score Tracker\"\n                }, void 0, false, {\n                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6 flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Player 1 Name\",\n                            value: player1,\n                            onChange: (e)=>setPlayer1(e.target.value),\n                            className: \"input input-bordered input-primary mb-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Player 2 Name\",\n                            value: player2,\n                            onChange: (e)=>setPlayer2(e.target.value),\n                            className: \"input input-bordered input-secondary mb-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: startMatch,\n                            className: \"btn btn-primary\",\n                            children: \"Start Match\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                matchUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg\",\n                        children: [\n                            \"Match URL: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: matchUrl,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"link link-primary\",\n                                    children: matchUrl\n                                }, void 0, false, {\n                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 69\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 47\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-center text-green-600\",\n                            children: \"Match Score\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-around mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl font-semibold mb-2 text-red-600\",\n                                            children: player1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-center space-x-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>updateScore(\"player1\", score1 + 1),\n                                                    className: \"btn btn-success\",\n                                                    children: \"+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-2xl\",\n                                                    children: score1\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>updateScore(\"player1\", score1 - 1),\n                                                    className: \"btn btn-error\",\n                                                    children: \"-\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl font-semibold mb-2 text-red-600\",\n                                            children: player2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-center space-x-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>updateScore(\"player2\", score2 + 1),\n                                                    className: \"btn btn-success\",\n                                                    children: \"+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-2xl\",\n                                                    children: score2\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>updateScore(\"player2\", score2 - 1),\n                                                    className: \"btn btn-error\",\n                                                    children: \"-\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"rDUXxq40ZIOEJ4D7n9p7DvLgWfY=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OENBQXFCaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRzlGLDhEQUFDZTs7c0NBQ0MsOERBQUNlOzRCQUFHZCxXQUFVO3NDQUF5RDs7Ozs7O3NDQUN2RSw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNlOzRDQUFHZixXQUFVO3NEQUEyQzFCOzs7Ozs7c0RBQ3pELDhEQUFDeUI7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDUztvREFBT0MsU0FBUyxJQUFNZCxZQUFZLFdBQVdsQixTQUFTO29EQUFJc0IsV0FBVTs4REFBa0I7Ozs7Ozs4REFDdkYsOERBQUNnQjtvREFBS2hCLFdBQVU7OERBQVl0Qjs7Ozs7OzhEQUM1Qiw4REFBQytCO29EQUFPQyxTQUFTLElBQU1kLFlBQVksV0FBV2xCLFNBQVM7b0RBQUlzQixXQUFVOzhEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUd6Riw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDZTs0Q0FBR2YsV0FBVTtzREFBMkN4Qjs7Ozs7O3NEQUN6RCw4REFBQ3VCOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1M7b0RBQU9DLFNBQVMsSUFBTWQsWUFBWSxXQUFXaEIsU0FBUztvREFBSW9CLFdBQVU7OERBQWtCOzs7Ozs7OERBQ3ZGLDhEQUFDZ0I7b0RBQUtoQixXQUFVOzhEQUFZcEI7Ozs7Ozs4REFDNUIsOERBQUM2QjtvREFBT0MsU0FBUyxJQUFNZCxZQUFZLFdBQVdoQixTQUFTO29EQUFJb0IsV0FBVTs4REFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJHO0dBL0ZNM0I7S0FBQUE7QUFpR04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3BsYXllcjEsIHNldFBsYXllcjFdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGxheWVyMiwgc2V0UGxheWVyMl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzY29yZTEsIHNldFNjb3JlMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Njb3JlMiwgc2V0U2NvcmUyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWF0Y2hJZCwgc2V0TWF0Y2hJZF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW21hdGNoVXJsLCBzZXRNYXRjaFVybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTsgLy8gVHJhY2sgbWF0Y2ggVVJMXG5cbiAgY29uc3Qgc3RhcnRNYXRjaCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3N0YXJ0X21hdGNoJywgeyBwbGF5ZXIxLCBwbGF5ZXIyIH0pO1xuICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIGZyb20gc3RhcnRfbWF0Y2g6JywgcmVzcG9uc2UuZGF0YSk7ICAvLyBBZGQgdGhpcyBsaW5lXG4gICAgICBzZXRNYXRjaElkKHJlc3BvbnNlLmRhdGEubWF0Y2hJZCk7ICAvLyBFbnN1cmUgdGhpcyBpcyBjb3JyZWN0bHkgbWFwcGVkXG4gICAgICBzZXRTY29yZTEoMCk7XG4gICAgICBzZXRTY29yZTIoMCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLm1hdGNoSWQpOyAgLy8gQWRkIHRoaXMgbGluZVxuICAgICAgc2V0TWF0Y2hVcmwoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vbWF0Y2gvJHtyZXNwb25zZS5kYXRhLm1hdGNoSWR9YCk7ICAvLyBDb25zdHJ1Y3QgbWF0Y2ggVVJMXG4gICAgICBjb25zb2xlLmxvZygnTWF0Y2ggc3RhcnRlZDonLCByZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IG1hdGNoOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlU2NvcmUgPSBhc3luYyAocGxheWVyOiBzdHJpbmcsIG5ld1Njb3JlOiBudW1iZXIpID0+IHsgXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgbWF0Y2hJZDonLCBtYXRjaElkKTsgIC8vIEFkZCB0aGlzIGxpbmVcbiAgXG4gICAgaWYgKCFtYXRjaElkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBtYXRjaElkIGF2YWlsYWJsZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIHNjb3JlOicsIHsgcGxheWVyLCBuZXdTY29yZSwgbWF0Y2hJZCB9KTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VwZGF0ZV9zY29yZScsIHsgcGxheWVyLCBuZXdTY29yZSwgbWF0Y2hJZCB9KTsgIC8vIEVuc3VyZSBtYXRjaElkIGlzIHBhc3NlZFxuICAgICAgaWYgKHBsYXllciA9PT0gJ3BsYXllcjEnKSB7XG4gICAgICAgIHNldFNjb3JlMShuZXdTY29yZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTY29yZTIobmV3U2NvcmUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHNjb3JlOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdmlhLWdyZWVuLTQwMCB0by1wdXJwbGUtNTAwIHRleHQtd2hpdGUgcC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNiBiZy13aGl0ZSB0ZXh0LWdyYXktODAwIHNoYWRvdy1sZyByb3VuZGVkLWxnIG1heC13LTJ4bFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXIgdGV4dC1ibHVlLTYwMFwiPkxpdmUgU2NvcmUgVHJhY2tlcjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGF5ZXIgMSBOYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtwbGF5ZXIxfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF5ZXIxKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGlucHV0LXByaW1hcnkgbWItMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxheWVyIDIgTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cGxheWVyMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGxheWVyMihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBpbnB1dC1zZWNvbmRhcnkgbWItNFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0TWF0Y2h9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN0YXJ0IE1hdGNoPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bWF0Y2hVcmwgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPk1hdGNoIFVSTDogPExpbmsgaHJlZj17bWF0Y2hVcmx9PjxhIGNsYXNzTmFtZT1cImxpbmsgbGluay1wcmltYXJ5XCI+e21hdGNoVXJsfTwvYT48L0xpbms+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC1jZW50ZXIgdGV4dC1ncmVlbi02MDBcIj5NYXRjaCBTY29yZTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kIG1iLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yIHRleHQtcmVkLTYwMFwiPntwbGF5ZXIxfTwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVTY29yZSgncGxheWVyMScsIHNjb3JlMSArIDEpfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj57c2NvcmUxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVNjb3JlKCdwbGF5ZXIxJywgc2NvcmUxIC0gMSl9IGNsYXNzTmFtZT1cImJ0biBidG4tZXJyb3JcIj4tPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMiB0ZXh0LXJlZC02MDBcIj57cGxheWVyMn08L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlU2NvcmUoJ3BsYXllcjInLCBzY29yZTIgKyAxKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e3Njb3JlMn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVTY29yZSgncGxheWVyMicsIHNjb3JlMiAtIDEpfSBjbGFzc05hbWU9XCJidG4gYnRuLWVycm9yXCI+LTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkxpbmsiLCJIb21lIiwicGxheWVyMSIsInNldFBsYXllcjEiLCJwbGF5ZXIyIiwic2V0UGxheWVyMiIsInNjb3JlMSIsInNldFNjb3JlMSIsInNjb3JlMiIsInNldFNjb3JlMiIsIm1hdGNoSWQiLCJzZXRNYXRjaElkIiwibWF0Y2hVcmwiLCJzZXRNYXRjaFVybCIsInN0YXJ0TWF0Y2giLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiZXJyb3IiLCJ1cGRhdGVTY29yZSIsInBsYXllciIsIm5ld1Njb3JlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJocmVmIiwiYSIsImgyIiwiaDMiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});