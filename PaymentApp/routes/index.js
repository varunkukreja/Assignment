var express = require('express');
var RestAPIEndpoints = require('../RestAPIEndpoints');
var { paymentRouter } = require('../components/payment');

var restRouter = express.Router();
restRouter.use(RestAPIEndpoints.PAYMENT_BASE_ENDPOINT, paymentRouter);
module.exports = { restRouter }
