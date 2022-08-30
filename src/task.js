function hashCode(string) {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    hash = (hash << 5) - hash + code;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
let counter = 0;
const Task = (
  title,
  description,
  dueDate,
  priority,
  project = 'default',
  status = false
) => {
  counter++;
  const id = hashCode(
    title + description + dueDate + priority + project + counter + status
  );
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;
  const getProject = () => project;
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const setDueDate = (newDate) => {
    dueDate = newDate;
  };
  const setPriority = (newPriority) => {
    priority = newPriority;
  };
  const setProject = (newProject) => {
    project = newProject;
  };
  const getID = () => id;
  const changeStatus = () => {
    status = !status;
  };
  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getStatus,
    getProject,
    getID,
    changeStatus,
    setDescription,
    setDueDate,
    setPriority,
    setProject,
    setTitle,
  };
};
export default Task;
