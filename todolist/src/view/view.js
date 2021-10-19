import ProjectFactory from '../model/project';
import style from './style.css';
import appendTodoForm from './todoForm';

export default function View(Pubsub) {
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';

  function skeletonRender() {
    const root = document.createElement('div');
    root.className = style.root;

    const sidebar = document.createElement('div');
    const sidebarBody = document.createElement('div');
    sidebar.className = style.sidebar;
    sidebarBody.className = style.sidebarBody;
    sidebarBody.id = 'sidebarBody';

    const content = document.createElement('div');
    const contentBody = document.createElement('div');
    content.className = style.content;
    contentBody.className = style.contentBody;
    contentBody.id = 'contentBody';

    sidebar.appendChild(sidebarBody);
    content.appendChild(contentBody);
    root.appendChild(sidebar);
    root.appendChild(content);
    document.body.appendChild(root);
    Pubsub.publish('skeletonRendered', { nama: 'hhah', umur: 32 });
  }

  function renderTodos(event, project) {
    console.log('rendertodos', project);
    const contentBody = document.getElementById('contentBody');

    contentBody.innerHTML = '';
    appendTodoForm(contentBody, project, Pubsub);
    project.getTodos().forEach((t, idx) => {
      // console.log('t', t.getTitle());
      const tddiv = document.createElement('div');
      tddiv.textContent = t.getTitle();
      tddiv.dataset.index = idx;
      tddiv.className = style.todo;
      contentBody.appendChild(tddiv);
    });
  }

  function renderAll(event, data) {
    // console.log('masuk rennder all', data.projects[0].getTodos());
    const { projects } = data;
    const sidebarBody = document.getElementById('sidebarBody');
    const contentBody = document.getElementById('contentBody');
    sidebarBody.innerHTML = '';
    contentBody.innerHTML = '';

    const addProjectDiv = document.createElement('div');
    const addProjectBtn = document.createElement('button');
    addProjectDiv.appendChild(addProjectBtn);

    addProjectBtn.textContent = '+ ADD PROJECT';
    addProjectBtn.className = style.project;
    addProjectBtn.addEventListener('click', () => {
      // addProjectDiv.innerHTML = '';
      const addProjectInput = document.createElement('input');
      addProjectInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          projects.push(ProjectFactory(e.target.value));
          Pubsub.publish('projectAdded');
        }
      });
      addProjectDiv.appendChild(addProjectInput);
    });

    sidebarBody.appendChild(addProjectDiv);

    projects.forEach((p, idx) => {
      const projTitle = document.createElement('div');
      projTitle.textContent = p.getTitle();
      projTitle.dataset.index = idx;
      projTitle.className = style.project;

      projTitle.addEventListener('click', (e) => {
        const { index } = e.target.dataset;
        renderTodos(null, projects[index]);
      });

      sidebarBody.appendChild(projTitle);
    });

    renderTodos(null, projects[0]);
  }

  return { skeletonRender, renderAll, renderTodos };
}
