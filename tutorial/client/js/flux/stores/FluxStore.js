import AppDispatcher from '../dispatcher/AppDispatcher';
import { FluxConstants } from '../constants/FluxConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _store = {
  list: [],
  editing: false
};

class FluxStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getList() {
    return _store;
  }
}

const FluxStore = new FluxStoreClass();

AppDispatcher.register(payload => {
  const action = payload.action;

  switch (action.actionType) {
    case FluxConstants.NEW_ITEM:
      _store.editing = true;
      FluxStore.emit(CHANGE_EVENT);
      break;

    case FluxConstants.SAVE_ITEM:
      _store.list.push(action.text);
      _store.editing = false;
      FluxStore.emit(CHANGE_EVENT);
      break;

    case FluxConstants.REMOVE_ITEM:
      _store.list = _store.list.filter((item, i) => i !== action.index);
      FluxStore.emit(CHANGE_EVENT);
      break;

    case FluxConstants.GET_RANDOM_RESPONSE:
      const firstName = action.response.results[0].name.first;
      const city = action.response.results[0].location.city;
      const newFlux = `Call ${firstName} about real estate in ${city}`;

      _store.list.push(newFlux);
      FluxStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

export default FluxStore;