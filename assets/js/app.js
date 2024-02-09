//Array of products items

const products = [
    {
        id:0,
        img: "assets/img/arrival/01.jpg",
        title: "Mercedes Benz Car",
        price: 45620
    },
    {
        id:1,
        img: "assets/img/arrival/02.jpg",
        title: "Yellow Ferrari 458",
        price: 90250
    },
    {
        id:2,
        img: "assets/img/arrival/03.jpg",
        title: "Black Audi Q7",
        price: 44350
    },
    {
        id:3,
        img: "assets/img/arrival/04.jpg",
        title: "BMW Sports Car",
        price: 78760
    },
    {
        id:4,
        img: "assets/img/arrival/05.jpg",
        title: "White Tesla Car",
        price: 76750
    },
    {
        id:5,
        img: "assets/img/arrival/06.jpg",
        title: "White Nissan Car",
        price: 8345
    },
    {
        id:6,
        img: "assets/img/arrival/07.jpg",
        title: "Mercedes Benz SUV",
        price: 4560
    },
    {
        id:7,
        img: "assets/img/arrival/08.jpg",
        title: "Red Hyundai Car",
        price: 49620
    }
];

console.log(products);
const product_items = document.querySelector(".product_grid");
const navmenu = document.querySelector("#nav_menu");
const menu = document.querySelector(".hamburger");
const cart_menu = document.querySelector(".cart_menu");
const Cart_sect = document.querySelector(".cart_section");
const check_btn = document.querySelector(".checkout");

// global variables
let cart = [];
let i = 0;
let j = 0;
let total = 0;


// Add an eventListener to the hamburger menu
menu.addEventListener("click", ()=>{
    menu.classList.toggle("open");
    navmenu.classList.toggle("show");
});

// toggle the cart section
cart_menu.addEventListener("click", ()=>{
    Cart_sect.classList.toggle("show");
});

// Mapping through the product array to display the items on the DOM

const products_data = products.map((item)=>{
    const {img, title, price} = item;
    return (
        `<div class="row_col">
        <div class="image">
            <img src=${img}>
        </div>
        <div class="prod_inner">
            <h5>${title}</h5>
            <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <span>5.0 (58.5k Review)</span>
            </div>
            <div class="features">
                <span><i class="bx bx-error-circle"></i> Automatic</span>
                <span><i class="bx bx-label"></i> 10.15km/ 1-litre</span>
                <span><i class='bx bx-car'></i> Model: 2023</span>
                <span><i class='bx bx-target-lock'></i> Hybrid</span>
            </div>
            <div class="line"></div>
            <div class="price flex">
                <span>$${price}</span>`+
                "<button onclick= 'AddTocart("+(i++)+")'>Add to cart</button>" +
            `</div>
        </div>
    </div>`
    )

}).join('');

product_items.innerHTML = products_data;

// function to Add to cart
const AddTocart = (a)=>{
    cart.push({...products[a]});
};

// function to display cart
const showCart = ()=>{
    // shows the number of item added to the cart
    document.getElementById("count").innerHTML = cart.length;
    // if the cart is empty show this
    if(cart.length == 0) {
        document.getElementById("cart_text").innerHTML = "Your Cart is Empty";
        check_btn.classList.add("hide");
    }
}