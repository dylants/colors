"use strict";

var rewire = require("rewire"),
    lettersToColors = rewire("../../../controllers/letters-to-colors");

describe("letters-to-colors controller", function() {
    var generateColorsText, COLORS;

    COLORS = "red and blue";

    beforeEach(function() {
        lettersToColors.__set__("colorGenerator", {
            generateColors: function(text) {
                generateColorsText = text;
                return COLORS;
            }
        });
    });

    it("should exist", function() {
        expect(lettersToColors).toBeDefined();
    });

    it("should export as a function", function() {
        expect(typeof lettersToColors).toEqual("function");
    });

    it("should define a POST function for /api/letters-to-colors", function() {
        var TEXT, req, res, colors, app, postURI;

        TEXT = "Hello";

        req = {
            body: {
                text: TEXT
            }
        };

        res = {
            send: function(obj) {
                colors = obj.colors;
            }
        };

        app = {
            post: function(uri, callback) {
                postURI = uri;
                callback(req, res);
            }
        };

        lettersToColors(app);

        expect(postURI).toEqual("/api/letters-to-colors");
        expect(generateColorsText).toEqual(TEXT);
        expect(colors).toEqual(COLORS);
    });

});
