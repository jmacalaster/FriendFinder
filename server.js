//Load NPM dependencies 

var express = require("express");
var bodyParser = require("body-parser");

//Configure express

var app = express();

//Set up PORT (using the best practice of either process.end.PORT for heroku or my local port of 8080)
var PORT = process.env.PORT || 8080;

//Set up Express 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Point to our router files so that the application knows where to navigate 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Create a listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});