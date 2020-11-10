$(function(){

    $('.projects-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="btn-reset slick-arrow slick-prev"><svg width="12" height="19"><use href="img/sprite.svg#left-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="btn-reset slick-arrow slick-next"><svg width="12" height="19"><use href="img/sprite.svg#right-arrow"></use></svg></button>'
    })

    $('.tab').on('click', function (e) {
        e.preventDefault()

        $($(this).siblings()).removeClass('active')
        $($(this).parent().siblings().find('div')).removeClass('active')

        $(this).addClass('active')
        $($(this).attr('href')).addClass('active')
    })


});
