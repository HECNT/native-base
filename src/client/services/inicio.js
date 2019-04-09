import React, { Component } from 'react';
import axios from 'axios';
import Expo from 'expo';

// var d = {
//   att1: data1,
//   att2: data2,
//   att3: data3,
// }
// axios.get('uri', d, {
//   headers: {
//     Authorization: apiKey
//   }
// })
// .then((res) => {
//   if (res.data.length === 0) {
//     resolve({err: true, description: "No se encontraron cuentas"})
//   } else {
//     resolve({err: false, description: `Se encontrarón ${res.data.length} cuentas`, data: res.data})
//   }
// }).catch((err)=>{
//   resolve({err: true, description:err})
// })

class serviceInicio extends React.Component {

  static doLogin(d){
    return new Promise(function(resolve, reject) {
      var uri = `https://${uri_acceso_dom}acceso/usuario/login`
      d.sistema_id = 8
      axios.post(uri, d)
      .then((res) => {
        resolve({ data:res.data, err:false });
      }).catch((err)=>{
        resolve({ err: true, description: err });
      })
    });
  }

  static setDispositivo(d){
    return new Promise(function(resolve, reject) {
      var uri = "https://gabssa.app/movil/dispositivo/set-dispositivo"
      axios.post(uri, d, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "8bd7fb1c-cef6-41ea-872e-5fa77ea0ea22"
        }
      })
      .then((res) => {
        resolve({ data:res.data, err:false });
      }).catch((err)=>{
        resolve({ err: true, description: err });
      })
    });
  }

  static getTest(d){
    return new Promise(function(resolve, reject) {
      var uri = "https://gabssa.app/movil/dispositivo/get-init"
      axios.get(uri, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "8bd7fb1c-cef6-41ea-872e-5fa77ea0ea22"
        }
      })
      .then((res) => {
        resolve({ data:res.data, err:false });
      }).catch((err)=>{
        resolve({ err: true, description: err });
      })
    });
  }

  static getNoticias(d){
    return new Promise(function(resolve, reject) {
      var uri = "https://www.gabssa.app/movil/notificacion/get-notificaciones-usuario"
      axios.post(uri, d, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "8bd7fb1c-cef6-41ea-872e-5fa77ea0ea22"
        }
      })
      .then((res) => {
        resolve({ data:res.data, err:false });
      }).catch((err)=>{
        resolve({ err: true, description: err });
      })
    });
  }

  static cerrarSesion(d){
    return new Promise(function(resolve, reject) {
      var uri = `https://${uri_acceso_dom}acceso/usuario/logout`
      axios.delete(uri)
      .then((res) => {
        resolve({ data:res.data, err:false });
      }).catch((err)=>{
        resolve({ err: true, description: err });
      })
    });
  }

  static cambiarContrasenia(d){
    return new Promise(function(resolve, reject) {
      var uri = `https://${uri_acceso_dom}acceso/usuario/actualizar-pass`
      axios.post(uri, d)
      .then((res) => {
        resolve({ data:res.data, err:false });
      }).catch((err)=>{
        resolve({ err: true, description: err });
      })
    });
  }

  static getTicket(d){
    return new Promise(function(resolve, reject) {
      var uri = `https://${uri_api}ticket/get/ticket-pendientes`
      axios.post(uri, d, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "8bd7fb1c-cef6-41ea-872e-5fa77ea0ea22"
        }
      })
      .then((res) => {
        resolve({ data:res.data, err:false });
      }).catch((err)=>{
        resolve({ err: true, description: err });
      })
    });
  }

}

export default serviceInicio;
