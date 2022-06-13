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
    (this.color =
      /*`#${Math.floor(Math.random() * 16777215).toString(16)}`)*/ "#fff"),
      (this.size = Math.random() * 10),
      (this.x = Math.random() * canvas.width),
      (this.y = Math.random() * canvas.height),
      (this.dx = Math.random() * 5 - 2.5),
      (this.dy = Math.random() * 5 - 2.5);
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

    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.dy = -this.dy;
    }
  }
}

function initiate() {
  for (let i = 0; i < 200; i++) {
    particlesArray.push(new Particles());
  }
}

initiate();

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();

    for (let j = 0; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 70) {
        ctx.beginPath();
        ctx.strokeStyle = particlesArray[i].color;
        ctx.lineWidth = 0.3;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();
