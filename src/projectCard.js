export default function displayProjects(projectList){
   
    const card=document.createElement('div')
    const projects=projectList.getProjects()
    projects.forEach(element => {
        let div=document.createElement('div')
        div.classList.add('projectTitle')
        div.id=element
        div.textContent=element
        card.appendChild(div)
    });
   
    return card;
}