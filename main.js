/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    console.log(functionCall)
    const func=window[functionCall]
    console.log(func)
    const divElement=document.createElement('div')
    divElement.classList.add(name)
    divElement.textContent=task[functionCall]()
    return divElement
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = (title) => {
    let tasks = []
    const getTitle = () => title;
    const getTasks = () => tasks
    const addTask = (task) => {
        tasks.push(task)
    }
    const setTitle = (newTitle) => {
        title = newTitle
    }
    const removeTask = (index) => {
        tasks.splice(index, 1)
    }

    return { getTitle, getTasks, addTask, removeTask, setTitle }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

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

const Task = (title, description, dueDate, priority) => {
    let status=false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => status;
    const changeStatus=()=>{
        status=!status
    }
    return { getTitle, getDescription, getDueDate, getPriority, getStatus, changeStatus }
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
/* harmony export */   "default": () => (/* binding */ createCard)
/* harmony export */ });
/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDiv */ "./src/createDiv.js");


function createCard(task){
    const card=document.createElement('div')
    card.classList.add('card');
    const title=(0,_createDiv__WEBPACK_IMPORTED_MODULE_0__["default"])("Title", task);
    const description=(0,_createDiv__WEBPACK_IMPORTED_MODULE_0__["default"])("Description", task);
    const dueDate=(0,_createDiv__WEBPACK_IMPORTED_MODULE_0__["default"])("DueDate", task);
    const priority=(0,_createDiv__WEBPACK_IMPORTED_MODULE_0__["default"])("Priority", task);
    const check=document.createElement('input');
    check.classList.add("checkmark");
    check.type='checkbox';
    const button=document.createElement('button');
    button.classList.add('delButton');
    button.textContent='delete';
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(dueDate);
    card.appendChild(priority);
    card.appendChild(check);
    card.appendChild(button);
    return card;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _taskCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCard.js */ "./src/taskCard.js");





const container=document.querySelector('#container');
const formContainer=document.querySelector('.formContainer');
const submitButton=document.querySelector('.submitButton');
const inputTitle=document.querySelector('#inputTitle');
const inputDesc=document.querySelector('#inputDesc');
const inputDate=document.querySelector('#inputDate');
const addButton=document.querySelector('.formButton')
console.log('test')
const task1 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('get food', 'get food for dog', '2022-05-05', 'urgent')
const task2 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('get stuff', 'get stuff for me', '2022-05-06', 'non- urgent')
console.log(task1.getDescription())
const Project1 = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])('first project')
Project1.addTask(task1)
Project1.addTask(task2)
console.log(Project1.getTasks()[0].getDescription())
console.log(Project1.getTasks()[1].getDescription())
console.log(Project1.getTasks()[0].getStatus())
Project1.getTasks()[0].changeStatus()
console.log(Project1.getTasks()[0].getStatus())
console.log(Project1.getTasks()[1].getStatus())
document.querySelector('#container').appendChild((0,_taskCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Project1.getTasks()[0]))
document.querySelector('#container').appendChild((0,_taskCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Project1.getTasks()[1]))

addButton.addEventListener('click', () => {

    formContainer.hidden=false
  

})
submitButton.addEventListener('click', ()=>{
    formContainer.hidden=true
    const newTask=(0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputTitle.value, inputDesc.value, inputDate.value, 'test' /*document.querySelector('input[name="urgency"]:checked').value*/)
    container.appendChild((0,_taskCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newTask))

})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNmZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDWnFCO0FBQ3JCO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQixzREFBUztBQUN6QixzQkFBc0Isc0RBQVM7QUFDL0Isa0JBQWtCLHNEQUFTO0FBQzNCLG1CQUFtQixzREFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0I7QUFDVTtBQUNNO0FBQ0k7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFJO0FBQ2xCLGNBQWMsb0RBQUk7QUFDbEI7QUFDQSxpQkFBaUIsdURBQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx3REFBVTtBQUMzRCxpREFBaUQsd0RBQVU7O0FBRTNEOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQUk7QUFDdEIsMEJBQTBCLHdEQUFVOztBQUVwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVEaXYuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tDYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURpdihuYW1lLCB0YXNrKXtcbiAgICBjb25zdCBmdW5jdGlvbkNhbGw9J2dldCcrbmFtZVxuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9uQ2FsbClcbiAgICBjb25zdCBmdW5jPXdpbmRvd1tmdW5jdGlvbkNhbGxdXG4gICAgY29uc29sZS5sb2coZnVuYylcbiAgICBjb25zdCBkaXZFbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpXG4gICAgZGl2RWxlbWVudC50ZXh0Q29udGVudD10YXNrW2Z1bmN0aW9uQ2FsbF0oKVxuICAgIHJldHVybiBkaXZFbGVtZW50XG59IiwiY29uc3QgUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHRhc2tzXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tzLnB1c2godGFzaylcbiAgICB9XG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZVxuICAgIH1cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRUaXRsZSwgZ2V0VGFza3MsIGFkZFRhc2ssIHJlbW92ZVRhc2ssIHNldFRpdGxlIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJcbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBzdGF0dXM9ZmFsc2U7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gc3RhdHVzO1xuICAgIGNvbnN0IGNoYW5nZVN0YXR1cz0oKT0+e1xuICAgICAgICBzdGF0dXM9IXN0YXR1c1xuICAgIH1cbiAgICByZXR1cm4geyBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9yaXR5LCBnZXRTdGF0dXMsIGNoYW5nZVN0YXR1cyB9XG59XG5leHBvcnQgZGVmYXVsdCBUYXNrIiwiXG5pbXBvcnQgY3JlYXRlRGl2IGZyb20gXCIuL2NyZWF0ZURpdlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FyZCh0YXNrKXtcbiAgICBjb25zdCBjYXJkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgY29uc3QgdGl0bGU9Y3JlYXRlRGl2KFwiVGl0bGVcIiwgdGFzayk7XG4gICAgY29uc3QgZGVzY3JpcHRpb249Y3JlYXRlRGl2KFwiRGVzY3JpcHRpb25cIiwgdGFzayk7XG4gICAgY29uc3QgZHVlRGF0ZT1jcmVhdGVEaXYoXCJEdWVEYXRlXCIsIHRhc2spO1xuICAgIGNvbnN0IHByaW9yaXR5PWNyZWF0ZURpdihcIlByaW9yaXR5XCIsIHRhc2spO1xuICAgIGNvbnN0IGNoZWNrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrbWFya1wiKTtcbiAgICBjaGVjay50eXBlPSdjaGVja2JveCc7XG4gICAgY29uc3QgYnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxCdXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQ9J2RlbGV0ZSc7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Rhc2suanMnXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgY3JlYXRlQ2FyZCBmcm9tICcuL3Rhc2tDYXJkLmpzJ1xuXG5jb25zdCBjb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuY29uc3QgZm9ybUNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpO1xuY29uc3Qgc3VibWl0QnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdXR0b24nKTtcbmNvbnN0IGlucHV0VGl0bGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VGl0bGUnKTtcbmNvbnN0IGlucHV0RGVzYz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXREZXNjJyk7XG5jb25zdCBpbnB1dERhdGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RGF0ZScpO1xuY29uc3QgYWRkQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQnV0dG9uJylcbmNvbnNvbGUubG9nKCd0ZXN0JylcbmNvbnN0IHRhc2sxID0gVGFzaygnZ2V0IGZvb2QnLCAnZ2V0IGZvb2QgZm9yIGRvZycsICcyMDIyLTA1LTA1JywgJ3VyZ2VudCcpXG5jb25zdCB0YXNrMiA9IFRhc2soJ2dldCBzdHVmZicsICdnZXQgc3R1ZmYgZm9yIG1lJywgJzIwMjItMDUtMDYnLCAnbm9uLSB1cmdlbnQnKVxuY29uc29sZS5sb2codGFzazEuZ2V0RGVzY3JpcHRpb24oKSlcbmNvbnN0IFByb2plY3QxID0gUHJvamVjdCgnZmlyc3QgcHJvamVjdCcpXG5Qcm9qZWN0MS5hZGRUYXNrKHRhc2sxKVxuUHJvamVjdDEuYWRkVGFzayh0YXNrMilcbmNvbnNvbGUubG9nKFByb2plY3QxLmdldFRhc2tzKClbMF0uZ2V0RGVzY3JpcHRpb24oKSlcbmNvbnNvbGUubG9nKFByb2plY3QxLmdldFRhc2tzKClbMV0uZ2V0RGVzY3JpcHRpb24oKSlcbmNvbnNvbGUubG9nKFByb2plY3QxLmdldFRhc2tzKClbMF0uZ2V0U3RhdHVzKCkpXG5Qcm9qZWN0MS5nZXRUYXNrcygpWzBdLmNoYW5nZVN0YXR1cygpXG5jb25zb2xlLmxvZyhQcm9qZWN0MS5nZXRUYXNrcygpWzBdLmdldFN0YXR1cygpKVxuY29uc29sZS5sb2coUHJvamVjdDEuZ2V0VGFza3MoKVsxXS5nZXRTdGF0dXMoKSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKFByb2plY3QxLmdldFRhc2tzKClbMF0pKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoUHJvamVjdDEuZ2V0VGFza3MoKVsxXSkpXG5cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGZvcm1Db250YWluZXIuaGlkZGVuPWZhbHNlXG4gIFxuXG59KVxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBmb3JtQ29udGFpbmVyLmhpZGRlbj10cnVlXG4gICAgY29uc3QgbmV3VGFzaz1UYXNrKGlucHV0VGl0bGUudmFsdWUsIGlucHV0RGVzYy52YWx1ZSwgaW5wdXREYXRlLnZhbHVlLCAndGVzdCcgLypkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidXJnZW5jeVwiXTpjaGVja2VkJykudmFsdWUqLylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZChuZXdUYXNrKSlcblxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9