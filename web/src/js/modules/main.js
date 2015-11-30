
define(
    'modules/main',
    [
        'jquery'
    ],
    function($){
        var user,
            $parentContainer = $('body');

        if (!user) {
            require([ 'jade/login-form' ], function(LoginForm) {
                $parentContainer.html(LoginForm());
            });
        }

    }
);

