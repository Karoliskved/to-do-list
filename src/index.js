import './task.js'
import Task from './task.js'
import ProjectList from './projectList.js'
import createCard from './taskCard.js'
import './style.css'
import displayProjects from './projectCard.js'
import displayTasks from './displayTasks.js'

const container = document.querySelector('#container');
const formContainer = document.querySelector('.formContainer');
const submitButton = document.querySelector('.submitButton');
const inputTitle = document.querySelector('#inputTitle');
const inputDesc = document.querySelector('#inputDesc');
const inputDate = document.querySelector('#inputDate');
const inputProj = document.querySelector('#inputProj');
const addButton = document.querySelector('.formButton')
const taskForm = document.querySelector('#newTask')
const projectsContainer = document.querySelector('.projectsContainer')
const newProjectButton = document.querySelector('.newProjButton')
const formContainerProj = document.querySelector('.projFormContainer')
const submitButtonProj = document.querySelector('.submitButtonProj')
const inputTitleProj = document.querySelector('#inputTitleProj')

//console.log('test')
const task1 = Task('get food', 'get food for dog', '2022-05-05', 'urgent')
const task2 = Task('get stuff', 'get stuff for me', '2022-05-06', 'non- urgent')
const task3 = Task('get code', 'get code for me', '2022-05-07', 'non- urgent', 'school')
const task4 = Task('get code', 'get code for me', '2022-05-07', 'non- urgent', 'school')
console.log(task1.getID())
console.log(task2.getID())
console.log(task3.getID())
console.log(task4.getID())
//console.log(task1.getDescription())
let taskArray = [task1, task2, task3]
const projectArray = ProjectList(['test', 'default', 'testing', 'school'])
//console.log(projectArray.getProjects())
addButton.addEventListener('click', () => {

    formContainer.hidden = !formContainer.hidden
})
submitButton.addEventListener('click', () => {
    formContainer.hidden = true
    const newTask = Task(inputTitle.value, inputDesc.value, inputDate.value, taskForm.elements['urgency'].value, inputProj.value)
    taskArray.push(newTask)
    inputTitle.value = "";
    inputDesc.value = "";
    inputDate.value = "";
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
    inputTitleProj.value=""
    projectsContainer.appendChild(displayProjects(projectArray, projectsContainer))
 
}

)
projectsContainer.appendChild(displayProjects(projectArray, projectsContainer))


 function handleProjectClick(e){
    console.log('test')
    while (container.firstChild) {
        container.firstChild.remove()
    }
    displayTasks(taskArray, e.textContent)
}
 function handleDelete(index){
    console.log(index)
    console.log(taskArray.findIndex(item => item.getID()==index))
    taskArray.splice(taskArray.findIndex(item => item.getID()==index), 1)
    console.log(taskArray)
}

export{handleProjectClick, handleDelete}
