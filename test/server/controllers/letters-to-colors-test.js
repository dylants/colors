"use strict";

var lettersToColors = require("../../../controllers/letters-to-colors");

describe("letters-to-colors controller", function() {

    it("should exist", function() {
        expect(lettersToColors).toBeDefined();
    });

    describe("generateColors function", function() {

        it("should exist", function() {
            expect(lettersToColors.generateColors).toBeDefined();
        });

    });

});
