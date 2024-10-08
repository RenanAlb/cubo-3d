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

// const moveCubo = (e) => {
//   const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//   const clientY = e.touches ? e.touches[0].clientY : e.clientY;

//   // Mover cubo
//   const targetX = (clientY / window.innerHeight) * 360 - 180;
//   const targetY = (clientX / window.innerWidth) * 360 - 180;

//   x += (targetX - x) * 0.1;
//   y += (targetY - y) * 0.1;

//   cubo.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

//   // Position mouse
//   mouseX = clientX;
//   mouseY = clientY;
// };

document.addEventListener('mousemove', (e) => {
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  // Mover cubo
  const targetX = (clientY / window.innerHeight) * 360 - 180;
  const targetY = (clientX / window.innerWidth) * 360 - 180;

  x += (targetX - x) * 0.1;
  y += (targetY - y) * 0.1;

  cubo.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

  // Position mouse
  mouseX = clientX;
  mouseY = clientY;
});
document.addEventListener('touchstart', (e) => {
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  // Mover cubo
  const targetX = (clientY / window.innerHeight) * 360 - 180;
  const targetY = (clientX / window.innerWidth) * 360 - 180;

  x += (targetX - x) * 0.1;
  y += (targetY - y) * 0.1;

  cubo.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

  // Position mouse
  mouseX = clientX;
  mouseY = clientY;
});
document.addEventListener('touchmove', (e) => {
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  // Mover cubo
  const targetX = (clientY / window.innerHeight) * 360 - 180;
  const targetY = (clientX / window.innerWidth) * 360 - 180;

  x += (targetX - x) * 0.1;
  y += (targetY - y) * 0.1;

  cubo.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

  // Position mouse
  mouseX = clientX;
  mouseY = clientY;
});


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