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