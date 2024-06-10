document.addEventListener("DOMContentLoaded", function() {
    const hiddenText = document.getElementById("hiddenText");
    const audioPlayer = document.getElementById("audioPlayer");

    hiddenText.addEventListener("click", function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
});