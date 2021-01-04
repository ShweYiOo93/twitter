/**nav bar */

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('nav').addClass('sticky');

        } else{
            $('nav').removeClass('sticky');
        }
    });
});

/* arrow up */

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
            $('#topbtn').fadeIn();

        } else{
            $('#topbtn').fadeOut();
        }
    });

    $('#topbtn').click(function(){
        $('html,body').animate({scrollTop : 0},800)
    });
});

/**perloader */

$(window).on('load',function(){
    $('.loader-container').fadeOut(1000);
})

