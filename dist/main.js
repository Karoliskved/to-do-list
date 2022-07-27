/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    display: flex;\n    width: 100vw;\n    height: 100vh;\n}\n.sidebar{\n    background-color: rgb(56, 161, 199);\n    color: white;\n}\n#container>div{\n    display: flex;\n    flex-direction: column;\n}\n.card{\n    border: 1px solid black;\n    display: flex;\n    gap: 5px;\n}\n.cardLarge{\n    border: 1px solid black;\n}\n.completed{\n    border: 1px solid lightgray;\n    color: grey\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;AACjB;AACA;IACI,mCAAmC;IACnC,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,QAAQ;AACZ;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,2BAA2B;IAC3B;AACJ","sourcesContent":["body{\n    display: flex;\n    width: 100vw;\n    height: 100vh;\n}\n.sidebar{\n    background-color: rgb(56, 161, 199);\n    color: white;\n}\n#container>div{\n    display: flex;\n    flex-direction: column;\n}\n.card{\n    border: 1px solid black;\n    display: flex;\n    gap: 5px;\n}\n.cardLarge{\n    border: 1px solid black;\n}\n.completed{\n    border: 1px solid lightgray;\n    color: grey\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createDiv.js":
/*!**************************!*\
  !*** ./src/createDiv.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDiv)
/* harmony export */ });
function createDiv(name, task){
    const functionCall='get'+name
   // console.log(functionCall)
   // console.log(func)
    const divElement=document.createElement('div')
    divElement.classList.add(name)
    divElement.textContent=task[functionCall]()
    return divElement
}

/***/ }),

/***/ "./src/displayTasks.js":
/*!*****************************!*\
  !*** ./src/displayTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _taskCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCard */ "./src/taskCard.js");

function displayTasks(tasks, project='all tasks'){
  let found=[]
  if(project=='all tasks'){
    found=tasks;
  }
  else{
    found= tasks.filter(e => e.getProject()==project);
  }
  const container = document.querySelector('#container');
  const cardContainer=document.createElement('div');
  cardContainer.id='cardContainer';
  found.forEach(e => {
    cardContainer.appendChild((0,_taskCard__WEBPACK_IMPORTED_MODULE_0__.createCard)(e));
  });
  container.appendChild(cardContainer);

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "edit": () => (/* binding */ edit),
/* harmony export */   "handleDelete": () => (/* binding */ handleDelete),
/* harmony export */   "handleProjectClick": () => (/* binding */ handleProjectClick)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList.js */ "./src/projectList.js");
/* harmony import */ var _taskCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCard.js */ "./src/taskCard.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectCard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectCard.js */ "./src/projectCard.js");
/* harmony import */ var _displayTasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayTasks.js */ "./src/displayTasks.js");








const container = document.querySelector('#container');
const formContainer = document.querySelector('.formContainer');
const inputTitle = document.querySelector('#inputTitle');
const inputDesc = document.querySelector('#inputDesc');
const inputDate = document.querySelector('#inputDate');
const inputProj = document.querySelector('#inputProj');
const addButton = document.querySelector('.formButton')
const taskForm = document.querySelector('#newTask')
const projectsContainer = document.querySelector('.projectsContainer')
const newProjectButton = document.querySelector('.newProjButton')
const formContainerProj = document.querySelector('.projFormContainer')
const inputTitleProj = document.querySelector('#inputTitleProj')
const submitButtonProj = document.querySelector('.submitButtonProj');
const allTasks = document.querySelector('#allTasks')

//console.log('test')
const task1 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('get food', 'get food for dog', '2022-05-05', 'highly urgent')
const task2 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('get stuff', 'get stuff for me', '2022-05-06', 'non-urgent')
const task3 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('get code', 'get code for me', '2022-05-07', 'non-urgent', 'school')
const task4 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('get code', 'get code for me', '2022-05-07', 'non-urgent', 'school')
const submitButton = document.createElement('button')
submitButton.classList.add('submitButton')
submitButton.textContent = 'submit';
submitButton.type = 'button'
const editButton = document.createElement('button')
editButton.classList.add('editButton')
editButton.textContent = 'edit';
editButton.type = 'button'

//console.log(task1.getDescription())
let taskArray = [task1, task2, task3]
const projectArray = (0,_projectList_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['test', 'default', 'testing', 'school'])
//console.log(projectArray.getProjects())
addButton.addEventListener('click', () => {
    inputTitle.value = "";
    inputDesc.value = "";
    inputDate.value = "";
    inputProj.value = "";
    document.querySelectorAll('#urgency').forEach(element => element.checked = false);
    editButton.remove()
    formContainer.hidden = !formContainer.hidden
    formContainer.appendChild(submitButton)


})
submitButton.addEventListener('click', () => {
    formContainer.hidden = true
    const newTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputTitle.value, inputDesc.value, inputDate.value, taskForm.elements['urgency'].value, inputProj.value)
    taskArray.push(newTask)
    inputTitle.value = "";
    inputDesc.value = "";
    inputDate.value = "";
    inputProj.value = "";
    document.querySelectorAll('#urgency').forEach(element => element.checked = false);


})

newProjectButton.addEventListener('click', () => {
    formContainerProj.hidden = !formContainerProj.hidden;
    console.log(taskArray)
})
submitButtonProj.addEventListener('click', () => {
    formContainerProj.hidden = true
    console.log(inputTitleProj.value)
    projectArray.addProject(inputTitleProj.value)
    inputTitleProj.value = ""
    projectsContainer.appendChild((0,_projectCard_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectArray, projectsContainer))

}

)
allTasks.addEventListener('click', () => {
    handleProjectClick(allTasks)
})
projectsContainer.appendChild((0,_projectCard_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectArray, projectsContainer))


function handleProjectClick(e) {
    while (container.firstChild) {
        container.firstChild.remove()
    }
    (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_5__["default"])(taskArray, e.textContent)
}
function handleDelete(index) {
    // console.log(index)
    console.log(taskArray.findIndex(item => item.getID() == index))
    taskArray.splice(taskArray.findIndex(item => item.getID() == index), 1)
    //console.log(taskArray)
}
function edit(index) {
    formContainer.appendChild(editButton)
    submitButton.remove()
    formContainer.hidden = !formContainer.hidden 
    const elementIndex = taskArray.findIndex(item => item.getID() == index)
    inputTitle.value = taskArray[elementIndex].getTitle();
    inputDesc.value = taskArray[elementIndex].getDescription();
    inputDate.value = taskArray[elementIndex].getDueDate();
    inputProj.value = taskArray[elementIndex].getProject();
    document.querySelectorAll('#urgency').forEach( e =>{
        if(e.value==taskArray[elementIndex].getPriority())
            e.checked=true;
    });
    // taskArray[elementIndex].setTitle('new title yo')
    const card = document.querySelector('#card' + index)
   // card.parentElement.replaceChild(createCard(taskArray[elementIndex]), card)
   editButton.addEventListener('click', () => {
    formContainer.hidden = true
    submitButton.remove()
    taskArray[elementIndex] = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputTitle.value, inputDesc.value, inputDate.value, taskForm.elements['urgency'].value, inputProj.value)
    card.parentElement.replaceChild((0,_taskCard_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(taskArray[elementIndex]), card)

})
}




/***/ }),

/***/ "./src/projectCard.js":
/*!****************************!*\
  !*** ./src/projectCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");


function displayProjects(projectList, container){
    while (container.firstChild) {
        container.firstChild.remove()
    }
    const card=document.createElement('div')
    const projects=projectList.getProjects()
    projects.forEach(element => {
        let div=document.createElement('div')
        div.classList.add('projectTitle')
        div.id=element
        div.textContent=element
        div.addEventListener('click', ()=>(0,___WEBPACK_IMPORTED_MODULE_1__.handleProjectClick)(div))
        card.appendChild(div)
    });
   
    return card;
}

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ProjectList = (projects) => {
    
   
    const getProjects = () => projects
    const addProject = (project) => {
        projects.push(project)
    }
    const removeProject = (index) => {
        projects.splice(index, 1)
    }

    return {getProjects, addProject, removeProject}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hashCode(string){
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        hash = ((hash<<5)-hash)+code;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
let counter=0;
const Task = (title, description, dueDate, priority, project='default') => {
    counter++;
    let status=false;
    const id=hashCode(title+description+dueDate+priority+project+counter+status)
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => status;
    const getProject=()=>project;
    const setTitle = (newTitle) =>{
        title=newTitle;
    };
    const setDescription = (newDescription) => {
        description=newDescription
    };
    const setDueDate = (newDate) => {
        dueDate=newDate
    };
    const setPriority = (newPriority) => {
        priority=newPriority
    };
    const setProject=(newProject)=>{
        project=newProject;
    };
    const getID=()=>id;
    const changeStatus=()=>{
        status=!status
    }
    return { getTitle, getDescription, getDueDate, getPriority, getStatus, getProject, getID, changeStatus,
         setDescription, setDueDate, setPriority, setProject, setTitle }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/taskCard.js":
/*!*************************!*\
  !*** ./src/taskCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard),
/* harmony export */   "createSmallClickable": () => (/* binding */ createSmallClickable)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDiv */ "./src/createDiv.js");
/* harmony import */ var _taskCardLarge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCardLarge */ "./src/taskCardLarge.js");



function createCard(task) {
    const card = document.createElement('div')
    card.classList.add('card');
    card.id = 'card' + task.getID();
    const check = document.createElement('input');
    check.classList.add("checkmark");
    check.type = 'checkbox';
    if(task.getStatus()){
        card.classList.add('completed')
        check.checked=true;
    }
    check.onchange = () => {
        task.changeStatus();
        if (check.checked) {
            card.classList.add('completed')
        }
        else{
            card.classList.remove('completed')
        }
    }
    const button=document.createElement('button');
    button.classList.add('delButton');
    button.textContent='delete';
    button.id=task.getID()
    button.addEventListener('click', ()=>{
        ;(0,___WEBPACK_IMPORTED_MODULE_0__.handleDelete)(button.id)
       document.querySelector('#card'+button.id).remove()
    })
    const editButton=document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent='edit';
    editButton.id=task.getID()
    editButton.addEventListener('click', ()=>{
        ;(0,___WEBPACK_IMPORTED_MODULE_0__.edit)(editButton.id) 
    })
    card.appendChild(createSmallClickable(task))
    card.appendChild(check);
    card.appendChild(editButton)
    card.appendChild(button)
    return card;
}
function createSmallClickable(task) {
    const clickContainer = document.createElement('div')
    clickContainer.addEventListener('click', () => {
        const newCard = (0,_taskCardLarge__WEBPACK_IMPORTED_MODULE_2__["default"])(task)
        clickContainer.parentElement.replaceChild(newCard, clickContainer)

    })
    clickContainer.classList.add('clickContainer')
    const title = (0,_createDiv__WEBPACK_IMPORTED_MODULE_1__["default"])("Title", task);
    const dueDate = (0,_createDiv__WEBPACK_IMPORTED_MODULE_1__["default"])("DueDate", task);
    const priority = (0,_createDiv__WEBPACK_IMPORTED_MODULE_1__["default"])("Priority", task);
    clickContainer.appendChild(title);
    clickContainer.appendChild(dueDate);
    clickContainer.appendChild(priority);
    return clickContainer

}


/***/ }),

/***/ "./src/taskCardLarge.js":
/*!******************************!*\
  !*** ./src/taskCardLarge.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCardLarge)
/* harmony export */ });
/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDiv */ "./src/createDiv.js");
/* harmony import */ var _taskCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCard */ "./src/taskCard.js");


function createCardLarge(task){

    const clickContainer=document.createElement('div')
    clickContainer.addEventListener('click', ()=>{
        const newCard=(0,_taskCard__WEBPACK_IMPORTED_MODULE_1__.createSmallClickable)(task)
        clickContainer.parentElement.replaceChild(newCard, clickContainer)
    })
    const title=(0,_createDiv__WEBPACK_IMPORTED_MODULE_0__["default"])("Title", task);
    const description=(0,_createDiv__WEBPACK_IMPORTED_MODULE_0__["default"])("Description", task);
    const dueDate=(0,_createDiv__WEBPACK_IMPORTED_MODULE_0__["default"])("DueDate", task);
    const priority=(0,_createDiv__WEBPACK_IMPORTED_MODULE_0__["default"])("Priority", task);
    const project=(0,_createDiv__WEBPACK_IMPORTED_MODULE_0__["default"])('Project', task);
   
    clickContainer.appendChild(title);
    clickContainer.appendChild(description);
    clickContainer.appendChild(dueDate);
    clickContainer.appendChild(priority);
    clickContainer.appendChild(project);

    return clickContainer;
}



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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBSTtBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsMERBQWU7QUFDdkM7O0FBRUEsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLHNEQUFTO0FBQzNCLG9CQUFvQixzREFBUztBQUM3QixxQkFBcUIsc0RBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURvQztBQUNZO0FBQ2pDOztBQUVmO0FBQ0E7QUFDQSxzQkFBc0IsK0RBQW9CO0FBQzFDO0FBQ0EsS0FBSztBQUNMLGdCQUFnQixzREFBUztBQUN6QixzQkFBc0Isc0RBQVM7QUFDL0Isa0JBQWtCLHNEQUFTO0FBQzNCLG1CQUFtQixzREFBUztBQUM1QixrQkFBa0Isc0RBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZURpdi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXlUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrQ2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tDYXJkTGFyZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCAxNjEsIDE5OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2NvbnRhaW5lcj5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jYXJke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi5jYXJkTGFyZ2V7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uY29tcGxldGVke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGNvbG9yOiBncmV5XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFFBQVE7QUFDWjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDE2MSwgMTk5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY29udGFpbmVyPmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNhcmR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuLmNhcmRMYXJnZXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5jb21wbGV0ZWR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6IGdyZXlcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEaXYobmFtZSwgdGFzayl7XG4gICAgY29uc3QgZnVuY3Rpb25DYWxsPSdnZXQnK25hbWVcbiAgIC8vIGNvbnNvbGUubG9nKGZ1bmN0aW9uQ2FsbClcbiAgIC8vIGNvbnNvbGUubG9nKGZ1bmMpXG4gICAgY29uc3QgZGl2RWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKVxuICAgIGRpdkVsZW1lbnQudGV4dENvbnRlbnQ9dGFza1tmdW5jdGlvbkNhbGxdKClcbiAgICByZXR1cm4gZGl2RWxlbWVudFxufSIsImltcG9ydCB7Y3JlYXRlQ2FyZH0gZnJvbSBcIi4vdGFza0NhcmRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyh0YXNrcywgcHJvamVjdD0nYWxsIHRhc2tzJyl7XG4gIGxldCBmb3VuZD1bXVxuICBpZihwcm9qZWN0PT0nYWxsIHRhc2tzJyl7XG4gICAgZm91bmQ9dGFza3M7XG4gIH1cbiAgZWxzZXtcbiAgICBmb3VuZD0gdGFza3MuZmlsdGVyKGUgPT4gZS5nZXRQcm9qZWN0KCk9PXByb2plY3QpO1xuICB9XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgY29uc3QgY2FyZENvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZENvbnRhaW5lci5pZD0nY2FyZENvbnRhaW5lcic7XG4gIGZvdW5kLmZvckVhY2goZSA9PiB7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKGUpKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcblxufSIsImltcG9ydCAnLi90YXNrLmpzJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gJy4vcHJvamVjdExpc3QuanMnXG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSAnLi90YXNrQ2FyZC5qcydcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gJy4vcHJvamVjdENhcmQuanMnXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gJy4vZGlzcGxheVRhc2tzLmpzJ1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1Db250YWluZXInKTtcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUaXRsZScpO1xuY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RGVzYycpO1xuY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RGF0ZScpO1xuY29uc3QgaW5wdXRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UHJvaicpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1CdXR0b24nKVxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFzaycpXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2pCdXR0b24nKVxuY29uc3QgZm9ybUNvbnRhaW5lclByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvakZvcm1Db250YWluZXInKVxuY29uc3QgaW5wdXRUaXRsZVByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUaXRsZVByb2onKVxuY29uc3Qgc3VibWl0QnV0dG9uUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdXR0b25Qcm9qJyk7XG5jb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxUYXNrcycpXG5cbi8vY29uc29sZS5sb2coJ3Rlc3QnKVxuY29uc3QgdGFzazEgPSBUYXNrKCdnZXQgZm9vZCcsICdnZXQgZm9vZCBmb3IgZG9nJywgJzIwMjItMDUtMDUnLCAnaGlnaGx5IHVyZ2VudCcpXG5jb25zdCB0YXNrMiA9IFRhc2soJ2dldCBzdHVmZicsICdnZXQgc3R1ZmYgZm9yIG1lJywgJzIwMjItMDUtMDYnLCAnbm9uLXVyZ2VudCcpXG5jb25zdCB0YXNrMyA9IFRhc2soJ2dldCBjb2RlJywgJ2dldCBjb2RlIGZvciBtZScsICcyMDIyLTA1LTA3JywgJ25vbi11cmdlbnQnLCAnc2Nob29sJylcbmNvbnN0IHRhc2s0ID0gVGFzaygnZ2V0IGNvZGUnLCAnZ2V0IGNvZGUgZm9yIG1lJywgJzIwMjItMDUtMDcnLCAnbm9uLXVyZ2VudCcsICdzY2hvb2wnKVxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdXR0b24nKVxuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ3N1Ym1pdCc7XG5zdWJtaXRCdXR0b24udHlwZSA9ICdidXR0b24nXG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbicpXG5lZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuZWRpdEJ1dHRvbi50eXBlID0gJ2J1dHRvbidcblxuLy9jb25zb2xlLmxvZyh0YXNrMS5nZXREZXNjcmlwdGlvbigpKVxubGV0IHRhc2tBcnJheSA9IFt0YXNrMSwgdGFzazIsIHRhc2szXVxuY29uc3QgcHJvamVjdEFycmF5ID0gUHJvamVjdExpc3QoWyd0ZXN0JywgJ2RlZmF1bHQnLCAndGVzdGluZycsICdzY2hvb2wnXSlcbi8vY29uc29sZS5sb2cocHJvamVjdEFycmF5LmdldFByb2plY3RzKCkpXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaW5wdXRUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgaW5wdXREZXNjLnZhbHVlID0gXCJcIjtcbiAgICBpbnB1dERhdGUudmFsdWUgPSBcIlwiO1xuICAgIGlucHV0UHJvai52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3VyZ2VuY3knKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jaGVja2VkID0gZmFsc2UpO1xuICAgIGVkaXRCdXR0b24ucmVtb3ZlKClcbiAgICBmb3JtQ29udGFpbmVyLmhpZGRlbiA9ICFmb3JtQ29udGFpbmVyLmhpZGRlblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxuXG5cbn0pXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lci5oaWRkZW4gPSB0cnVlXG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2soaW5wdXRUaXRsZS52YWx1ZSwgaW5wdXREZXNjLnZhbHVlLCBpbnB1dERhdGUudmFsdWUsIHRhc2tGb3JtLmVsZW1lbnRzWyd1cmdlbmN5J10udmFsdWUsIGlucHV0UHJvai52YWx1ZSlcbiAgICB0YXNrQXJyYXkucHVzaChuZXdUYXNrKVxuICAgIGlucHV0VGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIGlucHV0RGVzYy52YWx1ZSA9IFwiXCI7XG4gICAgaW5wdXREYXRlLnZhbHVlID0gXCJcIjtcbiAgICBpbnB1dFByb2oudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN1cmdlbmN5JykuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlKTtcblxuXG59KVxuXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm1Db250YWluZXJQcm9qLmhpZGRlbiA9ICFmb3JtQ29udGFpbmVyUHJvai5oaWRkZW47XG4gICAgY29uc29sZS5sb2codGFza0FycmF5KVxufSlcbnN1Ym1pdEJ1dHRvblByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lclByb2ouaGlkZGVuID0gdHJ1ZVxuICAgIGNvbnNvbGUubG9nKGlucHV0VGl0bGVQcm9qLnZhbHVlKVxuICAgIHByb2plY3RBcnJheS5hZGRQcm9qZWN0KGlucHV0VGl0bGVQcm9qLnZhbHVlKVxuICAgIGlucHV0VGl0bGVQcm9qLnZhbHVlID0gXCJcIlxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0QXJyYXksIHByb2plY3RzQ29udGFpbmVyKSlcblxufVxuXG4pXG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBoYW5kbGVQcm9qZWN0Q2xpY2soYWxsVGFza3MpXG59KVxucHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3RzKHByb2plY3RBcnJheSwgcHJvamVjdHNDb250YWluZXIpKVxuXG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDbGljayhlKSB7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxuICAgIGRpc3BsYXlUYXNrcyh0YXNrQXJyYXksIGUudGV4dENvbnRlbnQpXG59XG5mdW5jdGlvbiBoYW5kbGVEZWxldGUoaW5kZXgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5nZXRJRCgpID09IGluZGV4KSlcbiAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tBcnJheS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmdldElEKCkgPT0gaW5kZXgpLCAxKVxuICAgIC8vY29uc29sZS5sb2codGFza0FycmF5KVxufVxuZnVuY3Rpb24gZWRpdChpbmRleCkge1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbilcbiAgICBzdWJtaXRCdXR0b24ucmVtb3ZlKClcbiAgICBmb3JtQ29udGFpbmVyLmhpZGRlbiA9ICFmb3JtQ29udGFpbmVyLmhpZGRlbiBcbiAgICBjb25zdCBlbGVtZW50SW5kZXggPSB0YXNrQXJyYXkuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5nZXRJRCgpID09IGluZGV4KVxuICAgIGlucHV0VGl0bGUudmFsdWUgPSB0YXNrQXJyYXlbZWxlbWVudEluZGV4XS5nZXRUaXRsZSgpO1xuICAgIGlucHV0RGVzYy52YWx1ZSA9IHRhc2tBcnJheVtlbGVtZW50SW5kZXhdLmdldERlc2NyaXB0aW9uKCk7XG4gICAgaW5wdXREYXRlLnZhbHVlID0gdGFza0FycmF5W2VsZW1lbnRJbmRleF0uZ2V0RHVlRGF0ZSgpO1xuICAgIGlucHV0UHJvai52YWx1ZSA9IHRhc2tBcnJheVtlbGVtZW50SW5kZXhdLmdldFByb2plY3QoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdXJnZW5jeScpLmZvckVhY2goIGUgPT57XG4gICAgICAgIGlmKGUudmFsdWU9PXRhc2tBcnJheVtlbGVtZW50SW5kZXhdLmdldFByaW9yaXR5KCkpXG4gICAgICAgICAgICBlLmNoZWNrZWQ9dHJ1ZTtcbiAgICB9KTtcbiAgICAvLyB0YXNrQXJyYXlbZWxlbWVudEluZGV4XS5zZXRUaXRsZSgnbmV3IHRpdGxlIHlvJylcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmQnICsgaW5kZXgpXG4gICAvLyBjYXJkLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKGNyZWF0ZUNhcmQodGFza0FycmF5W2VsZW1lbnRJbmRleF0pLCBjYXJkKVxuICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtQ29udGFpbmVyLmhpZGRlbiA9IHRydWVcbiAgICBzdWJtaXRCdXR0b24ucmVtb3ZlKClcbiAgICB0YXNrQXJyYXlbZWxlbWVudEluZGV4XSA9IFRhc2soaW5wdXRUaXRsZS52YWx1ZSwgaW5wdXREZXNjLnZhbHVlLCBpbnB1dERhdGUudmFsdWUsIHRhc2tGb3JtLmVsZW1lbnRzWyd1cmdlbmN5J10udmFsdWUsIGlucHV0UHJvai52YWx1ZSlcbiAgICBjYXJkLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKGNyZWF0ZUNhcmQodGFza0FycmF5W2VsZW1lbnRJbmRleF0pLCBjYXJkKVxuXG59KVxufVxuXG5leHBvcnQgeyBoYW5kbGVQcm9qZWN0Q2xpY2ssIGhhbmRsZURlbGV0ZSwgZWRpdCB9XG4iLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiXG5pbXBvcnQgeyBoYW5kbGVQcm9qZWN0Q2xpY2sgfSBmcm9tIFwiLlwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMocHJvamVjdExpc3QsIGNvbnRhaW5lcil7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbnN0IGNhcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwcm9qZWN0cz1wcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpXG4gICAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJylcbiAgICAgICAgZGl2LmlkPWVsZW1lbnRcbiAgICAgICAgZGl2LnRleHRDb250ZW50PWVsZW1lbnRcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PmhhbmRsZVByb2plY3RDbGljayhkaXYpKVxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRpdilcbiAgICB9KTtcbiAgIFxuICAgIHJldHVybiBjYXJkO1xufSIsImNvbnN0IFByb2plY3RMaXN0ID0gKHByb2plY3RzKSA9PiB7XG4gICAgXG4gICBcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0IiwiZnVuY3Rpb24gaGFzaENvZGUoc3RyaW5nKXtcbiAgICB2YXIgaGFzaCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCA9ICgoaGFzaDw8NSktaGFzaCkrY29kZTtcbiAgICAgICAgaGFzaCA9IGhhc2ggJiBoYXNoOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG59XG5sZXQgY291bnRlcj0wO1xuY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0PSdkZWZhdWx0JykgPT4ge1xuICAgIGNvdW50ZXIrKztcbiAgICBsZXQgc3RhdHVzPWZhbHNlO1xuICAgIGNvbnN0IGlkPWhhc2hDb2RlKHRpdGxlK2Rlc2NyaXB0aW9uK2R1ZURhdGUrcHJpb3JpdHkrcHJvamVjdCtjb3VudGVyK3N0YXR1cylcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG4gICAgY29uc3QgZ2V0UHJvamVjdD0oKT0+cHJvamVjdDtcbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT57XG4gICAgICAgIHRpdGxlPW5ld1RpdGxlO1xuICAgIH07XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb249bmV3RGVzY3JpcHRpb25cbiAgICB9O1xuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgICAgICBkdWVEYXRlPW5ld0RhdGVcbiAgICB9O1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIHByaW9yaXR5PW5ld1ByaW9yaXR5XG4gICAgfTtcbiAgICBjb25zdCBzZXRQcm9qZWN0PShuZXdQcm9qZWN0KT0+e1xuICAgICAgICBwcm9qZWN0PW5ld1Byb2plY3Q7XG4gICAgfTtcbiAgICBjb25zdCBnZXRJRD0oKT0+aWQ7XG4gICAgY29uc3QgY2hhbmdlU3RhdHVzPSgpPT57XG4gICAgICAgIHN0YXR1cz0hc3RhdHVzXG4gICAgfVxuICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldFN0YXR1cywgZ2V0UHJvamVjdCwgZ2V0SUQsIGNoYW5nZVN0YXR1cyxcbiAgICAgICAgIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eSwgc2V0UHJvamVjdCwgc2V0VGl0bGUgfVxufVxuZXhwb3J0IGRlZmF1bHQgVGFzayIsImltcG9ydCB7IGhhbmRsZURlbGV0ZSwgZWRpdCB9IGZyb20gXCIuXCJcbmltcG9ydCBjcmVhdGVEaXYgZnJvbSBcIi4vY3JlYXRlRGl2XCI7XG5pbXBvcnQgY3JlYXRlQ2FyZExhcmdlIGZyb20gXCIuL3Rhc2tDYXJkTGFyZ2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkKHRhc2spIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjYXJkLmlkID0gJ2NhcmQnICsgdGFzay5nZXRJRCgpO1xuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2ttYXJrXCIpO1xuICAgIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGlmKHRhc2suZ2V0U3RhdHVzKCkpe1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpXG4gICAgICAgIGNoZWNrLmNoZWNrZWQ9dHJ1ZTtcbiAgICB9XG4gICAgY2hlY2sub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHRhc2suY2hhbmdlU3RhdHVzKCk7XG4gICAgICAgIGlmIChjaGVjay5jaGVja2VkKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBidXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbEJ1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudD0nZGVsZXRlJztcbiAgICBidXR0b24uaWQ9dGFzay5nZXRJRCgpXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaGFuZGxlRGVsZXRlKGJ1dHRvbi5pZClcbiAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZCcrYnV0dG9uLmlkKS5yZW1vdmUoKVxuICAgIH0pXG4gICAgY29uc3QgZWRpdEJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRCdXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50PSdlZGl0JztcbiAgICBlZGl0QnV0dG9uLmlkPXRhc2suZ2V0SUQoKVxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBlZGl0KGVkaXRCdXR0b24uaWQpIFxuICAgIH0pXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjcmVhdGVTbWFsbENsaWNrYWJsZSh0YXNrKSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pXG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU21hbGxDbGlja2FibGUodGFzaykge1xuICAgIGNvbnN0IGNsaWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjbGlja0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmRMYXJnZSh0YXNrKVxuICAgICAgICBjbGlja0NvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdDYXJkLCBjbGlja0NvbnRhaW5lcilcblxuICAgIH0pXG4gICAgY2xpY2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2xpY2tDb250YWluZXInKVxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRGl2KFwiVGl0bGVcIiwgdGFzayk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZURpdihcIkR1ZURhdGVcIiwgdGFzayk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVEaXYoXCJQcmlvcml0eVwiLCB0YXNrKTtcbiAgICBjbGlja0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2xpY2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgY2xpY2tDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHJldHVybiBjbGlja0NvbnRhaW5lclxuXG59XG4iLCJpbXBvcnQgY3JlYXRlRGl2IGZyb20gXCIuL2NyZWF0ZURpdlwiO1xuaW1wb3J0IHtjcmVhdGVTbWFsbENsaWNrYWJsZX0gZnJvbSBcIi4vdGFza0NhcmRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhcmRMYXJnZSh0YXNrKXtcblxuICAgIGNvbnN0IGNsaWNrQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2xpY2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBjb25zdCBuZXdDYXJkPWNyZWF0ZVNtYWxsQ2xpY2thYmxlKHRhc2spXG4gICAgICAgIGNsaWNrQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0NhcmQsIGNsaWNrQ29udGFpbmVyKVxuICAgIH0pXG4gICAgY29uc3QgdGl0bGU9Y3JlYXRlRGl2KFwiVGl0bGVcIiwgdGFzayk7XG4gICAgY29uc3QgZGVzY3JpcHRpb249Y3JlYXRlRGl2KFwiRGVzY3JpcHRpb25cIiwgdGFzayk7XG4gICAgY29uc3QgZHVlRGF0ZT1jcmVhdGVEaXYoXCJEdWVEYXRlXCIsIHRhc2spO1xuICAgIGNvbnN0IHByaW9yaXR5PWNyZWF0ZURpdihcIlByaW9yaXR5XCIsIHRhc2spO1xuICAgIGNvbnN0IHByb2plY3Q9Y3JlYXRlRGl2KCdQcm9qZWN0JywgdGFzayk7XG4gICBcbiAgICBjbGlja0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2xpY2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNsaWNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGNsaWNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBjbGlja0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIHJldHVybiBjbGlja0NvbnRhaW5lcjtcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=