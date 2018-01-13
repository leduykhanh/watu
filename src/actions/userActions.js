import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as constants from '../constants';
import * as userApi from '../api/UserApi';
import serverCall from '../utils/serverCall';
import * as profileActions from './profileActions';

import {setOidc} from '../utils/persistStore';

export function login(username:string, password:string) {
  return dispatch => {

    dispatch({
      type: constants.STATE_LOGIN_PENDING
    });

    userApi.login(username, password)
      .then((response) => {

        // setOidc(response.data);
        // const  token = (response.data.result.token);
        const token = 'UDgwU0hJSW9CZlQ2VmVGaXJ5R296cXVRS1B2Z1c2bXg0SDB4dU5mbDRPOD0=';

        serverCall.defaults.headers['token'] =  token;
        dispatch({
          type: constants.STATE_LOGIN_SUCCESS,
          payload: token
        });

        dispatch(profileActions.getFullProfile());
        Actions.reset('profile');

    }).catch((error) => {

      console.log(error,error.response);

      dispatch({
        type: constants.STATE_LOGIN_ERROR,
        error: {message:`Invalid Username or Password`}
      });

    });

  }
}

export function register(username:string, password:string) {
  return dispatch => {

    dispatch({
      type: constants.STATE_REGISTER_PENDING
    });

    userApi.register(username, password)
      .then((response) => {

        // setOidc(response.data);
        // const  token = (response.data.result.token);
        const token = 'UDgwU0hJSW9CZlQ2VmVGaXJ5R296cXVRS1B2Z1c2bXg0SDB4dU5mbDRPOD0=';

        serverCall.defaults.headers['token'] =  token;
        dispatch({
          type: constants.STATE_REGISTER_SUCCESS,
          payload: token
        });

        dispatch(profileActions.getFullProfile());
        Actions.reset('lightbox');

      }).catch((error) => {

      console.log(error,error.response);

      dispatch({
        type: constants.STATE_REGISTER_ERROR,
        error: {message:`email exist`}
      });

    });

  }
}

export function logout() {
  return dispatch => {

    AsyncStorage.clear();
    setOidc(null);

    serverCall.defaults.headers['Authorization'] = '';

    dispatch({
      type: constants.STATE_LOGOUT_SUCCESS
    });

    Actions.replace('login');
  }
}

export function change_password(){
  return dispatch => {
    userApi.change_passwprd().then(
      response => {
        logout()(dispatch);
      }
    );
  }
}
