var express = require('express');
var RestAPIEndpoints = require('../RestAPIEndpoints');
var { orderRouter } = require('../components/order');

var restRouter = express.Router();
restRouter.use(RestAPIEndpoints.ORDER_BASE_ENDPOINT, orderRouter);
module.exports = { restRouter }
