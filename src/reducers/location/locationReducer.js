import * as constant from '../../constants';
import {REHYDRATE} from 'redux-persist/constants';

export function locationReducer(state = constant.initalState.location, action) {

  switch (action.type) {

    case constant.UPDATE_LOCATION: {
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      };
    }


    default:
      return state;
  }
}
