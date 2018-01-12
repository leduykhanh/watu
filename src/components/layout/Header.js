import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Item, Input, Icon, Button, Text, Badge } from 'native-base';

const HeaderComponent = (props) => {
	return (
	     <Header searchBar rounded>
         {props.back?
         <Button iconRight transparent>
           <Icon onPress={() => Actions.pop()} name='ios-arrow-back' />
         </Button>:<Text></Text>}

	        <Button transparent>
            <Icon onPress={() => Actions.qrscan()} name='ios-qr-scanner' />
          </Button>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent badge vertical>
            <Icon onPress={() => Actions.login()} name='ios-cart' />
          </Button>
        </Header>)
}

export default HeaderComponent;
