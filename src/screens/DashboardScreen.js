import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, List } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';

import { ScrollView, TouchableHighlight, Image, Dimensions } from 'react-native';

import { BigButton, ImageBackground } from '../components/common';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NewShopItem from '../components/home/NewShopItem';
import * as actions from '../actions/homeActions';

import Swiper from 'react-native-swiper'


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
    flex: 1
  }
}


class Dashboard extends Component {
  
  async componentDidMount() {
    console.log(this.props.actions);
    // const {sendToken, updateToken} = this.props.deviceActions;
    // //const {token, deviceId} = this.props.device;
    // const { isProfileLoadCalled, selectedSubscription } = this.props.profile;
    // const deviceId = await getDeviceId();
    //
    // deviceTokenHelper(token => {
    //   deviceId ? updateToken(token, deviceId) : sendToken(token);
    // });
    this.props.actions.getPromotions();
    this.props.actions.getNewshops();
    this.props.actions.getCategories();
  }
  
  // static componentWillUpdate(nextProps) {
    
    // if (nextProps.user.rehydated && (!nextProps.user.oidc || !nextProps.user.oidc.access_token)) {
    //   Actions.popTo('login');
    // }
    
  // }
  

  render() {
    //console.log(this.props.home.categories);
    return (
      <Container>
          <Header />
          <Content containerStyle={{paddingBottom:100}}>
            <View style={{height: 300}}>
              <Swiper height={240} showsPagination={false}
                      onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                      loop>
                {this.props.home.categories.list.map(
                  (item) => {
                    <View key={item.id} style={styles.slide}>
                      <Image style={{width: 100, height:100}} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    </View>
                  }
                )
                }
              </Swiper>
            </View>
            <View style={{height: 300}}>
              <Swiper autoplay height={240} showsPagination={false}
                      onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                       loop>
                {this.props.home.promotions.list.map(
                  (item) => {
                    const {toptext_color, toptext_fontsize, toptext, toptext_bgcolor} = item;
                    const topTexts = toptext.split(" ");
                    return(
                    <View key={item.id} style={styles.slide}>
                      <Image resizeMode='stretch' style={styles.image} source={{uri: item.image}}/>
                      <View style={{backgroundColor: "rgba(0, 0, 0, 0.5)", top: -70, padding: 10, alignSelf: 'stretch', width:'auto'}}>
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
                    </View>)
                  }
                )}

              </Swiper>
            </View>
            <Text>New shops</Text>
            <ScrollView horizontal containerStyle={{width: 142, height: 542, flex:1}}>
            {
              this.props.home.newShops.list.map(
                (item) => <NewShopItem key={item.id} item={item}/>
              )
            }
          </ScrollView>

            <Text>dad</Text>

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