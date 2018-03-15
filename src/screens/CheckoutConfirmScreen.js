import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Container,
  View,
  Content,
  Form,
  Item,
  Input,
  Spinner,
  Label,
  Button,
  Title,
  Text,
  H2,
  Tabs,
  Tab,
  TabHeading,
  Icon,
  Footer,
  FooterTab,
  CheckBox
} from 'native-base'
import {Alert, ScrollView} from 'react-native'
import {Actions} from "react-native-router-flux"

import Header from '../components/layout/Header'
import {LoadingButton} from '../components/common'
import * as actions from "../actions/cartActions"
import * as PlaceOrderApi from "../api/PlaceOrderApi"
import Image from '../components/common/Image'
import {mapStateToProps, mapDispatchToProps} from '../utils/reduxHelper'

const tabProps = {
  tabBarUnderlineStyle: {
    backgroundColor: "rgb(249,174,24)"
  },
  activeTextColor: 'rgb(67,72,77)'
}

class CheckoutConfirmScreen extends Component {

  state = {
    checkingOut: false
  }

  componentWillMount() {}

  clearCart() {
    this
      .props
      .actions
      .clearCart()
  }

  placeOrder() {
    const payload = []
    if (!this.props.profile.id) 
      return Actions.login()

    this
      .props
      .cart
      .items
      .map(item => {
        payload.push({itemid: item.id, shopid: item.shop_id, qty: item.qty})
      })
    this.setState({checkingOut: true})
    PlaceOrderApi
      .placeorder({items: payload})
      .then(response => {
        this.setState({checkingOut: false})
        this.clearCart()
        Actions.replace('dashboard')
        // Alert.alert(
        //   'Order created',
        //   'Confirm?',
        //   [
        //     {text: 'OK', onPress: () => {this.clearCart()Actions.replace('dashboard')}},
        //   ],
        //   { cancelable: false }
        // )
      })
      .catch(error => console.log(error))

    }

  render() {
    let total = 0
    return (<Container>
      <Header back="back"/>
      <Content>
        <View horizotal="horizotal" grey="grey" p-16="p-16">
          <Text bold="bold" fs16="fs16">Confirmation</Text>
        </View>
        <View p-25="p-25" m-10="m-10" grey="grey">
          <Text bold="bold" fs16="fs16">CART</Text>
          {
            this
              .props
              .cart
              .items
              .map((item, index) => {
                total += item.price * item.qty
                return (<View horizontal="horizontal" center="center" m-t-5="m-t-5" style={{
                    backgroundColor: index % 2 == 0
                      ? 'rgb(247, 247,247)'
                      : 'white'
                  }}>
                  <Text fs12="fs12" style={{
                      flex: 4
                    }}>{item.name}</Text>
                  <Text fs12="fs12" style={{
                      flex: 1
                    }}>{item.qty}</Text>
                  <Text fs12="fs12" style={{
                      flex: 2
                    }}>${(item.price * item.qty).toFixed(2)}</Text>
                </View>)
              })
          }
        </View>
        <View p-25="p-25" m-10="m-10" grey="grey">
          <Text bold="bold" fs16="fs16">SHIPPING INFO</Text>
          <Text fs12="fs12">{this.props.profile.fname || ''}</Text>
          <Text fs12="fs12">{this.props.profile.email}</Text>
        </View>
        <View p-25="p-25" m-10="m-10" grey="grey">
          <Text bold="bold" fs16="fs16">PAYMENT INFO</Text>
          <View p-25="p-25" horizontal="horizontal" space-between="space-between">
            <Icon name="card"/>
            <Text bold="bold" fs14="fs14">******1234</Text>
          </View>
        </View>
        <View horizontal="horizontal">
          <CheckBox checked="checked"/>
          <Text></Text>
          <Text fs12="fs12">I agree with terms and conditions</Text>
        </View>
      </Content>
      <Footer>
        <View m-r-10="m-r-10" center="center" center-h="center-h">
          <LoadingButton isLoading={this.state.checkingOut} onPress={this
              .placeOrder
              .bind(this)} small="small" text='PAY NOW'/>
        </View>

      </Footer>

    </Container>)
  }

}

export default connect(mapStateToProps, mapDispatchToProps({actions}))(CheckoutConfirmScreen)
