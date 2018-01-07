import * as constants from '../constants';
import serverCall from '../utils/serverCall';

export function getPromotions() {
  return serverCall.get(constants.GET_PROMOTIONS_API);
}