require(
    ['modules/background', 'jquery'],
    function( Module, $ ){
        console.log('main = ' + $);
        $('body').append( Module.foo );
    }
);