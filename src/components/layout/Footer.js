import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Button,  Text,View, Icon, Badge, StyleProvider, getTheme } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import {connect} from "react-redux";

import FooterStyle from '../../../survis-themes/styles/components/Footer';

const {iconSize, iconColorActive, iconColor} = FooterStyle

class FooterTabs extends Component {

  profileAction(){
    if(this.props.profile.id) Actions.profile();
    else Actions.login();
  }
  getIconStyle = (n) => ({color: Actions.currentScene.toString() === n && iconColorActive || iconColor})
  renderTab(screen, icon, text, badge, onPress) {
	if (badge) return <Button vertical badge onPress={onPress || (e => Actions.replace(screen))}>
  	  <Badge><Text>{badge}</Text></Badge>
  	  <Icon name={icon} size={iconSize} style={this.getIconStyle(screen)}/>
  	  <Text footer>{text}</Text>
  	</Button>
  	return <Button vertical onPress={onPress || (e => Actions.replace(screen))}>
  	  <Icon name={icon} size={iconSize} style={this.getIconStyle(screen)}/>
  	  <Text footer>{text}</Text>
  	</Button>
  }
  render() {
    return (
        <Footer style={FooterStyle.container}>
          <FooterTab>
			  {this.renderTab('dashboard', 'home', 'Home', false)}
			  {this.renderTab('promotions', 'flower', 'Hot', false)}
			  {this.renderTab('new_shop', 'ios-pin-outline', 'Nearby', false)}
			  {this.renderTab('notifications', 'ios-notifications', 'Msg', this.props.notification.count)}
			  {this.renderTab('profile', 'md-person', 'Me', false, this.profileAction.bind(this))}
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
    notification: state.notification,
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
