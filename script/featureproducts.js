import { products } from "./products.js";

const productContainer = document.getElementById("pro-container");


    if (productContainer) {
        products.forEach(product => {
            const starsHTML = Array(product.stars)
                .fill('<i class="fas fa-star"></i>')
                .join('');

            productContainer.innerHTML += `
                <div class="pro">
                    <img src="${product.img}" alt="" class="pro-img">
                    <div class="des">
                        <span>${product.brand}</span>
                        <h5>${product.description}</h5>
                        <div class="star">${starsHTML}</div>
                        <h4>${product.price}</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                </div>
            `;
        });
    } else {
        console.error("Element with id 'product-container' not found.");
    }
