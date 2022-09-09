$(function () {

  $('.benefits__link').on('click', function (e){
    e.preventDefault();
    $('.benefits__link').removeClass('benefits__link--active');
    $(this).addClass('benefits__link--active');

    $('.benefits__descr').removeClass('benefits__descr--active');
    $($(this).attr('href')).addClass('benefits__descr--active');
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