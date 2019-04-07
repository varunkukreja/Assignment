var mongoose = require('mongoose');
var mongooseTimestamp = require('mongoose-timestamp');

var UserSchema = new mongoose.Schema({

        name: {
                type: String,
                required: [true, 'Name must be provided.']
        },

        email: {
                type: String,
                unique: true,
                required: [true, 'Email must be provided.'],
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        'Please fill a valid email address']
        },
        password: {
                type: String,
                required: [true, 'Password must be provided.']
        }

});

UserSchema.plugin(mongooseTimestamp);

var UserModel = mongoose.model('UserModel', UserSchema,
        'user');
module.exports = UserModel;