const taskContainer = document.querySelector('.task-container')
const addTaskBtn = document.querySelector('.add-task-btn')
const createTaskBtn = document.querySelector('.create-task-btn')
const taskInput = document.querySelector('.task-input')
const createTaskContainer = document.querySelector(".create-task-container")

let taskArray = []


function createTask() {

}

function deleteTask(deleteId) {
    console.log(deleteId)
const newTaskArray = taskArray.filter((task) => task.id != deleteId)
taskArray = newTaskArray
   showTask() 
}

function showTask() {
    taskContainer.innerHTML = ``
taskArray.forEach((task , id) => {
    const taskCard = document.createElement('li')
    taskCard.classList.add('task')
    taskCard.innerHTML = `<div class="-text">${task.text}
            </div>
            <button class="delete-task">Remove</button>`
            const deleteBtn = taskCard.querySelector('.delete-task')
            deleteBtn.addEventListener('click' , () => {
                deleteTask(task.id)
            })
taskContainer.appendChild(taskCard)
})
}

addTaskBtn.addEventListener('click' , () => {
    console.log('clicked')
createTaskContainer.classList.toggle('hidden')
})

createTaskBtn.addEventListener('click' , () => {
    const taskObj = {
        id : taskArray.length*5,
        text : taskInput.value.trim(),
    }
    taskArray.unshift(taskObj)
    taskInput.value = ''
    showTask()
    createTaskContainer.classList.add('hidden')
})

