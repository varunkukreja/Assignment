var user = { "name": "abc", email: "abc@gmail.com", password: "12345" };
var products = [{ productName: "Apple" }, { productName: "Samsung" }];

var productDao = require('./components/product/ProductDao');
var userDao = require('./components/user/UserDao');

saveDummyData = async () => {
    try {
        await productDao.insertMany(products);
        await userDao.saveUser(user);
    } catch (err) {

    }
}
module.exports={saveDummyData}