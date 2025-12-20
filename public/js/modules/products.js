const box = document.getElementById("products-container");
// const title = document.getElementById("title");

const params = new URLSearchParams(window.location.search);
const categorySlug = params.get("cat");

fetch(
  `https://api.aradpacking.com/v1/categories/${encodeURIComponent(
    categorySlug
  )}`
)
  .then((res) => res.json())
  .then((data) => {
    // title.innerText = data.name; // از API
    renderProducts(data.productList);
  });

function renderProducts(products) {
  box.innerHTML = "";

  products.forEach((p) => {
    // عکس محصول (الان خالیه → fallback)
    const img = p.images?.productCoverImage?.imagePath
      ? p.images.productCoverImage.imagePath
      : "../assets/images/placeholder.jpg";

    box.innerHTML += `
      <a href="product.html?slug=${encodeURIComponent(p.slug)}"
         class="product-card">

        <div class="image-box">
          <img src="${img}" alt="${p.name}">
        </div>

        <h3>دستگاه بسته بندی ${p.name}</h3>
      </a>
    `;
  });
}
