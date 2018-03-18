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
import {Alert, Image, ScrollView} from 'react-native'
import {Actions} from "react-native-router-flux"
import Dash from 'react-native-dash'

import LoginScreenStyle from '../../survis-themes/styles/screens/LoginScreen'

import Header from '../components/layout/Header'
import {ImageBackground} from '../components/common'
import * as actions from "../actions/prizeActions"
import * as PrizeApi from '../api/PrizeApi'
import LuckyDrawItem from "../components/luckydraw/LuckyDrawItem"
import {mapStateToProps, mapDispatchToProps} from '../utils/reduxHelper'

class LuckyDrawScreen extends Component {
  state = {
    items: [],
    selectedId: null,
    loading: true,
    loaded: false
  }
  componentWillMount() {
    PrizeApi
      .getPrize()
      .then(response => {
        const {data} = response || {};
        const {results} = data || [];
        if (results.length > 0) 
          this.setState({items: results});
        }
      )
      .catch(err => console.log(err));
  }

  submitPrize() {
    Actions.reset('lightbox');
  }

  render() {
    const grid = [];
    const {items} = this.state;
    for (let i = 0; i < items.length; i = i + 2) {
      grid.push(<View horizontal="horizontal">
        <LuckyDrawItem selected={this.state.selectedId == items[i].id} onPress={() => this.setState({selectedId: items[i].id})} item={items[i]}/>
        <LuckyDrawItem selected={this.state.selectedId == items[i + 1].id} onPress={() => this.setState({
            selectedId: items[i + 1].id
          })} item={items[i + 1]}/>
      </View>)
    }
    return (<Container>
      <Header/>
      <Content>
        <View horizontal="horizontal" grey="grey" p-16="p-16">
          <Text bold="bold" fs12="fs12">Someline about Lucky Draw</Text>
        </View>
        <View p-16="p-16">
          <Text fs12="fs12">
            Gourmet cooking is a style of food preparation that deals with the finest and freshest lorem ipsum dolos possible ingredients.
          </Text>
        </View>
        <Dash/> {grid.map(item => item)}
      </Content>
      <Footer>

        <View m-r-10="m-r-10" center-h="center-h">
          <Button small="small" onPress={this
              .submitPrize
              .bind(this)}>
            <Text>Submit</Text>
          </Button>
        </View>

      </Footer>
    </Container>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps({actions}))(LuckyDrawScreen)
