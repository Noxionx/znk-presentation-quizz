/**
 * @author Florent Gadé
 */
let width = window.innerWidth;
let height = window.innerHeight;

const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;

const ctx = canvas.getContext('2d');
ctx.canvas.width = width;
ctx.canvas.height = height;

// Resize handler
function resize () {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  ctx.canvas.width = width;
  ctx.canvas.height = height;
}

function getRange (rangeStep) {
  return 100 + (30 * Math.sin((rangeStep / 360) * 2 * Math.PI));
}

function drawPath (delay, rangeStep) {
  const t = 5;
  const offset = height / 2;

  ctx.beginPath();
  const range = getRange(rangeStep);
  for (let i = 0; i <= width; i += 10) {
    const p = 2 * Math.PI * (1 / t);
    const y = (range * Math.sin(((i + delay) / 360) * p)) + offset;
    if (i === 0) {
      ctx.moveTo(0, y);
    }
    ctx.lineTo(i + 1, y);
  }
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#888888';
  ctx.stroke();
}

let i = 0;
const amount = 0.5;
const step = 2;
let rangeStep = 0;
function animate () {
  i = (i + step) % 3600;
  rangeStep = (rangeStep + amount) % 3600;
  ctx.clearRect(0, 0, width, height);
  drawPath(i, rangeStep);
  drawPath((i + 214), (rangeStep + 89));
  drawPath((i + 410), (rangeStep + 243));
  /* eslint-disable */
  requestAnimationFrame(animate);
  /* eslint-enable */
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.firstChild) {
    document.body.insertBefore(canvas, document.body.firstChild);
  } else {
    document.body.appendChild(canvas);
  }

  animate();

  window.addEventListener('resize', resize);
});
