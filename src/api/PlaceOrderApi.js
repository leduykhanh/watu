import * as constants from '../constants';
import serverCall from '../utils/serverCall';


export function placeorder(payload) {
  // console.log(payload)
  return serverCall.post(constants.PLACE_ORDER_API, payload);
}
