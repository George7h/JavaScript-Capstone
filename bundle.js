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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:wght@500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #6f74e9;\r\n}\r\n\r\nbutton {\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0.2rem 0.1rem 0.3rem;\r\n  margin: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  gap: 200px;\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: black;\r\n  color: white;\r\n  list-style: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#logoName {\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Inter', sans-serif;\r\n  color: coral;\r\n}\r\n\r\n#subnav {\r\n  font-family: 'PT Sans', sans-serif;\r\n}\r\n\r\n#show-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card img {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.popup-container {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-container img {\r\n  width: 90%;\r\n  height: auto;\r\n  padding-left: 31px;\r\n}\r\n\r\n.popup-content {\r\n  font-family: 'PT Sans', sans-serif;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\r\n  max-height: 80vh;\r\n  overflow-y: auto;\r\n  text-align: left;\r\n  width: 70%;\r\n}\r\n\r\n.popup-content h2 {\r\n  padding-left: 300px;\r\n}\r\n\r\n#close-popup {\r\n  margin-top: 10px;\r\n}\r\n\r\n.card {\r\n  font-family: 'PT Sans', sans-serif;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  margin: 20px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  text-align: center;\r\n  transition: transform 0.9s ease-in-out;\r\n  transition: all 1.6s ease;\r\n  background-color: rgb(230, 230, 230);\r\n  border: solid rgba(0, 0, 0, 0.3) 0.1px;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0.1rem 0.1rem 0.1rem;\r\n}\r\n\r\n#comment-form {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n#username {\r\n  width: 90%;\r\n  height: auto;\r\n}\r\n\r\n#comment {\r\n  width: 90%;\r\n  height: auto;\r\n}\r\n\r\n.card:hover {\r\n  transform: scale(1.05);\r\n  transition: all 1.6s ease;\r\n  border: solid rgba(0, 0, 0, 0.3) 0.4px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0.6rem 0.6rem 0.6rem;\r\n  background-color: rgb(69, 68, 68);\r\n  color: white;\r\n}\r\n\r\n.like-button:hover {\r\n  color: lightcoral;\r\n}\r\n\r\nfooter {\r\n  font-family: 'PT Sans', sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: rgb(69, 68, 68);\r\n  color: white;\r\n  height: 50px;\r\n  padding: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\n#closeBut {\r\n  display: flex;\r\n  justify-content: end;\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hitApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hitApi.js */ \"./src/modules/hitApi.js\");\n/* harmony import */ var _modules_likeShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/likeShow.js */ \"./src/modules/likeShow.js\");\n/* harmony import */ var _modules_fetchlikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fetchlikes.js */ \"./src/modules/fetchlikes.js\");\n/* harmony import */ var _modules_itemcounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/itemcounter.js */ \"./src/modules/itemcounter.js\");\n/* harmony import */ var _modules_showPopup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/showPopup.js */ \"./src/modules/showPopup.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\n\n\n\n\nconst showContainer = document.getElementById('show-container');\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  const shows = await (0,_modules_hitApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_modules_itemcounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  shows.forEach(async (show) => {\n    const card = document.createElement('div');\n    card.className = 'card';\n    card.innerHTML = `\n      <img src=\"${show.image.medium}\" alt=\"${show.name}\">\n      <p>${show.name}</p>\n      <button class=\"like-button\">Like</button>\n      <div class=\"like-count\"> 0 likes</div>\n    `;\n\n    const likeButton = card.querySelector('.like-button');\n    const likeCount = card.querySelector('.like-count');\n\n    const initialLikeCount = await (0,_modules_fetchlikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(show.name);\n    likeCount.textContent = ` ${initialLikeCount} likes`;\n\n    likeButton.addEventListener('click', async () => {\n      await (0,_modules_likeShow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(show.name);\n      const updatedLikeCount = await (0,_modules_fetchlikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(show.name);\n      likeCount.textContent = ` ${updatedLikeCount} likes`;\n    });\n    card.addEventListener('click', (event) => {\n      if (!event.target.classList.contains('like-button')) {\n        (0,_modules_showPopup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(show);\n      }\n    });\n\n    showContainer.appendChild(card);\n  });\n});\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fetchCommentCount: () => (/* binding */ fetchCommentCount)\n/* harmony export */ });\nconst fetchCommentCount = async (itemName) => {\n  const API_TOKEN = 'aQgaudShERyXiWvddmpP';\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_TOKEN}/comments?item_id=${itemName}`;\n\n  try {\n    const response = await fetch(url);\n    const comments = await response.json();\n    return comments.length;\n  } catch (error) {\n    return 0;\n  }\n};\n\nconst updateCommentCount = async (itemName) => {\n  const commentCount = await fetchCommentCount(itemName);\n  const commentCountDiv = document.getElementById('comment-count');\n  commentCountDiv.innerHTML = `Comments: ${commentCount}`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCommentCount);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/fetchDisplayComment.js":
/*!********************************************!*\
  !*** ./src/modules/fetchDisplayComment.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchAndDisplayComments = async (itemName) => {\n  const API_TOKEN = 'aQgaudShERyXiWvddmpP';\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_TOKEN}/comments?item_id=${itemName}`;\n\n  try {\n    const response = await fetch(url);\n    const comments = await response.json();\n    const commentsDiv = document.getElementById('comments-container');\n    commentsDiv.innerHTML = '';\n\n    comments.forEach((comment) => {\n      const commentElement = document.createElement('div');\n      commentElement.className = 'comment';\n      commentElement.innerHTML = `\n        <p><strong>${comment.username}</strong>: ${comment.comment}</p>\n        <p>Date: ${comment.creation_date}</p>\n      `;\n      commentsDiv.appendChild(commentElement);\n    });\n    return comments;\n  } catch (error) {\n    return error;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAndDisplayComments);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/fetchDisplayComment.js?");

/***/ }),

/***/ "./src/modules/fetchlikes.js":
/*!***********************************!*\
  !*** ./src/modules/fetchlikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchLikeCount = async (itemName) => {\n  const API_TOKEN = 'aQgaudShERyXiWvddmpP';\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_TOKEN}/likes`;\n\n  try {\n    const response = await fetch(url);\n    const likesData = await response.json();\n    const itemLikes = likesData.find((item) => item.item_id === itemName);\n    return itemLikes ? itemLikes.likes : 0;\n  } catch (error) {\n    return 0;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikeCount);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/fetchlikes.js?");

/***/ }),

/***/ "./src/modules/hitApi.js":
/*!*******************************!*\
  !*** ./src/modules/hitApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchShows = async () => {\n  try {\n    const response = await fetch('https://api.tvmaze.com/shows');\n    return await response.json();\n  } catch (error) {\n    return error;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchShows);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/hitApi.js?");

/***/ }),

/***/ "./src/modules/itemcounter.js":
/*!************************************!*\
  !*** ./src/modules/itemcounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hitApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hitApi.js */ \"./src/modules/hitApi.js\");\n\n\nconst itemCounter = async () => {\n  const amountOfSeries = await (0,_hitApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const allSeries = document.getElementById('countSeries');\n  allSeries.innerHTML = amountOfSeries.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/itemcounter.js?");

/***/ }),

/***/ "./src/modules/likeShow.js":
/*!*********************************!*\
  !*** ./src/modules/likeShow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst likeShow = async (itemName) => {\n  const API_TOKEN = 'aQgaudShERyXiWvddmpP';\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_TOKEN}/likes`;\n\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: itemName,\n      }),\n    });\n\n    if (response.status === 201) {\n      // Successfully liked the show\n    } else {\n      alert.error('Error liking show');\n    }\n  } catch (error) {\n    alert.error('Error:', error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeShow);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/likeShow.js?");

/***/ }),

/***/ "./src/modules/showPopup.js":
/*!**********************************!*\
  !*** ./src/modules/showPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchDisplayComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchDisplayComment.js */ \"./src/modules/fetchDisplayComment.js\");\n/* harmony import */ var _submitComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitComment.js */ \"./src/modules/submitComment.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\n\nconst popupContent = document.getElementById('popup-content');\nconst popupContainer = document.getElementById('popup-container');\n\nconst showPopup = async (info) => {\n  popupContent.innerHTML = `\n  <div>\n  <span id=\"closeBut\" class=\"material-symbols-outlined closeBut\"> cancel </span>\n  </div>\n    <img src=\"${info.image.medium}\" alt=\"${info.name}\">\n    <h2>${info.name}</h2>\n    <p>${info.summary}</p>\n    <p>Language: ${info.language}</p>\n    <p>Ratings: ${info.rating.average}</p>\n    \n    <form id=\"comment-form\">\n      <label for=\"username\">Your Name:</label>\n      <input type=\"text\" id=\"username\" required><br>\n      <label for=\"comment\">Comments:</label>\n      <textarea id=\"comment\" rows=\"4\" required></textarea><br>\n      <button type=\"submit\">Submit Comment</button>\n    </form>\n    \n    <div id=\"comments-container\"></div>\n    <div id=\"comment-count\"></div>\n    \n    \n  `;\n  popupContainer.style.display = 'flex';\n\n  await (0,_fetchDisplayComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(info.name);\n\n  const commentForm = document.getElementById('comment-form');\n\n  commentForm.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    await (0,_submitComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(info);\n    await (0,_fetchDisplayComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(info.name);\n    await (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(info.name);\n    document.getElementById('username').value = '';\n    document.getElementById('comment').value = '';\n  });\n  popupContainer.addEventListener('click', (event) => {\n    if (event.target.classList.contains('closeBut')) {\n      popupContainer.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/showPopup.js?");

/***/ }),

/***/ "./src/modules/submitComment.js":
/*!**************************************!*\
  !*** ./src/modules/submitComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchDisplayComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchDisplayComment.js */ \"./src/modules/fetchDisplayComment.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\nconst submitComment = async (info) => {\n  const username = document.getElementById('username').value;\n  const comment = document.getElementById('comment').value;\n  const API_TOKEN = 'aQgaudShERyXiWvddmpP';\n  const currentDate = new Date().toISOString().split('T')[0];\n\n  const data = {\n    item_id: info.name,\n    username,\n    comment,\n    creation_date: currentDate,\n  };\n\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_TOKEN}/comments`;\n\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n\n    if (response.status === 201) {\n      await Promise.all([\n        (0,_fetchDisplayComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(info.name),\n        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(info.name),\n      ]);\n    } else {\n      alert.error('Error storing comment');\n    }\n  } catch (error) {\n    alert.error('Error:', error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitComment);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/submitComment.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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