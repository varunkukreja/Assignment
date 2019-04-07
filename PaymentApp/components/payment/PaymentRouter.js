const express = require('express');
const paymentRouter = express.Router();
const {doPayment} = require('./PaymentController');
const RestAPIEndpoints=require('../../RestAPIEndpoints');

/*Route to create new order.
*/
paymentRouter.route(RestAPIEndpoints.PAYMENT).post(doPayment);

module.exports={paymentRouter};