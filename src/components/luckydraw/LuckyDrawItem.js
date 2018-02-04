import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import { TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { getDistanceFromLatLonInKm } from '../../utils/gpsHelper';
import Image from '../common/Image';

const {height, width} = Dimensions.get('window');

const LuckyDrawItem = props => {
  const item = props.item;


  return (
    <TouchableOpacity onPress={() => Actions.s_detail({item: item})}>
      <View style={{width: width/2, padding: 10, backgroundColor: 'white',  flex:1 }}>
        <Image resizeMode='stretch' style={{width: 160, height: 115}} source={{uri: item.image}}/>
        <View center-h horizontal m-t-5>
          <Text fs12 bold>{item.name}</Text>
        </View>
        <Text fs12>{item.description}</Text>

      </View>
    </TouchableOpacity>
  );
};

LuckyDrawItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LuckyDrawItem;
