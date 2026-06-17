let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Price: ₹${item.price}</p>
                </div>

                <div class="quantity-box">
                    <button onclick="decreaseQty(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQty(${index})">+</button>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalPriceEl.textContent = total;
}

function increaseQty(i) {
    cart[i].quantity++;
    saveCart();
}

function decreaseQty(i) {
    if (cart[i].quantity > 1) {
        cart[i].quantity--;
    }
    saveCart();
}

function removeItem(i) {
    cart.splice(i, 1);
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();