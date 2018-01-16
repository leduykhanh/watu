import React from 'react';
import { Text, Icon, View } from 'native-base';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Rewview= props => {

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View horizontal style={{alignItems:'center', backgroundColor:'transparent'}}>
        <Icon style={{fontSize: 35, color: '#4740c7', marginRight:10}} name="md-add-circle"  />
        <Text subtitle-active> {props.text} </Text>
      </View>  
    </TouchableOpacity>
  )
};

Rewview.propTypes = {
  text: PropTypes.string.isRequired
};

export default Rewview;