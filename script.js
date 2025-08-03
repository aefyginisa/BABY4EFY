const flap = document.getElementById('flap');
const paper = document.getElementById('paper');
const buttons = document.getElementById('buttons');

const flapOpenSound = document.getElementById('flapOpenSound');
const slideOutSound = document.getElementById('slideOutSound');
const slideInSound = document.getElementById('slideInSound');
const flapCloseSound = document.getElementById('flapCloseSound');

function showPaper() {
  flap.classList.remove('flap-close');
  flap.classList.add('flap-open');
  flapOpenSound.currentTime = 0;
  flapOpenSound.play();

  setTimeout(() => {
    paper.classList.remove('hide');
    paper.classList.add('show');
    slideOutSound.currentTime = 0;
    slideOutSound.play();
    buttons.style.opacity = '0';
    buttons.style.pointerEvents = 'none';
  }, 800);
}

function hidePaper() {
  paper.classList.remove('show');
  paper.classList.add('hide');
  slideInSound.currentTime = 0;
  slideInSound.play();

  setTimeout(() => {
    flap.classList.remove('flap-open');
    flap.classList.add('flap-close');
    flapCloseSound.currentTime = 0;
    flapCloseSound.play();
    buttons.style.opacity = '1';
    buttons.style.pointerEvents = 'auto';
  }, 1100);
}

function returnToEnvelope() {
  hidePaper();
}

function avoidClick() {
  const noButton = document.getElementById("noButton");
  const parent = noButton.parentElement;

  const maxX = parent.clientWidth - noButton.offsetWidth;
  const maxY = parent.clientHeight - noButton.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}
