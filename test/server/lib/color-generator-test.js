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

    });

});
