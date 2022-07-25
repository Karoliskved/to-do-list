export default function createDiv(name, task){
    const functionCall='get'+name
    console.log(functionCall)
    const func=window[functionCall]
    console.log(func)
    const divElement=document.createElement('div')
    divElement.classList.add(name)
    divElement.textContent=task[functionCall]()
    return divElement
}