module.exports = {
    path: {
        build: {
            jade: 'build/',
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/',
            fonts: 'build/fonts/',
            ico: 'build/'

        },
        src: {
            jade: 'src/jade/static/*.jade',
            js: 'src/js/**/*.js',
            css: 'src/style/main.scss',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*',
            ico: 'src/*.ico'
        },
        watch: {
            jade: 'src/jade/**/*.jade',
            js: 'src/js/**/*.js',
            css: 'src/style/**/*.*',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        clean: "build/"
    }
};