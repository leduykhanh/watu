import * as constants from '../constants';
import serverCall from '../utils/serverCall';


export function getShopDetail(shopid) {
  return serverCall.get(`${constants.GET_SHOP_DETAIL_API}&shopid=${shopid}`);
}

export function getShopItems(shopid) {
  return serverCall.get(`${constants.GET_SHOP_ITEMS_API}&shopid=${shopid}`);
}

export function getItemDetail(id) {
  return serverCall.get(`${constants.GET_ITEM_DETAIL_API}&itemid=${id}`);
}

export function getReviews(shop_id, item_id) {
  const sQuery = shop_id ? `&shopid=${shop_id}` : '';
  const iQuery = item_id ? `&itemid=${item_id}` : '';
  const url = `${constants.GET_REVIEW_API}${sQuery}${iQuery}&cmd=get`;
  return serverCall.get(url);
}
