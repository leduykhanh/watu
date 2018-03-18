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
import PromotionsStyle from '../../../survis-themes/styles/components/Promotions'

import PromotionItem from './PromotionItem'

const Promotions = props => {
  const items = props.items
  return (
    <View style={PromotionsStyle.container}>
      <Swiper autoplayTimeout={10} autoplay height={PromotionsStyle.container.height} showsPagination={false} loop>
        {items.map(item => <PromotionItem item={item}/>)}
      </Swiper>
    </View>
  )
}

Promotions.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Promotions
