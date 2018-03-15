export function query(params) {
  return Object
    .keys(params || {})
    .filter(k => k)
    .reduce((rs, k) => {
      rs.push(`${k}=${params[k]}`)
      return rs
    }, [])
    .join('&')
}
export function url(url, query) {
  url = (url || '')
    .replace(/^\W+/g, '')
    .replace(/\W+$/g, '')
  query = (query || '')
    .replace(/^\W+/g, '')
    .replace(/\W+$/g, '')
  return url.includes('?')
    ? `${url}&${query}`
    : `${url}?${query}`
}
