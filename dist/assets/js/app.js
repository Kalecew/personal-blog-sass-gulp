/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/resizeTextarea.js":
/*!*****************************************!*\
  !*** ./src/assets/js/resizeTextarea.js ***!
  \*****************************************/
/***/ (function() {

eval("function resizeTextarea(textarea) {\r\n  textarea.style.height = 0\r\n  textarea.style.height = textarea.scrollHeight + 1 + \"px\"\r\n  textarea.value.indexOf('\\n') > -1 ? \r\n  \ttextarea.style.width = \"100%\" : \r\n  \ttextarea.cols = textarea.textLength*2\r\n}\r\n~function () {\r\n  var textarea = document.querySelector('#new-post-input')\r\n  textarea.addEventListener('input', function (e) { resizeTextarea(e.target) })\r\n  resizeTextarea(textarea)\r\n}()\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/resizeTextarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/resizeTextarea.js"]();
/******/ 	
/******/ })()
;