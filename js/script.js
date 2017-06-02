$(document).ready(function() {
    $('.startlogo').animate({
            left: '-1200px',
            opacity: 1
    }, 1500);
});

$(document).ready(function(){

    $(window).scroll(function(){

    if($(window).scrollTop()>100)
    $(".nav-menu").css({"background-color" : "rgba(0,0,0,.5)"});

    else
    $(".nav-menu").css({"background-color" : "rgba(0,0,0,1)"});


    });

});