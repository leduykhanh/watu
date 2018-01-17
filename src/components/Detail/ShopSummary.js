import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import openGps from "../../utils/gpsHelper";
const ShopSummary = props => {
  const item = props.item;
  const width = 110;
  return (
    <View m-b-10 grey p-b-10>
      <View horizontal>
        <Image source={{uri: item.image}} style={{ width: 80, height: 80, marginBottom: 12, borderRadius: 40}} />
        <View m-l-10 p-t-10>
          <Text bold>{item.name}</Text>
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
