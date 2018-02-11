import React from 'react'
import { Text, Spinner, Icon, View, } from 'native-base'
import { TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import StarRating from 'react-native-star-rating'
import {Actions} from "react-native-router-flux"
import {Platform, Dimensions, PixelRatio} from "react-native"
import {getDistance} from "../../utils/gpsHelper"
import openGps from "../../utils/gpsHelper"
import Image from '../common/Image'

import itemHelper, {substr} from '../../utils/itemHelper'
import NearbyShopItemStyle from '../../../wat-themes/styles/components/NearbyShopItem'

const NearbyShopItem = props => {
	const item = props.item
    const {
  	  id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
  	  toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
  	  address, isfeatured, promotion_image
    } = itemHelper(item)
    const distance = getDistance(latitude, longitude, props.location.latitude, props.location.longitude)

	if (isfeatured) {
		console.log(item)
		return <TouchableOpacity onPress={() => Actions.s_detail({item})}>
			<View horizontal style={NearbyShopItemStyle.container}>
				<Image resizeMode='stretch' style={NearbyShopItemStyle.featured_image} source={{uri: promotion_image}}/>
				<View style={NearbyShopItemStyle.featured_info}>
					<Text fs14 white bold>{substr(name, 40)}</Text>
					<Text fs12 white>{substr(address, 80)}</Text>
				</View>
			</View>
	    </TouchableOpacity>
	}

    return <TouchableOpacity onPress={() => Actions.s_detail({item})}>
		<View horizontal style={NearbyShopItemStyle.container}>
			<Image resizeMode='stretch' style={NearbyShopItemStyle.image} source={{uri: image}}/>
			<View p-l-10 style={NearbyShopItemStyle.info}>
				<View m-t-5 horizontal>
					<Text fs14 bold>{substr(name, 40)}</Text>
				</View>
				<View horizontal>
					<Text fs12>{substr(address, 80)}</Text>
				</View>
				<View horizontal m-t-5>
					<Text fs14 bold theme>80% OFF</Text>
				</View>
				<View horizontal space-between>
					<Text fs12>{distance || 0} km</Text>
					<View horizontal>
						<Icon new-shop name="ios-send" />
						<Text white fs12 theme onPress={() => openGps(latitude, longitude)}>Get direction</Text>
					</View>
				</View>
				<View horizontal space-between style={NearbyShopItemStyle.statistic}>
					<View>
						<StarRating
							disabled={false}
							maxStars={5}
							rating={totalrate}
							starSize={15}
							starColor={'rgb(249,174,24)'}
							selectedStar={(rating) => console.log(rating)}
						/>
					</View>
					<Text fs12>({totalreviews}) Reviews</Text>
				</View>
			</View>
		</View>
    </TouchableOpacity>
}

NearbyShopItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default NearbyShopItem
