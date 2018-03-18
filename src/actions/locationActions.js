import * as constants from '../constants'

export function updateLocation(loc) {
  return dispatch => {
    dispatch({type: constants.UPDATE_LOCATION, payload: loc})
  }
}
