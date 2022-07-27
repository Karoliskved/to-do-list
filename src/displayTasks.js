import createCard from "./taskCard";
export default function displayTasks(tasks, project='none'){
  let found=[]
  if(project=='none'){
    found=tasks;
  }
  else{
    found= tasks.filter(e => e.getProject()==project);
  }
  const container = document.querySelector('#container');
  const cardContainer=document.createElement('div');
  found.forEach(e => {
    cardContainer.appendChild(createCard(e));
  });
  container.appendChild(cardContainer);

}