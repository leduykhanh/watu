import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, List, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';

import { ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert, Platform } from 'react-native';

import { BigButton, ImageBackground } from '../components/common';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Categories from '../components/home/Categories';
import NewShopItem from '../components/home/NewShopItem';
import NearbyShopItem from '../components/home/NearbyShopItem';
import * as actions from '../actions/homeActions';
import * as locationActions from '../actions/locationActions';

import Swiper from 'react-native-swiper';
import openGps from '../utils/gpsHelper';
import StarRating from 'react-native-star-rating';

import deviceTokenHelper from '../utils/deviceTokenHelper';
import InfiniteScroll from 'react-native-infinite-scroll';

import {getDeviceId} from '../utils/persistStore';
const { width } = Dimensions.get('window');

class SearchScreen extends Component {

  state = {
      highratingshopsPage: 0,
      nearbyshopsPage: 0,
  }
  
  loadMoreNearByshops() {
    const { nearbyshopsPage } = this.state;
    this.setState({
      nearbyshopsPage: nearbyshopsPage + 1
    });
    this.props.actions.getNearbyShop(null, null, nearbyshopsPage + 1)
  }

  render(){
    return (
      <Container>
        <Header/>
        <InfiniteScroll
          horizontal={false}
          onLoadMoreAsync={this.loadMoreNearByshops.bind(this)}
          distanceFromEnd={10}
         containerStyle={{paddingBottom:100}}>
          {/*<Text bold fs20>Nearby shops</Text>*/}
            {
              this.props.home.nearbyshops.list.length > 0 ?
              <ScrollView
                containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
              {
                this.props.home.nearbyshops.list.map(
                  (item) => <NearbyShopItem location={this.props.location} key={item.id} item={item}/>
                )
              }
            </ScrollView>
              : <Text theme>No items found</Text>
            }
        </InfiniteScroll>

        <Footer profile={this.props.profile}/>

      </Container>
    )
  }
}
function mapStateToProps(state) {
//   console.log(state)
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
)(SearchScreen);
