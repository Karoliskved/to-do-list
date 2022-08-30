import './task.js';
import Task from './task.js';
import ProjectList from './projectList.js';
import { createCard } from './taskCard.js';
import './style.css';
import displayProjects from './projectCard.js';
import displayTasks from './displayTasks.js';
import { isThisMonth, isThisWeek, parse, parseISO, format } from 'date-fns';
//select dom elements
const container = document.querySelector('#container');
const formContainer = document.querySelector('.formContainer');
const inputTitle = document.querySelector('#inputTitle');
const inputDesc = document.querySelector('#inputDesc');
const inputDate = document.querySelector('#inputDate');
const inputProj = document.querySelector('#inputProj');
const addButton = document.querySelector('.formButton');
const taskForm = document.querySelector('#newTask');
const projectsContainer = document.querySelector('.projectsContainer');
const newProjectButton = document.querySelector('.newProjButton');
const formContainerProj = document.querySelector('.projFormContainer');
const inputTitleProj = document.querySelector('#inputTitleProj');
const submitButtonProj = document.querySelector('.submitButtonProj');
const allTasks = document.querySelector('#allTasks');
const thisWeek = document.querySelector('#thisWeek');
const thisMonth = document.querySelector('#thisMonth');
let currentProject;

const task1 = [Task('get food', 'get food for dog', '2022-07-28', 'high')];
const submitButton = document.createElement('button');
submitButton.classList.add('submitButton');
submitButton.textContent = 'submit';
submitButton.type = 'button';
const confirmEditButton = document.createElement('button');
confirmEditButton.classList.add('confirmEditButton');
confirmEditButton.textContent = 'edit';
confirmEditButton.type = 'button';
let taskArray = [];

const projectArrayOnFirstLoad = ProjectList(['default', 'school']);
//localStorage.clear();
//setup starting projects and tasks into local storage if local storage is empty
if (!localStorage.getItem('taskArray')) {
  localStorage.setItem('taskArray', JSON.stringify(convertToExportable(task1)));
  localStorage.setItem(
    'projectArray',
    JSON.stringify(projectArrayOnFirstLoad.getProjects())
  );
}
// get projects and tasks from local storage
let objectStorage = JSON.parse(localStorage.getItem('taskArray') || '[]');
taskArray = convertToTaskArray(objectStorage);
const projectArray = ProjectList(
  JSON.parse(localStorage.getItem('projectArray'))
);

handleProjectClick(allTasks);

// show form when clicking on new task
addButton.addEventListener('click', () => {
  inputTitle.value = '';
  inputDesc.value = '';
  inputDate.value = '';
  inputProj.value = '';
  confirmEditButton.remove();
  formContainer.appendChild(submitButton);
  formContainer.hidden = !formContainer.hidden;
});
// get info from new task form
submitButton.addEventListener('click', () => {
  formContainer.hidden = true;
  const newTask = Task(
    inputTitle.value,
    inputDesc.value,
    inputDate.value,
    taskForm.elements['urgency'].value,
    inputProj.value
  );
  taskArray.push(newTask);
  //save task to local storage
  localStorage.setItem(
    'taskArray',
    JSON.stringify(convertToExportable(taskArray))
  );
  //redisplay tasks
  while (container.firstChild) {
    container.firstChild.remove();
  }
  displayTasks(taskArray, currentProject);
});
// show form when clicking new project
newProjectButton.addEventListener('click', () => {
  formContainerProj.hidden = !formContainerProj.hidden;
});
submitButtonProj.addEventListener('click', () => {
  formContainerProj.hidden = true;
  //only allows unique projects
  if (
    projectArray.getProjects().find((e) => e == inputTitleProj.value) ==
    undefined
  ) {
    projectArray.addProject(inputTitleProj.value);
    inputTitleProj.value = '';
    projectsContainer.appendChild(
      displayProjects(projectArray, projectsContainer, inputProj)
    );
    //save projects to local storage
    localStorage.setItem(
      'projectArray',
      JSON.stringify(projectArray.getProjects())
    );
  } else {
    alert('project already exists');
  }
});

//show all tasks when clicking on all tasks
allTasks.addEventListener('click', () => {
  handleProjectClick(allTasks);
});
//show projects which are/were due on the current week
thisWeek.addEventListener('click', () => {
  while (container.firstChild) {
    container.firstChild.remove();
  }
  currentProject = thisWeek.textContent;
  displayTasks(taskArray, currentProject);
});
//show projects which are/were due on the current month
thisMonth.addEventListener('click', () => {
  while (container.firstChild) {
    container.firstChild.remove();
  }
  currentProject = thisMonth.textContent;
  displayTasks(taskArray, currentProject);
});
//display all available projects in the sidebar
projectsContainer.appendChild(
  displayProjects(projectArray, projectsContainer, inputProj)
);

//display tasks based on project
function handleProjectClick(e) {
  while (container.firstChild) {
    container.firstChild.remove();
  }
  displayTasks(taskArray, e.id);
  currentProject = e.id;
}
// delete task from taskArray and local storage
function handleDelete(index) {
  taskArray.splice(
    taskArray.findIndex((item) => item.getID() == index),
    1
  );
  localStorage.setItem(
    'taskArray',
    JSON.stringify(convertToExportable(taskArray))
  );
}
//edit existing task
function edit(index) {
  //remove unnecessary items from the form
  confirmEditButton.remove();
  formContainer.appendChild(confirmEditButton);
  submitButton.remove();
  formContainer.hidden = !formContainer.hidden;
  //show current info in the form
  let elementIndex = taskArray.findIndex((item) => item.getID() == index);
  inputTitle.value = taskArray[elementIndex].getTitle();
  inputDesc.value = taskArray[elementIndex].getDescription();
  inputDate.value = taskArray[elementIndex].getDueDate();
  inputProj.value = taskArray[elementIndex].getProject();
  document.querySelectorAll('#urgency').forEach((e) => {
    if (e.value == taskArray[elementIndex].getPriority()) {
      e.checked = true;
    }
  });
  const card = document.querySelector('#card' + index);
  //take data from the form and save the task that was edited in task array
  function handleEdit() {
    formContainer.hidden = true;
    submitButton.remove();
    taskArray[elementIndex] = Task(
      inputTitle.value,
      inputDesc.value,
      inputDate.value,
      taskForm.elements['urgency'].value,
      inputProj.value
    );
    localStorage.setItem(
      'taskArray',
      JSON.stringify(convertToExportable(taskArray))
    );
    //redisplay tasks
    while (container.firstChild) {
      container.firstChild.remove();
    }
    displayTasks(taskArray, currentProject);
    confirmEditButton.remove();
  }

  confirmEditButton.addEventListener('click', handleEdit);
}
// convert task array into an object that can be saved in local storage
function convertToExportable(tasks) {
  const taskArrayForStorage = [];
  tasks.forEach((task) => {
    const taskConverter = new Object();
    taskConverter.title = task.getTitle();
    taskConverter.description = task.getDescription();
    taskConverter.dueDate = task.getDueDate();
    taskConverter.priority = task.getPriority();
    taskConverter.project = task.getProject();
    taskConverter.status = task.getStatus();
    taskArrayForStorage.push(taskConverter);
  });
  return taskArrayForStorage;
}
// convert objects from local storage to task objects
// this the way it is so we could get back Task methods which cant be saved in local storage
function convertToTaskArray(taskCont) {
  let array = [];
  taskCont.forEach((task) => {
    array.push(
      Task(
        task.title,
        task.description,
        task.dueDate,
        task.priority,
        task.project,
        task.status
      )
    );
  });
  return array;
}
//save task array to local storage when task status changes
function saveCheck() {
  localStorage.setItem(
    'taskArray',
    JSON.stringify(convertToExportable(taskArray))
  );
}
//when a project is removed the app removes all tasks in that project
function handleProjectRemove(projectName) {
  //keeps only tasks which are not in project which was removed
  taskArray = taskArray.filter((e) => e.getProject() != projectName);
  while (container.firstChild) {
    container.firstChild.remove();
  }
  displayTasks(taskArray, currentProject);
  localStorage.setItem(
    'taskArray',
    JSON.stringify(convertToExportable(taskArray))
  );
}
export {
  handleProjectClick,
  handleDelete,
  edit,
  saveCheck,
  handleProjectRemove,
};
