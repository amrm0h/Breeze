/*global $, console, alert, window*/

$(function () {
    "use strict";
    
    // trigger niceScroll Plugin
    
    $("body").niceScroll({
        cursorcolor: "#00bfa5",
        cursorwidth: "7px",
        cursorborder: "1px solid #00bfa5",
        cursoropacitymin: "0.2"
    });
    
    
    
    // trigger header height 
    
    $("header").height($(window).height());
    
    
    
    // slider for header 
    
    var rightArrow = $("header i.fa-arrow-right"),
        leftArrow = $("header i.fa-arrow-left"),
        viewAllButton = $(".rates button");
    
    function checkSlide() {
        $("header .slide").first().hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $("header .slide").last().hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    
    checkSlide();
    
    rightArrow.click(function () {
        
        var activeSlide = $("header .slide.active");
        
        activeSlide.fadeOut(500, function () {
                
            $(this).removeClass("active").next(".slide").addClass("active").fadeIn();
            checkSlide();
        
        });
    });
    
    leftArrow.click(function () {
        
        var activeSlide = $("header .slide.active");
        
        activeSlide.fadeOut(500, function () {
                
            $(this).removeClass("active").prev(".slide").addClass("active").fadeIn();
            checkSlide();
        });
    });
    
    
    
    // Activate The features 
    
    $(".features .sections .section i").on("click", function () {
        
    
        $(this).parent(".section").hasClass("active") ?
                $(this).parent(".section").removeClass("active") : $(this).parent(".section").addClass("active");
        
    });
    
    
    
    // go to sections from header 
    
    $("header .title nav li").on("click", function () {
        
        $("html, body").animate({
            
            scrollTop: $($(this).data("section")).offset().top
        }, 1000);
        
        if (!$(this).hasClass("active")) {
            $(this).addClass("active").siblings("li").removeClass("active");
        }
    });
    
    
    
    //  view all button in rates section
    
    viewAllButton.on("click", function () {
    
        if (!$(this).hasClass("shown")) {
            
            viewAllButton.text("view less");
            
            $(this).parents(".rates").find("section.hidden").fadeIn(500, function () {
                viewAllButton.addClass("shown");
            });
    
        } else {
            $(this).parents(".rates").find("section.hidden").fadeOut(500, function () {
                viewAllButton.removeClass("shown");
                viewAllButton.text("view all");
            });
        }
    });
    
    
    
    // go to App and google store and socials
    
    $(".ben div.images img, .contact .follow .socials i").on("click", function () {
        
        window.open($(this).data("site"), "_blank");
        
    });
    
    
    
    // hide placeholder when focus for form inputs 
    
    $(".contact form input, .contact form textarea").on({
        
        "focus": function () {
        
            $(this).attr("data", $(this).attr("placeholder"));
            $(this).attr("placeholder", "");
        },
        
        "blur": function () {
            $(this).attr("placeholder", $(this).attr("data"));
            $(this).attr("data", "");
        }
        
        
    });

    
});





