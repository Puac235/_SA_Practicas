/*
    Software Avanzado
    Práctica 3
    Microservicio Clientes
    José Francisco Puac Ixcamparic
    201700342
*/
// Uso de la libreria Express
const express = require ('express');
// Puerto 3001
const puerto = process.env.PORT || 3001;
// Utilizacion de cors
const cors = require('cors');

// Utilizacion de las rutas especificadas en el archivo client.route
var routes = require('./routes/client.route');

// Directrices de la app
const app = express();
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/', routes);

// Inicializacion del servidor
let server = app.listen( puerto, () =>{
    console.log("Client server running in port "+ puerto);
});

module.exports  = server;