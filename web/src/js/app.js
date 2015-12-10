$(window).scroll(function() {
    if ($(this).scrollTop() > 170){
        $('.main__header-splitter').addClass("m-sticky");
    }
    else{
        $('.main__header-splitter').removeClass("m-sticky");
    }
});

window.Handlers = {
    click: {
        showToggledForm: function()
        {
            $('.toggled-clients-block-form').hide();
            var formName = $(this).data('formName');
            $('.' + formName).show();
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
