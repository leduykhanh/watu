import * as constants from '../constants';
import serverCall from '../utils/serverCall';


export function getReviews(shop_id, item_id) {
  return serverCall.get(`${constants.GET_REVIEW_API}&shopid=${shop_id}&item_id=${item_id}`);
}
