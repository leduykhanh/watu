import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Tabs, Tab, TabHeading } from 'native-base';
import {StyleSheet, Image, ScrollView} from 'react-native';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import * as actions from "../actions/profileActions";

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: "rgb(249,174,24)",

  },activeTextColor: 'rgb(67,72,77)'
};

class ProfileScreen extends Component {

  componentWillMount(){
    this.props.actions.getHistory();
  }

  renderHistory(){
    console.log(this.props.profile)
    // this.props.profile.history.map(
    //   item => (
    //     <View>
    //       <Text>{item.name}</Text>
    //     </View>
    //   )
    // );
  }

  renderPersonalInfo() {
    return (
      <View>
        <Text>Profile</Text>
        <Text>{this.props.profile.fname? this.props.profile.fname: 'Not set'}</Text>
        <Text>{this.props.profile.email}</Text>
      </View>
    );
  }

  render() {

    return (
      <Container>

        <ImageBackground>
          <Header back/>
          <Content>
            <View horizontal center>
              <Image source={require('../../assets/images/logo.png')}
                   style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 12}} />
              <Text>{this.props.profile.fname? this.props.profile.fname: 'Not set'}</Text>
            </View>
            <Tabs {...tabProps}>
              <Tab heading={<TabHeading><Text small>My History</Text></TabHeading>} >
                {this.renderHistory()}
              </Tab>
              <Tab heading={<TabHeading><Text small>My Loyality</Text></TabHeading>} >
                <Text>dada</Text>
              </Tab>
                <Tab heading={<TabHeading><Text small>Payment Info</Text></TabHeading>} >
                <Text>dada</Text>
              </Tab>
                  <Tab heading={<TabHeading><Text small>Personal Info</Text></TabHeading>} >
                {this.renderPersonalInfo() }
              </Tab>

            </Tabs>

          </Content>

          <Footer />

        </ImageBackground>

      </Container>
    );
  }

}

function mapStateToProps(state) {
  return {
    profile: state.profile,
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
)(ProfileScreen);
