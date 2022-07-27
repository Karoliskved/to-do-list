import { handleDelete} from "."
import createDiv from "./createDiv";
import createCard from "./taskCard";
export default function createCardLarge(task){
    const card=document.createElement('div')
    const clickContainer=document.createElement('div')
    card.classList.add('cardLarge');
    card.id='card'+task.getID()
    clickContainer.addEventListener('click', ()=>{
        const newCard=createCard(task)
        card.parentElement.replaceChild(newCard, card)
    })
    const title=createDiv("Title", task);
    const description=createDiv("Description", task);
    const dueDate=createDiv("DueDate", task);
    const priority=createDiv("Priority", task);
    const project=createDiv('Project', task);
    const check=document.createElement('input');
    check.classList.add("checkmark");
    check.type='checkbox';
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
    card.appendChild(clickContainer);
    card.appendChild(check);
    card.appendChild(button);
    return card;
}

