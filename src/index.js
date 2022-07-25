import './task.js'
import Task from './task.js'
import Project from './project.js'
console.log('test')
const task1=Task('get food', 'get food for dog', '2022-05-05', 'urgent')
const task2=Task('get stuff', 'get stuff for me', '2022-05-06', 'non- urgent')
console.log(task1.getDescription())
const Project1=Project('first project')
Project1.addTask(task1)
Project1.addTask(task2)
console.log(Project1.getTasks()[0].getDescription())
console.log(Project1.getTasks()[1].getDescription())
