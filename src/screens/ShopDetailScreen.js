import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Icon } from 'native-base';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import { ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert, Platform } from 'react-native';
import * as api from '../api/ShopDetailApi';
import StarRating from 'react-native-star-rating';
import NearbyShopItem from '../components/home/NearbyShopItem';
import ShopDetailItem from "../components/Detail/ShopDetailItem";
import { Actions } from 'react-native-router-flux';
import openGps from '../utils/gpsHelper';

const { width } = Dimensions.get('window');
const styles = {
  image: {
    width,
    flex: 1,
    height: 240
  }
};

class ShopDetailScreen extends Component {
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
              <View>
                <Text bold>{item.name}</Text>
                <Text small>{item.address}</Text>
              </View>
            </View>
            <View horizontal space-between>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.totalrate}
                starSize={15}
                starColor={'rgb(249,174,24)'}
                selectedStar={(rating) => console.log(rating)}
              />
              <Text theme fs12>({item.totalreviews?item.totalreviews:0}) Reviews</Text>
              <View horizontal>
                <Icon new-shop name="ios-send" />
                <Text theme fs12 theme onPress={() => openGps(item.latitude, item.longitude)}>Get direction</Text>
              </View>
            </View>
            <View key={item.id}>
              <Image  style={styles.image} source={{uri: item.image}}/>

            </View>
            <ScrollView containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
              {
                this.state.items.map(
                  (item) => <TouchableOpacity onPress={() => Actions.i_detail({item: item})}>
                              <ShopDetailItem key={item.id} item={item}/>
                            </TouchableOpacity>  
                )
              }
            </ScrollView>

          </Content>

          <Footer />

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
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopDetailScreen);