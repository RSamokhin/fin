var gulp        = require('gulp'),
    plumber = require('gulp-plumber'),
    sass        = require('gulp-sass'),
    gulpif = require('gulp-if'),
    prefixer    = require('gulp-autoprefixer'),
    path = require('../config.js').path,
    cssmin      = require('gulp-cssmin');



gulp.task('css',function cssCompile (){
    return gulp
        .src(path.src.css)
        .pipe(plumber())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(gulpif(global.watch, connect.reload()));
});