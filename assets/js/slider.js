let currentSlide = 0;
const slides = document.querySelectorAll("#slider .slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
});

document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  showSlide(currentSlide);
});

showSlide(currentSlide);
