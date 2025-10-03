window.addEventListener("load", () => {
  fetch("/templates/index.html") // adjust based on folder
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });
      }
    })
    .catch(err => console.error("Error loading navbar:", err));
});