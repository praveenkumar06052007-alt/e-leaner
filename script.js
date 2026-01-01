function updateProgress(value) {
    const progressFill = document.getElementById("progressFill");
    progressFill.style.width = value + "%";
    progressFill.innerText = value + "%";
}

// 🎥 VIDEO JAVASCRIPT
const video = document.getElementById("courseVideo");

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

