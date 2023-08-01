import productdata from "../data/products.json" assert { type: "json" };
import smallImgdata from "../data/smallImages.json" assert { type: "json" };

let eachProduct = document.getElementById("product-each-details");

//get the productid from product.js
let url = new URL(window.location.href);
let productid = url.searchParams.get("productid"); 


let codeBlock = `
<div class="row" >
<div class="col-2">
    <img src="${
      productdata.img[productid - 1]
    }" width="100%" id="product-img" class="product-img">
    <div class="small-img-row">
        <div class="small-img-col">
            <img src="${
              smallImgdata[productid - 1][0]
            }" width="100%" class="small-img">
        </div>
        <div class="small-img-col">
            <img src="${
              smallImgdata[productid - 1][1]
            }" width="100%" class="small-img">
        </div>
        <div class="small-img-col">
            <img src="${
              smallImgdata[productid - 1][2]
            }" width="100%" class="small-img">
        </div>
        <div class="small-img-col">
            <img src="${
              smallImgdata[productid - 1][3]
            }" width="100%" class="small-img">
        </div>
    </div>
</div>
<div class="col-2">
    <h1>${productdata.name[productid - 1]}</h1>
    <h4>$${productdata.price[productid - 1]}</h4>
    <select>
        <option>Select date</option>
        <option>Today</option>
        <option>Tomorrow</option>
    </select>
    <input type="number" value="1" min="1" id="${productid}">
    <button class="addtocart-btn" id="addtocart">Add to Cart</button>
    <h3>Product Details <i class="fa fa-indent"></i></h3><br>
    <p>#</p>
</div>
</div>
`;

eachProduct.innerHTML = codeBlock;

let productImg = document.getElementById("product-img");
let smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < 4; i++) {
  smallImg[i].onclick = () => {
    productImg.src = smallImg[i].src;
  };
}

let addtocart = document.getElementById("addtocart"); //add to cart button

let cartdata;
//if cartdata is not present in localstorage, create an empty array
if (localStorage.getItem("cartdata") == null) {
  localStorage.setItem("cartdata", JSON.stringify([]));
}

//get the cartdata from localstorage
cartdata = localStorage.getItem("cartdata");
cartdata = JSON.parse(cartdata);

addtocart.addEventListener("click", () => {
  let cartItems = {};

  //check if the product is already present in cartdata

  for (let i = 0; i < cartdata.length; i++) {
    if (cartdata[i].productid == productid) {
      alert(
        "Product already added to cart. Please change the amount in your carts page."
      );
      return;
    }
  }

  cartItems.productid = productid;
  cartItems.productname = productdata.name[productid - 1];
  cartItems.productprice = productdata.price[productid - 1];
  cartItems.productimg = productdata.img[productid - 1];
  cartItems.productamt = document.getElementById(productid).value;
  cartItems.producttotal = cartItems.productamt * cartItems.productprice;

  cartdata.push(cartItems);

  //add cartdata to localstorage
  localStorage.setItem("cartdata", JSON.stringify(cartdata));
  alert("Product added to cart");
});

let relatedProducts = document.getElementById("related_products");

let relatedProductsCode;

//let the value of i be random but range from 0 to 11 so that the related products are random

//minimum value of num should be 0 and maximum value should be 8

let num1 = Math.floor(Math.random() * 11);
let num2 = num1 + 4;
console.log(num1, num2);

for (let i = num1; i < num2; i++) {
  relatedProductsCode = `
  <div class="col-4 rel_pro_details" id="${productdata.id[i]}"><img src="${productdata.img[i]}" alt="img1">
  <div class="ProductsDiv"> 
  <h4>${productdata.name[i]}</h4>
  <div class="rating">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="${productdata.class1[i]}"></i>
      <i class="${productdata.class2[i]}"></i>
  </div>
  <p>$${productdata.price[i]}</p>
  </div>
</div>`;
  relatedProducts.innerHTML += relatedProductsCode;
}

let rel_pro_details = document.getElementsByClassName("rel_pro_details");

for (let i = 0; i < rel_pro_details.length; i++) {
  rel_pro_details[i].addEventListener("click", () => {
    window.location.href = `product-details.html?productid=${rel_pro_details[i].id}`;
  });
}
