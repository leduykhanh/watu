import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Icon, Footer,FooterTab } from 'native-base'
import Header from '../components/layout/Header'
import { ImageBackground } from '../components/common'
import { ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert, Platform } from 'react-native'
import * as api from '../api/ShopDetailApi'
import StarRating from 'react-native-star-rating'
import { Actions } from 'react-native-router-flux'
import ItemSummary from '../components/Detail/ItemSummary'
import ShopSummary from '../components/Detail/ShopSummary'
import openGps from '../utils/gpsHelper'

import * as cartActions from '../actions/cartActions'

import itemHelper, {substr} from '../utils/itemHelper'
import ItemDetailScreenStyle from '../../wat-themes/styles/screens/ItemDetailScreen'

class ItemDetailScreen extends Component {
  state = {
    item: null,
    items: [],
    loading: true
  }

  componentWillMount(){
    api.getItemDetail(this.props.item.id).then(
      response => {
        const {data: {results}} = response
        if(results.length > 0)
          this.setState({item:results[0], loading: false})
      }
    ).catch( (error) => console.log(error))
    api.getReviews(this.props.item.shop_id,this.props.item.id).then(
      response => {
        const {data: {results}} = response
        if(results.length > 0)
          this.setState({items:results})
      }
    ).catch( (error) => console.log(error))
  }

  addToCart() {
    this.props.cartActions.addToCart(this.props.item)
    Actions.cart()
  }

  render() {
    const item = this.state.item
    const shop = this.props.shop
    if(item == null || shop == null) return <Text>Loading</Text>
    const {toptext_color, toptext_fontsize, toptext, toptext_bgcolor} = item
	const {name, price, description, image, totalrate} = itemHelper(item)

    return (
      <Container>

        <ImageBackground>
          <Header back/>
          <Content>
            <ScrollView containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
				<ItemSummary item={item}/>
				<ShopSummary item={shop}/>
				<View p-25>
	              <Text fs14 bold m-b-10>Voucher details</Text>
	              <Text fs12>{description}</Text>
	            </View>
				{/*TODO show item reviews*/}
				{/*TODO show other products*/}
				{/*TODO show maybe you like products*/}
            </ScrollView>
          </Content>
          <Footer>
            <FooterTab>
              <View m-l-10 center-h>
                <Text theme fs18>${item.price}</Text>
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
