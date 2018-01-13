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
    case constant.GET_NEWSHOP_PENDING: {
      return {
        ...state
      };
    }

    case constant.GET_NEWSHOP_SUCCESS: {
      return {
        ...state,
        newShops: {list: action.payload, loaded: true},
      };
    }

    case constant.GET_NEWSHOP_FAILED: {
      return {
        ...state
      };
    }
    case constant.GET_CAT_PENDING: {
      return {
        ...state
      };
    }

    case constant.GET_CAT_SUCCESS: {
      return {
        ...state,
        categories: {list: action.payload, loaded: true},
      };
    }

    case constant.GET_CAT_FAILED: {
      return {
        ...state
      };
    }
    case constant.GET_NEWSHOP_FAILED: {
      return {
        ...state
      };
    }
    case constant.GET_HIGHRATINGSHOPS_PENDING: {
      return {
        ...state
      };
    }

    case constant.GET_HIGHRATINGSHOPS_SUCCESS: {
      return {
        ...state,
        highratingshops: {list: action.payload, loaded: true},
      };
    }

    case constant.GET_HIGHRATINGSHOPS_FAILED: {
      return {
        ...state
      };
    }
    case constant.GET_NEARBYSHOPS_PENDING: {
      return {
        ...state
      };
    }

    case constant.GET_NEARBYSHOPS_SUCCESS: {
      return {
        ...state,
        nearbyshops: {list: action.payload, loaded: true},
      };
    }

    case constant.GET_NEARBYSHOPS_FAILED: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
}
