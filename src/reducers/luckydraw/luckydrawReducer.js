import * as constant from '../../constants';

export function luckydrawReducer(state = constant.initalState.notification, action) {

  switch (action.type) {


    case constant.STATE_LUCKYDRAW_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case constant.GET_LUCKYDRAW_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        count: action.payload.length,
        loading: false,
      };
    }

    default:
      return state;
  }
}
