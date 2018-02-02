import * as constants from '../constants';
import serverCall from '../utils/serverCall';


export function getNotification() {
  return serverCall.get(constants.GET_NOTIFICATION_API);
}
