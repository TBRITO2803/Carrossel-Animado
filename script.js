const slides = document.querySelectorAll('.list-itens');
const prev = document.querySelector('.back');
const next = document.querySelector('.next');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[n].style.display = 'block';
}

// Initial display
showSlide(currentSlide);

// Event listener for next button
next.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

// Event listener for prev button
prev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});


