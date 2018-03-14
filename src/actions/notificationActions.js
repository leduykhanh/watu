import * as constants from '../constants';
import * as NotificationApi from '../api/NotificationApi';

export function getNotification() {
  return dispatch => {

  dispatch({
    type: constants.GET_NOTIFICATION_PENDING
  });

  NotificationApi.getNotification().then((response) => {
    dispatch({
    type: constants.GET_NOTIFICATION_SUCCESS,
    payload: response.data.results
    });
  }).catch((error) => {

    dispatch({
    type: constants.GET_NOTIFICATION_ERROR,
    error
    });

  });

  }
}
