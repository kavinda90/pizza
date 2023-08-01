window.addEventListener("scroll", function () {
    var parallaxContainer = document.querySelector(".banner_img_container");
    var parallaxContent = document.querySelector(".banner_right_pizza");
    var parallaxContent2 = document.querySelector(".banner_bottom_pizza");
    var parallaxContent3 = document.querySelector(".banner_left_pizza");
    
    var scrollPosition = window.pageYOffset;
    parallaxContent.style.transform = "translateX(" + scrollPosition * 0.3 + "px)";
    parallaxContent2.style.transform = "translate(" + scrollPosition * 0.3 + "px, " + scrollPosition * 0.2 + "px)";
    parallaxContent3.style.transform = "translateY(" + scrollPosition * 0.2 + "px)";
});

var popularPizza1 = [
    {
        "name": "Fresh Slice Pizza",
        "desc": "Classic greek salad, barrel aged feta cheese, bread",
        "price": 45.50,
        "url": "content/burger2/images/img-04-1.png"
    },
    {
        "name": "Fresh Slice Pizza",
        "desc": "Classic greek salad, barrel aged feta cheese, bread",
        "price": 45.50,
        "url": "content/burger2/images/img-04-1.png"
    }
]

var popularPizza2 = [
    {
        "name": "Fresh Slice Pizza",
        "desc": "Classic greek salad, barrel aged feta cheese, bread",
        "price": 45.50,
        "url": "content/burger2/images/img-04-1.png"
    },
    {
        "name": "Fresh Slice Pizza",
        "desc": "Classic greek salad, barrel aged feta cheese, bread",
        "price": 45.50,
        "url": "content/burger2/images/img-04-1.png"
    }
]

function displayPopularPizza() {
    var list1Ele = document.getElementById("menu-list-1");

    for(i=0; i<popularPizza1.length; i++) {
        list1Ele.innerHTML += (
            "<div class='menu-item'>" +
                "<div class='menu-item-image'>" +
                    "<img src=" + popularPizza1[i].url + " alt=''>" +
                "</div>"  +
                "<div class='menu-item-content'>" +
                    "<h4 class='menu-item-name'>" +
                        popularPizza1[i].name +
                    "</h4>" +
                    "<div class='menu-item-desc'>" +
                        popularPizza1[i].desc +
                    "</div>" +
                "</div>" +
                "<h4 class='menu-item-price'>" +
                    "$" + popularPizza1[i].price +
                "</h4>" +
            "</div>"
        )
    }

    var list2Ele = document.getElementById("menu-list-2");

    for(i=0; i<popularPizza2.length; i++) {
        list2Ele.innerHTML += (
            "<div class='menu-item'>" +
                "<div class='menu-item-image'>" +
                    "<img src=" + popularPizza2[i].url + " alt=''>" +
                "</div>"  +
                "<div class='menu-item-content'>" +
                    "<h4 class='menu-item-name'>" +
                        popularPizza2[i].name +
                    "</h4>" +
                    "<div class='menu-item-desc'>" +
                        popularPizza2[i].desc +
                    "</div>" +
                "</div>" +
                "<h4 class='menu-item-price'>" +
                    "$" + popularPizza2[i].price +
                "</h4>" +
            "</div>"
        )
    }
}
  