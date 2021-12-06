const express = require('express');
const MercadoPagoController = require('./controllers/MercadoPagoController');

const routes = express.Router();

routes.post('/mercadopago', MercadoPagoController.index);

module.exports = routes;

