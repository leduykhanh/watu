import * as constants from '../constants'
import * as PrizeApi from '../api/PrizeApi'

export function getPrize() {
  return dispatch => {
    dispatch({type: constants.STATE_LUCKYDRAW_PENDING})
    PrizeApi
      .getNotification()
      .then((response) => {
        dispatch({type: constants.STATE_LUCKYDRAW_SUCCESS, payload: response.data})
      })
      .catch((error) => {
        dispatch({type: constants.STATE_LUCKYDRAW_ERROR, error})
      })
    }
}
