document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")
  const tasks = document.getElementById("tasks")

  let makeNewTaskFormValue = newTaskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newTaskValue = newTaskDescription.value
    const newTask = document.createElement("li")

    newTask.innerHTML = newTaskValue + `<button data-description="${newTaskValue}">X</button>`
    tasks.appendChild(newTask);

    newTaskDescription.value = ""

    newTask.addEventListener("click", function(e) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    })
  })
});
