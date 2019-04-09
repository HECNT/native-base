import React, { Component } from 'react';
import axios from 'axios';
import { Camera, Permissions, FileSystem, Notifications, ImagePicker } from 'expo';

import { StyleSheet, View, StatusBar, Alert, TouchableHighlight, ScrollView, CameraRoll, Image, Platform } from 'react-native';
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
  Body,
  Card, CardItem, Text, Content, Fab,  List, ListItem, Spinner
} from "native-base";
import Loading from './component/Loading';
import ctrlServer from '../server/controllers/perfil';
import ctrl from '../client/controllers/inicio';
import helpers from './modules/helpers';
import styles from './styles/perfil'
// COMMON JS
var Promise = require('bluebird');

class EditarScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      EditarScreen : "",
      loading : false,
      colorHeader: "#740001",
      msg: "Inicio",
      res: "",
      axios: false,
      image: 'DSAD',
    };
  }

  async componentWillMount() {

    this.setState({ loading: false })

  }

  render() {
    if (this.state.loading) {
      return (
        <Loading colorHeader={this.state.colorHeader} msg={this.state.msg}/>
      );
    } else {
      return (
        <View>
          <Text>Perfil</Text>
        </View>
      );
    }
  }
}

export default EditarScreen;
