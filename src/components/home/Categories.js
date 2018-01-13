import React from 'react';
import { Text, Icon, View } from 'native-base';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';

import CategoriesStyle from '../../../wat-themes/styles/Categories'

const Categories = props => {
	let cats = [].concat(props.items),
		blocks = [],
		blockNumItem = CategoriesStyle.blockNumItem
	while(cats.length) {
		blocks.push(cats.splice(0, blockNumItem))
	}
	return (
		<View style={CategoriesStyle.containerStyle}>
		  <Swiper showsPagination={false} loop>
			{blocks.map((b,i) => <View horizontal style={CategoriesStyle.blockStyle}>
			  {b.map((item,j) => <View center style={CategoriesStyle.itemStyle}>
				<Image key={item.id} source={{uri: item.image}} style={CategoriesStyle.iconStyle}/>
				<Text bold fs12>{item.name}</Text>
			  </View>)}
			</View>)}
		  </Swiper>
		</View>
	);
};

export default Categories;
