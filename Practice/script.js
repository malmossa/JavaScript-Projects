const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let x = Math.floor(Math.random() * canvas.width);
let y = Math.floor(Math.random() * canvas.height);
let dx = Math.random() * 8 - 5;
let dy = Math.random() * 8 - 5;
const radius = 10;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw circle
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  x += dx;
  y += dy;

  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy;
  }

  requestAnimationFrame(animate);
}

animate();
