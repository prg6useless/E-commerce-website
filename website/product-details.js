let productImg = document.getElementById("product-img");
let smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < 4; i++) {
  smallImg[i].onclick = function () {
    productImg.src = smallImg[i].src;
  };
}

function opencart() {
  window.open("cart.html", "_self");
}
