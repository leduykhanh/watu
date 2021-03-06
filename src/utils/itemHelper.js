export default capitalize = (item) => {
	let description = item.description || ''
  let name = item.name || ''
	let price = item.price ? `$${item.price}` : ''
	let image = item.image || ''
	let totalrate = parseFloat(item.totalrate) || 0
	let id = parseFloat(item.id) || 0
	let totalreviews = parseFloat(item.totalreviews) || 0
	let latitude = parseFloat(item.latitude) || 0
	let longitude = parseFloat(item.longtitude) || 0
	let toptext_color = item.toptext_color || 'white'
	let toptext_fontsize = parseFloat(item.toptext_fontsize) || 12
	let toptext = item.toptext || ''
	let toptext_bgcolor = item.toptext_bgcolor || 'red'
	let bigtitle = item.bigtitle || ''
	let smalltitle = item.smalltitle || ''
	let address = item.address || ''
	let items = [].concat(item.items).filter(o => o)
	let images = [].concat(item.images).filter(o => o)
	let orderdate = item.orderdate || ''
	let isfeatured = item.isfeatured == "1"
	let promotion_image = item.promotion_image || ''
  let highlight = item.highlight || ''
  let distance = parseFloat(item.distance) || 0
	return {
		id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
		toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
		address, items, images, orderdate, isfeatured, promotion_image, highlight, distance
	}
}

export const substr = (s, max) => {
	s = `${s || ''}`
	return s.length > max ? `${s.substr(0, max - 2)}..` : s
}
