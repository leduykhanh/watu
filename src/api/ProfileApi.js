import * as constants from '../constants';
import serverCall from '../utils/serverCall';

export function getFullProfile() {
  return serverCall.get(constants.GET_PROFILE_API);
}

export function getHistory() {
  return serverCall.get(constants.GET_HISTORY_API);
}

export function updateProfile(data) {
  return serverCall.post(constants.GET_PROFILE_API, data);
}
