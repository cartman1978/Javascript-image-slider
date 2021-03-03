const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");
const container = document.querySelector(".container");

const drag = (e) => {
  let xPos = e.layerX;
  before.style.width = xPos + 'px';
  slider.style.left = xPos + 'px';
  
}

container.addEventListener('mousemove', drag);