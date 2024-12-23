//coffee.js




$(function () {
    $('#menu .co3 .caption').css('display', 'block');

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

var stat = 0;
function slide(direction) {
    if (stat === 1) return false;
    stat = 1;

    if (direction) {
        $('#menu .viewer li').first().insertAfter($('#menu .viewer li').last());
    } else {
        $('#menu .viewer li').last().insertBefore($('#menu .viewer li').first());
    }

    var viewer = document.querySelector('#menu .viewer');
    var box = viewer.querySelectorAll('#menu .viewer li');
    console.log(box);

    for (var i = 0; i < box.length; i++) {
        box[i].setAttribute('class', 'co' + (i + 1));
    }

    setTimeout(function () {
        stat = 0;
    }, 2000);


    if (direction) {
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
    }, 2000);


}

