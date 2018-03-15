import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { getDistance } from '../../utils/gpsHelper';
import Image from '../common/Image';

import itemHelper, {substr} from '../../utils/itemHelper';
import NewShopItemStyle from '../../../survis-themes/styles/components/NewShopItem';

const NewShopItem = props => {
	const item = props.item;
    const {
		id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
		toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
		address
    } = itemHelper(item);
    const distance = getDistance(latitude, longitude, props.location.latitude, props.location.longitude);
    return <TouchableOpacity onPress={() => Actions.s_detail({item})}>
   	 <View style={NewShopItemStyle.container}>
   		 <Image style={NewShopItemStyle.image} source={{uri: image}}/>
   		 <View style={NewShopItemStyle.addressContainer}>
   			 <Text fs12 white>{substr(address, 20)}</Text>
   		 </View>
   		 <View style={NewShopItemStyle.infoContainer}>
   			 <View horizontal m-t-5>
   				 <Text fs12 bold>{substr(name, 20)}</Text>
   			 </View>
   			 <View horizontal>
   				 <Icon new-shop name="ios-pin" />
   				 <Text fs12>{distance || 0} km</Text>
   			 </View>
   		 </View>
   	 </View>
    </TouchableOpacity>
};

NewShopItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default NewShopItem;
