// Toggle menu for mobile
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("open");
}

// Add event listener for hamburger icon
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Simple form validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert("Please fill out all fields.");
      }
    });
  }

  // Optional: Lightbox placeholder functionality
  const projectImages = document.querySelectorAll("#projects img");
  projectImages.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.top = 0;
      modal.style.left = 0;
      modal.style.width = "100vw";
      modal.style.height = "100vh";
      modal.style.background = "rgba(0, 0, 0, 0.8)";
      modal.style.display = "flex";
      modal.style.alignItems = "center";
      modal.style.justifyContent = "center";
      modal.style.zIndex = "1000";

      const enlarged = document.createElement("img");
      enlarged.src = img.src;
      enlarged.style.maxWidth = "80%";
      enlarged.style.maxHeight = "80%";
      modal.appendChild(enlarged);

      modal.addEventListener("click", () => document.body.removeChild(modal));
      document.body.appendChild(modal);
    });
  });
});
