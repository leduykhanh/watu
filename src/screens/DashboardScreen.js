import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';

import { ScrollView, TouchableHighlight, Image } from 'react-native';


import * as actions from '../actions/profileActions';
import { BigButton, ImageBackground } from '../components/common';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ProfileSummary from '../components/profile/ProfileSummary';
import * as deviceActions from '../actions/deviceActions';

import {Section} from '../components/common';
import { NUMBER_ACTIVITIES_ON_DASHBOARD } from '../constants';
import styles from './styles';

import deviceTokenHelper from '../utils/deviceTokenHelper';

import {getDeviceId} from '../utils/persistStore';


class Dashboard extends Component {
  
  async componentDidMount() {
    const {sendToken, updateToken} = this.props.deviceActions;
    //const {token, deviceId} = this.props.device;
    const { isProfileLoadCalled, selectedSubscription } = this.props.profile;
    const deviceId = await getDeviceId();
    
    deviceTokenHelper(token => {
      deviceId ? updateToken(token, deviceId) : sendToken(token);
    });
    
  }
  
  // static componentWillUpdate(nextProps) {
    
    // if (nextProps.user.rehydated && (!nextProps.user.oidc || !nextProps.user.oidc.access_token)) {
    //   Actions.popTo('login');
    // }
    
  // }
  

  render() {


    
    return (
      <Container>
        
        <ImageBackground>
          <Header />
          <Content>
            
            <Text>Home</Text>

          </Content>
          
          <Footer />
          
        </ImageBackground>
        
        
        
      </Container>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    user: state.user,
    profile: state.profile,
    device: state.device
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