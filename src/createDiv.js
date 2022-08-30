export default function createDiv(name, task) {
  const functionCall = 'get' + name;
  const divElement = document.createElement('div');
  divElement.classList.add(name);
  divElement.textContent = name + ': ' + task[functionCall]();
  return divElement;
}
