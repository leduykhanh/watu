import * as constants from '../constants'

export function updateLocation(location) {
  return dispatch => {
    dispatch({type: constants.UPDATE_LOCATION, payload: location})
  }
}
