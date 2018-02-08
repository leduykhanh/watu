import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, List, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';

import { ScrollView, TouchableOpacity, Dimensions, Linking, Alert, Platform } from 'react-native';

import { BigButton, ImageBackground } from '../components/common';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Categories from '../components/home/Categories';
import NewShopItem from '../components/home/NewShopItem';
import NearbyShopItem from '../components/home/NearbyShopItem';
import Promotions from '../components/home/Promotions';
import * as actions from '../actions/homeActions';
import * as locationActions from '../actions/locationActions';

import Swiper from 'react-native-swiper';
import openGps from '../utils/gpsHelper';
import StarRating from 'react-native-star-rating';

import deviceTokenHelper from '../utils/deviceTokenHelper';

import {getDeviceId} from '../utils/persistStore';
import Image from '../components/common/Image';

import itemHelper from '../utils/itemHelper';
import DashboardScreenStyle from '../../wat-themes/styles/DashboardScreen';

class DashboardScreen extends Component {
  state = {
      highratingshopsPage: 0,
      nearbyshopsPage: 0,
  }

  loadMoreHighratingshops() {
    const { highratingshopsPage } = this.state;
    this.setState({
      highratingshopsPage: highratingshopsPage + 1
    });
    this.props.actions.getHighRatingsShop(highratingshopsPage + 1)
  }

  loadMoreNearByshops() {
    const { nearbyshopsPage } = this.state;
    this.setState({
      nearbyshopsPage: nearbyshopsPage + 1
    });
    this.props.actions.getNearbyShop(null, null, nearbyshopsPage + 1)
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

  // static componentWillUpdate(nextProps) {

    // if (nextProps.user.rehydated && (!nextProps.user.oidc || !nextProps.user.oidc.access_token)) {
    //   Actions.popTo('login');
    // }

  // }


  renderCategories() {
    return <Categories actions={this.props.actions} items={this.props.home.categories.list}/>
  }
  renderNewShops(){
    return (
      <ScrollView horizontal containerStyle={DashboardScreenStyle.new_shops}>
        {
          this.props.home.newShops.list.map(
            (item) => <NewShopItem location={this.props.location} key={item.id} item={item}/>
          )
        }
      </ScrollView>
    );
  }

  renderPromotions(){
    return (
      <Promotions items={this.props.home.promotions.list}/>
	);
  }

  renderHighRatings() {
    return (
      <View style={DashboardScreenStyle.highrating_shops.container}>
        <Swiper autoplay height={DashboardScreenStyle.highrating_shops.container.height} showsPagination={false}
                // onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                loop>
          {this.props.home.highratingshops.list.map(
            (item) => {
			  const {id, name, price, description, image, totalrate, totalreviews} = itemHelper(item)
              return(
                <View key={id} style={DashboardScreenStyle.highrating_shops.slice}>
                  <Image  style={DashboardScreenStyle.highrating_shops.image} source={{uri: image}}/>
                  <View style={DashboardScreenStyle.highrating_shops.info}>
                    <View style={{flex:1}}>
                      <Text white fs20>{name}</Text>
                    </View>
                    <View horizontal space-between>
                      <View horizontal>
                        <View m-r-10>
                          <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={totalrate}
                            starSize={15}
                            starColor={'rgb(249,174,24)'}
                            selectedStar={(rating) => console.log(rating)}
                          />
                        </View>
                        <Text white fs12>({totalreviews}) Reviews</Text>
                      </View>
                      <View horizontal>
                        <Icon new-shop name="ios-send" />
                        <Text white fs12 theme onPress={() => openGps(latitude, longitude)}>Get direction</Text>
                      </View>
                    </View>
                  </View>
                </View>)
            }
          )}

        </Swiper>
      </View>
    );
  }

  renderNearbyShops(){
    // console.log(this.props.home.nearbyshops.list.length)
    return (
      <ScrollView containerStyle={DashboardScreenStyle.nearby_shops.container}>
        {
          this.props.home.nearbyshops.list.map(
            (item) => <NearbyShopItem location={this.props.location} key={item.id} item={item}/>
          )
        }
        <View horizontal m-t-10 m-r-10 center-h center>
          <Button small onPress={this.loadMoreNearByshops.bind(this)}><Text>Load more</Text></Button>
        </View>
      </ScrollView>
    );
  }

  render() {
    // console.log(this.props.home.categories.list);
    return (
      <Container>
          <Header />
          <Content containerStyle={DashboardScreenStyle.container}>
            {this.renderCategories()}
            {this.renderPromotions()}
            <Text style={DashboardScreenStyle.new_shops_text}>New shops</Text>
            {this.renderNewShops()}
            {this.renderHighRatings()}
            {this.renderNearbyShops()}
          </Content>
          <Footer profile={this.props.profile}/>
      </Container>
    );
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
)(DashboardScreen);
