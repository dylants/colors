"use strict";

angular.module("colorsApp").controller("ColorsCtrl", ["$scope",
    function($scope) {
        $scope.transform = function($event) {
            // unfocus the button after it was clicked
            $event.currentTarget.blur();

            console.log($scope.textToTransform);
        };
    }
]);
