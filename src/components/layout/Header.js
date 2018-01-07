import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Item, Input, Icon, Button, Text, Badge } from 'native-base';

const HeaderComponent = (props) => {
	return (
	     <Header searchBar rounded>
	     
	        <Button transparent>
            <Icon onPress={() => Actions.replace('qrscan')} name='ios-qr-scanner' />
          </Button>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent badge vertical>
            <Icon name='ios-cart' />
          </Button>
        </Header>)
}

export default HeaderComponent;