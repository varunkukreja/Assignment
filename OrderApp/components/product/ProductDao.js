var exports = module.exports = {};
var ProductModel = require('./ProductSchema');

exports.findById = async (id) => {
    return await ProductModel.findById(id);
}
exports.insertMany = async (documents) => {
   await ProductModel.insertMany(documents)
}

 exports.findProductByName = async (productName) => {
    return ProductModel.findOne({productName: new RegExp("^" + productName + "$", "i") });
}