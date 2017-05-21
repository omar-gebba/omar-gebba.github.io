/*global $, jquery, alert, console*/


$(function () {
    
  
    "use strict";
    
    $("div.image").mousemove(function () {
        $(this).css({
            'background': 'rgba(0,0,0,.5)'
        });
       
            
    });
    
    $(window).scroll(function () {
        
        var ele = $("section.folio div.goup");
        
        if ($(window).scrollTop() > 100) {
            $("section.folio div.goup").fadeIn(1000);
        } else {
            
            $("section.folio div.goup").fadeOut(1000);
        }
    });
   
   
   
    $(window).scroll(function () {
        
        if ($(window).scrollTop() > 100) {
            $(".h2").slideDown(1000);
        } else {
            
            $(".h2").hide();
        }
    });
    
    
    $("section.folio div.goup").click(function () {
        $('body').animate({scrollTop: 0}, 2000);
    });
    $("section.solution div.two p:first-of-type").css("display", "block");
    
    $("section.solution div.two h3").click(function () {
        $(this).next().slideDown(1000);
        $("section.solution div.two p").not($(this).next()).slideUp(1000);
    });
    
    $(".timer").countTo();
    
});