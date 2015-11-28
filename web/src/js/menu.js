define(
    'menu',
    ['lib/jquery', 'jade/includes/menu'],
    function($, menu)
    {
        return {
            renderMenu: function(element)
            {
                return $(element).append(menu());
            }
        };
    }
);