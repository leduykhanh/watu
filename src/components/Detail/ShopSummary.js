import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import {Platform, Dimensions, PixelRatio} from "react-native";
import openGps from "../../utils/gpsHelper";
import Image from '../common/Image';

const ShopSummary = props => {
  const item = props.item;
  const size = 80;
  const width = Dimensions.get("window").width;
  let description = item.description || ''
  if (description.length > 120) description = `${description.substr(0, 117)}...`
  let name = item.name || ''
  if (name.length > 30) name = `${name.substr(0, 47)}...`
  return (
    <View grey m-b-10>
      <View horizontal>
		<Image resizeMode='stretch' style={{width: size, height: size, marginTop: 10, marginBottom: 10, marginLeft: 10}} source={{uri: item.image?item.image:''}}/>
        <View m-l-10 p-t-10>
          <Text bold>{name}</Text>
          <Text small>{item.address}</Text>
        </View>
      </View>
      <View horizontal space-between p-l-5 p-r-5>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={item.totalrate}
          starSize={15}
          starColor={'rgb(249,174,24)'}
          selectedStar={(rating) => console.log(rating)}
        />
        <Text theme fs12>({item.totalreviews?item.totalreviews:0}) Reviews</Text>
        <View horizontal>
          <Icon new-shop name="ios-send" />
          <Text theme fs12 theme onPress={() => openGps(item.latitude, item.longitude)}>Get direction</Text>
        </View>
      </View>
    </View>
  );
};

ShopSummary.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShopSummary;
