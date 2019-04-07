const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();
const {errorHandler} = require('./middleware/ErrorHandler');
const config = require('./config').config();
var { restRouter } = require('./routes');
app.use(bodyParser.json());
app.use(expressValidator())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,Authorization,X-Requested-With,Accept');

    next();
});

app.use('/', restRouter);
app.set('port', process.env.PORT || config.nodeServer.SERVER_PORT);
app.use(errorHandler);

module.exports=app;