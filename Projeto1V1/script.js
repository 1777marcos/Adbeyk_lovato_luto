const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const fileInput = document.getElementById('file-input');

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        video.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// Update progress bar as the video plays
video.addEventListener('timeupdate', () => {
    const progressPercent = (video.currentTime / video.duration) * 100;
    progress.value = progressPercent;
});

// Seek video when progress bar changes
progress.addEventListener('input', () => {
    video.currentTime = (progress.value / 100) * video.duration;
});

// Adjust volume
volume.addEventListener('input', () => {
    video.volume = volume.value;
});

// Load selected video file
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        video.src = videoURL;
        video.load();
        video.play();
        playPauseBtn.textContent = '⏸️';
    }
});