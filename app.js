let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = "flex items-center justify-between bg-gray-100 rounded-lg p-2";

    li.innerHTML = `
      <span class="${todo.completed ? 'line-through text-gray-400' : ''} cursor-pointer flex-1" onclick="toggleTodo(${index})">
        ${todo.text}
      </span>
      <button onclick="deleteTodo(${index})" class="text-red-500 hover:text-red-700 ml-4">🗑</button>
    `;
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text === '') return alert('Bạn chưa nhập công việc!');
  todos.push({ text, completed: false });
  input.value = '';
  saveTodos();
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

document.getElementById('add-btn').addEventListener('click', addTodo);

renderTodos();
