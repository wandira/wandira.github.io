export default function TodoFactory(data) {
  let {
    title, description, dueDate, priority,
  } = data;

  function getTitle() {
    return title;
  }
  function getDescription() {
    return description;
  }
  function getDueDate() {
    return dueDate;
  }
  function getPriority() {
    return priority;
  }
  function editTitle(newTitle) {
    title = newTitle;
  }
  function editDescription(newDescription) {
    description = newDescription;
  }
  function editDueDate(newDate) {
    dueDate = newDate;
  }
  function editPriority(newPriority) {
    priority = newPriority;
  }

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    editTitle,
    editDescription,
    editDueDate,
    editPriority,
  };
}
