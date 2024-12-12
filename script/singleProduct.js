import { singleProducts } from "./sproduct.js"; 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = parseInt(urlParams.get("id"));
const productDetailsContainer = document.getElementById("pro-details");
if (productDetailsContainer && productId) {
    const product = singleProducts.find(p => p.id === productId);
    if (product) {
        const starsHTML = Array(product.stars)
            .fill('<i class="fas fa-star"></i>')
            .join('');

        productDetailsContainer.innerHTML +=
    `<div class="single-img"> 
        <img src="${product.img1}" width="100%" id="mainImg" alt="">
        <div class="small-img-grp">
        <div class="small-img">
           <img src="${product.img2}" width="100%" class="sm-img" alt="">
        </div>
        <div class="small-img">
            <img src="${product.img1}" width="100%" class="sm-img" alt="">
        </div>
        <div class="small-img">
            <img src="${product.img3}" width="100%" class="sm-img" alt="">
        </div>
        </div>
        </div>
        <div class="single-pro-details">
        <h4>CASUAL WEAR</h4>
        <h4>${product.brand}</h4>
        <h3>Rs.${product.price}</h3>
        <select>
        <option>Select Size</option>
        <option>S</option>
        <option>XL</option>
        <option>XXL</option>
        <option>Small</option>
        <option>Large</option>
        </select>
        <input type="number" value="1">
        <button class="normal" id="addToCartBtn">Add To Cart</button>
        <div class="star">${starsHTML}</div>
        <h4>Product Details</h4>
        <span>${product.description}</span>
        </div> `
       
        ;
        const addToCartBtn = document.getElementById("addToCartBtn");
        addToCartBtn.addEventListener("click", () => {
            
            addToCart(product);
            addToCartBtn.innerHTML="Added to cart";
        });
    } else {
        productDetailsContainer.innerHTML = `<p>Product not found.</p>`;
    }
} else {
    console.error("Product ID is missing or product details container not found.");
}

function addToCart(product) {

    const quantityInput = document.getElementById("quantity");
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

}
var MainImg =document.getElementById("mainImg");
var SmallImg =document.getElementsByClassName("sm-img");
SmallImg[0].onclick =function(){
    MainImg.src =SmallImg[0].src;
}
SmallImg[1].onclick =function(){
    MainImg.src =SmallImg[1].src;
}
SmallImg[2].onclick =function(){
    MainImg.src =SmallImg[2].src;
}