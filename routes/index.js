const express = require('express');
const routes = express.Router();
const { numberController } = require('../controllers');
const { testMiddleware } = require('../middlewares')

routes.get('/fibonacci', testMiddleware, numberController.getNumber);
routes.post('/fibonacci', numberController.createNumber);
routes.put('/fibonacci', numberController.putNumber);
routes.delete('/fibonacci', numberController.deleteNumber);

module.exports = routes; 