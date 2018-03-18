import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Icon, Footer,FooterTab } from 'native-base';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import { ScrollView, TouchableOpacity, Dimensions, Linking, Alert, Platform } from 'react-native';
import * as api from '../api/ShopDetailApi';
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';
import ShopSummary from '../components/Detail/ShopSummary';
import Rewview from '../components/Detail/Rewview';
import Image from '../components/common/Image';


import openGps from '../utils/gpsHelper';

import * as cartActions from '../actions/cartActions'

import itemHelper, {substr} from '../utils/itemHelper'
import ItemDetailScreenStyle from '../../wat-themes/styles/screens/ItemDetailScreen'

class ItemDetailScreen extends Component {
  state = {
    item: null,
    items: [],
    loading: true,
    reviews: [],
  };

  componentWillMount(){
    api.getItemDetail(this.props.item.id).then(
      response => {
        const {data: {results}} = response
        if(results.length > 0)
          this.setState({item:results[0], loading: false})
      }
    ).catch( (error) => console.log(error))
    api.getReviews(null,this.props.item.id).then(
      response => {
        const {data: {results}} = response
        if(results.length > 0)
          this.setState({reviews:results})
      }
    ).catch( (error) => console.log(error))
  }

  addToCart() {
    this.props.cartActions.addToCart(this.props.item)
    Actions.cart()
  }
  renderReviews() {
    return (
      <View p-25 grey>
        <View horizontal space-between>
          <Text bold>Reviews</Text>
          <Text theme>SEE ALL</Text>
          {
            this.state.reviews.map(
              review => <Review item={review} />
            )
          }
        </View>
      </View>
    );
  }

  renderLoading() {
    return <View style={{flex: 1}}><Spinner/></View>
  }
  renderContent() {
    const item = this.state.item
    const shop = this.props.shop
    const {toptext_color, toptext_fontsize, toptext, toptext_bgcolor} = item
    const {name, price, description, image, totalrate} = itemHelper(item)
    return [
      <View horizontal>
        <View style={ItemDetailScreenStyle.image_container}>
          <Image style={ItemDetailScreenStyle.image} source={{uri: image}}/>
        </View>
        <View m-l-10 p-t-10>
          <Text bold>{name}</Text>
          <Text bold fs16 theme>${price}</Text>
        </View>
      </View>,
      <View horizontal m-b-10 m-t-10>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={totalrate}
          starSize={15}
          starColor={'rgb(249,174,24)'}
          selectedStar={(rating) => console.log(rating)}
        />
        <Text theme fs12>({item.totalreviews?item.totalreviews:0}) Reviews</Text>
      </View>,
      <ShopSummary item={shop} />,
      <View p-25>
        <Text fs14 bold>Voucher details</Text>
        <Text fs12>{description}</Text>
      </View>,
      this.renderReviews()
    ]
  }
  render() {
    const item = this.state.item
    const shop = this.props.shop
    return (
      <Container>
        <ImageBackground>
          <Header back/>
          <Content>
            {!item ? this.renderLoading() : this.renderContent()}
          </Content>
          <Footer>
            <FooterTab>
              <View m-l-10 center-h>
                <Text theme fs18>${item && item.price || 0}</Text>
              </View>
              <View m-r-10 center center-h>
                <Button small onPress={this.addToCart.bind(this)}><Text>ADD TO CART</Text></Button>
              </View>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions : bindActionCreators(cartActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailScreen)
