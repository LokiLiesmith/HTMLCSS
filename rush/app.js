// Example: log when the page is ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("Bootstrap Playground Cheat Sheet loaded ✅");

  // Example: attach a click handler to modal button
  const modalBtn = document.querySelector('[data-bs-target="#exampleModal"]');
  if (modalBtn) {
    modalBtn.addEventListener("click", () => {
      console.log("Modal button clicked 🎉");
    });
  }
});
