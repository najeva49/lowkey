$(document).ready(function () {


    $('.pager li').first().css('color', 'gold');


    var autocall = setInterval(leftmove, 3000);

    $('.slide-box').mouseenter(function(){

        clearInterval(autocall);
    }).mouseleave(function(){

        autocall = setInterval(function(){
            leftmove();

            console.log('인터벌 재가동!!');
        }, 3000);
    });



    var page = 0; 
    function leftmove() {

        page++;
        console.log('현재 page값:' + page);

        if (page === 4) {
            $('.gallery').css({
                left: 0
            });

            page = 0;
            console.log('변경된 page값:' + page);

        }

        $('.gallery').animate({
            left: -(1280 * page)  
        }, 1000);

  
        $('.pager li').css({
            color: 'black'
        });

        $('#btn' + page).css({
            color: 'gold'
        });

        if (page === 3) {
            $('#btn0').css({
                color: 'gold'

            });
        }

    }



});
