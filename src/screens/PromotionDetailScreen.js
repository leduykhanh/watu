import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Icon } from 'native-base';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import { ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert, Platform } from 'react-native';
import * as api from '../api/PromotionDetailApi';
import StarRating from 'react-native-star-rating';
import NearbyShopItem from '../components/home/NearbyShopItem';

const { width } = Dimensions.get('window');
const styles = {
  image: {
    width,
    flex: 1,
    height: 240
  }
};

class DetailScreen extends Component {
  state = {
    item: null
  }
  componentWillMount(){
    api.getPromotionDetail(this.props.item.id).then(
      response => {
        const {data: {results}} = response;
        if(results.length > 0)
          this.setState({item:results[0]})
      }
    ).catch( (error) => console.log(error))
  }

  render() {
    const item = this.state.item;
    if(item == null) return <Text>Loading</Text>
    const {toptext_color, toptext_fontsize, toptext, toptext_bgcolor} = item;
    const topTexts = toptext.split(" ");
    return (
      <Container>

        <ImageBackground>
          <Header back/>
          <Content>
            <View horizontal>
              <Image source={{uri: item.shop_info.image}} style={{ width: 100, height: 100, marginBottom: 12, borderRadius: 50}} />
              <View>
                <Text bold>{item.shop_info.name}</Text>
                <Text small>{item.shop_info.address}</Text>
              </View>
            </View>
            <View horizontal space-between>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.shop_info.totalrate}
                starSize={15}
                starColor={'rgb(249,174,24)'}
                selectedStar={(rating) => console.log(rating)}
              />
              <Text white fs12>({item.shop_info.totalreviews?item.shop_info.totalreviews:0}) Reviews</Text>
              <View horizontal>
                <Icon new-shop name="ios-send" />
                <Text theme fs12 theme onPress={this.openGps}>Get direction</Text>
              </View>
            </View>
            <View key={item.id}>
              <Image  style={styles.image} source={{uri: item.image}}/>

              <View style={{backgroundColor: "rgba(0, 0, 0, 0.6)", top: 175, padding: 10,
                position:'absolute', alignSelf: 'stretch', width:'auto'}}>
                <TouchableOpacity onPress={() => Actions.detail({item: item})}>
                  <Text white fs20>{item.bigtitle}</Text>
                  <Text white fs12>{item.smalltitle}</Text>
                </TouchableOpacity>
              </View>

              <View style={{position:'absolute', top: 2, backgroundColor: toptext_bgcolor, right: 16, padding: 6,
                borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                {topTexts.map(t =>
                  <Text key={t} style={{color:toptext_color, fontSize:parseInt(toptext_fontsize),
                    backgroundColor: toptext_bgcolor}}>{t}</Text>
                )}

              </View>
            </View>
            <ScrollView containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
              {
                item.items.map(
                  (item) => <NearbyShopItem key={item.id} item={item}/>
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
)(DetailScreen);
