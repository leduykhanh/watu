import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Icon, Footer } from 'native-base';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import { ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert, Platform } from 'react-native';
import * as api from '../api/ShopDetailApi';
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';
import NearbyShopItem from '../components/home/NearbyShopItem';
import ShopDetailItem from "../components/Detail/ShopDetailItem";
import openGps from '../utils/gpsHelper';
import * as cartActions from '../actions/cartActions';

const { width } = Dimensions.get('window');
const styles = {
  image: {
    width,
    flex: 1,
    height: 240
  }
};

class ItemDetailScreen extends Component {
  state = {
    item: null,
    items: []
  }
  componentWillMount(){
    api.getShopDetail(this.props.item.id).then(
      response => {
        const {data: {results}} = response;
        if(results.length > 0)
          this.setState({item:results[0]})
      }
    ).catch( (error) => console.log(error));
    api.getShopItems(this.props.item.id).then(
      response => {
        const {data: {results}} = response;
        if(results.length > 0)
          this.setState({items:results})
      }
    ).catch( (error) => console.log(error));
  }

  addToCart() {
    this.props.cartActions.addToCart(this.props.item);
  }

  render() {
    const item = this.state.item;
    if(item == null) return <Text>Loading</Text>
    const {toptext_color, toptext_fontsize, toptext, toptext_bgcolor} = item;
    return (
      <Container>

        <ImageBackground>
          <Header back/>
          <Content>
            <View horizontal>
              <Image source={{uri: item.image}} style={{ width: 100, height: 100, marginBottom: 12, borderRadius: 50}} />
            </View>
            <Text bold fs16>{item.name}</Text>
            <Text bold fs16 theme>${item.price}</Text>
            <View horizontal>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.totalrate}
                starSize={15}
                starColor={'rgb(249,174,24)'}
                selectedStar={(rating) => console.log(rating)}
              />
              <Text theme fs12>({item.totalreviews?item.totalreviews:0}) Reviews</Text>
            </View>
            <ScrollView containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
              {
                this.state.items.map(
                  (item) => <ShopDetailItem key={item.id} item={item}/>
                )
              }
            </ScrollView>

          </Content>
          <Footer>
            <View horizontal space-between>
              <View center-h>
                <Text>${item.price}</Text>
              </View>
              <View center-h>  
                <Button small onPress={this.addToCart.bind(this)}><Text>ADD TO CART</Text></Button>
              </View>  
            </View>
          </Footer>

        </ImageBackground>

      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions : bindActionCreators(cartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailScreen);
