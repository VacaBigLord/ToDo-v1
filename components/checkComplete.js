const completeTask = (eveneto) => {
    const elemento = eveneto.target;
    elemento.classList.toggle('fas');
    elemento.classList.toggle('completeIcon');
    elemento.classList.toggle('far');
}
const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
}

export default checkComplete