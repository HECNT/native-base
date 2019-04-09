import React, { Component } from 'react';
import axios from 'axios';
import { Camera, Permissions, FileSystem, Notifications, Updates } from 'expo';
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
  Card, CardItem, Text, Content, Fab,  List, ListItem, Spinner, Form, Item, Label, Input, Toast
} from "native-base";
import Loading from './component/Loading';
import ctrlServer from '../server/controllers/inicio';
import ctrl from '../client/controllers/inicio';
import helpers from './modules/helpers';

import PasswordInputText from 'react-native-hide-show-password-input';

// COMMON JS
var Promise = require('bluebird');

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal : 20
  }
});

class CambiarPasswordScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      colorHeader: Platform.OS === 'android' ? "#740001" : '#ffffff',
      pass: this.props.navigation.state.params.pass_anterior,
      cambio_pass_token: this.props.navigation.state.params.cambio_pass_token,
      pass2: "",
      pass3: "",
      pruebas: "",
      sistema_id: "8",
      usuario_id: this.props.navigation.state.params.usuario_id
    };
  }

  async componentWillMount() {

    Toast.show({
              text: "Necesitas cambiar tu contraseña",
              buttonText: "Okay",
              buttonTextStyle: { color: "#008000" },
              buttonStyle: { backgroundColor: "#5cb85c" },
              duration: 15000
            })

    this.setState({ loading: false })

  }

  cambiarContrasenia = async () => {
    if (this.state.pass2.length === 0 || this.state.pass3.length === 0) {
      Alert.alert('Alerta', 'Todos los campos son requeridos',[{text: 'OK', onPress: () => console.log('ERR')}],{ cancelable: false })
    } else {
      if (this.state.pass2 === this.state.pass3) {
        this.setState({ loading: true })
        var d = {
          cambio_pass_token: this.state.cambio_pass_token,
          pass: this.state.pass,
          pass2: this.state.pass2,
          pass3: this.state.pass3,
          pruebas: "",
          sistema_id: "8",
          usuario_id: this.state.usuario_id
        }
        let cambiar = await ctrl.cambiarContrasenia(d)
        var opt = {
          text: "Sesión iniciada",
          buttonText: "Okay",
          buttonTextStyle: { color: "#008000" },
          buttonStyle: { backgroundColor: "#5cb85c" }
        }
        Toast.show(opt)
        this.setState({ loading: false })
        Updates.reload();
      } else {
        Alert.alert('Alerta', 'Las contraseñas no coinciden',[{text: 'OK', onPress: () => console.log('ERR')}],{ cancelable: false })
      }
    }
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
              <Title>Cambiar contraseña</Title>
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
                  <View style={{ paddingLeft: 16 }}>
                    <PasswordInputText
                        value={this.state.pass2}
                        onChangeText={ (value) => this.setState({pass2:value}) }
                    />
                  </View>
                  <View style={{ paddingLeft: 16 }}>
                    <PasswordInputText
                        value={this.state.pass3}
                        onChangeText={ (value) => this.setState({pass3:value}) }
                    />
                  </View>
                </Form>
                <Button rounded block onPress={this.cambiarContrasenia.bind(this)} style={{paddingLeft : 20, paddingRight : 20}}>
                  <Text>Cambiar contraseña</Text>
                </Button>
              </View>
            </ScrollView>
          </Content>

        </Container>
      );
    }
  }
}

export default CambiarPasswordScreen;
