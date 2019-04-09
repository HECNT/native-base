import React, { Component } from 'react';
import axios from 'axios';
import Expo, { SQLite } from 'expo';
import '../../global'
const db = SQLite.openDatabase(base_datos);

class estructura extends React.Component {

  static getPerfilFoto(){
    return new Promise(function(resolve, reject) {

      var query = `
      SELECT * FROM imagen
      `;
      var inputs = [];
      db.transaction((tx) => {
        tx.executeSql(query, inputs, (tx, result) => {
          resolve({ err: false, res: result.rows._array })
        }, (err) => {
          resolve({ err: true, error: err })
        })
      })

    });
  }

  static deleteImagen(d){
    return new Promise(function(resolve, reject) {

      var query = `
      DELETE FROM imagen
      `;
      var inputs = [];
      db.transaction((tx) => {
        tx.executeSql(query, inputs, (tx, result) => {
          resolve({ err: false, res: result.rows._array })
        }, (err) => {
          resolve({ err: true, error: err })
        })
      })

    });
  }

  static setImagen(d){
    return new Promise(function(resolve, reject) {

      var query = `
      INSERT INTO imagen VALUES (?)
      `;
      var inputs = [d.image];
      db.transaction((tx) => {
        tx.executeSql(query, inputs, (tx, result) => {
          resolve({ err: false, res: result.rows._array })
        }, (err) => {
          resolve({ err: true, error: err })
        })
      })

    });
  }

}

export default estructura;
