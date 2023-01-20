import cartdata from "../data/cart.json" assert { type: "json" };

// console.log(cartdata);

//add data to json
// let obj = JSON.stringify(cartdata);
// cartdata.name[2] = "saral";
// cartdata.img[2] = "../images/cutegirl.png";
// cartdata.price[2] = "$450";

let tablerowitem = document.getElementsByClassName("cart-table");
let htmlElements = "";

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
let btnclk = document.getElementsByClassName("btn-click");
let qValue = document.getElementsByClassName("q-value");

let num = document.querySelectorAll(".order-value");
console.log(num.value);
let val;
for (let k = 0; k < cartdata.name.length; k++) {
  val = parseFloat(num[k].value);
  num[k].addEventListener("input", function () {
    val = parseFloat(num[k].value);
  });
}

let subtotalValue = document.getElementsByClassName("sub-total");

for (let j = 0; j < cartdata.name.length; j++)
  btnclk[j].onclick = () => {
    qValue[j].innerHTML = val;
    subtotalValue[j].innerHTML = "$" + parseFloat(cartdata.price[j]) * val;
  };
