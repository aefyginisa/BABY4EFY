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
  textPage.classList.remove('show');
  textPage.classList.add('hide');
  longLetterPage.classList.remove('show');
  longLetterPage.classList.add('hide');

  slideInSound.currentTime = 0;
  slideInSound.play();

  setTimeout(() => {
    flap.classList.remove('flap-open');
    flap.classList.add('flap-close');

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
  const btn = noButton;
  const maxX = container.clientWidth - btn.offsetWidth;
  const maxY = container.clientHeight - btn.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  btn.style.position = 'absolute';
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY + 200}px`;
}

function goToTextPage() {
  paper.classList.remove('show');
  paper.classList.add('hide');
  longLetterPage.classList.remove('show');
  longLetterPage.classList.add('hide');

  setTimeout(() => {
    textPage.classList.remove('hide');
    textPage.classList.add('show');
  }, 400);
}

function goToImagePage() {
  textPage.classList.remove('show');
  textPage.classList.add('hide');

  setTimeout(() => {
    paper.classList.remove('hide');
    paper.classList.add('show');
  }, 400);
}

function goToLongLetterPage() {
  textPage.classList.remove('show');
  textPage.classList.add('hide');

  setTimeout(() => {
    longLetterPage.classList.remove('hide');
    longLetterPage.classList.add('show');
  }, 400);
}
