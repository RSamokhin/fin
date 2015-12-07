$(window).scroll(function() {
    if ($(this).scrollTop() > 170){
        $('.main__header-splitter').addClass("m-sticky");
    }
    else{
        $('.main__header-splitter').removeClass("m-sticky");
    }
});