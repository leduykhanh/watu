import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function getFullProfile() {
  return serverCall.get(url(constants.GET_PROFILE_API))
}

export function getHistory() {
  return serverCall.get(url(constants.GET_HISTORY_API))
}
export function getLoyalty() {
  return serverCall.get(url(constants.GET_LOYALTY_API))
}

export function updateProfile(data) {
  return serverCall.post(url(constants.GET_PROFILE_API), data)
}
export function getPaymentInfo() {
  return serverCall.get(url(constants.GET_PAYMENT_API))
}
export function addPaymentInfo(data) {
  return serverCall.post(url(constants.GET_PAYMENT_API), data)
}
export function forgetPassword() {}