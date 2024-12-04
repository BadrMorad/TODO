console.log("hgfh"); // Affiche un message dans la console pour vérifier que le script est chargé

const addBtn = document.querySelector('#btn'); // Sélectionne le bouton "Add a task"
const taskCard = document.querySelector(".todoCard"); // Sélectionne un modèle de carte de tâche
const tasksContainer = document.querySelector("#todoCards"); // Sélectionne le conteneur où les tâches seront ajoutées

// Ajoute un écouteur d'événement au bouton pour ajouter une nouvelle tâche lorsqu'il est cliqué
addBtn.addEventListener('click', addTask);

function addTask() {
  const newTask = taskCard.cloneNode(true); // Clone le modèle de carte de tâche
  const newTexArea = newTask.querySelector(".task");
  newTexArea.value = "New Task"; // Définit le texte de la nouvelle tâche à "New Task"

  const newDelBtn = newTask.querySelector('.delBtn');
  if (newDelBtn) { // Vérifie si le bouton de suppression existe
    // Ajoute un écouteur d'événement au bouton de suppression pour supprimer la tâche correspondante
    newDelBtn.addEventListener('click', function() {
      deleteTask(newTask); // Cible la bonne tâche à supprimer
    });
  } else {
    console.error("Delete button not found in the new task card."); // Affiche une erreur si le bouton de suppression n'est pas trouvé
  }

  tasksContainer.appendChild(newTask); // Ajoute la nouvelle tâche au conteneur de tâches
  updateCount(); // Met à jour le compteur de tâches
}

function deleteTask(task) {
  task.remove(); // Supprime la tâche
  updateCount(); // Met à jour le compteur de tâches
}

function updateCount() {
  const count = tasksContainer.querySelectorAll('.todoCard').length; // Compte le nombre de tâches
  document.querySelector('#count').textContent = `Total tasks: ${count}`; // Affiche le nombre total de tâches
}