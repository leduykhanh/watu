import React from 'react'
import {Text, Icon, View} from 'native-base'
import {TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Swiper from 'react-native-swiper'
import * as actions from '../../actions/homeActions'
import Image from '../common/Image'

import itemHelper, {substr} from '../../utils/itemHelper'
import CategoriesStyle from '../../../survis-themes/styles/Categories'

const Categories = props => {
  let cats = [].concat(props.items),
    blocks = [],
    blockNumItem = CategoriesStyle.blockNumItem
  while (cats.length) {
    blocks.push(cats.splice(0, blockNumItem))
  }
  return (<View style={CategoriesStyle.containerStyle}>
    <Swiper showsPagination={false} loop="loop">
      {
        blocks.map((b, i) => <View horizontal="horizontal" style={CategoriesStyle.blockStyle}>
          {
            b.map((item, j) => <TouchableOpacity onPress={() => {
                let currentScene = Actions
                  .currentScene
                  .toString()
                if (currentScene !== 'search') 
                  Actions.search()
                props
                  .actions
                  .getNearbyShop({catid: item.id})
              }}>
              <View center="center" style={CategoriesStyle.itemStyle}>
                <Image key={item.id} source={{
                    uri: item.image
                  }} style={CategoriesStyle.iconStyle}/>
                <Text bold="bold" fs12="fs12">{substr(item.name, 7)}</Text>
              </View>
            </TouchableOpacity>)
          }
        </View>)
      }
    </Swiper>
  </View>)
}

export default Categories
