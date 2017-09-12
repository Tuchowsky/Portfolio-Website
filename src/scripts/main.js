$( document ).ready(function() {
    $('.no-shape').mouseover(function(){
        $('.animation').css({'transform': 'scale(2,2)'});
    });
    $('.no-shape').mouseleave(function(){
        $('.animation').css({'transform': 'scale(1,1)'});
    });
});



