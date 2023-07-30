import productdata from "../data/products.json" assert { type: "json" };

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
              productdata.img[productid - 1]
            }" width="100%" class="small-img">
        </div>
        <div class="small-img-col">
            <img src="${
              productdata.img[productid - 1]
            }" width="100%" class="small-img">
        </div>
        <div class="small-img-col">
            <img src="${
              productdata.img[productid - 1]
            }" width="100%" class="small-img">
        </div>
        <div class="small-img-col">
            <img src="${
              productdata.img[productid - 1]
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
  cartItems.productid = productid;
  cartItems.productname = productdata.name[productid - 1];
  cartItems.productprice = productdata.price[productid - 1];
  cartItems.productimg = productdata.img[productid - 1];
  cartItems.productamt = document.getElementById(productid).value;
  cartItems.producttotal = cartItems.productamt * cartItems.productprice;

  cartdata.push(cartItems);

  //add cartdata to localstorage
  localStorage.setItem("cartdata", JSON.stringify(cartdata));
  console.log(cartdata);
});
