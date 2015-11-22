var gulp = require('gulp'),
    path = require('../config.js').path;

gulp.task('watch',function(){
    watch([path.watch.jade],function(){
        gulp.start('jade');
    });
    watch([path.watch.js],function(){
        gulp.start('scripts');
    });
    watch([path.watch.css],function(){
        gulp.start('css');
    });
    watch([path.watch.img],function(){
        gulp.start('images');
    });
    watch([path.watch.fonts],function(){
        gulp.start('fonts');
    });
});