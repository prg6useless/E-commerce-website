let personalInfo = document.getElementById("pi-details");
let accountInfo = document.getElementById("ai-details");
let editAccount = document.getElementById("ea-details");
let deleteAccount = document.getElementById("da-details");
let divbtns = document.getElementsByClassName("acc-details");

console.log(personalInfo);
console.log(accountInfo);
console.log(editAccount);
console.log(deleteAccount);

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
