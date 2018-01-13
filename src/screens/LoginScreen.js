import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Tabs, Tab, Header, TabHeading, Item, Input, Label, Button, H1, Text, View, Icon, H3, Form, CheckBox} from 'native-base';
import {StyleSheet, Image, ScrollView} from 'react-native';
import * as actions from '../actions/userActions';

import styles from './styles';
import {BaseLightbox, GradientButton, InputView} from '../components/common';

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: "rgb(249,174,24)",

  },activeTextColor: 'rgb(67,72,77)'
};

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

  renderLogin(){
    return (
      <View>

        {/*<Form keyboardShouldPersistTaps={true} >*/}

          <Text red style={styles.heavyMargin}>{this.props.user.error} &nbsp;</Text>
        <Text>User name</Text>
        <Item login error={this.props.user.error!==null && !this.state.typing} >
          <Input value={this.state.username}
                 style={{ shadowOpacity: 0 }}
                 onChangeText={(username) => this.setState({username,typing:true})}
                 autoCapitalize='none'
                 />
        </Item>
        <Text>Password</Text>
        <Item login error={this.props.user.error!==null&&!this.state.typing} >
          <Input
                 value={this.state.password}
                 onChangeText={(password) => this.setState({password,typing:true})}
                 autoCapitalize='none'
                 secureTextEntry={true} />
        </Item>

        <View style={{ marginTop: 20 }}>
          <Button onPress={this.onLogin.bind(this)} full small><Text bold>LOG IN</Text></Button>
        </View>

        <View style={{ marginTop: 20, justifyContent: 'flex-end'}}>

          <View horizontal style={{ justifyContent: 'flex-end' }}>
            <Text underline subtitle-inactive onPress={Actions.pop}>Forgot password</Text>
          </View>

        </View>

        {/*</Form>*/}
      </View>
    );
  }

  renderRegister(){
    return (
      <View>

        {/*<Form keyboardShouldPersistTaps={true} >*/}

        <Text red small style={styles.heavyMargin}>{this.props.user.error} &nbsp;</Text>
        <Text>User name</Text>
        <Item login error={this.props.user.error!==null && !this.state.typing} >
          <Input value={this.state.username}
                 style={{ shadowOpacity: 0 }}
                 onChangeText={(username) => this.setState({username,typing:true})}
                 autoCapitalize='none'
          />
        </Item>
        <Text>Password</Text>
        <Item login error={this.props.user.error!==null&&!this.state.typing} >
          <Input
            value={this.state.password}
            onChangeText={(password) => this.setState({password,typing:true})}
            autoCapitalize='none'
            secureTextEntry={true} />
        </Item>
        <View horizontal>
          <CheckBox checked/>
          <Text>   </Text>
          <Text>I agree with terms and conditions</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button onPress={this.onLogin.bind(this)} full small><Text bold>REGISTER</Text></Button>
        </View>



        {/*</Form>*/}
      </View>
    );
  }


  render() {

    const isLoading = this.props.user.isLoggingIn ? this.props.user.isLoggingIn : false;

    const {container, topView} = loginStyles;

    return (
      <BaseLightbox verticalPercent={0.9} horizontalPercent={0.9}>
        <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
          <Icon name='md-close' onPress={Actions.pop} style={{fontSize:30,  marginRight: 5,marginTop:0}}/>
        </View>
        <View style={topView}>
          <Image source={require('../../assets/images/logo.png')} style={{ width: 100, height: 100, marginBottom: 12}} />
        </View>
        <View login>
          <Tabs {...tabProps}>
            <Tab heading="Login">
              {this.renderLogin()}
            </Tab>
            <Tab heading="Register">
              {this.renderRegister()}
            </Tab>

          </Tabs>
        </View>
      </BaseLightbox>
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
    marginBottom:10,
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
