/*
    Software Avanzado
    Práctica 3
    Microservicio Clientes
    José Francisco Puac Ixcamparic
    201700342

    Archivo de controladores
*/

// Funcion para realizar un pedido
const pedido =  (req, res) => {
    // captura de datos del cuerpo de la peticion
    var {idCliente, idProducto, direccion, precio, cantidad} = req.body;
    
    // validacion de datos
    if(direccion == '')    direccion = null;
    // Error si llega una cantidad negativa
    if(cantidad < 0 ) res.send({status:false, code:400, error:{type:"quantityError", msg:"La cantidad a solicitar es negativa."}});
    
    var producto = '';

    // Obtencion del producto segun ID
    switch(idProducto){
        case 1:
            producto = "Arroz";
            break;
        case 2:
            producto = "Pollo";
            break;
        case 3:
            producto = "Hamburguesa";
            break;
        case 4:
            producto = "Papas Fritas";
            break;
        case 5:
            producto = "Papa Cocida";
            break;
        case 6:
            producto = "Pizza";
            break;
        case 7:
            producto = "Sushi";
            break;
        case 8:
            producto = "Pan";
            break;
        case 9:
            producto = "Refresco";
            break;
        case 10:
            producto = "Coca Cola";
            break;
        // Si el producto no existe, lanza error
        default:
            res.send({status:false, code:400, error:{type:"ProductError", msg:"El producto a solicitar no es válido."}});
            return;
    }
    // Se envia la respuesta con el producto solicitado
    res.send({status:true, code:200, data:{idCliente: idCliente, producto: producto, direccion: direccion, precio: precio, cantidad: cantidad}, msg:"Producto Solicitado exitosamente."});
    
}

// Funcion para obtener el estado del pedido segun el restaurante
const estado_restaurante = (req, res) => {
    // captura de datos del cuerpo de la peticion
    var {idPedido} = req.body;

    var result;
    // Obtencion del estado del pedido segun ID
    switch(idPedido){
        case 1:
            result = {idPedido:idPedido, idCliente: 3, producto: "Arroz", direccion: "Ciudad de Guatemala", precio: 42, cantidad: 4, estado:"Recibido"};
            break;
        case 2:
            result = {idPedido:idPedido, idCliente: 1, producto: "Refresco", direccion: "Mixco", precio: 23, cantidad: 7, estado:"Preparándose"};
            break;
        case 3:
            result = {idPedido:idPedido, idCliente: 5, producto: "Pollo", direccion: "Ciudad de Guatemala", precio: 53, cantidad: 1, estado:"Empacándose"};
            break;
        case 4:
            result = {idPedido:idPedido, idCliente: 1, producto: "Coca Cola", direccion: "Mixco", precio: 6, cantidad: 23, estado:"Preparándose"};
            break;
        case 5:
            result = {idPedido:idPedido, idCliente: 7, producto: "Sushi", direccion: "Ciudad de Guatemala", precio: 27, cantidad: 2, estado:"Empacándose"};
            break;
        // Si el pedido no existe, lanza error
        default:
            res.send({status:false, code:400, Error:{type:"PedidoError", msg:"El pedido a verificar no existe."}});
            return;
    }
    // Se envia la respuesta con el pedido solicitado
    res.send({status:true, code:200, data:{result}});
}

// Funcion para obtener el estado del pedido segun el repartidor
const estado_repartidor = (req, res) => {
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
    res.send({status:true, code:200, data:{result}});
}

// Variables exportadas a client.route.js
module.exports = {
    pedido:pedido,
    estadoRestaurante:estado_restaurante,
    estadoRepartidor:estado_repartidor
}

