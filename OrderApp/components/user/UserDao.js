var exports = module.exports = {};
var UserModel = require('./UserSchema');

exports.saveUser = async (object) => {
    let userModel = new UserModel(object);
    return await userModel.save();
}

exports.findById = async (id) => {
    return await UserModel.findById(id);
}

exports.findByEmail = async (email) => {
    return await UserModel.findOne({ email: email });
}

exports.removeToken = async (id, token) => {
    let result = await UserModel.update({ _id: id }, { $pull: { tokens: token } });
    console.log("result  " + JSON.stringify(result));
    if (result.n > 0 && result.nModified > 0) {
        return true
    } else {
        return false;
    }

}

