import * as constants from '../constants';
import * as profileApi from '../api/ProfileApi';


export function getFullProfile() {
  return dispatch => {
    
    dispatch({
      type: constants.STATE_GET_PROFILE_PENDING
    });
  
    profileApi.getFullProfile().then((response) => {
      
      const { data } = response.data;
      
      dispatch({
        type: constants.STATE_GET_PROFILE_SUCCESS,
        payload: data
      });
      
      if (data.subscriptions.length > 0) {
        let firstSub = data.subscriptions[0];
      }
      
    }).catch((error) => {
      dispatch({
        type: constants.STATE_GET_PROFILE_ERROR,
        error
      });
      
    });

  }
}