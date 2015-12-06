define(
    'menu',
    [
        'jade/static/menu',
        'clients'
    ],
    function(menu)
    {
        return function(element) {
            $(element).prepend(menu());
            $('ul.menu li', element).on('click', function(e)
            {
                var module = $(this).data('module');
                if (module === undefined)
                    return;
                module = require(module);
                module.show($('#content'));
            })
        };
    }
);