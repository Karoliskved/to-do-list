import './task.js'
import Task from './task.js'
import ProjectList from './projectList.js'
import { createCard } from './taskCard.js'
import './style.css'
import displayProjects from './projectCard.js'
import displayTasks from './displayTasks.js'
import { isThisMonth, isThisWeek, parse, parseISO, format } from 'date-fns'
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
const thisWeek = document.querySelector('#thisWeek')
const thisMonth = document.querySelector('#thisMonth')
let currentProject;
//console.log('test')
const task1 = Task('get food', 'get food for dog', '2022-07-28', 'high')
const task2 = Task('get stuff', 'get stuff for me', '2022-07-31', 'low')
const task3 = Task('get code', 'get code for me', '2022-07-24', 'low', 'school')
const task4 = Task('get code', 'get code for me', '2022-07-01', 'non-urgent', 'school')
const submitButton = document.createElement('button')
submitButton.classList.add('submitButton')
submitButton.textContent = 'submit';
submitButton.type = 'button'
/*const confirmEditButton = document.createElement('button')
confirmEditButton.classList.add('confirmEditButton')
confirmEditButton.textContent = 'edit';
confirmEditButton.type = 'button'*/

//console.log(task1.getDescription())
let taskArray = [task1, task2, task3]
const projectArray = ProjectList(['test', 'default', 'testing', 'school'])
//console.log(projectArray.getProjects())
addButton.addEventListener('click', () => {
    inputTitle.value = "";
    inputDesc.value = "";
    inputDate.value = "";
    inputProj.value = "";
    document.querySelectorAll('#urgency').forEach(element => element.checked = false);

    formContainer.hidden = !formContainer.hidden
    formContainer.appendChild(submitButton)


})
submitButton.addEventListener('click', () => {
    formContainer.hidden = true
    const newTask = Task(inputTitle.value, inputDesc.value, inputDate.value, taskForm.elements['urgency'].value, inputProj.value)
    taskArray.push(newTask)
    inputTitle.value = "";
    inputDesc.value = "";
    inputDate.value = "";
    inputProj.value = "";
    document.querySelectorAll('#urgency').forEach(element => element.checked = false);
    while (container.firstChild) {
        container.firstChild.remove()
    }
    displayTasks(taskArray, currentProject)

})

newProjectButton.addEventListener('click', () => {
    formContainerProj.hidden = !formContainerProj.hidden;
    console.log(taskArray)
})
submitButtonProj.addEventListener('click', () => {
    formContainerProj.hidden = true
    console.log(inputTitleProj.value)
    if (projectArray.getProjects().find(e => e == inputTitleProj.value) == undefined) {
        projectArray.addProject(inputTitleProj.value)
        inputTitleProj.value = ""
        projectsContainer.appendChild(displayProjects(projectArray, projectsContainer, inputProj))
    }
    else {
        alert('project already exists')
    }


}

)
allTasks.addEventListener('click', () => {
    handleProjectClick(allTasks)
})
thisWeek.addEventListener('click', () => {
    // console.log("test")
    while (container.firstChild) {
        container.firstChild.remove()
    }
    currentProject = thisWeek.textContent
    console.log(currentProject)
    displayTasks(taskArray, currentProject)
//console.log(thisWeekArray)

})
thisMonth.addEventListener('click', () => {
    // console.log("test")
    while (container.firstChild) {
        container.firstChild.remove()
    }
    //console.log(thisMonthArray)
    currentProject = thisMonth.textContent
    displayTasks(taskArray, currentProject)
    
})
projectsContainer.appendChild(displayProjects(projectArray, projectsContainer, inputProj))


function handleProjectClick(e) {
    while (container.firstChild) {
        container.firstChild.remove()
    }
    displayTasks(taskArray, e.textContent)
    currentProject = e.textContent
}
function handleDelete(index) {
    // console.log(index)
    console.log(taskArray.findIndex(item => item.getID() == index))
    taskArray.splice(taskArray.findIndex(item => item.getID() == index), 1)
    //console.log(taskArray)
}
function edit(index) {
    const confirmEditButton = document.createElement('button')
    confirmEditButton.classList.add('confirmEditButton')
    confirmEditButton.textContent = 'edit';
    confirmEditButton.type = 'button'
    formContainer.appendChild(confirmEditButton)
    submitButton.remove()
    formContainer.hidden = !formContainer.hidden
    let elementIndex = taskArray.findIndex(item => item.getID() == index)
    inputTitle.value = taskArray[elementIndex].getTitle();
    inputDesc.value = taskArray[elementIndex].getDescription();
    inputDate.value = taskArray[elementIndex].getDueDate();
    inputProj.value = taskArray[elementIndex].getProject();
    document.querySelectorAll('#urgency').forEach(e => {
        if (e.value == taskArray[elementIndex].getPriority()) {
            e.checked = true;
        }

    });
    // taskArray[elementIndex].setTitle('new title yo')
    const card = document.querySelector('#card' + index)
    // card.parentElement.replaceChild(createCard(taskArray[elementIndex]), card)
    function handleEdit(){
        formContainer.hidden = true
        submitButton.remove()
        taskArray[elementIndex] = Task(inputTitle.value, inputDesc.value, inputDate.value, taskForm.elements['urgency'].value, inputProj.value)
 
        //card.parentElement.replaceChild(createCard(taskArray[elementIndex]), card)
        while (container.firstChild) {
            container.firstChild.remove()
        }
        /*console.log(taskArray[0].getID())
        console.log(taskArray[1].getID())
        console.log(taskArray[2].getID())*/
        console.log(elementIndex)
        displayTasks(taskArray, currentProject)
        confirmEditButton.remove()
       /* console.log(taskArray[0].getID())
        console.log(taskArray[1].getID())
        console.log(taskArray[2].getID())
        console.log('test2')*/
    }
    confirmEditButton.addEventListener('click', handleEdit)
}

export { handleProjectClick, handleDelete, edit }
