const video = document.getElementById("video-player");
const playButton = document.getElementById("play");

window.addEventListener("DOMContentLoaded", function () {
    InitialiseVideoPlayer();
})

function InitialiseVideoPlayer() {
    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playButton.textContent = "Pause";
        } else {
            video.pause();
            playButton.textContent = "Play";
        }
    })
}