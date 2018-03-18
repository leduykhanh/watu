import axios from 'axios'
import querystring from 'querystring'
import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

const config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

export function login(email = '', password = '') {
  const payload = {
    email,
    password
  }
  return axios.post(url(constants.LOGIN_API), querystring.stringify(payload), config)
}

export function register(email = '', password = '', username = '') {
  const payload = {
    email,
    password,
    username
  }
  return axios.post(url(constants.REGISTER_API), querystring.stringify(payload), config)
}

export function refreshToken(refresh_token = '', grant_type = 'refresh_token') {
  const payload = {
    grant_type,
    refresh_token
  }
  return axios.post(url(constants.LOGIN_API), querystring.stringify(payload), config)
}

export function change_password(payload) {
  const {oldPassword, newPassword, confirmPassword} = payload
  return serverCall.post(url(constants.CHANGE_PASSWORD_API), {
    oldPassword, //
    newPassword,
    confirmPassword
  })
}

export function contact_us(name = '', email = '', contactNo = '') {
  const payload = {
    name,
    email,
    contactNo
  }
  return axios.post(url(constants.SIGNUP_LINK), payload, config)
}
