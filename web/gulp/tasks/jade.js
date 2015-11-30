var gulp = require('gulp'),
    jade = require('gulp-jade'),
    gulpif = require('gulp-if'),
    plumber = require('gulp-plumber'),
    wrap = require('gulp-wrap-amd'),
    path = require('../config.js').path,
    connect     = require('gulp-connect');

gulp.task('jade',function jadeCompile () {
    return gulp.src(path.src.jade_static)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.jade_static))
        .pipe(gulpif(global.watch, connect.reload()));
});
gulp.task('jade_client',function jadeCompile () {
    return gulp.src(path.src.jade_client)
        .pipe(plumber())
        .pipe(jade({
            pretty: true,
            client: true
        })).pipe(wrap({
            deps: ['lib/runtime'],
            params: ['jade']
        }))
        .pipe(gulp.dest(path.build.jade_client))
        .pipe(gulpif(global.watch, connect.reload()));
});
