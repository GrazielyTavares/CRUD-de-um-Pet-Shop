const express = require('express');
const RouteCliente = require('../routes/routesCliente');
const controller = express.Router();


controller.post('/venda/CadastroDados', RouteCliente.createCliente);
controller.get('/venda/ListagemDados', RouteCliente.getCliente);
controller.get('/venda/ListagemDadosID/:cpf', RouteCliente.getCliente);
controller.put('/venda/AtualizarDados/:cpf', RouteCliente.putCliente);
controller.post('/venda/AtualizarDados', RouteCliente.postCliente);
controller.delete('/venda/DeletarDados/:cpf', RouteCliente.destroyCliente);

module.exports = controller;