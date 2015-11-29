var gulp = require('gulp'),
    watch = require('gulp-watch'),
    path = require('../config.js').path;

gulp.task('watch',function(){
    watch([path.watch.jade],function(){
        gulp.start('jade');
        gulp.start('jade_client');
    });
    watch([path.watch.js],function(){
        gulp.start('scripts');
    });
    watch([path.watch.css],function(){
        gulp.start('css');
    });
    watch([path.watch.sass],function(){
        gulp.start('sass');
    });
    watch([path.watch.img],function(){
        gulp.start('images');
    });
    watch([path.watch.fonts],function(){
        gulp.start('fonts');
    });
});