module.exports = function(config) {
    "use strict";

    config.set({

        basePath: ".",

        files: [
            // angular code
            "../../public/bower_components/angular/angular.js",
            "../../public/bower_components/angular-route/angular-route.js",
            "../../public/bower_components/angular-resource/angular-resource.js",

            // test code
            "../../public/bower_components/angular-mocks/angular-mocks.js",

            // source code
            "../../public/js/**/*.js",

            // test files
            "unit/**/*.js"
        ],

        autoWatch: true,

        frameworks: ["jasmine"],

        browsers: ["Chrome", "Firefox"],

        plugins: [
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine"
        ]
    });
};
