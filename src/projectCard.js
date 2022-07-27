import displayTasks from "./displayTasks"
import { handleProjectClick } from "."
export default function displayProjects(projectList, container, input){
    while (container.firstChild) {
        container.firstChild.remove()
    }
    while (input.firstChild) {
        input.firstChild.remove()
    }
    const card=document.createElement('div')
    const projects=projectList.getProjects()
    projects.forEach(e => {
        const div=document.createElement('div')
        div.classList.add('projectTitle')
        div.id=e;
        div.textContent=e;
        div.addEventListener('click', ()=>handleProjectClick(div))
        const option=document.createElement('option')
        option.value=e;
        option.textContent=e;
        card.appendChild(div)
        //console.log(option.value)
         input.appendChild(option)
    });
   
    return card;
}