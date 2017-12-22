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
  LoginScreen, DashboardScreen, ProfileScreen
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
          <Scene key="dashboard"  hideNavBar initial component={DashboardScreen} title="Dashboard" titleStyle={styles.sceneHeaderStyle} />
          <Lightbox key="lightbox">

            <Scene key="login"  component={LoginScreen} hideNavBar />

          </Lightbox>
          <Drawer
            hideNavBar
            hideDrawerButton
            key="drawer"
            drawerPosition='right'
            contentComponent={DrawerContent}

            >
            
            <Scene key="profile" navTransparent component={ProfileScreen} title="Profile" titleStyle={styles.sceneHeaderStyle}/>

          </Drawer>
 

        </Stack>
        <Scene component={MessageBar} />
      </Overlay>
    </Router>
  )
};

export default Routes;