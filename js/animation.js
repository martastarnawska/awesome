$(".circle").click(function() {
  $(this).toggleClass("clicked");
  if (!$(".circle").hasClass("clicked")) {
    setTimeout(function () {
      $(".circle").addClass("clicked");
    }, 1);
  }
});

$(".hamburger").click(function() {
  $(".navigation").toggleClass("open");
  $("header").toggleClass("active");
  $(".icons").toggleClass("visible");
  $(".close").toggleClass("go");
})

$(".close").click(function() {
  $(".navigation").toggleClass("open");
  $("header").toggleClass("active");
  $(".icons").toggleClass("visible");
  $(".close").toggleClass("go");
})
