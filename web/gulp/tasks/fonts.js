var gulp = require('gulp'),
    plumber = require('plumber'),
    path = require('../config.js').path;

gulp.task('fonts',function fontsTask (){
    return gulp
        .src(path.src.fonts)
        .pipe(plumber())
        .pipe(gulp.dest(path.build.fonts))
});