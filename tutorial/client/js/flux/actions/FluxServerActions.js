import AppDispatcher from '../dispatcher/AppDispatcher';
import { FluxConstants } from '../constants/FluxConstants';

export function receiveRandom(response) {
  AppDispatcher.handleServerAction({
    actionType: FluxConstants.GET_RANDOM_RESPONSE,
    response
  });
}