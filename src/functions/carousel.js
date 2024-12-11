export function carousel(carouselTrackSelector, nextButtonSelector, prevButtonSelector) {
    let currentIndex = 0;
    const d = document;
    const track = d.querySelector(carouselTrackSelector);
    const items = track.querySelectorAll(".carousel-item");
    const nextButton = d.querySelector(nextButtonSelector);
    const prevButton = d.querySelector(prevButtonSelector);
    const totalItems = items.length;

    if (!track || !nextButton || !prevButton) {
        console.error("Uno o más elementos no fueron encontrados:", { track, nextButton, prevButton });
        return;
    }

    const updateCarousel = () => {
        const offset = -currentIndex * 100; // Desplazamiento horizontal
        track.style.transform = `translateX(${offset}%)`;
    };

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // Inicializar el carrusel
    updateCarousel();
}
