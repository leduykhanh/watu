import * as constant from '../../constants';
import {REHYDRATE} from 'redux-persist/constants';

export function cartReducer(state = constant.initalState.cart, action) {
  
  switch (action.type) {
    
    case constant.ADD_TO_CART: {
      let items = state.items;
      items.push(action.payload);
      return {
        ...state,
        items
      };
    }

  
    default:
      return state;
  }
}