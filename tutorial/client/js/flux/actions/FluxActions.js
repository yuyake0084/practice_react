import AppDispatcher from '../dispatcher/AppDispatcher';
import { FluxConstants } from '../constants/FluxConstants';
import { getRandomApi } from '../utils/RandomUserAPI';

export function addItem() {
  AppDispatcher.handleViewAction({
    actionType: FluxConstants.NEW_ITEM
  });
}

export function saveItem(text) {
  AppDispatcher.handleViewAction({
    actionType: FluxConstants.SAVE_ITEM
  });
}

export function getRandom() {
  AppDispatcher.handleViewAction({
    actionType: FluxConstants.GET_RANDOM
  });

  getRandomApi();
};