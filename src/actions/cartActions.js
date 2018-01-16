import * as constants from '../constants';

export function addToCart(item) {
  return dispatch => {
  	dispatch({
  		type: constants.ADD_TO_CART,
  		payload: item
  	})
  }
}