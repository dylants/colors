"use strict";

angular.module("colorsApp").controller("ColorsCtrl", ["$scope", "LettersToColorsService",
    function($scope, lettersToColorsService) {

        // default the colors to an empty array
        $scope.colors = [];

        $scope.showColors = function() {
            if ($scope.colors && $scope.colors.length > 0) {
                return true;
            } else {
                return false;
            }
        };

        $scope.transform = function($event) {
            // unfocus the button after it was clicked
            $event.currentTarget.blur();

            // call the API to generate the colors from our text
            lettersToColorsService.generateColors({
                textToTransform: $scope.textToTransform
            }, function(resource, headers) {
                // this block is called on a successful response

                // pull the colors from the response and place it
                // in our scope, so it can be displayed on the page
                $scope.colors = resource.colors;
            }, function(response) {
                // this block is called when an error occurs
                
                console.error("Error occurred processing letters-to-colors API");
                console.error(response);
            });
        };

    }
]);
