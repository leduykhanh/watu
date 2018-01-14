import * as constants from '../constants';
import serverCall from '../utils/serverCall';


export function getPromotionDetail(prm_id) {
  return serverCall.get(`${constants.GET_PROMOTION_DETAIL_API}&prm_id=${prm_id}`);
}
