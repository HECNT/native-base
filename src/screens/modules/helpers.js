import React, { Component } from 'react';
import axios from 'axios';
import { Camera, Permissions, FileSystem, Notifications, Location } from 'expo';
import Expo from 'expo';
import { NetInfo } from 'react-native';

class helpers extends React.Component {

  static getLocation() {
    return new Promise(async (resolve, reject) => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      let activo = await Location.getProviderStatusAsync();
      if (activo.locationServicesEnabled === false) {
        resolve({err: true, description: "Los servicios de localización estan desactivados"});
      }
      if (status !== 'granted') {
        resolve({err: true, description: "No hay permisos de localizacion"});
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }

      let location = await Location.getCurrentPositionAsync({});
      resolve(location);
    });
  }

  static getInfoWifi() {
    return new Promise(function(resolve, reject) {
      NetInfo.getConnectionInfo()
      .then( (res) => {
        if (res.type === "wifi") {
          resolve({wifi: true});
        } else {
          resolve({err: false, description: "Wifi desactivado"});
        }
      })
    });
  }

  static getInfoNetRed() {
    return new Promise(function(resolve, reject) {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          resolve({ err: false, internet: isConnected });
        } else {
          resolve({ err: true, description: "No tienes internet"});
        }
      });
    });
  }

}

export default helpers;
