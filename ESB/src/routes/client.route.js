/*
    Software Avanzado
    Práctica 4
    ESB
    José Francisco Puac Ixcamparic
    201700342

    Archivo de rutas cliente
*/
var express = require('express');
var router = express.Router(); // Para manejar todas las rutas que entren al servidor

// Utilizacion de los controladores especificados en el archivo client.controller
const controller = require('../controllers/client.controller');

// PETICIONES HTTP A LA APP
router.post('/pedido', controller.pedido); // Solicitar un pedido
router.get('/restaurante', controller.estadoRestaurante); // Verificar el estado del pedido segun restaurante
router.get('/repartidor', controller.estadoRepartidor); // Verificar el estado del pedido segun repartidor

// Variable exportada a server.js
module.exports = router;  