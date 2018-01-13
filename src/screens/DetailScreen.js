import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2 } from 'native-base';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';


class DetailScreen extends Component {

  render() {

    return (
      <Container>

        <ImageBackground>
          <Header back/>
          <Content>

            <Text>Detail Sc</Text>

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
)(DetailScreen);
