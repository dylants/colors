"use strict";

var colorGenerator = require("../../../lib/color-generator");

describe("color-generator", function() {

    it("should exist", function() {
        expect(colorGenerator).toBeDefined();
    });

    describe("generateColors function", function() {

        it("should exist", function() {
            expect(colorGenerator.generateColors).toBeDefined();
        });

        it("should return the correct array of HSL colors for the string", function() {
            var text, expected, actual;

            text = "Hello";
            expected = [
                "hsl(0, 100%, 50%);",
                "hsl(200, 100%, 50%);",
                "hsl(0, 100%, 50%);",
                "hsl(0, 100%, 50%);",
                "hsl(120, 100%, 50%);"
            ];

            actual = colorGenerator.generateColors(text);
            expect(actual).toEqual(expected);
        });

        it("should return an empty array for no text", function() {
            var text, expected, actual;

            text = "";
            expected = [];

            actual = colorGenerator.generateColors(text);
            expect(actual).toEqual(expected);
        });

        it("should return an empty array for undefined text", function() {
            var expected, actual;

            expected = [];

            actual = colorGenerator.generateColors();
            expect(actual).toEqual(expected);
        });

    });

    describe("generateColor function", function() {

        it("should exist", function() {
            expect(colorGenerator.generateColor).toBeDefined();
        });

        it("should return the correct HSL color for each character", function() {
            var bee, one, GEE, color;

            bee = "hsl(80, 100%, 50%);";
            color = colorGenerator.generateColor("b");
            expect(color).toEqual(bee);

            one = "hsl(40, 100%, 50%);";
            color = colorGenerator.generateColor("1");
            expect(color).toEqual(one);

            GEE = "hsl(80, 100%, 50%);";
            color = colorGenerator.generateColor("G");
            expect(color).toEqual(GEE);
        });

    });

});
