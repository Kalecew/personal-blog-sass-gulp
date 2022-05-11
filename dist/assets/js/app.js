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

/***/ }),

/***/ "./src/assets/js/wall.js":
/*!*******************************!*\
  !*** ./src/assets/js/wall.js ***!
  \*******************************/
/***/ (function() {

eval("const posts = [\r\n\t{\r\n\t\tlink: \"\",\r\n\t\timg: \"\",\r\n\t\tvideo: \"\",\r\n\t\ttitle: \"\",\r\n\t\ttext: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.\",\r\n\t\tdate: \"2020-06-21\",\r\n\t\tcategory: \"\",\r\n\t},\r\n\t{\r\n\t\tlink: {src: \"article.html\", title: \"читать\"},\r\n\t\timg: \"assets/images/files/posts/preview1.jpg\",\r\n\t\tvideo: \"\",\r\n\t\ttitle: \"Как писать код быстро и безболезненно?\",\r\n\t\ttext: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.\",\r\n\t\tdate: \"2020-06-21\",\r\n\t\tcategory: {link: \"create-sites.html\", title: \"создание сайтов\"},\r\n\t},\r\n\t{\r\n\t\tlink: {src: \"article.html\", title: \"оставить комментарий\"},\r\n\t\timg: \"\",\r\n\t\tvideo: \"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4\",\r\n\t\ttitle: \"Купил новый ноутбук за 150 000 руб\",\t\r\n\t\ttext: \"\",\r\n\t\tdate: \"2020-06-21\",\r\n\t\tcategory: {link: \"video-promotion.html\", title: \"продвижение видео\"},\r\n\t},\r\n\t{\r\n\t\tlink: {src: \"article.html\", title: \"читать\"},\r\n\t\timg: \"assets/images/files/posts/preview2.jpg\",\r\n\t\tvideo: \"\",\r\n\t\ttitle: \"Как я сходил на FrontEnd Conf 2021\",\r\n\t\ttext: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.\",\r\n\t\tdate: \"2020-06-21\",\r\n\t\tcategory: {link: \"internet-marketing.html\", title: \"интернет маркетинг\"},\r\n\t},\r\n]\r\n\r\n\r\nconst postsList = document.querySelector('#posts')\r\nconst renderPost = post => {\r\n\tconst renderImg = ({link, img}) => {\r\n\t\tif (img !== \"\") {\r\n\t\t\treturn `\r\n\t\t\t\t<header class=\"post__header\">\r\n\t\t\t\t\t<div class=\"post__img-wrap\">\r\n\t\t\t\t\t\t<a class=\"link-wrap\" href=\"${link.src}\">\r\n\t\t\t\t\t\t\t<img class=\"post__img\" src=\"${img}\">\r\n\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t</header>\r\n\t\t\t`\t\t\t\t\r\n\t\t}\r\n\t\treturn ``\t\r\n\t}\r\n\tconst renderVideo = ({video}) => {\r\n\t\tif (video !== \"\") {\r\n\t\t\treturn `\r\n\t\t\t\t<header class=\"post__header\">\r\n\t\t\t\t\t<div class=\"post__video-wrap\">\r\n\t\t\t\t\t\t<video class=\"post__video\" src=\"${video}\" controls></video>\r\n\t\t\t\t\t</div>\t\t\r\n\t\t\t\t</header>\r\n\t\t\t`\t\t\t\t\r\n\t\t}\r\n\t\treturn ``\t\r\n\t}\r\n\tconst renderTitle = ({link, title}) => {\r\n\t\tif (title !== \"\") {\r\n\t\t\treturn `\r\n\t\t\t\t<h3 class=\"post__title\">\r\n\t\t\t\t\t<a class=\"link-wrap\" href=\"${link.src}\">${title}</a>\r\n\t\t\t\t</h3>\r\n\t\t\t`\t\t\t\t\r\n\t\t}\r\n\t\treturn ``\t\r\n\t}\r\n\tconst renderText = ({text}) => {\r\n\t\tif (text !== \"\") {\r\n\t\t\treturn `\r\n\t\t\t\t<p class=\"post__text\">${text}</p> \r\n\t\t\t`\t\t\t\t\r\n\t\t}\r\n\t\treturn ``\t\r\n\t}\r\n\tconst renderCategory = ({category}) => {\r\n\t\tif (category !== \"\") {\r\n\t\t\treturn `\r\n\t\t\t\t<div class=\"post__category\">\r\n\t\t\t\t\t<a class=\"link-wrap\" href=\"${category.link}\">${category.title}</a>\r\n\t\t\t\t</div>\r\n\t\t\t`\t\t\t\t\r\n\t\t}\r\n\t\treturn ``\t\r\n\t}\r\n\tconst renderDate = ({date}) => {\r\n\t\tif (date !== \"\") {\r\n\t\t\tconst formattedDate = new Date(date).toLocaleDateString()\r\n\t\t\treturn `\r\n\t\t\t\t<time class=\"post__date\" datetime=\"${date}\">${formattedDate}</time>\r\n\t\t\t`\t\t\t\t\r\n\t\t}\r\n\t\treturn ``\t\r\n\t}\r\n\tconst renderLink = ({link}) => {\r\n\t\tif (link !== \"\") {\r\n\t\t\treturn `\r\n\t\t\t\t<a class=\"post__link\" href=\"${link.src}\">${link.title}</a>\r\n\t\t\t`\t\t\t\t\r\n\t\t}\r\n\t\treturn ``\t\r\n\t}\r\n\treturn `\r\n\t\t<li class=\"posts__item\">\r\n\t\t\t<div class=\"posts__card post\">\r\n\t\t\t\t` + renderImg(post) + `\t\r\n\t\t\t\t<div class=\"post__container\">\r\n\t\t\t\t\t` + renderVideo(post) + `\t\r\n\t\t\t\t\t<div class=\"post__content\">\t\r\n\t\t\t\t\t\t` + renderTitle(post) + renderText(post) + `\r\n\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t<footer class=\"post__footer\">\r\n\t\t\t\t\t\t`+ renderDate(post) + renderCategory(post) + renderLink(post) + `\t\t\t\t\t\t\r\n\t\t\t\t\t</footer>\t\r\n\t\t\t\t</div>\t\t\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t`\r\n}\r\n\r\nconst loadPosts = () => {\r\n\tposts.forEach(post=>{\r\n\t\tpostsList.innerHTML += renderPost(post)\r\n\t})\r\n\t\r\n}\r\nloadPosts()\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/wall.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/modals.js"]();
/******/ 	__webpack_modules__["./src/assets/js/resizeTextarea.js"]();
/******/ 	__webpack_modules__["./src/assets/js/sidebar.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/wall.js"]();
/******/ 	
/******/ })()
;