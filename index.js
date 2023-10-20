const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector(".slides");
const prevButton = carousel.querySelector("#prevButton");
const nextButton = carousel.querySelector("#nextButton");

let slideIndex = 0;

prevButton.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 0;
  }
  updateSlidePosition();
});

nextButton.addEventListener("click", () => {
  slideIndex++;

  if (
    slides.offsetWidth >
    (slides.children.length - slideIndex) * (305 + 22) + 300
  ) {
    slideIndex = 0;
  }
  updateSlidePosition();
});

function updateSlidePosition() {
  let slidePosition = -slideIndex * (305 + 22);
  slides.style.transform = `translateX(${slidePosition}px)`;
}

// Touch slider
let slideCount = slides.children.length;
let startX = 0;
let endX = 0;
let isDragging = false;
const windowWidht = window.screen.width;

function touchStart() {
  return function (event) {
    startX = event.touches[0].clientX;
    isDragging = true;
  };
}

function touchMove(event) {
  if (isDragging) {
    endX = event.touches[0].clientX;
  }
}

function touchEnd() {
  isDragging = false;
  let movedBy = startX - endX;

  if (movedBy > 0 && slideIndex < slideCount - 1) {
    slideIndex++;
  }

  if (movedBy < 100 && slideIndex > 0) {
    slideIndex--;
  }

  updateSlidePosition();
}

if (windowWidht <= 768) {
  slides.addEventListener("touchstart", touchStart(0));
  slides.addEventListener("touchmove", touchMove);
  slides.addEventListener("touchend", touchEnd);
}
