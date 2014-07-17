"use strict";

module.exports = function(app) {
    /*
     * The point of this controller is to render our main (and only)
     * view, which will kick off the Angular side of things. Default
     * the route to "/" to redirect to "/colors", and allow all routes
     * below "/colors" to render the view.
     */

    app.get("/", function(req, res) {
        res.redirect("/colors");
    });
    app.get("/colors*", function(req, res) {
        res.render("colors.html");
    });

};
