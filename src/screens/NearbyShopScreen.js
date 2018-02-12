import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, List, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'
import {bindActionCreators} from 'redux'
import { ScrollView, TouchableOpacity, Dimensions, Linking, Alert, Platform } from 'react-native'
import InfiniteScroll from 'react-native-infinite-scroll'

import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import NearbyShopItem from '../components/home/NearbyShopItem'
import * as actions from '../actions/homeActions'
import * as locationActions from '../actions/locationActions'

class NearbyShopScreen extends Component {
	state = {
		autopage: 0,
	}
	renderRow(item) {
		return <NearbyShopItem location={this.props.location} key={item.id} item={item}/>
	}
	renderList() {
		return <List
	 	 renderRow={data => this.renderRow(data)}
	 	 dataArray={this.props.home.nearbyshops.list}
	 	 canLoadMore={true}
	 	 />
	}
	loadMoreShops() {
		const { autopage } = this.state
		this.setState({
			autopage: autopage + 1
		})
		this.props.actions.getNearbyShop(null, null, autopage + 1)
	}
	render(){
		return <Container>
			<Header/>
			<Content>
				<InfiniteScroll
					horizontal={false}
					onLoadMoreAsync={this.loadMoreShops.bind(this)}
					distanceFromEnd={10}
				  >
				 {this.renderList()}
			   </InfiniteScroll>
			  </Content>
		  <Footer profile={this.props.profile}/>
		</Container>
	}
}
function mapStateToProps(state) {
  return {
    user: state.user,
    profile: state.profile,
    device: state.device,
    home: state.home,
    location: state.location,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(actions, dispatch),
    locationActions : bindActionCreators(locationActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearbyShopScreen)
