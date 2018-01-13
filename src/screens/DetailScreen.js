import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2 } from 'native-base';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import { ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const styles = {
  image: {
    width,
    flex: 1,
    height: 240
  }
};

class DetailScreen extends Component {

  render() {
    const item = this.props.item;
    const {toptext_color, toptext_fontsize, toptext, toptext_bgcolor} = item;
    const topTexts = toptext.split(" ");
    return (
      <Container>

        <ImageBackground>
          <Header back/>
          <Content>

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
