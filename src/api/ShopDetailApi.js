import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function getShopDetail(shopid) {
  return serverCall.get(url(constants.GET_SHOP_DETAIL_API, `shopid=${shopid}`))
}

export function getShopItems(shopid) {
  return serverCall.get(url(constants.GET_SHOP_ITEMS_API, `shopid=${shopid}`))
}

export function getItemDetail(id) {
  return serverCall.get(url(constants.GET_ITEM_DETAIL_API, `itemid=${id}`))
}

export function getReviews(params) {
  const query = query({
    ...params,
    cmd: 'get'
  })
  return serverCall.get(url(constants.GET_REVIEW_API, query))
}
