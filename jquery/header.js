

$(document).ready(function(){

$('.gnb > li > a').click(function(e){
    e.preventDefault();
});

    $('.gnb > li').hover(function(){
        $(this).find('.lnb').stop().fadeIn();
    }, function(){
        $('.lnb').stop().fadeOut();
    });
});


