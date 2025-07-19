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
  // Optional: fade out background and envelope
  const envelopeWrapper = document.querySelector('.envelope-wrapper');
  const heartContainer = document.getElementById('heart-container');
  const bgGlow = document.querySelector('.bg-glow');

  if (envelopeWrapper) envelopeWrapper.style.display = 'none';
  if (heartContainer) heartContainer.style.opacity = '0';
  if (bgGlow) bgGlow.style.opacity = '0';

  // Show fullscreen video
  if (fullscreenVideo) {
    fullscreenVideo.style.display = 'block';

fullscreenVideo.play().catch((error) => {
  console.error('Video play failed:', error);
});
  }
});
