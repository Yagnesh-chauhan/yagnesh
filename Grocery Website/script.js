let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart'); 
let loginForm = document.querySelector('.login-form');

// Toggle Search
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
};

// Toggle Cart
document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
};

// Toggle Login
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
};

// Remove all on scroll
window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
};

// Swiper Slider
var swiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1010: {
      slidesPerView: 3,
    },
  },
});

