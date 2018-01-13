import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Item, Input, Icon, Button, Text, Badge } from 'native-base';
import {connect} from "react-redux";

class HeaderComponent extends Component  {

  scanAction(){
    if(this.props.profile.id) Actions.qrscan();
    else Actions.login();
  }

  render() {
    // return <Text>a</Text>
    return (
      <Header searchBar rounded>
        {this.props.back ?
          <Button iconRight transparent>
            <Icon onPress={() => Actions.pop()} name='ios-arrow-back'/>
          </Button> : <Text></Text>}

        <Button transparent>
          <Icon onPress={this.scanAction.bind(this)} name='ios-qr-scanner'/>
        </Button>
        <Item>
          <Icon name="ios-search"/>
          <Input placeholder="Search"/>
        </Item>
        <Button transparent badge vertical>
          <Icon onPress={this.scanAction.bind(this)} name='ios-cart'/>
        </Button>
      </Header>)
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
)(HeaderComponent);
// export default HeaderComponent;
