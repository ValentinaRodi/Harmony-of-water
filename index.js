const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const prevButton = carousel.querySelector('#prevButton');
const nextButton = carousel.querySelector('#nextButton');
const windowWidth = window.screen.width;

let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  }
  updateSlidePosition();
});

nextButton.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }
  updateSlidePosition();
});

function updateSlidePosition() {
  let slidePosition;
  (windowWidth > 375) ? slidePosition = -slideIndex * (305+22): slidePosition = -slideIndex * 300;
  slides.style.transform = `translateX(${slidePosition}px)`;
  console.log(slidePosition)
  console.log(slideIndex)
  console.log(slideWidth)
}


