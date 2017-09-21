$( document ).ready(function() {
    $('.no-shape').mouseover(function(){
        $('.animation').css({'width': '220%', 'height': '300%'});
    });
    $('.no-shape').mouseleave(function(){
        $('.animation').css({'width': '100%', 'height': '100%'});
        
    });
    //projects container
    $('.projects-link').click(function(){
        $('#projects-sidenav').css({'width': '100%'});
    });
    $('.projects-closebtn').click(function(){
        $('#projects-sidenav').css({'width': '0'});
    });
    //about container
    $('.about-link').click(function(){
        $('#about-sidenav').css({'width': '100%'});
    });
    $('.about-closebtn').click(function(){
        $('#about-sidenav').css({'width': '0'});
    });

});



