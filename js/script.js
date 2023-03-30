$(function(){

  $('.banner_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  nextArrow:".next",
  prevArrow:".prev",
  responsive: [
   
    {
      breakpoint: 575,
      settings: {
        dots:false
      }
    }
  ]
});
  $('.testimonial_slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  centerMode:true,
  centerPadding:"0px",
  arrows:false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  $(window).scroll(function(){
    var scrolling=$(this).scrollTop()

    if (scrolling >20) {
      $("nav").addClass("menu_bg");
  }else{$("nav").removeClass("menu_bg")};


if (scrolling >20) {
    $(".back_to_top").fadeIn();
}else{$(".back_to_top").fadeOut()};

})
$(".back_to_top").click(function(){
  $("html,body").animate({
    scrollTop:0,
  })
})






});

var containerEl = document.querySelector('.containerr');

var mixer = mixitup(containerEl);
