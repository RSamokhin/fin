var gulp        = require('gulp'),
    plumber = require('gulp-plumber'),
    sass        = require('gulp-sass'),
    gulpif = require('gulp-if'),
    prefixer    = require('gulp-autoprefixer'),
    path = require('../config.js').path,
    connect = require('gulp-connect'),
    cssmin      = require('gulp-cssmin');


gulp.task('sass',function cssCompile (){
    return gulp
        .src(path.src.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(gulpif(global.watch, connect.reload()));
});
gulp.task('css',function cssCompile (){
    return gulp
        .src(path.src.css)
        .pipe(gulp.dest(path.build.css))
        .pipe(gulpif(global.watch, connect.reload()));
});