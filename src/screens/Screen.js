import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'

import * as actions from '../actions/homeActions'
import * as locationActions from '../actions/locationActions'
import {BigButton, ImageBackground} from '../components/common'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Categories from '../components/home/Categories'
import NewShopItem from '../components/home/NewShopItem'
import NearbyShopItem from '../components/home/NearbyShopItem'
import Promotions from '../components/home/Promotions'
import HighRatingShops from '../components/home/HighRatingShops'
import Image from '../components/common/Image'
import openGps from '../utils/gpsHelper'
import deviceTokenHelper from '../utils/deviceTokenHelper'
import {getDeviceId} from '../utils/persistStore'
import itemHelper, {substr} from '../utils/itemHelper'
import {mapStateToProps, mapDispatchToProps} from '../utils/reduxHelper'

export default class Screen extends Component {
  async componentDidMount() {
    navigator
      .geolocation
      .getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        this
          .props
          .locationActions
          .updateLocation({latitude, longitude})
      }, (error) => this.setState({error: error.message}), {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      })
  }
}
