window.Handlers = {
    click: {
        showToggledForm: function() {
            var $button = $(this),
                fName = $button.attr('data-form-name'),
                $parent = $button.closest('[data-main-block=true]');
            $parent.find('[data-form][data-form!=' + fName + ']').addClass('m-hidden');
            $parent.find('[data-form=' + fName + ']').toggleClass('m-hidden');
        },
        blockFormCollapse: function () {
            $(this).closest('[data-form]').addClass('m-hidden');
        },
        blockCollapseToggle: function () {
           $(this).closest('[data-main-block=true]').toggleClass('m-collapsed');
        },
        blockToogleFavs: function () {
            $(this).closest('[data-main-block=true]').find('[data-block-fav=true]').toggleClass('m-active');
        }
    }
};


$(function(){
    Object.keys(window.Handlers).forEach(function (bindFunctionEvent) {
        Object.keys(window.Handlers[bindFunctionEvent]).forEach(function (bindFunctionName) {
            $(document.body).on(bindFunctionEvent, '[data-bind-'+bindFunctionEvent+'*='+bindFunctionName+']', window.Handlers[bindFunctionEvent][bindFunctionName]);
        });
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