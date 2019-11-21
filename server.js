var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted: \n')
    res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, () => {
    console.log('Listening on PORT: ' + PORT);
});