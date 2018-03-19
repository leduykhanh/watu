import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, List, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import Swiper from 'react-native-swiper';
import { RefreshControl, ListView, ScrollView, TouchableOpacity, Dimensions, Linking, Alert, Platform } from 'react-native';
import InfiniteScroll from 'react-native-infinite-scroll';

import { BigButton, ImageBackground } from '../components/common';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Categories from '../components/home/Categories';
import NewShopItem from '../components/home/NewShopItem';
import NearbyShopItem from '../components/home/NearbyShopItem';
import Promotions from '../components/home/Promotions';
import HighRatingShops from '../components/home/HighRatingShops';

import * as actions from '../actions/homeActions';
import * as locationActions from '../actions/locationActions';

import openGps from '../utils/gpsHelper';

import deviceTokenHelper from '../utils/deviceTokenHelper';

import {getDeviceId} from '../utils/persistStore';
import Image from '../components/common/Image';

import itemHelper, {substr} from '../utils/itemHelper';
import DashboardScreenStyle from '../../wat-themes/styles/screens/DashboardScreen';

class DashboardScreen extends Component {
  state = {
      highratingshopsPage: 0,
      autopage: 0,
  }

  loadMoreHighratingshops() {
    const { highratingshopsPage } = this.state;
    this.setState({
      highratingshopsPage: highratingshopsPage + 1
    });
    this.props.actions.getHighRatingsShop(highratingshopsPage + 1)
  }

  loadMoreShops() {
    const { autopage } = this.state;
    this.setState({
      autopage: autopage + 1
    });
    this.props.actions.getNearbyShop(null, null, autopage + 1)
  }

  async componentDidMount() {
    // const {sendToken, updateToken} = this.props.deviceActions;
    // //const {token, deviceId} = this.props.device;
    // const { isProfileLoadCalled, selectedSubscription } = this.props.profile;
    // const deviceId = await getDeviceId();
    //
    // deviceTokenHelper(token => {
    //   deviceId ? updateToken(token, deviceId) : sendToken(token);
    // });
    const { highratingshopsPage } = this.state;
    this.props.actions.getCategories();
    this.props.actions.getPromotions();
    this.props.actions.getNewshops();
    this.props.actions.getHighRatingsShop(highratingshopsPage);
    this.props.actions.getNearbyShop();
    navigator.geolocation.getCurrentPosition(
      (position) => {
          const { latitude, longitude } = position.coords;
          this.props.locationActions.updateLocation({latitude, longitude});
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

  }

  renderCategories() {
    return <Categories actions={this.props.actions} items={this.props.home.categories.list}/>
  }
  renderNewShops(){
	  return <View style={DashboardScreenStyle.new_shops}>
		  <Text style={DashboardScreenStyle.new_shops_text}>New shops</Text>
		  <ScrollView horizontal>
			  {this.props.home.newShops.list.map(item => <NewShopItem location={this.props.location} key={item.id} item={item}/>)}
		  </ScrollView>
	  </View>
  }

  renderPromotions(){
    return <Promotions items={this.props.home.promotions.list}/>
  }

  renderHighRatings() {
	  return <HighRatingShops items={this.props.home.highratingshops.list}/>
  }

  renderRow(data) {
    return (
      <NearbyShopItem location={this.props.location} key={data.id} item={data}/>
    )
  }
  renderNearbyShops() {
    return (
      <List
        renderRow={data => this.renderRow(data)}
        dataArray={this.props.home.nearbyshops.list}
        canLoadMore={true}
        />
    )
  }

  render() {
    return (
      <Container>
          <Header />
          <InfiniteScroll
            horizontal={false}
            onLoadMoreAsync={this.loadMoreShops.bind(this)}
            distanceFromEnd={10}
          >
            {this.renderCategories()}
            {this.renderPromotions()}
            {this.renderNewShops()}
            {this.renderHighRatings()}
            {this.renderNearbyShops()}
          </InfiniteScroll>
          <Footer profile={this.props.profile}/>
      </Container>
    );
  }

}

function mapStateToProps(state) {
  return {
    user: state.user,
    profile: state.profile,
    device: state.device,
    home: state.home,
    location: state.location,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(actions, dispatch),
    locationActions : bindActionCreators(locationActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);
