var gulp = require('gulp');
    gulpif = require('gulp-if');
    plumber = require('gulp-plumber');
    webpackStream = require('webpack-stream');
    browserSync = require('browser-sync');
    path = require('../config.js').path;
    webpackConfig = require('../../webpack.config.js');
    errorHandler = require('../errorHandler.js');

gulp.task('scripts', function scriptsTask() {
    return gulp.src(path.src.js)
        .pipe(plumber({errorHandler: errorHandler}))
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest(path.build.js))
        .pipe(gulpif(global.watch, browserSync.stream()));
});



gulp.task('scripts',function scriptsTask () {
    return gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(connect.reload());
});