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

  $(".main_menu .menu_arrows .left").on("click", function () {
    $(".menu_slide").slick("slickPrev");
  });
  $(".main_menu .menu_arrows .right").on("click", function () {
    $(".menu_slide").slick("slickNext");
  });

  $(".his_left li").on("click", function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $(".his_right li").eq(idx).addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on");
  });






});
