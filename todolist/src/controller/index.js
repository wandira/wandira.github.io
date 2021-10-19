import Model from '../model/app';
import View from '../view/view';
import Pubsub from '../pubsub';

const controller = (function ControllerModule() {
  const pubsub = Pubsub;
  const model = Model(pubsub);
  const view = View(pubsub);

  // function log(event, data) {
  //   console.log(`haii ini logg ${event}`);
  //   console.log(data);
  // }

  pubsub.subscribe('skeletonRendered', model.updateData);
  pubsub.subscribe('todoAdded', view.renderTodos);
  pubsub.subscribe('projectAdded', model.updateData);
  // pubsub.subscribe('todoDeleted', model.updateData);
  // pubsub.subscribe('projectDeleted', model.updateData);

  pubsub.subscribe('dataUpdated', view.renderAll);
  pubsub.subscribe('projectsUpdated', view.renderProjects);
  // pubsub.subscribe('addNewTodo', model.ad)

  function run() {
    view.skeletonRender();
  }
  return { run };
}());

controller.run();
