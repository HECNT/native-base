import React, { Component } from 'react';
import axios from 'axios';
import model from '../models/estructura.js'

class ctrlEstructura extends React.Component {

  static verificar(d){
    return new Promise(async function(resolve, reject) {

      let verificar = await model.verificar()
      resolve(verificar)

    })
  }

  static crearEstructura(d){
    return new Promise(async function(resolve, reject) {

      let t_usuario = await model.tablaSesion()
      let t_estructura = await model.tablaEstructura()
      let t_informacion = await model.tablaInformacion()
      let t_imagen = await model.tablaImagen()
      
      resolve(t_informacion)

    })
  }

}

export default ctrlEstructura;
