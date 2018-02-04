import * as constants from '../constants';
import * as profileApi from '../api/ProfileApi';


export function getFullProfile() {
  return dispatch => {

    dispatch({
      type: constants.STATE_GET_PROFILE_PENDING
    });

    profileApi.getFullProfile().then((response) => {

      const { data : { results } } = response;
      // console.log(results)

      dispatch({
        type: constants.STATE_GET_PROFILE_SUCCESS,
        payload: results
      });


    }).catch((error) => {
      console.log(error)
      dispatch({
        type: constants.STATE_GET_PROFILE_ERROR,
        error
      });

    });

  }
}


export function getHistory() {
  return dispatch => {

    dispatch({
      type: constants.STATE_HISTORY_PENDING
    });

    profileApi.getHistory().then((response) => {

      const { data : { results } } = response;
      // console.log(results)

      dispatch({
        type: constants.STATE_HISTORY_SUCCESS,
        payload: results
      });


    }).catch((error) => {
      console.log(error)
      dispatch({
        type: constants.STATE_HISTORY_ERROR,
        error
      });

    });

  }
}

export function addPaymentInfo(data) {
  return dispatch => {

    dispatch({
      type: constants.STATE_PAYMENTINFO_PENDING
    });

    profileApi.addPaymentInfo(data).then((response) => {

      const { data : { results } } = response;

      dispatch({
        type: constants.STATE_PAYMENTINFO_SUCCESS,
        payload: results
      });


    }).catch((error) => {
      console.log(error)
      dispatch({
        type: constants.STATE_PAYMENTINFO_ERROR,
        error
      });

    });

  }
}
