"use strict";

describe("ColorsCtrl", function() {
    var $scope, controller;

    // load the colorsApp module
    beforeEach(module("colorsApp"));

    // module loading and injector must exist separately,
    // so creation of the $scope and controller exist in
    // a separate beforeEach statement than loading the module
    beforeEach(inject(function($rootScope, $controller) {

        // create a new $scope for each test
        $scope = $rootScope.$new();

        // use the new $scope in creating the controller
        controller = $controller("ColorsCtrl", {
            $scope: $scope
        });

    }));

    it("should exist", function() {
        expect(controller).toBeDefined();
    });

});
