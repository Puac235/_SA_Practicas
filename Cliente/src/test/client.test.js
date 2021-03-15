/*
    Software Avanzado
    Práctica 6
    Pruebas Unitarias con Sonarqube y Jest
    José Francisco Puac Ixcamparic
    201700342
*/
const request =  require('supertest')
// Servidor Cliente
const server =  require('../server')
const assert = require('chai').assert;
// Endpoints
describe('Get Endpoints', () => {
    // Prueba Unitaria al endpoint "prueba" con un body de prueba
    it('POST', async (done) => {
        const res =  await  request(server)
        .post('/pedido')
        .send({
            idCliente : 2,
            idProducto : 2,
            direccion : "Ciudad de Guatemala",
            precio : 46,
            cantidad : 3
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
        assert.deepStrictEqual(res.body, {
            status: true,
            code: 200,
            data: {
                idCliente: 2,
                producto: "Pollo",
                direccion: "Ciudad de Guatemala",
                precio: 46,
                cantidad: 3
            },
            msg: "Producto Solicitado exitosamente."
        });
        done();
    })
})
afterAll(async  done  => {
    // close server conection
    server.close();
    done();
});