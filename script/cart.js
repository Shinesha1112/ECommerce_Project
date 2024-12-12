function renderCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalAmountContainer = document.getElementById("totalAmount");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = "";
    let totalAmount = 0;
    cart.forEach((item, index) => {
        const price = parseInt(item.price) || 0; 
        const quantity = parseInt(item.quantity) || 0;
        const itemTotal = price * quantity;

        totalAmount += itemTotal;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><a href="#" class="remove-item" data-index="${index}"><i class="far fa-times-circle"></i></a></td>
            <td><img src="${item.img1}" width="50" alt="Product Image"></td>
            <td class="text">${item.brand}</td>
            <td>Rs.${item.price}</td>
            <td><input type="number" value="${item.quantity}" class="quantity-input" data-index="${index}"></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    totalAmountContainer.textContent = `Rs. ${totalAmount}`;

    attachEventListeners(cart);
}
function attachEventListeners(cart) {
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const index = this.getAttribute("data-index");
            cart.splice(index, 1); 
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart(); 
        });
    });
    document.querySelectorAll(".quantity-input").forEach(input => {
        input.addEventListener("change", function () {
            const index = this.getAttribute("data-index");
            const newQuantity = parseInt(this.value) || 1;
            cart[index].quantity = newQuantity;
            localStorage.setItem("cart", JSON.stringify(cart)); 
            renderCart(); 
        });
    });
}
renderCart();
