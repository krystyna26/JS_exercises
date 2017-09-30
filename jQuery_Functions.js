$(document).ready(function(){
    $("#addClass").click(function(){
        $(this).addClass('blue');
        // alert("The color was changed.");
    });

    $('.hidecat').click(function(){
        $('img').hide();
    });
    $('.showcat').click(function(){
        $('catpic').show();
    });

    $('.switch').click(function(){
        $('body').toggleClass('nightTheme');
        $('.night').toggle();
        $('.day').toggle();
    })

    $('.advert').click(function(){
        $('.advert').slideUp();
    })

    $('.surprise').click(function(){
        $('.surprisepic').slideDown();
    });

    $('.moreinfo').click(function(){
        $('.slidetog').slideToggle();
    });

    $(".").click(function(){
        $("").fadeOut()
    });

    $(".").click(function(){
        $("").fadeIn();
    });
});


