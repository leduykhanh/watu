import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import Image from '../common/Image';

const NotificationItem = props => {
  const item = props.item;
  const width = 110;
  return (
    <View m-b-5 horizontal style={{backgroundColor: 'rgb(254, 247, 232)' }}>
      {
        item.image != ""?
          <View>
            <Image resizeMode='stretch' style={{width: width, height: width}} source={{uri: item.image}}/>
          </View>
          : null
      }
      <View p-5>
        <View horizontal m-t-5>
          <Text fs14 bold>{item.title}</Text>
        </View>
        <View horizontal>
          <Text fs12>{item.message}</Text>
        </View>

        <View m-t-5>
          <Text fs12>{item.date}</Text>
        </View>
      </View>
    </View>
  );
};

NotificationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NotificationItem;
