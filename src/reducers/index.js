import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { profileReducer } from './profile/profileReducer';
import { deviceReducer } from './device/deviceReducer';
import { homeReducer } from './home/homeReducer';
import { cartReducer } from './cart/cartReducer';


const reducers = combineReducers({
  user: userReducer,
  profile: profileReducer,
  device : deviceReducer,
  home: homeReducer,
  cart: cartReducer,
});

export default reducers;