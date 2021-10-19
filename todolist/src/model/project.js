export default function ProjectFactory(t) {
  let title = t;
  const todos = [];

  function getTitle() {
    return title;
  }

  function getTodos() {
    return todos;
  }

  function editTitle(newTitle) {
    title = newTitle;
  }

  function addTodo(todo) {
    todos.push(todo);
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
  }

  return {
    getTitle,
    editTitle,
    getTodos,
    addTodo,
    deleteTodo,
  };
}
