var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    path = require('../config.js').path;

gulp.task('fonts',function fontsTask (){
    gulp.src(path.src.fonts)
        .pipe(plumber())
        .pipe(gulp.dest(path.build.fonts))
});