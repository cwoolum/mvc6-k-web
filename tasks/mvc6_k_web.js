/*
 * mvc6-k-web
 * https://github.com/cwoolum/mvc6-k-web
 *
 * Copyright (c) 2015 Chris Woolum
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var cp = require('child_process')
   , f = require('util').format
   , _ = grunt.util._
   , log = grunt.log
   , verbose = grunt.verbose;

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerTask('k-web-start', 'A simple grunt plugin for running the KPM server.', function () {
        var data = this.data
       , childProcess
       , done = this.async();

        data.cwd && (execOptions.cwd = data.cwd);
        data.maxBuffer && (execOptions.maxBuffer = data.maxBuffer);

        childProcess = cp.exec("k", "web", callback);

        childProcess.on('error', function (err) {
            log.error(f('Failed with: %s', err));
            done(false);
        });

        childProcess.on('exit', function (code) {
            if (exitCodes.indexOf(code) < 0) {
                log.error(f('Exited with code: %d.', code));
                return done(false);
            }

            verbose.ok(f('Exited with code: %d.', code));
            done();
        });
    });

};
