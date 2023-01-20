import data1 from "../data/F-products.json" assert { type: "json" };
import data2 from "../data/L-products.json" assert { type: "json" };
import data3 from "../data/testimonial.json" assert { type: "json" };
import data4 from "../data/brands.json" assert { type: "json" };

let row = document.getElementsByClassName("row");
let htmlElements1 = "";
let htmlElements2 = "";
let htmlElements3 = "";
let htmlElements4 = "";

for (let i = 0; i < 4; i++) {
  htmlElements1 += `<div class="col-4"><img src=${data1.img[i]} alt="img1">
  <h4>${data1.name[i]}</h4>
  <div class="rating">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star-half-o"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
  </div>
  <p>${data1.price[i]}</p>
</div>`;
}
row[2].innerHTML = htmlElements1;

for (let i = 0; i < 8; i++) {
  htmlElements2 += `<div class="col-4"><img src=${data2.img[i]} alt="img1">
    <h4>${data2.name[i]}</h4>
    <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="${data2.class[i]}"></i>
        <i class="fa fa-star-o"></i>
    </div>
    <p>${data2.price[i]}</p>
  </div>`;
}

row[3].innerHTML = htmlElements2;

for (let i = 0; i < 3; i++) {
  htmlElements3 += `<div class="col-3">
    <i class="fa fa-quote-left"></i>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam ea earum sequi expedita
        perferendis, excepturi obcaecati.</p>
    <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="${data3.class[i]}"></i>
    </div>
    <img src=${data3.img[i]}>
    <h3>${data3.name[i]}</h3>
</div>`;
}

row[5].innerHTML = htmlElements3;

for (let i = 0; i < 5; i++) {
  htmlElements4 += `<div class="col-5">
    <img src=${data4.img[i]}>
</div>`;
}

row[6].innerHTML = htmlElements4;
