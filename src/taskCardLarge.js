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
    const project=createDiv('Project', task);
   
    clickContainer.appendChild(title);
    clickContainer.appendChild(description);
    clickContainer.appendChild(dueDate);
    clickContainer.appendChild(project);

    return clickContainer;
}

