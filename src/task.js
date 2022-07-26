
const Task = (title, description, dueDate, priority, project='default') => {
    let status=false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => status;
    const getProject=()=>project
    const changeStatus=()=>{
        status=!status
    }
    return { getTitle, getDescription, getDueDate, getPriority, getStatus, getProject, changeStatus }
}
export default Task