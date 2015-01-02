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
        var childProcess,
        done = this.async();

        childProcess = cp.exec("k", "web", function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

        childProcess.on('error', function (err) {
            log.error(f('Failed with: %s', err));
            done(false);
        });

        childProcess.on('exit', function (code) {
            //if (exitCodes.indexOf(code) < 0) {
            //    log.error(f('Exited with code: %d.', code));
            //    return done(false);
            //}

            verbose.ok(f('Exited with code: %d.', code));
            done();
        });
    });

};
