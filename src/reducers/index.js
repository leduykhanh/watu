import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { profileReducer } from './profile/profileReducer';
import { deviceReducer } from './device/deviceReducer';
import { homeReducer } from './home/homeReducer';
import { cartReducer } from './cart/cartReducer';
import { locationReducer } from './location/locationReducer';
import { notificationReducer } from './notification/notificationReducer';
import { luckydrawReducer } from './luckydraw/luckydrawReducer';
import { searchReducer } from './search/searchReducer';


const reducers = combineReducers({
  user: userReducer,
  profile: profileReducer,
  device : deviceReducer,
  home: homeReducer,
  cart: cartReducer,
  location: locationReducer,
  notification: notificationReducer,
  prize: luckydrawReducer,
  search: searchReducer,
});

export default reducers;
