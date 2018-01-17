import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Button,  Text,View, Icon, Badge } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import {connect} from "react-redux";

class FooterTabs extends Component {

  profileAction(){
    if(this.props.profile.id) Actions.profile();
    else Actions.login();
  }

  render() {

    let currentScene =  Actions.currentScene.toString();

    return (
        <Footer>
          <FooterTab>

            <Button active vertical onPress={() => {Actions.replace('dashboard')}} active={currentScene === '_dashboard'}>
              <Icon  name="home" size={22} style={{color: currentScene === 'dashboard'? "rgb(249,174,24)" : "grey"}}/>
            </Button>

            <Button vertical onPress={() => Actions.replace('wallet')} active={currentScene === '_wallet'} >
              <Icon name="ios-planet" size={22} />
            </Button>

            <Button vertical onPress={() => Actions.replace('transaction_history')}>
              <Icon active name="ios-podium" size={22} />
            </Button>
            <Button vertical badge onPress={() => Actions.replace('notifications')}>
              <Badge><Text>2</Text></Badge>
              <Icon name="ios-notifications" size={22} />
            </Button>

            <Button onPress={this.profileAction.bind(this)} vertical active={false} >
              <Icon name="md-person" style={{color: currentScene === 'profile'? "rgb(249,174,24)" : "grey"}} size={22}/>
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
