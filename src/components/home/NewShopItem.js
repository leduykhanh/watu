import React from 'react';
import { Text, Spinner, Icon } from 'native-base';
import {  View, Image } from 'react-native';
import PropTypes from 'prop-types';

const NewShopItem = props => {
  const item = props.item;
  return (
    <View style={{width: 200, height: 300, margin: 10, }}>
      <Image resizeMode='stretch' style={{width: 200, height: 200}} source={{uri: item.image}}/>
      <View style={{backgroundColor: "rgba(0, 0, 0, 0.5)", top: -25, padding: 10, alignSelf: 'stretch', width:'auto'}}>
        <Text fs12 white>{item.address}</Text>
      </View>
      <Text bold>{item.name}</Text>
      <View horizontal>
        <Icon name="ios-pin-outline" />
        <Text>2.5km</Text>
      </View>
    </View>
  );
};

NewShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NewShopItem;