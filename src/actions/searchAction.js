import * as constants from '../constants';

export function updateSearch(searchString) {
  return dispatch => {

      dispatch({
        type: constants.UPDATE_SEARCH,
        payload: searchString,
      });
    };


}
