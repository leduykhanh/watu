import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Icon } from 'native-base'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import { ImageBackground } from '../components/common'
import { ScrollView, TouchableOpacity, Dimensions, Linking, Alert, Platform } from 'react-native'
import * as api from '../api/ShopDetailApi'
import StarRating from 'react-native-star-rating'
import ShopSummary from '../components/Detail/ShopSummary'
import ShopDetailListItem from "../components/Detail/ShopDetailListItem"
import { Actions } from 'react-native-router-flux'
import openGps from '../utils/gpsHelper'

import itemHelper, {substr} from '../utils/itemHelper'
import ShopDetailScreenStyle from '../../wat-themes/styles/screens/ShopDetailScreen'
import Image from '../components/common/Image';

class ShopDetailScreen extends Component {
  state = {
    item: null,
    items: [],
    reviews: [],
    showReview: false
  }
  componentWillMount(){
    api.getShopDetail(this.props.item.id).then(
      response => {
        const {data: {results}} = response
        if(results.length > 0)
          this.setState({item:results[0]})
      }
    ).catch( (error) => console.log(error))
    api.getShopItems(this.props.item.id).then(
      response => {
        const {data: {results}} = response
        if(results.length > 0)
          this.setState({items:results})
      }
    ).catch( (error) => console.log(error));
    api.getReviews(this.props.item.id, null).then(
      response => {
        const {data: {results}} = response
        if(results.length > 0)
          this.setState({reviews:results})
      }
    ).catch( (error) => console.log(error))
  }

  renderReviews() {
    return (
      <View p-25 grey>
        <View horizontal space-between>
          <Text bold>Reviews</Text>
          <Text onPress={() => this.setState({showReview: false})}theme>Go back</Text>
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
  	const {
  		id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
  		toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
  		address, items
  	} = itemHelper(item)
    return <ScrollView containerStyle={ShopDetailScreenStyle.container}>
      <ShopSummary openReview={() => this.setState({showReview: true})} item={item} />
      {
        this.state.showReview ? this.renderReviews() :

        <View>
          <Image style={ShopDetailScreenStyle.image} source={{uri: image}}/>
          {this.state.items.map(sitem => <TouchableOpacity onPress={() => Actions.i_detail({item: sitem, shop: item})}>
            <ShopDetailListItem key={sitem.id} item={sitem}/>
          </TouchableOpacity>)}
        </View>
      }
    </ScrollView>
  }
  render() {
    const item = this.state.item
    return (
      <Container>
          <Header back/>
          <Content>
            {!item ? this.renderLoading() : this.renderContent()}
          </Content>
          <Footer />
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
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopDetailScreen)
