//select elements
const productEl = document.querySelector(".items");

//render products
function renderProducts(){
  products.forEach((product)=>{
    productEl.innerHTML +=
    `<div class="item">
    <div class="item-container">
        <div class="item-img">
            <img src="${product.image_src}" alt="${product.name}" style=" height: ;
            width: 262px;">
        </div>
        <div class="desc">
        <span class="product-vendor">${product.vendor}</span>
            <span class="product-name">${product.name}</span>
            <span class="product-price">$${product.price}</span>
            
        </div>
    </div>
</div>`
  })
}

renderProducts();