
define(
    'modules/main',
    [
        'jquery',
        'lib/socket'
    ],
    function($, Socket){
        var user,
            $parentContainer = $('body');

        if (!user) {
            require([ 'jade/login-form' ], function(LoginForm) {
                $parentContainer.html(LoginForm());
            });

            var socket = Socket();
            socket.emit('chat.message', 'sdsd');
        }

    }
);

