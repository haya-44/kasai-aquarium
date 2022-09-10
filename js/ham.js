$(".hamburger-sp").click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.sp-menu').addClass('active');
} else {
    $('.sp-menu').removeClass('active');
}
});
