import React from 'react'
import { Text, Spinner, Icon, View, } from 'native-base'
import PropTypes from 'prop-types'
import StarRating from 'react-native-star-rating'
import { Platform, Dimensions, PixelRatio } from 'react-native'
import Image from '../common/Image'

import itemHelper, {substr} from '../../utils/itemHelper'
import ShopDetailListItemStyle from '../../../survis-themes/styles/components/ShopDetailListItem'

const ShopDetailListItem = props => {
  const item = props.item
  const {
	  id, name, description, price, image, totalrate, totalreviews, latitude, longtitude,
	  toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
	  address
  } = itemHelper(item)

  return (
    <View horizontal style={ShopDetailListItemStyle.container}>
      <Image resizeMode='stretch' style={ShopDetailListItemStyle.image} source={{uri: image}}/>
      <View p-l-10>
        <View horizontal m-t-5 m-b-10>
          <Text fs14 bold>{substr(name, 20)}</Text>
        </View>
        <View horizontal style={ShopDetailListItemStyle.description}>
          <Text fs12 style={{flexWrap: 'wrap'}}>{substr(description, 150)}</Text>
        </View>
        <Text fs14 bold theme>{price}</Text>
      </View>
    </View>
  )
}

ShopDetailListItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ShopDetailListItem
