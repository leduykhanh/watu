import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function placeorder(payload) {
  return serverCall.post(url(constants.PLACE_ORDER_API), payload)
}
