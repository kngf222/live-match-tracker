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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    const [player1, setPlayer1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [player2, setPlayer2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [score1, setScore1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score2, setScore2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [matchId, setMatchId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [matchUrl, setMatchUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Track match URL\n    const startMatch = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/start_match\", {\n                player1,\n                player2\n            });\n            console.log(\"Response from start_match:\", response.data); // Add this line\n            setMatchId(response.data.matchId); // Ensure this is correctly mapped\n            setScore1(0);\n            setScore2(0);\n            console.log(response.data.id); // Add this line\n            setMatchUrl(\"\".concat(window.location.origin, \"/match/\").concat(response.data.matchid)); // Construct match URL\n            console.log(\"Match started:\", response.data);\n        } catch (error) {\n            console.error(\"Failed to start match:\", error);\n        }\n    };\n    const updateScore = async (player, newScore)=>{\n        console.log(\"Current matchId:\", matchId); // Add this line\n        if (!matchId) {\n            console.error(\"No matchId available\");\n            return;\n        }\n        console.log(\"Updating score:\", {\n            player,\n            newScore,\n            matchId\n        });\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/update_score\", {\n                player,\n                newScore,\n                matchId\n            }); // Ensure matchId is passed\n            if (player === \"player1\") {\n                setScore1(newScore);\n            } else {\n                setScore2(newScore);\n            }\n        } catch (error) {\n            console.error(\"Failed to update score:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4\",\n                children: \"Welcome to Live Score Tracker\"\n            }, void 0, false, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Player 1 Name\",\n                        value: player1,\n                        onChange: (e)=>setPlayer1(e.target.value),\n                        className: \"input input-bordered mr-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Player 2 Name\",\n                        value: player2,\n                        onChange: (e)=>setPlayer2(e.target.value),\n                        className: \"input input-bordered\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startMatch,\n                        className: \"btn btn-primary ml-2\",\n                        children: \"Start Match\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            matchUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Match URL: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: matchUrl,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"link link-primary\",\n                            children: matchUrl\n                        }, void 0, false, {\n                            fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold mb-2\",\n                        children: \"Match Score\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2\",\n                        children: [\n                            player1,\n                            \": \",\n                            score1,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>updateScore(\"player1\", score1 + 1),\n                                className: \"btn btn-sm btn-success ml-2\",\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>updateScore(\"player1\", score1 - 1),\n                                className: \"btn btn-sm btn-danger ml-2\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            player2,\n                            \": \",\n                            score2,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>updateScore(\"player2\", score2 + 1),\n                                className: \"btn btn-sm btn-success ml-2\",\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>updateScore(\"player2\", score2 - 1),\n                                className: \"btn btn-sm btn-danger ml-2\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brianakhtar/Desktop/coding/projects/live_score_tracker/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"rDUXxq40ZIOEJ4D7n9p7DvLgWfY=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tDQUNDLDhEQUFDZ0I7d0JBQUdmLFdBQVU7a0NBQThCOzs7Ozs7a0NBQzVDLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQ1o1Qjs0QkFBUTs0QkFBR0k7MENBQ1osOERBQUNpQztnQ0FBT0MsU0FBUyxJQUFNZCxZQUFZLFdBQVdwQixTQUFTO2dDQUFJd0IsV0FBVTswQ0FBOEI7Ozs7OzswQ0FDbkcsOERBQUNTO2dDQUFPQyxTQUFTLElBQU1kLFlBQVksV0FBV3BCLFNBQVM7Z0NBQUl3QixXQUFVOzBDQUE2Qjs7Ozs7Ozs7Ozs7O2tDQUVwRyw4REFBQ0Q7OzRCQUNFekI7NEJBQVE7NEJBQUdJOzBDQUNaLDhEQUFDK0I7Z0NBQU9DLFNBQVMsSUFBTWQsWUFBWSxXQUFXbEIsU0FBUztnQ0FBSXNCLFdBQVU7MENBQThCOzs7Ozs7MENBQ25HLDhEQUFDUztnQ0FBT0MsU0FBUyxJQUFNZCxZQUFZLFdBQVdsQixTQUFTO2dDQUFJc0IsV0FBVTswQ0FBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RztHQXJGTTdCO0tBQUFBO0FBdUZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtwbGF5ZXIxLCBzZXRQbGF5ZXIxXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3BsYXllcjIsIHNldFBsYXllcjJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2NvcmUxLCBzZXRTY29yZTFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY29yZTIsIHNldFNjb3JlMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21hdGNoSWQsIHNldE1hdGNoSWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttYXRjaFVybCwgc2V0TWF0Y2hVcmxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7IC8vIFRyYWNrIG1hdGNoIFVSTFxuXG4gIGNvbnN0IHN0YXJ0TWF0Y2ggPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9zdGFydF9tYXRjaCcsIHsgcGxheWVyMSwgcGxheWVyMiB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBmcm9tIHN0YXJ0X21hdGNoOicsIHJlc3BvbnNlLmRhdGEpOyAgLy8gQWRkIHRoaXMgbGluZVxuICAgICAgc2V0TWF0Y2hJZChyZXNwb25zZS5kYXRhLm1hdGNoSWQpOyAgLy8gRW5zdXJlIHRoaXMgaXMgY29ycmVjdGx5IG1hcHBlZFxuICAgICAgc2V0U2NvcmUxKDApO1xuICAgICAgc2V0U2NvcmUyKDApO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5pZCk7ICAvLyBBZGQgdGhpcyBsaW5lXG4gICAgICBzZXRNYXRjaFVybChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9tYXRjaC8ke3Jlc3BvbnNlLmRhdGEubWF0Y2hpZH1gKTsgIC8vIENvbnN0cnVjdCBtYXRjaCBVUkxcbiAgICAgIGNvbnNvbGUubG9nKCdNYXRjaCBzdGFydGVkOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgbWF0Y2g6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVTY29yZSA9IGFzeW5jIChwbGF5ZXI6IHN0cmluZywgbmV3U2NvcmU6IG51bWJlcikgPT4geyBcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBtYXRjaElkOicsIG1hdGNoSWQpOyAgLy8gQWRkIHRoaXMgbGluZVxuICBcbiAgICBpZiAoIW1hdGNoSWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIG1hdGNoSWQgYXZhaWxhYmxlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zb2xlLmxvZygnVXBkYXRpbmcgc2NvcmU6JywgeyBwbGF5ZXIsIG5ld1Njb3JlLCBtYXRjaElkIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXBkYXRlX3Njb3JlJywgeyBwbGF5ZXIsIG5ld1Njb3JlLCBtYXRjaElkIH0pOyAgLy8gRW5zdXJlIG1hdGNoSWQgaXMgcGFzc2VkXG4gICAgICBpZiAocGxheWVyID09PSAncGxheWVyMScpIHtcbiAgICAgICAgc2V0U2NvcmUxKG5ld1Njb3JlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjb3JlMihuZXdTY29yZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgc2NvcmU6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5XZWxjb21lIHRvIExpdmUgU2NvcmUgVHJhY2tlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxheWVyIDEgTmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3BsYXllcjF9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF5ZXIxKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBtci0yXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxheWVyIDIgTmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3BsYXllcjJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF5ZXIyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRNYXRjaH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1sLTJcIj5TdGFydCBNYXRjaDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7bWF0Y2hVcmwgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8cD5NYXRjaCBVUkw6IDxhIGhyZWY9e21hdGNoVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwibGluayBsaW5rLXByaW1hcnlcIj57bWF0Y2hVcmx9PC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPk1hdGNoIFNjb3JlPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAge3BsYXllcjF9OiB7c2NvcmUxfVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlU2NvcmUoJ3BsYXllcjEnLCBzY29yZTEgKyAxKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2VzcyBtbC0yXCI+KzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlU2NvcmUoJ3BsYXllcjEnLCBzY29yZTEgLSAxKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyIG1sLTJcIj4tPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtwbGF5ZXIyfToge3Njb3JlMn1cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVNjb3JlKCdwbGF5ZXIyJywgc2NvcmUyICsgMSl9IGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3MgbWwtMlwiPis8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVNjb3JlKCdwbGF5ZXIyJywgc2NvcmUyIC0gMSl9IGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlciBtbC0yXCI+LTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkhvbWUiLCJwbGF5ZXIxIiwic2V0UGxheWVyMSIsInBsYXllcjIiLCJzZXRQbGF5ZXIyIiwic2NvcmUxIiwic2V0U2NvcmUxIiwic2NvcmUyIiwic2V0U2NvcmUyIiwibWF0Y2hJZCIsInNldE1hdGNoSWQiLCJtYXRjaFVybCIsInNldE1hdGNoVXJsIiwic3RhcnRNYXRjaCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIm1hdGNoaWQiLCJlcnJvciIsInVwZGF0ZVNjb3JlIiwicGxheWVyIiwibmV3U2NvcmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsImEiLCJocmVmIiwicmVsIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});