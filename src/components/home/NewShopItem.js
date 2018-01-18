import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { getDistanceFromLatLonInKm } from '../../utils/gpsHelper';

const NewShopItem = props => {
  const item = props.item;
  const { latitude , longtitude } = item;
  const distance = getDistanceFromLatLonInKm(latitude , longtitude, props.location.latitude, props.location.longitude);

  const width = 160;
  return (
    <TouchableOpacity onPress={() => Actions.s_detail({item: item})}>
      <View style={{width: width, height: 160, margin: 10, backgroundColor: 'white',  flex:1 }}>
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
          <Text fs12>{distance}km</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

NewShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NewShopItem;
