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