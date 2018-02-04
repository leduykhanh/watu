import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Tabs, Tab,
  TabHeading, Icon, Footer, FooterTab } from 'native-base';
import {Alert, Image, ScrollView} from 'react-native';

import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import * as actions from "../actions/prizeActions";
import * as PrizeApi from '../api/PrizeApi';
import {Actions} from "react-native-router-flux";
import LuckyDrawItem from "../components/luckydraw/LuckyDrawItem";
import Dash from 'react-native-dash';


class LuckyDrawScreen extends Component {
  state = {
    items: [],
    selectedId: null,
    loading: true,
    loaded: false,
  }
  componentWillMount() {
    PrizeApi.getPrize().then(
      response => {
        const {data: {results}} = response;
        if(results.length > 0)
          this.setState({items:results})
      }
    ).catch(err => console.log(err));
  }

  submitPrize() {
    Actions.reset('lightbox');
  }

  render() {
    const grid = [];
    const { items } = this.state;
    for (let i=0; i<items.length; i=i+2) {
      grid.push(
        <View horizontal>
          <LuckyDrawItem selected={this.state.selectedId==items[i].id} onPress={() => this.setState({selectedId: items[i].id})} item={items[i]} />
          <LuckyDrawItem selected={this.state.selectedId==items[i+1].id} onPress={() => this.setState({selectedId: items[i+1].id})} item={items[i+1]} />
        </View>
      )
    };
    return (
      <Container>
          <Header />
          <Content>
            <View horizontal grey p-16>
              <Text bold fs12>Someline about Lucky Draw</Text>
            </View>
            <View p-16>
              <Text fs12>
              Gourmet cooking is a style of food preparation that deals with the finest and freshest lorem ipsum dolos possible ingredients.
              </Text>
            </View>
            <Dash />
            {
              grid.map(item => item)
            }
          </Content>
          <Footer>

              <View m-r-10 center-h>
                <Button small onPress={this.submitPrize.bind(this)}><Text>Submit</Text></Button>
              </View>

          </Footer>
      </Container>
    )
  }
}
function mapStateToProps(state) {
  return {
    luckydraw: state.luckydraw,
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
)(LuckyDrawScreen);
