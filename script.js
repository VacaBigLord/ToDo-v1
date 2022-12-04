import deleteIcon from "./components/deleteIcon.js";
import checkComplete from "./components/checkComplete.js";

const btn = document.querySelector('[data-form-btm]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement ('span');
    titleTask.classList.add('task');
    taskContent.appendChild(titleTask);
    titleTask.innerText = value;
    
    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
}

//arrow function o funciones anonimas
btn.addEventListener("click", createTask);
//listener