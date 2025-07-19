const envelope = document.getElementById('envelope');
const flap = document.getElementById('flap');
const ribbon = document.getElementById('ribbon');
const message = document.getElementById('message');
const centerRibbon = document.getElementById('centerRibbon');
const overlayVideo = document.getElementById('overlayVideo');

let opened = false;

envelope.addEventListener('click', () => {
  if (opened) return;

  // Fade out center ribbon and top video
  centerRibbon.style.opacity = '0';
  overlayVideo.style.opacity = '0';

  // Fade out cross ribbon
  ribbon.style.opacity = '0';

  // Open flap
  flap.style.transform = 'rotateX(-120deg)';

  // Show message
  message.style.opacity = '1';
  message.style.transform = 'translateY(0)';

  opened = true;
});

