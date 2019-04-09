import React, { Component } from 'react';
import axios from 'axios';
import { Camera, Permissions, FileSystem, Notifications } from 'expo';
import Expo from "expo";

import { StyleSheet, View, StatusBar, Alert, TouchableOpacity, ScrollView, CameraRoll, Image, Modal, Platform } from 'react-native';
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
  Card, CardItem, Text, Content, Fab,  List, ListItem, Spinner, Thumbnail, Form
} from "native-base";
import Loading from './component/Loading';
import ctrlServer from '../server/controllers/inicio';
import ctrlServerEstructura from '../server/controllers/estructura';
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

class InfoScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      colorHeader: Platform.OS === 'android' ? "#740001" : '#ffffff',
      msg: "Inicio",
      list: [],
      isModalVisible: false,
      persona: {nombre: "", ap: "", am: "", edad: "", correo: ""}
    };
  }

  async componentWillMount() {


    this.setState({ loading: false })

  }

  crearEstructura = async () => {
    this.setState({ loading: true })
    let iniciar = await ctrlServerEstructura.crearEstructura()
    this.props.navigation.navigate("Inicio")
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
            </Left>
            <Body>
              <Title>Nuevo telefono</Title>
            </Body>
            <Right>

            </Right>
          </Header>
          <Content>
            <ScrollView>
              <View style={{padding: 20}}>
                <Form>
                  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',paddingTop:50}}>
                    <Image source={require('../../assets/icon.png')} style={{borderRadius:50, width:100, height:100}}/>
                  </View>
                </Form>
                <Text>{"\n"}</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>GABSSA Movil</Text>
                <Text>{"\n"}</Text>
                <Button rounded block onPress={this.crearEstructura.bind(this)} style={{paddingLeft : 20, paddingRight : 20}}>
                  <Text>Iniciar</Text>
                </Button>
              </View>
            </ScrollView>
          </Content>
        </Container>
      );
    }
  }
}

export default InfoScreen;
