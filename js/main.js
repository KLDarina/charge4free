const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
const body = document.body;
body.style.position = 'fixed';
body.style.top = `-0`;
$(document).ready(function () {
  document.querySelector(".wrapper").style = "display: block";
  document.querySelector(".wrapper").classList.add("blur-out");
  setTimeout(() => {
    document.querySelector(".wrapper").classList.remove("blur-out");
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }, 2500);


  function checkBlockVisibility(blockElem, animClasses, bool) {
    let block_show = false;
    if (block_show) {
      return false;
    }

    let wt = $(window).scrollTop();
    let wh = $(window).height();
    let et = $(blockElem).offset().top;
    let eh = $(blockElem).outerHeight();
    let dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      block_show = true;
      animClasses.forEach(classElem => {
        if (bool) {
          for (let i = 0; i < document.querySelectorAll(blockElem).length; i++) {
            document.querySelectorAll(blockElem).forEach((el, ind) => {
              if (ind === i) {
                setTimeout(function () {
                  el.classList.add(classElem);
                }, 500 * i);
              }
            })
          }
        } else document.querySelector(blockElem).classList.add(classElem);
      })
    }
  }

  function scrollTracking() {
    checkBlockVisibility(".offer__title", ["animate__zoomInLeft", "animate__slow", "animate__delay-2s"], false);
    checkBlockVisibility(".offer__untitle", ["animate__fadeIn", "animate__delay-4s"], false);
    checkBlockVisibility(".offer__items", ["animate__fadeIn", "animate__delay-5s"], false);
    checkBlockVisibility(".offer__phone", ["animate__fadeIn", "animate__delay-5s"], false);

    checkBlockVisibility(".benefit__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".benefit__text", ["animate__fadeIn", "animate__delay-1s"], false);

    checkBlockVisibility(".familiar__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".familiar__text", ["animate__fadeIn", "animate__delay-1s"], false);
    checkBlockVisibility(".familiar__box", ["animate__bounceIn", "animate__delay-1s"], false);

    checkBlockVisibility(".solution__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".solution__text", ["animate__fadeIn", "animate__delay-1s"], false);
    checkBlockVisibility(".solution__visual", ["animate__fadeInRight", "animate__delay-2s"], false);
    checkBlockVisibility(".solution-box", ["animate__fadeIn", "animate__delay-1s"], true);
    checkBlockVisibility(".solution__partners", ["animate__fadeIn", "animate__delay-1s"], false);

    checkBlockVisibility(".calculate__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".calculate__content", ["animate__fadeIn", "animate__delay-1s"], false);

    checkBlockVisibility(".cases__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".cases__content", ["animate__fadeIn", "animate__delay-1s"], false);

    checkBlockVisibility(".applicable__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".applicable__box", ["animate__fadeIn", "animate__delay-1s"], true);

    checkBlockVisibility(".bonuses__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".bonuses-box", ["animate__fadeIn", "animate__delay-1s"], true);

    checkBlockVisibility(".system__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".system-box", ["animate__fadeIn", "animate__delay-1s"], true);

    checkBlockVisibility(".service-features__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".service-features__content", ["animate__fadeIn", "animate__delay-1s"], false);
    checkBlockVisibility(".service-features__partners", ["animate__fadeIn", "animate__delay-1s"], false);

    checkBlockVisibility(".how-it-works__title", ["animate__zoomInLeft", "animate__slow"], false);
    checkBlockVisibility(".how-it-works__block", ["animate__fadeIn", "animate__delay-1s"], true);
  }

  $(window).scroll(function () {
    scrollTracking();
  });

  $(document).ready(function () {
    scrollTracking();
  });
  if (document.documentElement.clientWidth < 1024) {
    document.querySelector(".bg").style = "display: none";
    $('.solution__partners').slick({
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

    $('.service-features__partners').slick({
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
  }

  $(".cases__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: ".cases__content > .left-arrow",
    nextArrow: ".cases__content > .right-arrow",
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          dots: true,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1460,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          centerMode: true,
          slidesToShow: 1.7,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          adaptiveHeight: false,
        }
      }
    ]
  })

  document.querySelectorAll(".faq__item").forEach(el => {
    el.addEventListener("click", function () {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      } else {
        document.querySelectorAll(".faq__item").forEach(elem => {
          elem.classList.contains("active") ? elem.classList.remove("active") : null;
        });
        el.classList.add("active");
      }
    })
  })

  document.querySelector(".calculate__amount").oninput = function () {
    let amount = Number(document.querySelector(".calculate__amount").value);
    let monthAmount = amount * 0.04;
    let yearAmount = monthAmount * 12;
    document.querySelector(".calculate__result > span").textContent = monthAmount.toFixed(1);
    document.querySelector(".calculate__month > span").textContent = monthAmount.toFixed(1);
    document.querySelector(".calculate__year > span").textContent = yearAmount.toFixed(1);
  };

  document.querySelector(".benefit__play").addEventListener("click", function () {
    document.querySelector(".benefit__video").classList.add("active");
    document.querySelector(".benefit__video > iframe").src = "https://www.youtube.com/embed/HF1dGDQO6Kc?autoplay=1";
  });

  /*добавление якорей начало*/
  if (document.documentElement.clientWidth >= 1024) {
    $(document).on("scroll", { passive: true }, onScroll);

    $('.header__item a').click(function () {
      $(document).off("scroll");

      var navLink = $(this).attr("href"),
        dest = $(navLink).offset().top;
      $('html,body').stop().animate({
        scrollTop: dest
      }, 800, function () {
        $(document).on("scroll", { passive: true }, onScroll);
      });

      $('.header__item a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');

      return false;
    });
    function onScroll() {
      var scrollPos = $(document).scrollTop() + 300;
      $('.header__item a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos) {
          $('.header__item a').removeClass("active");
          currLink.addClass("active");
        }
        else {
          currLink.removeClass("active");
        }
      });
    }
  } else {
    /*открытие и закрытие бургера начало*/
    let isOpenMenu = false;
    document.querySelector(".header__burger").addEventListener("click", function () {
      if (!isOpenMenu) {
        document.querySelector(".menu-popup").classList.add("active");
        document.querySelector(".header__burger").classList.add("active");
        return isOpenMenu = true;
      } else {
        document.querySelector(".menu-popup").classList.remove("active");
        document.querySelector(".header__burger").classList.remove("active");
        return isOpenMenu = false;
      }
    })

    $('.menu-popup a').click(function () {
      $(document).off("scroll");
      var navLink = $(this).attr("href"),
        dest = $(navLink).offset().top;
      $('html,body').stop().animate({
        scrollTop: dest
      }, 800, function () {
        $(document).on("scroll", { passive: true }, onScroll);
      });

      $('.menu-popup a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
      document.querySelector(".menu-popup").classList.remove("active");
      document.querySelector(".header__burger").classList.remove("active");
      isOpenMenu = false;
      return false;
    });
    function onScroll() {
      var scrollPos = $(document).scrollTop() + 300;
      $('.menu-popup a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos) {
          $('.menu-popup a').removeClass("active");
          currLink.addClass("active");
        }
        else {
          currLink.removeClass("active");
        }
      });
    }
    /*открытие и закрытие бургера конец*/
  }
  /*добавление якорей конец*/


  document.querySelectorAll(".button-get-started").forEach(el => {
    el.addEventListener("click", function () {
      document.querySelector(".popup").querySelector(".contacts__form").classList.remove("animate__slideInUp");
      document.querySelector(".popup").classList.add("active");
      document.querySelector(".popup").querySelector(".contacts__form").classList.add("animate__slideInDown");
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;

    })
  })
  document.querySelector(".popup__close").addEventListener("click", function () {

    document.querySelector(".popup").querySelector(".contacts__form").classList.remove("animate__slideInDown");
    document.querySelector(".popup").querySelector(".contacts__form").classList.add("animate__slideInUp");
    setTimeout(() => {
      document.querySelector(".popup").classList.remove("active");
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, 200);
  })
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });

  if (document.documentElement.clientWidth >= 1024) {
    let rellax = new Rellax('.rellax', {
      center: true
    });
  }

})
