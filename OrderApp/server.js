const app = require('./app');

app.listen(3000, function () {
    console.info("Application successfully started on port " + app.get('port'));
});
