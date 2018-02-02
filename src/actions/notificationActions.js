import * as constants from '../constants';
import * as NotificationApi from '../api/NotificationApi';

export function getNotification() {
  return dispatch => {

    dispatch({
      type: constants.STATE_GET_NOTIFICATION_PENDING
    });

    NotificationApi.getNotification().then((response) => {
      dispatch({
        type: constants.STATE_GET_NOTIFICATION_SUCCESS,
        payload: response.data
      });
    }).catch((error) => {

      dispatch({
        type: constants.STATE_GET_NOTIFICATION_ERROR,
        error
      });

    });

  }
}
