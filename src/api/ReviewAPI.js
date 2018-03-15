import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function getReviews(shop_id = '', item_id = '') {
  const query = query({
    shop_id, //
    item_id
  })
  return serverCall.get(url(constants.GET_REVIEW_API, query))
}
