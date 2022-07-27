import createCard from "./taskCard";
export default function displayTasks(tasks, project='all tasks'){
  let found=[]
  if(project=='all tasks'){
    found=tasks;
  }
  else{
    found= tasks.filter(e => e.getProject()==project);
  }
  const container = document.querySelector('#container');
  const cardContainer=document.createElement('div');
  cardContainer.id='cardContainer';
  found.forEach(e => {
    cardContainer.appendChild(createCard(e));
  });
  container.appendChild(cardContainer);

}