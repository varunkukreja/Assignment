const app = require('./app');

app.listen(app.get('port'), function () {
    console.info("Application successfully started on port " + app.get('port'));
});
