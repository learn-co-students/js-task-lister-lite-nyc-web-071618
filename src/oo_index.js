
document.addEventListener("DOMContentLoaded", () => {
  let taskList = document.getElementById('create-task-form')
  let tasks = document.getElementById('tasks')


  taskList.addEventListener("submit", (event) => {
    event.preventDefault()
    let taskDescrip = document.getElementById('new-task-description').value;
    let newTask = document.createElement('li')
    newTask.innerText = taskDescrip;
    tasks.append(newTask);
    var btn = document.createElement("Button");
    btn.innerText = "x"
    newTask.appendChild(btn)
    btn.addEventListener("click", function (event) {
          this.parentNode.parentNode.removeChild(this.parentNode);
      });



  });

});
