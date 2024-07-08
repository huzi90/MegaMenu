const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".main-menu");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = document.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", function (e) {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-child")) {
    const hasChild = e.target.closest(".menu-item-has-child");
    showSubMenu(hasChild);
  }
});
goBack.addEventListener("click", function () {
  hideSubmenu();
});
menuTrigger.addEventListener("click", function () {
  toggleNav();
});
closeMenu.addEventListener("click", function () {
  toggleNav();
});
document.querySelector(".menu-overlay").addEventListener("click", function () {
  toggleNav();
});

function showSubMenu(hasChild) {
  subMenu = hasChild.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = " slideleft 0.3s ease forwards ";
  menuTittle = hasChild.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-tittle").innerHTML = menuTittle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}
function hideSubmenu() {
  subMenu.style.animation = " slideright 0.3s ease forwards ";
  setTimeout(function () {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-tittle").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}
function toggleNav() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleNav();
    }
  }
};
