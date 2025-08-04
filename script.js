const flap = document.getElementById('flap');
const paper = document.getElementById('paper');
const textPage = document.getElementById('textPage');
const longLetterPage = document.getElementById('longLetterPage');
const buttons = document.getElementById('buttons');
const noButton = document.getElementById('noButton');

const flapOpenSound = document.getElementById('flapOpenSound');
const slideOutSound = document.getElementById('slideOutSound');
const slideInSound = document.getElementById('slideInSound');
const flapCloseSound = document.getElementById('flapCloseSound');

function showPaper() {
  flap.classList.add('flap-open');
  flapOpenSound.currentTime = 0;
  flapOpenSound.play();

  setTimeout(() => {
    paper.classList.add('show');
    slideOutSound.currentTime = 0;
    slideOutSound.play();
    buttons.style.opacity = '0';
    buttons.style.pointerEvents = 'none';
  }, 800);
}

function hidePaper() {
  paper.classList.remove('show');
  textPage.classList.remove('show');
  longLetterPage.classList.remove('show');

  slideInSound.currentTime = 0;
  slideInSound.play();

  setTimeout(() => {
    flap.classList.remove('flap-open');
    flapCloseSound.currentTime = 0;
    flapCloseSound.play();
    buttons.style.opacity = '1';
    buttons.style.pointerEvents = 'auto';
  }, 800);
}

function returnToEnvelope() {
  hidePaper();
}

function moveNoButton() {
  const container = document.querySelector('.container');
  const maxX = container.clientWidth - noButton.offsetWidth;
  const maxY = container.clientHeight - noButton.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY + 200}px`;
}

function goToTextPage() {
  paper.classList.remove('show');
  longLetterPage.classList.remove('show');

  setTimeout(() => {
    textPage.classList.add('show');
  }, 400);
}

function goToImagePage() {
  textPage.classList.remove('show');

  setTimeout(() => {
    paper.classList.add('show');
  }, 400);
}

function goToThirdPage() {
  textPage.classList.remove('show');

  setTimeout(() => {
    longLetterPage.classList.add('show');
  }, 400);
}
