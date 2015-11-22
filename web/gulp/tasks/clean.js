var gulp = require('gulp'),
    del = require('del'),
    path = require('../config.js').path;

gulp.task('clean', function cleanTask(cb) {
    del(path.clean).then(function() {
        cb();
    });
});