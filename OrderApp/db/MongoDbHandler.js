var mongoose = require('mongoose');
var CommonUtil=require('../util/CommonUtil');
var {saveDummyData}=require('../DummyData');
//mongoose.set('debug', true);
var dbConfig = require('../config').config().mongodb;
var mongoDbUri="";
mongoose.Promise=global.Promise;
// Create the database connection 
if(CommonUtil.isKeyValid(dbConfig.USERNAME)&& CommonUtil.isKeyValid(dbConfig.PASSWORD)){
    mongoDbUri="mongodb://"+dbConfig.USERNAME+":"+dbConfig.PASSWORD+"@"+dbConfig.HOST+
    ":"+dbConfig.PORT+"/"+dbConfig.DB_NAME
}else{
    mongoDbUri="mongodb://"+dbConfig.HOST+
    ":"+dbConfig.PORT+"/"+dbConfig.DB_NAME
}

mongoose.connect(mongoDbUri, {useNewUrlParser: dbConfig.USE_MONGO_NEW_URL_PARSER});


// When successfully connected
mongoose.connection.on('connected', function () {
    console.log("Mongoose default connection opened.");
    saveDummyData();
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
    process.exit();
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

