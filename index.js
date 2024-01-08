document.addEventListener("DOMContentLoaded", () => {
    //A new task list is initialised
    const myNewTasks = new taskList;

    // retrieving all the DOM elements
    const taskForm = document.getElementById("create-task-form");
    const taskDescription = document.getElementById("new-task-description");
    const taskPriority = document.getElementById("new-task-priority");
    const taskUnorderedList = document.getElementById("tasks");

    // function that updates the the content of the list
    const renderApp = () => (taskUnorderedList.innerHTML = myNewTasks.renderTasks());

    // adding the event listeners
    // form submission
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault(); // prevent default form submission
        myNewTasks.createNewTask(taskDescription.value); // create a new task
        event.target(); // this resets the form
        renderApp(); // render the updated list
    });

    // Event listener for clicks on the task list
    taskUnorderedList.addEventListener("click", (event) => {
        if (event.target.nodeName === "BUTTON") {
          taskList.deleteTask(event.target.dataset.description);  // Deletes a task
          renderApp();  // Renders the updated task list
        }
      });
});