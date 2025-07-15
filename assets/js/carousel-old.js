
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const dotsContainer = carousel.querySelector(".carousel-dots");
    const prevBtn = carousel.querySelector(".carousel-arrow.mfp-arrow-left");
    const nextBtn = carousel.querySelector(".carousel-arrow.mfp-arrow-right");

    let currentSlide = 0;

    // Limpa qualquer dot existente antes de criar novo
    dotsContainer.innerHTML = "";

    // Cria um dot para cada slide
    slides.forEach(() => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function updateCarousel(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        updateCarousel(currentSlide);
      });

      nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel(currentSlide);
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentSlide = i;
        updateCarousel(currentSlide);
      });
    });

    // Inicializa
    updateCarousel(currentSlide);
  });
});
