window.addEventListener("scroll", function () {
    var parallaxContainer = document.querySelector(".banner_img_container");
    var parallaxContent = document.querySelector(".banner_right_pizza");
    var parallaxContent2 = document.querySelector(".banner_bottom_pizza");
    var parallaxContent3 = document.querySelector(".banner_left_pizza");
    
    var scrollPosition = window.pageYOffset;
    parallaxContent.style.transform = "translateX(" + scrollPosition * 0.4 + "px)";
    parallaxContent2.style.transform = "translate(" + scrollPosition * 0.3 + "px, " + scrollPosition * 0.2 + "px)";
    parallaxContent3.style.transform = "translateY(" + scrollPosition * 0.2 + "px)";
});
  