"use strict";

module.exports = function(app) {

    app.post("/api/letters-to-colors", function(req, res) {
        var text, colors;

        // pull the text from the request body
        text = req.body.text;

        // generate the colors passing in the text
        colors = generateColors(text);

        // respond to the client with the generated colors
        res.send({
            colors: colors
        });
    });

    function generateColors(text) {
        var i, colors, color;

        colors = [];

        // generate a color for each character in the text string,
        // adding it to our colors array
        for (i = 0; i < text.length; i++) {
            color = generateColor(text.charAt(i));
            colors.push(color);
        }

        return colors;
    }

    function generateColor(character) {
        var color;

        // convert the character to an ascii value
        color = character.charCodeAt(0);

        // increase the distance between characters to create a wider spectrum
        color = color * 1000;

        // bound that value to 0 - 360 (the hsl color space)
        color = color % 360;

        // return an HSL representation of the color,
        // using default 100% saturation and 50% lightness
        return "hsl(" + color + ", 100%, 50%);";
    }

};