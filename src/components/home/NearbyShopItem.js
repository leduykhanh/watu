import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import { TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import {Actions} from "react-native-router-flux";
import {Platform, Dimensions, PixelRatio} from "react-native";
import {getDistanceFromLatLonInKm} from "../../utils/gpsHelper";
import openGps from "../../utils/gpsHelper";
import Image from '../common/Image';

const NearbyShopItem = props => {
  const item = props.item;
  const size = 110;
  const width = Dimensions.get("window").width
  const { latitude , longtitude } = item;
  const distance = getDistanceFromLatLonInKm(latitude , longtitude, props.location.latitude, props.location.longitude);
  return (
    <TouchableOpacity onPress={() => Actions.s_detail({item: item})}>
    <View horizontal style={{ height: size, width, marginTop: 10, marginRight: 10, marginLeft: 10, backgroundColor: 'white', flex: 1 }}>
      <View>
        <Image resizeMode='stretch' style={{width: size, height: size}} source={{uri: item.image}}/>
      </View>
      <View p-l-10>
        <View m-t-5 horizontal>
          <Text fs14 bold style={{flexWrap: "wrap"}}>{item.name}</Text>
        </View>
        <View horizontal>
          <Text fs12>{item.address}</Text>
        </View>
        <Text fs14 bold theme>80% OFF</Text>
        <View horizontal space-between>
          <Text fs12>{distance}km</Text>
          <View horizontal>
            <Icon new-shop name="ios-send" />
            <Text white fs12 theme onPress={() => openGps(item.latitude, item.longitude)}>Get direction</Text>
          </View>
        </View>
        <View horizontal space-between style={{width: width - size - 40}}>
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
    </TouchableOpacity>
  );
};

NearbyShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NearbyShopItem;
