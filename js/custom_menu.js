function displayMenuItems(){
    var ourMenu = document.getElementById("om_holder");
    var str = ""
    var ourMenuData = [
        { 
            "title" : "The Great Beyond" ,
            "desc"  : "Beyond Meat Italian Sausage Crumble, hot peppers, Red Onion, and Pizza Mozzarella.",
            "price" : "$23",
            "image"   : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",

        },
        { 
            "title" : "Meat Lover's® " ,
            "desc"  : "Pepperoni, Italian sausage, mild sausage, beef topping, ham, bacon crumble and pizza mozzarella.",
            "price" : "$23",
            "image"   : "https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2.jpg",

        },
        { 
            "title" : "BBQ Chicken" ,
            "desc"  : "BBQ sauce, seasoned grilled chicken breast, red onion, green peppers, smoked aged cheddar and pizza mozzarella.",
            "price" : "$23",
            "image"   : "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=1380&t=st=1690967543~exp=1690968143~hmac=062a1a2e03023bed79229df3a3d86b513d860733d7a7dbc551bdd8f5ca43f3e0",

        },
        { 
            "title" : "Veggie Lover's® " ,
            "desc"  : "Sliced mushrooms, green pepper, red onion, tomato and pizza mozzarella.",
            "price" : "$23",
            "image"   : "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg",

        },
        { 
            "title" : "Canadian " ,
            "desc"  : "Pepperoni, bacon crumble, sliced mushrooms and pizza mozzarella",
            "price" : "$23",
            "image"   : "https://media-cdn2.greatbritishchefs.com/media/betj5xr4/img26346.whqc_768x512q80.webp",

        },
        { 
            "title" : "Triple Crown" ,
            "desc"  : "Pepperoni, green pepper, sliced mushrooms and pizza mozzarella",
            "price" : "$23",
            "image"   : "https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?w=900&t=st=1690967595~exp=1690968195~hmac=6be89e515c46e84a3380108b7e2a5f51e8ade91f3ee4671fb9e572e9daeaf382",

        }

    ]; 


    for(i=0;i<6;i++){
        str += "<div class='om_item'>";
        if (i < 3) {
            str += "<div class='om_main_image'>";
            str += "<img class='om_image' "+ "src='"+ ourMenuData[i]['image']+ "'/></div>";
            str += "<div class='om_item_details'><div class='om_item_details_item spaned om_item_title'>" + ourMenuData[i]['title'] + "</div>"
            str += "<div class='om_item_details_item spaned om_item_des'>" + ourMenuData[i]["desc"] + "</div>"
            str += "<div class='om_item_details_item om_item_price'>" + ourMenuData[i]["price"] + "</div>"
            str += "<div class='om_item_details_item'>"
            str += "<a class='om_order_button' href='#'>Order</a></div></div>"

        } else {
            str += "<div class='om_item_details'><div class='om_item_details_item spaned om_item_title'>" + ourMenuData[i]['title']  + "</div>"
            str += "<div class='om_item_details_item spaned om_item_des'>" + ourMenuData[i]["desc"] + "</div>"
            str += "<div class='om_item_details_item om_item_price'>" + ourMenuData[i]["price"]  + "</div>"
            str += "<div class='om_item_details_item'>"
            str += "<a class='om_order_button' href='#'>Order</a></div></div>"
            str += "<div class='om_main_image'>";
            str += "<img class='om_image' "+ "src='"+ ourMenuData[i]['image']+ "'/></div>";
        }
        str += "</div>";

    }
    
    ourMenu.innerHTML = str;
 }

