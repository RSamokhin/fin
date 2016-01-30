window.Handlers = {
    onload: {
        getUserInfo: function () {
            $.ajax({
                type: 'get',
                url: '/user',
                success: function (userData) {
                    var $userContainer = $('[data-bind-onload=getUserInfo]');
                    window.fin.User = userData;
                    $userContainer.text(userData.firstName + ' ' + userData.firstName);
                    $userContainer.parent().removeClass('m-hidden');
                    
                }
            });
        },
        initTabs: function () {
            window.fin.tabs = $('[data-bind-onload=initTabs]').tabs();   
            window.fin.tabs.find( ".ui-tabs-nav" ).sortable({
                  axis: "x",
                  stop: function() {
                        window.tabs.tabs( "refresh" );
                  }
            });
        }
    },
    click: {
        'collapseMainMenu': function () {
            var $menu = $('.main__menu-container');
            $menu.toggleClass('m-collapsed');
            return false;
        },
        'openNewTab': function () {
            var $menuItem = $(this),
                tabName = $(this).attr('data-tab-name');
            
            
            
            
            
            
        },
        'logout': function () {
            var url = $(this).attr('data-logout-url');
            location.href = url;
        }
    }
};

window.fin={};

$(function(){
    Object.keys(window.Handlers).forEach(function (bindFunctionEvent) {
        Object.keys(window.Handlers[bindFunctionEvent]).forEach(function (bindFunctionName) {
            $(document.body).on(bindFunctionEvent, '[data-bind-'+bindFunctionEvent+'*='+bindFunctionName+']', window.Handlers[bindFunctionEvent][bindFunctionName]);
        });
    });
    Object.keys(window.Handlers.onload).forEach(function (handler) {
        window.Handlers.onload[handler]();
    })
});