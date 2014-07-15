"use strict";

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.redirect("/colors");
    });
    app.get("/colors*", function(req, res) {
        res.render("colors.html");
    });
};
