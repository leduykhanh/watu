import React from 'react';
import {
  Scene,
  Router,
  Overlay,
  Drawer,
  Stack,
  Lightbox,
  Lighbox
} from 'react-native-router-flux';
import {StyleSheet, Platform} from 'react-native';
import DrawerContent from '../components/drawer/DrawerContent';
import MessageBar from '../components/MessageBar';

import {
  LoginScreen, DashboardScreen, ProfileScreen, QrScanScreen, PromotionDetailScreen, ShopDetailScreen, CartScreen,
  ItemDetailScreen, SearchScreen, NearbyShopScreen, PromotionsScreen, NotificationScreen, LuckyDrawScreen,
  CheckoutShippingScreens, CheckoutPaymentScreen, CheckoutConfirmScreen
 } from '../screens';


let styles = {
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
  sceneHeaderStyle: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '400'
  }
};

if (Platform.OS === 'android') {
  styles.sceneHeaderStyle.marginLeft = -20;
}

const Routes = (props) => {
  const { store } = props;
  return (
    <Router>
      <Overlay>
        <Stack key='root'>

          <Lightbox key="lightbox">
            <Scene key="dashboard"  hideNavBar initial component={DashboardScreen} title="Dashboard" titleStyle={styles.sceneHeaderStyle} />
            <Scene key="login"  component={LoginScreen} hideNavBar />

          </Lightbox>
          <Scene key="profile" hideNavBar component={ProfileScreen} />
          <Scene key="qrscan" hideNavBar component={QrScanScreen} />
          <Scene key="p_detail" hideNavBar component={PromotionDetailScreen} />
          <Scene key="s_detail" hideNavBar component={ShopDetailScreen} />
          <Scene key="i_detail" hideNavBar component={ItemDetailScreen} />
          <Scene key="cart" hideNavBar component={CartScreen} />
          <Scene key="checkout_shipping" hideNavBar component={CheckoutShippingScreens} />
          <Scene key="checkout_payment" hideNavBar component={CheckoutPaymentScreen} />
          <Scene key="checkout_confirm" hideNavBar component={CheckoutConfirmScreen} />
          <Scene onExit={() => store.dispatch({type: 'UPDATE_SEARCH',payload: ''})} key="search" hideNavBar component={SearchScreen} />
          <Scene key="new_shop" hideNavBar component={NearbyShopScreen} />
          <Scene key="promotions" hideNavBar component={PromotionsScreen} />
          <Scene key="notifications" hideNavBar component={NotificationScreen} />
          <Scene key="luckydraw" hideNavBar component={LuckyDrawScreen} />
          <Drawer
            hideNavBar
            hideDrawerButton
            key="drawer"
            drawerPosition='right'
            contentComponent={DrawerContent}
          >

            <Scene key="profile" navTransparent component={ProfileScreen} title="Profile" titleStyle={styles.sceneHeaderStyle}/>
            <Scene key="qrscan" hideNavBar component={QrScanScreen} />

          </Drawer>


        </Stack>
        <Scene component={MessageBar} />
      </Overlay>
    </Router>
  )
};

export default Routes;
