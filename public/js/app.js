"use strict";

// configure the modules

// the colorsApp is the main module for the application
// the dependencies are listed in the second argument
angular.module("colorsApp", ["ngRoute", "colorsApp.services"]);

// this services module contains all the services for the application
// the dependencies are listed in the second argument
angular.module("colorsApp.services", ["ngResource"]);


// declare the routes
angular.module("colorsApp").config(["$routeProvider",
    function($routeProvider) {
        $routeProvider.otherwise({
            templateUrl: "/public/partials/colors.html",
            controller: "ColorsCtrl"
        });
    }
]);
