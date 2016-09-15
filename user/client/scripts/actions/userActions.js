import Dispather from '../dispatchers/dispatcher';

const userActions = {
  load(target) {
    Dispather.handleServiceAction({
      type: 'load',
      target: target
    });
  },
  register(target) {
    Dispather.handleServiceAction({
      type: 'register',
      target: target
    });
  }
};

export default userActions;