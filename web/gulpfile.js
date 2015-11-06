'use strict';
var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    prefixer    = require('gulp-autoprefixer'),
    uglify      = require('gulp-uglify'),
    cssmin      = require('gulp-cssmin'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    rigger      = require('gulp-rigger'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    rimraf      = require('gulp-rimraf'),
    connect     = require('gulp-connect'),
    opn         = require('opn'),
    jade        = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    path = {
    build:{
        html    : 'build/',
        js      : 'build/js/',
        css     : 'build/css/',
        img     : 'build/img/',
        fonts   : 'build/fonts/',
        ico     : 'build/'

    },
    src:{
        html    : 'src/*.html',
            jade    : 'src/jade/*.jade',
        js      : 'src/js/main.js',
        css     : 'src/style/main.scss',
        img     : 'src/img/**/*.*',
        fonts   : 'src/fonts/**/*.*',
        ico     : 'src/*.ico'
    },
    watch:{
        html    : 'src/**/*.html',
        jade    : 'src/jade/**/*.jade',
        js       : 'src/js/**/*.js',
        css     : 'src/style/**/*.scss',
        img     : 'src/img/**/*.*',
        fonts   : 'src/fonts/**/*.*'
    },
    clean: "build/"
};
var server = {
    host        : 'localhost',
    port        : '8888'
};
gulp.task('html:build',function(){
    gulp.src(path.src.jade)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(connect.reload())
});
gulp.task('js:build',function(){
    gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(connect.reload())
});
gulp.task('style:build',function(){
    gulp.src(path.src.css)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(connect.reload())
});
gulp.task('image:build',function(){
    gulp.src(path.src.img)
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
        .pipe(connect.reload());
    gulp.src(path.src.ico)
        .pipe(gulp.dest(path.build.ico))
        .pipe(connect.reload());
});
gulp.task('fonts:build',function(){
    gulp.src(path.src.fonts)
        .pipe(plumber())
        .pipe(gulp.dest(path.build.fonts))
});
gulp.task('build',[
    'html:build',
    'js:build',
    'style:build',
    'image:build',
    'fonts:build'
]);
gulp.task('watch',function(){
    watch([path.watch.jade],function(){
        gulp.start('html:build');
    });
    watch([path.watch.js],function(){
        gulp.start('js:build');
    });
    watch([path.watch.css],function(){
        gulp.start('style:build');
    });
    watch([path.watch.img],function(){
        gulp.start('image:build');
    });
    watch([path.watch.fonts],function(){
        gulp.start('fonts:build');
    });
});
gulp.task('webserver',function(){
    connect.server({
        host:server.host,
        port:server.port,
        livereload:true
    });
});
gulp.task('clean',function(cb){
    rimraf(path.clean, cb);
});
gulp.task('openbrowser',function(){
    opn('http://'+server.host+':'+server.port+'/build');
});
gulp.task('default',[
    'clean',
    'build',
    'webserver',
    'watch',
    'openbrowser'
]);