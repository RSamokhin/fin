var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    connect = require('gulp-connect'),
    path = require('../config.js').path;



gulp.task('images',function imagesTask () {
    return function () {
        gulp
            .src(path.src.img)
            .pipe(plumber())
            .pipe(imagemin({
                progressive:true,
                svgoPlugins:[{
                    removeViewBox:false
                }],
                use:[
                    pngquant()
                ],
                interlaced:true
            }))
            .pipe(gulp.dest(path.build.img))
            .pipe(gulpif(global.watch, connect.reload()));
        gulp.src(path.src.ico)
            .pipe(gulp.dest(path.build.ico))
            .pipe(gulpif(global.watch, connect.reload()));
    }()
});
