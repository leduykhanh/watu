import React from 'react';
import { Text, Icon, View } from 'native-base';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Rewview= props => {
  const { item } = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View horizontal style={{alignItems:'center', backgroundColor:'transparent'}}>
        <Text fs12> {item.comment} </Text>
      </View>
      <View m-t-5>
        <Text fs12>{item.created_date}</Text>
      </View>
    </TouchableOpacity>
  )
};

Rewview.propTypes = {
  text: PropTypes.string.isRequired
};

export default Rewview;
