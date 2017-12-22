import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated, Dimensions, Button, ScrollView } from 'react-native';
import {Icon, View} from 'native-base';
import { Actions } from 'react-native-router-flux';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default class BaseLightbox extends Component {
  static propTypes = {
    children: PropTypes.any,
    horizontalPercent: PropTypes.number,
    verticalPercent: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 1,
    }).start();
  }

  closeModal = () => {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 0,
    }).start(Actions.pop);
  }

  _renderLightBox = () => {
    const { children, horizontalPercent = 1, verticalPercent = 1 } = this.props;
    const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
    const width = horizontalPercent ? deviceWidth * horizontalPercent : deviceWidth;
    return (
      
      <View
          style={{
            width,
            height,
            backgroundColor: 'white',
            borderRadius: 8,
            justifyContent: 'space-between',
          }}
        >
        <ScrollView>
          {/* <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
            <Icon name='md-close' onPress={this.closeModal} style={{fontSize:42, right: -10}}/>
          </View>   */}
          {children}
        </ScrollView>    
      </View>
      
    );
  }

  render() {
    return (
      <Animated.View style={[styles.container, { opacity: this.state.opacity }]}>
        {this._renderLightBox()}
      </Animated.View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52,52,52,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
