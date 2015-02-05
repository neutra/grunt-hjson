/*
 * grunt-hjson
 * https://github.com/neutra/grunt-hjson
 *
 * Copyright (c) 2015 Neutra
 * Licensed under the MIT license.
 */
var hjson = require('hjson');

module.exports = function(grunt) {
  grunt.registerMultiTask('hjson', 'convert hjson to json', function() {
    var path = require('path');
    var chalk = require('chalk');
    this.files.forEach(function(f){
      f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + chalk.cyan(filepath) + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(filepath){
        var destFile = path.normalize(f.dest);
        try {
          var src = grunt.file.read(filepath);
          var dest = JSON.stringify(hjson.parse(src));
          console.log(dest);
          grunt.file.write(destFile, dest);
        } catch (err) {
          grunt.fail.warn(err);
        }
        grunt.log.ok('File ' + chalk.cyan(f.dest) + ' created.');
      })
    });
  });
};