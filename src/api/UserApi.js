import axios from 'axios';
import querystring from 'querystring';
import * as constants from '../constants';
import serverCall from '../utils/serverCall';

const config = {
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Basic a29rdS5tb2JpbGUuY2xpZW50OllYQndhV1E2TVRNM05qazNOekV0WmpVMU1pMDBZemxoTFdJNE1qZ3RNekkyTldNM056Wm1NV1JqRFFvPQ==',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

export function login(username:string, password:string) {
  
  const data = {
    grant_type: 'password',
    username: username,
    password: password,
    scope: 'api offline_access'
  };
  
  return axios.post(constants.LOGIN_API, querystring.stringify(data), config);
  
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