const video = document.getElementById("video-player");
const playButton = document.getElementById("play");
const skips = document.getElementById("skips");

window.addEventListener("DOMContentLoaded", function () {
    InitialiseVideoPlayer();
})

function InitialiseVideoPlayer() {
    playButton.addEventListener("click", playVideo)

    skips.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            handleActiveClick(button)
            SkipToTime(parseInt(button.dataset.time))
        })
    })
}

function playVideo() {
    if (video.paused) {
        video.play();
        playButton.textContent = "Pause";
    } else {
        video.pause();
        playButton.textContent = "Play";
    }
}

function handleActiveClick(element) {
    const activeButton = skips.querySelector("button.active")
    if(!activeButton) return;

    activeButton.classList.toggle("active");
    element.classList.toggle("active");
}

function SkipToTime(time) {
    video.currentTime = time;
    video.pause();
}