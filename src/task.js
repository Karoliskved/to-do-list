
const Task = (title, description, dueDate, priority) => {
    let status=false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => status;
    const changeStatus=()=>{
        status=!status
    }
    return { getTitle, getDescription, getDueDate, getPriority, getStatus, changeStatus }
}
export default Task