import React from 'react'
import { Text, Spinner, Icon, View, } from 'native-base'
import PropTypes from 'prop-types'
import StarRating from 'react-native-star-rating'
import openGps from "../../utils/gpsHelper"
import Image from '../common/Image';
import Rating from '../common/Rating';

import itemHelper, {substr} from '../../utils/itemHelper'
import ShopSummaryStyle from '../../../wat-themes/styles/components/ShopSummary'

const ShopSummary = props => {
  const item = props.item
  const {
    id, name, image, totalrate, totalreviews, latitude, longitude, address
  } = itemHelper(item)
  return <View grey style={ShopSummaryStyle.container}>
	<View horizontal>
	  <View style={ShopSummaryStyle.image_container}>
		    <Image resizeMode='stretch' style={ShopSummaryStyle.image} source={{uri: image}}/>
	  </View>
	  <View style={ShopSummaryStyle.info_container}>
		    <Text bold m-b-10>{substr(name, 30)}</Text>
        <Text small>{substr(address, 150)}</Text>
	  </View>
	</View>
	<View horizontal space-between p-l-5 p-r-5>
	  <Rating totalrate={totalrate} shopid={id}/>
	  <Text theme fs12 onPress={props.openReview}>({totalreviews}) Reviews</Text>
	  <View horizontal>
		<Icon new-shop name="ios-send" />
		<Text theme fs12 theme onPress={() => openGps(latitude, longitude)}>Get direction</Text>
	  </View>
	</View>
  </View>
}

ShopSummary.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ShopSummary
