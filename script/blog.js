import {blogPoducts} from "./blogProduct.js";


const blogContainer =document.getElementById("blog");


if(blogContainer) {
 blogPoducts.forEach(product=>{
    blogContainer.innerHTML +=
`<div class="blog-box">
<div class="blog-img">
    <img src=${product.img}>
</div>
<div class="blog-details">
    <h4>${product.name}</h4>
    <p>${product.des}</p>
    <a href="#">CONTINUE READING</a>
</div>
<h1>${product.number}</h1>
</div>`;});
}
else{
    console.error("Blog Element does not exists");
}