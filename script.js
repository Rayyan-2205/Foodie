// =========================
// SIMPLE CART SYSTEM
// USING LOCAL STORAGE
// =========================

// Load cart from localStorage OR create empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 1️⃣ ADD TO CART FUNCTION
function addToCart(productName, price, image) {
    // Check if product already exists
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;   // increase quantity
    } else {
        // Add new product
        cart.push({
            name: productName,
            price: price,
            image: image,
            quantity: 1
        });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
}


// 2️⃣ LOAD CART ITEMS ON CART PAGE
function loadCartItems() {
    let cartItemsContainer = document.getElementById("cart-items");
    let totalAmountBox = document.getElementById("total-amount");

    let total = 0;

    cartItemsContainer.innerHTML = ""; // clear old items

    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: ₹${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Total: ₹${itemTotal}</p>
                </div>
            </div>
            <hr>
        `;
    });

    totalAmountBox.innerHTML = `₹${total}`;
}


// 3️⃣ CLEAR CART
function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    loadCartItems();
    alert("Cart cleared!");
}
