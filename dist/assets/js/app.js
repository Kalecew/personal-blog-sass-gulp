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

eval("\r\nconst showModalBtns = document.querySelectorAll('[data-show-modal]')\r\nconst overlays = document.querySelectorAll('[data-modal-overlay]')\r\nconst closeBtns = document.querySelectorAll('[data-modal-close]')\r\nconst stopVideo = modal => {\r\n\tif (video = modal.querySelector('video')) {\r\n\t\tvideo.pause()\r\n\t} else if (video = modal.querySelector('iframe')) {\r\n\t\tvideo.src = video.src;\r\n\t}\t\r\n}\r\nconst showModal = e => {\r\n\tconst data = e.currentTarget.dataset.showModal\r\n\tconst modal = document.querySelector(`[data-modal=${data}]`)\r\n\tmodal.classList.remove('hidden')\r\n\tconst content = modal.querySelector('[data-modal-content]')\r\n\tsetTimeout(()=>content.classList.remove('modal__content--hidden'), 1)\r\n\tdocument.body.classList.add('no-scroll')\r\n}\r\nconst hideModal = e => {\r\n\tconst data = e.target.dataset\r\n\tif ((data.modalOverlay !== undefined)  ||  (data.modalClose !== undefined)) {\r\n\t\tconst modal = e.target.closest('[data-modal]')\t\t\t\r\n\t\tconst content = modal.querySelector('[data-modal-content]')\r\n\t\tcontent.classList.add('modal__content--hidden')\r\n\t\tsetTimeout(()=>{\r\n\t\t\tmodal.classList.add('hidden')\r\n\t\t\tdocument.body.classList.remove('no-scroll')\r\n\t\t}, 200)\t\t\r\n\t\tstopVideo(e.target)\t\r\n\t}\r\n}\r\nshowModalBtns.forEach(item => {\r\n\titem.addEventListener('click', showModal)\r\n})\r\noverlays.forEach(item => {\r\n\titem.addEventListener('click', hideModal)\r\n})\r\ncloseBtns.forEach(item => {\r\n\titem.addEventListener('click', hideModal)\r\n})\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modals.js?");

/***/ }),

/***/ "./src/assets/js/resizeTextarea.js":
/*!*****************************************!*\
  !*** ./src/assets/js/resizeTextarea.js ***!
  \*****************************************/
/***/ (function() {

eval("const resizeTextarea = textarea => {\r\n  console.log(textarea.height)\r\n  textarea.style.height = 0\r\n  textarea.style.height = textarea.scrollHeight + 1 + \"px\"\r\n  textarea.value.indexOf('\\n') > -1 ? \r\n  \ttextarea.style.width = \"100%\" : \r\n  \ttextarea.cols = textarea.textLength*2\r\n}\r\nvar textarea = document.querySelectorAll('[data-textarea]')\r\ntextarea.forEach(item => {\r\n  item.addEventListener('input', (e) => { resizeTextarea(e.target) })\r\n})  \r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/resizeTextarea.js?");

/***/ }),

/***/ "./src/assets/js/sidebar.js":
/*!**********************************!*\
  !*** ./src/assets/js/sidebar.js ***!
  \**********************************/
/***/ (function() {

eval("const burger = document.querySelector('#burger')\r\nconst sidebar = document.querySelector('#sidebar')\r\nconst body = document.body\r\nconst toggleSidebar = () => {\r\n\tburger.classList.toggle('burger--active')\r\n\tsidebar.classList.toggle('sidebar--active')\r\n}\r\nconst closeSidebar = e => {\r\n\tconst $this = e.target\r\n\tif ($this.id !== \"burger\") {\r\n\t\tburger.classList.remove('burger--active')\r\n\t\tsidebar.classList.remove('sidebar--active')\r\n\t}\t\r\n}\r\nburger.addEventListener('click', toggleSidebar)\r\nbody.addEventListener('click', closeSidebar)\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/sidebar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/modals.js"]();
/******/ 	__webpack_modules__["./src/assets/js/resizeTextarea.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/sidebar.js"]();
/******/ 	
/******/ })()
;