$(document).ready(function() {
    $('.startlogo').animate({
            left: '-600px',
            opacity: 1
    }, 1500);  

    $(window).scroll(function(){
        if($(window).scrollTop()>100)
            $('.nav-menu').css({'background-color' : 'rgba(0,0,0,.5)'});
        else 
            $('.nav-menu').css({'background-color' : 'rgba(0,0,0,0)'});
            
    });
   
    $(window).scroll(function(){
        if($(window).scrollTop()>100)
            $('.menu-item').css({'color' : '#FFFFFF'});
        else 
            $('.menu-item').css({'color' : '#000000'});
            
    });

    $(window).scroll(function(){
        if($(window).scrollTop()>370)
            $('.storelogo').fadeIn('slow');
        else
            $('.storelogo').fadeOut('slow');
    });

    $( ".twitter" ).hover(
        function() {
            $( this ).css({"opacity" : "0.5"});
        }, function() {
            $( this ).css({"opacity" : "1"});
        }
    );

    $( ".face" ).hover(
        function() {
            $( this ).css({"opacity" : "0.5"});
        }, function() {
            $( this ).css({"opacity" : "1"});
        }
    );

    $( ".insta" ).hover(
        function() {
            $( this ).css({"opacity" : "0.5"});
        }, function() {
            $( this ).css({"opacity" : "1"});
        }
    );

    $( ".git" ).hover(
        function() {
            $( this ).css({"opacity" : "0.5"});
        }, function() {
            $( this ).css({"opacity" : "1"});
        }
    );

});