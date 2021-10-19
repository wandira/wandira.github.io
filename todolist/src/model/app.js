import ProjectFactory from './project';
import TodoFactory from './todo';

export default function App(pubsub) {
  const projects = getDummyProjects();

  function getProjects() {
    pubsub.publish('projectSent', { projects });
  }

  function addProjects(title) {
    projects.push(ProjectFactory(title));
  }

  function deleteProject(index) {
    projects.splice(index, 1);
  }

  return {
    getProjects,
    addProjects,
    deleteProject,
  };
}

function getDummyProjects() {
  const one = ProjectFactory('Default title');
  const two = ProjectFactory('Default title2');

  for (let x = 0; x < 4; x++) {
    const data = {
      title: `Halo ${x}`, description: 'td desc', dueDate: 'td duedate', priority: 'td priority',
    };
    const data2 = {
      title: `Bandung ${x}`, description: 'td desc', dueDate: 'td duedate', priority: 'td priority',
    };
    const td = TodoFactory(data);
    one.addTodo(td);

    const tdd = TodoFactory(data2);
    two.addTodo(tdd);
  }

  return [one, two];
}
