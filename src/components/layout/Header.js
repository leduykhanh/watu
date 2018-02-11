import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Item, Input, Icon, Button, Text, Badge } from 'native-base';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/homeActions';
import * as searchAction from '../../actions/searchAction';

import HeaderStyle from '../../../wat-themes/styles/components/Header';

class HeaderComponent extends Component {
	scanAction(){
		if(this.props.profile.id) Actions.qrscan();
	    else Actions.login();
    }

    cartAction(){
		if(this.props.profile.id) Actions.cart();
	    else Actions.login();
    }

    searchAction() {
		let currentScene = Actions.currentScene.toString();
	    if (currentScene !== 'search') Actions.search();
	    this.props.actions.getNearbyShop(this.props.search.searchString);
    }

    updateSearch(q){
		this.props.searchAction.updateSearch(q)
    }

    renderBack() {
		if (this.props.back) return <Button iconRight transparent onPress={() => Actions.pop()} >
      		<Icon name='ios-arrow-back'/>
      	</Button>
      	return <Text></Text>
    }
    renderQrScanner() {
		return <Button transparent onPress={this.scanAction.bind(this)}>
      		<Icon name='ios-qr-scanner'/>
      	 </Button>
    }
    renderSearch() {
		return <Item>
      		<Icon transparent name="ios-search"/>
      		<Input transparent placeholder="Search"
      			 value={this.props.search.searchString}
      			 onChangeText={(q) => this.updateSearch(q)}
      			 onSubmitEditing={this.searchAction.bind(this)}
      		/>
      	 </Item>
    }
    renderCart() {
		const cartCount = this.props.cart.count;
		return <Button transparent onPress={this.cartAction.bind(this)}>
      		{cartCount > 0?
      		<Badge style={HeaderStyle.cart}>
      		<Text style={HeaderStyle.cartCount}>{cartCount}</Text>
      		</Badge>
      		 : null}
      		<Icon name='ios-cart'/>
      	 </Button>
    }

    render() {
	    return <Header searchBar rounded style={HeaderStyle.container}>
	   		{this.renderBack()}
	   		{this.renderQrScanner()}
	   		{this.renderSearch()}
	   		{this.renderCart()}
	   	</Header>
    }
}

function mapStateToProps(state) {
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
