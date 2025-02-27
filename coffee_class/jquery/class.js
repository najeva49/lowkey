$(document).ready(function () {

$('.on>a').click(function(evt){
    evt.preventDefault();
});

    $('a.open-1').click(function(evt){

        evt.preventDefault();

        $('.black1').show();
        $('.txt1').show();

    });

    $('a.close-1').click(function(evt){

        evt.preventDefault();

        $('.black1').hide();
        $('.txt1').hide();
    });


    $('a.open-2').click(function(evt){

        evt.preventDefault();
        
        $('.black2').show();
        $('.txt2').show();

    });

    $('a.close-2').click(function(evt){

        evt.preventDefault();

        $('.black2').hide();
        $('.txt2').hide();
    });

});
