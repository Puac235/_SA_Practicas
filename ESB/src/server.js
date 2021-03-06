/*
    Software Avanzado
    Práctica 4
    ESB
    José Francisco Puac Ixcamparic
    201700342
*/
// Uso de la libreria Express
const express = require ('express');
// Puerto 3000
const puerto = process.env.PORT || 3000;
// Utilizacion de cors
const cors = require('cors');

// Utilizacion de las rutas especificadas en el archivo client.route
var clientRoutes = require('./routes/client.route');

// Utilizacion de las rutas especificadas en el archivo repartidor.route
var repartidorRoutes = require('./routes/repartidor.route');

// Utilizacion de las rutas especificadas en el archivo restaurant.route
var restaurantRoutes = require('./routes/restaurant.route');

// Directrices de la app
const app = express();
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/esb/client/', clientRoutes);
    app.use('/esb/deliver/', repartidorRoutes);
    app.use('/esb/restaurant/', restaurantRoutes);

// Inicializacion del servidor
app.listen( puerto, () =>{
    console.log("Client server running in port "+ puerto);
});