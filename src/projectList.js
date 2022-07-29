const ProjectList = (projects) => {
    
   
    const getProjects = () => projects
    const getProject =(index)=>projects[index]
    const addProject = (project) => {
        projects.push(project)
    }
    const removeProject = (index) => {
        projects.splice(index, 1)
    }

    return {getProjects, addProject, removeProject, getProject}
}
export default ProjectList