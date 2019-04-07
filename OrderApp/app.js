const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./configuration/swagger')
const app = express();
const {errorHandler} = require('./middleware/ErrorHandler');
const config = require('./config').config();
var { restRouter } = require('./routes');
require('./db/MongoDbHandler');
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
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);
module.exports=app;