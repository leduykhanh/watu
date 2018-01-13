import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Tabs, Tab,
  TabHeading, Icon } from 'native-base';
import {StyleSheet, Image, ScrollView} from 'react-native';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import * as actions from "../actions/profileActions";

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: "rgb(249,174,24)",

  },activeTextColor: 'rgb(67,72,77)'
};

class ProfileScreen extends Component {
  state = {
    editPersonal: false,
    userObject: {
      usr_mobile: null,
      usr_fname: null,
      usr_lname: null,
      usr_birthday: null,
      usr_status: null,
      usr_email: null,
      usr_password: null,
      usr_avatar: null
    }
  };

  componentWillMount(){
    this.props.actions.getHistory();
  }

  renderHistory(){
    // console.log(this.props.profile)
    // this.props.profile.history.map(
    //   item => (
    //     <View>
    //       <Text>{item.name}</Text>
    //     </View>
    //   )
    // );
  }
  changeAttribute(attribute, value){
    const userObject = this.state.userObject;
    userObject[attribute] = value;
    this.setState({userObject,typing:true});
  }

  onSave(){

  }

  renderPersonalInfo() {
    const userObject = this.state.userObject;
    if (this.state.editPersonal)
      return (
        <View>
          <Text>Profile</Text>
          <Text>Name</Text>
          <Item login error={false} >
            <Input
              value={userObject.usr_fname}
              onChangeText={(usr_fname) => this.changeAttribute('usr_fname', usr_fname)}
               />
          </Item>
          <Text>Phone</Text>
          <Item login error={false} >
            <Input
              value={userObject.usr_mobile}
              onChangeText={(usr_mobile) => this.changeAttribute('usr_mobile', usr_mobile)}
               />
          </Item>

          <View horizontal style={{ marginTop: 20 }}>
            <Button onPress={this.onSave.bind(this)} full small><Text bold>Save</Text></Button>
            <Button onPress={() => this.setState({editPersonal: false})} full small><Text bold>Cancel</Text></Button>
          </View>
        </View>
      )
    return (
      <View>
        <Text>Profile</Text>
        <Icon name="md-create" onPress={()=> this.setState({editPersonal: true})} />
        <Text>{this.props.profile.fname? this.props.profile.fname: 'Not set'}</Text>
        <Text>{this.props.profile.email}</Text>
      </View>
    );
  }

  render() {

    return (
      <Container>

        <ImageBackground>
          <Header back/>
          <Content>
            <View horizontal center>
              <Image source={require('../../assets/images/logo.png')}
                   style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 12}} />
              <Text>{this.props.profile.fname? this.props.profile.fname: 'Not set'}</Text>
            </View>
            <Tabs {...tabProps}>
              <Tab heading={<TabHeading><Text small>My History</Text></TabHeading>} >
                {this.renderHistory()}
              </Tab>
              <Tab heading={<TabHeading><Text small>My Loyality</Text></TabHeading>} >
                <Text>dada</Text>
              </Tab>
                <Tab heading={<TabHeading><Text small>Payment Info</Text></TabHeading>} >
                <Text>dada</Text>
              </Tab>
                  <Tab heading={<TabHeading><Text small>Personal Info</Text></TabHeading>} >
                {this.renderPersonalInfo() }
              </Tab>

            </Tabs>

          </Content>

          <Footer />

        </ImageBackground>

      </Container>
    );
  }

}

function mapStateToProps(state) {
  return {
    profile: state.profile,
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
)(ProfileScreen);
