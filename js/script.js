const addBtn = document.querySelector("#btn");
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

addBtn.addEventListener("click, addTask"); // add a task on click

function addTask() {
  const newTask = taskCard.cloneNode(true);
  const newTexArea = newTask.querySelector(".task");
  newTexArea.value = "New Task"; // set new task text to "New Task"

  tasksContainer.appendChild(newTask); // aprend new task to the tasks container
}
