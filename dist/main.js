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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


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




console.log('test')
const task1=(0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('get food', 'get food for dog', '2022-05-05', 'urgent')
const task2=(0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('get stuff', 'get stuff for me', '2022-05-06', 'non- urgent')
console.log(task1.getDescription())
const Project1=(0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])('first project')
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ1Y7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNacUI7QUFDckI7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFTO0FBQ3pCLHNCQUFzQixzREFBUztBQUMvQixrQkFBa0Isc0RBQVM7QUFDM0IsbUJBQW1CLHNEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05rQjtBQUNVO0FBQ007QUFDSTtBQUN0QztBQUNBLFlBQVksb0RBQUk7QUFDaEIsWUFBWSxvREFBSTtBQUNoQjtBQUNBLGVBQWUsdURBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx3REFBVTtBQUMzRCxpREFBaUQsd0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZURpdi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURpdihuYW1lLCB0YXNrKXtcbiAgICBjb25zdCBmdW5jdGlvbkNhbGw9J2dldCcrbmFtZVxuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9uQ2FsbClcbiAgICBjb25zdCBmdW5jPXdpbmRvd1tmdW5jdGlvbkNhbGxdXG4gICAgY29uc29sZS5sb2coZnVuYylcbiAgICBjb25zdCBkaXZFbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpXG4gICAgZGl2RWxlbWVudC50ZXh0Q29udGVudD10YXNrW2Z1bmN0aW9uQ2FsbF0oKVxuICAgIFxuXG4gICAgcmV0dXJuIGRpdkVsZW1lbnRcbn0iLCJjb25zdCBQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgbGV0IHRhc2tzID0gW11cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3NcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKVxuICAgIH1cbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlXG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cblxuICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXRUYXNrcywgYWRkVGFzaywgcmVtb3ZlVGFzaywgc2V0VGl0bGUgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsIlxuY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IHN0YXR1cz1mYWxzZTtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG4gICAgY29uc3QgY2hhbmdlU3RhdHVzPSgpPT57XG4gICAgICAgIHN0YXR1cz0hc3RhdHVzXG4gICAgfVxuICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldFN0YXR1cywgY2hhbmdlU3RhdHVzIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhc2siLCJcbmltcG9ydCBjcmVhdGVEaXYgZnJvbSBcIi4vY3JlYXRlRGl2XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYXJkKHRhc2spe1xuICAgIGNvbnN0IGNhcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjb25zdCB0aXRsZT1jcmVhdGVEaXYoXCJUaXRsZVwiLCB0YXNrKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbj1jcmVhdGVEaXYoXCJEZXNjcmlwdGlvblwiLCB0YXNrKTtcbiAgICBjb25zdCBkdWVEYXRlPWNyZWF0ZURpdihcIkR1ZURhdGVcIiwgdGFzayk7XG4gICAgY29uc3QgcHJpb3JpdHk9Y3JlYXRlRGl2KFwiUHJpb3JpdHlcIiwgdGFzayk7XG4gICAgY29uc3QgY2hlY2s9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2ttYXJrXCIpO1xuICAgIGNoZWNrLnR5cGU9J2NoZWNrYm94JztcbiAgICBjb25zdCBidXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbEJ1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudD0nZGVsZXRlJztcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICByZXR1cm4gY2FyZDtcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vdGFzay5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBjcmVhdGVDYXJkIGZyb20gJy4vdGFza0NhcmQuanMnXG5jb25zb2xlLmxvZygndGVzdCcpXG5jb25zdCB0YXNrMT1UYXNrKCdnZXQgZm9vZCcsICdnZXQgZm9vZCBmb3IgZG9nJywgJzIwMjItMDUtMDUnLCAndXJnZW50JylcbmNvbnN0IHRhc2syPVRhc2soJ2dldCBzdHVmZicsICdnZXQgc3R1ZmYgZm9yIG1lJywgJzIwMjItMDUtMDYnLCAnbm9uLSB1cmdlbnQnKVxuY29uc29sZS5sb2codGFzazEuZ2V0RGVzY3JpcHRpb24oKSlcbmNvbnN0IFByb2plY3QxPVByb2plY3QoJ2ZpcnN0IHByb2plY3QnKVxuUHJvamVjdDEuYWRkVGFzayh0YXNrMSlcblByb2plY3QxLmFkZFRhc2sodGFzazIpXG5jb25zb2xlLmxvZyhQcm9qZWN0MS5nZXRUYXNrcygpWzBdLmdldERlc2NyaXB0aW9uKCkpXG5jb25zb2xlLmxvZyhQcm9qZWN0MS5nZXRUYXNrcygpWzFdLmdldERlc2NyaXB0aW9uKCkpXG5jb25zb2xlLmxvZyhQcm9qZWN0MS5nZXRUYXNrcygpWzBdLmdldFN0YXR1cygpKVxuUHJvamVjdDEuZ2V0VGFza3MoKVswXS5jaGFuZ2VTdGF0dXMoKVxuY29uc29sZS5sb2coUHJvamVjdDEuZ2V0VGFza3MoKVswXS5nZXRTdGF0dXMoKSlcbmNvbnNvbGUubG9nKFByb2plY3QxLmdldFRhc2tzKClbMV0uZ2V0U3RhdHVzKCkpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZChQcm9qZWN0MS5nZXRUYXNrcygpWzBdKSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKFByb2plY3QxLmdldFRhc2tzKClbMV0pKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9