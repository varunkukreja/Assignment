var orderService = require('./OrderService');
const HttpStatus = require('../../constants/HttpStatus');
const { InternalServerError } = require('../../custom-error/ErrorInstance');

createOrder = async (req, res, next) => {
    try {
        let requestBody = req.body;
        let result = await orderService.createOrder(requestBody);
        if (result) {
            res.send({ status: HttpStatus.SUCCESS, message: "Order has been created successfully." })
        } else {
            throw new InternalServerError();
        }
    } catch (err) {
        next(err);
    }
}

getOrders = async (req, res, next) => {
    try {
        let data = await orderService.getOrders();
        res.send(data);
    } catch (err) {
        next(err);
    }
}

getOrderStatus = async (req, res, next) => {
    try {
        let id = req.params.id;
        let data = await orderService.getOrderStatus(id);
        res.send(data);
    } catch (err) {
        next(err);
    }
}

cancelOrder = async (req, res, next) => {
    try {
        let requestBody = req.body;
        let result = await orderService.cancelOrder(requestBody.id);
        if (result) {
            res.send({ status: HttpStatus.SUCCESS, message: "Order has been cancelled successfully." })
        } else {
            throw new InternalServerError();
        }
    } catch (err) {
        next(err);
    }
}

module.exports = { createOrder, getOrders, getOrderStatus, cancelOrder }