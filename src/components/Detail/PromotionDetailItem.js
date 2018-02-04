import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import Image from '../common/Image';

const PromotionDetailItem = props => {
  const item = props.item;
  const width = 110;
  return (
      <View horizontal style={{ height: width + 20, margin: 10, backgroundColor: 'white' }}>
        <View>
          <Image resizeMode='stretch' style={{width: width, height: width}} source={{uri: item.image?item.image:''}}/>
        </View>
        <View p-l-10>
          <View horizontal m-t-5>
            <Text fs14 bold>{item.name}</Text>
          </View>
          <View horizontal>
            <Text fs12>{item.description}</Text>
          </View>
          <Text fs14 bold theme>${item.price}</Text>
        </View>
      </View>
  );
};

PromotionDetailItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PromotionDetailItem;
