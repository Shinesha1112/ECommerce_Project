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
        <h3>${product.price}</h3>
        <select>
        <option>Select Size</option>
        <option>S</option>
        <option>XL</option>
        <option>XXL</option>
        <option>Small</option>
        <option>Large</option>
        </select>
        <input type="number" value="1">
        <button class="normal">Add To Cart</button>
        <div class="star">${starsHTML}</div>
        <h4>Product Details</h4>
        <span>${product.description}</span>
        </div> `
       
        ;
    } else {
        productDetailsContainer.innerHTML = `<p>Product not found.</p>`;
    }
} else {
    console.error("Product ID is missing or product details container not found.");
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





