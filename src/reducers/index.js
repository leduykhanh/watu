import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { profileReducer } from './profile/profileReducer';
import { deviceReducer } from './device/deviceReducer';
import { homeReducer } from './home/homeReducer';


const reducers = combineReducers({
  user: userReducer,
  profile: profileReducer,
  device : deviceReducer,
  home: homeReducer
});

export default reducers;