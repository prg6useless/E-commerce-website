import data from "../data/cardsdata.json" assert { type: "json" };

let row = document.getElementsByClassName("row");
let htmlElements1 = "";
let htmlElements2 = "";
let htmlElements3 = "";
let htmlElements4 = "";
let htmlElements5 = "";

//popular products

for (let i = 0; i < data[0].name.length; i++) {
  htmlElements1 += `
  <div class="col-4">
    <img src=${data[0].img[i]} alt="img1" class="pop-pro_img">
    <div class="ProductsDiv">
      <h4>${data[0].name[i]}</h4>
      <div class="rating"> 
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="${data[0].class1[i]}"></i>
        <i class="${data[0].class2[i]}"></i>
      </div>
    <p>$${data[0].price[i]}</p>
  </div>
</div>`;
}

row[2].innerHTML = htmlElements1;

//latest products

for (let i = 0; i < data[1].name.length; i++) {
  htmlElements2 += `
  <div class="col-4">
    <img src=${data[1].img[i]} alt="img1">
    <div class="ProductsDiv">
      <h4>${data[1].name[i]}</h4>
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="${data[1].class1[i]}"></i>
        <i class="${data[1].class2[i]}"></i>
      </div>
      <p>$${data[1].price[i]}</p>
    </div>
  </div>`;
}

row[3].innerHTML = htmlElements2;

//ratings

for (let i = 0; i < data[2].name.length; i++) {
  htmlElements3 += `<div class="col-3">
    <i class="fa fa-quote-left"></i>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam ea earum sequi expedita
        perferendis, excepturi obcaecati.</p>
    <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="${data[2].class[i]}"></i>
    </div>
    <img src=${data[2].img[i]}>
    <h3>${data[2].name[i]}</h3>
</div>`;
}

row[4].innerHTML = htmlElements3;

for (let i = 0; i < data[3].img.length; i++) {
  htmlElements4 += `<div class="col-5">
    <img src=${data[3].img[i]}>
</div>`;
}

row[5].innerHTML = htmlElements4;

for (let i = 0; i < data[4].name.length; i++) {
  htmlElements5 += ` <div class="col-3"><img src="${data[4].img[i]}" alt="img1"></div>

`;
}

row[1].innerHTML = htmlElements5;
