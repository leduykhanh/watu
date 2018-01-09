import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';

const NearbyShopItem = props => {
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
          <Text fs12>{item.address}</Text>
        </View>
        <Text fs14 bold theme>80% OFF</Text>
        <View horizontal space-between>
          <Text fs12>200m</Text>
          <View horizontal>
            <Icon new-shop name="ios-send" />
            <Text white fs12 theme>Get direction</Text>
          </View>
        </View>
        <View horizontal space-between>
          <View>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={item.totalrate}
              starSize={15}
              starColor={'rgb(249,174,24)'}
              selectedStar={(rating) => console.log(rating)}
            />
          </View>
          <Text fs12>({item.totalreviews?item.totalreviews:0}) Reviews</Text>
        </View>
      </View>
    </View>
  );
};

NearbyShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NearbyShopItem;