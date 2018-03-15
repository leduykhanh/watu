import React from 'react'
import { Text, Spinner, Icon, View, } from 'native-base'
import PropTypes from 'prop-types'
import StarRating from 'react-native-star-rating'
import Swiper from 'react-native-swiper';

import itemHelper, {substr} from '../../utils/itemHelper'
import ItemSummaryStyle from '../../../survis-themes/styles/components/ItemSummary'

const ItemSummary = props => {
  const item = props.item
  const {
	  id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
	  toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
	  address, images
  } = itemHelper(item)
  return <View grey m-b-10 style={ItemSummaryStyle.container}>
		{/*show item images*/}
		<View style={ItemSummaryStyle.slideImageContainer}>
			<Swiper showsPagination={true} loop>
				{images.map(image => <Image source={{uri: image}} style={ItemSummaryStyle.slideImage}/>)}
			</Swiper>
		</View>
		{/*show item name and price*/}
		<View m-l-10 m-t-10>
			<Text bold m-b-10>{substr(name, 30)}</Text>
			<Text bold fs16 theme>{price}</Text>
		</View>
		{/*show item rating nad review*/}
		<View horizontal space-between p-l-5 p-r-5>
			<StarRating
			disabled={false}
			maxStars={5}
			rating={item.totalrate}
			starSize={15}
			starColor={'rgb(249,174,24)'}
			selectedStar={(rating) => console.log(rating)}
			/>
			<Text theme fs12>({totalreviews}) Reviews</Text>
		</View>
  </View>
}

ItemSummary.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ItemSummary
