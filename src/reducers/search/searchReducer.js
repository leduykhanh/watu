import * as constant from '../../constants';

export function searchReducer(state = constant.initalState.search, action) {

  switch (action.type) {


    case constant.UPDATE_SEARCH: {
      return {
        ...state,
        searchString: action.payload,
      };
    }

    default:
      return state;
  }
}
