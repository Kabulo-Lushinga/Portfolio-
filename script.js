document.addEventListener("DOMContentLoaded", function () {
  // Fade-in effect for h2 sections on scroll
  window.addEventListener("scroll", function () {
    document.querySelectorAll("h2").forEach((section) => {
      if (section.getBoundingClientRect().top < window.innerHeight - 100) {
        section.style.opacity = "1";
      }
    });
  });

  // Bottom menu toggle (only if there is a menu toggle button)
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "";
  document.querySelector("header").appendChild(menuToggle);

  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission example
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
  });
});

//loading Spinners

  document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Stop immediate navigation

      const icon = this.querySelector('i');
      const originalClass = icon.className;
      const url = this.dataset.url;

      // Switch to spinner
      icon.className = 'fas fa-spinner spinner';

      // Delay navigation
      setTimeout(() => {
        window.location.href = url;
      }, 1500); // 1.5 seconds delay
    });
  });

  const downloadBtn = document.getElementById('downloadCvBtn');
  const toast = document.getElementById('toast');
  const icon = document.getElementById('cv-icon');

  downloadBtn.addEventListener('click', (e) => {
    // Optional: show spinner effect
    icon.innerHTML = '<i class="fas fa-spinner spinner"></i> Downloading...';

    // Show toast notification
    toast.classList.remove('hidden');

    // Reset after a few seconds
    setTimeout(() => {
      icon.innerHTML = 'Download my CV';
      toast.classList.add('hidden');
    }, 3000);
  });