const express = require('express');
const RouteCliente = require('../routes/routesCliente');
const controller = express.Router();


controller.post('/CadastroDados', RouteCliente.createCliente);
controller.get('/ListagemDados', RouteCliente.getCliente);
controller.get('/ListagemDadosID/:cpf', RouteCliente.getCliente);
controller.put('/AtualizarDados/:cpf', RouteCliente.putCliente);
controller.post('/AtualizarDados', RouteCliente.postCliente);
controller.delete('/DeletarDados/:cpf', RouteCliente.destroyCliente);

module.exports = controller;