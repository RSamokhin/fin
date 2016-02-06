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
            window.fin.$tabs = $('[data-bind-onload=initTabs]').tabs();   
            window.fin.$tabs.find( ".ui-tabs-nav" ).sortable({
                  axis: "x",
                  stop: function() {
                        window.tabs.tabs( "refresh" );
                  }
            });
            window.fin.$tabs.delegate("span.ui-icon-close", "click", function () {
                var panelId = $(this).closest( "li" ).remove().attr( "aria-controls");
                $("#" + panelId).remove();
                window.fin.$tabs.tabs("refresh");
            });
            window.fin.$tabs.bind("keyup", function (event) {
                if (event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE) {
                    var panelId = window.fin.$tabs.find(".ui-tabs-active").remove().attr("aria-controls");
                    $("#" + panelId).remove();
                    window.fin.$tabs.tabs("refresh");
                }
            });
        }
    },
    postInit: {
        initDataTables: function (tabId) {
            var $tab = window.fin.$tabs.find('[id="' + tabId + '"]'),
                tabConfig = JSON.parse($tab.find('div[data-tab-config=true]').html());
                
            $tab.find('[data-datatables=true]').DataTable( {
                "processing": true,
                "serverSide": true,
                "searchDelay": 700,
                ajax: tabConfig.dataTables.ajax,
                columns: tabConfig.dataTables.columns
            });
        },
        bindClickView: function (tabId) {
            var $tab = window.fin.$tabs.find('[id="' + tabId + '"]'),
                tabConfig = JSON.parse($tab.find('div[data-tab-config=true]').html()),
                tabClickBindings = tabConfig.tabClickBindings;
                tabClickBindings.forEach(function (binding) {
                    $tab.on(binding.event, binding.selector, function () {
                        var args = [tabConfig];
                        args.push.apply(args, arguments);
                        window.Handlers[binding.event][binding.func].apply(this, args);
                    });
                });
        }
    },
    click: {
        'collapseMainMenu': function () {
            var $menu = $('.main__menu-container');
            $menu.toggleClass('m-collapsed');
            return false;
        },
        'viewRowFromTableView': function (tabConfig) {
            var $tableRow = $(this);
            var rowId = $(this).data('id');
            var dataToShow = $.getJSON(
                tabConfig.viewConfig.getElementURL.replace('{id}', rowId),
                function (data) {
                    var dialog = tabConfig.dialog;
                    if (!dialog)
                    {
                        var templateName = tabConfig.viewConfig.formTemplate;
                        var template = window.fin.templates[templateName];
                        dialog = tabConfig.dialog = $(template).dialog({
                            autoOpen: false,
                            width: 800,
                            height: 540
                        });
                    }
                    dialog.dialog('option', 'buttons', {
                        'Сохранить': function(){
                            var url = tabConfig.viewConfig.postElementURL.replace('{id}', rowId);
                            var data = $(this).find('form').serialize();
                            $.ajax(url, {
                                type: 'POST',
                                data: data,
                                success: function (result) {
                                    if (!result.errors)
                                    {
                                        var tds = $tableRow.find('td');
                                        tds.each(function(index, td){
                                            $(td).text(result[tabConfig.dataTables.columns[index].data]);
                                        });
                                        dialog.dialog('close');
                                    }
                                    else
                                    {
                                        alert(result.errors);
                                    }
                                }
                            });
                        },
                        'Отмена': function () {
                            dialog.dialog('close');
                        }
                    });
                    data['_csrf'] = $.cookie('csrfToken');
                    dialog.find('[name]').each(function (index, field){
                        if (!data.hasOwnProperty(field.name))
                            return;
                        
                        field.value = data[field.name];
                    });
                    
                    dialog.dialog('open');
                });
        },
        'openNewTab': function () {
            var $menuItem = $(this),
                tabLabel = $menuItem.attr('data-tab-label'),
                tabName = $menuItem.attr('data-tab-name'),
                tabId = 'tabs' + Math.random(),
                tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Закрыть вкладку</span></li>",
                $tab = $(tabTemplate.replace( /#\{href\}/g, "#" + tabId).replace( /#\{label\}/g, tabLabel)),
                tabContentHtml = 'new tab' + tabName,
                tabTemplate = window.fin.templates[$menuItem.attr('data-template')],
                template = window.Handlebars.compile(tabTemplate),
                context = {},
                postInitFunctions = $menuItem.attr('data-post-init').split(' ');
                window.fin.$tabs.find( ".ui-tabs-nav" ).append($tab);
                window.fin.$tabs.append( "<div id='" + tabId + "'>" + template(context) + "</div>" );
                window.fin.$tabs.tabs( "refresh" );
                window.fin.$tabs.tabs({ active: $('[data-bind-onload="initTabs"]>div').length - 1});
                postInitFunctions.forEach(function (func) {
                window.Handlers.postInit[func](tabId);
            });
        },
        'logout': function () {
            var url = $(this).attr('data-logout-url'); 
            location.href = url;
        }
    }
};

window.fin={
    documentation: {
        $tab: '$ объект для табов в главном контейнере',
        User: 'Текущий пользователь системы по /user',
        templates: 'шаблоны Handlebars',
        fieldValidators: 'Функции - валидаторы для полей форм системы'
    },
    templates: (function () {
        var templates = {}
        $('script[type*=handlebars]').each(function (index, template) {
            templates[$(template).attr('id')] = $(template).html();
        })
        return templates;
    }) (),
    fieldValidators: {
        checkINN: function (type) {
            
        },
        checkLength: function (length) {
            
        }
    }
};

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