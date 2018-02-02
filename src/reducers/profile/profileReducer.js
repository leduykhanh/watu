import {REHYDRATE} from 'redux-persist/constants';
import * as constant from '../../constants';
import { setProfile } from '../../utils/persistStore';

export function profileReducer(state = constant.initalState.profile, action) {

  switch (action.type) {

    case REHYDRATE: {
      return {
        ...action.payload.profile
      };
    }

    case constant.STATE_LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload
      }
    }

    case constant.STATE_GET_PROFILE_PENDING: {
      return {
        ...state,
        isGettingProfile: true,
        isProfileLoadCalled: true
      };
    }

    case constant.STATE_GET_PROFILE_SUCCESS: {
      const nextState = {
        ...state,
        ...action.payload,
        isGettingProfile: false,
        isProfileLoadCalled: true
      };
      setProfile(nextState);
      return nextState;
    }

    case constant.STATE_GET_PROFILE_ERROR: {
      return {
        ...state,
        isGettingProfile: false,
        isProfileLoadCalled: true
      };
    }

    case constant.STATE_HISTORY_SUCCESS: {

      return {
        ...state,
        history: {
          list: action.payload,
          loaded: true
        }
      };
    }

    case constant.STATE_LOGOUT_SUCCESS: {
      return {
        ...constant.initalState.profile
      };
    }

    default:
      return state;
  }
}
