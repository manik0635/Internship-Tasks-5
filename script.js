const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const dateTime = document.getElementById('datetime');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = input.value.trim();
  const taskTime = dateTime.value;
  if (taskText !== '') {
    addTask(taskText, taskTime);
    input.value = '';
    dateTime.value = '';
  }
});

function addTask(text, time) {
  const li = document.createElement('li');
  li.className = 'task';

  const span = document.createElement('span');
  span.className = 'text';
  span.textContent = text + (time ? ` [${new Date(time).toLocaleString()}]` : '');

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    const newText = prompt('Edit task:', text);
    const newTime = prompt('Edit date/time (optional):', time);
    if (newText !== null) {
      span.textContent = newText + (newTime ? ` [${new Date(newTime).toLocaleString()}]` : '');
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.onclick = () => taskList.removeChild(li);

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(span, actions);
  taskList.appendChild(li);
}
