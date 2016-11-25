


var  navbar = $(".navbar");
    navbarscrolled = "navbar-scrolled";

$(window).scroll(function() {
  if( $(this).scrollTop() > window.innerHeight-50) {
    navbar.addClass(navbarscrolled);
  } else {
    navbar.removeClass(navbarscrolled);
  }
});