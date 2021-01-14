var menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links-container");
const items = document.querySelectorAll(".nav-item");

menuToggle.addEventListener("click", (e) => {
  document.querySelector(".nav-links-container").classList.toggle("mobile-nav");
  menuToggle.classList.toggle("is-active");
});

function toggleDrop() {
  if (this.classList.contains("drop-active")) {
    this.classList.remove("drop-active");
  } else if (menu.querySelector(".drop-active")) {
    menu.querySelector(".drop-active").classList.remove("drop-active");
    this.classList.add("drop-active");
  } else {
    this.classList.add("drop-active");
  }
}

// tablet -> 768px (in _general.scss)
if (document.documentElement.clientWidth < 768) {
  for (let item of items) {
    if (item.querySelector(".drop")) {
      item.addEventListener("click", toggleDrop, false);
    }
  }
}
