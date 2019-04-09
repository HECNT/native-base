import React, { Component } from 'react';
import axios from 'axios';
import { Camera, Permissions, FileSystem, Notifications, Constants, Updates } from 'expo';
import Expo from "expo";
import { Font } from 'expo-font'


import { StyleSheet, View, StatusBar, Alert, TouchableOpacity, ScrollView, CameraRoll, Image, Platform, KeyboardAvoidingView } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Label,
  Body,
  Card, CardItem, Text, Content, Fab,  List, ListItem, Spinner, Form, Item, Input, Toast
} from "native-base";

import PasswordInputText from 'react-native-hide-show-password-input';
import moment from 'moment'

import Loading from './component/Loading';
import ctrlServer from '../server/controllers/inicio';
import ctrl from '../client/controllers/inicio';
import helpers from './modules/helpers';
import ctrlServerLogin from '../server/controllers/inicio';
import ctrlServerEstructura from '../server/controllers/estructura';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import '../global'

// COMMON JS
var Promise = require('bluebird');

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal : 20
  }
});

class InicioScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      InicioScreen : "",
      loading : true,
      colorHeader: Platform.OS === 'android' ? "#740001" : '#ffffff',
      msg: "Inicio",
      res: "",
      axios: false,
      usuario_id: "",
      pass: ""
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });

    this.setState({ loading: false })

  }

  render() {
    if (this.state.loading) {
      return (
        <Loading colorHeader={this.state.colorHeader} msg={this.state.msg}/>
      );
    } else {
      return (
        <Container style={{marginTop: StatusBar.currentHeight}}>
          <Header style = {{ backgroundColor: this.state.colorHeader }}>
            <Left>
              <Button transparent>
                <Icon name="logo-tux" style = {{ color: '#fff' }}/>
              </Button>
            </Left>
            <Body>
              <Title>Inicio</Title>
            </Body>
            <Right>

            </Right>
          </Header>
          <ScrollView>
            <Text>Inicio</Text>
          </ScrollView>
        </Container>
      );
    }
  }
}

export default InicioScreen;
