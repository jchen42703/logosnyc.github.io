var menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", (e) => {
  document.querySelector(".nav").classList.toggle("mobile-nav");
  menuToggle.classList.toggle("is-active");
});
