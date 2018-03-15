import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Container,
  View,
  Content,
  Form,
  Item,
  Input,
  Spinner,
  Label,
  Button,
  Title,
  Text,
  H2,
  Icon
} from 'native-base'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import {ImageBackground} from '../components/common'
import {
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
  Alert,
  Platform
} from 'react-native'
import StarRating from 'react-native-star-rating'
import {Actions} from 'react-native-router-flux'

import ShopDetailScreenStyle from '../../survis-themes/styles/screens/ShopDetailScreen'

import * as api from '../api/ShopDetailApi'
import ShopSummary from '../components/Detail/ShopSummary'
import Image from '../components/common/Image'
import ShopDetailListItem from "../components/Detail/ShopDetailListItem"
import openGps from '../utils/gpsHelper'
import itemHelper, {substr} from '../utils/itemHelper'
import {mapStateToProps, mapDispatchToProps} from '../utils/reduxHelper'

class ShopDetailScreen extends Component {
  state = {
    item: null,
    items: [],
    reviews: [],
    showReview: false
  }
  componentWillMount() {
    api
      .getShopDetail(this.props.item.id)
      .then(response => {
        const {data: {
            results
          }} = response
        if (results.length > 0) 
          this.setState({item: results[0]})
      })
      .catch((error) => console.log(error))api
      .getShopItems(this.props.item.id)
      .then(response => {
        const {data: {
            results
          }} = response
        if (results.length > 0) 
          this.setState({items: results})
      })
      .catch((error) => console.log(error))api
      .getReviews(this.props.item.id, null)
      .then(response => {
        const {data: {
            results
          }} = response
        if (results.length > 0) 
          this.setState({reviews: results})
      })
      .catch((error) => console.log(error))
    }

  renderReviews() {
    return (<View p-25="p-25" grey="grey">
      <View horizontal="horizontal" space-between="space-between">
        <Text bold="bold">Reviews</Text>
        <Text them="them" onPress={() => this.setState({showReview: false})}>Go back</Text>
        {
          this
            .state
            .reviews
            .map(review => <Review item={review}/>)
        }
      </View>
    </View>)
  }

  render() {
    const item = this.state.item
    if (item == null) 
      return <Text>Loading</Text>
    const {
      id,
      name,
      description,
      price,
      image,
      totalrate,
      totalreviews,
      latitude,
      longtitude,
      toptext_color,
      toptext_fontsize,
      toptext,
      toptext_bgcolor,
      bigtitle,
      smalltitle,
      address,
      items
    } = itemHelper(item)
    return (<Container>
      <Header back="back"/>
      <Content>
        <ScrollView containerStyle={ShopDetailScreenStyle.container}>
          <ShopSummary openReview={() => this.setState({showReview: true})} item={item}/> {
            this.state.showReview
              ? this.renderReviews()
              : <View>
                  <Image style={ShopDetailScreenStyle.image} source={{
                      uri: image
                    }}/> {
                    this
                      .state
                      .items
                      .map(sitem => <TouchableOpacity onPress={() => Actions.i_detail({item: sitem, shop: item})}>
                        <ShopDetailListItem key={sitem.id} item={sitem}/>
                      </TouchableOpacity>)
                  }
                </View>
          }
        </ScrollView>
      </Content>
      <Footer/>
    </Container>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ShopDetailScreen)
