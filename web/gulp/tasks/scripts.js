var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    path = require('../config.js').path;

gulp.task('scripts',function scriptsTask () {
    return gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(gulp.dest(path.build.js))
        .pipe(gulpif(global.watch, connect.reload()));
});