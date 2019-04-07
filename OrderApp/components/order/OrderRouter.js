const express = require('express');
const orderRouter = express.Router();
const {createOrder,getOrders,getOrderStatus,cancelOrder} = require('./OrderController');
const RestAPIEndpoints=require('../../RestAPIEndpoints');
const accessTokenVerfication=require('../../middleware/AccessTokenVerfication');

/*Route to create new order.
*/
orderRouter.route(RestAPIEndpoints.ORDER).post(accessTokenVerfication.verfiyToken,createOrder);

/*Route to get orders.
*/
orderRouter.route(RestAPIEndpoints.ORDER).get(accessTokenVerfication.verfiyToken,getOrders);

/*Route to get order status.
*/
orderRouter.route(RestAPIEndpoints.ORDER+RestAPIEndpoints.ORDER_STATUS+"/:id").get(accessTokenVerfication.verfiyToken,getOrderStatus);

/*Route to cancel order.
*/
orderRouter.route(RestAPIEndpoints.ORDER+RestAPIEndpoints.CANCEL_ORDER).post(accessTokenVerfication.verfiyToken,cancelOrder);


module.exports={orderRouter};