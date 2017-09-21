$( document ).ready(function() {
    $('.no-shape').mouseover(function(){
        $('.animation').css({'width': '220%', 'height': '300%'});
    });
    $('.no-shape').mouseleave(function(){
        $('.animation').css({'width': '100%', 'height': '100%'});
        
    });

    $('.open-menu').click(function(){
        $('#my-sidenav').css({'width': '100%'});
    });
    $('.close-btn').click(function(){
        $('#my-sidenav').css({'width': '0'});
    });

});



