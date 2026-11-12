function togglePaper() {

    const paper = document.getElementById("paper");

    paper.classList.toggle("out");

}

const carouselSlides = new Map();

function moveSlide(direction, carouselSelector = ".carousel") {
    const carousel = document.querySelector(carouselSelector);
    const track = carousel?.querySelector("[class^='carousel-track']");
    const window = carousel?.querySelector("[class^='carousel-window']");
    const firstImage = track?.querySelector("img");

    if (!track || !window || !firstImage) {
        return;
    }

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const imageWidth = firstImage.getBoundingClientRect().width + gap;
    const maxOffset = Math.max(0, track.scrollWidth - window.clientWidth);
    const maxSlide = Math.ceil(maxOffset / imageWidth);
    let currentSlide = carouselSlides.get(carouselSelector) || 0;

    currentSlide = (currentSlide + direction + maxSlide + 1) % (maxSlide + 1);
    carouselSlides.set(carouselSelector, currentSlide);

    track.style.transform =
        "translateX(-" + Math.min(currentSlide * imageWidth, maxOffset) + "px)";
}

const music = document.getElementById("music");
const musicImage = document.getElementById("music-image");

function toggleMusic() {

    music.addEventListener("ended", function() {
    musicImage.classList.remove("playing");
});

    if (music.paused) {

        music.play();
        musicImage.classList.add("playing");

    } else {

        music.pause();
        musicImage.classList.remove("playing");

    }

}
    
