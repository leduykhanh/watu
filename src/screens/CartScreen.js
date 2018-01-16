import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Tabs, Tab,
  TabHeading, Icon, Footer, FooterTab } from 'native-base';
import {StyleSheet, Image, ScrollView} from 'react-native';

import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import * as actions from "../actions/cartActions";
import * as PlaceOrderApi from "../api/PlaceOrderApi";
import {Actions} from "react-native-router-flux";

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

  placeOrder(){
    const payload = [];
    if(!this.props.profile.id) return Actions.login();

    this.props.cart.items.map(
      item => {
        payload.push({itemid: item.id, shopid: item.shop_id, qty: item.qty})
      }
    );
    PlaceOrderApi.placeorder(payload).then(
      response => console.log(response.data)
    ).catch( error => console.log(error))
    alert('Successful');
  }

  render() {

    return (
      <Container>

        <ImageBackground>
          <Header back/>
          <Content>
          {
            this.props.cart.items.map(
              item =>
                <View horizontal center>
                  <Image resizeMode='stretch' style={{width: 100, height: 100}} source={{uri: item.image}}/>
                  <Text bold style={{flex: 2}}>{item.name}</Text>
                  <View center-h style={{flex: 2}} >
                    <View horizontal light-border center space-between p-30 style={{alignSelf: 'stretch',}}>
                      <Icon onPress={() => this.remove(item.id)} name="ios-remove" />
                      <Text>{item.qty}</Text>
                      <Icon onPress={() => this.add(item.id)} name="ios-add" />
                    </View>
                  </View>
                  <Text style={{flex: 1}}>{item.price * item.qty}</Text>
                  <Icon onPress={() => this.add(item.id)} name="ios-trash" />
                </View>
              )
          }

          </Content>

          <Footer>
            <FooterTab>
              <View m-l-10 center-h>
                <Text theme fs18>${'456'}</Text>
              </View>
              <View m-r-10 center center-h>
                <Button small onPress={this.placeOrder.bind(this)}><Text>CHECK OUT</Text></Button>
              </View>
            </FooterTab>
          </Footer>

        </ImageBackground>

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
