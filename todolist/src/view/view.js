import style from './style.css';

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

  function renderTodos(todos) {
    const contentBody = document.getElementById('contentBody');
    contentBody.innerHTML = '';
    todos.forEach((t, idx) => {
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

    projects.forEach((p, idx) => {
      const projTitle = document.createElement('div');
      projTitle.textContent = p.getTitle();
      projTitle.dataset.index = idx;
      projTitle.className = style.project;

      projTitle.addEventListener('click', (e) => {
        const { index } = e.target.dataset;
        renderTodos(projects[index].getTodos());
      });

      sidebarBody.appendChild(projTitle);
    });

    projects[0].getTodos().forEach((t, idx) => {
      console.log('t', t.getTitle());
      const tddiv = document.createElement('div');
      tddiv.textContent = t.getTitle();
      tddiv.dataset.index = idx;
      tddiv.className = style.todo;
      contentBody.appendChild(tddiv);
    });
  }

  return { skeletonRender, renderAll };
}
