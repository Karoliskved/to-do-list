import { createCard } from "./taskCard";
import { isThisMonth, isThisWeek,  parseISO, compareAsc } from 'date-fns'

export default function displayTasks(tasks, project = 'all tasks') {
  let found = []
  if (project == 'allTasks') {
    found = tasks;
  }
  else if (project == 'thisWeek') {
    tasks.forEach(e => {
     // const date = new Date(parseISO(e.getDueDate(), 'yyyy-MM-dd'))
      if (isThisWeek(date, { weekStartsOn: 1 })) {
        found.push(e)
        //console.log(parse(e.getDueDate(), 'yyyy-MM-dd', new Date()))
      }
    })
    found.sort((a, b)=>compareAsc(parseISO(a.getDueDate()), parseISO(b.getDueDate())))
  }
  else if (project == 'this month') {
    tasks.forEach(e => {
      if (isThisMonth(parseISO(e.getDueDate())))
        found.push(e)
        
    })
    found.sort((a, b)=>compareAsc(parseISO(a.getDueDate()), parseISO(b.getDueDate())))
  }
  else {
    found = tasks.filter(e => e.getProject() == project);
  }
  const container = document.querySelector('#container');
  const cardContainer = document.createElement('div');
  cardContainer.id = 'cardContainer';
  found.forEach(e => {
    cardContainer.appendChild(createCard(e));
  });
  container.appendChild(cardContainer);

}