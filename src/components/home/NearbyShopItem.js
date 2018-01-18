import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import { Image , TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import {Actions} from "react-native-router-flux";
import {getDistanceFromLatLonInKm} from "../../utils/gpsHelper";
import openGps from "../../utils/gpsHelper";

const NearbyShopItem = props => {
  const item = props.item;
  const width = 110;
  const { latitude , longtitude } = item;
  const distance = getDistanceFromLatLonInKm(latitude , longtitude, props.location.latitude, props.location.longitude);
  return (
    <TouchableOpacity onPress={() => Actions.s_detail({item: item})}>
    <View horizontal style={{ height: width, margin: 10, backgroundColor: 'white', flex: 1 }}>
      <View>
        <Image resizeMode='stretch' style={{width: width, height: width}} source={{uri: item.image}}/>
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
    </TouchableOpacity>
  );
};

NearbyShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NearbyShopItem;
