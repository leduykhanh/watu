import * as constants from '../constants';
import * as PromotionApi from '../api/PromotionApi';

export function getPromotions() {
  return dispatch => {

    dispatch({
      type: constants.GET_PROMOTION_PENDING
    });

    PromotionApi.getPromotions().then((response) => {
      console.log(response)
      dispatch({
        type: constants.GET_PROMOTION_SUCCESS,
        payload: response.data.results
      });
    }).catch((error) => {

      dispatch({
        type: constants.STATE_GET_LOOKUP_ERROR,
        error
      });

    });

  }
}