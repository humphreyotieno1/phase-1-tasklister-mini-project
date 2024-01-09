document.addEventListener("DOMContentLoaded", () => {
  const myNewTasks = new TaskList();
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const taskUnorderedList = document.getElementById("tasks");

  const renderApp = () => (taskUnorderedList.innerHTML = myNewTasks.renderTasks());

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    myNewTasks.createNewTask(taskDescription.value);
    taskForm.reset(); // Use reset() method to clear the form
    renderApp();
  });

  taskUnorderedList.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      myNewTasks.deleteTask(event.target.dataset.description);
      renderApp();
    }
  });
});