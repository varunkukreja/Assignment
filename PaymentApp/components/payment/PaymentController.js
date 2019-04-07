var paymentService = require('./PaymentService');

doPayment = async (req, res, next) => {
    try {
        let requestBody = req.body;
        let result = await paymentService.doPayment(requestBody);
        res.send(result);
    } catch (err) {
        next(err);
    }
}


module.exports = {doPayment}