import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function rate(data, itemid = '', shopid = '', reviewid = '') {
  const query = query({
    itemid, //
    shopid,
    reviewid
  })
  return serverCall.post(url(constants.RATING_API, query), data)
}
