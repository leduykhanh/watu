import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function getPromotionDetail(prm_id) {
  return serverCall.get(url(constants.GET_PROMOTION_DETAIL_API, `prm_id=${prm_id}`))
}
