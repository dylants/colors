"use strict";

angular.module("colorsApp.services").factory("LettersToColorsService", ["$resource",
    function($resource) {
        var resource;

        // HTTP resource to our API endpoint
        resource = $resource("/api/letters-to-colors", null, {
            // this function represents the POST operation to our endpoint
            // which is responsible for generating the colors
            generateColors: {
                method: "POST"
            }
        });

        return resource;
    }
]);
