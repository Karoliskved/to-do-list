import displayTasks from "./displayTasks"
import handleProjectClick from "."
export default function displayProjects(projectList, container){
    while (container.firstChild) {
        container.firstChild.remove()
    }
    const card=document.createElement('div')
    const projects=projectList.getProjects()
    projects.forEach(element => {
        let div=document.createElement('div')
        div.classList.add('projectTitle')
        div.id=element
        div.textContent=element
        div.addEventListener('click', ()=>handleProjectClick(div))
        card.appendChild(div)
    });
   
    return card;
}