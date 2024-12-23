//alert('연결~~~~~~~~~~');

$(document).ready(function(){
    $('.gnb > li').hover(function(){
        $(this).find('.lnb').stop().fadeIn();
    }, function(){
        $('.lnb').stop().fadeOut();
    });
});


