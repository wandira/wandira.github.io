import TodoFactory from '../model/todo';
import style from './style.css';

export default function todoForm(contentBody, project, pubsub) {
  const addTodoDiv = document.createElement('div');
  const addTodoBtn = document.createElement('button');
  addTodoDiv.appendChild(addTodoBtn);

  addTodoBtn.textContent = '+ ADD TODO';
  addTodoBtn.className = style.todo;
  addTodoBtn.addEventListener('click', () => {
    const title = document.createElement('input');
    const desc = document.createElement('input');
    const dueDate = document.createElement('input');
    const priority = document.createElement('input');
    title.placeholder = 'title';
    desc.placeholder = 'description';
    dueDate.placeholder = 'dueDate';
    priority.placeholder = 'priority';

    addTodoDiv.appendChild(title);
    addTodoDiv.appendChild(desc);
    addTodoDiv.appendChild(dueDate);
    addTodoDiv.appendChild(priority);

    addTodoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = {
        title: title.value,
        description: desc.value,
        dueDate: dueDate.value,
        priority: priority.value,
      };
      project.addTodo(TodoFactory(data));
      pubsub.publish('todoAdded', project);
    });

    addTodoDiv.appendChild(title);
    addTodoDiv.appendChild(desc);
    addTodoDiv.appendChild(dueDate);
    addTodoDiv.appendChild(priority);
  });

  contentBody.appendChild(addTodoDiv);
}
