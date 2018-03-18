import * as constants from '../constants';
import serverCall from '../utils/serverCall';
export function rate(data, itemid = null, shopid= null, reviewid=null) {
  return serverCall.post(`${constants.RATING_API}&itemid=${itemid}&shopid=${shopid}&reviewid=${reviewid}`, data);
}
