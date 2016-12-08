/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

// Broccoli stuff
var Filter    = require('broccoli-filter');
var log       = require('broccoli-stew').log;
var debugTree = require('broccoli-stew').debug;

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

    function MyFilter(inputNode) {
      Filter.call(this, inputNode);
    }

    MyFilter.prototype = Object.create(Filter.prototype);

    // How are we going to process the string?
    MyFilter.prototype.processString = function stringProcessor(existingString) {
      let prepend = `
// vendor.js
//
// (c) 2016 😺😸😹😻😼😽🙀😿 All Rights Reserved
// generated at: ${new Date()}
//\n\n`
      return prepend + existingString;
    };

    MyFilter.prototype.extensions = ["js"];      // only target js files
    MyFilter.prototype.targetExtension = ["js"]; // emit a js file

    return new MyFilter(app.toTree());
};
