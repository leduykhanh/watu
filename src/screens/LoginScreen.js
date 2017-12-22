import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Container, Header, Content, Item, Input, Label, Button, H1, Text, View, Icon, H3, Form} from 'native-base';
import {StyleSheet, Image, ScrollView} from 'react-native';
import * as actions from '../actions/userActions';

import {ImageBackground, GradientButton} from '../components/common';
import styles from './styles';
import {KOKU_LOGO_URL} from '../constants';

class Login extends Component {

  // state = {
  //   username: 'corp1user1@koku.io',
  //   password: 'Secret123!',
  //   typing: false
  // };

  state = {
    username: '',
    password: ''
  };


  componentDidMount() {
    if (this.props.error !== true && this.props.user.oidc && this.props.user.oidc.access_token) {
      Actions.reset('drawer');
    }
  }
  
  onLogin() {
    this.setState({typing:false});
    this.props.actions.login(this.state.username, this.state.password);
  }
  
  render() {

    const isLoading = this.props.user.isLoggingIn ? this.props.user.isLoggingIn : false;
    
    const {container, topView} = loginStyles;
    
    return (
      <Container style={container}>
        <ImageBackground>
          <Content contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}} keyboardShouldPersistTaps='always'>
            <View style={topView}>
              <Image source={require('../../assets/images/logo.png')} style={{ marginBottom: 12}} />
            </View>
            
            <Form keyboardShouldPersistTaps={true} >
              
              <Text red style={styles.heavyMargin}>{this.props.user.error} &nbsp;</Text>
              <View login>
                <Item rounded login error={this.props.user.error!==null && !this.state.typing} style={{...styles.heavyBorder}}>
                  <Icon name='ios-person-outline' />
                  <Input value={this.state.username}
                        style={{ shadowOpacity: 0 }}
                        placeholderTextColor="#7e7e7e"
                        onChangeText={(username) => this.setState({username,typing:true})}
                        autoCapitalize='none'
                        keyboardType="email-address" 
                        placeholder='Username'/>
                </Item>
              </View>
              <View login >
                <Item rounded login error={this.props.user.error!==null&&!this.state.typing} style={{...styles.heavyBorder}}>
                  <Icon name='ios-lock-outline' />
                  
                  <Input placeholder = 'Password'
                        placeholderTextColor="#7e7e7e"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password,typing:true})}
                        autoCapitalize='none'
                        secureTextEntry={true} />
                </Item>
              </View>
              
              <View style={styles.heavyMargin}>
                <GradientButton onPress={this.onLogin.bind(this)} isLoading={isLoading} text={'Sign In'} />
              </View>
              
              <View style={{...styles.heavyMargin, marginTop: 20}}>
                <Text subtitle-inactive>Don't have an account? </Text>
                
                <View horizontal>
                  <Text underline subtitle-inactive onPress={Actions.contact_us}>Sign up.</Text>
                </View>
                
              </View>
  
            </Form>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
  
}

const loginStyles = StyleSheet.create({
  
  container: {
    justifyContent : 'center',
    flexDirection: 'column',
  },
  topView: {
    justifyContent:'center',
    marginBottom:60,
    flexDirection:'column',
    alignItems:'center'
  }
  
});

function mapStateToProps(state) {
  return {
    user: state.user,
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);