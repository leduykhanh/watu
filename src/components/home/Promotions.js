import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import {Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper';
import {getDistanceFromLatLonInKm} from "../../utils/gpsHelper";
import openGps from "../../utils/gpsHelper";
import Image from '../common/Image';

import itemHelper from '../../utils/itemHelper';
import PromotionsStyle from '../../../wat-themes/styles/components/Promotions';

const Promotions = props => {
  const items = props.items;
  return (
    <View style={PromotionsStyle.container}>
      <Swiper autoplay height={PromotionsStyle.container.height} showsPagination={false} loop>
        {items.map(
          (item) => {
            const {
				id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
				toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle
			} = itemHelper(item);
            const topTexts = toptext.split(" ");
            return(
				<View key={id} style={PromotionsStyle.slide}>
					<TouchableOpacity onPress={() => Actions.p_detail({item: item})}>
						<Image  style={PromotionsStyle.image} source={{uri: image}}/>
					</TouchableOpacity>
					<View style={PromotionsStyle.slideInfo}>
						<TouchableOpacity onPress={() => Actions.p_detail({item: item})}>
							<Text white fs20>{bigtitle}</Text>
							<Text white fs12>{smalltitle}</Text>
						</TouchableOpacity>
					</View>
					<View style={{...PromotionsStyle.slideTopText, backgroundColor: toptext_bgcolor}}>
						{topTexts.map(t =>
						<Text key={t} style={{
							color:toptext_color,
							fontSize:parseInt(toptext_fontsize),
							backgroundColor: toptext_bgcolor
						}}>{t}</Text>)}
					</View>
				</View>
            )
          }
        )}

      </Swiper>
    </View>
  );
};

Promotions.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Promotions;
