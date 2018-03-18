import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function getReviews(params) {
  const query = query({
    ...params,
    cmd: 'get'
  })
  return serverCall.get(url(constants.GET_REVIEW_API, query))
}
