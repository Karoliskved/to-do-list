import displayTasks from "./displayTasks"
import { handleProjectClick, handleProjectRemove } from "."
export default function displayProjects(projectList, container, input){
    while (container.firstChild) {
        container.firstChild.remove()
    }
    while (input.firstChild) {
        input.firstChild.remove()
    }
    const card=document.createElement('div')
    const projects=projectList.getProjects()

    for(let i=0; i<projects.length; i++)
    {
        const div=document.createElement('div')
        
        div.classList.add('projectTitle')
        div.id=projectList.getProject(i);
        div.textContent=projectList.getProject(i);
        div.addEventListener('click', ()=>handleProjectClick(div))
        const projDeleteButton=document.createElement('button')
        projDeleteButton.textContent='delete'
        projDeleteButton.classList.add('projDeleteButton')
        projDeleteButton.addEventListener('click', ()=>{
            projectList.removeProject(i)
            div.remove()
            
        })
        const option=document.createElement('option')
        option.value=projectList.getProject(i);
        option.textContent=projectList.getProject(i);
        div.appendChild(projDeleteButton)
        card.appendChild(div)
         input.appendChild(option)

    
    }
   
    
   
    return card;
}