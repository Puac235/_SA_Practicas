/*
    Software Avanzado
    Práctica 3
    Microservicio Clientes
    José Francisco Puac Ixcamparic
    201700342

    Archivo de rutas
*/
var express = require('express');
var router = express.Router(); // Para manejar todas las rutas que entren al servidor

// Utilizacion de los controladores especificados en el archivo client.controller
const controller = require('../controllers/client.controller');

// PETICIONES HTTP A LA APP
router.post('/pedido', controller.pedido); // Solicitar un pedido
router.post('/estado_restaurante', controller.estadoRestaurante); // Verificar el estado del pedido segun restaurante
router.post('/estado_repartidor', controller.estadoRepartidor); // Verificar el estado del pedido segun repartidor

// Variable exportada a server.js
module.exports = router;  