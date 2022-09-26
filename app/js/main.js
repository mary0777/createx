document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'); 
  const mobileMenu = document.querySelector('.menu__list'); 
  const bodyLock = document.querySelector('body');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu__list--active'); 
    if (mobileMenu.classList.contains('menu__list--active'))  {
      burger.classList.add('burger--active'); 
      bodyLock.classList.add('lock'); 
    }
    else {
      burger.classList.remove('burger--active'); 
      bodyLock.classList.remove('lock'); 
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('lock'))  {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('menu__list--active');
      bodyLock.classList.remove('lock');
    }
  });
});


$(function () {

  $('.benefits__link').on('click', function (e){
    e.preventDefault();
    $('.benefits__link').removeClass('benefits__link--active');
    $(this).addClass('benefits__link--active');

    $('.benefits__descr').removeClass('benefits__descr--active');
    $($(this).attr('href')).addClass('benefits__descr--active');
  });


  $('.select, select-num').styler();


  $('.team__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="btn-prev"></button>',
    nextArrow: '<button type="button" class="btn-next"></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });


  $('.reviews__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="btn-prev"></button>',
    nextArrow: '<button type="button" class="btn-next"></button>',
    dots: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          arrows: false
        }
      }
    ]
  });
  

  $('.like__list, .lectures--active').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="btn-prev"></button>',
    nextArrow: '<button type="button" class="btn-next"></button>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });

  $('.lectures--interested, .like__blog').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="btn-prev"></button>',
    nextArrow: '<button type="button" class="btn-next"></button>',
  });


 $(".accordion__heading").click(function(){
  $(this).next().slideToggle("slow");
   $(this).toggleClass('accordion__heading--active')
 });
  
//  $(".accordion__heading").click(function(){
//   $(this).next('.accordion__text').removeClass('accordion__text--open').slideToggle("slow");
//    $(this).siblings('.accordion__text').addClass('accordion__text--open');
//    $(this).toggleClass('accordion__heading--active')
// });

  
$('.events__button').on('click', function (){
  $('.events__button').removeClass('events__button--active');
  $(this).addClass('events__button--active');
});
  
$('.events__button--grid').on('click', function (){
  $('.lectures').addClass('lectures--active');
  $('.lectures__item').addClass('lectures__item--active');
});
  
$('.events__button--list').on('click', function (){
  $('.lectures').removeClass('lectures--active');
  $('.lectures__item').removeClass('lectures__item--active');
});
  
  $('.footer__slide').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__slide--active');
  });

  $('.filter-btn').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('filter-btn--active');
  });


  var mixer = mixitup('.courses__list, .journal__blog');
 
  
  
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

$(document).ready(function() {
	$('.menu__sign, .sign__register').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});


$(".sign__eye").click(function() {

  $(this).toggleClass("sign__eye--close");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


