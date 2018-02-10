import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Button,  Text,View, Icon, Badge, StyleProvider, getTheme } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import {connect} from "react-redux";

import FooterStyle from '../../../wat-themes/styles/components/Footer';

const {iconSize, iconColorActive, iconColor} = FooterStyle

class FooterTabs extends Component {

  profileAction(){
    if(this.props.profile.id) Actions.profile();
    else Actions.login();
  }

  render() {

    let currentScene =  Actions.currentScene.toString();
	const getIconStyle = n => ({color: currentScene === n && iconColorActive || iconColor})

    return (
        <Footer>
          <FooterTab>

            <Button active vertical onPress={() => {Actions.replace('dashboard')}} >
              <Icon  name="home" size={iconSize} style={getIconStyle('dashboard')}/>
            </Button>

            <Button vertical onPress={() => Actions.replace('promotions')} >
              <Icon name="flower" size={iconSize} style={getIconStyle('promotions')}/>
            </Button>

            <StyleProvider style={getTheme({ iconFamily: 'Ionicons' })}>
			<Button vertical onPress={() => Actions.replace('new_shop')}>
			  <Icon active name="ios-podium" size={iconSize} style={getIconStyle('new_shop')}/>
            </Button>
			</StyleProvider>

            <Button vertical badge onPress={() => Actions.replace('notifications')}>
              <Badge><Text>1</Text></Badge>
              <Icon name="ios-notifications" size={iconSize} style={getIconStyle('notifications')}/>
            </Button>

            <Button onPress={this.profileAction.bind(this)} vertical active={false}>
              <Icon name="md-person" size={iconSize} style={getIconStyle('profile')}/>
            </Button>

          </FooterTab>
        </Footer>

    );
  }
}
function mapStateToProps(state) {
//   console.log(state)
  return {
    profile: state.profile,
    device: state.device,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions : bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterTabs);
