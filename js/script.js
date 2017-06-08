var img = new Image();
img.src = 'img/starter1.png';

img.onload = function (){
    $('.startlogo').animate({
            left: '-600px',
            opacity: 1
    }, 1500); 
}


$(document).ready(function() {

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
        if($(window).scrollTop()>100)
            $('.nav-logo').css({'color' : '#FFFFFF'});
        else 
            $('.nav-logo').css({'color' : '#000000'});
            
    });

    $(window).scroll(function(){
        if($(window).scrollTop()>340)
            $('.storelogo').fadeIn('slow');
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