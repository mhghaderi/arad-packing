function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug");
}

async function loadProductDetails() {
  const slug = getSlug();

  if (!slug) {
    document.querySelector(".bg-white").innerHTML =
      '<p class="text-center p-10 text-red-600">لطفاً محصول را از لیست انتخاب کنید.</p>';
    return;
  }

  try {
    const response = await fetch(
      `https://api.aradpacking.com/v1/products/${slug}`
    );
    if (!response.ok) throw new Error("محصول یافت نشد");

    const data = await response.json();

    const product = data;

    document.querySelector(".font-IRANSansWeb_Bold").textContent =
      product.name || "محصول";

    const descElement = document.querySelector(".leading-8 p");
    if (product.description && product.description.trim() !== "") {
      descElement.textContent = product.description;
    } else {
      descElement.textContent = "توضیحاتی برای این محصول ثبت نشده است.";
    }

    const specsContainer = document.querySelector(".flex.flex-col.gap-2");
    specsContainer.innerHTML = "";
    if (product.machine && product.machine.specs) {
      const specs = product.machine.specs;
      const specItems = [
        { key: "عرض بسته (A)", value: specs.packWidth_A },
        { key: "طول بسته (B)", value: specs.packLength_B },
        { key: "ارتفاع بسته (C)", value: specs.packHeight_C },
        { key: "وزن دستگاه", value: specs.weight },
        { key: "ولتاژ کاری", value: specs.workingVoltage },
        { key: "مصرف برق", value: specs.powerConsumption },
      ];

      specItems.forEach((item) => {
        if (item.value) {
          const div = document.createElement("div");
          div.className = "bg-stone-100 flex items-center";
          div.innerHTML = `
              <div class="bg-yellow-500 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div class="mr-2">${item.key}: ${item.value}</div>
            `;
          specsContainer.appendChild(div);
        }
      });

      if (product.machine.name) {
        const machineDiv = document.createElement("div");
        machineDiv.className = "bg-stone-100 flex items-center";
        machineDiv.innerHTML = `
            <div class="bg-yellow-500 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <div class="mr-2">ماشین مناسب: ${product.machine.name}</div>
          `;
        specsContainer.appendChild(machineDiv);
      }
    } else {
      specsContainer.innerHTML =
        '<div class="bg-stone-100 p-4 text-center">مشخصات فنی موجود نیست</div>';
    }

    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = "";

    const allImages = [];

    if (product.images && product.images.length > 0) {
      product.images.forEach((img) => {
        allImages.push(`https://api.aradpacking.com/${img.imagePath}`);
      });
    }

    if (product.machine && product.machine.images) {
      product.machine.images.forEach((img) => {
        if (!img.isShematicImage) {
          allImages.push(`https://api.aradpacking.com/${img.imagePath}`);
        }
      });
    }

    if (allImages.length > 0) {
      allImages.forEach((src) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `<img class="object-cover w-full h-full" src="${src}" alt="${product.name}" />`;
        swiperWrapper.appendChild(slide);
      });
    } else {
      swiperWrapper.innerHTML =
        '<div class="swiper-slide"><img class="object-cover w-full h-full" src="../assets/images/placeholder.jpg" alt="محصول" /></div>';
    }

    if (typeof Swiper !== "undefined") {
      new Swiper(".pr-slider", {
        loop: allImages.length > 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: allImages.length > 1 ? { delay: 5000 } : false,
      });
    }
  } catch (error) {
    console.error(error);
    document.querySelector(".bg-white").innerHTML =
      '<p class="text-center p-10 text-red-600">خطا در بارگذاری محصول. لطفاً دوباره امتحان کنید.</p>';
  }
}

document.addEventListener("DOMContentLoaded", loadProductDetails);
