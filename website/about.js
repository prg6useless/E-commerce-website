import data from "../data/about.json" assert { type: "json" };

let container = document.getElementById("container");
let htmlElements = "";

for (let i = 0; i < 2; i++) {
  htmlElements += `<div class="col-4">
  <img src=${data.img[i]}>
  <h4>${data.name[i]}</h4>
  <div class="rating">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
  </div>
  <p>${data.price[i]}</p>
</div>`;
}
container.innerHTML = htmlElements;
