// Selecting elements
const navMenu = document.querySelector(".nav-menu");

// Smooth Scrolling for navigation

navMenu.addEventListener("click", (e) => {
  e.preventDefault();
  const sectionId = e.target.getAttribute("href");
  console.log(e.target.classList);

  if (!e.target.classList.contains("nav-link")) {
    return;
  }

  document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
});
