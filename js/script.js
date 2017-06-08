$(document).ready(function() {

    var img = new Image();
    img.src = 'img/starter1.png';

    img.onload = function (){
        $('.startlogo').animate({
            left: '-600px',
            opacity: 1
        }, 1500); 
    }

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
        ($(window).scrollTop()>340)
            $('.storelogo').fadeIn('slow');
    });

    $( ".twitter" ).hover(
        function() {
            $( this ).css({'opacity' : '0.5'});
        }, function() {
            $( this ).css({'opacity' : '1'});
        }
    );

    $( ".face" ).hover(
        function() {
            $( this ).css({'opacity' : '0.5'});
        }, function() {
            $( this ).css({'opacity' : '1'});
        }
    );

    $( ".insta" ).hover(
        function() {
            $( this ).css({'opacity' : '0.5'});
        }, function() {
            $( this ).css({'opacity' : '1'});
        }
    );

    $( ".git" ).hover(
        function() {
            $( this ).css({'opacity' : '0.5'});
        }, function() {
            $( this ).css({'opacity' : '1'});
        }
    );

    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
        var $target = $(target);
          $target.focus();
            if ($target.is(":focus")) { 
                return false;
            } else {
                $target.attr('tabindex','-1'); 
                $target.focus(); 
            };
            });
        }
        }
    });

});
