// Simple form handler for contact page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "Sending...";
      setTimeout(() => {
        status.textContent = "Message sent successfully! ✅";
        form.reset();
      }, 1200);
    });
  }
});
