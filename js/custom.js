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
        "name": "The Great Beyond",
        "desc": "Beyond Meat Italian Sausage Crumble, hot peppers, Red Onion, and Pizza Mozzarella.",
        "price": 23,
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg"
    },
    {
        "name": "Meat Lover's®",
        "desc": "Pepperoni, Italian sausage, mild sausage, beef topping, ham, bacon crumble and pizza mozzarella.",
        "price": 23,
        "url": "https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2.jpg"
    }
]

var popularPizza2 = [
    {
        "name": "BBQ Chicken",
        "desc": "BBQ sauce, seasoned grilled chicken breast, red onion, green peppers, smoked aged cheddar and pizza mozzarella.",
        "price": 23,
        "url": "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=1380&t=st=1690967543~exp=1690968143~hmac=062a1a2e03023bed79229df3a3d86b513d860733d7a7dbc551bdd8f5ca43f3e0"
    },
    {
        "name": "Veggie Lover's®",
        "desc": "Sliced mushrooms, green pepper, red onion, tomato and pizza mozzarella.",
        "price": 23,
        "url": "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg"
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
  