"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/match/[matchID]",{

/***/ "./pages/match/[matchID].tsx":
/*!***********************************!*\
  !*** ./pages/match/[matchID].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MatchPage() {\n    _s();\n    const [match, setMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // const { matchId } = router.query;\n    // console.log('router query matchId:', matchId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        const { matchId } = router.query;\n        console.log(\"router query matchId:\", matchId);\n        if (matchId) {\n            console.log(\"Fetching match data for matchId: \".concat(matchId));\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/get_match/\".concat(matchId)).then((response)=>{\n                console.log(\"Match data received:\", response.data);\n                setMatch(response.data);\n                setLoading(false);\n            }).catch((error)=>{\n                console.error(\"Failed to fetch match:\", error);\n                setLoading(false);\n            });\n        }\n        console.log(\"router query matchId:\", matchId);\n    }, [\n        router.isReady,\n        router.query\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center mt-10\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, this);\n    }\n    if (!match) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center mt-10\",\n            children: \"Match not found\"\n        }, void 0, false, {\n            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n            lineNumber: 55,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 bg-base-200 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-6 text-center\",\n                children: [\n                    \"Match between \",\n                    match.player1,\n                    \" and \",\n                    match.player2\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold mb-4 text-center\",\n                children: \"Score\"\n            }, void 0, false, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-around mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-semibold mb-2\",\n                                children: match.player1\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center space-x-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-2xl\",\n                                    children: match.score1\n                                }, void 0, false, {\n                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-semibold mb-2\",\n                                children: match.player2\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center space-x-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-2xl\",\n                                    children: match.score2\n                                }, void 0, false, {\n                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold mb-4 text-center\",\n                children: \"Match History\"\n            }, void 0, false, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-disc list-inside\",\n                children: match.histories.map((history)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            history.player,\n                            \" scored \",\n                            history.newScore,\n                            \" at \",\n                            new Date(history.timestamp).toLocaleTimeString()\n                        ]\n                    }, history.id, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchPage, \"WI+BBEFo0+cxzJsEzUxTCup8EpA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MatchPage;\nvar _c;\n$RefreshReg$(_c, \"MatchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYXRjaC9bbWF0Y2hJRF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNkO0FBa0JYLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQWU7SUFDakQsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1TLFNBQVNQLHNEQUFTQTtJQUN4QixvQ0FBb0M7SUFDcEMsaURBQWlEO0lBRWpERCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ1EsT0FBT0MsT0FBTyxFQUFFO1FBRXJCLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdGLE9BQU9HLEtBQUs7UUFDaENDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJIO1FBRXJDLElBQUlBLFNBQVM7WUFDWEUsUUFBUUMsR0FBRyxDQUFDLG9DQUE0QyxPQUFSSDtZQUNoRFIsaURBQVMsQ0FBQyxrQkFBMEIsT0FBUlEsVUFDekJLLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQ0pKLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JHLFNBQVNDLElBQUk7Z0JBQ2pEWixTQUFTVyxTQUFTQyxJQUFJO2dCQUN0QlYsV0FBVztZQUNiLEdBQ0NXLEtBQUssQ0FBQ0MsQ0FBQUE7Z0JBQ0xQLFFBQVFPLEtBQUssQ0FBQywwQkFBMEJBO2dCQUN4Q1osV0FBVztZQUNiO1FBQ0o7UUFDQUssUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qkg7SUFDdkMsR0FBRztRQUFDRixPQUFPQyxPQUFPO1FBQUVELE9BQU9HLEtBQUs7S0FBQztJQUVqQyxJQUFJTCxTQUFTO1FBQ1gscUJBQU8sOERBQUNjO1lBQUlDLFdBQVU7c0JBQW9COzs7Ozs7SUFDNUM7SUFFQSxJQUFJLENBQUNqQixPQUFPO1FBQ1YscUJBQU8sOERBQUNnQjtZQUFJQyxXQUFVO3NCQUFvQjs7Ozs7O0lBQzVDO0lBRUEscUJBQ0UsOERBQUNEO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTs7b0JBQXNDO29CQUFlakIsTUFBTW1CLE9BQU87b0JBQUM7b0JBQU1uQixNQUFNb0IsT0FBTzs7Ozs7OzswQkFDcEcsOERBQUNDO2dCQUFHSixXQUFVOzBCQUEwQzs7Ozs7OzBCQUN4RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNLO2dDQUFHTCxXQUFVOzBDQUE4QmpCLE1BQU1tQixPQUFPOzs7Ozs7MENBQ3pELDhEQUFDSDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ007b0NBQUtOLFdBQVU7OENBQVlqQixNQUFNd0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzVDLDhEQUFDUjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNLO2dDQUFHTCxXQUFVOzBDQUE4QmpCLE1BQU1vQixPQUFPOzs7Ozs7MENBQ3pELDhEQUFDSjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ007b0NBQUtOLFdBQVU7OENBQVlqQixNQUFNeUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTlDLDhEQUFDSjtnQkFBR0osV0FBVTswQkFBMEM7Ozs7OzswQkFDeEQsOERBQUNTO2dCQUFHVCxXQUFVOzBCQUNYakIsTUFBTTJCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSx3QkFDbkIsOERBQUNDOzs0QkFDRUQsUUFBUUUsTUFBTTs0QkFBQzs0QkFBU0YsUUFBUUcsUUFBUTs0QkFBQzs0QkFBSyxJQUFJQyxLQUFLSixRQUFRSyxTQUFTLEVBQUVDLGtCQUFrQjs7dUJBRHRGTixRQUFRTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzdCO0dBakV3QnJDOztRQUdQRixrREFBU0E7OztLQUhGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYXRjaC9bbWF0Y2hJRF0udHN4PzExNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBNYXRjaCB7XG4gIGlkOiBudW1iZXI7XG4gIHBsYXllcjE6IHN0cmluZztcbiAgcGxheWVyMjogc3RyaW5nO1xuICBzY29yZTE6IG51bWJlcjtcbiAgc2NvcmUyOiBudW1iZXI7XG4gIGhpc3RvcmllczogSGlzdG9yeVtdO1xufVxuXG5pbnRlcmZhY2UgSGlzdG9yeSB7XG4gIGlkOiBudW1iZXI7XG4gIHBsYXllcjogc3RyaW5nO1xuICBuZXdTY29yZTogbnVtYmVyO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hQYWdlKCkge1xuICBjb25zdCBbbWF0Y2gsIHNldE1hdGNoXSA9IHVzZVN0YXRlPE1hdGNoIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc3QgeyBtYXRjaElkIH0gPSByb3V0ZXIucXVlcnk7XG4gIC8vIGNvbnNvbGUubG9nKCdyb3V0ZXIgcXVlcnkgbWF0Y2hJZDonLCBtYXRjaElkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcblxuICAgIGNvbnN0IHsgbWF0Y2hJZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGNvbnNvbGUubG9nKCdyb3V0ZXIgcXVlcnkgbWF0Y2hJZDonLCBtYXRjaElkKTtcblxuICAgIGlmIChtYXRjaElkKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRmV0Y2hpbmcgbWF0Y2ggZGF0YSBmb3IgbWF0Y2hJZDogJHttYXRjaElkfWApO1xuICAgICAgYXhpb3MuZ2V0KGAvYXBpL2dldF9tYXRjaC8ke21hdGNoSWR9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdNYXRjaCBkYXRhIHJlY2VpdmVkOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIHNldE1hdGNoKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBtYXRjaDonLCBlcnJvcik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygncm91dGVyIHF1ZXJ5IG1hdGNoSWQ6JywgbWF0Y2hJZCk7XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeSwgcm91dGVyLnF1ZXJ5XSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5NYXRjaCBub3QgZm91bmQ8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMCBiZy1iYXNlLTIwMCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNiB0ZXh0LWNlbnRlclwiPk1hdGNoIGJldHdlZW4ge21hdGNoLnBsYXllcjF9IGFuZCB7bWF0Y2gucGxheWVyMn08L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPlNjb3JlPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj57bWF0Y2gucGxheWVyMX08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPnttYXRjaC5zY29yZTF9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPnttYXRjaC5wbGF5ZXIyfTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e21hdGNoLnNjb3JlMn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtY2VudGVyXCI+TWF0Y2ggSGlzdG9yeTwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlXCI+XG4gICAgICAgIHttYXRjaC5oaXN0b3JpZXMubWFwKGhpc3RvcnkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2hpc3RvcnkuaWR9PlxuICAgICAgICAgICAge2hpc3RvcnkucGxheWVyfSBzY29yZWQge2hpc3RvcnkubmV3U2NvcmV9IGF0IHtuZXcgRGF0ZShoaXN0b3J5LnRpbWVzdGFtcCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJNYXRjaFBhZ2UiLCJtYXRjaCIsInNldE1hdGNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJpc1JlYWR5IiwibWF0Y2hJZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwbGF5ZXIxIiwicGxheWVyMiIsImgyIiwiaDMiLCJzcGFuIiwic2NvcmUxIiwic2NvcmUyIiwidWwiLCJoaXN0b3JpZXMiLCJtYXAiLCJoaXN0b3J5IiwibGkiLCJwbGF5ZXIiLCJuZXdTY29yZSIsIkRhdGUiLCJ0aW1lc3RhbXAiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/match/[matchID].tsx\n"));

/***/ })

});