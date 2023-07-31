let cartItems = localStorage.getItem("cartdata");
cartItems = JSON.parse(cartItems);

let tablerowitem = document.getElementsByClassName("cart-table");
let grandTotal = document.getElementById("grandTotalTable");
let htmlElements = "";


for (let i = 0; i < cartItems.length; i++) {
  htmlElements += `
  
  <tr id="${cartItems[i].productid}" class="product-row">
  <td>
    <div class="cart-info" >
        <img src=${cartItems[i].productimg} alt="logo" class="pro-img">
        <div>
            <p>${cartItems[i].productname}</p>
            <small>$${cartItems[i].productprice}</small><br>
        </div>
    </div>
    </td>
    <td class="product-quantity">
    <input type="number" class="order-value" value="${cartItems[i].productamt}" min="1">
    <button class="btn-click setAmt_btn" >Ok</button>
    </td>
    <td class="q-value">${cartItems[i].productamt}</td>
    <td class="sub-total">$${cartItems[i].producttotal}</td>
    <td><button class="remove_cart_btn">Remove</button></td></tr>
`;
}

tablerowitem[0].innerHTML = htmlElements;

let orderQuantity = document.getElementsByClassName("setAmt_btn");
let parentElement = [];
let cartqty = [];
let cartsubtotal = [];
let productid = [];

for (let i = 0; i < orderQuantity.length; i++) {
  parentElement[i] = orderQuantity[i].parentElement.parentElement;
  productid[i] = parentElement[i].id;
  cartqty[i] = parentElement[i].children[2];
  cartsubtotal[i] = parentElement[i].children[3];
}

let Total = 0;
for (let i = 0; i < cartItems.length; i++) {
  Total += cartItems[i].producttotal;
}
let VAT = 0.13 * Total;
let deliveryCharge = 0.02 * Total;
let GrandTotal = Total + VAT;

grandTotal.innerHTML = `<tr>
<td></td>
<td>Total</td>
<td id="order_Total">$${Total}</td>
</tr>
<tr>
<td></td>
<td>Delivery Charge 2%</td>
<td id="del-charge">$${deliveryCharge.toFixed(2)}</td>
</tr>
<tr>
<td></td>
<td>VAT 13%</td>
<td id="vat">$${VAT.toFixed(2)}</td>
</tr>
<tr>
<td></td>
<td style="font-weight :bold">Grand Total</td>
<td id="g-total" style="font-weight :bold">$${GrandTotal.toFixed(2)}</td>
</tr>
`;

let orderTotal = document.getElementById("order_Total");
let delCharge = document.getElementById("del-charge");
let vat = document.getElementById("vat");
let gtotal = document.getElementById("g-total");

for (let i = 0; i < orderQuantity.length; i++) {
  orderQuantity[i].addEventListener("click", () => {
    let value = parentElement[i].children[1].children[0].value;

    //update the cartdata

    for (let j = 0; j < cartItems.length; j++) {
      if (cartItems[j].productid == productid[i]) {
        cartItems[j].productamt = value;
        cartItems[j].producttotal = value * cartItems[j].productprice;
      }
      localStorage.setItem("cartdata", JSON.stringify(cartItems));
    }

    //get the updated cartdata
    cartItems = localStorage.getItem("cartdata");
    cartItems = JSON.parse(cartItems);
    Total = 0;
    deliveryCharge = 0;
    VAT = 0;
    GrandTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      Total += cartItems[i].producttotal;
      deliveryCharge = 0.02 * Total;
      VAT = 0.13 * Total;
      GrandTotal = Total + VAT + deliveryCharge;
      delCharge.innerHTML = `$${deliveryCharge.toFixed(2)}`;
      orderTotal.innerHTML = `$${Total}`;
      vat.innerHTML = `$${VAT.toFixed(2)}`;
      gtotal.innerHTML = `$${GrandTotal.toFixed(2)}`;
    }

    cartqty[i].innerHTML = value;
    cartsubtotal[i].innerHTML = `$${value * cartItems[i].productprice}`;
  });
}

let removeCartBtn = document.getElementsByClassName("remove_cart_btn");
let cartTitle = document.getElementById("cart_title");

if (cartItems.length == 0) {
  cartTitle.innerHTML = "Your Cart is Empty";
}

else {
  cartTitle.innerHTML = "Your Cart";
}

for (let i = 0; i < removeCartBtn.length; i++) {
  removeCartBtn[i].addEventListener("click", () => {
    let value = parentElement[i].children[1].children[0].value;

    //remove the item from cartdata
    if (cartItems[i].productid == productid[i]) {
      parentElement[i].remove();
      cartItems.splice(i, 1);
      localStorage.setItem("cartdata", JSON.stringify(cartItems));
    }
    //get the updated cartdata
    cartItems = localStorage.getItem("cartdata");
    cartItems = JSON.parse(cartItems);
    Total = 0;
    deliveryCharge = 0;
    VAT = 0;
    GrandTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      Total += cartItems[i].producttotal;
      deliveryCharge = 0.02 * Total;
      VAT = 0.13 * Total;
      GrandTotal = Total + VAT + deliveryCharge;
      delCharge.innerHTML = `$${deliveryCharge.toFixed(2)}`;
      orderTotal.innerHTML = `$${Total}`;
      vat.innerHTML = `$${VAT.toFixed(2)}`;
      gtotal.innerHTML = `$${GrandTotal.toFixed(2)}`;
    }

    cartqty[i].innerHTML = value;
    // cartsubtotal[i].innerHTML = `$${value * cartItems[i].productprice}`;

    if (cartItems.length == 0) {
      grandTotal.innerHTML = `<tr>
      <td></td>
      <td>Total</td>
      <td id="order_Total">$${Total}</td>
      </tr>
      <tr>
      <td></td>
      <td>Delivery Charge 2%</td>
      <td id="del-charge">$${deliveryCharge.toFixed(2)}</td>
      </tr>
      <tr>
      <td></td>
      <td>VAT 13%</td>
      <td id="vat">$${VAT.toFixed(2)}</td>
      </tr>
      <tr>
      <td></td>
      <td style="font-weight :bold">Grand Total</td>
      <td id="g-total" style="font-weight :bold">$${GrandTotal.toFixed(
        2
      )}</td>
      </tr>
      `;

      cartTitle.innerHTML = "Your Cart is Empty";
    }
  });
}


let checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", () => {
  if (cartItems.length == 0) {
    alert("Your Cart is Empty");
  }
  else {
    alert("Please Login or Sign Up to Checkout")
    window.location.href = "login.html";
  }
});