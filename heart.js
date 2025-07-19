const container = document.getElementById('heart-container');
const heartTypes = ['dark-pink', 'light-pink', 'white'];
let heartCount = 0;
const maxHearts = 80;
let typeIndex = 0;

function createHeart(x = null, y = null, isBurst = false) {
  if (!isBurst && heartCount >= maxHearts) return;

  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.classList.add(heartTypes[typeIndex % heartTypes.length]);
  typeIndex++;

  const screenMin = Math.min(window.innerWidth, window.innerHeight);
  const baseSize = screenMin * 0.2;
  const size = Math.random() * baseSize + baseSize * 0.5;
  heart.style.width = size + 'px';
  heart.style.height = (size * 0.9) + 'px';

  if (x === null && y === null) {
    const zone = Math.floor(Math.random() * 3);
    let left;
    if (zone === 0) {
      left = Math.random() * (window.innerWidth * 0.3);
    } else if (zone === 1) {
      left = window.innerWidth * 0.35 + Math.random() * (window.innerWidth * 0.3);
    } else {
      left = window.innerWidth * 0.7 + Math.random() * (window.innerWidth * 0.3);
    }

    const clampedLeft = Math.min(window.innerWidth - size, Math.max(0, left));
    heart.style.left = `${clampedLeft}px`;
    heart.style.top = `${window.innerHeight}px`;
  } else {
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
  }

  const duration = isBurst ? (Math.random() * 1 + 2) : (Math.random() * 4 + 8);
  heart.style.animationDuration = duration + 's';
  heart.style.animationDelay = '0s';

  container.appendChild(heart);
  heartCount++;

  setTimeout(() => {
    heart.remove();
    heartCount--;
  }, duration * 1000);
}

function startHeartAnimation() {
  createHeart();
  const next = Math.random() * 300 + 150;
  setTimeout(startHeartAnimation, next);
}

function burstHearts(x, y) {
  for (let i = 0; i < 8; i++) {
    const offsetX = (Math.random() - 0.5) * 80;
    const offsetY = (Math.random() - 0.5) * 80;
    createHeart(x + offsetX, y + offsetY, true);
  }
}

window.addEventListener('load', startHeartAnimation);
window.addEventListener('resize', () => {
  container.innerHTML = '';
  heartCount = 0;
});
window.addEventListener('click', (e) => {
  burstHearts(e.clientX, e.clientY);
});
