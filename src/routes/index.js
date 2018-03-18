import React from 'react'
import {
  Scene,
  Router,
  Overlay,
  Drawer,
  Stack,
  Lightbox,
  Lighbox
} from 'react-native-router-flux'
import {StyleSheet, Platform} from 'react-native'
import DrawerContent from '../components/drawer/DrawerContent'
import MessageBar from '../components/MessageBar'

import {
  LoginScreen,
  DashboardScreen,
  ProfileScreen,
  QrScanScreen,
  PromotionDetailScreen,
  ShopDetailScreen,
  CartScreen,
  ItemDetailScreen,
  SearchScreen,
  NearbyShopScreen,
  PromotionsScreen,
  NotificationScreen,
  LuckyDrawScreen,
  CheckoutShippingScreens,
  CheckoutPaymentScreen,
  CheckoutConfirmScreen
} from '../screens'

import RoutesStyle from '../../survis-themes/styles/Routes'

if (Platform.OS === 'android') {
  RoutesStyle.sceneHeaderStyle.marginLeft = -20
}

const Routes = (props) => {
  const {store} = props;
  return (<Router>
    <Overlay>
      <Stack key='root'>
        <Lightbox key="lightbox">
          <Scene key="dashboard" hideNavBar="hideNavBar" initial="initial" component={DashboardScreen} title="Dashboard" titleStyle={RoutesStyle.sceneHeaderStyle}/>
          <Scene key="login" component={LoginScreen} hideNavBar="hideNavBar"/>
        </Lightbox>
        <Scene key="profile" hideNavBar="hideNavBar" component={ProfileScreen}/>
        <Scene key="qrscan" hideNavBar="hideNavBar" component={QrScanScreen}/>
        <Scene key="p_detail" hideNavBar="hideNavBar" component={PromotionDetailScreen}/>
        <Scene key="s_detail" hideNavBar="hideNavBar" component={ShopDetailScreen}/>
        <Scene key="i_detail" hideNavBar="hideNavBar" component={ItemDetailScreen}/>
        <Scene key="cart" hideNavBar="hideNavBar" component={CartScreen}/>
        <Scene key="checkout_shipping" hideNavBar="hideNavBar" component={CheckoutShippingScreens}/>
        <Scene key="checkout_payment" hideNavBar="hideNavBar" component={CheckoutPaymentScreen}/>
        <Scene key="checkout_confirm" hideNavBar="hideNavBar" component={CheckoutConfirmScreen}/>
        <Scene onExit={() => store.dispatch({type: 'UPDATE_SEARCH', payload: ''})} key="search" hideNavBar="hideNavBar" component={SearchScreen}/>
        <Scene key="new_shop" hideNavBar="hideNavBar" component={NearbyShopScreen}/>
        <Scene key="promotions" hideNavBar="hideNavBar" component={PromotionsScreen}/>
        <Scene key="notifications" hideNavBar="hideNavBar" component={NotificationScreen}/>
        <Scene key="luckydraw" hideNavBar="hideNavBar" component={LuckyDrawScreen}/>
        <Drawer hideNavBar="hideNavBar" hideDrawerButton="hideDrawerButton" key="drawer" drawerPosition='right' contentComponent={DrawerContent}>
          <Scene key="profile" navTransparent="navTransparent" component={ProfileScreen} title="Profile" titleStyle={RoutesStyle.sceneHeaderStyle}/>
          <Scene key="qrscan" hideNavBar="hideNavBar" component={QrScanScreen}/>
        </Drawer>
      </Stack>
      <Scene component={MessageBar}/>
    </Overlay>
  </Router>)
}

export default Routes
