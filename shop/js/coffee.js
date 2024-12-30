//coffee.js






//탭메뉴 클릭 시
var seltab = '#menu1'; 

$(document).ready(function () {
$('article .co3 .caption').css('display', 'block');


    $('.tab-menu a').click(function (e) {
        e.preventDefault();

   
        seltab = $(this).attr('href');
        console.log(seltab);

        $(seltab).show().siblings().hide();
        $(this).parent().addClass('on').siblings().removeClass('on');

    });


    $('.btn-prev').click(function(){
        slide(0);
        change();
    });
    $('.btn-next').click(function(){
        slide(1);
        change();
    });


    function change() {
        $('article .co3').find('.caption').delay(500).fadeIn(500).end().siblings().find('.caption').fadeOut(500);
    }
 
    var stat = 0;

    function slide(direction) {
        if (stat === 1) return false;
        stat = 1;

        if (direction) {
          

            $(seltab +'>.viewer li').first().insertAfter($(seltab + '>.viewer li').last());
        } else {
         

            $(seltab + '>.viewer li').last().insertBefore($(seltab + '>.viewer li').first());
        }


        var viewer = document.querySelector(seltab);
        var box = viewer.querySelectorAll('li');
        console.log(box);


        for (var i = 0; i < box.length; i++) {
            box[i].setAttribute('class', 'co' + (i + 1));
        }

        setTimeout(function () {
            stat = 0;
        }, 1000);


    } 

});