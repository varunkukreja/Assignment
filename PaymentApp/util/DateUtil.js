const moment = require('moment');
var exports = module.exports = {};
var momentObject=moment();

exports.today=()=>{
    return new Date();
}

exports.getMilliseconds=()=>{
    return new Date().getTime();
}

exports.format=(date)=>{
    return moment(date).format('DD-MMM-YYYY hh:mm:ss');
}