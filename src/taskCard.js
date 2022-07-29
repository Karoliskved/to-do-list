import { handleDelete, edit, saveCheck } from "."
import createDiv from "./createDiv";
import createCardLarge from "./taskCardLarge";
export function createCard(task) {
    const card = document.createElement('div')
    card.classList.add('card');
    card.id = 'card' + task.getID();
    const check = document.createElement('input');
    check.classList.add("checkmark");
    check.type = 'checkbox';
    if(task.getStatus()){
        card.classList.add('completed')
        check.checked=true;
    }
    check.onchange = () => {
        task.changeStatus();
        saveCheck();
        if (check.checked) {
            card.classList.add('completed')
        }
        else{
            card.classList.remove('completed')
        }
    }
    const button=document.createElement('button');
    button.classList.add('delButton');
    button.textContent='delete';
    button.id=task.getID()
    button.addEventListener('click', ()=>{
        handleDelete(button.id)
       document.querySelector('#card'+button.id).remove()
    })
    const editButton=document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent='edit';
    editButton.id=task.getID()
    editButton.addEventListener('click', ()=>{
        edit(editButton.id) 
    })
    card.classList.add(task.getPriority())
    card.appendChild(createSmallClickable(task))
    card.appendChild(check);
    card.appendChild(editButton)
    card.appendChild(button)
    return card;
}
export function createSmallClickable(task) {
    const clickContainer = document.createElement('div')
    clickContainer.addEventListener('click', () => {
        const newCard = createCardLarge(task)
        clickContainer.parentElement.replaceChild(newCard, clickContainer)

    })
    clickContainer.classList.add('clickContainer')
    const title = createDiv("Title", task);
    const dueDate = createDiv("DueDate", task);
    clickContainer.appendChild(title);
    clickContainer.appendChild(dueDate);
    return clickContainer

}
