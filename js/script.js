console.log("hgfh");

const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

addBtn.addEventListener('click', addTask); // add a task on click

function addTask() {
  const newTask = taskCard.cloneNode(true);
  const newTexArea = newTask.querySelector(".task");
  newTexArea.value = "New Task" // set new task text to "New Task"

  tasksContainer.appendChild(newTask); // aprend new task to the tasks container
}

// On akoute un écouteur d'événement sur le bouton pour appeller une fonction suppression

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function() { // delete default task on click
  deleteTask(taskCard); // target the right task
});
// On crée la fonction de suppression 
function deleteTask(task){
  task.remove(); // remove the task
}

// On ajoute l'écouteur d'événement sur l'élément cloné dans la fonction ajout, afin de faire fonctionner le bouton supression sur les nouvelles cards 

function addTask() {
  const newTask = taskCard.cloneNode(true) // clone the task card 
  const newDelBtn = newTask.querySelector('.dlBtn')
  const newTexArea = newTask.querySelector('.task')
  
  newTexArea.value = "New Task" // set new task text to "New task"
  newDelBtn.addEventListener('click', function() { // add delete event listenner to new task 
    deleteTask(newTask); // append new task to the tasks container 
  });
  tasksContainer.appendChild(newTask) // append  new task to the task container
  updateCount();
}