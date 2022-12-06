//select elements
const productEl = document.querySelector(".items");
const AllProductsFilter = document.querySelector(".bread-crumb-All-products");
const TeeShirtFilter = document.querySelector(".bread-crumb-Tee-Shirt");
const DenimFilter = document.querySelector(".bread-crumb-Denim");
const SweatShirtsFilter = document.querySelector(".bread-crumb-Sweatshirts");
const PoloFilter = document.querySelector(".bread-crumb-Polo");
const ShirtFilter = document.querySelector(".bread-crumb-Shirt");

AllProductsFilter.addEventListener('click',()=>{
    products = this.originalProductData;
     productEl.innerHTML = "";
     renderProducts();
})

TeeShirtFilter.addEventListener('click',()=>{
    filterProduct("T-shirt");
    productEl.innerHTML = "";
    renderProducts();
})

DenimFilter.addEventListener('click',()=>{
    filterProduct("Denim");
    productEl.innerHTML = "";
    renderProducts();
})

SweatShirtsFilter.addEventListener('click',()=>{
    filterProduct("Sweatshirt");
    productEl.innerHTML = "";
    renderProducts();
})

PoloFilter.addEventListener('click',()=>{
    filterProduct("Polo");
    productEl.innerHTML = "";
    renderProducts();
})

ShirtFilter.addEventListener('click',()=>{
    filterProduct("shirt");
    productEl.innerHTML = "";
    renderProducts();
})




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
let filteredProduct = [];
let check = false;
renderProducts();
if(!check){
var originalProductData = products; //since we need original product data for future use. 
check = true;
}

function filterProduct(tag){
    products = this.originalProductData
  products = products.filter((product)=>product.name.includes(tag) || product.tag==tag );

}