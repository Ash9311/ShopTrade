//select elements
const productEl = document.querySelector(".items");
const AllProductsFilter = document.querySelector(".bread-crumb-All-products");
const TeeShirtFilter = document.querySelector(".bread-crumb-Tee-Shirt");
const DenimFilter = document.querySelector(".bread-crumb-Denim");
const SweatShirtsFilter = document.querySelector(".bread-crumb-Sweatshirts");
const PoloFilter = document.querySelector(".bread-crumb-Polo");
const ShirtFilter = document.querySelector(".bread-crumb-Shirt");
const PriceFiler = document.querySelector(".bread-crumb-sort-by");

AllProductsFilter.addEventListener('click',()=>{
    products = this.originalProductData;
     productEl.innerHTML = "";
     renderProducts(products);
     this.count = products.length;
document.getElementById("productCount").innerHTML = "All Products("+count+")";  
})

TeeShirtFilter.addEventListener('click',()=>{
    filterProduct("T-shirt");
    productEl.innerHTML = "";
    renderProducts(products);
})

DenimFilter.addEventListener('click',()=>{
    filterProduct("Denim");
    productEl.innerHTML = "";
    renderProducts(products);
})

SweatShirtsFilter.addEventListener('click',()=>{
    filterProduct("Sweatshirt");
    productEl.innerHTML = "";
    renderProducts(products);
})

PoloFilter.addEventListener('click',()=>{
    filterProduct("Polo");
    productEl.innerHTML = "";
    renderProducts(products);
})

ShirtFilter.addEventListener('click',()=>{
    filterProduct("shirt");
    productEl.innerHTML = "";
    renderProducts(products);
})

PriceFiler.addEventListener('click',()=>{
    priceSort(products);
    productEl.innerHTML = "";
    renderProducts(products);
})

var count = products.length;
console.log(count);
document.getElementById("productCount").innerHTML = "All Products("+count+")";

//render products
function renderProducts(SelectedProducts){
    SelectedProducts.forEach((product)=>{
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
renderProducts(products );
if(!check){
var originalProductData = products; //since we need original product data for future use. 
check = true;
}

function filterProduct(tag){
    products = this.originalProductData
  products = products.filter((product)=>product.name.includes(tag) || product.tag==tag );
this.count = products.length;
document.getElementById("productCount").innerHTML = "All Products("+count+")";
}

function priceSort(products){
    products=products.sort(function(a, b) {
       
            return (a[products] > b[products]) ? 1 : ((a[products] < b[products]) ? -1 : 0);
        
           // return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        
    });
}