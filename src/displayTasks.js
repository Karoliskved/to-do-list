import { createCard } from "./taskCard";
import { isThisMonth, isThisWeek,  parseISO,  } from 'date-fns'

export default function displayTasks(tasks, project = 'all tasks') {
  let found = []
  if (project == 'all tasks') {
    found = tasks;
  }
  else if (project == 'this week') {
    tasks.forEach(e => {
      const date = new Date(parseISO(e.getDueDate(), 'yyyy-MM-dd'))
      if (isThisWeek(date, { weekStartsOn: 1 })) {
        found.push(e)
        //console.log(parse(e.getDueDate(), 'yyyy-MM-dd', new Date()))
      }
    })
  }
  else if (project == 'this month') {
    tasks.forEach(e => {
      if (isThisMonth(parseISO(e.getDueDate())))
        found.push(e)
    })
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