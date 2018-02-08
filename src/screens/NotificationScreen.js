import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Tabs, Tab,
  TabHeading, Icon, FooterTab } from 'native-base';
import {Alert, Image, ScrollView} from 'react-native';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ImageBackground } from '../components/common';
import * as actions from "../actions/notificationActions";
import * as PlaceOrderApi from "../api/PlaceOrderApi";
import {Actions} from "react-native-router-flux";
import NotificationItem from '../components/notification/NotificationItem';

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: "rgb(249,174,24)",

  },activeTextColor: 'rgb(67,72,77)'
};

class NotificationScreen extends Component {
  componentWillMount() {
    this.props.actions.getNotification();
  }
  render() {
    return (
      <Container>
          <Header />
          <Content>
            <View horizotal grey p-16>
              <Text bold fs16>Notifications</Text>
            </View>
            {
              this.props.notification.items.map(
                item => <NotificationItem item={item} />
              )
            }
          </Content>
          <Footer />
      </Container>
    )
  }
}
function mapStateToProps(state) {
  return {
    notification: state.notification,
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
)(NotificationScreen);
