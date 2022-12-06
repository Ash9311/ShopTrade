//select elements
const productEl = document.querySelector(".items");

//render products
function renderProducts(){
  products.forEach((product)=>{
    productEl.innerHTML +=
    `<div class="item">
    <div class="item-container">
        <div class="item-img">
            <img src="${product.image_src}" alt="${product.name}" style=" height:349px ;
            width: 262px;">
        </div>
        <div class="desc">
            <h2>${product.vendor}</h2>
            <h2><small>${product.name}</small></h2>
            <p>${product.price}
            </p>
        </div>
    </div>
</div>`
  })
}

renderProducts();