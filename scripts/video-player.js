const video = document.getElementById("video-player");
const playButton = document.getElementById("play");
const skips = document.getElementById("skips");

const pauseSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`
const playSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`

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
    video.addEventListener("click", playVideo)
}

function playVideo() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = playSVG;
    } else {
        video.pause();
        playButton.innerHTML = pauseSVG;
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
    playButton.innerHTML = pauseSVG;
}