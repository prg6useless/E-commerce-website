let personalInfo = document.getElementById("pi-details");
let accountInfo = document.getElementById("ai-details");
let editAccount = document.getElementById("ea-details");
let deleteAccount = document.getElementById("da-details");
let divbtns = document.getElementsByClassName("acc-details");

personalInfo.innerHTML = `<p><strong>Name : </strong></p>Saral Sainju
<p><strong>Email : </strong></p>saral@gmail.com
<p><strong>Password :</strong><br>******</p>
<p><strong>Phone No. : </strong></p>548-8961-5689`;

accountInfo.innerHTML = `<p><strong>Delivery Address : </strong></p>Pokhara St-13
<p><strong>Payment Cards : </strong></p>Paypal,VisaCard
<p><strong>Purchases : </strong></p>None`;

editAccount.innerHTML = `<p><strong>Name : </strong></p><input type="text" />
<p><strong>Email : </strong></p><input type="text" />
<p><strong>Password :</strong></p><input type="text" />
<p><strong>Phone No. : </strong></p><input type="text" /><br>
<button class="change-btn">Change</button>`;

deleteAccount.innerHTML = `<p style="text-align:center; color:rgb(216, 31, 18);"><strong>Deleting an account</strong></p>
<p style="padding:20px">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    <br>
    Tenetur, saepe dicta est ducimus ipsum nam quos impedit <br>
    laboriosam animi cupiditate, accusantium corporis aliquid <br>
    quasi? Harum corrupti repellendus ratione aut veniam?
</p>
<a href="#" class="change-btn delete-btn">Delete Account</a>`;

accountInfo.style.display = "none";
editAccount.style.display = "none";
deleteAccount.style.display = "none";

divbtns[0].addEventListener("click", openDiv0);
function openDiv0() {
  personalInfo.style.display = "block";
  accountInfo.style.display = "none";
  editAccount.style.display = "none";
  deleteAccount.style.display = "none";
}

divbtns[1].addEventListener("click", openDiv1);
function openDiv1() {
  personalInfo.style.display = "none";
  accountInfo.style.display = "block";
  editAccount.style.display = "none";
  deleteAccount.style.display = "none";
}
divbtns[2].addEventListener("click", openDiv2);
function openDiv2() {
  personalInfo.style.display = "none";
  accountInfo.style.display = "none";
  editAccount.style.display = "block";
  deleteAccount.style.display = "none";
}
divbtns[3].addEventListener("click", openDiv3);
function openDiv3() {
  personalInfo.style.display = "none";
  accountInfo.style.display = "none";
  editAccount.style.display = "none";
  deleteAccount.style.display = "block";
}
