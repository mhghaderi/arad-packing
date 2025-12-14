// import productsData from "./data/products.js";
// const allProducts = productsData;

// منتظر لود کامل DOM
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing scripts...");

  // ===================
  // Swiper Initialization
  // ===================
  if (typeof Swiper !== "undefined") {
    // Main Slider
    if (document.querySelector(".main-slider")) {
      new Swiper(".main-slider", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
          delay: 5000,
        },
      });
      console.log("Main slider initialized");
    }

    // Category Slider
    if (document.querySelector(".cat-slider")) {
      new Swiper(".cat-slider", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
        speed: 5000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          1024: { slidesPerView: 7, spaceBetween: 15 },
        },
      });
      console.log("Category slider initialized");
    }

    // بقیه Swiperها...
  } else {
    console.error("Swiper library is not loaded!");
  }

  // ===================
  // Typed.js Initialization
  // ===================


  // ===================
  // Product Cards Generation
  // ===================
  const container = document.getElementById("products-container");
  if (container && window.allProducts) {
    // کد تولید کارت محصولات
    window.allProducts.forEach((product, index) => {
      // ...
    });
    console.log("Product cards generated");
  }

  // ===================
  // Mobile Menu Function
  // ===================
  window.toggleMobileDropdown = function (el) {
    const parentLi = el.closest("li");
    const submenu = parentLi.querySelector(".mobile-submenu");
    const arrow = el.querySelector(".mobile-arrow");

    if (!submenu) return;

    submenu.classList.toggle("hidden");

    if (arrow) {
      arrow.classList.toggle("rotate-180");
    }
  };
});

window.toggleMobileDropdown = toggleMobileDropdown;

// ===================
// Product Cards Generation Start
// ===================
const container = document.getElementById("products-container");

allProducts.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.model = product.name;

  card.innerHTML = `
       <div class="bg-white transform hover:-translate-y-1 duration-300 transition-transform shadow-md">
              <div>
                  <a href="#"><img src="../assets/images/product-image/PM50/cover.jpeg" alt="aaaaa"></a>
              
              </div>
              <div class="p-4 leading-8">
                  <h2 class="font-IRANSansWeb_Bold"><a href="single-page.html">${
                    allProducts[index].name
                  }</a></h2>
                  <p>${allProducts[index].description.slice(0, 110)}..</p>
              </div>
              <div class="p-4 text-xs flex items-center justify-between border-t border-dashed">
                  <div class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                        
                      <span class="mr-1"><a href="blog.html">${
                        allProducts[index].category
                      }</a></span>                                  
                  </div>
                  
                                                        
                  <div class="mr-1"><a href="single-page.html">مشاهده بیشتر</a></div>                                  
                  
              </div>
          </div>
    `;

  card.addEventListener("click", () => {
    window.location.href = `single-product.html?model=${product.name}`;
  });

  container.appendChild(card);
});
// ===================
// Product Cards Generation Start
// ===================

// ===================
// Mobile  Dropdown Menu Start
// ===================
function toggleMobileDropdown(element) {
  const submenu = element.nextElementSibling;

  const arrow = element.querySelector(".mobile-arrow");

  submenu.classList.toggle("open");

  arrow.classList.toggle("rotate-180");
}
// ===================
// Mobile  Dropdown Menu End
// ===================
function toggleMobileDropdown(el) {
  const parentLi = el.closest("li");
  const submenu = parentLi.querySelector(".mobile-submenu");
  const arrow = el.querySelector(".mobile-arrow");

  if (!submenu) return;

  submenu.classList.toggle("hidden");

  if (arrow) {
    arrow.classList.toggle("rotate-180");
  }
}
