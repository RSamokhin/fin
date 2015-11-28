var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', function defaultTask() {
    runSequence(
        'build',
        'webserver',
        'watch'
    );
});

gulp.task('build', function buildTask(cb) {
    runSequence(
        'clean',
        'fonts',
        'images',
        'scripts',
        'css',
        'jade',
        'jade_client',
        cb
    );
});


