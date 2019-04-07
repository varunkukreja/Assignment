// var db = require('../../db/DbHandler');
// var order = db.addCollection('order');
// const CommonUtil = require('../../util/CommonUtil');
// var exports = module.exports = {};

// exports.save = async (object) => {
//     let flag = false;
//     let result = await order.insert(object);
//     if (CommonUtil.isKeyValid(result.$loki) && result.$loki === 1) {
//         flag = true;
//     }
//     return flag;
// }
// exports.find = async () => {
//     return await order.find({});
// }
