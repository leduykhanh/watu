import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import { Platform, Dimensions, PixelRatio } from "react-native"
import Image from '../common/Image';

const ShopDetailItem = props => {
  const item = props.item;
  const size = 110;
  const width = Dimensions.get("window").width;
  let description = item.description || ''
  if (description.length > 120) description = `${description.substr(0, 117)}...`
  let name = item.name || ''
  if (name.length > 30) name = `${name.substr(0, 47)}...`
  return (
    <View horizontal style={{ height: size, marginTop: 10, marginBottom: 10, marginLeft: 10, backgroundColor: 'white' }}>
      <View>
        <Image resizeMode='stretch' style={{width: size, height: size}} source={{uri: item.image}}/>
      </View>
      <View p-l-10>
        <View horizontal m-t-5>
          <Text fs14 bold>{name}</Text>
        </View>
        <View horizontal style={{width: width - size - 40, marginBottom: 10}}>
          <Text fs12 style={{flexWrap: "wrap"}}>{description}</Text>
        </View>
        <Text fs14 bold theme>${item.price}</Text>
      </View>
    </View>
  );
};

ShopDetailItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShopDetailItem;
