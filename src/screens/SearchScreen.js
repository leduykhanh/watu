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
  Image,
  Dimensions,
  Linking,
  Alert,
  Platform
} from 'react-native'
import StarRating from 'react-native-star-rating'
import InfiniteScroll from 'react-native-infinite-scroll'
import Swiper from 'react-native-swiper'

import {BigButton, ImageBackground} from '../components/common'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Categories from '../components/home/Categories'
import NewShopItem from '../components/home/NewShopItem'
import NearbyShopItem from '../components/home/NearbyShopItem'
import * as actions from '../actions/homeActions'
import * as locationActions from '../actions/locationActions'
import openGps from '../utils/gpsHelper'
import deviceTokenHelper from '../utils/deviceTokenHelper'
import {getDeviceId} from '../utils/persistStore'
import {mapStateToProps, mapDispatchToProps} from '../utils/reduxHelper'

const {width} = Dimensions.get('window')

class SearchScreen extends Component {
  state = {
    highratingshopsPage: 0,
    nearbyshopsPage: 0
  }

  loadMoreNearByshops() {
    const {nearbyshopsPage} = this.state;
    this.setState({
      nearbyshopsPage: nearbyshopsPage + 1
    });
    this
      .props
      .actions
      .getNearbyShop({
        page: nearbyshopsPage + 1
      });
  }

  render() {
    return (<Container>
      <Header/>
      <InfiniteScroll horizontal={false} onLoadMoreAsync={this
          .loadMoreNearByshops
          .bind(this)} distanceFromEnd={10} containerStyle={{
          paddingBottom: 100
        }}>
        {
          this.props.home.nearbyshops.list.length > 0
            ? <ScrollView containerStyle={{
                  width: 142,
                  height: 542,
                  flex: 1,
                  backgroundColor: 'grey'
                }}>
                {
                  this
                    .props
                    .home
                    .nearbyshops
                    .list
                    .map((item) => <NearbyShopItem location={this.props.location} key={item.id} item={item}/>)
                }
              </ScrollView>
            : <Text theme="theme">No items found</Text>
        }
      </InfiniteScroll>
      <Footer profile={this.props.profile}/>
    </Container>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps(actions, locationActions))(SearchScreen)
