import createCard from "./taskCard";
export default function displayTasks(tasks, project){
  const found= tasks.filter(e => e.getProject()==project);
  const container = document.querySelector('#container');
  const cardContainer=document.createElement('div');
  found.forEach(e => {
    cardContainer.appendChild(createCard(e));
  });
  container.appendChild(cardContainer);

}