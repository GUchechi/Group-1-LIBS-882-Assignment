let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.scroll = () => {
  menuBtn.classList.remove("fa-times");
  menuBtn.classList.remove("active");
};

