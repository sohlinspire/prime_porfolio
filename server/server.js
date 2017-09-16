var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.listen(port);
console.log("Listening on port: ", port);
