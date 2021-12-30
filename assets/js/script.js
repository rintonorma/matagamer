$(document).ready(function () {
  $('.hero-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button class="slide-arrow prev-arrow"><ion-icon name="chevron-back-outline"></ion-icon></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.game-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button class="slide-arrow prev-arrow"><ion-icon name="chevron-back-outline"></ion-icon></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false
        }
      }
    ]
  });

  $(document).scroll(function () {
    var $nav = $(".navbar.fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

});

