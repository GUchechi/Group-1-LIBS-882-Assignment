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

// account form
let accountForm = document.querySelector(".account-form");

document.querySelector("#account-btn").onclick = () => {
  accountForm.classList.add("active");
};

document.querySelector("#close-form").onclick = () => {
  accountForm.classList.remove("active");
};

let registerbtn = document.querySelector(".account-form .register-btn");
let loginbtn = document.querySelector(".account-form .login-btn");

registerbtn.onclick = () => {
  registerbtn.classList.add("active");
  loginbtn.classList.remove("active");
  document
    .querySelector(".account-form .login-form")
    .classList.remove("active");
  document
    .querySelector(".account-form .register-form")
    .classList.add("active");
};

loginbtn.onclick = () => {
  registerbtn.classList.remove("active");
  loginbtn.classList.add("active");
  document.querySelector(".account-form .login-form").classList.add("active");
  document
    .querySelector(".account-form .register-form")
    .classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  autoplay: {
    delay: 7500,
    disableInteraction: false,
  },
  grabCusor: true,
  loop: true,
});

var swiper = new Swiper(".team-slider", {
  autoplay: {
    delay: 7500,
    disableInteraction: false,
  },
  grabCusor: true,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
