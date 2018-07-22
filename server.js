var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

 var routes = require("./controllers/burgers_controller.js");

 app.use(routes);

 app.listen(PORT, function(){
     console.log("server on http://localhost:" + PORT);
 });