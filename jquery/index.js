

/* >>>>>>>>main 제이쿼리 */

$(document).ready(function () {

    var pageCount = 0;
    var total;
    var stat = 0;

    total = $('.page').length;

    $(document).on('mousewheel DOMMousescroll', function () {
        if (stat === 1) return false;
        stat = 1;

        var evt = window.event;


        var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;


        if (/Firefox/i.test(navigator.userAgent)) {

            delta = -evt.detail;
      
        }

        if (delta < 0) {
            

            pageCount++;
            if (pageCount === total) pageCount = total - 1;

        } else {
      

            pageCount--;
            if (pageCount === -1) pageCount = 0;

        }

        var pageTop = $('.page').eq(pageCount).offset().top;
 

 
        $('html,body').animate({
            scrollTop: pageTop
        }, 800, function () {
            stat = 0; 
        });

    
        menuChg();

        if (pageCount === total - 1) {
            $('.side-pager li').removeClass('on');
        }

        
    });


        $('.side-pager a').on('click', function (e) {

    
            e.preventDefault();

            var idx = $(this).parent().index();
            console.log(idx);

            pageCount = idx; 
            console.log('변경된 page 번호:' + pageCount);

            var pid = $(this).attr('href');
            console.log('클릭된 a의 href값 : ' + pid);

         
            var pageTop = $('.page').eq(idx).offset().top;

          
            $('html, body').animate({
                scrollTop: pageTop
            }, 800);

            menuChg();
        });

        function menuChg() {
            $('.side-pager li').eq(pageCount).addClass('on').siblings().removeClass('on');
            
            } 
            

/* 메인 */


    $('.main-txt').hide();
    $('.bg img').hide();


    $('.main-txt').fadeIn(4000);
    $('.bg img').delay(1000).fadeIn(4000);



    /* 영역2 로우키 커피 */

    $('.pager li a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();

        var wid = $('.view ul li').width();

        $('.view ul').animate({
            left: -(wid * idx)
        }, 600);

        $(this).parent().addClass('on').siblings().removeClass('on');

    });


    
       /* 영역3 로스팅 시간 카운트 */

       var countDownDate = new Date("Apr 1, 2025 15:37:25").getTime();

       var x = setInterval(function() {
       
       
         var now = new Date().getTime();
       
        
         var distance = countDownDate - now;
       
       
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
       
         document.getElementById("demo").innerHTML = days + "d " + hours + "h "
         + minutes + "m " + seconds + "s ";
       
        
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("demo").innerHTML = "EXPIRED";
         }
       }, 1000);

       

    /* 영역 4 유튜브 */

    //이것의 형제 요소인 유 이미지를 패이드인 이것의 다른 형제들은 페이드 아웃 해줘줘
    $('.button2 a').on('click', function (e) {
        e.preventDefault();
        var c = $('.show-box').eq(1);
        $('.show-box').eq(1).fadeIn(800).siblings().fadeOut(0);

    });


    $('.button1 a').on('click', function (e) {
        e.preventDefault();
        var c = $('.show-box').eq(1);
        $('.show-box').eq(0).fadeIn(800).siblings().fadeOut(0);

    });

    $('.button3 a').on('click', function (e) {
        e.preventDefault();
        var c = $('.show-box').eq(1);
        $('.show-box').eq(2).fadeIn(800).siblings().fadeOut(0);

    });




    // 영역5. 인스타 flow

    var autocall = setInterval(flow, 35);

    $('.flow li').hover(function () {
        clearInterval(autocall);

    }, function () {

        autocall = setInterval(flow, 35);

    });

    




});


//// 내가만든 함수!! ///////////////////////////////////////////////////





//1. flow 
var moveNum = 0;

function flow() {

    moveNum++;

    var boxWidth = $('.flow li').first().outerWidth();

    if (moveNum > boxWidth) {
        $('.flow').append($('.flow li').first()).css({
            left: 0
        });

        moveNum = 0;

    } else {
        $('.flow').css({
            left: -moveNum
        });
    }
}