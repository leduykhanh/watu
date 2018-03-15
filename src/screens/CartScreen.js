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
  FooterTab
} from 'native-base'
import {Alert, ScrollView} from 'react-native'
import {Actions} from "react-native-router-flux"

import Header from '../components/layout/Header'
import {ImageBackground} from '../components/common'
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

class CartScreen extends Component {

  componentWillMount() {}

  add(id) {
    this
      .props
      .actions
      .addItem(id)
  }

  remove(id) {
    this
      .props
      .actions
      .removeItem(id)
  }

  delete(id) {
    this
      .props
      .actions
      .deleteItem(id)
  }

  clearCart() {
    this
      .props
      .actions
      .clearCart()
  }

  render() {
    let total = 0
    return (<Container>
      <Header back="back"/>
      <Content>
        <View horizotal="horizotal" grey="grey" p-16="p-16">
          <Text bold="bold" fs16="fs16">Cart</Text>
        </View>
        <View horizontal="horizontal" p-16="p-16">
          <Text bold="bold" fs14="fs14" style={{
              flex: 4
            }}>ITEM</Text>
          <Text bold="bold" fs14="fs14" style={{
              flex: 2
            }}>QTY</Text>
          <Text bold="bold" fs14="fs14" style={{
              flex: 2
            }}>PRICE</Text>
        </View>
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
                <Image resizeMode='stretch' style={{
                    width: 80,
                    height: 80
                  }} source={{
                    uri: item.image
                  }}/>
                <Text fs12="fs12" style={{
                    flex: 2
                  }}>{item.name}</Text>
                <View center-h="center-h" style={{
                    flex: 2
                  }}>
                  <View horizontal="horizontal" light-border="light-border" center="center" space-between="space-between" p-l-10="p-l-10" p-r-10="p-r-10" m-r-10="m-r-10" style={{
                      alignSelf: 'stretch'
                    }}>
                    <Icon onPress={() => this.remove(item.id)} name="ios-remove"/>
                    <Text>{item.qty}</Text>
                    <Icon onPress={() => this.add(item.id)} name="ios-add"/>
                  </View>
                </View>
                <Text fs14="fs14" style={{
                    flex: 1
                  }}>{(item.price * item.qty).toFixed(2)}</Text>
                <Icon onPress={() => this.delete(item.id)} name="ios-trash"/>
                <Text></Text>
              </View>)
            })
        }

      </Content>
      {
        this.props.cart.count > 0
          ? <Footer>
              <FooterTab>
                <View m-l-10="m-l-10" center="center" horizontal="horizontal">
                  <Text bold="bold" fs12="fs12">Total Amount
                  </Text>
                  <Text theme="theme" fs18="fs18">${total.toFixed(2)}</Text>
                </View>
                <View m-r-10="m-r-10" center="center" center-h="center-h">
                  <Button small="small" onPress={Actions.checkout_shipping}>
                    <Text>CHECK OUT</Text>
                  </Button>
                </View>
              </FooterTab>
            </Footer>
          : null
      }

    </Container>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps({actions}))(CartScreen)
