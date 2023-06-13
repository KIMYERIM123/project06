$(function () {
  $(".mainslide").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  $(".menu_slide").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.main_menu .menu_arrows .left').on('click', function () {
    $('._slide').slick('slickPrev')
  });
  $('.main_menu .menu_arrows .right').on('click', function () {
    $('.menu_slide').slick('slickNext')
  });

});
