import React, { Component } from 'react';
import axios from 'axios';
import { Camera, Permissions, FileSystem, Notifications } from 'expo';
import Expo from "expo";

import { StyleSheet, View, StatusBar, Alert, TouchableOpacity, ScrollView, CameraRoll, Image, Platform } from 'react-native';
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
import ctrlServer from '../server/controllers/inicio';
import ctrl from '../client/controllers/inicio';
import helpers from './modules/helpers';

// COMMON JS
var Promise = require('bluebird');

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal : 20
  }
});

class DetalleScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      DetalleScreen : "",
      loading : false,
      colorHeader: Platform.OS === 'android' ? "#740001" : '#ffffff',
      msg: "Inicio",
      res: "",
      axios: false
    };
  }

  async componentWillMount() {

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
              <Icon name="md-menu" style = {{ color: '#fff' }}/>
              </Button>
            </Left>
            <Body>
              <Title>Detalle</Title>
            </Body>
            <Right>

            </Right>
          </Header>
          <Content>
            <ScrollView>
              <View style={{padding:10}}>
                <Card>
                  <CardItem header>
                    <Text>Información aplicacion GABSSA</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>Versión 0.0.3</Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text>Desarrollada con ❤️ por GABSSA DEV</Text>
                  </CardItem>
               </Card>
              </View>
            </ScrollView>
          </Content>
        </Container>
      );
    }
  }
}

export default DetalleScreen;
