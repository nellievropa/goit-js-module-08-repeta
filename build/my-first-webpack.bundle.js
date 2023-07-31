/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-1.js */ \"./src/module-1.js\");\n/* harmony import */ var _module_1_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_1_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_common_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/common.scss */ \"./src/css/common.scss\");\n/* harmony import */ var _css_button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/button.scss */ \"./src/css/button.scss\");\n// const sum =(a,b) => a + b;\n\n// sum(2,3);\n\n// class Hero {\n//     constructor(name) {\n//         this._name = name;\n//     }\n//     get name() {\n//         return this._name;\n//     }\n\n//     set name(newName) {\n//         this._name = newName;\n//     }\n// }\n\n// const h = new Hero ('mango');\n\n//  встановлюємо з babeljs.io з розділлу settings і із інструментів вибираємо CLI, клікаємо\n// беремо звідти посилання на налаштування npm install --save-dev @babel/core @babel/cli\n\n//   після встановлення додаєм скрипт, що рекомендується на сайті\n//   \"build\": \"babel src -d lib\"\n\n// потім запускаємо його в роботу npm run build\n// він спрацював, але нічого не змінив, правда створив папку lib з таким самим файлом, \n// бо йому треба сказати до якої старої версії треба змінювати наш новий код\n// тому ми встановлюємо ще один файл npm install @babel/preset-env --save-dev \n// створюємо папку, яку він рекомендує babel.config.json і туди додаемо те, що рекомендується {\n//   \"presets\": [\"@babel/preset-env\"]\n// }\n// знову запускаємо npm run build\n// і дивимось в папкі lib що змінилося\n\n// \n// browserslist - один для всіх : по його рекомендації створюємо файл .browserslistrc\n\n\n\nconsole.log((_module_1_js__WEBPACK_IMPORTED_MODULE_0___default()));\nconsole.log('This is index.js');\n\n//# sourceURL=webpack://goit-js-module-08-repeta/./src/index.js?");

/***/ }),

/***/ "./src/module-1.js":
/*!*************************!*\
  !*** ./src/module-1.js ***!
  \*************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://goit-js-module-08-repeta/./src/module-1.js?");

/***/ }),

/***/ "./src/css/button.scss":
/*!*****************************!*\
  !*** ./src/css/button.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-module-08-repeta/./src/css/button.scss?");

/***/ }),

/***/ "./src/css/common.scss":
/*!*****************************!*\
  !*** ./src/css/common.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-module-08-repeta/./src/css/common.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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