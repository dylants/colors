"use strict";

angular.module("colorsApp").controller("ColorsCtrl", ["$scope", "LettersToColorsService",
    function($scope, lettersToColorsService) {

        // default the colors to an empty array
        $scope.colors = [];

        // shows the colors if there are colors to show
        $scope.showColors = function() {
            if ($scope.colors && $scope.colors.length > 0) {
                return true;
            } else {
                return false;
            }
        };

        // called when the user clicks "Transform"
        $scope.transform = function($event) {
            // unfocus the button after it was clicked
            $event.currentTarget.blur();

            // call the API to generate the colors, which is a POST
            // request so we'll pass in the text within the request body
            lettersToColorsService.generateColors({
                text: $scope.textToTransform
            }, function(resource, headers) {
                // -- this block is called on a successful response --

                // pull the colors from the response and place it
                // in our scope, so it can be displayed on the page
                $scope.colors = resource.colors;
            }, function(response) {
                // -- this block is called when the API returns an error --
                
                console.error("Error occurred processing letters-to-colors API");
                console.error(response);
            });
        };

    }
]);
