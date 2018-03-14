import {Alert, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as constants from '../constants';
import * as userApi from '../api/UserApi';
import serverCall from '../utils/serverCall';
import * as profileActions from './profileActions';

import { setProfile } from '../utils/persistStore';

export function login(username:string, password:string) {
  return dispatch => {

  dispatch({
    type: constants.STATE_LOGIN_PENDING
  });

  userApi.login(username, password)
    .then((response) => {

    const  token = (response.data.results.token);
    serverCall.defaults.headers['token'] =  token;
    dispatch({
      type: constants.STATE_LOGIN_SUCCESS,
      payload: token
    });

    dispatch(profileActions.getFullProfile());
    Actions.pop();

  }).catch((error) => {

    console.log(error,error.response);

    dispatch({
    type: constants.STATE_LOGIN_ERROR,
    error: {message:`Invalid Username or Password`}
    });

  });

  }
}

export function register(username:string, password:string, name:string) {
  return dispatch => {

  dispatch({
    type: constants.STATE_REGISTER_PENDING
  });

  userApi.register(username, password, name)
    .then((response) => {
    dispatch({
      type: constants.STATE_REGISTER_SUCCESS
    });
    Alert.alert(
      'Account registered',
      'Please check your email to activate your account',
      [
      {text: 'OK', onPress: () => {Actions.pop();}},
      ],
      { cancelable: false }
    );

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
  setProfile(null);

  serverCall.defaults.headers['token'] = '';

  dispatch({
    type: constants.STATE_LOGOUT_SUCCESS
  });

  Actions.reset('lightbox');
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
