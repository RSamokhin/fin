var gulp        = require('gulp'),
    plumber = require('gulp-plumber'),
    sass        = require('gulp-sass'),
    gulpif = require('gulp-if'),
    prefixer    = require('gulp-autoprefixer'),
    path = require('../config.js').path,
    connect = require('gulp-connect'),
    gutil = require('gulp-util'),
    cssmin      = require('gulp-cssmin');



gulp.task('css',function cssCompile (){
    return gulp
        .src(path.src.css)
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(gulpif(global.watch, connect.reload()));
});