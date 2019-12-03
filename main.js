$(document).ready(function() {
    $('#fazerLogin').click(function() {
        mudaSlider();
    });
    $('#fecharLogin').click(function() {
        mudaSlider();
    });

    $(function() {
        $('#abrirMenu').click(function(e) {
            $('#menu-lateral').addClass('slide-right', 800);
            e.stopPropagation()
        });
        $(document).click(function(e) {
            if ($(e.target).is("#menu-lateral") === false) {
                $('#menu-lateral').removeClass('slide-right', 800);
            }
        });
    });
    

    var mySwiper = new Swiper ('.empresas-container .swiper-container', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 0,
            }
        }
    });

    var mySwiper = new Swiper ('.beneficios-container .swiper-container', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 5,
            }
        }
    });
});

function mudaSlider() {
    if($('.card-login').hasClass('slide-up')) {
        $('.card-login').addClass('slide-down', 800);
        $('.card-login').removeClass('slide-up'); 
    } else {
        $('.card-login').removeClass('slide-down');
        $('.card-login').addClass('slide-up', 800); 
    }
}