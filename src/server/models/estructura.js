import React, { Component } from 'react';
import axios from 'axios';
import Expo, { SQLite } from 'expo';
import '../../global'
const db = SQLite.openDatabase(base_datos);

class estructura extends React.Component {

  static tablaSesion(d){
    return new Promise(function(resolve, reject) {

      var query = `
      CREATE TABLE IF NOT EXISTS sesion (
        sesion_id int primary key,
        usuario_id int not null,
        api_key text not null,
        nombre text not null,
        ap text not null,
        fecha date not null,
        activo int
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

  static tablaEstructura(d){
    return new Promise(function(resolve, reject) {

      var query = `
      CREATE TABLE IF NOT EXISTS estructura (
        estructura_id int primary key,
        fecha date not null,
        version text not null,
        nombre text not null
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

    });
  }

  static tablaInformacion(d){
    return new Promise(function(resolve, reject) {

      var query = `
      CREATE TABLE IF NOT EXISTS informacion (
        informacion_id int primary key,
        fecha_carga date not null,
        fecha_evento date null,
        mensaje text not null,
        archivo text null
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

    });
  }

  static setLogin(d){
    return new Promise(function(resolve, reject) {

      var query = `
      INSERT INTO
      	sesion (usuario_id, api_key, nombre, ap, fecha, 1)
      VALUES
      	(?, ?, ?, ?, ?)
      `;
      var inputs = [d.usuario_id, d.api_key, d.nombre, d.ap, d.fecha];
      db.transaction((tx) => {
        tx.executeSql(query, inputs, (tx, result) => {
          resolve({ err: false, res: result.rows._array })
        }, (err) => {
          resolve({ err: true, error: err })
        })
      })

    });
  }

  static verificar(d){
    return new Promise(function(resolve, reject) {

      var query = `
      SELECT
        *
      FROM
        estructura`;
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

  static tablaImagen(){
    return new Promise(function(resolve, reject) {

      var query = `
      CREATE TABLE IF NOT EXISTS imagen (
        imagen text
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

    });
  }

}

export default estructura;
