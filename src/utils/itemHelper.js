export default capitalize = (item) => {
	let description = item.description || ''
    let name = item.name || ''
	let price = item.price ? `$${item.price}` : ''
	let image = item.image || ''
	let totalrate = item.totalrate || 0
	let id = item.id
	let totalreviews = item.totalreviews || 0
	let latitude = item.latitude
	let longitude = item.longitude
	let toptext_color = item.toptext_color || 'white'
	let toptext_fontsize = item.toptext_fontsize || 12
	let toptext = item.toptext || ''
	let toptext_bgcolor = item.toptext_bgcolor || 'red'
	let bigtitle = item.bigtitle || ''
	let smalltitle = item.smalltitle || ''
	let address = item.address || ''
	let items = [].concat(item.items).filter(o => o)
	let images = [].concat(item.images).filter(o => o)
	return {
		id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
		toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
		address, items, images
	}
}

export const substr = (s, max) => {
	s = `${s || ''}`
	return s.length > max ? `${s.substr(0, max - 2)}..` : s
}
