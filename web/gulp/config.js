module.exports = {
    path: {
        build: {
            jade_static: 'build/',
            jade_client: 'build/js/jade',
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/',
            fonts: 'build/fonts/',
            ico: 'build/'

        },
        src: {
            jade_client: 'src/jade/modules/*.jade',
            jade_static: 'src/jade/static/**/*.jade',
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
    },
    server: {
        host        : 'localhost',
        port        : '8080'
    }
};