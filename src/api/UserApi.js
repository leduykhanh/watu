import axios from 'axios';
import querystring from 'querystring';
import * as constants from '../constants';
import serverCall from '../utils/serverCall';

const config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

export function login(username:string, password:string) {

  const data = {
    email: username,
    password: password,
  };

  return axios.post(constants.LOGIN_API, querystring.stringify(data), config);

}

export function register(username:string, password:string, name:string) {

  const data = {
    email: username,
    password: password,
    username: name
  };

  return axios.post(constants.REGISTER_API, querystring.stringify(data), config);

}

export function refreshToken(refreshToken:string) {

  const data = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  };

  return axios.post(constants.LOGIN_API, querystring.stringify(data), config);
}

export function change_password(data){
  let payload = {
    "oldPassword": data.currentPassword,
    "newPassword": data.newPassword,
    "confirmPassword": data.confirmPassword
  }
  return serverCall.post(constants.CHANGE_PASSWORD_API, payload);

}

export function contact_us(name, email, contactNo){
  const data ={name, email, contactNo}
  return axios.post(constants.SIGNUP_LINK, data, {headers:{'Content-Type':'application/json'}});

  }
