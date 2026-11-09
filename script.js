
/* ==========================================
   1. MOBILE NAVIGATION
   Opens and closes the navigation menu
   when the mobile menu button is selected.
   ========================================== */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {

  const isOpen = navigation.classList.toggle("active");

  menuButton.setAttribute("aria-expanded", isOpen);

  menuButton.textContent = isOpen ? "✕" : "☰";

});


/* ==========================================
   2. CLOSE MOBILE MENU AFTER NAVIGATION
   Closes the menu when a customer selects
   one of the navigation links.
   ========================================== */

document.querySelectorAll(".main-nav a").forEach(link => {

  link.addEventListener("click", () => {

    navigation.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.textContent = "☰";

  });

});


/* ==========================================
   3. AUTOMATIC COPYRIGHT YEAR
   Updates the footer year automatically.
   ========================================== */

document.getElementById("current-year").textContent =
  new Date().getFullYear();
