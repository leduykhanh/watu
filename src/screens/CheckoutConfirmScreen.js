import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Tabs, Tab,
  TabHeading, Icon, Footer, FooterTab, CheckBox } from 'native-base';
import {Alert, ScrollView} from 'react-native';

import Header from '../components/layout/Header';
import { LoadingButton } from '../components/common';
import * as actions from "../actions/cartActions";
import * as PlaceOrderApi from "../api/PlaceOrderApi";
import {Actions} from "react-native-router-flux";
import Image from '../components/common/Image';

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: "rgb(249,174,24)",

  },activeTextColor: 'rgb(67,72,77)'
};


class CheckoutConfirmScreen extends Component {

  state = {
      checkingOut: false,
  }

  componentWillMount(){

  }

  clearCart() {
    this.props.actions.clearCart();
  }

  placeOrder(){
    const payload = [];
    if(!this.props.profile.id) return Actions.login();

    this.props.cart.items.map(
      item => {
        payload.push({itemid: item.id, shopid: item.shop_id, qty: item.qty})
      }
    );
    this.setState({
      checkingOut: true
    });
    PlaceOrderApi.placeorder({items: payload}).then(
      response => {
        this.setState({
          checkingOut: false
        });
        this.clearCart();
        Actions.replace('dashboard')
        // Alert.alert(
        //   'Order created',
        //   'Confirm?',
        //   [
        //     {text: 'OK', onPress: () => {this.clearCart();Actions.replace('dashboard')}},
        //   ],
        //   { cancelable: false }
        // );
      }
    ).catch( error => console.log(error))

  }

  render() {
    let total = 0;
    return (
      <Container>
          <Header back/>
          <Content>
            <View horizotal grey p-16>
              <Text bold fs16>Confirmation</Text>
            </View>
            <View p-25 m-10 grey>
              <Text bold fs16>CART</Text>
              {
                this.props.cart.items.map(
                  (item, index) => {
                    total += item.price * item.qty;
                    return(
                    <View horizontal center m-t-5 style={{backgroundColor: index % 2 == 0 ? 'rgb(247, 247,247)' : 'white'}}>
                      <Text fs12 style={{flex: 4}}>{item.name}</Text>
                      <Text fs12 style={{flex: 1}}>{item.qty}</Text>
                      <Text fs12 style={{flex: 2}}>${(item.price * item.qty).toFixed(2)}</Text>
                    </View>
                    )
                  }
                  )
              }
            </View>
            <View p-25 m-10 grey>
              <Text bold fs16>SHIPPING INFO</Text>
              <Text fs12>{this.props.profile.fname || ''}</Text>
              <Text fs12>{this.props.profile.email}</Text>
            </View>
            <View p-25 m-10 grey>
              <Text bold fs16>PAYMENT INFO</Text>
              <View p-25 horizontal space-between>
                <Icon name="card" />
                <Text bold fs14>******1234</Text>
              </View>
            </View>
            <View horizontal>
    		      <CheckBox checked/>
    		      <Text>   </Text>
    		      <Text fs12>I agree with terms and conditions</Text>
    		    </View>
          </Content>
          <Footer>
              <View m-r-10 center center-h>
              <LoadingButton isLoading={this.state.checkingOut} onPress={this.placeOrder.bind(this)} small text='PAY NOW'/>
              </View>

          </Footer>

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
)(CheckoutConfirmScreen);
