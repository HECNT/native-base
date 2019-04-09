import React, { Component } from 'react';
import axios from 'axios';
import { Camera, Permissions, FileSystem, Notifications } from 'expo';
import Expo from "expo";

import { StyleSheet, View, StatusBar, Alert, TouchableOpacity, ScrollView, CameraRoll, Image, Modal, RefreshControl, Platform } from 'react-native';
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
  Card, CardItem, Text, Content, Fab,  List, ListItem, Spinner, Thumbnail, ListView
} from "native-base";
import Loading from './component/Loading';
import ctrlServer from '../server/controllers/inicio';
import ctrl from '../client/controllers/inicio';
import helpers from './modules/helpers';
import ctrlServerLogin from '../server/controllers/inicio';
import moment from 'moment'
import moment_locale from 'moment/locale/es.js'

// COMMON JS
var Promise = require('bluebird');

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal : 20
  }
});

class InfoScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      colorHeader: Platform.OS === 'android' ? "#740001" : '#ffffff',
      msg: "Inicio",
      list: [],
      isModalVisible: false,
      refreshing: false,
      list_ticket: []
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
        <Container style={{marginTop: StatusBar.currentHeight}}>
          <Header style = {{ backgroundColor: this.state.colorHeader }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="md-menu" style = {{ color: Platform.OS === 'android' ? "#ffffff" : '#000000' }}/>
              </Button>
            </Left>
            <Body>
              <Title>Info</Title>
            </Body>
            <Right>

            </Right>
          </Header>
            <ScrollView>
              <View>
                <Text>Info</Text>
              </View>
            </ScrollView>
        </Container>
      );
    }
  }
}

export default InfoScreen;
