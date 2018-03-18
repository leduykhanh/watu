import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Tabs, Tab,
  TabHeading, Icon, Footer, FooterTab } from 'native-base';
import {Alert, ScrollView} from 'react-native';

import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import * as actions from "../actions/cartActions";
import * as PlaceOrderApi from "../api/PlaceOrderApi";
import {Actions} from "react-native-router-flux";
import Image from '../components/common/Image';

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: "rgb(249,174,24)",

  },activeTextColor: 'rgb(67,72,77)'
};

class CartScreen extends Component {

  componentWillMount(){

  }

  add(id) {
    this.props.actions.addItem(id);
  }

  remove(id) {
    this.props.actions.removeItem(id);
  }

  delete(id) {
    this.props.actions.deleteItem(id);
  }

  clearCart() {
    this.props.actions.clearCart();
  }

  render() {
    let total = 0;
    return (
      <Container>
          <Header back/>
          <Content>
            <View horizotal grey p-16>
              <Text bold fs16>Cart</Text>
            </View>
            <View horizontal p-16>
              <Text bold fs14 style={{flex: 4}}>ITEM</Text>
              <Text bold fs14 style={{flex: 2}}>QTY</Text>
              <Text bold fs14 style={{flex: 2}}>PRICE</Text>
            </View>
          {
            this.props.cart.items.map(
              (item, index) => {
                total += item.price * item.qty;
                return(
                <View horizontal center m-t-5 style={{backgroundColor: index % 2 == 0 ? 'rgb(247, 247,247)' : 'white'}}>
                  <Image resizeMode='stretch' style={{width: 80, height: 80}} source={{uri: item.image}}/>
                  <Text fs12 style={{flex: 2}}>{item.name}</Text>
                  <View center-h style={{flex: 2}}>
                    <View horizontal light-border center space-between p-l-10 p-r-10 m-r-10 style={{alignSelf: 'stretch',}}>
                      <Icon onPress={() => this.remove(item.id)} name="ios-remove"/>
                      <Text>{item.qty}</Text>
                      <Icon onPress={() => this.add(item.id)} name="ios-add"/>
                    </View>
                  </View>
                  <Text fs14 style={{flex: 1}}>{(item.price * item.qty).toFixed(2)}</Text>
                  <Icon onPress={() => this.delete(item.id)} name="ios-trash"/>
                  <Text></Text>
                </View>
                )
              }
              )
          }

          </Content>
          {
            this.props.cart.count > 0 ?
            <Footer>
              <FooterTab>
                <View m-l-10 center horizontal>
                  <Text bold fs12>Total Amount  </Text>
                  <Text theme fs18>${total.toFixed(2)}</Text>
                </View>
                <View m-r-10 center center-h>
                  <Button small onPress={Actions.checkout_shipping}><Text>CHECK OUT</Text></Button>
                </View>
              </FooterTab>
            </Footer>
            : null
        }

      </Container>
    );
  }

}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);
