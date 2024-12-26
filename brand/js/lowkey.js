$(document).ready(function(){

    var box1 = $('.box:eq(0)')


    

    box1.find('.img-box').animate({
        width : '50%'
    }, 1500, function(){
        box1.find('.txt').fadeIn(600);
    });
});

$(window).scroll(function(){

var scTop = $(this).scrollTop();
console.log(scTop);

var winHei = $(this).height();
console.log(winHei);

var gap = Math.ceil(winHei * 0.7);
console.log(gap);

var box2 = $('.box').eq(1).offset().top - gap;


if(scTop > box2) {
    $('.box').eq(1).find('.img-box').animate({
         width : '50%'
    }, 1500, function(){
       $('.box').eq(1).find('.txt').fadeIn(500);
    });
}


var box3 = $('.box').eq(2).offset().top - gap;


if(scTop > box3) {
    $('.box').eq(2).find('.img-box').animate({
         width : '50%'
    }, 1500, function(){
       $('.box').eq(2).find('.txt').fadeIn(500);
    });
}

var box4 = $('.box').eq(3).offset().top - gap;


if(scTop > box4) {
    $('.box').eq(3).find('.img-box').animate({
         width : '50%'
    }, 1500, function(){
       $('.box').eq(3).find('.txt').fadeIn(500);
    });
}

});