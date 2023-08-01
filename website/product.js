import productdata from "../data/products.json" assert { type: "json" };

let rowitem = document.getElementsByClassName("row");
let htmlElements1 = "";
let htmlElements2 = "";

for (let i = 0; i < 8; i++) {
  htmlElements1 += `<div class="col-4 opendetails" id="${productdata.id[i]}">
  <img src="${productdata.img[i]}" alt="img1"> 
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
}

rowitem[1].innerHTML = htmlElements1;

for (let i = 8; i < 15; i++) {
  htmlElements2 += `<div class="col-4 opendetails" id="${productdata.id[i]}">
  <img src="${productdata.img[i]}" alt="img1"> 
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
}

rowitem[2].innerHTML = htmlElements2;

let page_toggle_btn = document.getElementById("page_toggle_btn");

page_toggle_btn.innerHTML = `
<span class="page_selector">1</span>
<span class="page_selector">2</span>
<span class="page_selector">3</span>
<span class="page_selector">4</span>
`;

page_toggle_btn.innerHTML += `<span>&#8594</span> <p id="page_number">Page 1 of 4</p>`;

let page_selector = document.getElementsByClassName("page_selector");
let page_number = document.getElementById("page_number");

page_selector[0].addEventListener("click", () => {
  rowitem[2].classList.add("row_not-active");
  rowitem[1].classList.remove("row_not-active");
  page_number.innerHTML = `Page ${1} of 4`;
});

page_selector[1].addEventListener("click", () => {
  rowitem[1].classList.add("row_not-active");
  rowitem[2].classList.remove("row_not-active");
  page_number.innerHTML = `Page ${2} of 4`;
});

let opendetails = document.getElementsByClassName("opendetails");

for (let i = 0; i < productdata.name.length; i++)
  opendetails[i].addEventListener("click", () => {
    let productid = opendetails[i].id;
    //send this productid to product-details.js
    window.open(`product-details.html?productid=${productid}`, "_self");
    module.exports = productid;
  });
