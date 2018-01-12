import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Button,  Text,View, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';

export default class FooterTabs extends Component {

  render() {

    let currentScene =  Actions.currentScene.toString();

    return (
        <Footer>
          <FooterTab>

            <Button vertical onPress={() => {Actions.replace('dashboard')}} active={currentScene === '_dashboard'}>
              <Icon active name="home" size={22} color={currentScene === '_dashboard'? "#4740c7" : "grey"}/>
            </Button>

            <Button vertical onPress={() => Actions.replace('wallet')} active={currentScene === '_wallet'} >
              <Icon name="ios-planet" size={22} color={currentScene === '_wallet'? "#4740c7" : "grey"}/>
            </Button>

            <Button vertical active={currentScene === '_transaction_history'} onPress={() => Actions.replace('transaction_history')}>
              <Icon active name="ios-podium" size={22} color={currentScene === '_transaction_history'? "#4740c7" : "grey"}/>
            </Button>

            <Button onPress={() => Actions.profile()} vertical active={false} >
              <Icon name="md-person" size={22}/>
            </Button>

          </FooterTab>
        </Footer>

    );
  }
}
