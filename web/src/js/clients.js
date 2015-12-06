define(
    'clients',
    [
        'jade/basetable'
    ],
    function(baseTable)
    {
        var clients = [
            {
                id: 1,
                name: 'aasdad'
            }
        ];
        return {
            show: function(element) {
                $(element).html(baseTable({
                    header: Object.keys(clients[0]),
                    data: clients
                }));
            }
        }
    }
);