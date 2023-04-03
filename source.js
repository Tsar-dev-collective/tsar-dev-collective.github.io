
const carousel = document.querySelector('.carousel-container ul');
const tributeGames = carousel.querySelectorAll('li');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
let maxIndex = tributeGames.length - 1;
let itemWidth = tributeGames[0].offsetWidth;
let containerWidth = carousel.offsetWidth;
let itemsPerPage = Math.floor(containerWidth / itemWidth);

if (tributeGames.length <= itemsPerPage) {
  prevButton.style.display = 'none';
  nextButton.style.display = 'none';
}

nextButton.addEventListener('click', () => {
  if (currentIndex >= maxIndex - itemsPerPage + 1) {
    return;
  }
  currentIndex++;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    return;
  }
  currentIndex--;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});