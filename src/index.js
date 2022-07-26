import './task.js'
import Task from './task.js'
import ProjectList from './projectList.js'
import createCard from './taskCard.js'
import './style.css'
import displayProjects from './projectCard.js'
const container = document.querySelector('#container');
const formContainer = document.querySelector('.formContainer');
const submitButton = document.querySelector('.submitButton');
const inputTitle = document.querySelector('#inputTitle');
const inputDesc = document.querySelector('#inputDesc');
const inputDate = document.querySelector('#inputDate');
const inputProj = document.querySelector('#inputProj');
const addButton = document.querySelector('.formButton')
const taskForm = document.querySelector('#newTask')
const projectsContainer=document.querySelector('.projectsContainer')
console.log('test')
const task1 = Task('get food', 'get food for dog', '2022-05-05', 'urgent')
const task2 = Task('get stuff', 'get stuff for me', '2022-05-06', 'non- urgent')
console.log(task1.getDescription())
const newList= ProjectList(['test', 'testing', 'school'])
console.log(newList.getProjects())
/*const Project1 = Project('first project')
Project1.addTask(task1)
Project1.addTask(task2)
console.log(Project1.getTasks()[0].getDescription())
console.log(Project1.getTasks()[1].getDescription())
console.log(Project1.getTasks()[0].getStatus())
Project1.getTasks()[0].changeStatus()
console.log(Project1.getTasks()[0].getStatus())
console.log(Project1.getTasks()[1].getStatus())
document.querySelector('#container').appendChild(createCard(Project1.getTasks()[0]))
document.querySelector('#container').appendChild(createCard(Project1.getTasks()[1]))*/

document.querySelector('#container').appendChild(createCard(task1))
document.querySelector('#container').appendChild(createCard(task1))
addButton.addEventListener('click', () => {
    formContainer.hidden = false
})
submitButton.addEventListener('click', () => {
    formContainer.hidden = true
    const newTask = Task(inputTitle.value, inputDesc.value, inputDate.value, taskForm.elements['urgency'].value, inputProj.value)
    inputTitle.value = "";
    inputDesc.value = "";
    inputDate.value = "";
    document.querySelectorAll('#urgency').forEach (element => element.checked=false);
    container.appendChild(createCard(newTask))

})
projectsContainer.appendChild(displayProjects(newList))

