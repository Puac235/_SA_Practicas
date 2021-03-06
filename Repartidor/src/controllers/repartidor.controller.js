/*
    Software Avanzado
    Práctica 3
    Microservicio Repartidor
    José Francisco Puac Ixcamparic
    201700342

    Archivo de controladores
*/
// Funcion para que el repartidor reciba un pedido del restaurante
const pedido =  (req, res) => {
    // captura de datos del cuerpo de la peticion
    var {idPedido} = req.body;

    var result;
    // Obtencion del pedido segun ID
    switch(idPedido){
        case 1:
            result = {idPedido:idPedido, idCliente: 3, producto: "Arroz", direccion: "Ciudad de Guatemala", precio: 42, cantidad: 4};
            break;
        case 2:
            result = {idPedido:idPedido, idCliente: 1, producto: "Refresco", direccion: "Mixco", precio: 23, cantidad: 7};
            break;
        case 3:
            result = {idPedido:idPedido, idCliente: 5, producto: "Pollo", direccion: "Ciudad de Guatemala", precio: 53, cantidad: 1};
            break;
        case 4:
            result = {idPedido:idPedido, idCliente: 1, producto: "Coca Cola", direccion: "Mixco", precio: 6, cantidad: 23};
            break;
        case 5:
            result = {idPedido:idPedido, idCliente: 7, producto: "Sushi", direccion: "Ciudad de Guatemala", precio: 27, cantidad: 2};
            break;
        // Si el pedido no existe, lanza error
        default:
            res.send({status:false, code:400, Error:{type:"PedidoError", msg:"El pedido a verificar no existe."}});
            return;
    }
    // Se envia la respuesta con el pedido recibido exitosamente
    res.send({status:true, code:200, data:{result}, msg:"Pedido Recibido a Repartidor Exitosamente."});
}

// Funcion para retornar el estado del pedido segun el repartidor
const estado_pedido = (req, res) => {
    // captura de datos del cuerpo de la peticion
    var {idPedido} = req.body;

    var result;
    // Obtencion del estado del pedido segun ID
    switch(idPedido){
        case 1:
            result = {idPedido:idPedido, idCliente: 3, producto: "Arroz", direccion: "Ciudad de Guatemala", precio: 42, cantidad: 4, estado:"Recibido"};
            break;
        case 2:
            result = {idPedido:idPedido, idCliente: 1, producto: "Refresco", direccion: "Mixco", precio: 23, cantidad: 7, estado:"En Camino"};
            break;
        case 3:
            result = {idPedido:idPedido, idCliente: 5, producto: "Pollo", direccion: "Ciudad de Guatemala", precio: 53, cantidad: 1, estado:"Entregado"};
            break;
        case 4:
            result = {idPedido:idPedido, idCliente: 1, producto: "Coca Cola", direccion: "Mixco", precio: 6, cantidad: 23, estado:"En Camino"};
            break;
        case 5:
            result = {idPedido:idPedido, idCliente: 7, producto: "Sushi", direccion: "Ciudad de Guatemala", precio: 27, cantidad: 2, estado:"Entregado"};
            break;
        // Si el pedido no existe, lanza error
        default:
            res.send({status:false, code:400, Error:{type:"PedidoError", msg:"El pedido a verificar no existe."}});
            return;
    }
    // Se envia la respuesta con el pedido solicitado
    res.send({status:true, code:200, estado:result.estado, idPedido:idPedido});
}

// Funcion de entrega del pedido del repartidor
const pedido_entregado = (req, res) => {
    // captura de datos del cuerpo de la peticion
    var {idPedido} = req.body;

    var result;
    // Obtencion del pedido segun ID
    switch(idPedido){
        case 1:
            result = {idPedido:idPedido, idCliente: 3, producto: "Arroz", direccion: "Ciudad de Guatemala", precio: 42, cantidad: 4, estado:"Listo"};
            break;
        case 2:
            result = {idPedido:idPedido, idCliente: 1, producto: "Refresco", direccion: "Mixco", precio: 23, cantidad: 7, estado:"Preparándose"};
            break;
        case 3:
            result = {idPedido:idPedido, idCliente: 5, producto: "Pollo", direccion: "Ciudad de Guatemala", precio: 53, cantidad: 1, estado:"Listo"};
            break;
        case 4:
            result = {idPedido:idPedido, idCliente: 1, producto: "Coca Cola", direccion: "Mixco", precio: 6, cantidad: 23, estado:"Preparándose"};
            break;
        case 5:
            result = {idPedido:idPedido, idCliente: 7, producto: "Sushi", direccion: "Ciudad de Guatemala", precio: 27, cantidad: 2, estado:"Preparándose"};
            break;
        // Si el pedido no existe, lanza error
        default:
            res.send({status:false, code:400, Error:{type:"PedidoError", msg:"El pedido a verificar no existe."}});
            return;
    }
    // Cambio del estado del pedido a "Entregado"
    result.estado = "Entregado"
    
    // Se envia la respuesta con el pedido solicitado
    res.send({status:true, code:200, estado:result.estado, idPedido:idPedido , msg:"Pedido entregado al Cliente exitosamente."});
    
    
}

// Variables exportadas a repartidor.route.js
module.exports = {
    pedido:pedido,
    estadoPedido:estado_pedido,
    pedidoEntregado:pedido_entregado
}

