document.getElementById('to-do-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task !== '') {
        addTask(task);
        taskInput.value = '';
        taskInput.focus();
    }
});

function addTask(task) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}
