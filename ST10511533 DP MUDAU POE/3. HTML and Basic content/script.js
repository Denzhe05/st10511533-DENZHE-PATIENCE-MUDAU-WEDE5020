
// ===================================
// THE SWEET CRUMBS BAKERY - JAVASCRIPT
// ===================================


// 1. SHOPPING CART

let cart = JSON.parse(localStorage.getItem("bakeryCart")) || [];

function updateCart() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.reduce(
            (total, item) => total + item.quantity, 0
        );
    }

    localStorage.setItem("bakeryCart", JSON.stringify(cart));
}

document.querySelectorAll(".product-card").forEach(function (product) {
    const button = product.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {
            const name = product.querySelector("h3")?.textContent.trim();
            const priceText = product.querySelector(".price")?.textContent;
            const price = Number(priceText?.replace(/[^0-9.]/g, ""));

            if (!name || !Number.isFinite(price)) {
                alert("Please check the product name and price.");
                return;
            }

            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    name: name,
                    price: price,
                    quantity: 1
                });
            }

            updateCart();
            alert(name + " has been added to your cart!");
        });
    }
});

updateCart();


// 2. PRODUCT SEARCH

const searchInput = document.getElementById("product-search");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();

        document.querySelectorAll(".product-card").forEach(function (product) {
            const productName =
                product.querySelector("h3")?.textContent.toLowerCase() || "";

            product.style.display = productName.includes(searchValue)
                ? ""
                : "none";
        });
    });
}


// 3. CONTACT FORM VALIDATION

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const message = document.getElementById("message")?.value.trim();

        if (!name || !email || !message) {
            alert("Please complete all the required fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for contacting The Sweet Slice Bakery!");

        contactForm.reset();
    });
}


// 6. GALLERY IMAGE VIEWER

document.querySelectorAll(".gallery-item img").forEach(function (image) {
    image.style.cursor = "pointer";

    image.addEventListener("click", function () {
        window.open(image.src, "_blank");
    });
});


// 7. BACK TO TOP BUTTON

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// 8. WELCOME MESSAGE

console.log("The Sweet Crumbs Bakery website is running successfully!");
