function toggleMenu() {
  const menuIcon = document.getElementById("menuBtn");
  const closeIcon = document.getElementById("close");
  const showIcon = document.getElementById("show");
  const closeLogo = document.getElementById("logo-close");
  const showLogo = document.getElementById("logo-show");
  const menu = document.getElementById("sideMenu");
  menuIcon.classList.toggle("change");
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    closeIcon.style.display = "none";
    showIcon.style.display = "block";
    closeLogo.style.display = "none";
    showLogo.style.display = "block";

  } else {
    closeIcon.style.display = "block";
    showIcon.style.display = "none";
    closeLogo.style.display = "block";
    showLogo.style.display = "none";
  }
}

function navigateToSection(event) {
  event.preventDefault();  // Prevent the default anchor behavior

  const targetId = event.target.getAttribute("href");  // Get the href value
  const targetSection = document.querySelector(targetId);  // Find the target section by ID

  if (targetSection) {
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({behavior: "smooth"});

    // Close the menu after clicking
    toggleMenu();
  }
}
