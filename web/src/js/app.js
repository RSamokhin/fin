window.Handlers = {
    onPageLoad: {
        renderTables: function (container) {
            $(container ? container : document.body).find('[data-table-source]').each(function (index, table) {
                var $table = $(table);
                $table.DataTable({
                    paging:     true,
                    ordering:   true,
                    info:       true,
                    destroy:    true,
                    pageLength: 25
                });
            });
        },
        bindWindowScroll: function () {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 170){
                    $('.main__header-splitter').addClass("m-sticky");
                }
                else{
                    $('.main__header-splitter').removeClass("m-sticky");
                }
            });
        },
        activateAutocompletes: function () {
            $.widget( "custom.catcomplete", $.ui.autocomplete, {
                _create: function() {
                    this._super();
                    this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
                },
                _renderMenu: function( ul, items ) {
                    var that = this,
                        currentCategory = "",
                        sortOrder = that.options.sortOrder,
                        realValue = that.options.realValue,
                        displayValue = that.options.displayValue,
                        displayLabel = that.options.displayLabel,
                        arrayObject = {};
                    sortOrder.forEach(function (category) {
                        arrayObject[category] = [];
                    });
                    items.forEach(function (item) {
                        sortOrder.some(function (category) {
                            if (item[category].toString().indexOf(that.term) >= 0) {
                                arrayObject[category].push({
                                    label: displayLabel.reduce(function (a, b, index) {
                                        return a + (item[b] ? ((index > 0 ? ' | ' + b + '=' : '') + item[b]) : '');
                                    }, ''),
                                    value: displayValue.reduce(function (a, b, index) {
                                        return a + (item[b] ? ((index > 0 ? ' | ' + b + '=' : '') + item[b]) : '');
                                    }, ''),
                                    realValue: item[realValue],
                                    category: category
                                });
                                return true;
                            }
                        });
                    });
                    items = sortOrder.reduce(function (a, b) {
                        return a.concat(arrayObject[b]);
                    }, []);
                    $.each(items, function( index, item ) {
                        var li;
                        if ( item.category != currentCategory ) {
                            ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                            currentCategory = item.category;
                        }
                        li = that._renderItemData( ul, item );
                        if ( item.category ) {
                            li.attr( "aria-label", item.category + " : " + item.label );
                        }
                    });
                }
            });
            $('[data-autocomplete-field="true"]').each(function (index, el) {
                var $input = $(el),
                    source = $input.attr('data-autocomplete-source'),
                    realValue = $input.attr('data-autocomplete-value'),
                    displayValue = $input.attr('data-autocomplete-display-value').split(','),
                    displayLabel = $input.attr('data-autocomplete-display-label').split(','),
                    searchParam = $input.attr('data-autocomplete-param'),
                    sortOrder = $input.attr('data-autocomplete-response-priority').split(',');
                $input.catcomplete({
                    source: function (request, response) {
                        var sendData = {};
                        sendData[searchParam] = request.term;
                        $.ajax({
                            url: source,
                            dataType: "json",
                            data: sendData,
                            success: function (data) {
                                response(data);
                            }
                        });
                    },
                    select: function(event, ui) {
                        $el = $(this);
                        if (ui && ui.item && $el.attr('data-traverse-value')) {
                            $el
                                .parent()
                                .find('[name="' + $el.attr('data-traverse-value') + '"]')
                                .val(ui.item.realValue);
                            $el
                                .parent()
                                .find('[data-name="' + $el.attr('data-traverse-value') + '"]')
                                .text('Выбран: ' + ui.item.value)
                                .attr({
                                    'title': ui.item.value
                                });
                        }
                    },
                    realValue: realValue,
                    displayValue: displayValue,
                    displayLabel: displayLabel,
                    sortOrder: sortOrder,
                    minLength: 2,
                    autoFocus: true,
                    delay: 800
                })

            })
        }
    },
    keypress: {
        simpleSearchSubmit: function (event) {
            if (event.which == 13 || event.keyCode == 13) {
                (window.Handlers.click.simpleSearch.bind($(this).closest('[data-main-block=true]').find('[data-search-button]')))();
                return false;
            }
            return true;
        }
    },
    click: {
        traverseEvent: function () {
            var $el = $(this),
                eventTargetSelector = $el.attr('data-event-target-selector'),
                eventName = $el.attr('data-event-name');
            $(eventTargetSelector).trigger(eventName);
        },
        showToggledForm: function() {
            var $button = $(this),
                fName = $button.attr('data-form-name'),
                $parent = $button.closest('[data-main-block=true]'),
                $needForm = $parent.find('[data-form=' + fName + ']'),
                isShowed = !$needForm.hasClass('m-hidden'),
                dataAttrs = $button.attr('data-attrs') ? JSON.parse($button.attr('data-attrs')) : {};
            Object.keys(dataAttrs).forEach(function (key) {
                $button.attr(key, dataAttrs[key]);
            });
            $button.removeAttr('data-attrs');
            $parent.find('[data-form]').addClass('m-hidden');
            if (isShowed) {
                return;
            }
            $needForm.removeClass('m-hidden');
        },
        loadFormFromUrl: function () {
            var $button = $(this),
                fName = $button.attr('data-form-name'),
                $needForm = $button
                                .closest('[data-main-block=true]')
                                .find('[data-append-form=' + fName + ']'),
                url = $button.attr('data-form-url');
            $.get(url, {
                fromAjax: true
            }, function(data){
                $needForm.html(data);
                $needForm.closest('.main-block-form-container').find('[data-bind-click=openTableInNewWindow]').attr('data-new-url', url);
            }, 'html');
        },
        toggleSearchFromExample: function () {
            var $example = $(this),
                $searchField = $($example.attr('data-target-selector')),
                searchValue = $example.attr('data-search-value');
            $searchField.val(searchValue);
            $example.closest('[data-main-block=true]').find('[data-search-button]').trigger('click');
        },
        loadTableFromUrl: function (url) {
            var $button = $(this),
                tableUrl = (url && typeof url === 'string') ? url : $button.attr('data-table'),
                $container = $button.closest('[data-main-block=true]').find('[data-append-table="' + $button.attr('data-table') + '"]'),
                fromSimpleSearch = $button.attr('data-from-simple-search') ? true : false;

            if (!$container.closest('[data-form]').hasClass('m-hidden') || fromSimpleSearch || $container.attr('data-from-simple-search') === 'true') {
                $.get(tableUrl, {
                    fromAjax: true
                }, function (data) {
                    var preloadFunctions = $container.attr('data-preload-handlers') ? $container.attr('data-preload-handlers').split(' ') : [];
                    $container.html(data);
                    $container
                        .closest('[data-form]')
                        .removeClass('m-hidden');
                    $container.closest('.main-block-form-container').find('[data-bind-click=openTableInNewWindow]').attr('data-new-url', tableUrl);
                    if (fromSimpleSearch) {
                        $container.attr('data-from-simple-search', 'true');
                    } else {
                        $container.attr('data-from-simple-search', 'false');
                    }
                    preloadFunctions.forEach(function (func) {
                        window.Handlers.onPageLoad[func]($container);
                    })
                }, 'html');
            }
        },
        simpleSearch: function () {
            var $button = $(this),
                searchString = $($button.attr('data-target-selector')).val(),
                url = $button.attr('data-search-button').replace('{mySearch}', searchString),
                $container = $button.closest('[data-main-block=true]').find('[data-append-table="' + $button.attr('data-table') + '"]');
            $container.attr('data-from-simple-search', true);
            (window.Handlers.click.loadTableFromUrl.bind($button))(url);

        },
        openTableInNewWindow: function () {
            var $button = $(this),
                url = $button.attr('data-new-url');
            window.location = url;
        },
        blockFormCollapse: function () {
            $(this).closest('[data-form]').addClass('m-hidden');
        },
        blockCollapseToggle: function () {
           $(this).closest('[data-main-block=true]').toggleClass('m-collapsed');
        },
        blockToogleFavs: function () {
            $(this).closest('[data-main-block=true]').find('[data-block-fav=true]').toggleClass('m-active');
        },
        deleteFav: function() {
            var favId = $(this).data('favId');
            var $block = $(this).closest('.favs__block');
            var data = {};
            data['_csrf'] = $.cookie('csrfToken');
            $.post('/fav/delete/' + favId, data, function(){
                $block.remove();
            });
            return false;
        },
        goTo: function () {
            var newUrl = $(this).attr('data-go-to');
            window.location = newUrl;
        }
    },
    submit: {
        addFormSimple: function(){
            var submit = $(this).find('input[type=submit]'),
                $form = $(this);
            submit.attr('disabled', 'disabled');
            var data = $(this).serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});
            data['_csrf'] = $.cookie('csrfToken');
            $.post($(this).attr('action'), data, function(data){
                submit.removeAttr('disabled');
                if (data.errors) {
                    data.errors.forEach(function (error) {
                       Object.keys(error).forEach(function (errorField) {
                            var errorText = error[errorField],
                                $inputs = $form.find('[data-tooltip-for="' + errorField + '"]'),
                                tooltips;
                            if ($inputs.length) {
                                $inputs.attr('title', errorText);
                                tooltips = $inputs.tooltip({
                                    position: {
                                        my: "center bottom-20",
                                        at: "center top",
                                        using: function( position, feedback ) {
                                            $( this ).css( position );
                                            $( "<div>" )
                                                .addClass( "arrow" )
                                                .addClass( feedback.vertical )
                                                .addClass( feedback.horizontal )
                                                .appendTo( this );
                                        }
                                    }
                                });
                                tooltips.tooltip( "open" );
                            } else {
                                $('<div/>').attr({
                                    id: 'errorDialog',
                                    title: 'Ошибка'
                                }).text(errorText).dialog({
                                    modal: true
                                });
                            }
                       });
                    });
                    return;
                }
                alert('OK');
            });
            return false;
        }
    },
};

$(function(){
    Object.keys(window.Handlers).forEach(function (bindFunctionEvent) {
        Object.keys(window.Handlers[bindFunctionEvent]).forEach(function (bindFunctionName) {
            $(document.body).on(bindFunctionEvent, '[data-bind-'+bindFunctionEvent+'*='+bindFunctionName+']', window.Handlers[bindFunctionEvent][bindFunctionName]);
        });
    });
    Object.keys(window.Handlers.onPageLoad).forEach(function (handler) {
        window.Handlers.onPageLoad[handler]();
    })
});