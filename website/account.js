import accdetails from "../data/accountdetail.json" assert { type: "json" };

const details1 = document.createElement("p");
const details2 = document.createElement("p");
const details3 = document.createElement("p");
const details4 = document.createElement("p");
const details5 = document.createElement("p");
const details6 = document.createElement("p");
const details7 = document.createElement("p");
const details8 = document.createElement("p");
const details9 = document.createElement("p");
const node1 = document.createTextNode(accdetails.name);
const node2 = document.createTextNode(accdetails.email);
const node3 = document.createTextNode(accdetails["phone No"]);
const node4 = document.createTextNode(accdetails.deliveryadd);
const node5 = document.createTextNode(accdetails.paycards);
const node6 = document.createTextNode(accdetails.purchases);
const node7 = document.createTextNode(accdetails.name);
const node8 = document.createTextNode(accdetails.email);
const node9 = document.createTextNode(accdetails["phone No"]);
details1.appendChild(node1);
details2.appendChild(node2);
details3.appendChild(node3);
details4.appendChild(node4);
details5.appendChild(node5);
details6.appendChild(node6);
details7.appendChild(node7);
details8.appendChild(node8);
details9.appendChild(node9);

const element = document.getElementsByTagName("p");
element[0].appendChild(details1);
element[2].appendChild(details2);
element[5].appendChild(details3);

element[7].appendChild(details4);
element[9].appendChild(details5);
element[11].appendChild(details6);

element[13].appendChild(details7);
element[15].appendChild(details8);
element[18].appendChild(details9);

const ad = document.getElementsByClassName("acc-details");
const piDetails = document.getElementsByClassName("pi-details");
const aiDetails = document.getElementsByClassName("ai-details");
const eaDetails = document.getElementsByClassName("ea-details");
const daDetails = document.getElementsByClassName("da-details");

console.log(ad[0]);

eaDetails[0].style.display = "none";
daDetails[0].style.display = "none";
aiDetails[0].style.display = "none";

ad[0].addEventListener("click", () => {
  piDetails[0].style.display = "block";
  eaDetails[0].style.display = "none";
  daDetails[0].style.display = "none";
  aiDetails[0].style.display = "none";
});

ad[1].addEventListener("click", () => {
  piDetails[0].style.display = "none";
  eaDetails[0].style.display = "none";
  daDetails[0].style.display = "none";
  aiDetails[0].style.display = "block";
});

ad[2].addEventListener("click", () => {
  piDetails[0].style.display = "none";
  eaDetails[0].style.display = "block";
  daDetails[0].style.display = "none";
  aiDetails[0].style.display = "none";
});

ad[3].addEventListener("click", () => {
  piDetails[0].style.display = "none";
  eaDetails[0].style.display = "none";
  daDetails[0].style.display = "block";
  aiDetails[0].style.display = "none";
});
