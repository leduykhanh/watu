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
  FooterTab
} from 'native-base'
import {Alert, Image, ScrollView} from 'react-native'
import {Actions} from "react-native-router-flux"

import * as PlaceOrderApi from "../api/PlaceOrderApi"
import * as actions from "../actions/notificationActions"
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import {ImageBackground} from '../components/common'
import NotificationItem from '../components/notification/NotificationItem'
import {mapStateToProps, mapDispatchToProps} from '../utils/reduxHelper'

const tabProps = {
  tabBarUnderlineStyle: {
    backgroundColor: "rgb(249,174,24)"
  },
  activeTextColor: 'rgb(67,72,77)'
}

class NotificationScreen extends Component {
  componentWillMount() {
    this
      .props
      .actions
      .getNotification()
  }
  render() {
    return (<Container>
      <Header/>
      <Content>
        <View horizotal="horizotal" grey="grey" p-16="p-16">
          <Text bold="bold" fs16="fs16">Notifications</Text>
        </View>
        {
          this
            .props
            .notification
            .items
            .map(item => <NotificationItem item={item}/>)
        }
      </Content>
      <Footer/>
    </Container>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps({actions}))(NotificationScreen)
