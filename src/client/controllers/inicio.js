import React, { Component } from 'react';
import axios from 'axios';
import Service from '../services/inicio.js'
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

class ctrlInicio extends React.Component {

  static doLogin(d){
    return new Promise( async function(resolve, reject) {
      let login = await Service.doLogin(d)
      resolve(login)
    });;
  }

  static setDispositivo(d){
    return new Promise( async function(resolve, reject) {
      let dispositivo = await Service.setDispositivo(d)
      resolve(dispositivo)
    });;
  }

  static getTest(){
    return new Promise( async function(resolve, reject) {
      let test = await Service.getTest()
      resolve(test)
    });;
  }

  static getNoticias(d){
    return new Promise( async function(resolve, reject) {
      let noticias = await Service.getNoticias(d)
      resolve(noticias)
    });;
  }

  static cerrarSesion(d){
    return new Promise( async function(resolve, reject) {
      let logout = await Service.cerrarSesion(d)
      resolve(logout)
    });;
  }

  static cambiarContrasenia(d){
    return new Promise( async function(resolve, reject) {
      let s = await Service.cambiarContrasenia(d)
      resolve(s)
    });;
  }

  static getTicket(d){
    return new Promise( async function(resolve, reject) {
      let s = await Service.getTicket(d)
      resolve(s)
    });;
  }

}

export default ctrlInicio;
