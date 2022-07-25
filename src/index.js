import './task.js'
import Task from './task.js'
import Project from './project.js'
import createCard from './taskCard.js'

console.log('test')
const task1 = Task('get food', 'get food for dog', '2022-05-05', 'urgent')
const task2 = Task('get stuff', 'get stuff for me', '2022-05-06', 'non- urgent')
console.log(task1.getDescription())
const Project1 = Project('first project')
Project1.addTask(task1)
Project1.addTask(task2)
console.log(Project1.getTasks()[0].getDescription())
console.log(Project1.getTasks()[1].getDescription())
console.log(Project1.getTasks()[0].getStatus())
Project1.getTasks()[0].changeStatus()
console.log(Project1.getTasks()[0].getStatus())
console.log(Project1.getTasks()[1].getStatus())
document.querySelector('#container').appendChild(createCard(Project1.getTasks()[0]))
document.querySelector('#container').appendChild(createCard(Project1.getTasks()[1]))
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
