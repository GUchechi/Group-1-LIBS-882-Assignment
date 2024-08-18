let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");
let navLinks = document.querySelectorAll(".header .navbar a");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// Close navbar when a link is clicked
navLinks.forEach((link) => {
  link.onclick = () => {
    navbar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
  };
});

// Close navbar when clicking outside on smaller screens
window.onclick = (event) => {
  if (
    !event.target.matches(".fa-bars") &&
    navbar.classList.contains("active")
  ) {
    navbar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
  }
};
