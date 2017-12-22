import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

const HeaderComponent = (props) => {
	return (
	     <Header searchBar rounded>
	     
	     <Button transparent>
            <Icon name='ios-qr-scanner' />
          </Button>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Icon name='ios-locate-outline' />
          </Button>
          <Button transparent>
            <Icon name='ios-cart' />
          </Button>
        </Header>)
}

export default HeaderComponent;