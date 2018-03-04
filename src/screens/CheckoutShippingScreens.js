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

class CheckoutShippingScreens extends Component {

  componentWillMount(){

  }


  render() {
    let total = 0;
    return (
      <Container>
          <Header back/>
          <Content>
            <View horizotal grey p-16>
              <Text bold fs16>Shipping</Text>
            </View>
            <View p-25 m-10 grey>
              <Text fs12>{this.props.profile.fname || ''}</Text>
              <Text fs12>{this.props.profile.email}</Text>
            </View>
          </Content>
          <Footer>
              <View m-r-10 center center-h>
                <Button small onPress={Actions.checkout_payment}><Text>NEXT</Text></Button>
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
)(CheckoutShippingScreens);
