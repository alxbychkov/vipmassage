$(document).ready(function() {
  menuActive();
  let burger = $(".burger");
  let menu = $(".menu");
  burger.click(function() {
    menu.slideToggle("slow");
    $(this).find('.burger-logo').toggleClass('active');
    if($('.burger-logo').hasClass('active')) {
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  });
  $(window).on('scroll', function() {
    var target = $(this).scrollTop();
    if ( target > 200 ) {
        $('.header.header-scroll').addClass('scrolled');

    }else{
        $('.header.header-scroll').removeClass('scrolled');
    }
  });
  $(window).resize(function() {
    if (menu.css("display") == "block") {
      menu.css("display", "none");
      $('.burger-logo').toggleClass('active');
      scrollLock.enablePageScroll();
    }
  });
  $(".menu").on("mouseleave", function() {
    $(this).slideToggle("slow");
    $('.burger-logo').toggleClass('active');
  });

  $('#ModalCenter').on('show.bs.modal', function () {
    scrollLock.disablePageScroll();
  });
  $('#ModalCenter').on('hide.bs.modal', function () {
    scrollLock.enablePageScroll();
  });
});

function menuActive() {
  let url = window.location.pathname.slice(1);
  $('.nav-link').each(function(){
      let link = $(this).attr('href');
      if (url == link) {
          $(this).addClass('active');
      }
  });
}