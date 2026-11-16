const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  hamburgerBtn.classList.toggle("active", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
});

// Close the drawer after a navigation link is selected.
document.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  });
});
