"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            files: [
                "**/*.js"
            ],
            options: {
                ignores: [
                    "node_modules/**",
                    "public/bower_components/**",
                    "public/css/**",
                    "public/js/lib/**"
                ],
                jshintrc: true
            }
        },
        jasmine_node: {
            options: {
                matchall: true,
                showColors: true
            },
            all: ["test/server"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jasmine-node");

    grunt.registerTask("default", ["jshint", "jasmine_node"]);
};
