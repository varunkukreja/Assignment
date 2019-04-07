var tokenConfig = require('../config').config().token;
const ResponseCodes = require('../ResponseCodes');
const UserModel = require('../components/user/user.schema')
var jwt = require("jsonwebtoken");
var exports = module.exports = {};
var { RecordNotFoundError, UnauthorizedError} = require('../custom-error/ErrorInstance');


exports.verfiyToken = async (req, res, next) => {
    const header = req.headers['authorization'];

    if (typeof header !== 'undefined') {
        try {
            let token = header;
            let authData = await jwt.verify(token, tokenConfig.JWT_TOKEN_SECRET);
            let user = await UserModel.findById(authData.userId);
            if (user) {
                
                let isAccessTokenExist = _.includes(user.tokens, token);
                if (isAccessTokenExist) {
                    req.authData = authData;
                    req.token=token;
                } else {
                    throw new UnauthorizedError("You are not authorized to access resource.");
                }
            } else {
                throw new RecordNotFoundError("User not found.");
            }
        } catch (err) {
            return res.status(ResponseCodes.UNAUTHORIZED).send({ code: ResponseCodes.UNAUTHORIZED, message: "Session expired.Please login again." });
        }
        next();
    } else {
        res.sendStatus(ResponseCodes.FORBIDDEN);
    }

}

