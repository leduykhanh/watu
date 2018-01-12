import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Tabs, Tab } from 'native-base';
import {StyleSheet, Image, ScrollView} from 'react-native';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: "rgb(249,174,24)",

  },activeTextColor: 'rgb(67,72,77)'
};

class ProfileScreen extends Component {

  render() {

    return (
      <Container>

        <ImageBackground>
          <Header back/>
          <Content>
            <View horizontal>
              <Image source={require('../../assets/images/logo.png')}
                   style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 12}} />
              <Text>Phi Tien</Text>
            </View>
            <Tabs {...tabProps}>
              <Tab heading="My History">
                <Text>aaa</Text>
              </Tab>
              <Tab heading="My Loyality">
                <Text>dada</Text>
              </Tab>
              <Tab heading="Payment Info">
                <Text>dada</Text>
              </Tab>
              <Tab heading="Personal Info">
                <Text>dada</Text>
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

  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
