import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function sendToken(data) {
  return serverCall.post(url(constants.DEVICE_API), data)
}
export function updateToken(data) {
  return serverCall.put(url(constants.DEVICE_API), data)
}
