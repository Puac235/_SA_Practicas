/*
    Software Avanzado
    Práctica 4
    ESB
    José Francisco Puac Ixcamparic
    201700342

    Archivo de rutas restaurante
*/
var express = require('express');
var router = express.Router(); // Para manejar todas las rutas que entren al servidor

// Utilizacion de los controladores especificados en el archivo restaurant.controller
const controller = require('../controllers/restaurant.controller');

// PETICIONES HTTP A LA APP
router.get('/pedido', controller.pedido); // recibir pedido de app
router.post('/cliente', controller.estadoPedido); // Enviar estado del pedido segun restaurante
router.post('/listo', controller.pedidoListo); // Indicar pedido listo para repartidor

// Variable exportada a server.js
module.exports = router;  // este archivo se utiliza en servidor.js