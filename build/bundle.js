/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_image_viewer_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_image_viewer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_image_viewer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_big_jpg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_big_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_big_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_small_jpg__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_small_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_small_jpg__);



var image = document.createElement('img');
image.src = __WEBPACK_IMPORTED_MODULE_2__assets_small_jpg___default.a;
document.body.appendChild(image);
var bigimage = document.createElement('img');
bigimage.src = __WEBPACK_IMPORTED_MODULE_1__assets_big_jpg___default.a;
document.body.appendChild(bigimage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var sum = function sum(a, b) {
  return a + b;
}; //commonJS module system
//module.exports = sum;
//ES2015


/* harmony default export */ exports["a"] = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "765db20cbd9b9e581007b69d614fd6df.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_viewer__ = __webpack_require__(0);
//ES2015 syntax
 //because the code just runs we can import like this

 //commonJS (node system)
//const sum = require('./sum.js')

var total = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sum__["a" /* default */])(10, 5);
console.log(total);

/***/ }
/******/ ]);