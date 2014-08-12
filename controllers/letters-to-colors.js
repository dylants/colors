"use strict";

var colorGenerator = require("../lib/color-generator");

module.exports = function(app) {

    app.post("/api/letters-to-colors", function(req, res) {
        var text, colors;

        // pull the user supplied text from the request body
        text = req.body.text;

        // generate the colors, passing in the text
        colors = colorGenerator.generateColors(text);

        // respond to the client with the generated colors
        res.send({
            colors: colors
        });
    });

};
