const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const skipButton = document.getElementById('skip-button');

playPauseButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = 'Play';
  }
});

skipButton.addEventListener('click', () => {
  audioPlayer.currentTime += 10; // Skip 10 seconds
});
