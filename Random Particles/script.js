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
      (this.size = Math.floor(Math.random() * 10));
  }
}
