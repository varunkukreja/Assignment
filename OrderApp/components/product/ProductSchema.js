var mongoose = require('mongoose');
var mongooseTimestamp = require('mongoose-timestamp');

var ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: [true, 'Product name must be provided.'],
        unique:true
    }

});

ProductSchema.plugin(mongooseTimestamp);

var ProductModel = mongoose.model('ProductModel', ProductSchema,
        'product');
module.exports = ProductModel;