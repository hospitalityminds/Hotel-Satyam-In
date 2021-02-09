
// *****  Window on Scroll  ******

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $(".social-bar").addClass("social-none");
      $(".fixed-top").addClass("nav-flow");

    } else {
      $(".social-bar").removeClass("social-none");
      $(".fixed-top").removeClass("nav-flow");
    }
  });


  //  **************  AOS Animation  ***********

  AOS.init({
    easing:'ease',
    duration:1500,
  });