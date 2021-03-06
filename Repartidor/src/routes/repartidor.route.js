/*
    Software Avanzado
    Práctica 3
    Microservicio Repartidor
    José Francisco Puac Ixcamparic
    201700342

    Archivo de rutas
*/
var express = require('express');
var router = express.Router(); // Para manejar todas las rutas que entren al servidor

// Utilizacion de los controladores especificados en el archivo repartidor.controller
const controller = require('../controllers/repartidor.controller');

// PETICIONES HTTP A LA APP
router.post('/pedido', controller.pedido); // Recibir pedido de restaurante
router.post('/pedido_cliente', controller.estadoPedido); // Enviar estado del pedido segun repartidor
router.post('/pedido_entregado', controller.pedidoEntregado); // Indicar entrega del pedido

// Variable exportada a server.js
module.exports = router; 