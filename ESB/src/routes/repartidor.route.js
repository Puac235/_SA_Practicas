/*
    Software Avanzado
    Práctica 4
    EDB
    José Francisco Puac Ixcamparic
    201700342

    Archivo de rutas repartidor
*/
var express = require('express');
var router = express.Router(); // Para manejar todas las rutas que entren al servidor

// Utilizacion de los controladores especificados en el archivo repartidor.controller
const controller = require('../controllers/repartidor.controller');

// PETICIONES HTTP A LA APP
router.get('/pedido', controller.pedido); // Recibir pedido de restaurante
router.post('/cliente', controller.estadoPedido); // Enviar estado del pedido segun repartidor
router.post('/entregado', controller.pedidoEntregado); // Indicar entrega del pedido

// Variable exportada a server.js
module.exports = router; 