import * as constant from '../../constants';
import {REHYDRATE} from 'redux-persist/constants';

export function locationReducer(state = constant.initalState.location, action) {

  switch (action.type) {

    case constant.UPDATE_LOCATION: {
      return {
        ...state,
        lat: action.payload.latitude,
        long: action.payload.longitude
      };
    }


    default:
      return state;
  }
}
