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
  LoginScreen, DashboardScreen, ProfileScreen, QrScanScreen, PromotionDetailScreen, ShopDetailScreen, CartScreen, ItemDetailScreen
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

const Routes = () => {

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
