import * as constants from '../constants';
import serverCall from '../utils/serverCall';

export function getPromotions() {
  return serverCall.get(constants.GET_PROMOTIONS_API);
}
export function getNewshops() {
  return serverCall.get(constants.GET_NEWSHOPS_API);
}

export function getCategories() {
  return serverCall.get(constants.GET_CAT_API);
}

export function getHighRatingsShop() {
  return serverCall.get(constants.GET_HIGHRATINGSHOPS_API);
}

export function getNearbyShop(q='', catid=null, page=0) {
  const catQuery = catid ? `&catid=${catid}` : '';
  const url = `${constants.GET_NEARBYSHOPS_API}&q=${q}${catQuery}&page=${page}`;
  return serverCall.get(url);
}
