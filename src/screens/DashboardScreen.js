import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, List, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';

import { ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

import { BigButton, ImageBackground } from '../components/common';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Categories from '../components/home/Categories';
import NewShopItem from '../components/home/NewShopItem';
import NearbyShopItem from '../components/home/NearbyShopItem';
import * as actions from '../actions/homeActions';

import Swiper from 'react-native-swiper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import StarRating from 'react-native-star-rating';

import deviceTokenHelper from '../utils/deviceTokenHelper';

import {getDeviceId} from '../utils/persistStore';
const { width } = Dimensions.get('window')
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

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
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

  async componentDidMount() {
    // const {sendToken, updateToken} = this.props.deviceActions;
    // //const {token, deviceId} = this.props.device;
    // const { isProfileLoadCalled, selectedSubscription } = this.props.profile;
    // const deviceId = await getDeviceId();
    //
    // deviceTokenHelper(token => {
    //   deviceId ? updateToken(token, deviceId) : sendToken(token);
    // });
    this.props.actions.getCategories();
    this.props.actions.getPromotions();
    this.props.actions.getNewshops();
    this.props.actions.getHighRatingsShop();
    this.props.actions.getNearbyShop()
  }

  // static componentWillUpdate(nextProps) {

    // if (nextProps.user.rehydated && (!nextProps.user.oidc || !nextProps.user.oidc.access_token)) {
    //   Actions.popTo('login');
    // }

  // }
  renderCategories() {
    return <Categories items={this.props.home.categories.list}/>
  }
  renderNewShops(){
    return (
      <ScrollView horizontal containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
        {
          this.props.home.newShops.list.map(
            (item) => <NewShopItem key={item.id} item={item}/>
          )
        }
      </ScrollView>
    );
  }
  renderPromotions(){
    return (
      <View style={{height: 240}}>
        <Swiper autoplay height={240} showsPagination={false}
                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                loop>
          {this.props.home.promotions.list.map(
            (item) => {
              const {toptext_color, toptext_fontsize, toptext, toptext_bgcolor} = item;
              const topTexts = toptext.split(" ");
              return(
                <TouchableOpacity onPress={Actions.detail}>
                  <View key={item.id} style={styles.slide}>
                    <Image  style={styles.image} source={{uri: item.image}}/>
                    <View style={{backgroundColor: "rgba(0, 0, 0, 0.6)", top: 175, padding: 10,
                      position:'absolute', alignSelf: 'stretch', width:'auto'}}>
                      <Text white fs20>{item.bigtitle}</Text>
                      <Text white fs12>{item.smalltitle}</Text>
                    </View>
                    <View style={{position:'absolute', top: 2, backgroundColor: toptext_bgcolor, right: 16, padding: 6,
                      borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                      {topTexts.map(t =>
                        <Text key={t} style={{color:toptext_color, fontSize:parseInt(toptext_fontsize),
                          backgroundColor: toptext_bgcolor}}>{t}</Text>
                      )}

                    </View>
                  </View>
                </TouchableOpacity>  )
            }
          )}

        </Swiper>
      </View>
    );
  }
  renderHighRatings(){
    return (
      <View style={{height: 240}}>
        <Swiper autoplay height={240} showsPagination={false}
                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                loop>
          {this.props.home.highratingshops.list.map(
            (item) => {
              return(
                <View key={item.id} style={styles.slide}>
                  <Image  style={styles.image} source={{uri: item.image}}/>
                  <View style={{backgroundColor: "rgba(0, 0, 0, 0.6)", top: 150, padding: 10,
                    position:'absolute', alignSelf: 'stretch', width}}>
                    <Text white fs20>{item.name}</Text>
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
                        <Text white fs12 theme>Get direction</Text>
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
    return (
      <ScrollView containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
        {
          this.props.home.highratingshops.list.map(
            (item) => <NearbyShopItem key={item.id} item={item}/>
          )
        }
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

          <Footer />

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
    home: state.home
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
)(Dashboard);
