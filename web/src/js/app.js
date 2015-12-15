window.Handlers = {
    click: {
        showToggledForm: function() {
            var $button = $(this),
                fName = $button.attr('data-form-name'),
                $parent = $button.closest('[data-main-block=true]');
            var $needForm = $parent.find('[data-form=' + fName + ']');
            var isShowed = !$needForm.hasClass('m-hidden');
            $parent.find('[data-form]').addClass('m-hidden');
            if (isShowed)
                return;
            $needForm.removeClass('m-hidden');
            var onOpen = $needForm.data('onOpen');
            var handler = onOpen && window.Handlers.onToggledFormOpen && window.Handlers.onToggledFormOpen[onOpen];
            if (handler)
            {
                handler.call($needForm);
            }
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
        goHome: function () {
            location.replace('/');
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
        $('[data-table-source=subjects]').DataTable( {
            paging:   true,
            ordering: true,
            info:     true,
            destroy: true,
            pageLength: 25
        } );
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 170){
        $('.main__header-splitter').addClass("m-sticky");
    }
    else{
        $('.main__header-splitter').removeClass("m-sticky");
    }
});