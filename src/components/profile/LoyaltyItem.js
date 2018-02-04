import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import Image from '../common/Image';

const LoyaltyItem = props => {
  const item = props.item;
  const width = 110;
  return (
    <View horizontal style={{ height: width, margin: 10, backgroundColor: 'white' }}>
      <View>
        <Image resizeMode='stretch' style={{width: width, height: width}} source={{uri: item.image}}/>
      </View>
      <View p-l-10>
        <View horizontal m-t-5>
          <Text fs14 bold>{item.name}</Text>
        </View>
        <View horizontal>
          <Text fs12 style={{flexWrap: "wrap"}}>{item.address}</Text>
        </View>
        <View horizontal>
          <Icon new-shop name="ios-send" />
          <Text fs12>{item.numberoforders}</Text>
        </View>
        <Text fs14 bold theme>${item.spentamount}</Text>
        <View m-t-5>
          <Text fs12>{item.latestorderdate}</Text>
        </View>
      </View>
    </View>
  );
};

LoyaltyItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LoyaltyItem;
