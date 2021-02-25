/*
    Software Avanzado
    Práctica 4
    ESB
    José Francisco Puac Ixcamparic
    201700342

    Archivo de controladores repartidor
*/
const fetch = require("node-fetch");
var url = 'http://localhost:3003';
// Funcion para que el repartidor reciba un pedido del restaurante
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

// Funcion para retornar el estado del pedido segun el repartidor
const estado_pedido = (req, res) => {
    
    fetch(`${url}/pedido_cliente`, {
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
            res.send({status:data.status, code:data.code, estado:data.estado, idPedido:data.idPedido});
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

// Funcion de entrega del pedido del repartidor
const pedido_entregado = (req, res) => {
    
    fetch(`${url}/pedido_entregado`, {
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
            res.send({status:data.status, code:data.code, estado:data.estado, idPedido:data.idPedido, msg:data.msg});
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

// Variables exportadas a repartidor.route.js
module.exports = {
    pedido:pedido,
    estadoPedido:estado_pedido,
    pedidoEntregado:pedido_entregado
}

