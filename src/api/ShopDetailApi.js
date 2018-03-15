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

export function getReviews(shop_id, item_id, cmd = 'get') {
  const params = {
    cmd
  }
  if (shop_id) 
    params.shop_id = shop_id
  if (item_id) 
    params.item_id = item_id
  const query = query(params)
  return serverCall.get(url(constants.GET_REVIEW_API, query))
}
