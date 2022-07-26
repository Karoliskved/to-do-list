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

//console.log('test')
const task1 = Task('get food', 'get food for dog', '2022-05-05', 'urgent')
const task2 = Task('get stuff', 'get stuff for me', '2022-05-06', 'non- urgent')
const task3 = Task('get code', 'get code for me', '2022-05-07', 'non- urgent', 'school')
//console.log(task1.getDescription())
let taskArray = [task1, task2, task3]
const newList = ProjectList(['test', 'default', 'testing', 'school'])
//console.log(newList.getProjects())

//document.querySelector('#container').appendChild(createCard(task1))
//document.querySelector('#container').appendChild(createCard(task1))
addButton.addEventListener('click', () => {
    formContainer.hidden = false
})
submitButton.addEventListener('click', () => {
    formContainer.hidden = true
    const newTask = Task(inputTitle.value, inputDesc.value, inputDate.value, taskForm.elements['urgency'].value, inputProj.value)
    inputTitle.value = "";
    inputDesc.value = "";
    inputDate.value = "";
    document.querySelectorAll('#urgency').forEach(element => element.checked = false);
    container.appendChild(createCard(newTask))

})
projectsContainer.appendChild(displayProjects(newList))

//console.log(displayTasks(taskArray, 'default')[1].getTitle())
//displayTasks(taskArray, 'school')
const projectTitles = document.querySelectorAll('.projectTitle')
console.log(projectTitles)
projectTitles.forEach(e => {
    console.log(e)
    e.addEventListener('click', () => {
        console.log('test')
        displayTasks(taskArray, e.textContent)
    })
})

