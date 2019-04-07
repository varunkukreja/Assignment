var exports = module.exports = {};
var paymentStatusArray = [
    'Declined',
    'Confirmed'
];
exports.doPayment = async (object) => {
    var randomNumber = Math.floor(Math.random()*paymentStatusArray.length);
    return paymentStatusArray[randomNumber];
}

