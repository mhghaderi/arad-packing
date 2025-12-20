import productsData from "./data/products.js";

// ===============================
// DOM READY
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("js is loaded");

  // ===============================
  // Swiper Initialization
  // ===============================
  if (typeof Swiper !== "undefined") {
    if (document.querySelector(".main-slider")) {
      new Swiper(".main-slider", {
        loop: true,
        autoplay: { delay: 5000 },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }

    if (document.querySelector(".cat-slider")) {
      new Swiper(".cat-slider", {
        loop: true,
        freeMode: true,
        speed: 5000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 7 },
        },
      });
    }
  }

  // ===============================
  // PRODUCT SIZE IMAGE (SINGLE PRODUCT PAGE - product.html)
  // ===============================
  const sizeImage = document.querySelector(".product-size-image");
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (sizeImage && productId && productsData[productId]?.images?.size) {
    const product = productsData[productId];
    sizeImage.src = product.images.size;
    sizeImage.alt = `${product.title} - ابعاد محصول`;
    sizeImage.loading = "lazy";
    sizeImage.decoding = "async";
  }

  // ===============================
  // PRODUCT CARD THUMBNAILS (LIST PAGE)
  // ===============================
  document.querySelectorAll(".product-card").forEach((card) => {
    const id = card.dataset.product;
    const data = productsData[id];
    if (!data) return;

    const thumb = card.querySelector(".product-thumb");
    if (!thumb) return;

    thumb.src = data.images.thumbnails?.default || data.images.imagePath1;
    thumb.alt = data.name || data.title;
    thumb.loading = "lazy";
    thumb.decoding = "async";

    card.addEventListener("mouseenter", () => {
      if (data.images.thumbnails?.hover) {
        thumb.src = data.images.thumbnails.hover;
      }
    });

    card.addEventListener("mouseleave", () => {
      thumb.src = data.images.thumbnails?.default || data.images.imagePath1;
    });

    card.addEventListener("click", () => {
      window.location.href = `product.html?id=${id}`;
    });
  });

  // ===============================
  // PRODUCTS LIST PAGE (DYNAMIC CREATION)
  // ===============================
  // const productsContainer = document.getElementById("products-container");

  // if (productsContainer) {
  //   const productsArray = Object.values(productsData);

  //   productsArray.forEach((product) => {
  //     const card = document.createElement("div");
  //     card.className = "product-card cursor-pointer";

  //     card.innerHTML = `
  //       <div class="bg-white shadow-md hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
  //         <img
  //           src="${product.images.imagePath1}"
  //           alt="${product.name}"
  //           class="w-full h-48 object-cover product-thumb"
  //         />
  //         <div class="p-4 flex-1">
  //           <h2 class="font-IRANSansWeb_Bold text-lg mb-2">
  //             ${product.name}
  //           </h2>
  //           <p class="text-sm text-stone-600">
  //             ${product.description.slice(0, 100)}...
  //           </p>
  //         </div>
  //         <div class="p-4 text-xs flex items-center justify-between border-t border-dashed">
  //           <span>${product.category}</span>
  //           <span class="text-yellow-600">مشاهده بیشتر</span>
  //         </div>
  //       </div>
  //     `;

  //     card.addEventListener("click", () => {
  //       window.location.href = `product.html?id=${product.id || product.slug}`;
  //     });

  //     productsContainer.appendChild(card);
  //   });
  // }

  //   const categoriesBox = document.getElementById("products-container");

  // const fetchCategories = async () => {
  //   const res = await fetch("https://api.aradpacking.com/v1/categories");
  //   const data = await res.json();
  //   return data;
  // };

  // const renderCategories = (categories) => {
  //   categoriesBox.innerHTML = "";

  //   categories.forEach(cat => {
  //     categoriesBox.innerHTML += `
  //       <a href="products.html?category=${encodeURIComponent(cat.slug)}"
  //          class="category-card">
  //         ${cat.title}
  //       </a>
  //     `;
  //   });
  // };

  // const init = async () => {
  //   const categories = await fetchCategories();
  //   renderCategories(categories);
  // };

  // init();

  // fetch("https://api.aradpacking.com/v1/categories")
  //   .then((res) => res.json())
  //   .then((categories) => {
  //     const box = document.getElementById("products-container");

  //     categories.forEach((cat) => {
  //       box.innerHTML += `
  //       <a href="products.html?cat=${encodeURIComponent(cat.slug)}">
  //         ${cat.name}
  //       </a>
  //     `;
  //     });
  //   });

  // ===============================
  // SINGLE PRODUCT PAGE (single-product.html با slug)
  // ===============================
  const specsContainer = document.getElementById("product-specs");

  if (specsContainer) {
    const slug = params.get("slug");

    if (slug) {
      const product = Object.values(productsData).find(
        (item) => item.slug === slug
      );

      if (!product) {
        document.body.innerHTML = "محصول مورد نظر یافت نشد";
        return;
      }

      // Specs
      const specs = [
        product.name,
        product.category,
        product.space?.speed,
        product.space?.powerConsumption,
        product.space?.workingVoltage,
        product.space?.weight,
      ].filter(Boolean); // حذف مقادیر undefined

      specs.forEach((value) => {
        const row = document.createElement("div");
        row.className = "bg-stone-100 flex items-center";

        row.innerHTML = `
          <div class="bg-yellow-500 p-2 w-10 text-center">✔</div>
          <div class="mr-2">${value}</div>
        `;

        specsContainer.appendChild(row);
      });

      // Description
      const desc = document.getElementById("product-description");
      if (desc) {
        desc.textContent = product.description;
      }

      // Images
      const gallery = document.getElementById("product-gallery");
      if (gallery) {
        Object.values(product.images || {}).forEach((src) => {
          if (typeof src === "string") {
            const img = document.createElement("img");
            img.src = src;
            img.className = "w-full rounded-lg mb-4";
            gallery.appendChild(img);
          }
        });
      }

      // Video
      const video = document.getElementById("product-video");
      if (video && product.videos) {
        video.src = Object.values(product.videos)[0];
      }
    }
  }
});

// ===============================
// MOBILE DROPDOWN
// ===============================
window.toggleMobileDropdown = function (el) {
  const parentLi = el.closest("li");
  const submenu = parentLi.querySelector(".mobile-submenu");
  const arrow = el.querySelector(".mobile-arrow");

  if (!submenu) return;

  submenu.classList.toggle("hidden");
  arrow?.classList.toggle("rotate-180");
};

//==============================
// const params = new URLSearchParams(window.location.search);
// const categorySlug = params.get("cat");
// fetch(
//   `https://api.aradpacking.com/v1/categories/${encodeURIComponent(
//     categorySlug
//   )}`
// )
//   .then((res) => res.json())
//   .then((data) => {
//     document.getElementById("title").innerText = data.category.title;

//     const box = document.getElementById("products-container");

//     data.products.forEach((p) => {
//       box.innerHTML += `
//         <div>
//           <h3>${p.title}</h3>
//         </div>
//       `;
//     });
//   });
