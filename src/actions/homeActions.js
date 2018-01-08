import * as constants from '../constants';
import * as HomeApi from '../api/HomeApi';

export function getPromotions() {
  return dispatch => {

    dispatch({
      type: constants.GET_PROMOTION_PENDING
    });

    HomeApi.getPromotions().then((response) => {
      dispatch({
        type: constants.GET_PROMOTION_SUCCESS,
        payload: response.data.results
      });
    }).catch((error) => {

      dispatch({
        type: constants.GET_PROMOTION_FAILED,
        error
      });

    });

  }
}

export function getNewshops() {
  return dispatch => {

    dispatch({
      type: constants.GET_NEWSHOP_PENDING
    });

    HomeApi.getNewshops().then((response) => {
      dispatch({
        type: constants.GET_NEWSHOP_SUCCESS,
        payload: response.data.results
      });
    }).catch((error) => {

      dispatch({
        type: constants.GET_NEWSHOP_FAILED,
        error
      });

    });

  }
}

export function getCategories() {
  return dispatch => {

    dispatch({
      type: constants.GET_CAT_PENDING
    });

    HomeApi.getCategories().then((response) => {
      dispatch({
        type: constants.GET_CAT_SUCCESS,
        payload: response.data.results
      });
    }).catch((error) => {

      dispatch({
        type: constants.GET_CAT_FAILED,
        error
      });

    });

  }
}

