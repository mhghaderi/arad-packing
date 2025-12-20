const box = document.getElementById("products-container");
const title = document.getElementById("cat-name");

const params = new URLSearchParams(window.location.search);
const categorySlug = params.get("cat");

if (!categorySlug) {
  fetchAllProducts();
} else {
  fetchCategoryProducts(categorySlug);
}

/* ======================
All Products
====================== */
async function fetchAllProducts() {
  title.innerText = "همه محصولات";
  box.innerHTML = "در حال بارگذاری...";

  const res = await fetch("https://api.aradpacking.com/v1/products");
  const products = await res.json();

  renderProducts(products);
}

/* ======================
  Selected Category Products
====================== */
function fetchCategoryProducts(slug) {
  fetch(`https://api.aradpacking.com/v1/categories/${encodeURIComponent(slug)}`)
    .then((res) => res.json())
    .then((data) => {
      title.innerText = "دستگاه‌های بسته‌بندی " + data.name;
      renderProducts(data.productList);
    });
}

/* ======================
Cart Render
====================== */
function renderProducts(products) {
  box.innerHTML = "";

  products.forEach((p) => {
    const mainImg = p.images?.machineCoverImage?.imagePath
      ? "https://api.aradpacking.com/" + p.images.machineCoverImage.imagePath
      : "assets/images/placeholder.jpg";

    const hoverImg = p.images?.productCoverImage?.imagePath
      ? "https://api.aradpacking.com/" + p.images.productCoverImage.imagePath
      : mainImg;

    box.innerHTML += `
      <a href="product.html?slug=${encodeURIComponent(p.slug)}"
         class="product-card">

        <div class="image-box">
          <img src="${mainImg}" class="img-main" alt="${p.name}">
          <img src="${hoverImg}" class="img-hover" alt="${p.name}">
        </div>

        <h3>دستگاه بسته‌بندی ${p.name}</h3>
      </a>
    `;
  });
}
