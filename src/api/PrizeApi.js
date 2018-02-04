import * as constants from '../constants';
import serverCall from '../utils/serverCall';


export function getPrize() {
  return serverCall.get(constants.GET_PRIZE_API);
}
