let MenuItems = document.getElementById("MenuItems");
let Tag = document.getElementById("Tag");

MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "250px";
    Tag.style.marginTop = "160px";
    Tag.style.transition = "0.5s";
  } else {
    MenuItems.style.maxHeight = "0px";
    Tag.style.marginTop = "70px";
  }
}
