import { handleDelete, edit, saveCheck } from '.';
import createDiv from './createDiv';
import createCardLarge from './taskCardLarge';
import deleteIcon from './assets/delete.svg';
import editIcon from './assets/pencil.svg';
export function createCard(task) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.id = 'card' + task.getID();
  const check = document.createElement('input');
  check.classList.add('checkmark');
  check.type = 'checkbox';
  if (task.getStatus()) {
    card.classList.add('completed');
    check.checked = true;
  }
  check.onchange = () => {
    task.changeStatus();
    saveCheck();
    if (check.checked) {
      card.classList.add('completed');
    } else {
      card.classList.remove('completed');
    }
  };
  const button = document.createElement('input');
  button.src = deleteIcon;
  button.classList.add('delButton');
  button.type = 'image';
  button.id = task.getID();
  button.addEventListener('click', () => {
    handleDelete(button.id);
    document.querySelector('#card' + button.id).remove();
  });
  const editButton = document.createElement('input');
  editButton.classList.add('editButton');
  editButton.type = 'image';
  editButton.id = task.getID();
  editButton.src = editIcon;
  editButton.addEventListener('click', () => {
    edit(editButton.id);
  });
  console.log(task.getTitle());
  card.classList.add(task.getPriority());
  card.appendChild(createSmallClickable(task));
  card.appendChild(check);
  card.appendChild(editButton);
  card.appendChild(button);
  return card;
}
export function createSmallClickable(task) {
  const clickContainer = document.createElement('div');
  clickContainer.addEventListener('click', () => {
    const newCard = createCardLarge(task);
    clickContainer.parentElement.replaceChild(newCard, clickContainer);
  });
  clickContainer.classList.add('clickContainer');
  const title = createDiv('Title', task);
  const dueDate = createDiv('DueDate', task);
  clickContainer.appendChild(title);
  clickContainer.appendChild(dueDate);
  return clickContainer;
}
