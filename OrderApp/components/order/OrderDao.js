const CommonUtil = require('../../util/CommonUtil');
var OrderModel = require('./OrderSchema');
const OrderStatus = require('../../constants/OrderStatus');
var exports = module.exports = {};

exports.save = async (object) => {
    let orderModel = new OrderModel(object);
    return await orderModel.save();
}
exports.find = async () => {
    return await OrderModel.find({});
}
exports.findById = async (orderId) => {
    let orderObject = await OrderModel.findById(orderId);
    return orderObject;
}

exports.updateOrderStatus = async (orderId, status) => {
    let result = await OrderModel.updateOne({ _id: orderId }, { $set: { status: status } });
    if (result.n > 0 && result.nModified > 0) {
        return true;
    } else {
        return false;
    }
}