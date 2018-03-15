import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import PropTypes from 'prop-types';
import Image from '../common/Image';

import itemHelper, {substr} from '../../utils/itemHelper';
import HistoryItemStyle from '../../../survis-themes/styles/components/HistoryItem'

const HistoryItem = props => {
  const item = props.item;
  const {
	id, name, description, price, image, totalrate, totalreviews, latitude, longtitude,
	toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
	address, orderdate
  } = itemHelper(item);
  return (
    <View horizontal style={HistoryItemStyle.container}>
		<Image resizeMode='stretch' style={HistoryItemStyle.image} source={{uri: image}}/>
		<View p-l-10 style={HistoryItemStyle.info}>
			<View m-t-5 horizontal>
				<Text fs14 bold>{substr(name, 40)}</Text>
			</View>
			<View horizontal>
				<Text fs12>{substr(description, 150)}</Text>
			</View>
			<View horizontal>
				<Text fs14 bold theme>{price}</Text>
			</View>
			<View horizontal>
				<Text fs12>{orderdate}</Text>
			</View>
		</View>
    </View>
  );
};

HistoryItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HistoryItem;
