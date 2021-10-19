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

  pubsub.subscribe('skeletonRendered', model.getProjects);
  pubsub.subscribe('projectSent', view.renderAll);

  function run() {
    view.skeletonRender();
  }
  return { run };
}());

controller.run();
