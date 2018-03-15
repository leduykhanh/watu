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
  Icon,
  Footer,
  FooterTab
} from 'native-base'
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

import ItemDetailScreenStyle from '../../survis-themes/styles/screens/ItemDetailScreen'

import * as api from '../api/ShopDetailApi'
import * as cartActions from '../actions/cartActions'
import ShopSummary from '../components/Detail/ShopSummary'
import Rewview from '../components/Detail/Rewview'
import Image from '../components/common/Image'
import openGps from '../utils/gpsHelper'
import itemHelper, {substr} from '../utils/itemHelper'
import {mapStateToProps, mapDispatchToProps} from '../utils/reduxHelper'

class ItemDetailScreen extends Component {
  state = {
    item: null,
    items: [],
    loading: true,
    reviews: []
  }

  componentWillMount() {
    api
      .getItemDetail(this.props.item.id)
      .then(response => {
        const {data} = response || {};
        const {results} = data || [];
        if (results.length > 0) 
          this.setState({item: results[0], loading: false});
        }
      )
      .catch((error) => console.log(error));
    api
      .getReviews({item_id: this.props.item.id})
      .then(response => {
        const {data} = response || {};
        const {results} = data || [];
        if (results.length > 0) 
          this.setState({reviews: results});
        }
      )
      .catch((error) => console.log(error));
  }
  addToCart() {
    this
      .props
      .cartActions
      .addToCart(this.props.item);
    Actions.cart();
  }
  renderReviews() {
    return (<View p-25="p-25" grey="grey">
      <View horizontal="horizontal" space-between="space-between">
        <Text bold="bold">Reviews</Text>
        <Text theme="theme">SEE ALL</Text>
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
    const item = this.state.item;
    const shop = this.props.shop;
    if (item == null || shop == null) 
      return <Text>Loading</Text>
    const {toptext_color, toptext_fontsize, toptext, toptext_bgcolor} = item;
    const {name, price, description, image, totalrate} = itemHelper(item);

    return (<Container>
      <ImageBackground>
        <Header back="back"/>
        <Content>
          <View horizontal="horizontal">
            <Image resizeMode='stretch' style={ItemDetailScreenStyle.itemImage} source={{
                uri: image
              }}/>
            <View m-l-10="m-l-10" p-t-10="p-t-10">
              <Text bold="bold">{name}</Text>
              <Text bold="bold" fs16="fs16" theme="theme">${price}</Text>
            </View>
          </View>
          <View horizontal="horizontal" m-b-10="m-b-10">
            <StarRating disabled={false} maxStars={5} rating={totalrate} starSize={15} starColor={'rgb(249,174,24)'} selectedStar={(rating) => console.log(rating)}/>
            <Text theme="theme" fs12="fs12">({
                item.totalreviews
                  ? item.totalreviews
                  : 0
              }) Reviews</Text>
          </View>
          <ShopSummary item={shop}/>
          <View p-25="p-25">
            <Text fs14="fs14" bold="bold">Voucher details</Text>
            <Text fs12="fs12">{description}</Text>
          </View>
          {this.renderReviews()}
        </Content>
        <Footer>
          <FooterTab>
            <View m-l-10="m-l-10" center-h="center-h">
              <Text theme="theme" fs18="fs18">${item.price}</Text>
            </View>
            <View m-r-10="m-r-10" center="center" center-h="center-h">
              <Button small="small" onPress={this
                  .addToCart
                  .bind(this)}>
                <Text>ADD TO CART</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </ImageBackground>
    </Container>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps({cartActions}))(ItemDetailScreen)
