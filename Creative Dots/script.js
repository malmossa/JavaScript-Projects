const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* Globals */
const mouse = {
  x: undefined,
  y: undefined,
};

let dotsArray = [];

/* Event Listeners */
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* Class */
class Dot {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 15;
    this.directionX = Math.random() * 3 - 1.5;
    this.directionY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.directionX;
    this.y += this.directionY;
  }

  drawCircle() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* Functions */
function init() {
  for (let i = 0; i < 100; i++) {
    dotsArray.push(new Dot());
  }
}
init();

function createDots() {
  for (let i = 0; i < dotsArray.length; i++) {
    dotsArray[i].update();
    dotsArray[i].drawCircle();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createDots();
  requestAnimationFrame(animate);
}

animate();
