import createDiv from './createDiv';
import { createSmallClickable } from './taskCard';
export default function createCardLarge(task) {
  const clickContainer = document.createElement('div');
  clickContainer.classList.add('clickContainerLarge');
  clickContainer.addEventListener('click', () => {
    const newCard = createSmallClickable(task);
    clickContainer.parentElement.replaceChild(newCard, clickContainer);
  });
  const top = document.createElement('div');
  top.classList.add('row');
  const bottom = document.createElement('div');
  bottom.classList.add('row');
  const title = createDiv('Title', task);
  const description = createDiv('Description', task);
  const dueDate = createDiv('DueDate', task);
  const project = createDiv('Project', task);

  top.appendChild(title);
  top.appendChild(dueDate);
  bottom.appendChild(project);
  bottom.appendChild(description);
  clickContainer.appendChild(top);
  clickContainer.appendChild(bottom);

  return clickContainer;
}
