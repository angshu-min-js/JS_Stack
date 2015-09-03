var express = require('express');
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOveride = require("method-override");

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


app.listen(3000);
console.log("App Listening on port 3000 :D")
