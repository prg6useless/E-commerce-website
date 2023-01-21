import cartdata from "../data/cart.json" assert { type: "json" };

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

for (let i = 0; i < cartdata[0].name.length; i++) {
  htmlElements += `<tr>
  <td>
    <div class="cart-info">
        <img src=${cartdata[0].img[i]} alt="logo">
        <div>
            <p>${cartdata[0].name[i]}</p>
            <small>$${cartdata[0].price[i]}</small><br>
            <a href="">${cartdata[0].link}</a>
        </div>
    </div>
    </td>
    <td>
    <input type="number" class="order-value" value="1" min="1">
    <button class="btn-click">Ok</button>
    </td>
    <td class="q-value">1</td>
    <td class="sub-total">$${cartdata[0].price[i]}</td></tr>
`;
}

tablerowitem[0].innerHTML = htmlElements;
let subtotal = 0;

for (let k = 0; k < cartdata[0].name.length; k++) {
  subtotal += parseFloat(cartdata[0].price[k]);
}

let btnclk = document.getElementsByClassName("btn-click");
let qValue = document.getElementsByClassName("q-value");

let num = document.querySelectorAll(".order-value");

let val;

for (let k = 0; k < cartdata[0].name.length; k++) {
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

for (let i = 0; i < cartdata[1].title.length; i++) {
  htmlElements2 += `<tr>
  <td>${cartdata[1].title[i]}</td>
  <td class="price">$${subtotal}</td>
</tr>
  `;
}
totaltable[0].innerHTML = htmlElements2;

totalValue[0].innerHTML = "$" + subtotal;
totalValue[1].innerHTML = "$" + (0.02 * subtotal).toFixed(2);
totalValue[2].innerHTML = "$" + (subtotal + 0.02 * subtotal).toFixed(2);

let tot = 0;
for (let j = 0; j < cartdata[0].name.length; j++) {
  btnclk[j].onclick = () => {
    qValue[j].innerHTML = val;
    //to calcutate total

    tot = tot + parseFloat(cartdata[0].price[j]).toFixed(2) * (val - 1);

    subtotalValue[j].innerHTML =
      "$" + parseFloat(cartdata[0].price[j]).toFixed(2) * val;
    totalValue[0].innerHTML = "$" + (subtotal + tot).toFixed(2);
    totalValue[1].innerHTML = "$" + (0.02 * (subtotal + tot)).toFixed(2);
    totalValue[2].innerHTML =
      "$" + (subtotal + tot + 0.02 * (subtotal + tot)).toFixed(2);
  };
}
//   totalValue[0].innerHTML = parseFloat(cartdata[0].price[i]) * val;
