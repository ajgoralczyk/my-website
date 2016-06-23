"use strict";
var gulp = require("gulp");  
var del = require("del");  
var sourcemaps = require('gulp-sourcemaps');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {  
    return del(["build"], cb);
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", ["server", "app", "assets"], function () {  
    console.log("Building resources...");
});
/* copy the app core files to the build folder */
gulp.task("app", ['index'], function(){  
    return gulp.src(["app/**"])
        .pipe(gulp.dest("build/app"));
});
/* get the index file to the root of the build */
gulp.task("index", function(){  
    return gulp.src(["index.html"])
        .pipe(gulp.dest("build"));
});
/* copy node server to build folder */
gulp.task("server", function () {  
    return gulp.src(["server.js", "system.config.js", "package.json"])
        .pipe(gulp.dest("build"));
});
/* styles and other assets */
gulp.task("assets", function(){  
    return gulp.src(["css/main.css"])
        .pipe(gulp.dest("build/css"));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {  
    return gulp.src([
    	'@angular/**/*.js',
    	'core-js/client/shim.min.js',
    	'font-awesome/**/*.*',
    	'gumshoe/dist/js/gumshoe.js',
    	'ng2-translate/ng2-translate.js',
    	'ng2-translate/src/*.js',
	    'reflect-metadata/Reflect.js',
	    'rxjs/**/*.js',
	    'smooth-scroll/dist/js/smooth-scroll.js',
	    'systemjs/dist/system.src.js',
	    'zone.js/dist/zone.js',
        'rxjs/bundles/Rx.js'

    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/node_modules"));
});
/**
 * Build the project.
 */
gulp.task("default", ['resources', 'libs'], function () {  
    console.log("Building the project ...");
});