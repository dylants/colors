"use strict";

module.exports = function(app) {

    app.post("/api/letters-to-colors", function(req, res) {
        var colors = generateColors();

        res.send({
            colors: colors
        });
    });

    function generateColors() {
        var colors = [];

        for (var i = 0; i < 10; i++) {
            colors.push(generateColor());
        }

        return colors;
    }


    function generateColor() {
        return "rgb(" + generateNum(0, 256) + ", " + generateNum(0, 256) + ", " + generateNum(0, 256) + ");";
    }

    /**
     * Generates a number between low and high
     *
     * @param  {Number} low  The lower bound for the number generator
     * @param  {Number} high The upper bound for the number generator
     * @return {Number}      A number between low and high
     */
    function generateNum(low, high) {
        return Math.floor(Math.random() * ((+high) - (+low) + 1)) + (+low);
    }

};
