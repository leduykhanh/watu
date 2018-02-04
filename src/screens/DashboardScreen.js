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
import PromotionsComponent from '../components/home/PromotionsComponent';
import * as actions from '../actions/homeActions';
import * as locationActions from '../actions/locationActions';

import Swiper from 'react-native-swiper';
import openGps from '../utils/gpsHelper';
import StarRating from 'react-native-star-rating';

import deviceTokenHelper from '../utils/deviceTokenHelper';

import {getDeviceId} from '../utils/persistStore';
import Image from '../components/common/Image';

const { width } = Dimensions.get('window');
const styles = {
  container: {
    flex: 1
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1,
    height: 240
  }
}

class Dashboard extends Component {
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
      <ScrollView horizontal containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
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
      <PromotionsComponent items={this.props.home.promotions.list} />
          );
  }

  renderHighRatings(){
    return (
      <View style={{height: 240}}>
        <Swiper autoplay height={240} showsPagination={false}
                // onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                loop>
          {this.props.home.highratingshops.list.map(
            (item) => {
              return(
                <View key={item.id} style={{...styles.slide, flex: 1}}>
                  <Image  style={styles.image} source={{uri: item.image}}/>
                  <View style={{backgroundColor: "rgba(0, 0, 0, 0.6)", top: 170, padding: 10,
                    position:'absolute', alignSelf: 'stretch', width}}>
                    <View style={{flex:1,}}>
                      <Text white fs20>{item.name}</Text>
                    </View>
                    <View horizontal space-between>
                      <View horizontal>
                        <View m-r-10>
                          <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={item.totalrate}
                            starSize={15}
                            starColor={'rgb(249,174,24)'}
                            selectedStar={(rating) => console.log(rating)}
                          />
                        </View>
                        <Text white fs12>({item.totalreviews?item.totalreviews:0}) Reviews</Text>
                      </View>
                      <View horizontal>
                        <Icon new-shop name="ios-send" />
                        <Text white fs12 theme onPress={() => openGps(item.latitude, item.longitude)}>Get direction</Text>
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
      <ScrollView containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
        {
          this.props.home.nearbyshops.list.map(
            (item) => <NearbyShopItem location={this.props.location} key={item.id} item={item}/>
          )
        }
        <View horizontal m-r-10 center-h center>
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
          <Content containerStyle={{paddingBottom:100}}>
            {this.renderCategories()}
            {this.renderPromotions()}
            <Text>New shops</Text>
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
)(Dashboard);
