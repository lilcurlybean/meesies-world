function togglePaper() {

    const paper = document.getElementById("paper");

    paper.classList.toggle("out");

}

let currentSlide = 0;

function moveSlide(direction) {

    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-track img");

    const imageWidth = 230 + 20;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 3;
    }

    if (currentSlide > 3) {
        currentSlide = 0;
    }

    track.style.transform =
        "translateX(-" + (currentSlide * imageWidth) + "px)";
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
    

