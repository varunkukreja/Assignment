var mongoose = require('mongoose');
var mongooseTimestamp = require('mongoose-timestamp');

var OrderSchema = new mongoose.Schema({

    product: {
        
    },
    cost: {
        type: Number,
        required: [true, 'Cost must be provided.']
    },
    status:{
       type:String     
    }

});

OrderSchema.plugin(mongooseTimestamp);

var OrderModel = mongoose.model('OrderModel', OrderSchema,
        'order');
module.exports = OrderModel;