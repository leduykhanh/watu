import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function getNotification() {
  return serverCall.get(url(constants.GET_NOTIFICATION_API))
}
