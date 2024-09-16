let currentSlide = 0;

function moveCarousel(direction) {
    const carouselItems = document.querySelectorAll('.carousel-item');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = carouselItems.length - 1;
    } else if (currentSlide >= carouselItems.length) {
        currentSlide = 0;
    }

    carouselItems.forEach((item, index) => {
        item.style.display = (index === currentSlide) ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    moveCarousel(0); // Initialize carousel with the first slide visible
});
