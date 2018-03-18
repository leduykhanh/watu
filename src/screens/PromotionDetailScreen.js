import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Icon } from 'native-base'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import { ImageBackground } from '../components/common'
import { ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert, Platform } from 'react-native'
import * as api from '../api/PromotionDetailApi'
import StarRating from 'react-native-star-rating'
import PromotionDetailItem from "../components/Detail/PromotionDetailItem"
import ShopSummary from "../components/Detail/ShopSummary"
import openGps from '../utils/gpsHelper'
import { Actions } from 'react-native-router-flux'

import itemHelper, {substr} from '../utils/itemHelper'
import PromotionDetailScreenStyle from '../../wat-themes/styles/screens/PromotionDetailScreen'

class PromotionDetailScreen extends Component {
  state = {
    item: null
  }
  componentWillMount(){
    api.getPromotionDetail(this.props.item.id).then(
      response => {
        const {data: {results}} = response
        if(results.length > 0)
          this.setState({item:results[0]})
      }
    ).catch( (error) => console.log(error))
  }

  render() {
    const item = this.state.item
    if(item == null) return <Text>Loading</Text>
	const {
		id, name, description, price, image, totalrate, totalreviews, latitude, longitude,
		toptext_color, toptext_fontsize, toptext, toptext_bgcolor, bigtitle, smalltitle,
		address, items
	} = itemHelper(item)
    const topTexts = toptext.split(" ")
    return (
      <Container>
        <ImageBackground>
          <Header back/>
          <Content>
			  <ScrollView containerStyle={PromotionDetailScreenStyle.container}>
				  <View key={id} style={PromotionDetailScreenStyle.slide}>
					  <Image  style={PromotionDetailScreenStyle.image} source={{uri: image}}/>
					  <View style={PromotionDetailScreenStyle.slideInfo}>
						  <Text white fs20>{substr(bigtitle, 40)}</Text>
						  <Text white fs12>{substr(smalltitle, 60)}</Text>
					  </View>
					  <View style={{...PromotionDetailScreenStyle.slideTopText, backgroundColor: toptext_bgcolor}}>
						  {topTexts.map(t =>
						  <Text key={t} style={{
							  color:toptext_color,
							  fontSize:parseInt(toptext_fontsize),
							  backgroundColor: toptext_bgcolor
						  }}>{t}</Text>)}
					  </View>
				  </View>
				  <ShopSummary item={item.shop_info}/>
				  {items.map(sitem => <TouchableOpacity onPress={() => Actions.s_detail({item: sitem, shop : item})}>
					  <PromotionDetailItem key={sitem.id} item={sitem}/>
				  </TouchableOpacity>)}
			  </ScrollView>
          </Content>
          <Footer />
        </ImageBackground>
      </Container>
    )
  }

}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromotionDetailScreen)
