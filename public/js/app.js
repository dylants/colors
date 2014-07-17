"use strict";

// the colorsApp is the main module for the application
// this defines the module, along with it's dependencies
// (note that it depends on the services module below)
angular.module("colorsApp", ["ngRoute", "colorsApp.services"]);

// the services module contains all the services for the application
// this defines the module, along with it's dependencies
angular.module("colorsApp.services", ["ngResource"]);


// declare the routes for our module
angular.module("colorsApp").config(["$routeProvider",
    function($routeProvider) {
        // currently we have only one route, which loads our
        // colors template, which uses the ColorsCtrl
        $routeProvider.otherwise({
            templateUrl: "/public/partials/colors.html",
            controller: "ColorsCtrl"
        });
    }
]);
