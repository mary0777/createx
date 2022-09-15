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
  

  $('.like__list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="btn-prev"></button>',
    nextArrow: '<button type="button" class="btn-next"></button>',
  });


 $(".learn__heading").click(function(){
  $(this).next(".learn__text").removeClass("learn__text--open").slideToggle("slow");
   $(this).siblings(".learn__text").addClass("learn__text--open");
   $(this).toggleClass('learn__heading--active')
});



  var mixer = mixitup('.courses__list');


});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $('.header').addClass('header--fixed');
  } else {
    $('.header').removeClass('header--fixed');
  }
});

$(function(){
      $('.footer__top').on('click', function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });
  });
  



var endDate = "dec 31, 2022 00:00:00";

var deadline = new Date(endDate).getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById('day').innerHTML = days;
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = minutes;
  document.getElementById('second').innerHTML = seconds;

  if (t < 0) {
    clearInterval(x);
  
    document.getElementById('day').innerHTML = "0";
    document.getElementById('hour').innerHTML = "0";
    document.getElementById('minute').innerHTML = "0";
    document.getElementById('second').innerHTML = "0";
  }
}, 1000);