import * as constant from '../../constants';

export function homeReducer(state = constant.initalState.home, action) {

  switch (action.type) {

    case constant.GET_PROMOTION_PENDING: {
      return {
        ...state
      };
    }

    case constant.GET_PROMOTION_SUCCESS: {
      return {
        ...state,
        promotions: {list: action.payload, loaded: true},
      };
    }

    case constant.GET_PROMOTION_FAILED: {
      return {
        ...state
      };
    }

    case constant.STATE_LOGOUT_SUCCESS: {
      return {
        ...constant.initalState.home
      };
    }

    default:
      return state;
  }
}