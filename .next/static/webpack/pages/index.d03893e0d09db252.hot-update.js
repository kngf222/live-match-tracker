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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    const [player1, setPlayer1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [player2, setPlayer2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [score1, setScore1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score2, setScore2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [matchId, setMatchId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Track the match ID\n    const startMatch = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/start_match\", {\n                player1,\n                player2\n            });\n            setMatchId(response.data.id); // Save the match ID from the response\n            setScore1(0);\n            setScore2(0);\n            console.log(\"Match started:\", response.data);\n        } catch (error) {\n            console.error(\"Failed to start match:\", error);\n        }\n    };\n    const updateScore = async (player, newScore)=>{\n        if (!matchId) {\n            console.error(\"No matchId available\");\n            return;\n        }\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/update_score\", {\n                player,\n                newScore,\n                matchId\n            });\n            if (player === \"player1\") {\n                setScore1(newScore);\n            } else {\n                setScore2(newScore);\n            }\n            console.log(\"Score updated for matchId:\", matchId);\n        } catch (error) {\n            console.error(\"Failed to update score:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 bg-base-200 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-6 text-center\",\n                children: \"Welcome to Live Score Tracker\"\n            }, void 0, false, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Player 1 Name\",\n                        className: \"input input-bordered w-full max-w-xs mb-4\",\n                        value: player1,\n                        onChange: (e)=>setPlayer1(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Player 2 Name\",\n                        className: \"input input-bordered w-full max-w-xs mb-4\",\n                        value: player2,\n                        onChange: (e)=>setPlayer2(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary w-full max-w-xs\",\n                        onClick: startMatch,\n                        children: \"Start Match\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold mb-4 text-center\",\n                        children: \"Match Score\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl font-semibold mb-2\",\n                                        children: player1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center space-x-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-secondary\",\n                                                onClick: ()=>updateScore(\"player1\", score1 + 1),\n                                                children: \"+\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-2xl\",\n                                                children: score1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-secondary\",\n                                                onClick: ()=>updateScore(\"player1\", score1 - 1),\n                                                children: \"-\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl font-semibold mb-2\",\n                                        children: player2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center space-x-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-secondary\",\n                                                onClick: ()=>updateScore(\"player2\", score2 + 1),\n                                                children: \"+\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-2xl\",\n                                                children: score2\n                                            }, void 0, false, {\n                                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-secondary\",\n                                                onClick: ()=>updateScore(\"player2\", score2 - 1),\n                                                children: \"-\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"MisQedqxMsQKAIEDIVgU4RBnlPA=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNZCxZQUFZLFdBQVdaLFNBQVM7MERBQUk7Ozs7OzswREFDekYsOERBQUM2QjtnREFBS2IsV0FBVTswREFBWWhCOzs7Ozs7MERBQzVCLDhEQUFDeUI7Z0RBQU9ULFdBQVU7Z0RBQW9CVSxTQUFTLElBQU1kLFlBQVksV0FBV1osU0FBUzswREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZHO0dBakZNUDtLQUFBQTtBQW1GTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtwbGF5ZXIxLCBzZXRQbGF5ZXIxXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3BsYXllcjIsIHNldFBsYXllcjJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2NvcmUxLCBzZXRTY29yZTFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY29yZTIsIHNldFNjb3JlMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21hdGNoSWQsIHNldE1hdGNoSWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7ICAvLyBUcmFjayB0aGUgbWF0Y2ggSURcblxuICBjb25zdCBzdGFydE1hdGNoID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvc3RhcnRfbWF0Y2gnLCB7IHBsYXllcjEsIHBsYXllcjIgfSk7XG4gICAgICBzZXRNYXRjaElkKHJlc3BvbnNlLmRhdGEuaWQpOyAgLy8gU2F2ZSB0aGUgbWF0Y2ggSUQgZnJvbSB0aGUgcmVzcG9uc2VcbiAgICAgIHNldFNjb3JlMSgwKTtcbiAgICAgIHNldFNjb3JlMigwKTtcbiAgICAgIGNvbnNvbGUubG9nKCdNYXRjaCBzdGFydGVkOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgbWF0Y2g6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVTY29yZSA9IGFzeW5jIChwbGF5ZXI6IHN0cmluZywgbmV3U2NvcmU6IG51bWJlcikgPT4ge1xuICAgIGlmICghbWF0Y2hJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gbWF0Y2hJZCBhdmFpbGFibGUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91cGRhdGVfc2NvcmUnLCB7IHBsYXllciwgbmV3U2NvcmUsIG1hdGNoSWQgfSk7XG4gICAgICBpZiAocGxheWVyID09PSAncGxheWVyMScpIHtcbiAgICAgICAgc2V0U2NvcmUxKG5ld1Njb3JlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjb3JlMihuZXdTY29yZSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnU2NvcmUgdXBkYXRlZCBmb3IgbWF0Y2hJZDonLCBtYXRjaElkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBzY29yZTonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIGJnLWJhc2UtMjAwIG1pbi1oLXNjcmVlblwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi02IHRleHQtY2VudGVyXCI+V2VsY29tZSB0byBMaXZlIFNjb3JlIFRyYWNrZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsYXllciAxIE5hbWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14cyBtYi00XCJcbiAgICAgICAgICB2YWx1ZT17cGxheWVyMX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBsYXllcjEoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGF5ZXIgMiBOYW1lXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHMgbWItNFwiXG4gICAgICAgICAgdmFsdWU9e3BsYXllcjJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF5ZXIyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgdy1mdWxsIG1heC13LXhzXCIgb25DbGljaz17c3RhcnRNYXRjaH0+U3RhcnQgTWF0Y2g8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPk1hdGNoIFNjb3JlPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kIG1iLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj57cGxheWVyMX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVNjb3JlKCdwbGF5ZXIxJywgc2NvcmUxICsgMSl9Pis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj57c2NvcmUxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVNjb3JlKCdwbGF5ZXIxJywgc2NvcmUxIC0gMSl9Pi08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPntwbGF5ZXIyfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gdXBkYXRlU2NvcmUoJ3BsYXllcjInLCBzY29yZTIgKyAxKX0+KzwvYnV0dG9uPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPntzY29yZTJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gdXBkYXRlU2NvcmUoJ3BsYXllcjInLCBzY29yZTIgLSAxKX0+LTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJIb21lIiwicGxheWVyMSIsInNldFBsYXllcjEiLCJwbGF5ZXIyIiwic2V0UGxheWVyMiIsInNjb3JlMSIsInNldFNjb3JlMSIsInNjb3JlMiIsInNldFNjb3JlMiIsIm1hdGNoSWQiLCJzZXRNYXRjaElkIiwic3RhcnRNYXRjaCIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVwZGF0ZVNjb3JlIiwicGxheWVyIiwibmV3U2NvcmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJoMyIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});