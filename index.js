const cubo = document.querySelector('.cubo');

let x = -30;
let y = -30;
let scale = 0;
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.12;
let eneableBigDivMouse = false;

// Mouse
const divMouse = document.createElement('div');
divMouse.classList.add('mouse');

document.addEventListener('mouseenter', () => {
  document.body.appendChild(divMouse);
});

// Animação mouse
const animateCursor = () => {
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;

  divMouse.style.top = `${cursorY}px`;
  divMouse.style.left = `${cursorX}px`;

  requestAnimationFrame(animateCursor);
}
// Animação mouse
animateCursor();

const moveCubo = () => {
  // Mover cubo
  x = (e.clientY / window.innerHeight) * 360 - 180;
  y = (e.clientX / window.innerWidth) * 360 - 180;

  cubo.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  cubo.style.zoom = `${scale}%`;

  // Position mouse
  mouseX = e.clientX;
  mouseY = e.clientY;
};

document.addEventListener('mousemove', moveCubo);
document.addEventListener('touchstart', moveCubo);
document.addEventListener('touchmove', moveCubo);


// Zoom scroll
document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  scale = (1 + scrollY / 1000) * 100;
  cubo.style.zoom = `${scale}%`;
});

// Click cubo
cubo.addEventListener('click', () => {
  eneableBigDivMouse = eneableBigDivMouse == false ? true : false;

  if (eneableBigDivMouse == false) {
    divMouse.style.width = '150px';
    divMouse.style.height = '150px';
    divMouse.style.borderRadius = '50%';
    divMouse.innerHTML = '';
  } else {
    divMouse.style.width = '100%';
    divMouse.style.height = '100dvh';
    divMouse.style.borderRadius = '0';
    divMouse.innerHTML = `
      <h1>O PODER DO HTML, CSS E JAVASCRIPT</h1>
      <p>UNIÃO DE DESIGN, CORES E INTERATIVIDADE</p>
    `;
  }
});