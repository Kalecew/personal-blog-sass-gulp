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

/***/ "./src/assets/js/modals.js":
/*!*********************************!*\
  !*** ./src/assets/js/modals.js ***!
  \*********************************/
/***/ (function() {

eval("\r\nconst contactBtns = document.querySelectorAll('[data-show-modal]')\r\nconst overlays = document.querySelectorAll('[data-modal-overlay]')\r\nconst closeBtns = document.querySelectorAll('[data-modal-close]')\r\nconst showModal = (e) => {\r\n\tconst data = e.target.dataset.showModal\r\n\tconst modal = document.querySelector(`[data-modal=${data}]`)\r\n\tmodal.classList.remove('hidden')\r\n\tdocument.body.classList.add('no-scroll')\r\n}\r\nconst hideModal = (e) => {\r\n\tconst data = e.target.dataset\r\n\tif ((data.modalOverlay !== undefined)  ||  (data.modalClose !== undefined)) {\r\n\t\te.target.closest('[data-modal]').classList.add('hidden')\t\r\n\t\tdocument.body.classList.remove('no-scroll')\r\n\t}\r\n}\r\ncontactBtns.forEach((item) => {\r\n\titem.addEventListener('click', showModal)\r\n})\r\noverlays.forEach((item) => {\r\n\titem.addEventListener('click', hideModal)\r\n})\r\ncloseBtns.forEach((item) => {\r\n\titem.addEventListener('click', hideModal)\r\n})\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modals.js?");

/***/ }),

/***/ "./src/assets/js/resizeTextarea.js":
/*!*****************************************!*\
  !*** ./src/assets/js/resizeTextarea.js ***!
  \*****************************************/
/***/ (function() {

eval("const resizeTextarea = (textarea) => {\r\n  textarea.style.height = 0\r\n  textarea.style.height = textarea.scrollHeight + 1 + \"px\"\r\n  textarea.value.indexOf('\\n') > -1 ? \r\n  \ttextarea.style.width = \"100%\" : \r\n  \ttextarea.cols = textarea.textLength*2\r\n}\r\nvar textarea = document.querySelectorAll('[data-textarea]')\r\ntextarea.forEach(function(item) {\r\n  item.addEventListener('input', (e) => { resizeTextarea(e.target) })\r\n  resizeTextarea(item)\r\n})  \r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/resizeTextarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/modals.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/resizeTextarea.js"]();
/******/ 	
/******/ })()
;