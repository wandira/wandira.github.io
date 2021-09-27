/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const div = document.getElementById('contentBody')\n    div.textContent = ''\n    \n    const span = document.createElement('span')\n    span.textContent = \"Contact Us\"\n    div.appendChild(span)\n}\n\n//# sourceURL=webpack://restaurant/./src/contactUs.js?");

/***/ }),

/***/ "./src/first.js":
/*!**********************!*\
  !*** ./src/first.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runThisOnPageLoad)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactUs */ \"./src/contactUs.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nfunction runThisOnPageLoad(){\n    function renderMenu(){\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    }\n\n    function renderContactUs(){\n        (0,_contactUs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    }\n\n    function renderHome(){\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    }\n\n    window.onload = function () {\n        console.log('This will log only once')\n        const div = document.getElementById('content')\n        div.className = 'content'\n\n        const contentBody = document.createElement('div')\n        contentBody.className = 'contentBody'\n        contentBody.id = 'contentBody'\n\n        const contentNav = document.createElement('div')\n        contentNav.className = 'contentNav'\n        const navbarItems = document.createElement('ul')\n\n        const img = new Image()\n        img.src = 'https://cdn-icons-png.flaticon.com/512/3208/3208003.png'\n        img.className = 'navImg'\n        const navImg = document.createElement('li')\n        navImg.appendChild(img)\n        navImg.addEventListener('click',renderHome)\n\n        const item1 = document.createElement('li')\n        const link1 = document.createElement('a')\n        link1.textContent = \"Menu\"\n        link1.addEventListener('click',renderMenu)\n        item1.appendChild(link1)\n\n        const item2 = document.createElement('li')\n        const link2 = document.createElement('a')\n        link2.textContent = \"Contact Us\"\n        link2.addEventListener('click',renderContactUs)\n        item2.appendChild(link2)\n\n        navbarItems.appendChild(item1)\n        navbarItems.appendChild(navImg)\n        navbarItems.appendChild(item2)\n        contentNav.appendChild(navbarItems)\n\n        div.appendChild(contentNav)\n        div.appendChild(contentBody)\n        renderHome()\n    }\n}\n\n//# sourceURL=webpack://restaurant/./src/first.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const div = document.getElementById('contentBody')\n    div.textContent = ''\n    \n    const span = document.createElement('span')\n    span.textContent = \"Home\"\n    div.appendChild(span)\n}\n        \n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first */ \"./src/first.js\");\n\n\n(0,_first__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const div = document.getElementById('contentBody')\n    div.textContent = ''\n    \n    const span = document.createElement('span')\n    span.textContent = \"Menu\"\n    div.appendChild(span)\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;