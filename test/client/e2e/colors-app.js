"use strict";

describe("Colors App", function() {

    // get the index page
    browser.get("index.html");

    it("should display heading", function() {
        // the "$()" is the same as element(by.css())
        expect($("h1").getText()).toEqual("Colors");
    });

});
