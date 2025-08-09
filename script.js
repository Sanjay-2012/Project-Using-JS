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


  // Load categories
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data => {
      data.categories.forEach(category => {
       
        // sidebar elements
        const li = document.createElement("li");
        li.textContent = category.strCategory;
        li.addEventListener("click", () => showCategoryDetails(category));
        categoryList.appendChild(li);

        // Create card in main 
        const card = document.createElement("div");
        card.classList.add("category-card");
        card.innerHTML = `
          <img src="${category.strCategoryThumb}" />
          <p>${category.strCategory}</p>
        `;
        card.addEventListener("click", () => showCategoryDetails(category));
        categoriesContainer.appendChild(card);
      });
    });




