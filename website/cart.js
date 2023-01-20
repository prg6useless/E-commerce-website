import cartdata from "../data/cart.json" assert { type: "json" };
import carttotaldata from "../data/totalprice.json" assert { type: "json" };

// console.log(cartdata);

//add data to json
// let obj = JSON.stringify(cartdata);
// cartdata.name[2] = "saral";
// cartdata.img[2] = "../images/cutegirl.png";
// cartdata.price[2] = "$450";

let tablerowitem = document.getElementsByClassName("cart-table");
let totaltable = document.getElementsByClassName("total-table");
let htmlElements = "";
let htmlElements2 = "";

for (let i = 0; i < cartdata.name.length; i++) {
  htmlElements += `<tr>
  <td>
    <div class="cart-info">
        <img src=${cartdata.img[i]} alt="logo">
        <div>
            <p>${cartdata.name[i]}</p>
            <small>$${cartdata.price[i]}</small><br>
            <a href="">${cartdata.link}</a>
        </div>
    </div>
    </td>
    <td>
    <input type="number" class="order-value" value="1" min="1">
    <button class="btn-click">Ok</button>
    </td>
    <td class="q-value">1</td>
    <td class="sub-total">$${cartdata.price[i]}</td></tr>
`;
}

tablerowitem[0].innerHTML = htmlElements;
let subtotal = 0;

for (let k = 0; k < cartdata.name.length; k++) {
  subtotal += parseFloat(cartdata.price[k]);
}

let btnclk = document.getElementsByClassName("btn-click");
let qValue = document.getElementsByClassName("q-value");

let num = document.querySelectorAll(".order-value");

let val;

for (let k = 0; k < cartdata.name.length; k++) {
  val = parseFloat(num[k].value);
  num[k].addEventListener("input", function () {
    val = parseFloat(num[k].value);
  });
}
//disabled button until value is changed
btnclk.disabled = true;

function stateHandle() {
  if (parseFloat(num[0].value) == "val") {
    btnclk.disabled = true; //button remains disabled
  } else {
    btnclk.disabled = false; //button is enabled
  }
}

let subtotalValue = document.getElementsByClassName("sub-total");

let totalValue = document.getElementsByClassName("price");

for (let i = 0; i < carttotaldata.title.length; i++) {
  htmlElements2 += `<tr>
  <td>${carttotaldata.title[i]}</td>
  <td class="price">$${subtotal}</td>
</tr>
  `;
}
totaltable[0].innerHTML = htmlElements2;

totalValue[0].innerHTML = "$" + subtotal;
totalValue[1].innerHTML = "$" + (0.02 * subtotal).toFixed(2);
totalValue[2].innerHTML = "$" + (subtotal + 0.02 * subtotal).toFixed(2);

let tot = 0;
for (let j = 0; j < cartdata.name.length; j++) {
  btnclk[j].onclick = () => {
    qValue[j].innerHTML = val;
    //to calcutate total

    tot = tot + parseFloat(cartdata.price[j]).toFixed(2) * (val - 1);

    subtotalValue[j].innerHTML =
      "$" + parseFloat(cartdata.price[j]).toFixed(2) * val;
    totalValue[0].innerHTML = "$" + (subtotal + tot).toFixed(2);
    totalValue[1].innerHTML = "$" + (0.02 * (subtotal + tot)).toFixed(2);
    totalValue[2].innerHTML =
      "$" + (subtotal + tot + 0.02 * (subtotal + tot)).toFixed(2);
  };
}
//   totalValue[0].innerHTML = parseFloat(cartdata.price[i]) * val;
