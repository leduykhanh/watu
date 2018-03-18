import React from 'react';
import { Text, Icon, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import * as actions from '../../actions/homeActions';
import Image from '../common/Image';

import itemHelper, {substr} from '../../utils/itemHelper';
import CategoriesStyle from '../../../wat-themes/styles/Categories'

const Categories = props => {
	let cats = [].concat(props.items),
		blocks = [],
		blockNumItem = CategoriesStyle.blockNumItem
	while(cats.length) {
		blocks.push(cats.splice(0, blockNumItem))
	}
  const renderCategory = (item, j) => {
    return <TouchableOpacity key={j} onPress={() => {
      let currentScene =  Actions.currentScene.toString();
      if (currentScene !== 'search') Actions.search();
      props.actions.getNearbyShop('', item.id);
    }}>
    <View center style={CategoriesStyle.item}>
      <View style={CategoriesStyle.icon_container}>
        <Image source={{uri: item.image}} style={CategoriesStyle.icon}/>
      </View>
      <Text bold fs12>{substr(item.name, 7)}</Text>
    </View>
  </TouchableOpacity>
  }
	return (
		<View style={CategoriesStyle.container}>
			<Swiper showsPagination={false} loop>
				{blocks.map((b,i) => <View key={i} horizontal style={CategoriesStyle.block}>
					{b.map((item,j) => renderCategory(item, j))}
				</View>)}
			</Swiper>
		</View>
	);
};

export default Categories;
