window.Handlers = {
    onload: {
        overlayInit: function () {
            window.fin.$overlay = window.fin.$overlay ? window.fin.$overlay : $('<div class="main__overlay ui-widget-overlay"><div id="progressbar"><div class="progress-label">Загрузка...</div></div></div>').hide().appendTo('body');
            $(window).resize(function(){
                $('.main__overlay').width($(document).width());
                $('.main__overlay').height($(document).height());            
            });
            var progressbar = $( "#progressbar" ),
                 progressLabel = $( ".progress-label" );
             
            progressbar.progressbar({
                value: false,
                change: function() {
                    progressLabel.text( progressbar.progressbar( "value" ) + "%" );
                },
                complete: function() {
                    progressLabel.text( "Complete!" );
                }
            });
            $('.wrapper').show();
        },
        getUserInfo: function () {
            var overlay = window.fin.systemFunctions.generateOverlayNumber('getUserInfo');
            window.fin.systemFunctions.loaderOverlay(1, overlay);
            $.ajax({
                type: 'get',
                url: '/user',
                success: function (userData) {
                    var $userContainer = $('[data-bind-onload=getUserInfo]');
                    window.fin.User = userData;
                    $userContainer.text(userData.firstName + ' ' + userData.firstName);
                    $userContainer.parent().removeClass('m-hidden');
                    window.fin.systemFunctions.loaderOverlay(0, overlay);
                }
            });
        },
        initTabs: function () {
            var overlay = window.fin.systemFunctions.generateOverlayNumber('initTabs');
            window.fin.systemFunctions.loaderOverlay(1, overlay);
            window.fin.$tabs = $('[data-bind-onload=initTabs]').tabs();   
            window.fin.$tabs.find( ".ui-tabs-nav" ).sortable({
                  axis: "x",
                  stop: function() {
                      window.fin.$tabs.tabs( "refresh" );
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
            window.fin.systemFunctions.loaderOverlay(0, overlay);
        },
        initMenu: function () {
            var overlay = window.fin.systemFunctions.generateOverlayNumber('initMainMenu');
            window.fin.systemFunctions.loaderOverlay(1, overlay);
            $('[data-bind-onload=initMenu]').menu();
            window.fin.systemFunctions.loaderOverlay(0, overlay);
        }
    },
    postInit: {
        initDataTables: function (config) {
            switch (config.lookBy) {
                case 'tabId':
                    var $tab = window.fin.$tabs.find('[id="' + config.tabId + '"]');
                    break;
                case 'selector':
                    var $tab = $(config.selector);
                    break;
            }
            var tabConfig = JSON.parse($tab.find('div[data-tab-config=true]').html());
            if (tabConfig.dataTables.ajax) { 
                $tab.find('[data-datatables=true]').DataTable( {
                    "processing": true,
                    "serverSide": true,
                    "searchDelay": 700,
                    ajax: tabConfig.dataTables.ajax,
                    columns: tabConfig.dataTables.columns
                });
            } else if (tabConfig.dataTables.source) {
                $.ajax({
                    url: tabConfig.dataTables.source.url,
                    data: tabConfig.dataTables.source.data,
                    success: function (result) {
                         $tab.find('[data-datatables=true]').DataTable( {
                            "searchDelay": 700,
                            data: result,
                            columns: tabConfig.dataTables.columns
                        });
                    }
                })
            }
        },
        bindClickView: function (config) {
            switch (config.lookBy) {
                case 'tabId':
                    var $tab = window.fin.$tabs.find('[id="' + config.tabId + '"]');
                    break;
                case 'selector':
                    var $tab = $(config.selector);
                    break;
            }
            var tabConfig = JSON.parse($tab.find('div[data-tab-config=true]').html()),
                tabClickBindings = tabConfig.tabClickBindings;
                tabClickBindings.forEach(function (binding) {
                    $tab.on(binding.event, binding.selector, function () {
                        var args = [tabConfig];
                        args.push.apply(args, arguments);
                        window.Handlers[binding.event][binding.func].apply(this, args);
                    });
                });
        },
        initSelect: function (config) {
            var $el = $(this),
                url = $el.attr('data-url'),
                labelTemplate = window.Handlebars.compile($el.attr('data-label-template')
                                            .replace(/\(\(/g, '{{')
                                            .replace(/\)\)/g, '}}')),
                dataValue = $el.attr('data-vaue');
            $.ajax({
                url: url,
                data: (config && config.ajaxData) ? config.ajaxData : {},
                success: function (data) {
                    data.forEach(function (el) {
                        $el.empty();
                        var $newOption = $('<option/>')
                                            .attr({
                                                'value': el[dataValue]
                                            })
                                            .text(labelTemplate(el));
                        if ($el.attr('data-target-field-value')) {
                            $el.attr('data-target-field-value').split('||').forEach(function (val, i) {
                                $newOption.attr('data-value-' + val, el[val])
                            })
                        }
                        $newOption.appendTo($el);
                    });
                    $el.change();
                }
            });
        },
        initAddForm: function(config) {
            switch (config.lookBy) {
                case 'tabId':
                    var $tab = window.fin.$tabs.find('[id="' + config.tabId + '"]');
                    break;
                case 'selector':
                    var $tab = $(config.selector);
                    break;
            }
            $tab.find('[data-pre-init="true"]').each(function(index, $el) {
                $el = $($el);
                switch ($el.attr('data-pre-init-function')) {
                    case 'fetchSelect':
                        window.Handlers.postInit.initSelect.call($el);
                        break;
                }
            })
            
            
            var datepickers = $tab.find('.datepicker');
            datepickers.each(function (index, field) {
               $(field).datepicker(); 
            });
            
            var autoCompleteFields = $tab.find('.autocomplete');
            autoCompleteFields.each(function(index, field){
                var $field = $(field),
                    url = $field.data('autocompleteUrl'),
                    nameField = $field.attr('data-name-field'),
                    names = $field.attr('data-name') ? $field.attr('data-name').split(' ') : [],
                    labelField = $field.attr('data-info-label-field'),
                    labelSelector = $field.attr('data-info-label') ? $field.attr('data-info-label').split(' ') : [],
                    postInintSelectors = $field.attr('data-post-init-target') ? $field.attr('data-post-init-target').split(' ') : [];
                $field.autocomplete({
                    source: url,
                    minLength: 1,
                    select: function(event, ui){
                        var key = ui.item ? ui.item[nameField] : -1;
                        if (names.length) {
                            names.forEach(function (name) {
                                $field.closest('form').find('[name="' + name + '"]').val(key);
                            });
                        }
                        if (labelSelector.length) {
                            var label = 'Выбрано: ' + ui.item.label;
                            labelSelector.forEach(function (selector) {
                                 $field.closest('form').find('[data-info-label="' + selector + '"]').html(label).show();
                            });
                        }
                        if (postInintSelectors.length) {
                            postInintSelectors.forEach(function (selector) {
                                var $element = $(selector),
                                    postInintFunctions = $element.attr('data-post-init-functions').split(' ');
                                postInintFunctions.forEach(function (func) {
                                    var config = {};
                                    if ($element.attr('data-query-param')) {
                                        config.ajaxData = {};
                                        config.ajaxData[$element.attr('data-query-param')] = $($element.attr('data-query-param-value-selector')).val();
                                    }
                                    window.Handlers.postInit[func].call($element, config);
                                });
                            })
                        }
                    }
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
            var overlay = window.fin.systemFunctions.generateOverlayNumber('viewRowFromTableView');
            window.fin.systemFunctions.loaderOverlay(1, overlay);
            var $tableRow = $(this);
            var rowId = $(this).data('id');
            var dataToShow = $.getJSON(
                tabConfig.viewConfig.getElementURL.replace('{id}', rowId),
                function (data) {
                    var dialog = tabConfig.dialog;
                    if (!dialog) {
                        var templateName = tabConfig.viewConfig.formTemplate;
                        var template = window.fin.templates[templateName];
                        if (tabConfig.needEvalReplace === "true") {
                            var splittedHTML = template.split('#$#');
                            splittedHTML.forEach(function (el, index) {
                                if (index % 2 === 1) {
                                    try {
                                        splittedHTML[index] = eval(el);
                                    } catch (e) {
                                        console.log('failed to eval: ' + el);
                                    }
                                }
                            });
                            template = splittedHTML.join('');
                        }
                        dialog = $($('<div/>').html(template.replace(/(^\s+)|(\s+$)/, '')).contents().get(0)).dialog({
                            autoOpen: false,
                            width: 800,
                            height: 540,
                            close: function(event, ui)
                            {
                                $(this).dialog('destroy').remove();
                            }
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
                    dialog.dialog('option', 'modal', 'true')
                    if (tabConfig.viewConfig.postInit && tabConfig.viewConfig.postInit.length) {
                        tabConfig.viewConfig.postInit.forEach(function (initiator) {
                            var args = (initiator.params && initiator.params.length) ? initiator.params : [];
                            window.Handlers.postInit[initiator.func].apply(this, args);
                        })
                    }
                    dialog.dialog('open');
                    window.fin.systemFunctions.loaderOverlay(0, overlay);
                });
        },
        'openNewTab': function () {
            var $menuItem = $(this),
                tabLabel = $menuItem.attr('data-tab-label'),
                tabName = $menuItem.attr('data-tab-name'),
                tabId = 'tabs' + Math.random().toString().slice(2),
                tabHeaderTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Закрыть вкладку</span></li>",
                $tab = $(tabHeaderTemplate.replace( /#\{href\}/g, "#" + tabId).replace( /#\{label\}/g, tabLabel)),
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
                window.Handlers.postInit[func]({
                    tabId: tabId,
                    lookBy: 'tabId'
                });
            });
        },
        'logout': function () {
            var url = $(this).attr('data-logout-url'); 
            location.href = url;
        }
    },
    change: {
        'transferValueFromSelect': function () {
            var $el = $(this),
                fields = $el.attr('data-target-field-value').split('||'),
                val = $el.val(),
                $form = $el.closest('form');
            fields.forEach(function (field) {
                $form.find('[data-autofill="' + field + '"]').val($el.find('[value=' + val + ']').attr('data-value-' + field));
            });
            
        }
    },
    submit: {
        'addNewOperation': function()
        {
            $this = $(this);
            var description = $this.find('[name="description"]').val();
            if (!description)
            {
                alert('');
            }
            var csrf = $.cookie('csrfToken');
            $.post('/operations', {
                'description': description,
                '_csrf': csrf
            }, function(operation){

            });
            return false;
        }
    }
};

window.fin={
    documentation: {
        $tab: '$ объект для табов в главном контейнере',
        User: 'Текущий пользователь системы по /user',
        templates: 'шаблоны Handlebars',
        fieldValidators: 'Функции - валидаторы для полей форм системы',
        $overlay: 'Объект оверлея',
        overlays: 'Объект инициаторов оверлея'
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
    },
    systemFunctions: {
        loaderOverlay: function (ifShow, initiator) {
            if (ifShow) {
                $('.main__overlay').fadeIn();
                $('.main__overlay').width($(document).width());
                $('.main__overlay').height($(document).height());
                window.fin.overlays[initiator] = true;
            } else if (!ifShow) {
                window.fin.overlays[initiator] = false;
                if (Object.keys(window.fin.overlays).every(function (key) {
                    return window.fin.overlays[key] !== true; 
                })) {
                    setInterval(function () {
                        $('.main__overlay').fadeOut();
                    }, 2000)
                }
            }
        },
        generateOverlayNumber: function (func) {
            return func + Math.random();
        }
    },
    overlays: {}
};

$(function(){
    Object.keys(window.Handlers.onload).forEach(function (handler) {
        window.Handlers.onload[handler]();
    })
    Object.keys(window.Handlers).forEach(function (bindFunctionEvent) {
        Object.keys(window.Handlers[bindFunctionEvent]).forEach(function (bindFunctionName) {
            $(document.body).on(bindFunctionEvent, '[data-bind-'+bindFunctionEvent+'*='+bindFunctionName+']', window.Handlers[bindFunctionEvent][bindFunctionName]);
        });
    });
});