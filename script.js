const main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", () => {
  const categoriesContainer = document.getElementById("categoriesContainer");
  const categoryMenu = document.getElementById("categoryMenu");
  const categoryList = document.getElementById("categoryList");
  const toggleMenu = document.getElementById("toggleMenu");
  const closeMenu = document.getElementById("closeMenu");
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  // Show/Hide sidebar
  toggleMenu.addEventListener("click", () => {
    categoryMenu.classList.remove("hidden");
  });

  closeMenu.addEventListener("click", () => {
    categoryMenu.classList.add("hidden");
  });






