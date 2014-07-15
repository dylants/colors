"use strict";

angular.module("colorsApp.services").factory("LettersToColorsService", ["$resource",
    function($resource) {
        var resource;

        resource = $resource("/api/letters-to-colors", null, {
            generateColors: {
                method: "POST"
            }
        });

        return resource;
    }
]);
