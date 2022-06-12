const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

/* Setting up the canvas size to match the window size */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* Globals */
const particlesArray = [];

/* Particles Class */
class Particles {
  constructor() {
    (this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`),
      (this.size = Math.floor(Math.random() * 10)),
      (this.x = Math.floor(Math.random() * canvas.width)),
      (this.y = Math.floor(Math.random() * canvas.height)),
      (this.dx = Math.floor(Math.random() * 5 - 2.5)),
      (this.dy = Math.floor(Math.random() * 5 - 2.5));
  }
  draw() {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

function initiate() {
  for (let i = 0; i < 50; i++) {
    particlesArray.push(new Particles());
  }
}

initiate();

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();
