import displayTasks from './displayTasks';
import deleteICon from './assets/delete.svg';
import { handleProjectClick, handleProjectRemove } from '.';
export default function displayProjects(projectList, container, input) {
  while (container.firstChild) {
    container.firstChild.remove();
  }
  while (input.firstChild) {
    input.firstChild.remove();
  }
  const card = document.createElement('div');
  const projects = projectList.getProjects();

  for (let i = 0; i < projects.length; i++) {
    const div = document.createElement('div');

    div.classList.add('projectTitle');
    div.id = projectList.getProject(i);
    const divName = document.createElement('div');
    divName.id = projectList.getProject(i);
    divName.textContent = projectList.getProject(i);
    divName.addEventListener('click', () => handleProjectClick(divName));
    const option = document.createElement('option');
    option.value = projectList.getProject(i);
    option.textContent = projectList.getProject(i);
    const projDeleteButton = document.createElement('input');
    projDeleteButton.type = 'image';
    projDeleteButton.src = deleteICon;
    projDeleteButton.classList.add('projDeleteButton');
    projDeleteButton.addEventListener('click', () => {
      handleProjectRemove(projectList.getProject(i));
      projectList.removeProject(i);
      div.remove();
      option.remove();
      localStorage.setItem(
        'projectArray',
        JSON.stringify(projectList.getProjects())
      );
    });
    div.appendChild(divName);
    div.appendChild(projDeleteButton);
    card.appendChild(div);
    //card.appendChild(projDeleteButton)
    input.appendChild(option);
  }

  return card;
}
