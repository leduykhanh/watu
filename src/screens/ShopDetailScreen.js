import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Icon } from 'native-base';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import { ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert, Platform } from 'react-native';
import * as api from '../api/ShopDetailApi';
import StarRating from 'react-native-star-rating';
import ShopSummary from '../components/Detail/ShopSummary';
import ShopDetailListItem from "../components/Detail/ShopDetailListItem";
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
          <Header back/>
          <Content>
            <ShopSummary item={item} />
            <View key={item.id}>
              <Image  style={styles.image} source={{uri: item.image}}/>

            </View>
            <ScrollView containerStyle={{width: 142, height: 542, flex:1, backgroundColor: 'grey'}}>
              {
                this.state.items.map(
                  (sitem) => <TouchableOpacity onPress={() => Actions.i_detail({item: sitem, shop: item})}>
                              <ShopDetailListItem key={sitem.id} item={sitem}/>
                            </TouchableOpacity>
                )
              }
            </ScrollView>

          </Content>

          <Footer />

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
