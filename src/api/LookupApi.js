import * as constants from '../constants'
import serverCall from '../utils/serverCall'
import {query, url} from '../utils/urlHelper'

export function getLookupData() {
  return serverCall.get(url(constants.GET_LOOKUP_API))
}
