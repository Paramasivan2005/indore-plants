// Toggle Button

const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamBurger = document.getElementById("hamburger");

hamBurger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]")
  hamBurger.classList.toggle('ri-close-large-line')
})

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamBurger.classList.toggle('ri-close-line')
  })
})

// Swiper js

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// scroll up button js

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up")

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2")
    scrollUpBtn.classList.add("bottom-4")
  } else {
    scrollUpBtn.classList.add("-bottom-1/2")
    scrollUpBtn.classList.remove("bottom-4")
  }
}
window.addEventListener("scroll", scrollUp)

// navbar border change after scrolling

const scrollHeader = () => {
  const scrollHeaderBtn = document.getElementById("navbar")

  if (this.scrollY >= 50) {
    scrollHeaderBtn.classList.add("border-b", "border-yellow-500")
  } else {
    scrollHeaderBtn.classList.remove("border-b", "border-yellow-500")
  }
}
window.addEventListener("scroll", scrollHeader)

// scroll reveal js

const scrollAni = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true
})

scrollAni.reveal(".home_data, .about__top, .popular_top, .reviews_top, .footer_content, .copyright_top, .floral_top")
scrollAni.reveal(".home_img, .footer_pop", { delay: 500, scale: 0.5 })
scrollAni.reveal(".service_cards, .popular_cards", { interval: 100 })
scrollAni.reveal(".swiper_content", { interval: 200, origin: "left" })
scrollAni.reveal(".about_img_1, .about_content_2", { delay: 500, origin: "left" })
scrollAni.reveal(".about_content_1, .about_img_2", { delay: 500, origin: "right" })
scrollAni.reveal(".floral_bottom", { delay: 100, origin: "bottom" })
scrollAni.reveal(".review__img", { delay: 1000, origin: "left" })
scrollAni.reveal(".about__img", { delay: 1000, origin: "right" })