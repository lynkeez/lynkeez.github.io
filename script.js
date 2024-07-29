// Smooth scrolling for navigation menu
$(document).ready(function(){
    $(".nav-link").on('click', function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

// Add active class to navigation menu items on scroll
$(window).scroll(function(){
    var scrollDistance = $(window).scrollTop();
    $(".section").each(function(i){
        if ($(this).position().top <= scrollDistance) {
            $(".nav-link.active").removeClass("active");
            $(".nav-link:eq(" + i + ")").addClass("active");
        }
    });
}).scroll();