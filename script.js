const items = [
    {
        image: "img.jpg",
        title: "Dry Cleaning",
        price: "₹200.00"
    },
    {
        image: "img1.jpg",
        title: "Leather & Suede Cleaning",
        price: "₹900.00"
    },
    {
        image: "img2.jpg",
        title: "Ironing",
        price: "₹30.00"
    },
    {
        image: "img3.jpg",
        title: "Wedding Dress Cleaning",
        price: "₹2400.00"
    },
    {
        image: "img4.jpg",
        title: "Wash and Fold",
        price: "₹140.00"
    },
    {
        image: "img5.jpg",
        title: "Stain Removal",
        price: "₹500.00"
    }
];

let currentIndex = 0;

let sliderImage = document.getElementById('sliderImage');
const title = document.querySelector(".img-text h3");
const price = document.querySelector(".price");
let nextBtn = document.getElementById("next");



nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    sliderImage.src = items[currentIndex].image;
    title.textContent = items[currentIndex].title;
    price.textContent = items[currentIndex].price;
});


const cart = [];

let AddCartBtn = document.getElementById("add-to-cart");
const listCart = document.querySelector(".listcart");
const noItems = document.querySelector(".no-item");
const totalPriceElement = document.getElementById("totalPrice");


function renderCart() {

    listCart.innerHTML = "";

    if (cart.length === 0) {
        noItems.style.display = "block";
        listCart.style.display = "none";
        totalPriceElement.textContent = "₹0.00";
        return;
    }

    noItems.style.display = "none";
    listCart.style.display = "block";

    let total = 0;

    cart.forEach((item, index) => {

        total += Number(
            item.price.replace("₹", "").replace(".00", "")
        );

        const cartItem = document.createElement("div");

        cartItem.classList.add("item");

        cartItem.innerHTML = `
            <div>${index + 1}</div>
            <div>${item.title}</div>
            <div>${item.price}</div>
        `;

        listCart.appendChild(cartItem);
    });

    totalPriceElement.textContent = `₹${total}.00`;
}

AddCartBtn.addEventListener("click", () => {

    const service = items[currentIndex];

    const exists = cart.find(
        item => item.title === service.title
    );

    if (!exists) {
        cart.push(service);
        renderCart();
    }
    currentIndex++;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    sliderImage.src = items[currentIndex].image;
    title.textContent = items[currentIndex].title;
    price.textContent = items[currentIndex].price;
}),

    renderCart();

const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
let Bookbtn = document.getElementById("Book-now");

Bookbtn.addEventListener("click", () => {
    currentIndex++;

    if (cart.length != 0) {
        t1.style.display = "flex";
        t2.style.display = "none";
        return;
    }
})