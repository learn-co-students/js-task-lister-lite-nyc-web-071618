document.addEventListener("DOMContentLoaded", function(event){
  const searchBar = document.getElementById('new-task-description')

  const createButton = document.getElementById('btn')
  createButton.addEventListener('click', function(event){
    event.preventDefault()
    let taskContainer = document.getElementById('tasks')
    let liItem = document.createElement('li')
    liItem.innerText = searchBar.value
    liItem.innerHTML += ` <button id='delete-btn' type="button">X</button>`
    taskContainer.appendChild(liItem)

    const deleteButton = document.getElementById('delete-btn')
    liItem.addEventListener('click', function(event){
      if(event.target.tagName === 'BUTTON') {
        event.target.parentNode.remove()
      }
    })
    searchBar.value = ""
  })
})
