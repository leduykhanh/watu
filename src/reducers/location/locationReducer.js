import * as constant from '../../constants'
import {REHYDRATE} from 'redux-persist/constants'

export function locationReducer(state = constant.initalState.location, action) {
  switch (action.type) {
    case constant.UPDATE_LOCATION:
      {
        return {
          ...state,
          latitude: action.payload.latitude,
          longtitude: action.payload.longtitude
        }
      }
    default:
      return state
  }
}
