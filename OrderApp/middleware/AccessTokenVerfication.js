var tokenConfig = require('../config').config().token;
const HttpStatus = require('../constants/HttpStatus');
var jwt = require("jsonwebtoken");
var exports = module.exports = {};
var {UnauthorizedError} = require('../custom-error/ErrorInstance');

exports.verfiyToken = async (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token) {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        try {
            // let authData = await jwt.verify(token, tokenConfig.JWT_TOKEN_SECRET);
            // if (authData) {
            //     req.authData = authData;
            // } else {
            //     throw new UnauthorizedError("You are not authorized to access resource.");
            // }
        } catch (err) {
            res.status(HttpStatus.UNAUTHORIZED).send({ code: HttpStatus.UNAUTHORIZED, message: "Session expired.Please login again." });
        }
        next();
    } else {
        res.sendStatus(HttpStatus.FORBIDDEN);
    }

}

