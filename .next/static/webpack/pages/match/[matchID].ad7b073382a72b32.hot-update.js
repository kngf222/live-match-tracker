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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MatchPage() {\n    _s();\n    const [match, setMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // const { matchId } = router.query;\n    // console.log('router query matchId:', matchId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        const { matchId } = router.query;\n        console.log(\"router query matchId:\", matchId);\n        if (matchId) {\n            console.log(\"Fetching match data for matchId: \".concat(matchId));\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/get_match/\".concat(matchId)).then((response)=>{\n                console.log(\"Match data received:\", response.data);\n                setMatch(response.data);\n                setLoading(false);\n            }).catch((error)=>{\n                console.error(\"Failed to fetch match:\", error);\n                setLoading(false);\n            });\n        }\n    }, [\n        router.isReady,\n        router.query\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center mt-10\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, this);\n    }\n    if (!match) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center mt-10\",\n            children: \"Match not found\"\n        }, void 0, false, {\n            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 bg-base-200 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-6 text-center\",\n                children: [\n                    \"Match between \",\n                    match.player1,\n                    \" and \",\n                    match.player2\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold mb-4 text-center\",\n                children: \"Score\"\n            }, void 0, false, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-around mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-semibold mb-2\",\n                                children: match.player1\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center space-x-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-2xl\",\n                                    children: match.score1\n                                }, void 0, false, {\n                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-semibold mb-2\",\n                                children: match.player2\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center space-x-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-2xl\",\n                                    children: match.score2\n                                }, void 0, false, {\n                                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold mb-4 text-center\",\n                children: \"Match History\"\n            }, void 0, false, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-disc list-inside\",\n                children: match.histories.map((history)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            history.player,\n                            \" scored \",\n                            history.newScore,\n                            \" at \",\n                            new Date(history.timestamp).toLocaleTimeString()\n                        ]\n                    }, history.id, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/match/[matchID].tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchPage, \"WI+BBEFo0+cxzJsEzUxTCup8EpA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MatchPage;\nvar _c;\n$RefreshReg$(_c, \"MatchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYXRjaC9bbWF0Y2hJRF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNkO0FBa0JYLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQWU7SUFDakQsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1TLFNBQVNQLHNEQUFTQTtJQUN4QixvQ0FBb0M7SUFDcEMsaURBQWlEO0lBRWpERCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ1EsT0FBT0MsT0FBTyxFQUFFO1FBRXJCLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdGLE9BQU9HLEtBQUs7UUFDaENDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJIO1FBRXJDLElBQUlBLFNBQVM7WUFDWEUsUUFBUUMsR0FBRyxDQUFDLG9DQUE0QyxPQUFSSDtZQUNoRFIsaURBQVMsQ0FBQyxrQkFBMEIsT0FBUlEsVUFDekJLLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQ0pKLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JHLFNBQVNDLElBQUk7Z0JBQ2pEWixTQUFTVyxTQUFTQyxJQUFJO2dCQUN0QlYsV0FBVztZQUNiLEdBQ0NXLEtBQUssQ0FBQ0MsQ0FBQUE7Z0JBQ0xQLFFBQVFPLEtBQUssQ0FBQywwQkFBMEJBO2dCQUN4Q1osV0FBVztZQUNiO1FBQ0o7SUFDRixHQUFHO1FBQUNDLE9BQU9DLE9BQU87UUFBRUQsT0FBT0csS0FBSztLQUFDO0lBRWpDLElBQUlMLFNBQVM7UUFDWCxxQkFBTyw4REFBQ2M7WUFBSUMsV0FBVTtzQkFBb0I7Ozs7OztJQUM1QztJQUVBLElBQUksQ0FBQ2pCLE9BQU87UUFDVixxQkFBTyw4REFBQ2dCO1lBQUlDLFdBQVU7c0JBQW9COzs7Ozs7SUFDNUM7SUFFQSxxQkFDRSw4REFBQ0Q7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOztvQkFBc0M7b0JBQWVqQixNQUFNbUIsT0FBTztvQkFBQztvQkFBTW5CLE1BQU1vQixPQUFPOzs7Ozs7OzBCQUNwRyw4REFBQ0M7Z0JBQUdKLFdBQVU7MEJBQTBDOzs7Ozs7MEJBQ3hELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0s7Z0NBQUdMLFdBQVU7MENBQThCakIsTUFBTW1CLE9BQU87Ozs7OzswQ0FDekQsOERBQUNIO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDTTtvQ0FBS04sV0FBVTs4Q0FBWWpCLE1BQU13QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHNUMsOERBQUNSO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0s7Z0NBQUdMLFdBQVU7MENBQThCakIsTUFBTW9CLE9BQU87Ozs7OzswQ0FDekQsOERBQUNKO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDTTtvQ0FBS04sV0FBVTs4Q0FBWWpCLE1BQU15QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJOUMsOERBQUNKO2dCQUFHSixXQUFVOzBCQUEwQzs7Ozs7OzBCQUN4RCw4REFBQ1M7Z0JBQUdULFdBQVU7MEJBQ1hqQixNQUFNMkIsU0FBUyxDQUFDQyxHQUFHLENBQUNDLENBQUFBLHdCQUNuQiw4REFBQ0M7OzRCQUNFRCxRQUFRRSxNQUFNOzRCQUFDOzRCQUFTRixRQUFRRyxRQUFROzRCQUFDOzRCQUFLLElBQUlDLEtBQUtKLFFBQVFLLFNBQVMsRUFBRUMsa0JBQWtCOzt1QkFEdEZOLFFBQVFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0I7R0FoRXdCckM7O1FBR1BGLGtEQUFTQTs7O0tBSEZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21hdGNoL1ttYXRjaElEXS50c3g/MTE0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW50ZXJmYWNlIE1hdGNoIHtcbiAgaWQ6IG51bWJlcjtcbiAgcGxheWVyMTogc3RyaW5nO1xuICBwbGF5ZXIyOiBzdHJpbmc7XG4gIHNjb3JlMTogbnVtYmVyO1xuICBzY29yZTI6IG51bWJlcjtcbiAgaGlzdG9yaWVzOiBIaXN0b3J5W107XG59XG5cbmludGVyZmFjZSBIaXN0b3J5IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGxheWVyOiBzdHJpbmc7XG4gIG5ld1Njb3JlOiBudW1iZXI7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaFBhZ2UoKSB7XG4gIGNvbnN0IFttYXRjaCwgc2V0TWF0Y2hdID0gdXNlU3RhdGU8TWF0Y2ggfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBjb25zdCB7IG1hdGNoSWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgLy8gY29uc29sZS5sb2coJ3JvdXRlciBxdWVyeSBtYXRjaElkOicsIG1hdGNoSWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBtYXRjaElkIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgY29uc29sZS5sb2coJ3JvdXRlciBxdWVyeSBtYXRjaElkOicsIG1hdGNoSWQpO1xuXG4gICAgaWYgKG1hdGNoSWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBGZXRjaGluZyBtYXRjaCBkYXRhIGZvciBtYXRjaElkOiAke21hdGNoSWR9YCk7XG4gICAgICBheGlvcy5nZXQoYC9hcGkvZ2V0X21hdGNoLyR7bWF0Y2hJZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ01hdGNoIGRhdGEgcmVjZWl2ZWQ6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgc2V0TWF0Y2gocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIG1hdGNoOicsIGVycm9yKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbcm91dGVyLmlzUmVhZHksIHJvdXRlci5xdWVyeV0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+TWF0Y2ggbm90IGZvdW5kPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgYmctYmFzZS0yMDAgbWluLWgtc2NyZWVuXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXJcIj5NYXRjaCBiZXR3ZWVuIHttYXRjaC5wbGF5ZXIxfSBhbmQge21hdGNoLnBsYXllcjJ9PC9oMT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC1jZW50ZXJcIj5TY29yZTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgbWItNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+e21hdGNoLnBsYXllcjF9PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj57bWF0Y2guc2NvcmUxfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj57bWF0Y2gucGxheWVyMn08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPnttYXRjaC5zY29yZTJ9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPk1hdGNoIEhpc3Rvcnk8L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZVwiPlxuICAgICAgICB7bWF0Y2guaGlzdG9yaWVzLm1hcChoaXN0b3J5ID0+IChcbiAgICAgICAgICA8bGkga2V5PXtoaXN0b3J5LmlkfT5cbiAgICAgICAgICAgIHtoaXN0b3J5LnBsYXllcn0gc2NvcmVkIHtoaXN0b3J5Lm5ld1Njb3JlfSBhdCB7bmV3IERhdGUoaGlzdG9yeS50aW1lc3RhbXApLnRvTG9jYWxlVGltZVN0cmluZygpfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiTWF0Y2hQYWdlIiwibWF0Y2giLCJzZXRNYXRjaCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiaXNSZWFkeSIsIm1hdGNoSWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicGxheWVyMSIsInBsYXllcjIiLCJoMiIsImgzIiwic3BhbiIsInNjb3JlMSIsInNjb3JlMiIsInVsIiwiaGlzdG9yaWVzIiwibWFwIiwiaGlzdG9yeSIsImxpIiwicGxheWVyIiwibmV3U2NvcmUiLCJEYXRlIiwidGltZXN0YW1wIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/match/[matchID].tsx\n"));

/***/ })

});