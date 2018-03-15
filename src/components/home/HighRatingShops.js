import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import {Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper';
import {getDistance} from "../../utils/gpsHelper";
import openGps from "../../utils/gpsHelper";
import Image from '../common/Image';

import itemHelper, {substr} from '../../utils/itemHelper';
import HighRatingShopsStyle from '../../../survis-themes/styles/components/HighRatingShops';
import Rating from '../common/Rating';

const HighRatingShops = props => {
	const items = props.items;
    return <View style={HighRatingShopsStyle.container}>
		<Swiper autoplay height={HighRatingShopsStyle.container.height} showsPagination={false} loop>
		{items.map(item => {
			const {
				id, name, description, price, image, totalrate, totalreviews, latitude, longtitude,
				toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
				address
		    } = itemHelper(item);
			return <TouchableOpacity onPress={() => Actions.s_detail({item})}>
				<View key={id} style={HighRatingShopsStyle.slice}>
					<Image  style={HighRatingShopsStyle.image} source={{uri: image}}/>
					<View style={HighRatingShopsStyle.info}>
						<View style={{flex:1}}>
							<Text white fs20>{name}</Text>
						</View>
						<View horizontal space-between>
							<View horizontal>
								<View m-r-10>
									<Rating totalrate={totalrate} shopid={id}/>
								</View>
								<Text white fs12>({totalreviews}) Reviews</Text>
							</View>
							<View horizontal>
								<Icon new-shop name="ios-send" />
								<Text white fs12 theme onPress={() => openGps(latitude, longtitude)}>Get direction</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		})}
		</Swiper>
	</View>
};

HighRatingShops.propTypes = {
  items: PropTypes.array.isRequired,
};

export default HighRatingShops;
