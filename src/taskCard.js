import { handleDelete } from "."
import createDiv from "./createDiv";
import createCardLarge from "./taskCardLarge";
export function createCard(task) {
    const card = document.createElement('div')
    card.classList.add('card');
    card.id = 'card' + task.getID();
    const check = document.createElement('input');
    check.classList.add("checkmark");
    check.type = 'checkbox';
    check.onchange = () => {
        if (check.checked) {
            card.classList.add('completed')
        }
        else{
            card.classList.remove('completed')
        }
        
    }
    /*  const button=document.createElement('button');
      button.classList.add('delButton');
      button.textContent='delete';
      button.id=task.getID()
      button.addEventListener('click', ()=>{
          handleDelete(button.id)
         document.querySelector('#card'+button.id).remove()
      })*/
    card.appendChild(createSmallClickable(task))
    card.appendChild(check);
    // card.appendChild(button);
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
    const priority = createDiv("Priority", task);
    clickContainer.appendChild(title);
    clickContainer.appendChild(dueDate);
    clickContainer.appendChild(priority);
    return clickContainer

}
