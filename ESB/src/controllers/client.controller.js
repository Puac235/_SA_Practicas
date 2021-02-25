/*
    Software Avanzado
    Práctica 4
    ESB
    José Francisco Puac Ixcamparic
    201700342

    Archivo de controladores cliente
*/
const fetch = require("node-fetch");
var url = 'http://localhost:3001';
// Funcion para realizar un pedido
const pedido =  (req, res) => {
    fetch(`${url}/pedido`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        var data = JSON.parse(data);
        if(data.status){
            res.send({status:data.status, code:data.code, data:data.data, msg:data.msg});
        }
        else{
            res.send({status:data.status, code:data.code, Error:data.Error});
        }
    })
    .catch(function(err) {
        console.error(err);
        res.send({status:false, code:500, Error:{type:"InternalError", msg:"Internal Server Error."}});
    });    
}

// Funcion para obtener el estado del pedido segun el restaurante
const estado_restaurante = (req, res) => {
    fetch(`${url}/estado_restaurante`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        var data = JSON.parse(data);
        if(data.status){
            res.send({status:data.status, code:data.code, data:data.data});
        }
        else{
            res.send({status:data.status, code:data.code, Error:data.Error});
        }
    })
    .catch(function(err) {
        console.error(err);
        res.send({status:false, code:500, Error:{type:"InternalError", msg:"Internal Server Error."}});
    });
}

// Funcion para obtener el estado del pedido segun el repartidor
const estado_repartidor = (req, res) => {
    
    fetch(`${url}/estado_repartidor`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        var data = JSON.parse(data);
        if(data.status){
            res.send({status:data.status, code:data.code, data:data.data});
        }
        else{
            res.send({status:data.status, code:data.code, Error:data.Error});
        }
    })
    .catch(function(err) {
        console.error(err);
        res.send({status:false, code:500, Error:{type:"InternalError", msg:"Internal Server Error."}});
    });
}

// Variables exportadas a client.route.js
module.exports = {
    pedido:pedido,
    estadoRestaurante:estado_restaurante,
    estadoRepartidor:estado_repartidor
}

