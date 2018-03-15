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
  List,
  Icon
} from 'native-base'
import {Actions} from 'react-native-router-flux'
import {
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
  Alert,
  Platform
} from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

import * as actions from '../actions/homeActions'
import * as locationActions from '../actions/locationActions'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import NearbyShopItem from '../components/home/NearbyShopItem'
import {mapStateToProps, mapDispatchToProps} from '../utils/reduxHelper'

class NearbyShopScreen extends Component {
  state = {
    autopage: 0
  }
  renderRow(item) {
    return <NearbyShopItem location={this.props.location} key={item.id} item={item}/>
  }
  renderList() {
    return <List renderRow={data => this.renderRow(data)} dataArray={this.props.home.nearbyshops.list} canLoadMore={true}/>
  }
  loadMoreShops() {
    const {autopage} = this
      .state
      this
      .setState({
        autopage: autopage + 1
      })
    this
      .props
      .actions
      .getNearbyShop({
        page: autopage + 1
      })
  }
  render() {
    return <Container>
      <Header/>
      <Content>
        <InfiniteScroll horizontal={false} onLoadMoreAsync={this
            .loadMoreShops
            .bind(this)} distanceFromEnd={10}>
          {this.renderList()}
        </InfiniteScroll>
      </Content>
      <Footer profile={this.props.profile}/>
    </Container>
  }
}

export default connect(mapStateToProps, mapDispatchToProps({actions, locationActions}))(NearbyShopScreen)
