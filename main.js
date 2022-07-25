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
const addButton = document.createElement('button')
addButton.classList.add('submitButton')
addButton.textContent = 'add task'
addButton.addEventListener('click', () => {
    const inputDiv = document.createElement('div');
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('id', 'inputTitle');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'inputTitle');
    titleLabel.textContent='title';

    const inputDesc = document.createElement('input');
    inputDesc.setAttribute('id', 'inputDesc');

    const descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'inputDesc');
    descLabel.textContent='description';

    const inputDate = document.createElement('input');
    inputDate.setAttribute('id', 'inputDate');
    inputDate.type='date';

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'inputDate');
    dateLabel.textContent='Due date';

    const nonUrgentLabel = document.createElement('label');
    nonUrgentLabel.setAttribute('for', 'urgency');
    nonUrgentLabel.textContent='non-urgent';
    const nonUrgent = document.createElement('input');
    nonUrgent.setAttribute('id', 'urgency');
    nonUrgent.type='radio';
    const midUrgentLabel = document.createElement('label');
    midUrgentLabel.setAttribute('for', 'urgency');
    midUrgentLabel.textContent='mildly urgent';
    const midUrgent = document.createElement('input');
    midUrgent.setAttribute('id', 'urgency');
    midUrgent.type='radio';
    const highUrgentLabel = document.createElement('label');
    highUrgentLabel.setAttribute('for', 'urgency');
    highUrgentLabel.textContent='highly urgent';
    const highUrgent = document.createElement('input');
    highUrgent.setAttribute('id', 'urgency');
    highUrgent.type='radio';
    


    inputDiv.appendChild(titleLabel);
    inputDiv.appendChild(inputTitle);
    inputDiv.appendChild(descLabel);
    inputDiv.appendChild(inputDesc);
    inputDiv.appendChild(dateLabel);
    inputDiv.appendChild(inputDate);
    inputDiv.appendChild(nonUrgent);
    inputDiv.appendChild(nonUrgentLabel);
    inputDiv.appendChild(midUrgent);
    inputDiv.appendChild(midUrgentLabel);
    inputDiv.appendChild(highUrgent);
    inputDiv.appendChild(highUrgentLabel);
    document.querySelector('#container').appendChild(inputDiv);

})
document.querySelector('#container').appendChild(addButton)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNmZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDWnFCO0FBQ3JCO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQixzREFBUztBQUN6QixzQkFBc0Isc0RBQVM7QUFDL0Isa0JBQWtCLHNEQUFTO0FBQzNCLG1CQUFtQixzREFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0I7QUFDVTtBQUNNO0FBQ0k7O0FBRXRDO0FBQ0EsY0FBYyxvREFBSTtBQUNsQixjQUFjLG9EQUFJO0FBQ2xCO0FBQ0EsaUJBQWlCLHVEQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsd0RBQVU7QUFDM0QsaURBQWlELHdEQUFVO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZURpdi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGl2KG5hbWUsIHRhc2spe1xuICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbD0nZ2V0JytuYW1lXG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25DYWxsKVxuICAgIGNvbnN0IGZ1bmM9d2luZG93W2Z1bmN0aW9uQ2FsbF1cbiAgICBjb25zb2xlLmxvZyhmdW5jKVxuICAgIGNvbnN0IGRpdkVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSlcbiAgICBkaXZFbGVtZW50LnRleHRDb250ZW50PXRhc2tbZnVuY3Rpb25DYWxsXSgpXG4gICAgcmV0dXJuIGRpdkVsZW1lbnRcbn0iLCJjb25zdCBQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgbGV0IHRhc2tzID0gW11cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3NcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKVxuICAgIH1cbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlXG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cblxuICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXRUYXNrcywgYWRkVGFzaywgcmVtb3ZlVGFzaywgc2V0VGl0bGUgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsIlxuY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IHN0YXR1cz1mYWxzZTtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG4gICAgY29uc3QgY2hhbmdlU3RhdHVzPSgpPT57XG4gICAgICAgIHN0YXR1cz0hc3RhdHVzXG4gICAgfVxuICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldFN0YXR1cywgY2hhbmdlU3RhdHVzIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhc2siLCJcbmltcG9ydCBjcmVhdGVEaXYgZnJvbSBcIi4vY3JlYXRlRGl2XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYXJkKHRhc2spe1xuICAgIGNvbnN0IGNhcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjb25zdCB0aXRsZT1jcmVhdGVEaXYoXCJUaXRsZVwiLCB0YXNrKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbj1jcmVhdGVEaXYoXCJEZXNjcmlwdGlvblwiLCB0YXNrKTtcbiAgICBjb25zdCBkdWVEYXRlPWNyZWF0ZURpdihcIkR1ZURhdGVcIiwgdGFzayk7XG4gICAgY29uc3QgcHJpb3JpdHk9Y3JlYXRlRGl2KFwiUHJpb3JpdHlcIiwgdGFzayk7XG4gICAgY29uc3QgY2hlY2s9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2ttYXJrXCIpO1xuICAgIGNoZWNrLnR5cGU9J2NoZWNrYm94JztcbiAgICBjb25zdCBidXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbEJ1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudD0nZGVsZXRlJztcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICByZXR1cm4gY2FyZDtcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vdGFzay5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBjcmVhdGVDYXJkIGZyb20gJy4vdGFza0NhcmQuanMnXG5cbmNvbnNvbGUubG9nKCd0ZXN0JylcbmNvbnN0IHRhc2sxID0gVGFzaygnZ2V0IGZvb2QnLCAnZ2V0IGZvb2QgZm9yIGRvZycsICcyMDIyLTA1LTA1JywgJ3VyZ2VudCcpXG5jb25zdCB0YXNrMiA9IFRhc2soJ2dldCBzdHVmZicsICdnZXQgc3R1ZmYgZm9yIG1lJywgJzIwMjItMDUtMDYnLCAnbm9uLSB1cmdlbnQnKVxuY29uc29sZS5sb2codGFzazEuZ2V0RGVzY3JpcHRpb24oKSlcbmNvbnN0IFByb2plY3QxID0gUHJvamVjdCgnZmlyc3QgcHJvamVjdCcpXG5Qcm9qZWN0MS5hZGRUYXNrKHRhc2sxKVxuUHJvamVjdDEuYWRkVGFzayh0YXNrMilcbmNvbnNvbGUubG9nKFByb2plY3QxLmdldFRhc2tzKClbMF0uZ2V0RGVzY3JpcHRpb24oKSlcbmNvbnNvbGUubG9nKFByb2plY3QxLmdldFRhc2tzKClbMV0uZ2V0RGVzY3JpcHRpb24oKSlcbmNvbnNvbGUubG9nKFByb2plY3QxLmdldFRhc2tzKClbMF0uZ2V0U3RhdHVzKCkpXG5Qcm9qZWN0MS5nZXRUYXNrcygpWzBdLmNoYW5nZVN0YXR1cygpXG5jb25zb2xlLmxvZyhQcm9qZWN0MS5nZXRUYXNrcygpWzBdLmdldFN0YXR1cygpKVxuY29uc29sZS5sb2coUHJvamVjdDEuZ2V0VGFza3MoKVsxXS5nZXRTdGF0dXMoKSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKFByb2plY3QxLmdldFRhc2tzKClbMF0pKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoUHJvamVjdDEuZ2V0VGFza3MoKVsxXSkpXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ1dHRvbicpXG5hZGRCdXR0b24udGV4dENvbnRlbnQgPSAnYWRkIHRhc2snXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXRUaXRsZScpO1xuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdpbnB1dFRpdGxlJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudD0ndGl0bGUnO1xuXG4gICAgY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dERlc2MnKTtcblxuICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2lucHV0RGVzYycpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudD0nZGVzY3JpcHRpb24nO1xuXG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dERhdGUnKTtcbiAgICBpbnB1dERhdGUudHlwZT0nZGF0ZSc7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdpbnB1dERhdGUnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQ9J0R1ZSBkYXRlJztcblxuICAgIGNvbnN0IG5vblVyZ2VudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBub25VcmdlbnRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1cmdlbmN5Jyk7XG4gICAgbm9uVXJnZW50TGFiZWwudGV4dENvbnRlbnQ9J25vbi11cmdlbnQnO1xuICAgIGNvbnN0IG5vblVyZ2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbm9uVXJnZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAndXJnZW5jeScpO1xuICAgIG5vblVyZ2VudC50eXBlPSdyYWRpbyc7XG4gICAgY29uc3QgbWlkVXJnZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG1pZFVyZ2VudExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VyZ2VuY3knKTtcbiAgICBtaWRVcmdlbnRMYWJlbC50ZXh0Q29udGVudD0nbWlsZGx5IHVyZ2VudCc7XG4gICAgY29uc3QgbWlkVXJnZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBtaWRVcmdlbnQuc2V0QXR0cmlidXRlKCdpZCcsICd1cmdlbmN5Jyk7XG4gICAgbWlkVXJnZW50LnR5cGU9J3JhZGlvJztcbiAgICBjb25zdCBoaWdoVXJnZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGhpZ2hVcmdlbnRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1cmdlbmN5Jyk7XG4gICAgaGlnaFVyZ2VudExhYmVsLnRleHRDb250ZW50PSdoaWdobHkgdXJnZW50JztcbiAgICBjb25zdCBoaWdoVXJnZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoaWdoVXJnZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAndXJnZW5jeScpO1xuICAgIGhpZ2hVcmdlbnQudHlwZT0ncmFkaW8nO1xuICAgIFxuXG5cbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0RGVzYyk7XG4gICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKG5vblVyZ2VudCk7XG4gICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobm9uVXJnZW50TGFiZWwpO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKG1pZFVyZ2VudCk7XG4gICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobWlkVXJnZW50TGFiZWwpO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGhpZ2hVcmdlbnQpO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGhpZ2hVcmdlbnRMYWJlbCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcblxufSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKS5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=