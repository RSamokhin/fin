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
        }
    },
    click: {
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
            var onOpen = $needForm.data('onOpen');
            var handler = onOpen && window.Handlers.onToggledFormOpen && window.Handlers.onToggledFormOpen[onOpen];
            if (handler) {
                handler.call($needForm);
            }
        },
        switchMainMenu: function () {
            $('[data-menu-button=true]').removeClass('m-active');
            if ($(this).attr('data-menu-button')) {
                $(this).addClass('m-active');
            }
        },
        loadTableFromUrl: function () {
            var $button = $(this),
                tableUrl = $button.attr('data-table'),
                $container = $button.closest('[data-main-block=true]').find('[data-append-table="' + tableUrl + '"]');
            $.get(tableUrl, {
                fromAjax: true
            }, function (data) {
                var preloadFunctions = $container.attr('data-preload-handlers') ? $container.attr('data-preload-handlers').split(' ') : [];
                $container.html(data);
                preloadFunctions.forEach(function (func) {
                    window.Handlers.onPageLoad[func]($container);
                })
            }, 'html')
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
            location.replace(newUrl);
        }
    },
    submit: {
        addSubject: function(){

            var submit = $(this).find('input[type=submit]');
            submit.attr('disabled', 'disabled');
            var data = $(this).serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});
            data['_csrf'] = $.cookie('csrfToken');
            $.post($(this).attr('action'), data, function(data){
                submit.removeAttr('disabled');
                if (data.errors)
                {
                    alert(data.errors.map(function(error){
                        return Object.keys(error).map(function(field){
                            return error[field];
                        }).join(',');
                    }).join('\n'));
                    return;
                }
                alert('OK');
            });
            return false;
        }
    },
    onToggledFormOpen: {
        loadFavs: function() {
            this.addClass('m-hidden');
            var form = this;
            $.get('/fav', function(favs){
                form.replaceWith(favs);
            }, 'html');
        }
    }
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