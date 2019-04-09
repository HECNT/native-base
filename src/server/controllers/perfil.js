import React, { Component } from 'react';
import axios from 'axios';
import model from '../models/perfil.js'

class ctrlEstructura extends React.Component {

  static getPerfilFoto(d){
    return new Promise(async function(resolve, reject) {

      let verificar = await model.getPerfilFoto()
      resolve(verificar)

    })
  }

  static setImagen(d){
    return new Promise(async function(resolve, reject) {

      let eliminar = await model.deleteImagen(d)
      let imagen = await model.setImagen(d)
      resolve(imagen)

    })
  }

}

export default ctrlEstructura;
