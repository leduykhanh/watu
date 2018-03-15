export default normalize = (item) => {
  return {
    id: item.id || '',
    name: item.name || '',
    description: item.description || '',
    price: item.price
      ? `$${item.price}`
      : '',
    image: item.image || '',
    totalrate: parseFloat(item.totalrate) || 0,
    totalreviews: parseInt(item.totalreviews) || 0,
    latitude: parseFloat(item.latitude) || 0,
    longtitude: parseFloat(item.longtitude) || 0,
    toptext_color: item.toptext_color || 'white',
    toptext_fontsize: item.toptext_fontsize || 12,
    toptext: item.toptext || '',
    toptext_bgcolor: item.toptext_bgcolor || 'red',
    bigtitle: item.bigtitle || '',
    smalltitle: item.smalltitle || '',
    address: item.address || '',
    items: []
      .concat(item.items)
      .filter(o => o),
    images: []
      .concat(item.images)
      .filter(o => o),
    orderdate: item.orderdate || '',
    isfeatured: parseInt(item.isfeatured) && parseInt(item.isfeatured) > 0,
    promotion_image: item.promotion_image || ''
  }
}

export const substr = (s, max) => {
  s = `${s || ''}`
  return s.length > max
    ? `${s.substr(0, max - 2)}..`
    : s
}
