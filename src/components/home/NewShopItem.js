import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const NewShopItem = props => {
  const item = props.item;
  const width = 160;
  return (
    <View style={{width: width, height: 160, margin: 10, backgroundColor: 'white' }}>
      <Image resizeMode='stretch' style={{width: 160, height: 115}} source={{uri: item.image}}/>
      <View style={{backgroundColor: "rgba(0, 0, 0, 0.5)", top: 80, padding: 10,
        alignSelf: 'stretch', width:width, position: 'absolute'}}>
        <Text fs12 white>{item.address}</Text>
      </View>
      <View center-h horizontal m-t-5>
        <Text fs12 bold>{item.name}</Text>
      </View>
      <View center-h horizontal>
        <Icon new-shop name="ios-pin" />
        <Text fs12>2.5km</Text>
      </View>
    </View>
  );
};

NewShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NewShopItem;