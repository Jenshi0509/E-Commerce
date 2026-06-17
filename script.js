// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add-to-cart button animation
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "Add to Cart") {
      btn.textContent = "✔ Added!";
      setTimeout(() => (btn.textContent = "Add to Cart"), 2000);
    }
  });
});

function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists
    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name,
            price,
            image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}