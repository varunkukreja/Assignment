const moment = require('moment');
var exports = module.exports = {};

exports.today=()=>{
    return new Date();
}

exports.getMilliseconds=()=>{
    return new Date().getTime();
}

exports.format=(date)=>{
    return moment(date).format('DD-MMM-YYYY HH:mm:ss');
}