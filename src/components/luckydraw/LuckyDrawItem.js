import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import { TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { getDistance } from '../../utils/gpsHelper';
import Image from '../common/Image';

const {height, width} = Dimensions.get('window');

const LuckyDrawItem = props => {
  const { selected, item } = props;
  let borderWidth = 0, borderColor = 'rgb(249, 174, 24)';
  if (selected) borderWidth = 1;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{width: width/2, padding: 10, backgroundColor: 'white',  flex:1, borderWidth, borderColor }}>
      {
        selected ?
        <View style={{position: 'absolute', top: -2, backgroundColor: 'transparent', left: -2, padding: 6, zIndex: 1000}}>
          <Icon style={{color: 'green'}} name="ios-arrow-dropdown-circle" />
        </View>
        : null
      }

        <Image resizeMode='stretch' style={{width: width/2 - 20, height: 115}} source={{uri: item.image}}/>
        <View center-h horizontal m-t-5>
          <Text fs12 bold>{item.name}</Text>
        </View>
        <Text fs12>{item.description}</Text>
        <View horizontal m-t-5 center>
          <Image resizeMode='stretch' style={{width: 20, height: 20, borderRadius: 10, marginRight: 5}} source={{uri: item.sponsor_image}}/>
          <Text bold fs12 theme>{item.sponsor_name}</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
};

LuckyDrawItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LuckyDrawItem;
