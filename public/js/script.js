function toggleMenu() {
  const menuIcon = document.getElementById("menuBtn");
  const menu = document.getElementById("sideMenu");
  const body = document.body;

  menuIcon.classList.toggle("change");
  menu.classList.toggle("open");
  body.classList.toggle("no-scroll"); // Ngăn hoặc khôi phục cuộn khi mở/đóng menu
}

function navigateToSection(event) {
  event.preventDefault();  // Prevent the default anchor behavior

  const targetId = event.target.getAttribute("href");  // Get the href value
  const targetSection = document.querySelector(targetId);  // Find the target section by ID

  if (targetSection) {
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Close the menu after clicking
    toggleMenu();
  }
}
