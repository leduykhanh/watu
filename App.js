import React, {Component} from 'react'
import {AsyncStorage, Platform, Linking, Image} from 'react-native'
import {Provider} from 'react-redux'
import {
  StyleProvider,
  Spinner,
  View,
  Text,
  Container,
  Content
} from 'native-base'
// import VersionCheck from 'react-native-version-check'
import OneSignal from 'react-native-onesignal'

import configureStore from './src/store/configureStore'
import {getLookupData} from './src/actions/lookupActions'

import getTheme from './survis-themes/components'
import Routes from './src/routes'
import {refreshToken} from './src/api/UserApi'
import * as constants from './src/constants'
import {GradientButton} from './src/components/common'
import serverCall from './src/utils/serverCall'
import {getProfile, setProfile} from './src/utils/persistStore'
import {requestToken} from './src/utils/deviceTokenHelper'

const platform = Platform.OS

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoading: false,
      isReady: false,
      isRefreshingToken: true,
      needUpdate: false,
      version: '',
      store: null
    }
  }

  onReceived(notification) {
    console.log("Notification received: ", notification)
  }

  async componentWillMount() {
    OneSignal.addEventListener('received', this.onReceived)
    if (typeof Expo !== 'undefined') {
      await Expo
        .Font
        .loadAsync({ //
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
          FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf"),
          MaterialCommunityIcons: require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf")
        })
    }
    // VersionCheck.setAppID("app_id")                     Your App ID for App Store URL
    // VersionCheck.setAppName("app_name")

    // let currentVersion = VersionCheck.getCurrentVersion()
    // let latestVersion = await VersionCheck.getLatestVersion()
    // alert(currentVersion + ',' + latestVersion)
    // if(platform === 'android' || platform === 'ios' ){
    //   let needUpdate = await VersionCheck.needUpdate()
    //   let {isNeeded} = needUpdate
    //   if (isNeeded)
    //     this.setState({needUpdate: true, version: latestVersion})
    // }

    try {
      this.state.store = await configureStore()
      this.setState({isReady: true})
    } catch (error) {
      console.log(error)
    }
    // getLookupData()(this.state.store.dispatch)
    const profile = JSON.parse(await getProfile())
    if (profile && profile.token) {
      serverCall
        .defaults
        .headers['token'] = profile
        .token
        this
        .state
        .store
        .dispatch({type: constants.STATE_GET_PROFILE_SUCCESS, payload: profile})
    }
  }

  clearState() {
    this.setState({isRefreshingToken: false})

    AsyncStorage.clear()
  }

  async openUpdate() {
    // Linking.openURL(await VersionCheck.getStoreUrl())
  }
  componentDidMount() {
    //   Linking.getInitialURL().then((url) => {
    //       if (url) {
    //           console.log('Initial url is: ' + url)
    //       }
    //   }).catch(err => console.error('An error occurred', err))
    // requestToken()
  }

  renderNewVersion() {
    return (<Container style={{
        backgroundColor: 'white'
      }}>
      <Content contentContainerStyle={{
          paddingTop: 100
        }}>
        <View heavyMargin="heavyMargin" center="center">
          <Text big-header="big-header">New Version</Text>
          <Text subtitle-active="subtitle-active">{`v ${this.state.version}`}</Text>
        </View>
        <View heavyMargin="heavyMargin" style={{
            marginTop: 20
          }}>
          <Text subtitle-inactive="subtitle-inactive">The current version of this application is no longer supported.</Text>
        </View>
        <View center="center" style={{
            marginTop: -30
          }}>
          <Image source={require('./assets/images/update_app.png')}/>
        </View>
        <View heavyMargin="heavyMargin">
          <GradientButton onPress={this.openUpdate} isLoading={false} text={'Update'}/>
        </View>
      </Content>
    </Container>)
  }
  render() {
    if (!this.state.isReady) {
      return <Spinner/>
    }
    return (<StyleProvider style={getTheme()}>
      <Provider store={this.state.store}>
        <Routes store={this.state.store}/>
      </Provider>
    </StyleProvider>)
  }
}
