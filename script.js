// // Sample product data
// const products = [
//     { id: 1, name: "Product 1", price: 99 },
//     { id: 2, name: "Product 2", price: 149 },
//     // Add more products here if needed
// ];

// Cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(productId) {
    // Find the product in the products array
    const product = products.find(item => item.id === productId);

    // Add the product to the cartItems array
    cartItems.push(product);

    // Call the function to update the cart display
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    // Find the index of the product in the cartItems array
    const index = cartItems.findIndex(item => item.id === productId);

    // Remove the product from the cartItems array
    if (index !== -1) {
        cartItems.splice(index, 1);
    }

    // Call the function to update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    // Clear the cart items container
    cartItemsContainer.innerHTML = "";

    // Iterate over the cartItems array and create HTML elements for each item
    for (const item of cartItems) {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = "Price: $" + item.price;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeFromCart(item.id));

        cartItemDiv.appendChild(itemName);
        cartItemDiv.appendChild(itemPrice);
        cartItemDiv.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItemDiv);
    }

    // Calculate and display the total price
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = "Total: $" + total;
}

// Function to handle the checkout process
function checkout() {
    // Implement the logic for the checkout process
    // For example, you can submit the order or redirect to a payment page
}


// Sample product data for demonstration
const products = [
    { id: 1, brand: "iphone", name: "iPhone X", price: 999, image: "iphone-x.jpg" },
    { id: 2, brand: "iphone", name: "iPhone 11", price: 1199, image: "iphone-11.jpg" },
    { id: 3, brand: "iphone", name: "iPhone 12", price: 1399, image: "iphone-12.jpg" },
    { id: 4, brand: "realme", name: "Realme 5 Pro", price: 299, image: "realme-5-pro.jpg" },
    { id: 5, brand: "realme", name: "Realme 7", price: 399, image: "realme-7.jpg" },
    { id: 6, brand: "realme", name: "Realme X2", price: 449, image: "realme-x2.jpg" },
    { id: 7, brand: "samsung", name: "Samsung Galaxy S20", price: 899, image: "samsung-s20.jpg" },
    { id: 8, brand: "samsung", name: "Samsung Galaxy Note 10", price: 1099, image: "samsung-note-10.jpg" },
    { id: 9, brand: "samsung", name: "Samsung Galaxy A71", price: 599, image: "samsung-a71.jpg" },
    { id: 10, brand: "oppo", name: "Oppo Reno 3", price: 499, image: "oppo-reno-3.jpg" },
    { id: 11, brand: "oppo", name: "Oppo Find X2", price: 899, image: "oppo-find-x2.jpg" },
    { id: 12, brand: "oppo", name: "Oppo A92", price: 349, image: "oppo-a92.jpg" },
];

// Function to generate product HTML based on the data
function generateProductHTML(product) {
    return `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
}

// Function to filter and display products based on selected brand
function filterProductsByBrand(brand) {
    const productListElement = document.getElementById("product-list");

    // Clear the existing products
    productListElement.innerHTML = "";

    // Filter products based on the selected brand
    const filteredProducts = brand === "all" ? products : products.filter(product => product.brand === brand);

    // Generate HTML for each product and append to the product list
    filteredProducts.forEach(product => {
        const productHTML = generateProductHTML(product);
        productListElement.innerHTML += productHTML;
    });
}

// Event listener for brand select dropdown
document.getElementById("brand-select").addEventListener("change", function() {
    const selectedBrand = this.value;
    filterProductsByBrand(selectedBrand);
});

// Initial call to display all products
filterProductsByBrand("all");
