document.addEventListener('DOMContentLoaded', function() {
    // This gets the audio element in order to play, pause, and set volume
    const audio = document.getElementById('background-music');
    const musicIcon = document.getElementById('musicIcon');
    const unmuteButton = document.getElementById('unmuteButton');
    audio.volume = 0.05;

    if (unmuteButton) {
        unmuteButton.addEventListener('click', function() {
            if (audio.muted === false) {
                audio.muted = true;
                musicIcon.src = "/Muted.png";
            } else {
                audio.muted = false;
                musicIcon.src = "/Unmuted.png";
            }
        });
    }
});