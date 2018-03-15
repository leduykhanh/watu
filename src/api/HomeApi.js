import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function getPromotions() {
  return serverCall.get(url(constants.GET_PROMOTIONS_API))
}
export function getNewshops() {
  return serverCall.get(url(constants.GET_NEWSHOPS_API))
}

export function getCategories() {
  return serverCall.get(url(constants.GET_CAT_API))
}

export function getHighRatingsShop() {
  return serverCall.get(url(constants.GET_HIGHRATINGSHOPS_API))
}

export function getNearbyShop(params) {
  const query = query({
    q: '', //
    catid: '',
    page: '',
    latitude: '',
    longitude: ''
  }, ...params || {})
  return serverCall.get(url(constants.GET_NEARBYSHOPS_API, query))
}
