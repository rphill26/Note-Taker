var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }))

require('./Develop/routing/html-routes.js')(app);
require('./Develop/routing/api-routes.js')(app);

app.listen(PORT, () => {
    console.log('Listening on PORT: ' + PORT);
});