

$(document).ready(function(){
    $('.gnb > li').hover(function(){
        $(this).find('.lnb').stop().fadeIn();
    }, function(){
        $('.lnb').stop().fadeOut();
    });
});


