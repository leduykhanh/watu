import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Icon } from 'native-base';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import { ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert, Platform } from 'react-native';
import * as api from '../api/PromotionDetailApi';
import StarRating from 'react-native-star-rating';
import NearbyShopItem from '../components/home/NearbyShopItem';
import PromotionDetailItem from "../components/Detail/PromotionDetailItem";
import openGps from '../utils/gpsHelper';
import { Actions } from 'react-native-router-flux';

import itemHelper, {substr} from '../utils/itemHelper';
import PromotionDetailScreenStyle from '../../wat-themes/styles/screens/PromotionDetailScreen';

class PromotionDetailScreen extends Component {
  state = {
    item: null
  }
  componentWillMount(){
    api.getPromotionDetail(this.props.item.id).then(
      response => {
        const {data: {results}} = response;
        if(results.length > 0)
          this.setState({item:results[0]})
      }
    ).catch( (error) => console.log(error))
  }

  render() {
    const item = this.state.item;
    if(item == null) return <Text>Loading</Text>
	const {
		id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
		toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
		address
	} = itemHelper(item);
    const topTexts = toptext.split(" ");
    return (
      <Container>
        <ImageBackground>
          <Header back/>
          <Content>
			  <View key={id} style={PromotionDetailScreenStyle.slide}>
				  <Image  style={PromotionDetailScreenStyle.image} source={{uri: image}}/>
				  <View style={PromotionDetailScreenStyle.slideInfo}>
					  <Text white fs20>{substr(bigtitle, 40)}</Text>
					  <Text white fs12>{substr(smalltitle, 60)}</Text>
				  </View>
				  <View style={{...PromotionDetailScreenStyle.slideTopText, backgroundColor: toptext_bgcolor}}>
					  {topTexts.map(t =>
					  <Text key={t} style={{
						  color:toptext_color,
						  fontSize:parseInt(toptext_fontsize),
						  backgroundColor: toptext_bgcolor
					  }}>{t}</Text>)}
				  </View>
			  </View>
			  <View horizontal>
				  <View horizontal>
					  <Image source={{uri: item.shop_info.image || ''}} style={PromotionDetailScreenStyle.shop_image} />
					  <View m-l-10 p-t-10>
						  <Text bold>{substr(item.shop_info.name, 40)}</Text>
						  <Text small>{substr(item.shop_info.address, 60)}</Text>
					  </View>
				  </View>
				  <View horizontal space-between p-l-5 p-r-5>
					  <StarRating
						disabled={false}
						maxStars={5}
						rating={item.shop_info.totalrate}
						starSize={15}
						starColor={'rgb(249,174,24)'}
						selectedStar={(rating) => console.log(rating)}
						/>
						<Text white fs12>({item.shop_info.totalreviews?item.shop_info.totalreviews:0}) Reviews</Text>
						<View horizontal>
							<Icon new-shop name="ios-send" />
							<Text theme fs12 theme onPress={() => openGps(item.shop_info.latitude, item.shop_info.longitude)}>Get direction</Text>
						</View>
					</View>
			  </View>
			  <ScrollView containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
			  {item.items.map(sitem => <TouchableOpacity onPress={() => Actions.s_detail({item: sitem, shop : item})}>
				  <PromotionDetailItem key={sitem.id} item={sitem}/>
			  </TouchableOpacity>)}
			  </ScrollView>
          </Content>
          <Footer />
        </ImageBackground>
      </Container>
    );
  }

}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromotionDetailScreen);
