$(function () {

  $('.benefits__link').on('click', function (e){
    e.preventDefault();
    $('.benefits__link').removeClass('benefits__link--active');
    $(this).addClass('benefits__link--active');

    $('.benefits__descr').removeClass('benefits__descr--active');
    $($(this).attr('href')).addClass('benefits__descr--active');
  });


  $('.search').styler();

  $('.team__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="btn-prev"></button>',
    nextArrow:'<button type="button" class="btn-next"></button>',
  });

  $('.reviews__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="btn-prev"></button>',
    nextArrow: '<button type="button" class="btn-next"></button>',
    dots: true,
    fade: true,
  });

 
  var mixer = mixitup('.courses__list', {
    
      // "animation": {
      //     "duration": 250,
      //     "nudge": true,
      //     "reverseOut": false,
      //     "effects": "fade translateZ(-100px)"
      // }
  
  });

  

});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $('.header').addClass('header--fixed');
  } else {
    $('.header').removeClass('header--fixed');
  }
});


