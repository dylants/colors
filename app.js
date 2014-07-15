"use strict";

var express = require("express"),
    bodyParser = require("body-parser"),
    fs = require("fs"),
    cons = require("consolidate"),
    app = express();

// read the port from the environment, else set to 3000
app.set("port", process.env.PORT || 3000);

// configure view rendering (underscore)
app.engine("html", cons.underscore);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

// use express' body parser to access body elements later
app.use(bodyParser.json());

// pull in all the controllers (these contain routes)
fs.readdirSync("controllers").forEach(function(controllerName) {
    require("./controllers/" + controllerName)(app);
});

// static assets processed after routes, mapped to /public
app.use("/public", express.static(__dirname + "/public"));

// start the app on HTTP
app.listen(app.get("port"), function() {
    console.log("Express server listening on HTTP on port " + app.get("port"));
});
