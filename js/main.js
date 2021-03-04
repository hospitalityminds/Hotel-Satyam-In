
// *****  Window on Scroll  ******

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $(".social-bar").addClass("social-none");
      $(".fixed-top").addClass("nav-flow");
      $(".navbar-brand1").addClass("small-img");

    } else {
      $(".social-bar").removeClass("social-none");
      $(".fixed-top").removeClass("nav-flow");
      $(".navbar-brand1").removeClass("small-img");
    }
  });


  //  **************  AOS Animation  ***********

  AOS.init({
    easing:'ease',
    duration:1500,
  });