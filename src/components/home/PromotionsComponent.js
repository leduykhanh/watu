import React from 'react';
import { Text, Spinner, Icon, View, } from 'native-base';
import {Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import {Actions} from "react-native-router-flux";
import {getDistanceFromLatLonInKm} from "../../utils/gpsHelper";
import openGps from "../../utils/gpsHelper";
import Swiper from 'react-native-swiper';
import Image from '../common/Image';

const { width } = Dimensions.get('window');

const styles = {
  container: {
    flex: 1
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1,
    height: 240
  }
}

const PromotionsComponent = props => {
  const items = props.items;

  return (
    <View style={{height: 240}}>
      <Swiper autoplay height={240} showsPagination={false}
        // onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
              loop>
        {items.map(
          (item) => {

            const {toptext_color, toptext_fontsize, toptext, toptext_bgcolor} = item;
            const topTexts = toptext.split(" ");
            return(
              <View key={item.id} style={styles.slide}>
                <Image  style={styles.image} source={{uri: item.image?item.image:''}}/>

                <View style={{backgroundColor: "rgba(0, 0, 0, 0.6)", top: 175, padding: 10,
                  position:'absolute', alignSelf: 'stretch', width:'auto'}}>
                  <TouchableOpacity onPress={() => Actions.p_detail({item: item})}>
                    <Text white fs20>{item.bigtitle}</Text>
                    <Text white fs12>{item.smalltitle}</Text>
                  </TouchableOpacity>
                </View>

                <View style={{position:'absolute', top: 2, backgroundColor: toptext_bgcolor, right: 16, padding: 6,
                  borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                  {topTexts.map(t =>
                    <Text key={t} style={{color:toptext_color, fontSize:parseInt(toptext_fontsize),
                      backgroundColor: toptext_bgcolor}}>{t}</Text>
                  )}

                </View>
              </View>
            )
          }
        )}

      </Swiper>
    </View>
  );
};

PromotionsComponent.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PromotionsComponent;
