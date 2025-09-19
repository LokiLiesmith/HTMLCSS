// // Example: log when the page is ready
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Bootstrap Playground Cheat Sheet loaded ✅");

//   // Example: attach a click handler to modal button
//   const modalBtn = document.querySelector('[data-bs-target="#exampleModal"]');
//   if (modalBtn) {
//     modalBtn.addEventListener("click", () => {
//       console.log("Modal button clicked 🎉");
//     });
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#cvCarousel");
  const prev = carousel.querySelector(".carousel-control-prev");
  const next = carousel.querySelector(".carousel-control-next");

  carousel.addEventListener("slid.bs.carousel", (event) => {
    const total = carousel.querySelectorAll(".carousel-item").length;
    const index = event.to; // index of the new active slide

    // Reset both controls
    prev.classList.remove("at-edge");
    next.classList.remove("at-edge");

    if (index === 0) {
      // First slide (Mark) → disable prev
      prev.classList.add("at-edge");
    } else if (index === total - 1) {
      // Last slide (Sergei) → disable next
      next.classList.add("at-edge");
    }
  });
});