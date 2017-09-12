$( document ).ready(function() {
    $('.no-shape').mouseover(function(){
        $('.animation').css({'width': '220%', 'height': '300%'});
    });
    $('.no-shape').mouseleave(function(){
        $('.animation').css({'width': '100%', 'height': '100%'});
        
    });
});



