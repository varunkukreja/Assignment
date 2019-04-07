var requestPromise = require('request-promise');
var orderDao = require('./OrderDao');
var productDao = require('../product/ProductDao');
var CommonUtil = require('../../util/CommonUtil');
const OrderStatus = require('../../constants/OrderStatus');
const { BadRequestError, RecordNotFoundError } = require('../../custom-error/ErrorInstance');
var exports = module.exports = {};
var DateUtil = require('../../util/DateUtil');
const config = require('../../config').config();
var confirmedOrders = {};


exports.createOrder = async (object) => {
    let product = await productDao.findProductByName(object.productName);

    if (CommonUtil.isObjectValid(product)) {

        object.status = OrderStatus.CREATED;
        object.product = product;
        //Save order with created status
        let result = await orderDao.save(object);

        if (result) {

            try {
                //Call payment to service to make payment
                let paymentResult = await doPayment(object);
                if (paymentResult) {

                     //Update order status.Payment can be confirmed or declined
                    await orderDao.updateOrderStatus(result._id, paymentResult);

                    /*
                        If payment confirmed then set timeout to change order status from confirmed to delivered
                        If payment declined then change order status from created to cancelled
                         
                    */
                    if (paymentResult === OrderStatus.CONFIRMED) {

                        confirmedOrders[result._id.toString()] = setTimeout(function () {
                            delete confirmedOrders[result._id.toString()];
                            orderDao.updateOrderStatus(result._id, OrderStatus.DELIVERED)
                        }, config.order.CONFIRMED_ORDER_TIMEOUT);


                    } else if (paymentResult === OrderStatus.DECLINED) {
                        await orderDao.updateOrderStatus(result._id, OrderStatus.CANCELLED);
                        throw new BadRequestError("Payment declined and the order is cancelled.")
                    }
                    return result;
                }
            } catch (err) {
                throw err;
            }
        }
    } else {
        throw new RecordNotFoundError("A product with the specified name was not found.");
    }
}

exports.getOrders = async (object) => {
    let orders = await orderDao.find();
    let orderArray = [];
    orders.forEach(element => {
        let orderObject = {};
        orderObject.id = element._id;
        orderObject.productName = element.product.productName;
        orderObject.status = element.status;
        orderObject.cost = element.cost;
        orderObject.createdAt = DateUtil.format(element.createdAt);
        orderArray.push(orderObject);

    });
    return orderArray;
}

exports.getOrderStatus = async (id) => {
    let order = await orderDao.findById(id);
    let orderObject = {};
    if (order) {
        orderObject.status = order.status;
    } else {
        throw new RecordNotFoundError("Order not found.");
    }
    return orderObject;
}

exports.cancelOrder = async (id) => {
    let order = await orderDao.findById(id);
    if (order) {
        if (order.status === OrderStatus.DELIVERED) {
            throw new BadRequestError("Order can not be cancel.Order already delivered.")
        } else if (order.status === OrderStatus.CANCELLED) {
            throw new BadRequestError("Order already cancelled.")
        } else {
            clearTimeout(confirmedOrders[id]);
            delete confirmedOrders[id];
            return await orderDao.updateOrderStatus(id, OrderStatus.CANCELLED);

        }
    } else {
        throw new RecordNotFoundError("Order not found.");
    }
}


doPayment = async (orderObject) => {
    let paymentResult = "";
    try {
        var options = {
            method: 'POST',
            uri: config.payment.uri,
            body: orderObject,
            json: true
        };
        paymentResult = await requestPromise(options);
    } catch (err) {
        throw err;
    }
    return paymentResult;
}


