const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
link.addEventListener("click", () =>  menuOpenButton.click())
})
// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 25,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive braekpoints
  braekpoints: {
    0: {
      slidePerView: 1,
    },
    768: {
      slidePerView: 2,
    },
    1024: {
      slidePerView: 3,
    }
  }
});
