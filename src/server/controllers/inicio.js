import React, { Component } from 'react';
import axios from 'axios';
import model from '../models/inicio.js'
import ctrlClient from '../../client/controllers/inicio'
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

class ctrlInicioServer extends React.Component {

  static setLogin(d){
    return new Promise(async function(resolve, reject) {
      let loginDb = await model.setLoginDb()
      let login = await model.setLogin(d)
      let data = await model.getLogin()

      resolve(data)
    })
  }

  static getLogin() {
    return new Promise(async function(resolve, reject) {

      let data = await model.getLogin()
      resolve(data)

    });
  }

  static cerrarSesion() {
    return new Promise(async function(resolve, reject) {

      let data = await model.cerrarSesion()
      let logout = await ctrlClient.cerrarSesion()

      resolve(logout)

    });
  }


}

export default ctrlInicioServer;
