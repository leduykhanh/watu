import * as constant from '../../constants';

export function deviceReducer(state = constant.initalState.notification, action) {

  switch (action.type) {


    case constant.GET_NOTIFICATION_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case constant.GET_NOTIFICATION_SUCCESS: {
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
