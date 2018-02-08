export default capitalize = (item) => {
	let description = item.description || ''
    if (description.length > 120) description = `${description.substr(0, 117)}...`
    let name = item.name || ''
    if (name.length > 30) name = `${name.substr(0, 47)}...`
	let price = item.price ? `$${item.price}` : ''
	let image = item.image || ''
	let totalrate = item.totalrate || 0
	let id = item.id
	let totalreviews = item.totalreviews || 0
	let latitude = item.latitude
	let longitude = item.longitude
	let toptext_color = item.toptext_color
	let toptext_fontsize = item.toptext_fontsize
	let toptext = item.toptext
	let toptext_bgcolor = item.toptext_bgcolor || 'red'
	let bigtitle = item.bigtitle
	let smalltitle = item.smalltitle
	return {
		id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
		toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle
	}
}
