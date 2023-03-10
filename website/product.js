import productdata from "../data/products.json" assert { type: "json" };

let rowitem = document.getElementsByClassName("row");
let htmlElements = "";

for (let i = 0; i < productdata.name.length; i++) {
  htmlElements += `<div class="col-4 opendetails"><img src="${productdata.img[i]}" alt="img1">
    <h4>${productdata.name[i]}</h4>
    <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="${productdata.class1[i]}"></i>
        <i class="${productdata.class2[i]}"></i>
    </div>
    <p>${productdata.price[i]}</p>
</div>`;
}

rowitem[1].innerHTML = htmlElements;

let opendetails = document.getElementsByClassName("opendetails");

for (let i = 0; i < productdata.name.length; i++)
  opendetails[i].addEventListener("click", () => {
    window.open(productdata.htmlfile, "_self");
  });
