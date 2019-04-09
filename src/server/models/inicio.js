import React, { Component } from 'react';
import axios from 'axios';
import Expo, { SQLite } from 'expo';
import '../../global'
const db = SQLite.openDatabase(base_datos);


class inicio extends React.Component {

  static setLoginDb(d){
    return new Promise(function(resolve, reject) {

      var query = `
      CREATE TABLE IF NOT EXISTS sesion (
        usuario_id int not null,
        api_key text not null,
        nombre text not null,
        ap text not null,
        fecha date not null
      )
      `;
      var inputs = [];
      db.transaction((tx) => {
        tx.executeSql(query, inputs, (tx, result) => {
          resolve({ err: false, res: result.rows._array })
        }, (err) => {
          resolve({ err: true, error: err })
        })
      })

    });;
  }

  static setLogin(d){
    return new Promise(function(resolve, reject) {

      var query = `
      INSERT INTO
      	sesion (usuario_id, api_key, nombre, ap, fecha, activo)
      VALUES
      	(?, ?, ?, ?, ?, 1)
      `;
      var inputs = [d.usuario_id, d.api_key, d.nombre, d.ap, d.fecha];
      db.transaction((tx) => {
        tx.executeSql(query, inputs, (tx, result) => {
          resolve({ err: false, res: result.rows._array })
        }, (err) => {
          resolve({ err: true, error: err })
        })
      })

    });;
  }

  static getLogin(d){
    return new Promise(function(resolve, reject) {

      var query = `
      SELECT
        *
      FROM
        sesion`;
      var inputs = [];
      db.transaction((tx) => {
        tx.executeSql(query, inputs, (tx, result) => {
          resolve({ err: false, res: result.rows._array })
        }, (err) => {
          resolve({ err: true, error: err })
        })
      })

    });;
  }

  static cerrarSesion(d){
    return new Promise(function(resolve, reject) {

      var query = `
      DELETE FROM sesion`;
      var inputs = [];
      db.transaction((tx) => {
        tx.executeSql(query, inputs, (tx, result) => {
          resolve({ err: false, res: result.rows._array })
        }, (err) => {
          resolve({ err: true, error: err })
        })
      })

    });;
  }

}

export default inicio;
