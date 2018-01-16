import * as constants from '../constants';

export function addToCart(item) {
  return dispatch => {
  	dispatch({
  		type: constants.ADD_TO_CART,
  		payload: item
  	})
  }
}

export function addItem(id) {
  return dispatch => {
    dispatch({
      type: constants.ADD_ITEM,
      payload: id
    })
  }
}

export function removeItem(id) {
  return dispatch => {
    dispatch({
      type: constants.REMOVE_ITEM,
      payload: id
    })
  }
}
