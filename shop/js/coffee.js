//coffee.js




/* $(function () {
    $('#menu1 .co3 .caption').css('display', 'block');

    $('.btn-prev').click(function () {
        slide(0);
        change();
    });

    $('.btn-next').click(function () {
        slide(1);
        change();
    });
});

$(function () {
    $('#menu2 .co3 .caption').css('display', 'block');

    $('.btn-prev2').click(function () {
        slide(0);
        change2();
    });

    $('.btn-next2').click(function () {
        slide(1);
        change2();
    });
});


function change() {
    $('#menu .co3').find('.caption').delay(600).fadeIn(600).end().siblings().find('.caption').fadeOut(600);
}

function change2() {
    $('#menu2 .co3').find('.caption').delay(600).fadeIn(600).end().siblings().find('.caption').fadeOut(600);
}

 */


//탭메뉴 클릭 시
var seltab = '#menu1'; //화면이 로딩되었을 때 첫번째 탭메뉴가 선택되어 있는 것이 기본값이므로, 첫번째 탭메뉴의 href값을 초깃값 설정

$(document).ready(function () {
    $('#menu1 .co3 .caption').css('display', 'block');
    $('#menu2 .co3 .caption').css('display', 'block');

    //$('article .co3 .caption').css('display', 'block');


    $('.tab-menu a').click(function (e) {
        e.preventDefault();

        //선택된 탭메뉴의 href값 구하기 함수안에는 이벤트가 들어가지않아요!
        seltab = $(this).attr('href');
        console.log(seltab);

        $(seltab).show().siblings().hide();
        $(this).parent().addClass('on').siblings().removeClass('on');

    });





    // 이전, 다음 버튼 클릭했을 때!
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
 /* 
    var viewer = document.querySelector(seltab);
   var box = viewer.querySelectorAll('li'); 

    function tabSlide(direction) {

        if (direction) {
            // (viewer + '> .btn-prev').click(function(){  slide(0); });
            $('.btn-prev').click(function () {
                slide(0);

            });
        } else {
            //
            $('.btn-next').click(function () {
                slide(1);


            });

        }

    } */

    // 탭메뉴 슬라이드 이동을 위한 함수!!!
    var stat = 0;

    function slide(direction) {
        if (stat === 1) return false;
        stat = 1;

        if (direction) {
            //다음버튼 클릭
            //$('#menu1 .viewer li').first().insertAfter($('#menu1 .viewer li').last());

            $(seltab +'>.viewer li').first().insertAfter($(seltab + '>.viewer li').last());
        } else {
            //이전버튼 클릭
            //$('#menu1 .viewer li').last().insertBefore($('#menu1 .viewer li').first());

            $(seltab + '>.viewer li').last().insertBefore($(seltab + '>.viewer li').first());
        }

        ///var viewer = document.querySelector('#menu1 .viewer');
        //var box = viewer.querySelectorAll('#menu1 .viewer li');

        var viewer = document.querySelector(seltab);
        var box = viewer.querySelectorAll('li');
        console.log(box);


        for (var i = 0; i < box.length; i++) {
            box[i].setAttribute('class', 'co' + (i + 1));
        }

        setTimeout(function () {
            stat = 0;
        }, 1000);


        /* if (direction) {
            $('#menu2 .viewer li').first().insertAfter($('#menu2 .viewer li').last());
        } else {
            $('#menu2 .viewer li').last().insertBefore($('#menu2 .viewer li').first());
        }

        var viewer = document.querySelector('#menu2 .viewer');
        var box = viewer.querySelectorAll('#menu2 .viewer li');
        console.log(box);

        for (var i = 0; i < box.length; i++) {
            box[i].setAttribute('class', 'co' + (i + 1));
        }

        setTimeout(function () {
            stat = 0;
        }, 2000); */


    } //함수 slide

});