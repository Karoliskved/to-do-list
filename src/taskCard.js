import { handleDelete} from "."
import createDiv from "./createDiv";
export default function createCard(task){
    const card=document.createElement('div')
    card.classList.add('card');
    card.id='card'+task.getID()
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
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(dueDate);
    card.appendChild(priority);
    card.appendChild(project);
    card.appendChild(check);
    card.appendChild(button);
    return card;
}

