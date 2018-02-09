import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Item, Input, Icon, Button, Text, Badge } from 'native-base';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/homeActions';
import * as searchAction from '../../actions/searchAction';

class HeaderComponent extends Component  {

  scanAction(){
    if(this.props.profile.id) Actions.qrscan();
    else Actions.login();
  }

  cartAction(){
    if(this.props.profile.id) Actions.cart();
    else Actions.login();
  }

  searchAction(q){
    let currentScene =  Actions.currentScene.toString();
    if (currentScene !== 'search') Actions.search();
    this.props.actions.getNearbyShop(q);
  }

  updateSearch(q){
    this.props.searchAction.updateSearch(q)
  }

  render() {
    const cartCount = this.props.cart.count;
    // console.log(this.props.cart)
    return (
      <Header searchBar rounded>
        {this.props.back ?
          <Button iconRight transparent onPress={() => Actions.pop()} >
            <Icon name='ios-arrow-back'/>
          </Button> : <Text></Text>}

        <Button transparent onPress={this.scanAction.bind(this)}>
          <Icon  name='ios-qr-scanner'/>
        </Button>
        <Item>
          <Icon transparent name="ios-search"/>
          <Input transparent placeholder="Search"
                value={this.props.search.searchString}
                 onChangeText={(q) => this.updateSearch(q)}
                 onSubmitEditing={(q) => this.searchAction(q)}
          />
        </Item>
        <Button  transparent onPress={this.cartAction.bind(this)}>
          {cartCount > 0?
          <Badge style={{
            position: 'absolute',
            top: 5,
            alignSelf: "center",
            left: 10,
            zIndex: 99,
            height: 18,
            width:18,
            padding: 0,
            paddingHorizontal: 0
          }}>

            <Text style={{padding:0, top: 1, left: 3, margin: 0,fontSize: 11,position: 'absolute',
              fontWeight: "600" ,zIndex: 100, lineHeight: 14}}>{cartCount}</Text>
          </Badge>
            : null}
          <Icon  name='ios-cart'/>
        </Button>
      </Header>)
  }
}

function mapStateToProps(state) {
//   console.log(state)
  return {
    profile: state.profile,
    device: state.device,
    cart: state.cart,
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(actions, dispatch),
    searchAction: bindActionCreators(searchAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
// export default HeaderComponent;
