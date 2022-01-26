$(document).ready(function(){
    $('.uae-section').mouseenter(function(){
        $('.uae').fadeIn();
    })
    $('.uae-section').mouseleave(function(){
        $('.uae').hide();
    })

    $('.thai-section').mouseenter(function(){
        $('.thai').fadeIn();
    })
    $('.thai-section').mouseleave(function(){
        $('.thai').hide();
    })

    $('.aus-section').mouseenter(function(){
        $('.aus').fadeIn();
    })
    $('.aus-section').mouseleave(function(){
        $('.aus').fadeOut();
    })

    $('.indo-section').mouseenter(function(){
        $('.indo').fadeIn();
    })
    $('.indo-section').mouseleave(function(){
        $('.indo').hide();
    })

    $('.malay-section').mouseenter(function(){
        $('.malay').fadeIn();
    })
    $('.malay-section').mouseleave(function(){
        $('.malay').hide();
    })

    $('.fra-section').mouseenter(function(){
        $('.fra').fadeIn();
    })
    $('.fra-section').mouseleave(function(){
        $('.fra').hide();
    })
})

window.addEventListener('scroll',function(){
    let header = document.getElementById('fixed');

    header.classList.toggle('scrolling_action', window.scrollY>0);
})