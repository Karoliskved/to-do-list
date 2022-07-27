import { handleDelete} from "."
import createDiv from "./createDiv";
import createCardLarge from "./taskCardLarge";
export default function createCard(task){
    const card=document.createElement('div')
    const clickContainer=document.createElement('div')
    card.classList.add('card');
    card.id='card'+task.getID();
    clickContainer.addEventListener('click', ()=>{
        const newCard=createCardLarge(task)
        card.parentElement.replaceChild(newCard, card)
    })
    const title=createDiv("Title", task);
    const dueDate=createDiv("DueDate", task);
    const priority=createDiv("Priority", task);
    const check=document.createElement('input');
    check.classList.add("checkmark");
    check.type='checkbox';
  /*  const button=document.createElement('button');
    button.classList.add('delButton');
    button.textContent='delete';
    button.id=task.getID()
    button.addEventListener('click', ()=>{
        handleDelete(button.id)
       document.querySelector('#card'+button.id).remove()
    })*/
    clickContainer.appendChild(title);
    clickContainer.appendChild(dueDate);
    clickContainer.appendChild(priority);
    card.appendChild(clickContainer)
    card.appendChild(check);
   // card.appendChild(button);
    return card;
}

