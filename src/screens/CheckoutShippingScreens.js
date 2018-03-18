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

class CheckoutShippingScreens extends Component {

  componentWillMount() {}

  render() {
    let total = 0
    return (<Container>
      <Header back="back"/>
      <Content>
        <View horizotal="horizotal" grey="grey" p-16="p-16">
          <Text bold="bold" fs16="fs16">Shipping</Text>
        </View>
        <View p-25="p-25" m-10="m-10" grey="grey">
          <Text fs12="fs12">{this.props.profile.fname || ''}</Text>
          <Text fs12="fs12">{this.props.profile.email}</Text>
        </View>
      </Content>
      <Footer>
        <View m-r-10="m-r-10" center="center" center-h="center-h">
          <Button small="small" onPress={Actions.checkout_payment}>
            <Text>NEXT</Text>
          </Button>
        </View>

      </Footer>

    </Container>)
  }

}

export default connect(mapStateToProps, mapDispatchToProps({actions}))(CheckoutShippingScreens)
