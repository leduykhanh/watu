import React from 'react'
import { Text, Spinner, Icon, View, } from 'native-base'
import {Dimensions, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import StarRating from 'react-native-star-rating'
import {Actions} from "react-native-router-flux"
import Swiper from 'react-native-swiper'
import {getDistance} from "../../utils/gpsHelper"
import openGps from "../../utils/gpsHelper"
import Image from '../common/Image'

import itemHelper, {substr} from '../../utils/itemHelper'
import PromotionItemStyle from '../../../wat-themes/styles/components/PromotionItem'

const PromotionItem = props => {
	const item = props.item
  const {
	  image,
	  toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
  } = itemHelper(item)
	const topTexts = toptext.split(" ")
  const style = {
    color: toptext_color,
    fontSize: parseInt(toptext_fontsize),
    backgroundColor: toptext_bgcolor
  }
	return <View style={PromotionItemStyle.slide}>
		<Image style={PromotionItemStyle.image} source={{uri: image}}/>
		<View style={PromotionItemStyle.slideInfo}>
			<Text white fs20>{substr(bigtitle, 40)}</Text>
			<Text white fs12>{substr(smalltitle, 60)}</Text>
		</View>
		<View style={{...PromotionItemStyle.slideTopText, backgroundColor: toptext_bgcolor}}>
			{topTexts.map(t => <Text key={t} style={style}>{t}</Text>)}
		</View>
	</View>
}

PromotionItem.propTypes = {
}

export default PromotionItem
