let form = document.querySelector('#task-form');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('.clear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');

loadEventListeners();
loadTasks();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    clearBtn.addEventListener('click', clearTasks);
    taskList.addEventListener('click', removeTask);
    filter.addEventListener('keyup', filterTasks);
}

function loadTasks() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        tasks = JSON.parse(tasks);
        tasks.forEach(task => {
            let listItem = createListItem(task);
            taskList.appendChild(listItem);
        })
    }
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    } else {
        let listItem = createListItem(taskInput.value);
        taskList.appendChild(listItem);
        setTasksInLocalStorage(taskInput.value);
        taskInput.value = '';
        e.preventDefault();
    }
}

function setTasksInLocalStorage(task) {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        tasks = JSON.parse(tasks);
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = [];
        tasks[tasks.length] = task;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function clearTaskFromLocalStorage(task) {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        tasks = JSON.parse(tasks);
        tasks.splice(tasks.indexOf(task), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function createListItem(task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    li.appendChild(link);
    return li;
}

function clearTasks(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
        localStorage.removeItem('tasks');
    }
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            clearTaskFromLocalStorage(e.target.parentElement.parentElement.textContent);
            e.target.parentElement.parentElement.remove();
        }
    }
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}