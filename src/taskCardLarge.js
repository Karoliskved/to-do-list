import { handleDelete} from "."
import createDiv from "./createDiv";
import {createSmallClickable} from "./taskCard";
export default function createCardLarge(task){

    const clickContainer=document.createElement('div')
    clickContainer.addEventListener('click', ()=>{
        const newCard=createSmallClickable(task)
        clickContainer.parentElement.replaceChild(newCard, clickContainer)
    })
    const title=createDiv("Title", task);
    const description=createDiv("Description", task);
    const dueDate=createDiv("DueDate", task);
    const priority=createDiv("Priority", task);
    const project=createDiv('Project', task);
    const button=document.createElement('button');
    button.classList.add('delButton');
    button.textContent='delete';
    button.id=task.getID()
    button.addEventListener('click', ()=>{
        handleDelete(button.id)
       document.querySelector('#card'+button.id).remove()
    })
    clickContainer.appendChild(title);
    clickContainer.appendChild(description);
    clickContainer.appendChild(dueDate);
    clickContainer.appendChild(priority);
    clickContainer.appendChild(project);
    clickContainer.appendChild(button);
    return clickContainer;
}

