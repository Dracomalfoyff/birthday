const envelope = document.getElementById('envelope');
const flap = document.getElementById('flap');
const ribbon = document.getElementById('ribbon');
const message = document.getElementById('message');
const centerRibbon = document.getElementById('centerRibbon');
const overlayVideo = document.getElementById('overlayVideo');
const startBtn = document.getElementById('start-btn');
const fullscreenVideo = document.getElementById('fullscreenVideo');

let opened = false;

// Envelope click: open envelope, fade out video & ribbons
envelope.addEventListener('click', () => {
  if (opened) return;

  // Fade out video and ribbons
  if (centerRibbon) centerRibbon.style.opacity = '0';
  if (overlayVideo) overlayVideo.style.opacity = '0';
  if (ribbon) ribbon.style.opacity = '0';

  // Open flap
  flap.style.transform = 'rotateX(-120deg)';

  // Show message
  message.style.opacity = '1';
  message.style.transform = 'translateY(0)';

  opened = true;
});

// Start button click: show fullscreen video
startBtn.addEventListener('click', () => {
  const fullscreenVideo = document.getElementById('fullscreenVideo');

  if (fullscreenVideo) {
    fullscreenVideo.style.visibility = 'visible';
    fullscreenVideo.style.opacity = '1';
    fullscreenVideo.style.pointerEvents = 'auto';

    fullscreenVideo.play().catch((err) => {
      console.error("Video playback failed:", err);
    });
  }
});
