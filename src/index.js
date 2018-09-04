var express = require('express');
var app = express();

var HOST = '0.0.0.0';
var PORT = process.env.PORT || 3000;
var VIRTUAL_HOST = process.env.VIRTUAL_HOST || '';

app.get('/', function (req, res) {
  res.send('Serving: ' + VIRTUAL_HOST);
});

app.listen(PORT, HOST, function () {
  console.log('Example app listening on port ' + PORT);
});
